import Footer from "../footer/page";
import Navigation from "../navigation/page";
import defaultProfileImg from "../images/default.png";
import aboutLocationSrc from "../images/about-location.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "About Us",
  description:
    "The Yucca Tree eatery is an organic restuarant serving the Yucca Valley area",
};
export default function About() {
  return (
    <>
      <Navigation />
      <div className="about-container">
        <div className="about-img-container">
          <h1 className="about-head">- Peace and Love -</h1>
        </div>
        <div className="about-bio-container">
          <h1 className="about-bio-head">This is our story!</h1>
          <p className="about-text">
            First opened in January of 2021, here at The Yucca Tree Eatery, we
            we&apos;re enamored by the magic of the desert and made it our
            mission to share this magic on a plate. We do so only using using
            the finest, organic ingredients that will energize you to further
            explore our beautiful community.
          </p>
          <div className="about-location-container">
            <Image
              src={aboutLocationSrc}
              alt="View of outside The Yucca Tree Eatery"
              className="about-location-img"
              width={450}
              height={400}
            />
            <div className="location-icons">
              <FontAwesomeIcon icon={faMapLocation} className="about-icon" />
              <p className="location-text">
                57754 Twentynine Palms Highway Yucca Valley, CA 92284 USA
              </p>
            </div>
            <div className="location-icons">
              <FontAwesomeIcon icon={faPhone} className="about-icon" />
              <p className="location-text">(760) 853-0222</p>
            </div>
          </div>
          <h1 className="about-bio-head" id="review-head">
            See what people are saying!
          </h1>
          <div className="review-container">
            <div className="reviewer">
              <Image
                src={defaultProfileImg}
                alt="View of outside The Yucca Tree Eatery"
                className="reviewer-img"
                width={150}
                height={150}
              />
              <p className="reviewer-name">Pelumi Olaleye</p>
              <p className="review">
                First time visiting. Went around noon on a Friday afternoon. By
                far the best breakfast I&apos;ve had in 29palms! I had the fresh
                greens juice with sourdough sandwich with everything but bacon
                (I replaced the bacon with avocado). Both came to be $19 &
                change. Pricey but definitely worth the fresh ingredients.
                I&apos;ll rather have freshly made breakfast than a frozen
                breakfast IMO. There are plenty stores nearby so a great place
                to load up on some goodness before or after getting your
                shopping done. I&apos;ll definitely return and I highly
                recommend this joint.
              </p>
            </div>
            <div className="reviewer">
              <Image
                src={defaultProfileImg}
                alt="View of outside The Yucca Tree Eatery"
                className="reviewer-img"
                width={150}
                height={150}
              />
              <p className="reviewer-name">Nicole Davis</p>
              <p className="review">
                The vegan burger was excellent - great quality and flavor! The
                breakfast burrito was pretty good but nothing too special. The
                smoothie was good as well but overpriced. Good place for a quick
                healthy bite!
              </p>
            </div>
            <div className="reviewer">
              <Image
                src={defaultProfileImg}
                alt="View of outside The Yucca Tree Eatery"
                className="reviewer-img"
                width={150}
                height={150}
              />
              <p className="reviewer-name">Deborah Nystrom</p>
              <p className="review">
                Popular place, good food with decent vegan options. Friendly
                staff. Could use a couple more restrooms, so stop at the new
                Joshua Tree Visitor Center to use the facilities before you come
                here for breakfast or lunch. Went twice both take out & dine in.
                Vegetarian options: And vegan. ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
