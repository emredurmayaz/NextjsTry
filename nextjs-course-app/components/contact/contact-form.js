import classes from "./contact-form.module.css";

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email </label>
            <input type="email" id="email" required></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name </label>
            <input type="text" id="name" required></input>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
