let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//landing page carousel
let backgroundArr = [
    {
        image: 'https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'LOREM <i>ipsum</i>',
        desc: 'desc1 : Lorem ipsum dolor, sit amet consectetur<br>adipisicing elit adipisicing elit adipisicing <br>elit..'
    },
    {
        image: 'https://images.pexels.com/photos/799459/pexels-photo-799459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'DOLOR <i>sit</i>',
        desc: 'desc2 : Dolor sit amet consectetur adipiscing<br>elit elit elit elit elit elit<br>elit..'
    },
    {
        image: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'SIT <i>dolor</i>',
        desc: 'desc3 : Consectetur adipiscing elit elit elit<br>adipiscing elit consectetur adipiscing<br>elit..'
    }
];

let currentIndex = 0;

const carouselWrapper = document.querySelector('.landing-div');
const carouselTitle = document.querySelector('#carousel-title');
const carouselPara = document.querySelector('#carousel-para');

document.querySelector('#prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + backgroundArr.length) % backgroundArr.length;
    updateCarousel();
});

document.querySelector('#next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgroundArr.length;
    updateCarousel();
});

function updateCarousel() {
    const currentData = backgroundArr[currentIndex];
    carouselWrapper.style.backgroundImage = `url(${currentData.image})`;
    carouselWrapper.style.backgroundSize = "cover";
    carouselTitle.innerHTML = currentData.title;
    carouselPara.innerHTML = currentData.desc;
}

updateCarousel();
//custom cursor
var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();
//offer carousel
let artBtn = document.querySelector('#artbtn'),
    designBtn = document.querySelector('#designbtn'),
    offerCards = document.querySelector('.offer-carousel-cards');

const offerCardContent = [
    {
        title: 'Art',
        author: 'Print motor',
        bg: 'https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Coffee',
        author: 'Motor motor',
        bg: 'https://images.pexels.com/photos/3146167/pexels-photo-3146167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Tea',
        author: 'tor motor',
        bg: 'https://images.pexels.com/photos/5408805/pexels-photo-5408805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Freedom',
        author: 'Retor',
        bg: 'https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Pea',
        author: 'kidsnia',
        bg: 'https://images.pexels.com/photos/7630475/pexels-photo-7630475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Olive',
        author: 'Fakaz',
        bg: 'https://images.pexels.com/photos/4109911/pexels-photo-4109911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Justice',
        author: 'Notion',
        bg: 'https://images.pexels.com/photos/6185245/pexels-photo-6185245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Rot',
        author: 'int motor',
        bg: 'https://images.pexels.com/photos/18717417/pexels-photo-18717417/free-photo-of-open-book-among-rotting-apples.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'Ease',
        author: 'EASEIND',
        bg: 'https://images.pexels.com/photos/7158708/pexels-photo-7158708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title: 'OOO',
        author: '#1111',
        bg: 'https://images.pexels.com/photos/220059/pexels-photo-220059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
];
$(function(){
    flag=0;
    if (flag==0){
        $('.c1').css({"background": "url("+offerCardContent[0].bg+")"});
        $('.c2').css({"background": "url("+offerCardContent[1].bg+")"});
        $('.c3').css({"background": "url("+offerCardContent[2].bg+")"});
    }
    $('#offernext').click(function(){
      if(flag == 0){
        $('.c1').css({'transform':'translateX(-25vw) scale(1.2)','z-index':'9'});
        $('.c2').css({'transform':'translateX(25vw) scale(1.2)','z-index':'9'});
        $('.c3').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 1;
      } else if(flag == 1){
        $('.c3').css({'transform':'translateX(-25vw) scale(1.2)','z-index':'9'});
        $('.c1').css({'transform':'translateX(25vw) scale(1.2)','z-index':'9'});
        $('.c2').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 2;
      }else if(flag == 2){
        $('.c2').css({'transform':'translateX(-25vw) scale(1.2)','z-index':'9'});
        $('.c3').css({'transform':'translateX(25vw) scale(1.2)','z-index':'9'});
        $('.c1').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 0;
      }
    });
    $('#offerprev').click(function(){
      if(flag == 0){
        $('.c3').css({'transform':'translateX(-25vw) scale(1.2)','z-index':'9'});
        $('.c1').css({'transform':'translateX(25vw) scale(1.2)','z-index':'9'});
        $('.c2').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 1;
      } else if(flag == 1){
        $('.c1').css({'transform':'translateX(-25vw) scale(1.2)','z-index':'9'});
        $('.c2').css({'transform':'translateX(25vw) scale(1.2)','z-index':'9'});
        $('.c3').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 2;
      }else if(flag == 2){
        $('.c2').css({'transform':'translateX(-25vw) scale(1.2)','z-index':'9'});
        $('.c3').css({'transform':'translateX(25vw) scale(1.2)','z-index':'9'});
        $('.c1').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 0;
      }
    });
  });
  artBtn.addEventListener('click', () => {
    if (!offerCards.classList.contains('card-home')) {
        offerCards.classList.remove('card-des');
        offerCards.classList.add('card-home');
        $('.c1').css({"background": "url("+offerCardContent[0].bg+")"});
        $('.c2').css({"background": "url("+offerCardContent[1].bg+")"});
        $('.c3').css({"background": "url("+offerCardContent[2].bg+")"});
    }
});

designBtn.addEventListener('click', () => {
    if (!offerCards.classList.contains('card-des')) {
        offerCards.classList.remove('card-home');
        offerCards.classList.add('card-des');
        $('.c1').css({"background": "url("+offerCardContent[3].bg+")"});
        $('.c2').css({"background": "url("+offerCardContent[4].bg+")"});
        $('.c3').css({"background": "url("+offerCardContent[5].bg+")"});
    }
});
//gsap scroll
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Get all sections
    const sections = gsap.utils.toArray(".landing-div, .services-div, .offer-div, .contact-div");
    let tops = sections.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
    sections.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
          pin: true, 
          pinSpacing: false 
        });
    });
    ScrollTrigger.create({
        snap: {
          snapTo: (progress, self) => {
            let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
                snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
          },
          duration: 0.5
        }
      });  
});
//nav-wrapper
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const lines = document.querySelectorAll('.nav-ham .lines');
    const mobileNav = document.querySelector('.mobile-nav')
    navLinks.classList.toggle('active');
    mobileNav.classList.toggle('active');

    lines.forEach(line => {
        line.classList.toggle('active');
    });

}