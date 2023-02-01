import * as React from 'react';
import './Main.css';
import image from '../../assets/food.jpg'
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.webp'


function Main() {

  return (

    <main className='cont'>
      <div className='hero-container'>
        <img src={image} className='hero' />
      </div>
      <div className='menu'>
        <p className='menu-head'>
          Little Lemon Special's
        </p>
        <div className='item1'>
          <img src={item1} className='item' />
          <div className='item1-des'>
            <p className='des-head'>Falafel Deluxe</p>
            <p className='des-con'>Falafel are deep-fried balls or patties made from chickpeas or fava beans, sometimes both, plus fresh herbs and spices. Falafel is a popular Middle Eastern street food sold from vendors or fast-casual spots in countries such as Egypt, Syria, Lebanon, Turkey and Israel, where it's the national dish.</p>
          </div>
        </div>
        <div className='item2'>
          <img src={item2} className='item' />
          <div className='item1-des'>
            <p className='des-head'>Shawarma Roll</p>
            <p className='des-con'>Shawarma being popular street food in the Middle East, which originated in Turkey and is made of spit-roasted layers of lamb, beef, or other meat that are sliced and often wrapped in or served with pita. Shawarma is similar to Greek gyros, though the former is seasoned with more spices and the latter with more herbs.</p>
          </div>
        </div>
        <div className='item3'>
          <img src={item3} className='item' />
          <div className='item1-des'>
            <p className='des-head'>Baklava Royal</p>
            <p className='des-con'>Baklava is an utterly divine and multi-textured pastry dessert, originating from Turkey during the Ottoman Empire’s rule.
              It sandwiches beds of crushed nuts between layers of filo pastry, and it fuses these layers together with sweet honey syrup.
              Baklava’s pastry layers have a flakey and buttery texture. This crunch, combined with the thick, sweet texture of the honey, is an exquisite bite.</p>
          </div>
        </div>
      </div>
      <div className='testimony'>
        <p className='test-head'>Testimonials</p>
        <div className='test'>
          <p className='test-cont'>
            "Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment. My husband was very impressed and we can’t wait for our parents to come visit so that we can share our new favorite place with them."
          </p>
          <p className='test-auth'>
            -Michelle,Austin
          </p>
        </div>
        <div className='test'>
          <p className='test-cont'>
            "Thank you both for helping us celebrate Dad’s 90th birthday last night. The good family memories will last forever. Dad had a great time, the staff were all excellent and the food delicious. My husband is ready to try preparing duck confit now! I”m sure it won’t be as good as yours."
          </p>
          <p className='test-auth'>
            -Andrea,Ohio
          </p>
        </div>
        <div className='test'>
          <p className='test-cont'>
            "Last Friday I came for restaurant week. It was FABULOUS! The portions were overly generous. Everything was so yummy , what a bargain. I will be back soon."
          </p>
          <p className='test-auth'>
            -Gregory,Detroit
          </p>
        </div>
      </div>
    </main>
  )
}

export default Main;