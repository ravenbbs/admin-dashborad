import { Category } from "@/lib/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import mongoose from "mongoose";

export default async function handle(req, res){
const {method} = req

await mongooseConnect()

if (method === 'GET'){
  res.json(await Category.find() );
}


if (method === 'POST'){
  const {name} = req.body;
  const categoryDoc = await Category.create({name})
  res.json(categoryDoc);
}



}