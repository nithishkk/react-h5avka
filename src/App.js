import React, { useEffect, useState }  from "react";

function DynamicApiOPtion() {
    const [values,setValues]=useState([])
    const [options,setOptions]=useState()
    const [email, setEmail] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((data)=>data.json()).then((val)=>setValues(val))
    },[])

    console.log(values,"values")
    return(
        <div>
            <select onChange={(e)=>setOptions(e.target.value)}>
                {
                    values.map((opts,i)=><option key={i}>{opts.name}</option>)
                }
            </select>
             { options ? <input

autoFocus

type="email"

value={email}

onChange={(e) => setEmail(e.target.value)}

/>:""} 
{options}
        </div>
    );
}

export default DynamicApiOPtion;