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
      />
      <div className="pb-4">
        <div className="overflow-hidden h-80">
          <img src={family} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="text-center px-5 pt-10">
          <p className="font-semibold text-xl pb-3">Why We Choose Fitness</p>
          <p className="pb-5">
            It's our passion to help you live a healthier, more active life.
            Fitness isn't just about working out; it's about feeling better,
            gaining more energy, and taking care of yourself.
          </p>
          <p>
            Our team is made up of experts who are dedicated to your well-being.
            We provide a range of services and classes to make fitness
            accessible to everyone. Whether you're new to exercise or have
            experience, we're here to support you. Our journey began with a
            simple idea, the idea that everyone deserves a chance to be
            healthier. We're not just another gym; we're a community that
            welcomes you with open arms. Let us help you achieve your fitness
            goals and lead you towards a better, more active lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
