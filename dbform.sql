DROP DATABASE dbform;
CREATE DATABASE dbform;
USE dbform;

CREATE TABLE Estudiante (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Carrera VARCHAR(50) NOT NULL,
    NombresApellidos VARCHAR(250) NOT NULL,
    Dni CHAR(8) NOT NULL,
    FechaNacimiento DATE NOT NULL,
    Email VARCHAR(150) NOT NULL,
    Contraseña VARCHAR(100) NOT NULL,
    Terminos CHAR(2) NOT NULL
);

SELECT * FROM Estudiante;
