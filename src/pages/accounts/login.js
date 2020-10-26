import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as actionTypes from "../../store/user/userActionTypes";
import {validatestring} from '../../helpers/utility';
import gate from "../../gate";
import "./login.scss";


const validationSchema = Yup.object().shape({
	username: Yup.string().required(" User name is required"),	
	username: Yup.string().test('validate scecific charachter', "Charchters '. , / \ ^' not allowed", 
		function(value) {    
			return validatestring(value);      
		}),
	password: Yup.string().required("Password is required"),
	password: Yup.string().test('validate scecific charachter', "Charchters '. , / \ ^' not allowed", 
		function(value) {    
			return validatestring(value);      
		}),
	});

	const Login = (props) => {
  		const dispatch = useDispatch();
  		let history = useHistory();

 		const [data] = useState({});

 		document.addEventListener(
    			"invalid",
   			 (function () {
				return function (e) {
					e.preventDefault();
				};
    			})(),
   		true
 		);

		function backtohome() {
			let path = `/WelcomeView`;
			history.push(path);
		}
		let disabled = "disabled";
		const {
			initialValues = {
				username: "",
				password: "",
				flag: false,
			},
		} = props?.location?.state || {};

		return (
			<div className="row mt-4">
     			<div className="login-form">
					<ToastContainer/>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={async (fields) => {
						data.flag = true;
						dispatch({ type: actionTypes.START_LOGIN, payload: { data } });

						const result = await gate
						.checkAuthentication(fields)
						.catch((error) => {
							data.flag = false;
							dispatch({ type: actionTypes.LOGIN_FAIL, payload: { data } });
							toast("Login failed. Please try again.");
						});
						if (result == undefined) {
						data.flag = false;
						dispatch({ type: actionTypes.LOGIN_FAIL, payload: { data } });
						toast("Connection failed.Please contanct system administartor.");
						}

						if (!result?.success) {
						data.flag = false;
						dispatch({ type: actionTypes.LOGIN_FAIL, payload: { data } });
						toast(result.errorMessage);
						} else {
						console.log("ok", result);
						data.flag = false;
						dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: result });
						backtohome();
						}
						}}
					>
						{({ errors, status, touched, values }) => {                           
							return (          
								<Form>
									<div className="field">
										<Field
											value={data?.username}
											name="username"
											type="text"
											required="required"
											id="username"
											className={
											"form-control" +
											(errors.username && touched.username ? " is-invalid" : "")
											}
										/>
										<label
											for="username"
											title="User Name"
											data-title="UserName"
										></label>
										<ErrorMessage
											name="username"
											component="div"
											className="invalid-feedback"
									/>
									</div>
									<div className="field">
										<Field
											value={data?.password}
											id="password"
											name="password"
											type="password"
											required
											className={
											"form-control" +
											(errors.password && touched.password ? " is-invalid" : "")
											}
										/>
										<label
											for="password"
											title="Password"
											data-title="Password"
										></label>
										<ErrorMessage
											name="password"
											component="div"
											className="invalid-feedback"
										/>
									</div>
									<div className="form-group">
										<button
											type="submit"
											disabled={data?.flag}
											className="btn btn-primary mr-2"
										>
											{
												!data?.flag == true ? (
												""
												) : (
													<i class="btn btn-primary mr-2 fa fa-refresh fa-spin"></i>
											)}
											Login
										</button>

										<button
											class="btn btn-danger "
											disabled={data?.flag}
											onClick={() => {
												backtohome();
											}}
										>
											Cancel
										</button>
									</div>
								</Form>
								);
						}}
      				</Formik>
   				</div>
   			</div>
  		);
	};

export default Login;
