import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import FooterForm from "./FooterForm";
import Safety from "./Safety";

function Footer() {
  return (
    <div>
      <div className="lg:grid grid-cols-3  text-center lg:text-left lg:mb-10  pt-12 h-[590px]">
        <div>
          <div className=" flex justify-center">
            <div className=" flex justify-center flex-col lg:mt-36 ">
              <p className="font-semibold text-2xl  pt-7 lg:pt-0 pb-6">
                ENERGYM
              </p>
              <div className="flex flex-col gap-y-3">
                <p>500 Terry Francine Street </p>
                <p>San Francisco, CA 94158</p>
                <p>info@mysite.com</p>
                <p>42-456-7890</p>
                <div className="flex justify-center lg:justify-start gap-x-4">
                  <InstagramLogo size={26} />
                  <FacebookLogo size={26} />
                  <TwitterLogo size={26} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterForm />
        <Safety />
      </div>
    </div>
  );
}

export default Footer;
