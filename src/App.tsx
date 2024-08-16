import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
// import FacebookLogin from "react-facebook-login";

function App() {
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse);
        const { credential } = credentialResponse;

        const response = await axios.post(
          "http://localhost:3050/api/auth/google-login",
          {},
          {
            headers: {
              Authorization: `Bearer ${credential}`,
            },
          }
        );

        console.log(response.data);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
    // <div></div>
  );
}

export default App;
