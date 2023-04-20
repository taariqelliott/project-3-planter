import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();
  console.log("authenticated?", isAuthenticated)
  

  return (
    isAuthenticated && (
      <div className="user-container">
        <img className="user-icon"src={user.picture} alt={user.name} />
    
        {console.log(user.name)}
        <h6 className="user-name" >Welcome, {user.name}!</h6>
      </div>
    )
  );
};

export default Profile;