import { useState } from "react";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex items-center justify-center p-12 ">
        <div className="mx-auto w-full  max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
                onBlur={() => {
                  if (fullName == "") {
                    // alert("Name cannot be empty!");
                    document
                      .getElementById("error-fullName")
                      .classList.remove("hidden");
                  } else {
                    document
                      .getElementById("error-fullName")
                      .classList.add("hidden");
                  }
                }}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p id="error-fullName" className="text-red-500 hidden">
                Name cannot be empty
              </p>
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                onBlur={() => {
                  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

                  const isValid = regex.test(email);
                  if (email == "" || !isValid) {
                    // alert("Name cannot be empty!");
                    document
                      .getElementById("error-email")
                      .classList.remove("hidden");
                  } else {
                    document
                      .getElementById("error-email")
                      .classList.add("hidden");
                  }
                }}
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p id="error-email" className="text-red-500 hidden">
                Email is not valid
              </p>
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                message={message}
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
