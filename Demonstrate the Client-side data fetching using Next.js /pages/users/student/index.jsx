
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
                <h1  style={{border:" solid 2px  #F1EBC7   " }}  > STUDENT MORE INFO </h1>
                <table style={{width: "100vw"}}>
                    <thead>
                    <tr>
                    <th style={{background:" green" }} > Student Id </th>
                        <th style={{background:" green" }} >  PHONE No.</th>
                        <th style={{background:" #30DF11 " }} >  Username </th>
                        <th style={{background:" #CDDF11  " }} >university</th>
                        
                    </tr>
                    </thead>
                    {
                        users && users.users &&

                        users.users.map((user) => (

                            

                            <tbody key={user.id}>

                                <tr style={{textAlign:"center"}}> 

                                <td  style={{border:" solid 2px #F1C7EA   " }}  >{user.id }</td>
                                     <td  style={{border:" solid 2px #F1C7EA   " }}  >{user.phone }</td>
                                    <td  style={{border:" solid 2px #F1C7EA   " }}  >{user.username} </td>
                                    <td  style={{border:" solid 2px #F1C7EA   " }}  >{user.university} </td>  
                                  
                                </tr>
                                </tbody>


                    ))}
                </table>
            </div>


            <footer>
            <a href="/users" style={{background:"red"}}  >
            <h2>Student Details &rarr;</h2>
            <p>click here to view student details</p>
          </a>
                  
                        <p>Powered  by Vikram   </p>
                
                </footer>



        </center>

    );

};
export default UsersPage;
