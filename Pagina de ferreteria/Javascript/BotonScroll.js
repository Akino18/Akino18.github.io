const d = document;
let $buttom = d.getElementById("buttom");

addEventListener("scroll", (e) => {


    if (scrollY > 300) {
        $buttom.classList.add("active");
    } else {
        $buttom.classList.remove("active");
    }
})


$buttom.addEventListener("click", () => {
    window.scrollTo({ top: 0 })
})