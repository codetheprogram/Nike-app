import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import  ShoeCard  from "../components/ShoeCard";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = 
  useState(bigShoe1)

  return (
    <section
    id="home"
      className="w-full flex xl:flex-row 
      flex-col justify-center
      max-container bg-stone-70"
      >
        <div className="relative xl:w-2/5 flex-col 
        justify-center items-start w-full
        max-xl:padding-x pt-28">
          <p className="text-xl text-coral-red
           font-montserrat">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin
           text-8xl max-sm:text-[72px] 
           max-sm:leading-[82]
            font-bold">
            <span className="xl:bg-stone-970
             xl:whitespace-nowrap text-white-400 relative
              z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-coral-red
           inline-block mt-3">Nike</span> 
           <span className="text-white-400"> Shoes</span>
          </h1>
          <p className="font-montserrat text-white-400
          text-lg leading-8 mt-6 mb-14
          sm:max-w-sm">
            Discover stylish Nike arrival, quality comfort,
            and innovation for your active life.
          </p>
          <Button label="Shop now"
          iconURL={arrowRight}/>
          <div className="flex justify-start 
          items-start flex-wrap w-full mt-20 
          gap-16">
            {statistics.map((stat, index)=> (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin
                font-bold text-white-400">
                  {stat.value}
                  </p>

                <p className="leading-7 
                font-montserrat text-white-400
                ">{stat.label}</p>

              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex
        justify-center items-center xl:min-h-screen
        max-xl:py-40 bg-transparent bg-hero
        bg-cover bg-center">
          <img 
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 bg-transparent"/>
        
        <div className="flex sm:gap-6 gap-4
        absolute -bottom-[5%] sm:left-[10%]
        max-sm:px-6 bg-transparent">
          {shoes.map((shoe) =>(
            <div className="bg-transparent" key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}/>
              </div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default Hero