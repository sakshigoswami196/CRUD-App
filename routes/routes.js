import express from "express";
const route = express.Router();
import { homcontroller, createController } from "../controllers/homeController.js";
import { readController } from  '../controllers/readControllers.js';
import {editController , updateController, deleteController} from '../controllers/editController.js'

route.get('/',  homcontroller);
route.post('/', createController);
route.get('/read', readController);
route.get('/edit/:id', editController);
route.post('/update/:id', updateController);
route.get('/delete/:id', deleteController);


export default route;