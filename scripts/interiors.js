import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors();

document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "interior") {
    setInterior(parseInt(changeEvent.target.value))
  }
});

export const Interiors = () => {
  let html = "<h2>Interiors</h2>";
  html += `<select name="interior">
  <option> Please Select One </option>`;

  const dropDownOfInteriorArray = interiors.map((interior) => {
    return `
    
<option  
value="${interior.id}" /> ${interior.type}

</option>
    `;
  });

  html += dropDownOfInteriorArray.join("");
  html += "</select>";
  return html;
};
