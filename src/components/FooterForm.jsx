// import { useForm } from "@formspree/react";

// function FooterForm() {
//   const [state, handleSubmit] = useForm("xvojzoly");
//   if (state.succeeded) {
//     return <div>Thank you for signing up!</div>;
//   }

//   return (
//     <div className="borde pt-10 px-6">
//       <div className="text-center">
//         <p className="font-semibold text-[1.1rem] px-3 mb-3">
//           Not a Member? Send us a Email to get in Contact
//         </p>
//         <p>
//           Fill out the form below and a sales rep will get in touch shortly.
//         </p>
//       </div>
//       <form onSubmit={handleSubmit} className="flex flex-col pt-7">
//         <div className="flex flex-col items-center mb-3">
//           <label>First Name</label>
//           <input className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm" />
//         </div>
//         <div className="flex flex-col items-center mb-3">
//           <label>Last Name</label>
//           <input className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm" />
//         </div>
//         <div className="flex flex-col items-center mb-3">
//           <label>Email</label>
//           <input className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm" />
//         </div>
//         <div className="flex flex-col items-center mb-3">
//           <label>Add Message</label>
//           <input className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm" />
//         </div>
//         <div className="flex justify-center mt-4">
//           <button className="px-20 py-3 text-white rounded-full bg-gymrose">
//             Submit
//           </button>
//         </div>
//       </form>

//       <div className="text-center pt-12 pb-7">
//         <a href="" className="underline pb-5 font-semibold">
//           Safety Policies
//         </a>
//         <p className="">
//           ©2023 by Energym. Powered and secured by{" "}
//           <a href="" className="underline">
//             React
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default FooterForm;

import { useForm, ValidationError } from "@formspree/react";

function FooterForm() {
  const [state, handleSubmit] = useForm("xvojzoly");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <div className="borde pt-10 px-6">
      <div className="text-center">
        <p className="font-semibold text-[1.1rem] px-3 mb-3">
          Not a Member? Send us a Email to get in Contact
        </p>
        <p>
          Fill out the form below and a sales rep will get in touch shortly.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
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
