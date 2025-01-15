// searchbar keyup function


var productcontainer = document.querySelector(".products")
var productlist = productcontainer.querySelectorAll("div")
var search = document.getElementById("search")

search.addEventListener("keyup", function () {


    var inputvalue = event.target.value.toUpperCase()

    for (i=0;i<productlist.length;i++) {

        var productname=productlist[i].querySelector("p").innerHTML
        if (productname.toUpperCase().indexOf(inputvalue)<0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }
    }












})


// Side navbar function
var sidenav = document.querySelector(".side-navbar")
function clickbar() {
    sidenav.style.left = "0"

}
function closebar() {
    sidenav.style.left = "-60%"
}