// get the input element
const searchValue = document.getElementById("text-input");

// get the list element
const liElement = document.getElementById("ul-products");

// function to get the data from the server
$(document).ready(() =>
  $("button").click(() =>
    $(function () {
      $.ajax({
        type: "GET",
        url: `http://localhost:3000/api/scrape?keyword=${searchValue.value}`,
        success: (data) => innerList(data),
      });
    })
  )
);

// function to create the list element for each product
function makeContainer(product) {
  const { title, price, rating, reviews, imageUrl } = product;
  return `<div class="content">
  <img src="${imageUrl}" alt="productimage" />
      <p class="card-text mb-auto">${title}</p>
      <h3>${price}</h3>
      <p>${rating}</p>
      <p>${reviews} reviews</p>
</div>`;
}

function innerList(data) {
  // remove all children from the list element
  while (liElement.firstChild) {
    liElement.removeChild(liElement.firstChild);
  }
  // append the new data to the list element
  const $products = $("#ul-products");
  // loop through the data and append it to the list
  $.each(data, (i, products) => $products.append(`${makeContainer(products)}`));
}
