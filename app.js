const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    console.log(e.currentTarget); // current target la thang button minh dang an vao
    console.log(e.currentTarget.parentElement); // question-title la parentelement
    console.log(e.currentTarget.parentElement.parentElement); // question  la parentelement

    question.classList.toggle("show-text");
  });
});

