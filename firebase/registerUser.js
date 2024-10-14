import { db } from "../firebase/Firebase";
import { collection, addDoc } from 'firebase/firestore';
import bcrypt from "bcryptjs";

async function registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const doc = await addDoc(collection(db, "users"), {
            username,
            passwordHash: hashedPassword,
            createdAt: new Date()
        });
        console.log("User registered with ID: ", doc.id);
    } catch (error) {
        console.log("Error is: " + error);
    }
}

export { registerUser };
