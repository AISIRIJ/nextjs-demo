"use client";
import {useEffect, useState} from "react";
import {Blog} from "@/app/renderings/ssr/page";

export default function Csr(){
   const [breeds,setBreeds]= useState(null);
   useEffect(()=>{
      fetch("https://dogapi.dog/api/v2/breeds")
          .then(res=>res.json())
          .then(breeds=>{
             setBreeds(breeds)
      })
   },[])

   return <div> Data : <pre>{JSON.stringify(breeds)}</pre> </div>
}