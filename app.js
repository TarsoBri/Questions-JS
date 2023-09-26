const textQuestion = document.querySelectorAll('.question');

textQuestion.forEach(function (question){
    const btn = question.querySelector('.question-btn')
    
    btn.addEventListener('click', abreMenu);
    
    function abreMenu(){

        textQuestion.forEach(function (item){
            if (item !== question) {
                item.classList.remove("show-text");
              }
        });
      
        question.classList.toggle("show-text");
    };

});