import { useEffect,useState } from "react";

export function usePostTitle(){

}
export function useFetch(url){
    const [finalData,setFinalData] = useState({});
async function  getDetails (){
    const response = await fetch(url)
    const json = await response.json();
    setFinalData(json)
}
    useEffect(()=>{
        getDetails();
    },[])

    return {
        finalData
    }
}