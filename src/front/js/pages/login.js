import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div class="card text-center">
  <div class="card-header">
    Hello! Please log in!
  </div>
  <div class="card-body">
  <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">Username</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
	<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">Password</span>
  <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"></input>
</div>
  </div>
		<button>Login</button>
</div>
		</div>
	);
};

