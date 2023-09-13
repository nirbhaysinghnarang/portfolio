import axios, { AxiosResponse } from "axios";

export async function fetchText(){
    return await axios.get("https://raw.githubusercontent.com/nirbhaysinghnarang/workout_log/main/log.txt")
    .then((response:AxiosResponse<any>)=>{       
        return (response.data)
    })
}


