import React from "react";

import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      class="hero min-h-screen "
      style={{ background: `url(${appointment})` }}
    >
      <div>
        <div className="flex items-center justify-center mb-5">
          <div>
            <h4 className="text-primary text-xl font-bold text-center">
              Contact Us
            </h4>
            <h2 className="text-3xl text-white">Stay Connected With Us</h2>
          </div>
        </div>
        <div class="hero-content flex-col lg:flex-row-reverse w-screen">
          <div class="card flex-shrink-0  lg:w-6/12 shadow-2xl bg-base-100 ">
            <div class="card-body ">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered "
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  class="input input-bordered"
                />
              </div>

              <textarea
                class="textarea textarea-primary rounded-to-r from-secondary to-primary text-uppercase font-bold text-white"
                placeholder="Your Message"
              ></textarea>

              <div class="form-control mt-6 flex items-center">
                <button class="btn btn-primary lg:w-3/12 bg-gradient-to-r from-secondary to-primary text-uppercase font-bold text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
