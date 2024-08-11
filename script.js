// Select the loader element
var loader_div = document.querySelector('.loader-div');

// Show the loader when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    loader_div.style.display = 'none';
});

// Function to check if all images are loaded
function imagesLoaded() {
    const images = document.querySelectorAll('img');
    let loadedCount = 0;

    images.forEach(image => {
        if (image.complete) {
            loadedCount++;
        } else {
            image.addEventListener('load', function() {
                loadedCount++;
                if (loadedCount === images.length) {
                    loader_div.style.display = 'none';

                }
            });
            image.addEventListener('error', function() {
                loadedCount++;
                if (loadedCount === images.length) {
                    loader_div.style.display = 'none';

                }
            });
        }
    });

    // In case all images are already loaded
    if (loadedCount === images.length) {
        loader_div.style.display = 'none';
    }
}

// Check if all images are loaded on window load
window.addEventListener("load", imagesLoaded);




/* Slider */
let currentIndex = 0;

const sliderControlItems = document.querySelectorAll('.slider-control-li');
sliderControlItems[0].style.backgroundColor = 'rgb(59, 88, 255)';

function showSlide(index,a) {
    const slide = document.querySelectorAll('.slide')
    const totalSlides = slide.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    var t1 = gsap.timeline();
    slide.forEach(element => {
        if(a==1){
            t1.to(element,{
                y:offset+'%',
                duration:0.2,
            });

        }
        else{

            element.style.transform = `translateY(${offset}%)`;
        }
        
        
    
        
    });

    if(a==1){

        gsap.from('.slide h1',{
            delay:0.6,
            opacity:0,
            scale:0.2,
            // x:300,
            
        });
        
        // gsap.to('.slide h1',{
        //     delay:1,
        //     opacity:1,
        // });
    }
    
    sliderControlItems.forEach((elem, index) => {
        elem.style.backgroundColor = 'rgb(40, 40, 40)';
    });


    sliderControlItems[currentIndex].style.backgroundColor = 'rgb(59, 88, 255)';
}

function nextSlide(a) {
    showSlide(currentIndex + 1,a);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide functionality (optional)
const myinterval = setInterval(() => {
    nextSlide(1);
}, 3000); // Change slide every 3 seconds


setTimeout(() => {
    clearInterval(myInterval);
    console.log("Auto-slide stopped"); // This is optional for debugging purposes
  }, 10000);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
    
  clearInterval(myinterval);
});


sliderControlItems.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        showSlide(index);
        console.log(index);
        clearInterval(myinterval);
    });
});





const nav_items = document.querySelectorAll('.nav-link');

function removeActiveLink()
{
    
    nav_items.forEach((elem, index) => {
        elem.classList.remove('active-link');
        console.log(index);
    });

}


nav_items.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        removeActiveLink(); 
        elem.classList.add('active-link');
        console.log(index);
    });
});










const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active-link', link.getAttribute('href').substring(1) === entry.target.id);
                });
            }
        });
    },
    {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.5 // Adjust based on when you want the link to become active
    }
);

sections.forEach(section => {
    observer.observe(section);
});


/*Click Navbar Btn */


var nav_btn = document.querySelector('#nav-btn');
var nav_btn_img = document.querySelector('#heroimgmob');
var navbar = document.querySelector('#navbar-mob');
var nav_btn_close = document.querySelector('#nav-btn-close');

nav_btn.addEventListener('click',()=>{
    
    gsap.to('#nav-btn',{
        y:-20,
        opacity:0,
        duration:0.2,
        
    });

    gsap.to('#nav-btn-close',{
        delay:0.5,
        rotation:360,
        duration:0.5,
    });

    gsap.to('#navbar-mob',{
        x: '100%',
    });

    
    gsap.from('#heroimg',{
        x:-100,
        delay:0.5,
        opacity:0,
        scale:0.5,
        duration:0.5,
    });

    gsap.from('#heroname',{
        x:+100,
        delay:0.5,
        opacity:0,
        scale:0.5,
        duration:0.5,
    });


    gsap.from('.nav-contact',{
        x:+100,
        delay:0.5,
        opacity:0,
        // scale:0.5,
        duration:0.2,
        stagger:true,
    });

    var t1 = gsap.timeline();

    t1.from('#nav-links-list .nav-item',{
        x:-100,
        opacity:0,
        scale:0.5,
        // duration:0.5,
        stagger:0.1,
        // delay:1
    });


    t1.from('#contact-icons .icon',{
        x:200,
        opacity:0,
        // duration:0.5,
        stagger:0.2,
    });




    navbar.style.display = 'flex';
    // navbar.style.left = '0';
    navbar.style.position = 'fixed';
    nav_btn.style.display = 'none';
    nav_btn_close.style.display = 'block';

    

    
});

nav_btn_close.addEventListener('click',()=>{
    gsap.from('#nav-btn-close',{
        opacity:0,
        y:-10,
        rotation:360,
        duration:0.5,
      });


    gsap.to('#navbar-mob',{
        x: '-100%',
    });
    navbar.style.display = 'none';
    // navbar.style.left = '-70%';
    navbar.style.position = 'absolute';
    nav_btn.style.display = 'block';
    nav_btn_close.style.display = 'none';
    gsap.to('#nav-btn',{
        y:10,
        duration:0.2,
        opacity:1,
        
    });
});


