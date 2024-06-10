import {Request,Response} from 'express';
import { ObjectId } from 'mongodb';

const collectionName = 'tenant';
const basePath = '/tenant'

export default {
    getAll:{
        path: `${basePath}`,
        httpMethod:"GET",
        function: async(req:Request,res:Response) => {
            const result = await req.db.collection(collectionName).find().toArray();
            return res.json(result)
        }
    },
    getById:{
        path: `${basePath}/:id`,
        httpMethod:"GET",
        function: async(req:Request,res:Response) => {
            const result = (await req.db.collection(collectionName).find({_id:ObjectId.createFromHexString(req.params.id)}).toArray())[0];
            return res.json(result)
        }
    },
}