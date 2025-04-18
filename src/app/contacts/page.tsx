"use client";
import {useEffect, useState} from "react";

export default function Contacts(){
    const [messages,setMessages]=useState<string[]>([]);
    const [newMessage,setNewMessage]=useState<string>(null);


    useEffect(()=>{
        fetch("/api/contacts")
            .then((res)=>res.json())
            .then((data)=>{
                setMessages(data.contactData);
            })
    },[])

    const sendMessage= async ()=>{
        const response=await fetch("/api/contacts",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({messages:newMessage})
        })
        const data= await response.json();
        console.log(data[1]);
        setMessages(data[1].contactData);
    }
return (
    <div>
        <h1>Messages</h1>
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}

        </ul>
    <input onChange={(e)=>setNewMessage(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="type a message ..."/>
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    onClick={sendMessage}
    >Send Message</button>
    </div>);
}