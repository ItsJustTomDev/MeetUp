import React from "react";
import "./initialPage.css";

function initalPage(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="welcomeWrapper">
        <h1>Meepup APP</h1>
        <h4>First you need to login to be able to use the app!</h4>
        <div className="button_cont" align="center">
          <button style={{ padding: ".5em 1rem", borderRadius: 10, border: "1px solid black" }} onClick={() => props.getAccessToken()}>
            Sign in with google
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default initalPage;
