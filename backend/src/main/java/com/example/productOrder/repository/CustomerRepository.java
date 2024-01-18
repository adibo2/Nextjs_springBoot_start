package com.example.productOrder.repository;

import com.example.productOrder.model.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
}

