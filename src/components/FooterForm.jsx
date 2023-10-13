import { useForm, ValidationError } from "@formspree/react";
import { ArrowCounterClockwise } from "phosphor-react";

function FooterForm() {
  const [state, handleSubmit] = useForm("xvojzoly");

  return (
    <div className=" pt-10 lg:pt-0 px-6 text-center">
      {state.succeeded ? (
        <div>
          {`Success! We've received your message and will be in touch shortly`}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="text-center  ">
            <p className="font-semibold text-[1.1rem] px-3 lg:px-0 mb-3">
              Not a Member? Send us a Email to get in Contact
            </p>
            <p>
              Fill out the form below and a sales rep will get in touch shortly.
            </p>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`${
          state.succeeded ? "pt-1" : ""
        } flex  flex-col pt-7 items-center`}
      >
        {state.succeeded || (
          <div>
            <div className="flex flex-col items-center mb-3">
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstName"
                type="firstName"
                name="firstName"
                className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm"
              />
            </div>
            <div className="flex flex-col items-center mb-3">
              <label htmlFor="lastname">Last Name</label>
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
            <label htmlFor="message" className="text-xs">
              Add a message
            </label>
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
            aria-label="Button"
            type="submit"
            disabled={state.submitting}
            className={`${
              state.succeeded ? "bg-gray-900" : ""
            } px-20 py-3 duration-500 text-white sm:hover:bg-gymrosedark rounded-full bg-gymrose`}
          >
            {state.succeeded ? <ArrowCounterClockwise size={20} /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FooterForm;
