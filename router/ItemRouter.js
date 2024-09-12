import express from 'express'
import { createItem, deleteItem, getAllItem, updateItem } from '../controller/itemControler.js'
const RouterItem=express.Router()

RouterItem.get('/getItem',getAllItem)
// RouterItem.get('/find',getAllItem)
RouterItem.post('/createItem',createItem)
RouterItem.put('/updateItem/:id',updateItem)
RouterItem.delete('/deleteItem/:id',deleteItem)

export default RouterItem