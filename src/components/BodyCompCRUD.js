//import {} from "firebase/firstore";
import { useState, useEffect } from "react";
import { db} from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";


function BodyCompCRUD() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newBMR, setNewBMR] = useState(0);
  const [newHRmax, setNewHRmax] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createBodyComp = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge), bmr: Number(newBMR), hrmax: Number(newHRmax) });
  };

  

  

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1};
    await updateDoc(userDoc, newFields);
  };


  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="BodyCompCRUD">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="BMR..."
        onChange={(event) => {
          setNewBMR(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="HRmax..."
        onChange={(event) => {
          setNewHRmax(event.target.value);
        }}
      />
      <button onClick={createBodyComp}>Body Composition Results</button>
      {users.map((user) => {
        return (
          <div>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>BMR: {user.bmr}</h3>
            <h3>HRmax: {user.hrmax}</h3>{" "}
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>

            <button
              onClick={() => {
                updateUser(user.id,user.bmr);
              }}
            >
              {" "}
              Increase BMR
            </button>


            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            ></button>
          </div>
        );
      })}
    </div>
  );
}

export default BodyCompCRUD;
