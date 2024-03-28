import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUser = useLoaderData();
    const [users,setUsers] = useState(loadedUser);

    const handleAddDelete = _id => {

        console.log('delete',_id)

        fetch(`http://localhost:5000/users/${_id}`,{

            method:"DELETE"

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.deletedCount > 0){
                alert("delete sucessfully")

                const reamaing = users.filter(user => user._id !== _id);

                setUsers(reamaing);

            }
            
        })

       




    }


    return (
        <div>
            <h2>{users.length}</h2>

            <div>
                {
                    users?.map(user => <p key={user._id}>{user._id}:{user.name}:{user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                     <button onClick={()=> handleAddDelete(user._id)} >X</button></p> )
                }
            </div>
        </div>
    );
};

export default Users;