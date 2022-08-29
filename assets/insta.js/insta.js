const icon=document.querySelector(".fa-search")
const recent=document.querySelector(".recent-section")
const icons=document.querySelectorAll("i")
const contents=document.querySelectorAll(".contents")

const emojis=document.querySelector('.emoji-btn');
const emojiContent=document.querySelector('.emojes-content');


const questions=document.querySelectorAll('.article');
const likes=document.querySelectorAll('.img-icons');
const cmntBox=document.querySelectorAll('.comment-box');


questions.forEach(function(question){
  const cmnt=question.querySelector('#w3review');
  const btn=question.querySelector('#another');

  cmnt.addEventListener('keyup',function(e){
  
    const values=e.currentTarget.value;
          if((values==="")){
              btn.disabled=true;
              btn.style.color='#cad6e3';
              
              }
          else {
            btn.disabled=false;
            btn.style.color='#096fdc';
            
             }
          
          })

           
})


cmntBox.forEach(function(emoji1){
  const emojis=emoji1.querySelector('.emojes-content');
  const emojiBtn=emoji1.querySelector('.emoji-btn');
  emojiBtn.addEventListener('click',function(){
    emojis.classList.toggle('active');
    })
    const emoji=emoji1.querySelectorAll('.emoji');

emoji.forEach(function(allemoji){
          allemoji.myfunction=function(val){
             emoji1.querySelector('#w3review').value+=val;
          }
    })

})





likes.forEach(function(liked){
    const whiteLike=liked.querySelector('.heart');
    const redLiked=liked.querySelector('.red-heart')
  
    whiteLike.addEventListener('click',function(){
      whiteLike.classList.add('active')
      redLiked.classList.add('active')
    })
      
    redLiked.addEventListener('click',function(){
      whiteLike.classList.remove('active')
      redLiked.classList.remove('active')
    })
  })



function fucktion(){
    icon.classList.add('active');
    recent.classList.add('active')
}

document.addEventListener('click',function(e){
    if(!e.target.matches('input')){
      icon.classList.remove('active')
      recent.classList.remove('active')
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 

  

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    // spaceBetween: -10,
    preventInteractionOnTransition: true,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });


  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });

;