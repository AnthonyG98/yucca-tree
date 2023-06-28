import Image from "next/image";
import Navigation from "../navigation/page";
import Footer from "../footer/page";
import MenuProps from "../props/menuProps";
import breakfastSrc from "../images/homeFoodFour.jpg";
import lunchSrc from "../images/lunch.jpg";
import beveragesSrc from "../images/beverages.jpg";
export const metadata = {
  title: "Menu",
  description:
    "The Yucca Tree eatery is an organic restuarant serving the Yucca Valley area",
};
export default function Menu() {
  return (
    <>
      <Navigation />

      <div className="menu-container">
        <div className="about-container">
          <div className="menu-img-container">
            <h1 className="about-head">- Menu -</h1>
          </div>
          <div className="about-bio-container">
            <h1 className="about-bio-head" id="menu-head">
              Breakfast
              <Image
                src={breakfastSrc}
                alt="Our breakfast menu"
                className="menu-img"
                width={250}
                height={200}
              />
            </h1>
            <div className="home-hours-container" id="menu">
              <MenuProps
                menuName="Hearty Oatmeal"
                menuPrice="$8"
                menuDesc="organic oats, chia seeds, cinnamon, maple syrup, vanilla topped
                with ghee, walnuts & fresh blueberries"
              />
              <MenuProps
                menuName="Breakfast Burrito"
                menuPrice="$12"
                menuDesc="eggs, potatoes, bacon, cheese, pico, spinach, onion, peppers and served with homemade salsa"
              />
              <MenuProps
                menuName="Soyrizo Breakfast Burrito"
                menuPrice="$12"
                menuDesc="eggs, soyrizo, potatoes, peppers, onion, spinach cheese served with homemade salsa"
              />
              <MenuProps
                menuName="Veggie Scramble Bowl or Burrito"
                menuPrice="$12"
                menuDesc="eggs, spinach, onion, black beans, brown rice, cheese, cilantro & pico"
              />
              <MenuProps
                menuName="Sourdough Breakfast Sandwich"
                menuPrice="$8"
                menuDesc="eggs, bacon, cheese, spinach, tomato, mayo"
              />
              <MenuProps
                menuName="Bagel with Cream Cheese"
                menuPrice="$6"
                menuDesc="everything or plain"
              />
              <MenuProps
                menuName="Breakfast Bagel"
                menuPrice="$11"
                menuDesc="egg, spinach, tomato, cheese, mayo served with a side of breakfast potatoes"
              />
              <MenuProps
                menuName="Breakfast Tacos"
                menuPrice="1/$11 2/$13"
                menuDesc="eggs, spinach, bacon, cheese, pico, flour tortilla with a side of breakfast potatoes"
              />
              <MenuProps
                menuName="Wild Lox Bagel"
                menuPrice="$15"
                menuDesc="wild salmon lox, cream cheese, red onion, capers, cucumber, sprouts, 
                fresh greens, choice of everything or plain bagel"
              />
            </div>
            <h1 className="about-bio-head" id="menu-head-lunch">
              Lunch
              <Image
                src={lunchSrc}
                alt="Our breakfast menu"
                className="menu-img"
                width={250}
                height={200}
              />
            </h1>
            <MenuProps
              menuName="Conscious Salad"
              menuPrice="$14"
              menuDesc="chopped romaine, spinach, cherry, tomatoes, heart of palm carrots, cucumber, sprouts, sliced almonds,
              & vegan dressing (hummus, coconut milk, spices)"
            />
            <MenuProps
              menuName="Artichoke Soup"
              menuPrice="$12"
              menuDesc="artichoke hearts, carrots, celery, onion & vegetable broth"
            />
            <MenuProps
              menuName="Veggie Quesadilla"
              menuPrice="$14"
              menuDesc="spinach, onion, mixed peppers, cheese served with side salad & house dressing"
            />
            <MenuProps
              menuName="Veggie Wrap"
              menuPrice="$13"
              menuDesc="fresh spinach, cucumber, shredded carrots, tomatoes, onion, sprouts, hummus & house dressing
              served with grilled sweet potatoes drizzled with raw honey"
            />
            <MenuProps
              menuName="Chicken Bowl"
              menuPrice="$14"
              menuDesc="grilled chicken, black beans, brown rice, fresh spinach, cheese, pico, side of house salsa"
            />
            <MenuProps
              menuName="Chicken Burrito"
              menuPrice="$14"
              menuDesc="grilled chicken, black beans, brown rice, fresh spinach, cheese, pico, side of house salsa"
            />
            <MenuProps
              menuName="Grilled Artichoke Chicken Sandwich"
              menuPrice="$14"
              menuDesc="grilled chicken breast, artichokes, tomato, onion, arugula, choice of salad, chips, or sweet
               potatoes with honey"
            />
            <MenuProps
              menuName="Avocado Sprout Chicken Sandwich"
              menuPrice="$15"
              menuDesc="grilled chicken breast, fresh greens, sprouts, avocado, colby jack cheese"
            />
            <MenuProps
              menuName="Jalapeno Bacon Cheese Burger"
              menuPrice="$16"
              menuDesc="grass fed beef, BBQ sauce, cheese, bacon, jalapeno, pickles, mayo served with choice of salad,
              chips, or sweet potatoes drizzled with honey"
            />
            <MenuProps
              menuName="Avocado Sprout Burger"
              menuPrice="$15"
              menuDesc="grass fed beef, fresh greens, sprouts, avocado, cheese, mayo, served with choice of salad,
              chips, or sweet potatoes drizzled with honey"
            />
            <MenuProps
              menuName="Yucca Burger"
              menuPrice="$15"
              menuDesc="grass fed beef, cheese, tomato, onion, pickles, mayo, ketchup, served with choice of salad,
              chips, or sweet potatoes drizzled with honey"
            />
            <MenuProps
              menuName="Veggie Burger"
              menuPrice="$15"
              menuDesc="veggie patty, fresh greens, cheese, tomato, onion, pickles, sprouts, avocado, mayo, served with choice of salad,
              chips, or sweet potatoes "
            />
            <h1 className="about-bio-head" id="menu-head-drinks">
              Smoothies & Drinks
              <Image
                src={beveragesSrc}
                alt="Our breakfast menu"
                className="menu-img"
                width={200}
                height={200}
              />
            </h1>
            <MenuProps
              menuName="Sabrina Smoothie"
              menuPrice="$11"
              menuDesc="almond milk, plant based protein, spinach, blueberries, banana, almond butter, coconut oil,
              maple syrup"
            />
            <MenuProps
              menuName="Chocolate Almond Smoothie"
              menuPrice="$10"
              menuDesc="almond milk, bananas, blueberries, almond butter, spinach, cacao, coconut oil, maple syrup"
            />
            <MenuProps
              menuName="Very Berry Smoothie"
              menuPrice="$10"
              menuDesc="almond milk, banana, strawberries, blueberries, spinach coconut oil, maple syrup"
            />
            <MenuProps
              menuName="Green Juice"
              menuPrice="$8"
              menuDesc="apple, cucumber, spinach, celery, lemon, ginger, celery juice"
            />
            <MenuProps
              menuName="Joshua Tree Coffe 16 oz."
              menuPrice="$4"
              menuDesc="hot/iced coffee"
            />
            <MenuProps
              menuName="Butter Coffee"
              menuPrice="$7"
              menuDesc="Joshua Tree Coffee blended with ghee and coconut oil"
            />
            <MenuProps
              menuName="Golden Milk"
              menuPrice="$7"
              menuDesc="almond milk, tulmeric, spices, ghee, maple syrup"
            />
            <MenuProps
              menuName="Masala Chai"
              menuPrice="$7"
              menuDesc="hot/iced black tea, oat milk, cane sugar, cinnamon, clove, cardamom, black pepper, molasses
              lemon juice"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
