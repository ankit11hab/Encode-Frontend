import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addMember, getMembers } from '../actions/action';

const Members = (props) => {
    const [members, setMembers] = useState([]);
    useEffect(async () => {
        const data = await props.getMembers();
        setMembers(data);
    }, [])
    const handleAddMember = async () => {
        const name = document.getElementById('name').value;
        const module = document.getElementById('module').value;
        const res = await props.addMember({ 'name': name, 'module': module });
        console.log(res);
        if (res.status === true)
            setMembers([...members, { 'name': name, 'module': module }]);
    }
    return (
        <div className="App">
            {members.map((member) => {
                return (
                    <div key={member.id}>
                        - <b>{member.name}</b>: {member.module}
                    </div>
                )
            })}
            <form>
                <b>Enter Name: </b><input id='name' type="text" /><br />
                <b>Enter Module: </b><input id='module' type="text" /><br />
                <button onClick={handleAddMember} type="button">Submit</button>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        members: state.members
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMember: (newMember) => addMember(newMember, dispatch),
        getMembers: () => getMembers(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);

