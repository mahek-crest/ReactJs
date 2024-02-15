import conf from "../conf/conf";
import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client()
  databases;
  // bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client)
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
        title, content, featuredImage, status, userId
      })

    } catch (error) {
      console.log('Config Service :: create post ::  ', error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
        title, content, featuredImage, status
      })
    } catch (error) {
      console.log('Config Service :: updatePost ::', error);
    }
  }
  // ---------------------
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)

      return true
    } catch (error) {
      console.log('Config Service :: deletePost ::  ', error);
      return false
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
    } catch (error) {
      console.log('Config Service :: getPost ::  ', error);
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
    } catch (error) {
      console.log('Config Service :: getPosts ::  ', error);
    }
  }

}


const service = new Service()
export default service