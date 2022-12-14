CREATE DATABASE firestarter;

CREATE TABLE user(
    userid INTEGER SERIAL=500 PRIMARY KEY,
    userrole VARCHAR(25),
    username VARCHAR(50),
    firstname VARCHAR(50),
    lastname VARCHAR (50),
    email VARCHAR(100),
    password TEXT, 
    
    shipid FOREIGN KEY,  
    paymentmethodid FOREIGN KEY,
    orderid FOREIGN KEY,
    billingid FOREIGN KEY,

    CONSTRAINT fk_shipid FOREIGN KEY (shipid) REFERENCES shipping_address(shipid)
    CONSTRAINT fk_paymentmethodid FOREIGN KEY (paymentmethodid) REFERENCES payment_method(paymentmethodid)
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(orderid),
    CONSTRAINT fk_billingid FOREIGN KEY (biliingid) REFERENCES billing(billingid)
);  

CREATE TABLE inventory(
    productid INTEGER PRIMARY KEY,
    orderid FOREIGN KEY,

    productname VARCHAR(100) UNIQUE NOT NULL,
    productdescription VARCHAR(500),
    qtyinstock INTEGER DEFAULT=0,
    productimage IMAGE,
    price MONEY DEFAULT=0, 

    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(orderid)
);

CREATE TABLE shipping_address(
    shipid INTEGER PRIMARY KEY,
    userid FOREIGN KEY,
    orderid FOREIGN KEY,
    
    fullname VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    streetaddress VARCHAR(25) NOT NULL,
    addresslinetwo VARCHAR (25),
    city  VARCHAR(25) NOT NULL,
    shipstate VARCHAR(25) NOT NULL,
    zipcode INTEGER NOT NULL,
    phone INTEGER(25), 
    
    CONSTRAINT fk_user FOREIGN KEY (userid) REFERENCES user(userid),
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(orderid),
);

CREATE TABLE payment_method(
    paymentmethodid SERIAL PRIMARY KEY,
    nameoncard VARCHAR(100),
    cardnumber INTEGER(25),
    expirationdate DATE,
    securitycode VARCHAR (25),
    nameofcard VARCHAR(25),
    
    orderid FOREIGN KEY,
    userid FOREIGN KEY,
    CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES user(userid),
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(orderid)
);

CREATE TABLE order(
    orderid INTEGER PRIMARY KEY SERIAL=5000,

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
    
    CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES user(userid),
    CONSTRAINT fk_paymentmethodid FOREIGN KEY (paymentmethodid) REFERENCES payment_method(paymentmethodid)
    CONSTRAINT fk_billingid FOREIGN KEY (biliingid) REFERENCES billing(billingid)
    CONSTRAINT fk_shipid FOREIGN KEY (shipid) REFERENCES shipping_address(shipid)
    CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES inventory(productid)
);

CREATE TABLE billing(
    billingid PRIMARY KEY,
    userid FOREIGN KEY,
    orderid FOREIGN KEY,

    billingname VARCHAR(100),
    billingaddress VARCHAR(100),
    billinglinetwo VARCHAR(100),
    billingcity VARCHAR(100),
    billingstate VARCHAR(25),
    billingzipcode INTEGER,
    
    CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES user(userid),
    CONSTRAINT fk_orderid FOREIGN KEY (orderid) REFERENCES order(orderid),
);


