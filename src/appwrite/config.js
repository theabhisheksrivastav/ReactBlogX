import { Client, ID, Databases, Storage, Query } from 'appwrite';
import conf from '../conf/conf';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, status, userId, featuredImage }) {
        try {
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug,
                {
                title,
                content,
                status,
                userId,
                featuredImage
            });
            return post;
        } catch (error) {
            throw error;
        }
    }

    async updatePost( slug,{ title, content, status, featuredImage }) {
        try {
            const post = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage
                });
            return post;
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            const post = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug);
            return post;
        } catch (error) {
            throw error;
        }
    }

    async getPosts(slug) {
        try {
            const posts = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                );
            return posts;
        } catch (error) {
            throw error;
        }
    }

    async getAllPosts(queries = [Query.equal("status", "published")]) {
        try {
            const posts = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                );
            return posts;
        } catch (error) {
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            const response = await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getFilePreview(fileId) {
        try {
            const response = await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            return response;
        } catch (error) {
            throw error;
        }
    }
}

const service = new Service();
export default service;