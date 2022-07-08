const cart = document.getElementsByClassName("products-in-cart")[0];
const productsContainer = document.getElementsByClassName("products-container")[0];
const confirmButton = document.querySelector("body > div.cart > button");
const addToCartButton = document.querySelectorAll(".addToCart");
let ids = [];
console.log(addToCartButton);
for(let i = 0; i < addToCartButton.length; i++){
    addToCartButton[i].addEventListener("click",() =>{
        let productId = addToCartButton[i].name;
        ids.push(productId);
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
    let data = new FormData();
    data.append("product", ids);
    console.log(ids);
    let xml = new XMLHttpRequest();
    xml.open("POST","/menu/commit",true)
    xml.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8")
    xml.send("product_ids=" + ids);
});
//ver esto
// https://code-maven.com/slides/python/flask-and-ajax-plain-javascript