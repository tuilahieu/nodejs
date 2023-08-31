
CREATE DATABASE database_03_hieu;
USE database_03_hieu;

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_code VARCHAR(50) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    original_price DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    quantity_in_stock INT NOT NULL,
    usage_instructions TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_attributes (
    attribute_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    attribute_name VARCHAR(255) NOT NULL,
    attribute_value VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO products (product_id, product_code, product_name, original_price, sale_price, description, quantity_in_stock, usage_instructions)
VALUES
    (1, 'P1', 'Product 1', 100, 80, 'Description 1', 50, 'Usage instructions 1'),
    (2, 'P2', 'Product 2', 150, 120, 'Description 2', 30, 'Usage instructions 2'),
    (3, 'P3', 'Product 3', 200, 180, 'Description 3', 20, 'Usage instructions 3');

INSERT INTO product_attributes (product_id, attribute_name, attribute_value)
VALUES
    (1, 'Color', 'Red'),
    (1, 'Size', 'Medium'),
    (1, 'Weight', '500g'),
    (2, 'Color', 'Blue'),
    (2, 'Size', 'Large'),
    (2, 'Weight', '750g'),
    (3, 'Color', 'Green'),
    (3, 'Size', 'Small'),
    (3, 'Weight', '300g');

SELECT * FROM products;

SELECT attribute_name, attribute_value FROM product_attributes WHERE product_id = 1;

SELECT * FROM products WHERE quantity_in_stock > 0;
