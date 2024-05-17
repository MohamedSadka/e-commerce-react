const Contact = () => {
  return (
    <div className="page" style={{ width: "1100px" }}>
      <div className="page-links">
        <span className="page-link">Home</span> /{" "}
        <span className="pgae-link">Contact</span>
      </div>

      <div className="contact-content d-flex gap-5">
        <div className="contact-info mt-5">
          <div className="info-card mb-4">
            <img
              style={{ width: "40px", height: "40px", marginRight: "20px" }}
              src="/images/phone-icon.png"
              alt="phone icon"
            />
            <span style={{ fontWeight: "500" }}>Call To Us</span>
            <div className="phone-info mt-4">
              <p style={{ fontSize: "14px" }}>
                We are available 24/7, 7 days a week.
              </p>
              <p style={{ fontSize: "14px" }}>Phone: +8801611112222</p>
            </div>
          </div>
          <div
            className="underling"
            style={{
              width: "270px",
              height: "1px",
              backgroundColor: "#000000",
              opacity: "50%",
            }}
          ></div>
          <div className="info-card mt-4">
            <img
              style={{ width: "40px", height: "40px", marginRight: "20px" }}
              src="/images/email-icon.jpeg"
              alt="email icon"
            />
            <span style={{ fontWeight: "500" }}>Write To US</span>
            <div className="phone-info mt-4" style={{ width: "250px" }}>
              <p style={{ fontSize: "14px" }}>
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p style={{ fontSize: "14px" }}>Emails: customer@exclusive.com</p>
              <p style={{ fontSize: "14px" }}>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <form
          className="form-info"
          style={{ width: "800px", height: "457px", padding: "30px" , position: "relative"}}
        >
          <div className="w-100 d-flex gap-3">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="phone" placeholder="Your Phone *" />
          </div>
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
