import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import "./Login.css";
import LoginLoading from "../Shared/LoginLoading";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BiShow, BiHide } from "react-icons/bi";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, passwordResetError] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user || googleUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

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
    signInWithEmailAndPassword(data.email, data.password);
  };

  const resetPassword = async (data) => {
    await sendPasswordResetEmail(data.email);

    if (data?.email) {
      toast.success(`${data.email} sent a reset password Link`, {
        id: "reset-pass1",
      });
    }
  };
  return (
    <div className="flex h-screen items-center justify-center  ">
      <div class="card w-96  shadow-xl ">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>

          {/* react-hooks-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* daisy ui form input label: */}
            <div class="form-control w-full max-w-xs ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered input-border-style"
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
              className="btn text-white w-full max-w-xs "
              value="login"
            />
          </form>
          <p>
            New to Doctor's Portal?{" "}
            <Link to="/signup">
              {" "}
              <small className="text-primary"> SignUp first</small>
            </Link>
          </p>

          <p>
            Forget Password?{" "}
            <small className="text-red-500 ">
              <Link to="" onClick={handleSubmit(resetPassword)}>
                Reset Password
              </Link>
            </small>
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

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
