import { initializeApp } from "firebase/app";
const config = {
    "apiKey": "AIzaSyBHvlyj8O5reDnXZMBFa8cDd-4zqKEZbNE",
    "authDomain": "blogsphere-ade36.firebaseapp.com",
    "projectId": "blogsphere-ade36",
    "storageBucket": "blogsphere-ade36.appspot.com",
    "messagingSenderId": "863077447092",
    "appId": "1:863077447092:web:6fa0345cf243b99352eee1"
};
const firebaseApp = initializeApp(config);
export default firebaseApp;