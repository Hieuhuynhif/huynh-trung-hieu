document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetching input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var color = document.getElementById("color").value;

    // Displaying input values
    var result = document.getElementById("result");
    result.innerHTML = `
        <h3>Submitted Values:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Favorite Color:</strong> ${color}</p>
    `;

    // Changing background color
    document.body.style.backgroundColor = color;
});