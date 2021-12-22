import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { addMember, getMembers } from "./actions/memberAction";


function App(props) {
  
  const [members,setMembers] = useState([]);
  useEffect(async () => {
    const data = await props.getMembers();
    setMembers(data);
  }, [])
  const handleAddMember = () => {
    const name = document.getElementById('name').value;
    const module = document.getElementById('module').value;
    props.addMember({'name':name,'module':module})
  }
  return (
    <div className="App">
      {members.map((member)=>{
        return(
          <div key={member.id}>
            - <b>{member.name}</b>: {member.module}
          </div>
        )
      })}
      <form>
        <b>Enter Name: </b><input id='name' type = "text"/><br/>
        <b>Enter Module: </b><input id='module' type = "text"/><br/>
        <button onClick = {handleAddMember} type = "button">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    members: state.members
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addMember: (newMember)=>addMember(newMember,dispatch),
    getMembers: ()=>getMembers(dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
