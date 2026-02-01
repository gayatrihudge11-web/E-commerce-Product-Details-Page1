function changeImage(element) {
  document.getElementById("mainImage").src = element.src;
}

function selectColor(el) {
  document.querySelectorAll(".color").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
}

function selectSize(el) {
  document.querySelectorAll(".sizes button").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
}

function addToCart() {
  const size = document.querySelector(".sizes button.active");
  const color = document.querySelector(".color.active");

  if (!size || !color) {
    alert("Please select size and color!");
    return;
  }

  document.getElementById("cartMessage").innerText =
    "✅ Added to cart successfully!";
}
