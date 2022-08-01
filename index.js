const QUESTION = document.querySelectorAll('.faq-acc-question');

for (let i = 0; i < QUESTION.length; i++) {
  // default states 
  if (i !== 1) {
    QUESTION[i].parentElement.classList.add('active');
  }
 
  // event listner
  QUESTION[i].addEventListener('click', function() {
    this.parentElement.classList.toggle('active');
  });
}