import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import LoginLoading from "../Shared/LoginLoading";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const AddDoctors = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    <LoginLoading></LoginLoading>;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const IMG_API_KEY = "829d3a7b3715690cf21c75412d2e4082";
  const onSubmit = (data) => {
    const formData = new FormData();
    const image = data?.image[0];
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${IMG_API_KEY}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          // send to the mongoDb backend:
          const img = result?.data?.url;
          const doctor = {
            name: data?.name,
            email: data?.email,
            specialization: data?.specialization,
            img: img,
          };

          //   post to the mongodb database:
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((insertedDoctor) => {
              if (insertedDoctor?.insertedId) {
                toast.success(`${doctor?.name} successfully inserted`);
                reset();
              } else {
                toast.error(`${doctor?.name} does not added to the database`);
              }
              console.log(insertedDoctor);
            });
        }
        console.log("Post to the imgBB", result);
      });

    console.log(data);
  };

  return (
    <div>
      <h2 className="text-3xl">Add Doctors</h2>

      {/* react-hooks-form */}
      <form onSubmit={handleSubmit(onSubmit)} className=" w-1/2 mx-auto mt-5">
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
            <span class="label-text">Specialty</span>
          </label>
          <select
            class=" w-full max-w-xs input-border-style"
            {...register("specialization")}
          >
            {services?.map((service) => (
              <option selected value={service.name} className="text-accent">
                {service?.name}
              </option>
            ))}
          </select>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
            class="input input-bordered w-full max-w-xs input-border-style cursor-pointer"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500 font-bold error-message">
                {errors?.name?.message}
              </span>
            )}
          </label>
        </div>

        <input
          type="submit"
          className="btn text-white w-full max-w-xs mt-5"
          value="Add"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddDoctors;
