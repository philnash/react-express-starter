CREATE DATABASE firestarter;

CREATE TABLE user(
    id VARCHAR(100) PRIMARY KEY,
    userrole VARCHAR(25),
    username VARCHAR(50),
    firstname VARCHAR(50),
    lastname VARCHAR (50),
    email VARCHAR(100),
    hashedPassword VARCHAR(100), 
    
    shipId FOREIGN KEY,  
    paymentmethodId FOREIGN KEY,
    orderId FOREIGN KEY,
    billingId FOREIGN KEY,

    CONSTRAINT fk_shipid FOREIGN KEY (shipid) REFERENCES shipping_address(id)
    CONSTRAINT fk_paymentmethodid FOREIGN KEY (paymentmethodid) REFERENCES payment_method(id)
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(id),
    CONSTRAINT fk_billingid FOREIGN KEY (biliingid) REFERENCES billing(id)
);  

CREATE TABLE inventory(
    product_id INTEGER PRIMARY KEY,

    productname VARCHAR(100) UNIQUE NOT NULL,
    productdescription VARCHAR(500),
    qtyinstock INTEGER DEFAULT=0,
    productimage IMAGE,
    price MONEY DEFAULT=0, 

    orderid FOREIGN KEY,
   
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(id)
);

CREATE TABLE shipping_address(
    id INTEGER PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    streetaddress VARCHAR(25) NOT NULL,
    addresslinetwo VARCHAR (25),
    city  VARCHAR(25) NOT NULL,
    shipstate VARCHAR(25) NOT NULL,
    zipcode INTEGER NOT NULL,
    phone INTEGER(25), 
    
    userid FOREIGN KEY,
    orderid FOREIGN KEY,
    CONSTRAINT fk_user FOREIGN KEY (userid) REFERENCES user(id),
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(id),
);

CREATE TABLE payment_method(
    id PRIMARY KEY,
    nameoncard VARCHAR(100),
    cardnumber INTEGER(25),
    expirationdate DATE,
    securitycode VARCHAR (25),
    nameofcard VARCHAR(25),
    
    orderId FOREIGN KEY,
    userId FOREIGN KEY,
    CONSTRAINT fk_userid FOREIGN KEY (userId) REFERENCES user(id),
    CONSTRAINT fk_orderid FOREIGN KEY (orderId) REFERENCES order(id)
);

CREATE TABLE order(
    id INTEGER PRIMARY KEY,
    datecreated TIMESTAMP,
    productname VARCHAR(255),
    quantitypurchased INTEGER,
    ordersubtotal MONEY,
    shippingcost MONEY,
    ordertax MONEY,
    ordertotal MONEY,
    shipped BOOLEAN, 
    expdeliverydate DATE, 
    
    userid FOREIGN KEY,
    paymentmethodid FOREIGN KEY,
    billingid FOREIGN KEY,
    shipid FOREIGN KEY,
    productid FOREIGN KEY,
    
    CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES user(id),
    CONSTRAINT fk_paymentmethodid FOREIGN KEY (paymentmethodid) REFERENCES payment_method(id)
    CONSTRAINT fk_billingid FOREIGN KEY (biliingid) REFERENCES billing(id)
    CONSTRAINT fk_shipid FOREIGN KEY (shipid) REFERENCES shipping_address(id)
    CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES inventory(product_id)
);

CREATE TABLE billing(
    id PRIMARY KEY,
    billingname VARCHAR(100),
    billingaddress VARCHAR(100),
    billinglinetwo VARCHAR(100),
    billingcity VARCHAR(100),
    billingstate VARCHAR(25),
    billingzipcode INTEGER,
    
    userid FOREIGN KEY,
    orderid FOREIGN KEY,
    CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES user(id),
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(id),
);


