const cart = document.getElementsByClassName("products-in-cart")[0];
const productsContainer = document.getElementsByClassName("products-container")[0];
const confirmButton = document.querySelector("body > div.cart > button");
const addToCartButton = document.querySelectorAll(".addToCart");
console.log(addToCartButton)
for(let i = 0; i < addToCartButton.length; i++){
    addToCartButton[i].addEventListener("click",() =>{
        let productId = addToCartButton[i].name;
        console.log(productId);
        const product = productsContainer.querySelector("[name='"+productId+"']");
        const clonedProd = product.cloneNode(true);
        addToCartButtonNew = clonedProd.getElementsByTagName("button")[0];
        addToCartButtonNew.remove();
        console.log(clonedProd)
        cart.appendChild(clonedProd);
    });
}

confirmButton.addEventListener("click", () => {
    let ids = [];
    const productsInCart = cart.querySelectorAll("div.product");
    console.log(productsInCart[0].name)
    let data = new FormData();
    data.append("product", ids);

    let xml = new XMLHttpRequest();
    xml.open("POST","/menu/commit")
    xml.httpRequestHeader("Content-type","application/x-www-form-urlencoded")
    xml.send(data);
});
