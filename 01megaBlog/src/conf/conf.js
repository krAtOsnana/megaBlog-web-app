const conf ={
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;

/**
    # in vite every environmenet variable must have a prefix of VITE_
    and in vite we imoprt environment variable (import.meta.env.EV_name)  


   # we make config file to import all EV in one file and export all of them 
    by just exporting a single file just like index.js file for components,

    
    # we parse them into string bcoz sometimes these variable can hold only numbers
    like '123123' so the can be treated as a number dataType .
    to avoide this problem we need to parse them into the String.


    
 */