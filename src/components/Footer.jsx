import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import FooterForm from "./FooterForm";

function Footer() {
  return (
    <div>
      <div>
        <p className="font-semibold text-2xl text-center pt-7 pb-6">ENERGYM</p>
        <div className="flex flex-col items-center gap-y-3">
          <p>500 Terry Francine Street </p>
          <p>San Francisco, CA 94158</p>
          <p>info@mysite.com</p>
          <p>42-456-7890</p>
          <div className="flex gap-x-4">
            <InstagramLogo size={26} />
            <FacebookLogo size={26} />
            <TwitterLogo size={26} />
          </div>
        </div>
      </div>

      <FooterForm />
    </div>
  );
}

export default Footer;
