import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        margin:"18px 0px",
        borderBottom: "1px solid grey"
      }}>
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }} src="https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/> 
        </div>
        <div>
          <h4>Swathi Sriram</h4>
          <div style={{display:"flex", justifyContent:"space-between", width:"130%"}}>
            <h6>40 Posts</h6>
            <h6>1000 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
     
      <div className="gallery">
        <img className="item" src ="https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src ="https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src ="https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src ="https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src ="https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <img className="item" src ="https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
      </div>
    </div>
  );
};

export default Profile;
