import { useTranslation } from "react-i18next";
import SectionHeaderBlock from "../../components/SectionHeaderBlock";
import MembershipOption from "./MembershipOption";

function Membership() {
  const [t] = useTranslation("global");

  return (
    <div className="xl:pb-[300px] 2xl:pb-[350px]">
      <SectionHeaderBlock
        header={t("member.memberHeroHeader")}
        description={t("member.memberHeroSub")}
        overflow={true}
      />
      <div className="xl:relative xl:flex xl:justify-center">
        <div className="xl:flex xl:justify-center xl:absolute xl:top-[-120px]">
          <MembershipOption
            rarity={"Silver Membership"}
            price={"35"}
            duration={t("member.memberMonthOne")}
          />
          <MembershipOption
            rarity={"Gold Membership"}
            price={"160"}
            duration={t("member.memberMonthSix")}
            popular={true}
          />
          <MembershipOption
            rarity={"Platinum Membership"}
            price={"250"}
            duration={t("member.memberMonthYear")}
          />
        </div>
      </div>
    </div>
  );
}

export default Membership;
