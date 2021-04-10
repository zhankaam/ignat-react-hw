import axios from "axios";

export const RequestAPI = {
   post(success: boolean){
     const pr = axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,{success: true})
         .then((res) => {
             return res.data
         })
         .catch((rej => {
             return rej.response.data.errorText
         }))
       return pr
   }
}