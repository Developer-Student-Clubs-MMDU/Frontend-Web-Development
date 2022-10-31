
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
            <div style={{}} >
                <h1 style={{ border: " solid 2px  #EE0CC9  " }}  > STUDENT DATA</h1>
                <table style={{ width: "100vw" }}>
                    <thead>
                        <tr>
                            <th style={{ background: " red" }}   >Student ID</th>
                            <th style={{ background: " green" }} >  First Name</th>
                            <th style={{ background: " #30DF11 " }} >Gender</th>
                            <th style={{ background: " #CDDF11  " }} >AGE</th>
                            <th style={{ background: " #2DB2E3   " }} >Email Id</th>
                        </tr>
                    </thead>
                    {
                        users && users.users &&

                        users.users.map((user) => (



                            <tbody key={user.id}>

                                <tr style={{ textAlign: "center" }}>

                                    <td style={{ border: " solid 2px #F1C7EA   " }}  >{user.id}</td>
                                    <td style={{ border: " solid 2px #F1C7EA   " }}  >{user.firstName}  {user.maidenName} {user.lastName} </td>
                                    <td style={{ border: " solid 2px #F1C7EA   " }}  > {user.gender}</td>
                                    <td style={{ border: " solid 2px #F1C7EA   " }}  > {user.age} </td>
                                    <td style={{ border: " solid 2px #F1C7EA   " }}  > {user.email}  </td>

                                </tr>
                            </tbody>


                        ))}
                </table>
                <footer>
                    <a href="/users/student"  class="Vik" >
                        <h2>More info &rarr;</h2>
                        <p>click here to view student more informetion</p>
                        <p>Powered  by Vikram   </p>
                    </a>
                </footer>
            </div>

        </center>

    );

};
export default UsersPage;
