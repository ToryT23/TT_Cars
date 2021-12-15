import { getPaintColors, setPaint } from "./database.js";

const paints = getPaintColors();

document.addEventListener("click", (changeEvent) => {
  if (changeEvent.target.name === "paint") {
    setPaint(parseInt(changeEvent.target.value))
  }
});

export const paintColors = () => {
  let html = "<h2>Paint Colors</h2>";
  html += `<select name="paint">`;

  // name = "paint" is used to let the eventlistener know that we are looking for only paints
  // im am mapping over my paintColor array to display each options for the different paint colors
  const dropDownOfPaintColorsArray = paints.map((paint) => {
    return `
    
    <option  value="${paint.id}" /> ${paint.color}
    </option>
    `;
  });

  html += dropDownOfPaintColorsArray.join("");
  html += "</select>";
  return html;
};
