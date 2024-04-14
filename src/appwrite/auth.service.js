import conf from '../conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password }) {
        try {
            const userAccount = await this.client.account.create(ID.unique, email, password);
            if (userAccount) {
                return this.loginAccount({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async loginAccount({ email, password }) {
        try {
           const session =  await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logoutAccount() {
        try {
            const logout = await this.account.deleteSession('current');
            return logout;
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService