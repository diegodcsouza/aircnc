const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);


//GET, POST, PUT, DELETE
//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição e delete)
//req.body = acessar corpo da requisição (para criação, edição)

// app.get('/', (req,res) =>{
//     return res.json({message:'Hello world2 - Semana Omnistack'})
// });

// app.post('/users', (req,res) =>{
//     return res.json({message:'Return list of users'})
// });

// app.get('/users', (req,res) =>{
//     return res.json({idade: req.query.idade})
// });

// app.put('/users/:id', (req,res) =>{
//     return res.json({id: req.params.id})
// });

// 

// app.post('/users2', (req,res) =>{
//     return res.json(req.body)
// });


routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings',BookingController.store)


module.exports = routes;