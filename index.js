const faqAccQuestionEl = document.querySelectorAll(".faq-acc-question");
const faqAccAnswerEl = document.querySelectorAll(".faq-acc-answer");
const arrowIconEl = document.querySelectorAll(".arrow-icon");

for (let i = 0; i < faqAccAnswerEl.length; i++) {
  // WE'RE HIDING ALL THE ANSWERS EXCEPT THE 2ND ONE
  if (i !== 1) {
    faqAccAnswerEl[i].style.display = "none";
    
  } else if (i === 1) {
    faqAccQuestionEl[i].style.fontWeight = "700";
  }
  // SHOWING ANSWERS WHEN QUESTIONS ARE CLICKED
  faqAccQuestionEl[i].addEventListener("click",
    function() {
      if (faqAccAnswerEl[i].style.display === "none") {
        faqAccQuestionEl[i].style.fontWeight = "700";
        faqAccAnswerEl[i].style.display = "block";
        arrowIconEl[i].style.transform = "rotate(180deg)";
      } else {
        faqAccQuestionEl[i].style.fontWeight = "400";
        faqAccAnswerEl[i].style.display = "none";
        arrowIconEl[i].style.transform = "none";
      }
    })
}