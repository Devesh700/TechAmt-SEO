import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==="POST"){
        const {name,email,message}=req.body;
        console.log("contact information",{name,email,message})
        return res.status(200).json({success:true,message:"message sent succesfully"})
    } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}