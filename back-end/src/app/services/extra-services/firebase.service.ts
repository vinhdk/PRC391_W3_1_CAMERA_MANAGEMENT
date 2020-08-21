import { File, GetSignedUrlResponse, UploadResponse } from "@google-cloud/storage";
import admin from "firebase-admin";
import { environment } from "src/environments/environment";
import { PassThrough } from "stream";

export class FireBaseService {
    constructor() {
    }
    public init = async () => {
        await admin.initializeApp({
            credential: admin.credential.cert(require("src/assets/service-account.json")),
            databaseURL: environment.firebase.databaseURL,
        });
    }
    public useUploadFile = async (path: string, file: Express.Multer.File): Promise<UploadResponse> => {
        return this.useGetStorage().Bucket(environment.firebase.bucketUrl).upload(file.path, {
            destination: path + file.originalname,
            contentType: file.mimetype,
            gzip: true,
        });
    }
    public useUploadFileBase64 = async (path: string, data: string, type: string): Promise<any> => {
        const buffer = new PassThrough();
        buffer.end(Buffer.from(data.split(",")[1], "base64"));
        const file = this.useGetStorage().Bucket(environment.firebase.bucketUrl).file(path);
        buffer.pipe(file.createWriteStream({
            metadata: {
                contentType: type,
            },
        })).on("finish", () => {
            return "";
        });
    }
    public useDeleteFile = async (path: string): Promise<any[]> => {
        const file = this.useGetStorage().Bucket(environment.firebase.bucketUrl).file(path);
        return file.delete();
    }
    public useGetFile = async (path: string): Promise<GetSignedUrlResponse> => {
        const file = this.useGetStorage().Bucket(environment.firebase.bucketUrl).file(path);
        return file.getSignedUrl({
            action: "read",
            expires: "3000-10-10",
        });
    }
    private useGetStorage = () => {
        const Bucket = (name: string) => admin.storage().bucket(name);
        const Storage = () => admin.storage();
        return { Storage, Bucket };
    }
}
