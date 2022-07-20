const FAQ_ACC_QUESTION_EL = document.querySelectorAll(".faq-acc-question");

for (let i = 0; i < FAQ_ACC_QUESTION_EL.length; i++) {
  const FAQ_ACC_ANSWER_EL = FAQ_ACC_QUESTION_EL[i].nextElementSibling;
  const ARROW_ICON_EL = FAQ_ACC_QUESTION_EL[i].firstElementChild;
     
  //ONCLICK EVENT LISTENER
  FAQ_ACC_QUESTION_EL[i].addEventListener("click", () => {
    if (FAQ_ACC_ANSWER_EL.style.display === "none") {
      FAQ_ACC_ANSWER_EL.style.display = "block";
      FAQ_ACC_ANSWER_EL.style.maxHeight = FAQ_ACC_ANSWER_EL.scrollHeight + "px";
      FAQ_ACC_QUESTION_EL[i].style.fontWeight = "var(--kumbh-sans-wght-bold)";
      ARROW_ICON_EL.style.transform = "rotate(180deg)";
    } else {
      FAQ_ACC_ANSWER_EL.style.display = "none";
      FAQ_ACC_ANSWER_EL.style.maxHeight = "0";
      FAQ_ACC_QUESTION_EL[i].style.fontWeight = "var(--kumbh-sans-wght-regular)";
      ARROW_ICON_EL.style.transform = "none";
    }
  });
  
  // HIDING EVERY ANSWER EXCEPT THE 2ND ONE
  if (i !== 1) {
    // HIDING ALL ANSWERS BY DEFAULT EXCEPT THE 2ND ONE
    FAQ_ACC_ANSWER_EL.style.display = "none";
    FAQ_ACC_ANSWER_EL.style.maxHeight = "0";    
    FAQ_ACC_QUESTION_EL[i].style.fontWeight = "var(--kumbh-sans-wght-regular)";
    ARROW_ICON_EL.style.transform = "none";
  } 
}
