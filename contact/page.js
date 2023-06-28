import Navigation from "../navigation/page";
import Footer from "../footer/page";
export const metadata = {
  title: "Contact",
  description:
    "The Yucca Tree eatery is an organic restuarant serving the Yucca Valley area",
};
export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="contact-container">
        <div className="contact-img-container">
          <h1 className="about-head">- Get in Touch -</h1>
        </div>
        <div className="contact-bio-container">
          <h1 className="about-bio-head" id="contact-bio-head">
            We hear you!
          </h1>
        </div>
      </div>

      <form class="form-container">
        <label>Name</label>
        <input type="text" name="name" className="input" />
        <label>Subject</label>
        <input type="text" name="subject" className="input" />
        <textarea
          placeholder="How can we help?"
          name="message"
          className="input"
        ></textarea>
        <button className="send" type="submit" value="Send">
          Send
        </button>
      </form>

      <Footer />
    </>
  );
}
