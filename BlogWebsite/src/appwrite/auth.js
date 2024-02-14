import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client()
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client)
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount) {
        // call login 
        this.login({ email, password })
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log('AppWrite Service :: create account :: ', error);
    }

  }

  async login({ email, password }) {
    try {
      const userLogin = await this.account.createEmailSession(email, password)
      return userLogin
    } catch (error) {
      console.log('AppWrite Service :: login account :: ', error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get()

    } catch (error) {
      console.log('AppWrite Service :: current user :: ', error);
    }

    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions()
    } catch (error) {
      console.log('AppWrite Service :: logout :: ', error);
    }
  }
}

const authService = new AuthService()

export default authService 