/**
    we make this file for user authientication servicer like login/logout/signUp
    we use appWrite for backend as a service 
    we follow the documentation for making all of the authientication functions
    we make a class called authService 
    and in constructotr of that class we create client and account 
    so on when this class is call then and then only client and account is created 
    by doing this we save our resources
    we make an object of that class 
    eg.const authService=new AuthService();
    and then we export our object so that we can access all of the functions directly by usin
    . operator 
    eg- authService.createAccount

 */

import conf from '../conf/conf.js'
import { Client, Account ,ID} from 'appwrite';


export class AuthService{
    client =new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
            this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique() ,email ,password ,name)

            if (userAccount) {
                //login the user
                return this.userLogIn({email ,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    } 

    async userLogIn({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }catch(error){
            throw error;
        }

    }

    async getCurrentUser(){
        try {
           return await this.account.get()
        } catch (error) {
            console.log("appWrite service :: getCurrentUser :: error",error);
           // throw error
            }
            return null;
    }

    async userLogOut(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("appWrite server :: logout ::error",error);
        }
    }

}

const authService=new AuthService();


export default authService;