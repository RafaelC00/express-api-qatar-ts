import express, { Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {connectMongo} from './db';
import Pvp from './model/Pvp';

const bp = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//GET ALL PVPs
app.get('/pvps', async (req, res) => {
  const pvps = await Pvp.find(); 
  res.send(pvps);
} );

//ADD NEW PVP
app.post('/pvps', async (req, res) => {
  const { marca, presentacion, pvp, sku } = req.body;
  const newPvp = new Pvp({ marca, presentacion, pvp, sku });
  await newPvp.save();
  res.json(newPvp);
} );

//GET PVP BY ID
app.get('/pvps/:id', async (req, res) => {
  const pvp = await Pvp.findById(req.params.id);
  res.json(pvp);
} );

//UPDATE PVP
app.put('/pvps/:id', async (req, res) => {
  const { marca, presentacion, pvp, sku } = req.body;
  const newPvp = { marca, presentacion, pvp, sku };
  await Pvp.findByIdAndUpdate(req.params.id, newPvp);
  res.json({status: 'Pvp Updated'});
} );

//DELETE PVP
app.delete('/pvps/:id', async (req, res) => {
  await Pvp.findByIdAndRemove(req.params.id);
  res.json({status: 'Pvp Deleted'});
} );


app.listen(app.get('port') , () => console.log(`Server is running on port ${app.get('port')}`));

connectMongo();