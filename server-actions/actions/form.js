"use server"
import fs from 'fs/promises'

export const submitAction = async(e) => {
    const name = e.get("name");
    const address = e.get("address");

    console.log("Name:", name);
    console.log("Address:", address);

    let textFolder = await fs.writeFile("File.txt",`Name: ${name}\nAddress: ${address}`, 'utf8');
    console.log("File written successfully");
    

}