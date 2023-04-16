CREATE DATABASE ford_salon
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_hungarian_ci;


CREATE TABLE ford_salon.users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  address VARCHAR(50) NOT NULL,
  telefon VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  postalcode VARCHAR(50) NOT NULL,
  birthdate VARCHAR(50) NOT NULL,

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
  modelid INT(11) NOT NULL,
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

CREATE TABLE ford_salon.models (
  id INT(11) NOT NULL AUTO_INCREMENT,
  price INT(11) NOT NULL,
  name VARCHAR(50) NOT NULL,
  img_url varchar(255) NOT NULL,
  img_interior1 varchar(255) NOT NULL,
  img_interior2 varchar(255) NOT NULL,
  img_color1 varchar(255) NOT NULL,
  img_color2 varchar(255) NOT NULL,
  img_color3 varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  motor varchar(255) NOT NULL,
  fuel varchar(255) NOT NULL,
  species varchar(255) NOT NULL,


  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_hungarian_ci;

ALTER TABLE ford_salon.cars 
  ADD CONSTRAINT FK_cars_modelid FOREIGN KEY (modelid)
    REFERENCES ford_salon.models(id) ON DELETE NO ACTION;


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

SET FOREIGN_KEY_CHECKS=0;

USE ford_salon

INSERT INTO cars (color, interiorcolor) VALUES ('piros', 'piros'), ('fekete', 'fekete'), ('fehér', 'fehér');

INSERT INTO ford_salon.models(id, price, name, img_url, img_interior1, img_interior2, img_color1, img_color2, img_color3, description, motor, fuel, species) VALUES
(1, 10410000, 'FORD FOCUS TITANIUM', '../src/assets/img/Cars/Focus/Icon.png', '../src/assets/img/Cars/Focus/interior/black/black.jpg', '../src/assets/img/Cars/Focus/interior/white/white.jpg', '../src/assets/img/Cars/Focus/colors/black/black.png', '../src/assets/img/Cars/Focus/colors/white/white.png', '../src/assets/img/Cars/Focus/colors/red/red.png', '../description/Focus.txt','1.0l EcoBoost 125LE M6','Mild Hibrid', 'Családi'),
(2, 27850000, 'FORD MUSTANG MACH-E', '../src/assets/img/Cars/Mustang Mach-E/Icon.png', '../src/assets/img/Cars/Mustang Mach-E/interior/black/black.jpeg', '../src/assets/img/Cars/Mustang Mach-E/interior/white/white.jpeg', '../src/assets/img/Cars/Mustang Mach-E/colors/black/black.png', '../src/assets/img/Cars/Mustang Mach-E/colors/white/white.png', '../src/assets/img/Cars/Mustang Mach-E/colors/red/red.png', '../description/Mach-E.txt','Standard range (75kWh) 269LE RWD Automata sebességváltó Zéró károsanyag kibocsátás','Elektromos', 'Családi'),
(3, 22500000, 'FORD MUSTANG GT', '../src/assets/img/Cars/Mustang/Icon.png', '../src/assets/img/Cars/Mustang/interior/black/black.png', '../src/assets/img/Cars/Mustang/interior/white/white.png', '../src/assets/img/Cars/Mustang/colors/black/black.png', '../src/assets/img/Cars/Mustang/colors/white/white.png', '../src/assets/img/Cars/Mustang/colors/red/red.png', '../description/Mustang.txt','5.0l V8 450 LE 6 sebességes manuális','Benzin', 'Sport'),
(4, 18884900, 'FORD RANGER RAPTOR', '../src/assets/img/Cars/Ranger Raptop/Icon.png', '../src/assets/img/Cars/Ranger Raptop/interior/black/black.jpeg', '../src/assets/img/Cars/Ranger Raptop/interior/white/white.jpeg', '../src/assets/img/Cars/Ranger Raptop/colors/black/black.png', '../src/assets/img/Cars/Ranger Raptop/colors/white/white.png', '../src/assets/img/Cars/Ranger Raptop/colors/red/red.png', '../description/Raptor.txt','3.0 EcoBoost 288 LE 10 sebességes automata','Benzin', 'Terep'),
(5, 14160000, 'FORD S-MAX', '../src/assets/img/Cars/S-Max/Icon.png', '../src/assets/img/Cars/S-Max/interior/black/black.jpg', '../src/assets/img/Cars/S-Max/interior/white/white.jpg', '../src/assets/img/Cars/S-Max/colors/black/black.png', '../src/assets/img/Cars/S-Max/colors/white/white.jpeg', '../src/assets/img/Cars/S-Max/colors/red/red.png', '../description/S-max.txt','2.0L ECOBLUE 150LE ','Benzin', 'Családi'),
(6, 8670000, 'FORD PUMA', '../src/assets/img/Cars/Puma/icon1.jpg', '../src/assets/img/Cars/Puma/interior/black/black.jpg', '../src/assets/img/Cars/Puma/interior/white/white.png', '../src/assets/img/Cars/Puma/colors/black/black.jpg', '../src/assets/img/Cars/Puma/colors/white/white.jpg', '../src/assets/img/Cars/Puma/colors/red/red.png', '../description/Puma.txt','1.0l EcoBoost (125LE) 6 sebességes manuális','Mild Hibrid', 'Családi'),
(7, 11890000, 'FORD KUGA', '../src/assets/img/Cars/Kuga/icon1.jpg', '../src/assets/img/Cars/Kuga/interior/black/black.jpg', '../src/assets/img/Cars/Kuga/interior/white/white.png', '../src/assets/img/Cars/Kuga/colors/black/black.jpg', '../src/assets/img/Cars/Kuga/colors/white/white.jpg', '../src/assets/img/Cars/Kuga/colors/red/red.jpeg', '../description/Kuga.txt','1.5l EcoBoost 150LE M6 FWD','Hibrid', 'Családi'),
(8, 35572000, 'FORD EXPLORER', '../src/assets/img/Cars/Explorer/icon.png', '../src/assets/img/Cars/Explorer/interior/black/black.jpg', '../src/assets/img/Cars/Explorer/interior/white/white.png', '../src/assets/img/Cars/Explorer/colors/black/black.jpg', '../src/assets/img/Cars/Explorer/colors/white/white.png', '../src/assets/img/Cars/Explorer/colors/red/red.png', '../description/Explorer.txt','3.0l EcoBoost PHEV 457 LE 10 sebességes automata AWD','Plug-in Hibrid', 'Családi');


INSERT INTO extras(id, price, name) VALUES
(1, 100000, 'Tolatókamera'),
(2, 145000, 'ERGO üléscsomag'),
(3, 190000, 'Vonóhorog');


INSERT INTO users(id, name, email, password, address, telefon, city, postalcode, birthdate) VALUES
(1,'Teszt Elek','teszt@gmail.com','jelszo','tó út 21', '06302003042','Győr','9000', '2000.01.01');

