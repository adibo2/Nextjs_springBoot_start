package com.example.productOrder.repository;

import com.example.productOrder.model.ProductOrder;
import org.springframework.data.repository.CrudRepository;

public interface ProductOrderRepository extends CrudRepository<ProductOrder, Long> {
}
