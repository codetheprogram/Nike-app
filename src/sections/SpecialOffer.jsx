import { offer } from '../assets/images'
import {arrowRight} from "../assets/icons"
import Button from "../components/Button"
import backgroundColor from "../components/Button"
import textColor from "../components/Button"
import borderColor from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773}
        height={687} className='0bject-contain' />
      </div>

      <div className="flex flex-1 flex-col">
           <h2 className="mt-10 font-palanquin
           text-4xl capitalize 
            font-bold lg:max-w-lg">

            <span className="text-coral-red"> Special</span>
            <span className="text-white-400"> Offer</span> 
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Discover stylish Nike arrival, quality comfort,
            and innovation for your active life.
          </p>
          <p className="mt-4 lg:max-w-lg
          info-text">
            Ensuring premium comfort
            and style, our meticulously crafted foot 
            wear is designed to elevate your experience,
            providing you with unmatched quality, innovation,
            and a touch of elegance
          </p>
          <div className="mt-11 flex flex-wrap
          gap-4">
          <Button label="shop now"
          iconURL={arrowRight}
          /> 
          <Button 
          label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          />
          </div>
               </div>
    </section>
  )
}

export default SpecialOffer