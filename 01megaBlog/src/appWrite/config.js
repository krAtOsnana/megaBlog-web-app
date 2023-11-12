/**
    just like auth services we create this file for other configurations of 
    our user account 

 */

import conf from "../conf/conf";
import { Client,ID, Databases ,Storage ,Query, Account } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)

        this.account=new Account(this.client)

        this.databases=new Databases(this.client)

        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userID}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                 {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, {title,  content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }

    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                )
                return true;
        } catch (error) {
            console.log("appWrite server :: deletePost ::error",error);
            return false;
        }

    }

    async getPost(slug) {
            try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseID,
                    conf.appwriteCollectionID,
                    slug, 
                )
            } catch (error) {
                console.log("appWrite server :: getPost ::error",error);
                return false;
            }
    }

    async getPosts(queries = 
        [Query.equal("status","active")])
        {
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseID,
                    conf.appwriteCollectionID,
                    queries
                )
            } catch (error) {
                console.log("appWrite server :: getPosts ::error",error);
                return false;
            }
    }

    async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    conf.appwriteBucketID,
                    ID.unique(),
                    file,
                )
            } catch (error) {
                console.log("appWrite server :: uploadFile ::error",error);
                return false; 

            }
    }

    async deleteFile(fileId){
            try {
                return await this.bucket.deleteFile(
                    conf.appwriteBucketID,
                    fileId
                )
                return true;
            } catch (error) {
                console.log("appWrite server :: deleteFile ::error",error);
                return false;
            }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId,
            
        )
    }
}

const servise = new Service()

export default servise