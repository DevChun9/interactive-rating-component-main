const btn_submit = document.querySelector('.card__submit-btn');
const card_content_1 = document.querySelector('.content_1');
const card_content_2 = document.querySelector('.content_2');
const ratingBtns = document.querySelectorAll('.py-4');
const score = document.querySelector('.score');
let stars_score = 

btn_submit.addEventListener('click', onSubmit);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() {
    card_content_1.classList.add('hide');
    card_content_2.classList.remove('yes');
    card_content_2.classList.add('show');
    score.textContent = stars_score;
}

function handleRatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('num');
    });
    event.target.classList.add('mystyle');

    stars_score = event.target.textContent;
}

