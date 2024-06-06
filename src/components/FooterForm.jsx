import { useForm, ValidationError } from "@formspree/react";
import { ArrowCounterClockwise } from "phosphor-react";
import { useTranslation } from "react-i18next";

function FooterForm() {
  const [t] = useTranslation("global");
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
              {t("footer.header")}
            </p>
            <p>{t("footer.subText")}</p>
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
              <label htmlFor="firstnName">{t("form.firstName")}</label>
              <input
                id="firstName"
                type="firstName"
                name="firstName"
                className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm"
              />
            </div>
            <div className="flex flex-col items-center mb-3">
              <label htmlFor="lastName">{t("form.lastName")}</label>
              <input
                id="lastName"
                type="lastName"
                name="lastName"
                className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm"
              />
            </div>
            <div className="flex flex-col items-center mb-3">
              <label htmlFor="email">{t("form.email")}</label>
              <input
                id="email"
                type="email"
                name="email"
                className="border-b-black border-b outline-none text-center w-72 pb-2 mb-1 pt-2 text-sm"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="text-xs">
              {/* {t("form.message")} */}
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
            } px-20 py-3 duration-500 text-white sm:hover:bg-gymGreen rounded-full bg-gymGreen`}
          >
            {state.succeeded ? (
              <ArrowCounterClockwise size={20} />
            ) : (
              t("form.cta")
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FooterForm;
