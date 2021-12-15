import { TTCars } from "./TTCars.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = TTCars()
}
renderAllHTML()
// this addEventListener is used to so the regenerate the html file after the button has been clicked
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
