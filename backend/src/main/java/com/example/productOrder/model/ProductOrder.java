package com.example.productOrder.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class ProductOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @ManyToOne()
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;
    private Date processingDate;

    @PrePersist
    protected void onCreate() {
        orderDate = new Date();
    }

    public ProductOrder() {
    }

    public ProductOrder(Customer customer) {
        this.customer = customer;
    }

    public Long getId() {
        return Id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public Date getProcessingDate() {
        return processingDate;
    }

    public void setProcessingDate(Date processingDate) {
        this.processingDate = processingDate;
    }

}
