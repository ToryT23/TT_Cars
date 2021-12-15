import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();

document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "technology") {
    setTechnology(parseInt(changeEvent.target.value))
  }
});

export const Technologies = () => {
  let html = "<h2>Technologies</h2>";
  html += `<select name="technology">
  <option> Please Select One </option>`;

  const dropDownOfTechnologiesArray = technologies.map((technology) => {
    return `

<option  value="${technology.id}" /> ${technology.type}
 </option>
    `;
  });

  html += dropDownOfTechnologiesArray.join("");
  html += "</select>";
  return html;
};
