import { useForm, ValidationError } from "@formspree/react";
import { ArrowCounterClockwise } from "phosphor-react";

function FooterForm() {
  const [state, handleSubmit] = useForm("xvojzoly");

  return (
    <div className="borde pt-10 px-6 text-center">
      {state.succeeded ? (
        <div>
          {`Success! We've received your message and will be in touch shortly`}
        </div>
      ) : (
        <div className="text-center">
          <p className="font-semibold text-[1.1rem] px-3 mb-3">
            Not a Member? Send us a Email to get in Contact
          </p>
          <p>
            Fill out the form below and a sales rep will get in touch shortly.
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`${
          state.succeeded ? "pt-1" : ""
        } flex flex-col pt-7 items-center`}
      >
        {state.succeeded || (
          <div>
            <div className="flex flex-col items-center mb-3">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="firstName"
                name="firstName"
                className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm"
              />
            </div>
            <div className="flex flex-col items-center mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="lastName"
                name="lastName"
                className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm"
              />
            </div>
            <div className="flex flex-col items-center mb-3">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              className="border-b-black border-b outline-none text-center w-72 h-28 pb-2 pt-2 text-sm"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        )}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={state.submitting}
            className={`${
              state.succeeded ? "bg-gray-900" : ""
            } px-20 py-3 duration-500 text-white rounded-full bg-gymrose`}
          >
            {state.succeeded ? <ArrowCounterClockwise size={20} /> : "Submit"}
          </button>
        </div>
      </form>
      <div className="text-center pt-12 pb-7">
        <a href="" className="underline pb-5 font-semibold">
          Safety Policies
        </a>
        <p className="">
          ©2023 by Energym. Powered and secured by{" "}
          <a href="" className="underline">
            React
          </a>
        </p>
      </div>
    </div>
  );
}

export default FooterForm;
