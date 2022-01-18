import React from "react";

const Location = (props) => {
  return (
    <div>
      <h1>Location Page</h1>
      <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        ></Map>
    </div>
  );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA4S2mz5miSdENrelwz4Jl8vgFnN0gVuAk'
  })(MapContainer)