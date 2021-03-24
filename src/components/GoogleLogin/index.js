import React, { useEffect } from "react";

import "./GoogleLogin.css";

let GoogleLogin = () => {
  const onLoadedGoogleLib = () => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE,
      });
    });
  };

  const onGoogleLogin = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();

    // get token and profile
    GoogleAuth.signIn().then(
      (res) => {
        const { access_token, id_token } = res.tc;

        console.log("Google: ", res.tc);

        localStorage.setItem("access_token", access_token);

        localStorage.setItem("id_token", id_token);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    if (!document.getElementById("GoogleJSSDK")) {
      const scriptGoogleJS = document.createElement("script");

      scriptGoogleJS.id = "GoogleJSSDK";

      scriptGoogleJS.async = true;

      scriptGoogleJS.crossorigin = "anonymous";

      scriptGoogleJS.src = "//apis.google.com/js/api.js";

      scriptGoogleJS.onload = () => {
        onLoadedGoogleLib();
      };

      document.body.appendChild(scriptGoogleJS);
    }
  }, []);

  return (
    <div onClick={onGoogleLogin} className="img-wrap">
      <img src="/google.png" alt="img" />
    </div>
  );
};

export default GoogleLogin;
