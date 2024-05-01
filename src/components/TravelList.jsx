import TravelPlansData from "../assets/travel-plans.json"
import { useState } from "react"

function TravelList(){
    const [TravelPlans,SetTravelPlans] = useState(TravelPlansData)

    return (
        <>
        {TravelPlans.map(element => {
            return (
                <div className="travel">
                    <img src={element.image} />
                    <div>
                    <h1>{element.destination} ({ element.days } Days )</h1>
                    <h3>{element.description}</h3>
                    <p>Price: {element.totalCost}</p>

                    </div>
                </div>
            )
        })}
        </>
    )
}

export default TravelList