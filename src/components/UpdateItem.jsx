import React, {useState, useEffect} from "react";

const API_URI=`http://${import.meta.env.VITE_API_URI}/doors`;
const ITEM_ID="1";

const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    const[updatedValue, setUpdatedValue]=useState(item?.name||"")
    const[message, setMessage]=useState("");
    // 2. Create a function to handle the form submission
    const handleChange=(e)=>{
        setUpdatedValue(e.target.value);
    };

    // 3. Create a function to handle the form input changes
    const handleUpdate=()=>{
        fetch(`http://localhost:8000/doors/${item.id}`,{
            method:"PUT",
            headers:{
                "Conent-Type":"application/json",
            },
            body: JSON.stringify({name: updatedValue}),
        })
        .then((res)=>res.json())
        .then((data)=>{
            setMessage("Item updated sucessfully!");
        })
        .catch((err)=>{
            console.log("Error: ", err);
            setMessage("Error updating item. ")
        });
    };
    // your code here

    return(
        <div>
            <h2>Updated Item</h2>
            <input type="text" value={updatedValue} onChange={handleChange}/>
            <button onClick={handleUpdate}>Update</button>
            {message &&<p>{message}</p>}
        </div>
    );
};

export default UpdateItem;