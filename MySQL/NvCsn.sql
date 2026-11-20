CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE usuarios(
	-- atributo tipo_dato longitud_dato 
	id_usuario INT PRIMARY KEY auto_increment,
    nombre_usuario VARCHAR (20),
    apellido_usuario VARCHAR (20),
    fecha_nacimiento_usuarios DATE,
    email VARCHAR (100),
    clave VARCHAR (255)
);
-- inserta un solo usuario -- 
INSERT INTO usuarios (nombre_usuario, apellido_usuario,email,clave)
VALUES ("Leoardo","D´ caprio","leonito@gmail.com","D´caprio123");

-- inserta varios usuarios
INSERT INTO usuarios (nombre_usuario,apellido_usuario,email,clave)
VALUES	
("Margarita","crioyo","marcga@gamil.com","marga123"),
("Luis","Hurtado","hurtado@gamil.com","luis123"),
("JuanCamilo","Molina","juancamilo@gamil.com","juancam123"),
("JuanDavid","sanchez","juanDavida@gamil.com","juand23");


Select * from usuarios;


