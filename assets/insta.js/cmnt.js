
const flex=document.querySelector('.ids-section');
const account=document.querySelectorAll('.accounts');
const msgSection=document.querySelectorAll('.message-section')
const textarea=document.querySelector('.chatbox-message-input')
const chatForm=document.querySelector('.chatbox-message-form');
const submit=document.querySelector('.chatbox-message-submit')
const chatboxForm=document.querySelector('.chatbox-message-form');

account.forEach(function(tab,index){

  tab.addEventListener('click',function(){
    msgSection.forEach(function(tab){
      tab.classList.remove('active')
    })
    account.forEach(function(tab){
      tab.classList.remove('active')
    })
    account[index].classList.add('active')
    msgSection[index].classList.add('active')

  })
})


const chatboxMsg=document.querySelector('.chatbox-message-content');
const section=document.querySelectorAll('.message-section');

const idName=document.querySelector('.timing');


section.forEach(function(apex){
  const form=apex.querySelectorAll('.chatbox-message-form');
  const textarea=apex.querySelector('.chatbox-message-input')
  const submit=apex.querySelector('.chatbox-message-submit')
  const chatboxMsg=apex.querySelector('.chatbox-message-content')

form.forEach(function(Form){
  Form.addEventListener('submit',function(e){
    e.preventDefault();
    if(isvalid(textarea.value)){
      writeMessage();
      setTimeout(autoreplay,1000)
    }
  })
})

  

  textarea.addEventListener('keyup',function(e){
    const values=e.currentTarget.value;
    if(((values===""))){
        submit.style.display='none';
        }
    else{
      submit.style.display='block';
       }
    })
    function writeMessage(){
      let anotherMessage=`<span class="messege">  ${textarea.value.trim().replace("\n", '<br />')}</span>`
      let message=`<div class="chatbox-message-item sent">
          <span class="chatbox-message-item-text">
             ${textarea.value.trim().replace(/\n/g,'<br>\n')}
          </span>
        </div>`
        chatboxMsg.insertAdjacentHTML('beforeend',message)
        idName.insertAdjacentHTML('beforebegin',anotherMessage)

        textarea.value='';

        submit.style.display='none';
    }
    


      
function autoreplay(){
  let message=`<div class="chatbox-message-item recive">
  <span class="chatbox-message-item-text">
     Thank u for replay
  </span>
</div>`
chatboxMsg.insertAdjacentHTML('beforeend',message)
textarea.value='';
}
})




function isvalid(value){
  let text=value.replace(/\n/g,'');
  text=text.replace(/\s/g,'');
  return text.length>0;
}


