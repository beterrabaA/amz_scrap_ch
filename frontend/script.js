const searchValue = document.getElementById("text-input");
const liElement = document.getElementById("ul-products");

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
  while (liElement.firstChild) {
    liElement.removeChild(liElement.firstChild);
  }
  const $products = $("#ul-products");
  $.each(data, (i, products) => $products.append(`${makeContainer(products)}`));
}
