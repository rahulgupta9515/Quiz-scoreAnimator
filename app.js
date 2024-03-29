const correctAns = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const score_disp = document.querySelector('.result span');


form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAns.forEach((answer, index)=>{
        if(answer === correctAns[index]){
            score +=25;
        }
    });
    scrollTo(0,0);
    result.classList.remove('d-none');  
    
    let i=0;
    const timer = setInterval(() =>{
        console.log(score);
        score_disp.innerHTML = `${i}%`;
        if(i === score){
            clearInterval(timer);
        }else{
            i++;
        }
    }, 10);
});
