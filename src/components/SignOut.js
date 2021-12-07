import React from "react";
import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import CallIcon from "@mui/icons-material/Call";

function SignOut() {
  return (
    <div className="header">
      <Button
        onClick={() => auth.signOut()}
        style={{ color: "white", fontSize: "15px" }}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
}

export default SignOut;
