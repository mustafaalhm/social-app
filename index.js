// sidebar
const menuItem = document.querySelectorAll(".menu-item");
// message
const messageNotification = document.querySelector('#message-notification');

const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')
const post = document.querySelectorAll('.feed')

const messageSearch = document.querySelector('#message-search');
const postSearch = document.querySelector('#postsearch');

// theme=========
const theme = document.querySelector('#theme');
const themeModal =document.querySelector('.custom-theme')



// =========font size======
const fontsizes=document.querySelectorAll('.choose-size span')

const root = document.querySelector(':root');


// color pallet

const colorPallete = document.querySelectorAll('.choose-color span')

// color background

const Bg1 =document.querySelector('.bg-1');
const Bg2 =document.querySelector('.bg-2');
const Bg3 =document.querySelector('.bg-3');


// ============side bar =================
// remove active calss from all
const removActive = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};
// add class active
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
      removActive();
    item.classList.add("active");
    if(item.id != "notifications"){
        document.querySelector('.notification-popup').style.display="none";
    }else{
        document.querySelector('.notification-popup').style.display="block";
        document.querySelector('#notifications .notification-count').style.display="none";
        
    }
  });
});

// =============messages=======================
// message search chat
const searchMessage =()=>{
    const val =messageSearch.value.toLowerCase();
    message.forEach(user=>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display ='flex';
        }else{
            user.style.display ='none'
        }
    })
}
messageSearch.addEventListener('keyup',searchMessage);

// highlight message card when click on notification icon
messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow ='0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none'
    setTimeout(()=>{
        messages.style.boxShadow ='none'
    },2000)
})

// =============theme==============
// open theme
const openThemModal =()=>{
    themeModal.style.display ='grid';
}
// close theme
const closeThemeModal =(e)=>{
    if(e.target.classList.contains('custom-theme')){
         themeModal.style.display ='none';
    }
   
}
theme.addEventListener('click',openThemModal);

// close theme
themeModal.addEventListener('click',closeThemeModal);

// ==========font size============
// remove active classs
const removesizeSelector =()=>{
    fontsizes.forEach(size=>{
        size.classList.remove('active')
    })
}
fontsizes.forEach(size=>{
  
    // change html font size
   
    
    size.addEventListener('click',()=>{
        let fontsize ;
        removesizeSelector();
       size.classList.toggle('active')
        if(size.classList.contains('font-size-1')){
            fontsize = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontsize = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontsize = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }else  if(size.classList.contains('font-size-4')){
            fontsize = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }else  if(size.classList.contains('font-size-5')){
            fontsize = '22px';
            root.style.setProperty('----sticky-top-left','-10rem');
            root.style.setProperty('----sticky-top-right','-33rem');
        }
         document.querySelector('html').style.fontSize = fontsize;
    })
    
})
// color pallette
const removeColorSelector =()=>{
    colorPallete.forEach(color=>{
        color.classList.remove('active')
    })
}
colorPallete.forEach(color =>{
    
    color.addEventListener('click',()=>{
        removeColorSelector();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})

// =========background===============

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg =()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',()=>{
   
    // add active class
    Bg2.classList.remove('active')
    Bg1.classList.add('active')
    Bg3.classList.remove('active')
    
    window.location.reload();
    changeBg();
})
Bg2.addEventListener('click',()=>{
    darkColorLightness='95%'
    whiteColorLightness='20%'
    lightColorLightness='15%'

    // add active class
    Bg2.classList.add('active')
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')
    // window.location.reload();
    changeBg();
})
Bg3.addEventListener('click',()=>{
    darkColorLightness='95%'
    whiteColorLightness='10%'
    lightColorLightness='0%'

    // add active class
    Bg2.classList.remove('active')
    Bg1.classList.remove('active')
    Bg3.classList.add('active')
    // window.location.reload();
    changeBg();
})

// =============messages=======================
// post search 
const searchPost =()=>{
    const val =postSearch.value.toLowerCase();
    post.forEach(user=>{
        let name = user.querySelector('h3').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display ='block';
        }else{
            user.style.display ='none'
        }
    })
}
postSearch.addEventListener('keyup',searchPost);
