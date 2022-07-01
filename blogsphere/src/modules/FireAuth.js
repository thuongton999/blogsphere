import firebaseApp from "./Firebase";
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();

function querySuccessful(successful = true, mdata = "", errorCode, errorMessage) {
    return {
        successful: successful,
        mdata: mdata,
        error: errorCode && `Error: ${errorCode}\n${errorMessage}`
    }
}
async function registerWithEmailAndPassword(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
        return querySuccessful(true, user);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return querySuccessful(false, "", errorCode, errorMessage);
    }
}
async function logInWithEmailAndPassword(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return querySuccessful(false, "", errorCode, errorMessage);
    }
}
async function logOut() {
    try {
        const user = await signOut(auth);
        // Sign out successful
        return querySuccessful(true, user);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // An error happened
        return querySuccessful(false, "", errorCode, errorMessage);
    }
}
async function verifyEmail(user) {
    if (user.emailVerified) return querySuccessful(true, user);
    return await sendEmailVerification(user);
}

export { logInWithEmailAndPassword, registerWithEmailAndPassword, verifyEmail, logOut };