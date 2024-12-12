let totalPrice = document.getElementById("totalP");
let sum = 0;

function plusClick(id) {
  console.log(id); // p1 / p2 / p3

  let quantity = document.getElementById("q" + id[1]);
  quantity.innerHTML = Number(quantity.innerHTML) + 1;
  let price = document.getElementById("s" + id[1]);
  let total = document.getElementById("t" + id[1]);
  total.innerHTML = Number(total.innerHTML) + Number(price.innerHTML);
  sum = Number(price.innerHTML) + sum;
  totalPrice.innerHTML = sum;
}

function minusClick(id) {
  let quantity = document.getElementById("q" + id[1]);
  if (Number(quantity.innerHTML) > 0) {
    quantity.innerHTML = Number(quantity.innerHTML) - 1;

    let price = document.getElementById("s" + id[1]);
    let total = document.getElementById("t" + id[1]);

    total.innerHTML = Number(total.innerHTML) - Number(price.innerHTML);

    sum = sum - Number(price.innerHTML);
    totalPrice.innerHTML = sum;
  }
}

let deleteButtons = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    deleteButtons[i].parentElement.remove();
  });
}

let heartButtons = document.getElementsByClassName("fa-solid fa-heart");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function (event) {
    // event.target.setAttribute("class", "fa-solid fa-heart like");
    event.target.classList.toggle("like");
    console.log(event.target);
  });
}