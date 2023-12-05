const { error } = require('console');
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const port = 3000;
const server = http.createServer(app);

const conect1 = mysql.createConnection({
    host: "localhost",
    database: "dbform",
    user: "root",
    password: "",
});
conect1.connect(function (err) {
    if (err) {
        throw error;
    } else {
        console.log("Conexion exitosa")
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('MGP'));
app.use("/html", express.static("html"));
app.use("/css", express.static("css"));
app.use("/img", express.static("img"));
app.use("/js", express.static("js"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", function(req, res){
    var filePath = path.join(__dirname, "html/index.html");
    res.sendFile(filePath);
});

/*Formulario*/
app.post("/enviar", function (req, res) {
    const datos = req.body;
    let Carrera = datos.Carrera;
    let NombresApellidos = datos.NombresApellidos;
    let Dni = datos.Dni;
    let FechaNacimiento = datos.FechaNacimiento;
    let Email = datos.Email;
    let Contraseña = datos.Contraseña;
    let Terminos = datos.Terminos;

    let Enviar = "INSERT INTO Estudiante (Carrera, NombresApellidos, Dni, FechaNacimiento, Email, Contraseña, Terminos) VALUES ('" + Carrera + "','" + NombresApellidos + "','" + Dni + "','" + FechaNacimiento + "','" + Email + "','" + Contraseña + "','" + Terminos + "')";

    conect1.query(Enviar, function (error) {
        if (error) {
            throw error
        } else {
            console.log("Datos Registado")
            console.log(Object.entries(datos)); 
            res.redirect(req.get('referer'));
        }
    });
});

server.listen(port, function () {
    console.log("El servidor funcionando en http://localhost:" + port);
});
