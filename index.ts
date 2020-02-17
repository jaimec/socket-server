import express from 'express';
import Server from './classes/server';
import Router from './routes/router';
import cors from 'cors';

import bodyParser from 'body-parser';


const server = Server.instance;

// BodyParser Ya no hace falta, lo trae express de serie
// server.app.use( bodyParser.urlencoded({ extended: true }) );
// server.app.use( bodyParser.json() );
server.app.use( express.urlencoded({ extended: true }) );
server.app.use( express.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', Router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});

