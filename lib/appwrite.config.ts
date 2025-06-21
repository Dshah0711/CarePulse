import { Client, Account, Databases, Storage,Messaging, Teams, ID, Users } from "node-appwrite";
import * as sdk from "node-appwrite";

// Environment Variables
export const PROJECT_ID = process.env.PROJECT_ID;
export const DATABASE_ID = process.env.DATABASE_ID;
export const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;
export const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID; 
export const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID || process.env.BUCKET_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT || process.env.ENDPOINT || "https://cloud.appwrite.io/v1";


const client = new Client();


if (!ENDPOINT) {
    console.error("Appwrite endpoint is not configured. Using default endpoint.");
}

if (!PROJECT_ID) {
    console.error("Appwrite project ID is not configured.");
}

if (!process.env.API_KEY) {
    console.error("Appwrite API key is not configured. Make sure your API key has the 'users.write' permission.");
}

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID || "")
    .setKey(process.env.API_KEY || "");


export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const teams = new Teams(client);
export const users = new Users(client);
export const messaging = new sdk.Messaging(client);


console.log("Appwrite client initialized with endpoint:", ENDPOINT);