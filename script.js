//in order to access things in the html in our js file, we have to call them using document.querySelector
const carrouselSlide = document.querySelector('.carrousel-container');
const slide = document.querySelectorAll('.scroll-bar .slide'); //for us to select <div class="scroll-bar"> and <div class="slide">,
//we call them by their class name inside the querySelectorAll eg .scroll-bar .slide 


//for us to make the actual slide, we have make use of a counter
//also we will use the counter to make the first slide come up first
let counter = 1; //we use "let" here instead of "const" b/c counter is mutable ie. the value of counter will change moving on
 //we select the width of the image so we know how much we need to slide 
//  const size = slide[0].clientWidth; //this formula will give us the width of our image

 //since we want to start on the first image and not the clone :
 carrouselSlide.style.transform = 'translateX(' + (counter)+'px)' ; //this formula will move the first slide forward