import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";


export class fileService {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.bucket = new Storage(this.client)
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)

    } catch (error) {
      console.log(' fileService :: uploadFile ::  ', error);
      return false
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
      return true
    } catch (error) {
      console.log(' fileService :: deleteFile ::  ', error);
      return false
    }
  }

  async getFilePreview(fileId) {
    try {
      return await this.getFilePreview(conf.appwriteBucketId, fileId)
    } catch (error) {
      console.log(' fileService :: getFilePreview ::  ', error);
      return false
    }
  }
}

const fileService = new fileService()
export default fileService