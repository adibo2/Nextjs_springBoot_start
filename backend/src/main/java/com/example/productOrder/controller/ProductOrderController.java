package com.example.productOrder.controller;
import com.example.productOrder.model.Customer;
import com.example.productOrder.model.ProductOrder;
import com.example.productOrder.repository.CustomerRepository;
import com.example.productOrder.repository.ProductOrderRepository;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.POST, RequestMethod.GET})
public class ProductOrderController {
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    ProductOrderRepository productOrderRepository;
    private final KieContainer kieContainer;

    public ProductOrderController() {
        KieServices kieServices = KieServices.Factory.get();
        kieContainer = kieServices.getKieClasspathContainer();
    }

    @PostMapping("/productOrdersDrools")
    public ResponseEntity<ProductOrder> processOrder(@RequestBody Map<String, String> data) {
        try {
            //Prepare Data
            Customer customer = new Customer(data.get("name"), data.get("email"));
            customerRepository.save(customer);
            ProductOrder po = new ProductOrder(customer);
            po.setCustomer(customer);

            productOrderRepository.save(po);

            //Create new Drools session
            KieSession kieSession = createDroolsSession();

            // Inserting Facts into Working Memory
            kieSession.insert(po);

            //Setting Globals
            Set<String> workingDays = new HashSet<>();
            workingDays.add("Tuesday");
            workingDays.add("Wednesday");
            workingDays.add("Friday");

            kieSession.setGlobal("workingDays", workingDays);

            //Firing Rules
            kieSession.fireAllRules();

            productOrderRepository.save(po);

            //Disposing Session
            kieSession.dispose();

            //Sending Response to Frontend
            return ResponseEntity.ok(po);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    private KieSession createDroolsSession() {
        return kieContainer.newKieSession("rulesKSession");
    }
}
