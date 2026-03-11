package com.techservices.crud_fullstack_angular.services;

import com.techservices.crud_fullstack_angular.entity.Customer;
import com.techservices.crud_fullstack_angular.exception.ResourceNotFoundException;
import com.techservices.crud_fullstack_angular.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findById(Integer id) {
        Customer customer = customerRepository.findById(id).orElseThrow(
                () ->{
                    throw new ResourceNotFoundException("Customer con id " +id+ " no se encuentra");
                }
        );
        return customerRepository.findById(id).get();
    }

    @Override
    public void deleteById(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public Customer update(Customer customer) {
        return customerRepository.save(customer);
    }
}