// nav_btn_img.addEventListener('click',()=>{
//     navbar.style.display = 'flex';
//     navbar.style.left = '0';
//     navbar.style.position = 'fixed';
//     nav_btn.style.display = 'none';
//     nav_btn_close.style.display = 'block';

// });














/* Animations */
    
gsap.from('#heroimg',{
    x:-100,
    delay:0.5,
    opacity:0,
    scale:0.5,
    duration:0.5,
});

gsap.from('#heroname',{
    x:+100,
    delay:0.5,
    opacity:0,
    scale:0.5,
    duration:0.5,
});


gsap.from('.nav-contact',{
    x:+100,
    delay:0.5,
    opacity:0,
    // scale:0.5,
    duration:0.2,
    stagger:true,
});

var t1 = gsap.timeline();

t1.from('#nav-links-list .nav-item',{
    x:-100,
    opacity:0,
    scale:0.5,
    // duration:0.5,
    stagger:0.1,
    // delay:1
});


t1.from('#contact-icons .icon',{
    x:200,
    opacity:0,
    // duration:0.5,
    stagger:0.2,
});


/*About */

t2 = gsap.timeline();

t2.from('#about1', {
    opacity: 0,
    x: -200,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#about1",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});

t2.from('#about2', {
    opacity: 0,
    x: 200,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#about2",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});



gsap.from('#about2 .card', {
    opacity: 0,
    x: 200,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.5,
    scrollTrigger: {
      trigger: "#about2",
      scroller: "#right-column",
      start: "top 50%",
      end: "top 20%",
      scrub:2,
    }

});


/*Education */


t2.from('#edu-article1', {
    opacity: 0,
    x: 300,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#edu-article1",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});

t2.from('#edu-article2', {
    opacity: 0,
    x: 300,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#edu-article2",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});

t2.from('#edu-article3', {
    opacity: 0,
    x: 300,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#edu-article3",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});



t2.from('#edu-article4', {
    opacity: 0,
    x: 300,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#edu-article4",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});







/*skills*/
gsap.from('.languages1', {
    opacity: 0,
    y: 100,
    delay:0.5,
    duration: 1,
    scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#program-lang-sec1",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});


gsap.from('.languages2', {
    opacity: 0,
    y: 100,
    delay:0.5,
    duration: 1,
    scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#program-lang-sec2",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});


gsap.from('.languages3', {
    opacity: 0,
    y: 100,
    delay:0.5,
    duration: 1,
    scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#program-lang-sec3",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});


/*Competitive programming */


gsap.from(['#competitive-programming .head-heading','#competitive-programming .heading-meta'], {
    opacity: 0,
    y: 200,
    delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#competitive-programming",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});



gsap.from('#competitive-programming .project-div', {
    opacity: 0,
    x: 300,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#competitive-programming .project",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});




gsap.from('#competitive-programming .mybtn', {
    opacity: 0,
    y: 200,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#competitive-programming .project",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});

/*Project*/


gsap.from(['#development .head-heading','#development .heading-meta'], {
    opacity: 0,
    y: 200,
    delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#development",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});




gsap.from('#development .project-div', {
    opacity: 0,
    x: 300,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#development .project",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});




gsap.from('#development .mybtn' , {
    opacity: 0,
    y: 200,
    // delay:0.5,
    duration: 0.5,
    // scale:0.2,
    stagger:0.2,
    scrollTrigger: {
      trigger: "#development .project",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});



/*Development2 */


gsap.from('#development2 .head-heading', {
    opacity: 0,
    y: 100,
    // delay:0.5,
    // duration: 0.1,
    // scale:0.2,
    scrollTrigger: {
      trigger: "#development2",
      scroller: "#right-column",
      start: "top 60%",
      end: "top 20%",
      scrub:2,
    }

});

gsap.from('#development2 .project-div', {
    opacity: 0,
    x: 300,
    delay:0.5,
    duration:4,
    // scale:0.2,
    stagger:10,
    scrollTrigger: {
      trigger: "#development2 .project",
      scroller: "#right-column",
      start: "top 50%",
      end: "top 0%",
      scrub:2,
    }

});




gsap.from('#development2 .mybtn' , {
    opacity: 0,
    y: 200,
    // delay:7,
    duration: 0.5,
    // scale:0.2,
    stagger:0.5,
    scrollTrigger: {
      trigger: "#development2 .mybtn",
      scroller: "#right-column",
      start: "top 150%",
      end: "top 70%",
      scrub:2,
    }

});




gsap.from('#contact-me' , {
    opacity: 0,
    x: -200,
    // delay:7,
    duration: 0.5,
    // scale:0.2,
    stagger:0.5,
    scrollTrigger: {
      trigger: "#contact-me",
      scroller: "#right-column",
      start: "top 80%",
      end: "top 60%",
      scrub:2,
    }

});


