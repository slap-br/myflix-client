import { React } from "react";


 export const userInfo = ({ email, name }) => {
    return(
        <>
        <h4> Your Info</h4>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        </>
    )
 }
 export default userInfo;