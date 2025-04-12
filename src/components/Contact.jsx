const Contact = () => {
  return (
    <section className="formx appear-from-bottom" id="contact">
      <div className="contact-form">
        <h2 className="contact-title">Contact me</h2>
        <p className="contact-text justify">
            If you have a compelling application in mind that you're eager to bring to life, a specific feature that requires expert implementation, or a coding project awaiting execution, I'm enthusiastic about stepping in to assist! Let's collaborate and turn your ideas into reality.
          </p>
        <div className="form">
        <form action="https://formspree.io/f/xpzewlbk" method="post" className="">
            <label htmlFor="name"></label>
            <input
              className="form-input"
              value=""
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              maxLength="30"
              required
            />
            <label htmlFor="email-input"></label>
            <input
              className="form-input"
              name="email-input"
              id="email"
              type="email"
              placeholder="Enter your Email"
              required
            />
            <label className="form-label" htmlFor="message"></label>
            <textarea
              className="form-textarea"
              name="body"
              id="message"
              cols="30"
              rows="6"
              maxLength="500"
              placeholder="Write your message here"
              required
            ></textarea>
            <button className="form-button" type="submit">
            Get in touch
            </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;