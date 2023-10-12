import SectionHeaderBlock from "../../components/SectionHeaderBlock";
import family from "../../assets/family-min.jpg";

function About() {
  return (
    <div>
      <SectionHeaderBlock
        header={"Welcome to the Energym Family"}
        description={
          "Here, you're not just another gym-goer, but a valued member of our community. We're thrilled to have you with us on your fitness journey. Our experienced trainers and staff are here to guide you and provide assistance every step of the way."
        }
        overflow={true}
      />
      <div className="lg:flex justify-center lg:relative lg:pb-[450px] 2xl:pb-[740px]">
        <div className="pb-4 lg:pb-0 bg-white lg:flex 2xl:w-[1750px] lg:absolute lg:h-[550px] lg:top-[-150px] lg:gap-x-10 2xl:h-[850px]">
          <div className="overflow-hidden h-80 sm:h-[480px] order-2 lg:w-[480px] 2xl:w-[854px] lg:h-full">
            <img src={family} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex justify-center px-5 pt-10 lg:items-center 2xl:w-[854px]">
            <div className=" w-[440px] text-center lg:text-left lg:w-[400px] lg:pl-7 ">
              <p className="font-semibold text-xl pb-3 2xl:text-3xl">
                Why We Choose Fitness
              </p>
              <p className="pb-5">
                {`It's our passion to help you live a healthier, more active life.
            Fitness isn't just about working out; it's about feeling better,
            gaining more energy, and taking care of yourself.`}
              </p>
              <p>
                {`Our team is made up of experts who are dedicated to your well-being.
            We provide a range of services and classes to make fitness
            accessible to everyone. Whether you're new to exercise or have
            experience, we're here to support you. Our journey began with a
            simple idea, the idea that everyone deserves a chance to be
            healthier. We're not just another gym; we're a community that
            welcomes you with open arms. Let us help you achieve your fitness
            goals and lead you towards a better, more active lifestyle.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
