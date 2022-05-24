import uploadFileToAwsS3 from './aws-s3-utils';
import { IncomingForm, Fields, Files, File } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { rejects } from 'assert';

// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  }
};

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
  
  const data: {fields: Fields, files: Files} =  await new Promise((resolve, reject) => {

    const form = new IncomingForm()  
    form.parse(req, async (err: any, fields: Fields, files: Files) => {
      //check if err or file exists in variable - uploadedFile
      if (err || !files || !files.uploadedFile)  {
        console.error(err);
        console.error(new Date() + ' Error in File Upload API - File not passed in variable uploadedFile fron frontend ??');
        reject('Error in File Upload API ');
      }
      resolve({fields, files})
    })
  });

  let file: File = data.files.uploadedFile as File;
  let fileContent = await fs.readFile(file.filepath);
  let fileName = uuidv4();
  let uploadedFileUrl = await uploadFileToAwsS3(fileContent, data.fields['file_type'] as string , fileName , file.mimetype || '')
  console.log(uploadedFileUrl)

  res.status(200).json({'msg': 'ok'})
}
