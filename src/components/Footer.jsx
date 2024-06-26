import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import FooterForm from "./FooterForm";
import Safety from "./Safety";

function Footer() {
  return (
    <div className="pt-10 pb-10">
      <div className="lg:grid grid-cols-3 text-white text-center lg:text-left lg:mb-10  pt-12 h-[590px]">
        <div>
          <div className=" flex justify-center">
            <div className=" flex justify-center flex-col lg:mt-36 ">
              <p className="font-semibold text-2xl  pt-7 lg:pt-0 pb-6">
                ENERGYM
              </p>
              <div className="flex flex-col gap-y-3">
                <p>Λ. ΕΙΡΗΝΗΣ 23</p>
                <p>Préveza, Greece, 48100</p>
                <p>energympreveza@gmail.com</p>
                <p>2682 061195</p>
                <div className="flex justify-center lg:justify-start gap-x-4">
                  <a
                    href="https://www.instagram.com/energym_preveza/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramLogo size={26} />
                  </a>
                  <a
                    href="https://www.facebook.com/energympreveza?locale=el_GR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookLogo size={26} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer">
                    <TwitterLogo size={26} />
                  </a>
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
