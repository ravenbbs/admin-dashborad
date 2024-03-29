import { Product } from "@/lib/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();
  //await isAdminRequest(res,req)

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find().sort({createdAt:-1}));
    }
  }

  if (method === 'POST') {
    const {title,description,price,images,category,properties} = req.body;
    const productDoc = await Product.create({
      title,description,price,images,category: category || undefined ,properties,
    })
    res.json(productDoc);
  }

  if (method === 'PUT') {
    const {title,description,price,images,category,properties,_id} = req.body;
    await Product.updateOne({_id}, {title,description,price,images,category: category || undefined ,properties});
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
