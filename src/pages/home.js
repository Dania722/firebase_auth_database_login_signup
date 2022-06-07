import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../config/firebase/firebasedatabase";

function Home() {
    const param = useParams ();
    useEffect (()=>{
        if(param.id){
        console.log(    getData ("users ") );
        }

    } , [])
    return <>
    
    </>
}