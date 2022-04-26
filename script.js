// *********for slider*****************//

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:5,
            singleItem: true,
            nav:true,
            navText:[" <div class='left-arrow'></div>","<div class='right-arrow'></div>"],
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,

                },
                768:{
                    items:1,
                    nav:false
               
                },
                1000:{
                    items:1,
               
                }
            }
        }
    );
});

// ************for mobile menu toggle********

$(document).ready( () => {
    $('.hamburgur').click(()=>{
        $('.nav-section').toggleClass('show');
    });
});

$(document).ready( () => {
    $(".nav").click( () => {
        $(".nav-section").removeClass('show');
    })
})



function valFirstName(){
    const nameErr = document.getElementById("name-err")
    const name = document.getElementById("fnam");
    const fname = document.getElementById("fname-l")
    const regx =/^[a-zA-Z ]{2,30}$/
    if (name.value.length == 0) {
        nameErr.classList.add("name-err")
        name.style.border="1px solid #FF7777"
        fname.style ="color:#FF7777;top:72px;background: linear-gradient(180deg, #2A7D6C 0%, rgba(62, 105, 96, 0.62) 100%);"
        return false
    }
    if(!name.value.match(regx)){
        nameErr.classList.remove("name-err")
        name.style.border="1px solid #fff"
        fname.style ="color:#fff;top:72px;background: linear-gradient(180deg, #2A7D6C 0%, rgba(62, 105, 96, 0.62) 100%);"

        return true
    }
}


function valLastname(){
    const nameErr = document.getElementById("last-err")
    const name = document.getElementById("lnam");
    const fname = document.getElementById("lname-l")
    const regx =/^[a-zA-Z ]{2,30}$/
    if (name.value.length == 0) {
        nameErr.classList.add("last-err")
        name.style.border="1px solid #FF7777"
        fname.style.color ="#FF7777"
        fname.style.maxWidth = "366px" ?"top:134px; left:58px;" :"left:245px;top:72px;"
        return false
    }
    if(!name.value.match(regx)){
        nameErr.classList.remove("last-err")
        name.style.border="1px solid #fff"
        fname.style ="color:#fff;  background: linear-gradient(180deg, #2A7D6C 0%, rgba(62, 105, 96, 0.62) 100%);"
        fname.style.maxWidth = "366px" ?"top:134px; left:58px;" :"left:245px;top:72px;"
        return true
    }
}
function valEmail(){
    const nameErr = document.getElementById("email-err")
    const name = document.getElementById("lemail");
    const fname = document.getElementById("email-l")
    const regx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (name.value.length == 0) {
        nameErr.classList.add("email-err")
        name.style.border="1px solid #FF7777"
        fname.style ="color:#FF7777;background: linear-gradient(180deg, #2A7D6C 0%, rgba(62, 105, 96, 0.62) 100%);"
        fname.style.maxWidth = "366px" ? "top: 201px" : "top:142px;"
        return false
    }
    if(!name.value.match(regx)){
        nameErr.classList.remove("email-err")
        name.style.border="1px solid #fff"
        fname.style.color ="color:#fff; left:46px; top:142px; background:linear-gradient(180deg, #2A7D6C 0%, rgba(62, 105, 96, 0.62) 100%)"
      
        return true
    }
}



function validateCompany(){
    const nameErr = document.getElementById("com-err")
    const company = document.getElementById("lcompany");
    const fname = document.getElementById("com-l")
    const regx =/^[a-zA-Z ]{2,30}$/
    if (company.value.length == 0) {
        nameErr.classList.add("com-err")
        company.style.border="1px solid #FF7777"
        fname.style ="color:#FF7777;background: linear-gradient(180deg, #2A7D6C 0%, rgba(62, 105, 96, 0.62) 100%);"
        fname.style.maxWidth = "366px" ? "top: 274px" : "top:142px;"
        return false
    }
    if(!company.value.match(regx)){
        nameErr.classList.remove("com-err")
        company.style.border="1px solid #fff"
        fname.style.color ="color:#fff; background: linear-gradient(180deg, #2A7D6C 0%, rgba(62, 105, 96, 0.62) 100%);"
        fname.style.maxWidth = "366px" ? "top: 274px" : "top:142px;"
        return true
    }
}

// validate form


function formValidate(){
   const firstName = document.getElementById("fnam").value
   const lastName = document.getElementById("lnam").value
   const email = document.getElementById("lemail").value
   const company = document.getElementById("lcompany").value
   if(firstName =="" || firstName == null){
       valFirstName()
       return false
   }
   if(lastName == "" || lastName == null){
       valLastname()
       return false
   }
   if(email == "" || email == null){
        valEmail()
       return false
   }
   if(company == "" || company == null){
        validateCompany()
        return false
   }
}


// onclick="return vaidateButton()"
  ///nav active 

  function navActive () {
    const header = document.getElementById("nav-ul");
    const btns = header.getElementsByClassName("nav");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active_nav");
      current[0].className = current[0].className.replace(" active_nav", "");
      this.className += " active_nav";
      });
    }
  }

navActive()


//magnific-popup for video popup

$('.videoplaybutton').magnificPopup({
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 
        patterns: {
          youtube: {
            index: 'youtube.com/', 
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%' 
          },

        },
        srcAction: 'iframe_src', 
      }
  });