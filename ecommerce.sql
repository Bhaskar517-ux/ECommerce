

CREATE DATABASE ECommerce;
USE ECommerce;

show TABLES;

CREATE TABLE customers(
           cust_id INT PRIMARY KEY,
           first_name VARCHAR(50) NOT NULL,
           last_name VARCHAR(50) NOT NULL, 
           email VARCHAR(50),
           contact_number VARCHAR(50),
           adress VARCHAR(50)
    );


       CREATE TABLE payment(
       payment_id INT PRIMARY KEY,
       cust_id INT NOT NULL,
       cc_number VARCHAR(16) NOT NULL,
       cc_type VARCHAR(20) NOT NULL,
       cc_exp_month INT NOT NULL,
       cc_exp_year INT NOT NULL,
       cc_sec_code INT NOT NULL
    
    );
      CREATE TABLE address (
      address_id INT PRIMARY KEY,
      cust_id INT NOT NULL,
      address VARCHAR(95) NOT NULL,
      city VARCHAR(35) NOT NULL,
      state VARCHAR(15) NOT NULL,
      pin_code INT NOT NULL,
      country VARCHAR(74) NOT NULL,
      address_type VARCHAR(8) NOT NULL

      );

       CREATE TABLE order_details (
        order_id INT PRIMARY KEY,
        cust_id INT NOT NULL,
        payment_id INT NOT NULL,
        payment_date DATE,
        order_date DATE NOT NULL,
        ship_date DATE,
        ship_method VARCHAR(30) NOT NULL,
        fullfillment_date DATE,
        cancellation_date DATE,
        return_date DATE

      );
       CREATE TABLE product_catalog (
      product_id INT PRIMARY KEY,
      product_name VARCHAR(50) NOT NULL,
      vendor_id INT NOT NULL,
      manufacturer_id VARCHAR(10) NOT NULL,
      color_id INT,
      size_id INT,
      unit_id INT,
      price_per_unit INT,
      weight_per_unit INT
      );

CREATE TABLE Vendors (
      vendor_id INT PRIMARY KEY,
      vendor_catalog_no VARCHAR(50) NOT NULL,
      vfirst_name VARCHAR(20) NOT NULL,
      vlast_name VARCHAR(20) NOT NULL,
      vmobileno VARCHAR(20) NOT NULL,
      vemail VARCHAR(20) NOT NULL,
      vaddress VARCHAR(20) NOT NULL
     );

CREATE TABLE Manufactures(
      manufacturer_id INT PRIMARY KEY,
      size  VARCHAR(20) NOT NULL,
      quantity INT,
      price_per_unit INT,
      weight_per_unit INT,
      manufacturer_date DATE  NOT NULL
      );
