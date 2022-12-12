CREATE DATABASE firestarter;

CREATE TABLE Users(
    UserID NOT NULL PRIMARY KEY SERIAL=500, 
    UserRole VARCHAR(25),
    Username VARCHAR(25),
    FirstName VARCHAR(25),
    LastName VARCHAR (25),
    Email VARCHAR(255),
    UserPassword VARCHAR(25)
);

CREATE TABLE Inventory(
    ProductID INTEGER PRIMARY KEY NOT NULL,
    ProductName VARCHAR(25) UNIQUE NOT NULL,
    ProductDescription VARCHAR(255),
    QtyInStock INTEGER,
    ProductImage IMAGE,
    Price INTEGER NOT NULL
);

CREATE TABLE Shipping_Addresses(
    UserID FOREIGN KEY,
    FullName VARCHAR(255) NOT NULL,
    Country VARCHAR(255) NOT NULL,
    StreetAddress VARCHAR(25) NOT NULL,
    AddressLineTwo VARCHAR (25),
    City  VARCHAR(25) NOT NULL,
    ShipState VARCHAR(25) NOT NULL,
    ZipCode INTEGER NOT NULL,
    Phone INTEGER(25), 
    -- CHECK (Country=USA),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Payment_Methods(
    UserID FOREIGN KEY,
    CardNumber INTEGER(25),
    NameOnCard VARCHAR(25),
    ExpirationDate VARCHAR(255),
    SecurityCode VARCHAR (25),
    NameOfCard VARCHAR(25),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Orders(
    OrderID INTEGER PRIMARY KEY NOT NULL SERIAL,
    UserID FOREIGN KEY,
    DateCreated TIMESTAMP,
    ProductID FOREIGN KEY,
    ProductName VARCHAR(255),
    QuantityPurchased INTEGER,
    OrderSubtotal INTEGER,
    ShippingCost INTEGER,
    OrderTax INTEGER,
    OrderTotal INTEGER,
    Shipped BOOLEAN, 
    ExpDeliveryDate DATE, 
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Inventory(ProductID)
);



