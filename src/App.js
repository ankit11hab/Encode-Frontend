import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [members,setMembers] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/member-list/')
    .then((response)=>{
      console.log(response.data);
      setMembers(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      {members.map((member)=>{
        return(
          <div>
            - <b>{member.name}</b>: {member.module}
          </div>
        )
      })}
    </div>
  );
}

export default App;
