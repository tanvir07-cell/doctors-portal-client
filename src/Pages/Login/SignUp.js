import React, { useState } from "react";
import auth from "../../Firebase/firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import LoginLoading from "../Shared/LoginLoading";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [token] = useToken(user || googleUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  if (token) {
    navigate("/appointment");
  }

  if (loading || googleLoading) {
    return <LoginLoading></LoginLoading>;
  }

  // backend error handling:
  let signInBackedError;
  if (googleError || error) {
    signInBackedError = (
      <p className="text-red-500">
        <small>{googleError?.message || error?.message}</small>
      </p>
    );
  }
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div class="card w-96  shadow-xl ">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Sign Up</h2>

          {/* react-hooks-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* daisy ui form input label: */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full max-w-xs input-border-style"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Name must be at least six character",
                  },
                })}
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-red-500 font-bold error-message">
                    {errors?.name?.message}
                  </span>
                )}

                {errors.name?.type === "minLength" && (
                  <span class="label-text-alt text-red-500 error-message">
                    {errors?.name?.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs input-border-style"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500 font-bold error-message">
                    {errors?.email?.message}
                  </span>
                )}

                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500 error-message">
                    {errors?.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs input-border-style"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password Must be at least 6 characters",
                    },
                  })}
                />
                {!showPass ? (
                  <BiShow
                    className="text-secondary absolute bottom-3.5 right-2 cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  ></BiShow>
                ) : (
                  <BiHide
                    className="text-secondary absolute bottom-3.5 right-2 cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  ></BiHide>
                )}
              </div>

              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500 error-message">
                    {errors?.password?.message}
                  </span>
                )}
                {errors.email?.type === "minLength" && (
                  <span class="label-text-alt text-red-500 error-message">
                    {errors?.password?.message}
                  </span>
                )}
              </label>
            </div>

            {signInBackedError}

            <input
              type="submit"
              className="btn text-white w-full max-w-xs"
              value="Sign Up"
            />
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              {" "}
              <small className="text-primary"> Please Login</small>
            </Link>
          </p>
          <div class="divider ">OR</div>
          <button
            class="btn btn-outline text-white"
            onClick={() => signInWithGoogle()}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
