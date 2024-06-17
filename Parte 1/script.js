let cart = [];

document.addEventListener("DOMContentLoaded", function() {
    const products = document.getElementById("products");
    const cartButton = document.getElementById("cart-button");
    const cartContent = document.getElementById("cart-content");
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout");

    products.addEventListener("click", function(event) {
        if (event.target.classList.contains("add-to-cart")) {
            const product = event.target.parentNode;
            const productName = product.querySelector("h3").textContent;
            const productPrice = parseFloat(product.querySelector("p").textContent.replace("R$ ", ""));
            cart.push({ name: productName, price: productPrice });
            updateCart();
        }
    });

    cartButton.addEventListener("click", function() {
        cartContent.classList.toggle("show");
    });

    cartList.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove")) {
            const productName = event.target.parentNode.querySelector("span").textContent;
            const index = cart.findIndex(function(item) {
                return item.name === productName;
            });
            cart.splice(index, 1);
            updateCart();
        }
    });
    
    // Remova o segundo evento de clique do cartList
    
    // Remova o segundo evento de clique do cartList

    checkoutButton.addEventListener("click", function() {
        // Implemente a lógica de pagamento aqui
        alert("Pagamento realizado com sucesso!");
    });

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;
        cart.forEach(function(item) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)}`;
            const removeButton = document.createElement("button");
            removeButton.className = "remove";
            removeButton.textContent = "Remover";
            listItem.appendChild(removeButton);
            cartList.appendChild(listItem);
            total += item.price;
        });
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
});
