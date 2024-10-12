import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard"

const CostumerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center
            text-4xl font-bold bg-black">
                <span className="text-white-400">What Our</span> 
                <span className=" text-coral-red"> Customers </span>
                <span className="text-white-400">Say?</span>
            </h3>
            <p className="info-text m-auto
            mt-4-lg text-center bg-black">Hear genuine stories
                from our satisfied customers about
                their exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1
            justify-evenly items-center
             ma-lg:flex-col
            gap-14 bg-black">
                {reviews.map((review) => (
                    <ReviewCard 
                    key={review.customerName}
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    rating={review.rating}
                    feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    )
} 

export default CostumerReviews