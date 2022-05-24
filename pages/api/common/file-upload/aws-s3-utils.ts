// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import S3 from 'aws-sdk/clients/s3'
import {PutObjectRequest, BucketName, Body, ContentType, ObjectKey, ContentDisposition} from 'aws-sdk/clients/s3'


const  AWS_BUCKET_NAME : string = process.env.AWS_S3_BUCKET_NAME || '';
const AWS_S3_REGION : string = process.env.AWS_S3_REGION || '';
const AWS_IAM_USER_KEY : string = process.env.AWS_S3_IAM_USER_KEY || '';
const AWS_IAM_USER_SECRET : string = process.env.AWS_S3_IAM_USER_SECRET || '';

const s3 = new S3({
    accessKeyId: AWS_IAM_USER_KEY,
    secretAccessKey: AWS_IAM_USER_SECRET,
    signatureVersion: 'v4',
    region: AWS_S3_REGION
});

const AWS_FILE_PATH = {
    KYC_DATA : 'kyc-data',
}

export default function uploadFileToAwsS3 (file: Buffer , awsFilePath: string, fileName: string, contentType: string) {
    var params: PutObjectRequest = {
        Bucket: AWS_BUCKET_NAME,
        Key: awsFilePath + '/' + fileName,
        Body: file,
        ContentType: contentType,
        ContentDisposition: 'attachment'
    };

    const preSignedUrl = s3.getSignedUrl('getObject', {
        Bucket: AWS_BUCKET_NAME,
        Key: awsFilePath + '/' + fileName,
    })

    return new Promise((resolve, reject) => {
        s3.putObject(params, (err, data) => {
            if (err) {
                console.error(new Date(), 'AWS :: S3 :: Error in uploading File...', err);
                return reject(err);
            }
            return resolve(preSignedUrl);
        });
    });   
}

