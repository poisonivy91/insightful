import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';

function BodyCompCRUD(){
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db,users)
    useEffect(() => {
       const getUsers = async () =>{
        const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))

       }
       getUsers()
    }, [])
    return <div className = "BodyCompCRUD">{users.map((user)=> {return <div><h3>Name: {user.name}</h3><h3>Age: {user.age}</h3></div>})}</div>;
}

export default BodyCompCRUD;