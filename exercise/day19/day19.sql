CREATE DATABASE database_02_hieu;

use database_02_hieu;

CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    customer_phone VARCHAR(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP

);

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255),
    product_code VARCHAR(50),
    product_price DECIMAL(10, 2),
    created_at TIMESTAMP,
    updated_at TIMESTAMP

);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_status VARCHAR(50),
    order_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    order_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP

);

CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    total_price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

