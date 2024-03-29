import { Order } from "@/lib/models/Order";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  await mongooseConnect()

  res.json(await Order.find().sort({createdAt:-1}))
  
}