import db from "@/models";
import bcrypt from "bcrypt";

export async function getAllUsers(){
    const {User} = db;
    const users = await User.findAll();
    return users;
}

export async function createUser(request){
    const body = await request.json();
    const {username,password,email} = body;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await db.User.create({username,password:hashedPassword,email});
    return user;
}