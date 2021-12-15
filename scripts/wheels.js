import { getWheels, setWheel, } from "./database.js";

const allwheels = getWheels();

document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "wheel") {
    setWheel(parseInt(changeEvent.target.value))
  }
});
// figure out how to add please select one to my code

export const Wheels = () => {
  let html = "<h2>Wheels</h2>";
  html += `<select name="wheel">`;

  const dropDownOfWheelArray = allwheels.map((wheel) => {
    return `
    <option  value="${wheel.id}" /> ${wheel.type}
     </option>
        `;
  });

  html += dropDownOfWheelArray.join("");
  html += "</select>";
  return html;
};
