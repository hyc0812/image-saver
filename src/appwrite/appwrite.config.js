// Import the Appwrite module
import { Appwrite } from "appwrite";

// Init your Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('62701902d61f8e064ef9') // Your project ID
;

export const storage = appwrite.storage
export const account = appwrite.account