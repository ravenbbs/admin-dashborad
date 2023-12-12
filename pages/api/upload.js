import multiparty from 'multiparty';
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from 'next/server';
// import {writeFile} from "fs/promises"
// import path from "path";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });


export default async function handle(req, res) {
 
const form = new multiparty.Form();
const {fields,files} = await new Promise((resolve,reject) => {
  form.parse(req, (err, fields, files) => {
    if (err) reject(err);
    resolve({fields,files});
  });
});
console.log('length:', files.file.length);

for(const file of files.file){
  const ext = file.originalFilename.split('.').pop();
  const newFilename = Date.now() + '.' + ext;
  console.log({ext, file})

}
return console.log('ok')

}


export const config = {
  api: {bodyParser: false}
}
