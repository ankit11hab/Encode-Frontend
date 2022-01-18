import React from "react";
import { connect } from 'react-redux';
const Bus_no= () => {
    document.querySelector('#room-name-input').focus();
        document.querySelector('#room-name-input').onkeyup = function(e) {
            if (e.keyCode === 13) {  // enter, return
                document.querySelector('#room-name-submit').click();
            }
        };

        document.querySelector('#room-name-submit').onclick = function(e) {
            var roomName = document.querySelector('#room-name-input').value;
            window.location.pathname = '/bus/' + roomName + '/';
        };
  return (
    <div>
        <h1>Enter the Bus No.</h1>
        <p> What chat room would you like to enter?</p>
    <input id="room-name-input" type="text" size="100"></input>
    <input id="room-name-submit" type="button" value="Enter"></input>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Bus_no);