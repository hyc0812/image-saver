// Import the Appwrite module
import { Appwrite } from "appwrite";

// Init your Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://10.244.223.44/v1') // Your Appwrite Endpoint
    .setProject('625da6a70473568b172a') // Your project ID
;

export const storage = appwrite.storage
export const account = appwrite.account