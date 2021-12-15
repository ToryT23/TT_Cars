import { Technologies } from "./technlogies.js";
import { paintColors } from "./paint.js";
import { Wheels } from "./wheels.js";
import { Interiors } from "./interiors.js";
import {Orders} from "./orders.js"
import {addCustomOrder} from "./database.js"



document.addEventListener(
    "click",
    (event) => {
    if(event.target.id === "orderButton"){
        addCustomOrder()
    }
    }
)

export const TTCars = () => {
  return `
        <h1> Tory's Luxury Cars </h1>
        <article class="choices">
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__paint options">
                ${paintColors()}
            </section>
            <section class="choices__wheel options">
                ${Wheels()}
            </section>
            <section class="choices__interior options">
                ${Interiors()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
           ${Orders()}
        </article>
    `;
};
