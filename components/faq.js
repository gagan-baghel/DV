const questions = document.querySelectorAll(".question")
questions.forEach((question) => question.addEventListener("click", () =>{
    question.parentNode.classList.toggle("faqactive")
}))