// Select the elements from the page
const input = document.getElementById("cta-input");
const button = document.getElementById("cta-btn");
const heading = document.getElementById("cta");

// When the button is clicked, update the h2 text
button.addEventListener("click", function() {
  const newHeadline = input.value;

  if (newHeadline !== "") {
    heading.textContent = newHeadline;
    input.value = "";
  }
});
