import SectionHeaderBlock from "../../components/SectionHeaderBlock";
import MembershipOption from "./MembershipOption";

function Membership() {
  return (
    <div>
      <SectionHeaderBlock
        header={"Select a Membership"}
        description={
          "Discover the right membership option for you that aligns with your fitness aspirations. Each membership comes with a unique set of benefits designed to enhance your fitness journey, so you can focus on achieving your goals while enjoying a wide range of exclusive perks tailored just for you."
        }
      />
      <MembershipOption
        rarity={"Silver Membership"}
        price={"35"}
        duration={"One month"}
        bgCl={"white"}
        borderCl={"black"}
        txtCl={"black"}
      />
      <MembershipOption
        rarity={"Gold Membership"}
        price={"160"}
        duration={"Six months"}
        bgCl={"gymrose"}
        borderCl={"black"}
        txtCl={"white"}
      />
      <MembershipOption
        rarity={"Silver Membership"}
        price={"250"}
        duration={"One year"}
        bgCl={"white"}
        borderCl={"black"}
        txtCl={"black"}
      />
    </div>
  );
}

export default Membership;
