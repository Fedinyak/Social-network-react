import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
// import { Redirect } from "react-router-dom";
import { Link, NavLink, Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* {createField("Email", "email", [required], Input)} */}
      <Field
        placeholder={"Email"}
        validate={[required]}
        name={"email"}
        component={Input}
      />
      <Field
        placeholder={"Password"}
        validate={[required]}
        name={"password"}
        type={"password"}
        component={Input}
      />
      <br></br>
      <Field
        type={"checkbox"}
        // validate={[required]}
        name={"rememberMe"}
        component={Input}
      />{" "}
      remember me
      <br></br>
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && (
        <Field
          placeholder={"Symbols from image"}
          validate={[required]}
          name={"captcha"}
          component={Input}
        />
      )}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    // console.log(formData);
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    // return <Redirect to={"/profile"} />;
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = state => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
