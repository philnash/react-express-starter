// import { userInfo } from "os";
// import { createContext, useEffect, useState } from "react";
// export const CurrentUser = createContext()

// function CurrentUserProvider({ children }){

//     const [currentUser, setCurrentUser] = useState(null)

//     useEffect(() =>{
        
        //Use this code when the authentication route is done
        // {
        // const getLoggedInUser  = async () => {
//     let response = await fetch('http://localhost:5432/firestarter/authentication/profile', {
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//     })
//     let user = await response.json()
//     setCurrentUser(user)
// }

//         const getLoggedInUser(user){
//             return
//             setCurrentUser(user)
//         }
// getLoggedInUser()
//     }, [])

//     return (
//         <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
//             {children}
//         </CurrentUser.Provider>
//     )
// }

// export default CurrentUserProvider