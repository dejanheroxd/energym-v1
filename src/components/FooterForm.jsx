function FooterForm() {
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
      {/* <form className="bg-rose-100">form</form> */}
      <div className="flex justify-center mt-4">
        <button className="px-20 py-3 text-white rounded-full bg-gymrose">
          Submit
        </button>
      </div>
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
