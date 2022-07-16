const FAQ_ACC_QUESTION_EL = document.querySelectorAll(".faq-acc-question");
const FAQ_ACC_ANSWER_EL = document.querySelectorAll(".faq-acc-answer");
const ARROW_ICON_EL = document.querySelectorAll(".arrow-icon");

for (let i = 0; i < FAQ_ACC_QUESTION_EL.length; i++) {
  const FAQ_ACC_ANSWER_EL = document.querySelectorAll(".faq-acc-answer");
  const ARROW_ICON_EL = document.querySelectorAll(".arrow-icon");
  if (i !== 1) {
    // HIDING ALL ANSWERS BY DEFAULT EXCEPT THE 2ND ONE
    FAQ_ACC_ANSWER_EL[i].style.display = "none";
    FAQ_ACC_QUESTION_EL[i].style.fontWeight = "var(--kumbh-sans-wght-regular)";
    ARROW_ICON_EL[i].style.transform = "none";
  }
  //ONCLICK EVENT LISTENER
  FAQ_ACC_QUESTION_EL[i].addEventListener("click", () => {
    if (FAQ_ACC_ANSWER_EL[i].style.display === "none") {
      FAQ_ACC_ANSWER_EL[i].style.display = "block";
      FAQ_ACC_QUESTION_EL[i].style.fontWeight = "var(--kumbh-sans-wght-bold)";
      ARROW_ICON_EL[i].style.transform = "rotate(180deg)";
    } else {
      FAQ_ACC_ANSWER_EL[i].style.display = "none";
      FAQ_ACC_QUESTION_EL[i].style.fontWeight = "var(--kumbh-sans-wght-regular)";
      ARROW_ICON_EL[i].style.transform = "none";
    }
  });
}
