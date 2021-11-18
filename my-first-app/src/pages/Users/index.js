import React, {useState, useEffect} from "react";
import NavBar from "../../components/NavBar";

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(json => setUsers(json))

    }, [])

console.log("Users state", users)
    return (
        <div>
            <NavBar/>
            <h3>Users Page</h3>
            {
                users.map((item)=>{
                    return(
                        <div key={item.id}>
                            <p>{item.avatar}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}
