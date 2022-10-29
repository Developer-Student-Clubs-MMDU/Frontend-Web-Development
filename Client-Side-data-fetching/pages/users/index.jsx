
import { useEffect, useState } from "react";

const UsersPage = () => {
    console.log("print");
    const [users, setUsers] = useState([]);

    console.log("Users", users);
    console.log("hello");
    useEffect(() => {


        async function fetchUsers() {
            const data = await fetch("https://dummyjson.com/users");

            setUsers(await data.json())

        }

        fetchUsers()

    }, [])



    return (
        <center>
            <div>
                <h1> Student Data</h1>
                <table style={{width: "100vw"}}>
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    {
                        users && users.users &&

                        users.users.map((user) => (

                            

                            <tbody key={user.id}>

                                <tr style={{textAlign:"center"}}> 

                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td> {user.maidenName} </td>
                                    <td>{user.lastName}</td>
                                    <td> {user.age}  </td>

                                </tr>
                                </tbody>


                    ))}
                </table>
            </div>

        </center>

    );

};
export default UsersPage;
