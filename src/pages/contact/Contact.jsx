function Contact() {
  return (
    <>
      <div className="text-center h-24 bg-gymblue text-white flex justify-center items-center">
        <p className="font-semibold text-2xl">Contact</p>
      </div>
      <div className="flex justify-center">
        <iframe
          className="w-full h-72"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.1694385791224!2d20.750445395629598!3d38.9594712038122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c39156865dab7%3A0xe6c6d52cd3704d5!2sEnergym%20Preveza!5e0!3m2!1sen!2sgr!4v1697105284939!5m2!1sen!2sgr"
          style={{ borer: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
