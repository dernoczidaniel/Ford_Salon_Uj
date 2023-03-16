CREATE DATABASE ford_salon
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_hungarian_ci;


CREATE TABLE ford_salon.users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  birthdate DATE NOT NULL,
  address VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)


ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;


CREATE TABLE ford_salon.payment (
  id INT(11) NOT NULL AUTO_INCREMENT,
  price INT(11) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;


CREATE TABLE ford_salon.extras (
  id INT(11) NOT NULL AUTO_INCREMENT,
  price INT(11) NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;


CREATE TABLE ford_salon.cars (
  id INT(11) NOT NULL AUTO_INCREMENT,
  color VARCHAR(50) NOT NULL,
  interiorcolor VARCHAR(50) NOT NULL,
  motor VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  userid INT(11) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;


CREATE TABLE ford_salon.salons (
  id INT(11) NOT NULL AUTO_INCREMENT,
  admin VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;



ALTER TABLE ford_salon.cars 
  ADD CONSTRAINT FK_cars_userid FOREIGN KEY (userid)
    REFERENCES ford_salon.users(id) ON DELETE NO ACTION;


CREATE TABLE ford_salon.users_payment (
  userid INT(11) NOT NULL,
  paymentid INT(11) NOT NULL,
  PRIMARY KEY (userid, paymentid)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;

ALTER TABLE ford_salon.users_payment 
  ADD CONSTRAINT FK_users_payment_paymentid FOREIGN KEY (paymentid)
    REFERENCES ford_salon.payment(id) ON DELETE NO ACTION;

ALTER TABLE ford_salon.users_payment 
  ADD CONSTRAINT FK_users_payment_userid FOREIGN KEY (userid)
    REFERENCES ford_salon.users(id) ON DELETE NO ACTION;

CREATE TABLE ford_salon.cars_extras (
  carid INT(11) NOT NULL,
  extraid INT(11) NOT NULL,
  PRIMARY KEY (carid, extraid)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;


ALTER TABLE ford_salon.cars_extras 
  ADD CONSTRAINT FK_cars_extras_carid FOREIGN KEY (carid)
    REFERENCES ford_salon.cars(id) ON DELETE NO ACTION;

ALTER TABLE ford_salon.cars_extras 
  ADD CONSTRAINT FK_cars_extras_extraid FOREIGN KEY (extraid)
    REFERENCES ford_salon.extras(id) ON DELETE NO ACTION;


CREATE TABLE ford_salon.cars_salons (
  carid INT(11) NOT NULL,
  salonid INT(11) NOT NULL,
  PRIMARY KEY (carid, salonid)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;


ALTER TABLE ford_salon.cars_salons 
  ADD CONSTRAINT FK_cars_salons_carid FOREIGN KEY (carid)
    REFERENCES ford_salon.cars(id) ON DELETE NO ACTION;

ALTER TABLE ford_salon.cars_salons 
  ADD CONSTRAINT FK_cars_salons_salonid FOREIGN KEY (salonid)
    REFERENCES ford_salon.salons(id) ON DELETE NO ACTION;


