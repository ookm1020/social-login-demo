import React from "react";
import NaverLogin from "react-naver-login";
import KakaoLogin from "react-kakao-login";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.responseFail = this.responseFail.bind(this);
    this.responseKakao = this.responseKakao.bind(this);
    this.responseNaver = this.responseNaver.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  // Google Login
  responseGoogle = res => {
    console.log("Google Success: ", res);
  };

  // Kakao Login
  responseKakao = res => {
    console.log("Kakao Success: ", res);
  };

  // Facebook Login
  responseFacebook = res => {
    console.log("Facebook Success: ", res);
  };

  // Naver Login
  responseNaver = res => {
    console.log("Naver Success: ", res);
  };

  // Login Fail
  responseFail = err => {
    console.error("Login Fail: ", err);
  };

  render() {
    return (
      <div className="Main">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE}
          render={props => (
            <div onClick={props.onClick} className="img-wrap">
              <img src="/google.png" alt="img" />
            </div>
          )}
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
          cookiePolicy={"single_host_origin"}
        />

        <KakaoLogin
          jsKey={process.env.REACT_APP_KAKAO}
          render={props => (
            <div onClick={props.onClick} className="img-wrap">
              <img src="/kakao.png" alt="img" />
            </div>
          )}
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          cookiePolicy={"single_host_origin"}
          getProfile="true"
        />

        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK}
          render={props => (
            <div onClick={props.onClick} className="img-wrap">
              <img src="/facebook.png" alt="img" />
            </div>
          )}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />

        <NaverLogin
          clientId={process.env.REACT_APP_NAVER}
          render={props => (
            <div onClick={props.onClick} className="img-wrap">
              <img src="/naver.png" alt="img" />
            </div>
          )}
          callbackUrl="http://localhost:3000"
          onSuccess={this.responseNaver}
          onFailure={this.responseFail}
        />
      </div>
    );
  }
}

export default Main;
