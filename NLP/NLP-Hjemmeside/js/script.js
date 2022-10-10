/* Force page to top on load START */
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  onbeforeunload = function () {
      scrollTo(0, 0);
  };
}
/* Force page to top on load END */


/* Navbar script START */
// active navbar link
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function (event) {
  sections.forEach((section) => {
    let top = window.scrollY + 250;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    
    if (top >= offset && top < offset + height) {
      document.querySelectorAll(".active").forEach((a) => {
        a.classList.remove("active");
      });

      document.querySelector("[href*=" + id + "]").classList.add("active");
    }
  });
});
/* Navbar script END */

/* Parallax effects */
let robot = document.getElementById("walking_robot");
let plane = document.getElementById("flying_plane");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  
  robot.style.left = value * 0.25 + 'px';
  plane.style.right = value * 1 + 'px';
});
/* Parallax effects */

/* Back to top button start */

jQuery(document).ready(function(){
  //   insert back to top button dynamically
   $( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa-solid fa-plane-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
    var $window = $(window);
    var distance = 80;
      // scroll
    $window.scroll(function() {
      // header
      if($window.scrollTop() >= distance) {
        $(".backToTop").fadeIn();
      }else{
        $(".backToTop").fadeOut();
      }
    });
    
    $('.backToTop').click(function() {
      $('html, body').animate({
              scrollTop: 0
          }, 500);
   });
  })

/* Back to top button end */

/* Typewriter animation start */
var txt = document.getElementById('main_txt');

var typewriter = new Typewriter(txt, {
    loop: false
});

typewriter.typeString('Natural Processing')
.pauseFor(500)
.deleteChars(10)
.typeString('Language Processing')
    .start();
/* Typewriter animation end */

/* ScrollReveal JS START */

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 400,
  reset: true,
});

sr.reveal(".left_box1", { delay: 450, origin: "left" });
sr.reveal(".right_box1", { delay: 450, origin: "right" });
sr.reveal(".left_box2", { delay: 450, origin: "left" });
sr.reveal(".right_box2", { delay: 450, origin: "right" });
sr.reveal("#future", { delay: 450, origin: "bottom" });
sr.reveal(".right_box3", { delay: 450, origin: "right" });
sr.reveal(".left_box3", { delay: 450, origin: "left" });

/* ScrollReveal JS END */

/* Make robot disappear after scrolling down 850 pixels START */
const walking_robot = document.getElementById('walking_robot');

window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y >= 850){
    walking_robot.classList.add('disappear');
    return;
  }
  else{
    walking_robot.classList.remove('disappear');
  }
});
/* Make robot disappear after scrolling down 850 pixels END */