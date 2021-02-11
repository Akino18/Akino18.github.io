let questions = document.querySelectorAll(".question");


questions.forEach(el => {
    el.addEventListener("click", (e) => {
        el.classList.toggle("active")
        

    })
})



