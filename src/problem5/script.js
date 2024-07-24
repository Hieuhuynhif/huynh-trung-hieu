document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Fetching input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const color = document.getElementById("color").value;

  // Displaying input values
  const result = document.getElementById("result");
  result.innerHTML = `
        <br/>
        <h3>Submitted Values:</h3>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Favorite Color: ${color}</p>
    `;

  // Changing background color
  document.body.style.backgroundColor = color;
});
