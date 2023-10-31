import conf from '../conf.js'
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