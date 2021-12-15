import { getOrders} from "./database.js";
import { getInteriors, getPaintColors, getWheels, getTechnologies } from "./database.js";


const buildOrderCarListItem = (order) => {
    const interiors = getInteriors()
  // Remember that the function you pass to find() must return true/false
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const allwheels = getWheels()
    const foundWheel = allwheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const technologies = getTechnologies()
    const foundTechnology = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    const paintColor = getPaintColors()
    const foundPaint = paintColor.find(
        (onePaintColor) => {
            return onePaintColor.id === order.paintId
        }
    )

 const totalPrice = foundInterior.price + foundPaint.price + foundTechnology.price + foundWheel.price
 

 return ` 
 <li order--list-item">
 Order #${order.id} placed on ${new Date(order.timestamp).toLocaleString()},
 Is a new 2021 SUV and it cost $${totalPrice}.
 <p>
 Total Price: $${totalPrice.toFixed(2)}
 </p> 
</li>
`
 
}


export const Orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map( (order) => buildOrderCarListItem(order))

    html += listItems.join("")
    html += "</ul>"

    return html
}
