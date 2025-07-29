var aboutSection = document.getElementById("work-experience");
var dist = aboutSection.getBoundingClientRect()["y"];
var nav = document.getElementById("pages")
var navToAbout = nav.querySelectorAll("#pages a");
console.log(navToAbout);
var target = 0;
//about section 
var about = document.getElementById("about");
var header = document.getElementById("body-header");
var sliders =  document.querySelectorAll(".slider div");

var icons =  document.querySelectorAll(".icon");
var sliderInterval =    setInterval(function () {
                            let marginLeft = about.style.marginLeft;
                            if(marginLeft == "0vw")
                                {
                                    about.style.marginLeft = "100vw";
                                    header.style.marginLeft = "0vw";
                                    icons[0].classList.add("active");
                                    icons[1].classList.remove("active");
                                }
                            
                            else
                            {
                                header.style.marginLeft = "-100vw";
                                about.style.marginLeft = "0vw";
                                icons[1].classList.add("active");
                                icons[0].classList.remove("active");
                            }
                                
                        }, 3000);

for(let i = 0; i< sliders.length; i++)
    {
        sliders[i].addEventListener('click', 
            function(){
                clearInterval(sliderInterval);
                if(i==0)
                {
                    about.style.marginLeft = "100vw";
                    header.style.marginLeft = "0vw";
                    icons[0].classList.add("active");
                    icons[1].classList.remove("active");
                }
                
                else
                {
                    header.style.marginLeft = "-100vw";
                    about.style.marginLeft = "0vw";
                    icons[1].classList.add("active");
                    icons[0].classList.remove("active");
                }
            }
        )
    }
// Get the modal
var modal = document.getElementById("modal")
var project_modal = document.querySelectorAll(".project-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".project-image > img");
var modalImg = document.querySelectorAll(".modal-content");
var captionText = document.querySelectorAll(".caption");
console.log(imgs)
for(let i = 0 ; i < imgs.length; i++)
{
    imgs[i].onclick = function(){
        modal.style.display = "block";
        project_modal[i].style.display = "block";
        modalImg[i].src = this.src;
        captionText[i].innerHTML = this.alt;
      }
}



// Get the <span> element that closes the modal
var spans = document.querySelectorAll(".close");

// When the user clicks on <span> (x), close the modal
for(let i = 0 ; i < spans.length; i++)
{
    spans[i].onclick = function() {
        modal.style.display = "none";
        project_modal[i].style.display = "none";
        }
}

for(var i = 0; i < navToAbout.length; i++){


    navToAbout[i].addEventListener(
        'click', 
                function(event){
                    event.preventDefault();
                    var target = 0;
                    var targetSectionID = this.getAttribute('href');
                    var targetSection = document.querySelector(targetSectionID);
                    dist = targetSection.getBoundingClientRect()["y"];
                    console.log(targetSection);
                    console.log(target);
                    console.log(dist);
                    if(target < dist)
                        var scrollInterval = setInterval(function () {
                            target +=100;
                            if (target >= dist){
                                clearInterval(scrollInterval);
                                return;
                            }
                            window.scrollBy(0, 100);
                            console.log(target);
                            console.log(dist);
                        }, 15);
                    else
                    var scrollInterval = setInterval(function () {
                        if (target < dist){
                            clearInterval(scrollInterval);
                            return;
                        }
                        target -=100;
                        window.scrollBy(0, -100);
                        console.log(target);
                        console.log(dist);
                    }, 15);
                }  
        );
}

var skillBox = document.getElementById("skills-container");
var progressBars = document.querySelectorAll(".skill-progress > div");

var animationDone = false;
window.addEventListener('scroll', ShowSkill);


function initializeBar(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}
initializeBar();

function fillBars(){
    for(let bar of progressBars){
        let barwidth = bar.getAttribute('data-bar-width');
        console.log(barwidth);
        let currentwidth = 0;
        console.log("check");
        let scrollInterval = setInterval(function(){
            if(currentwidth>=barwidth){
                clearInterval(scrollInterval);
                return;
            }
            currentwidth += 1;
            bar.style.width = currentwidth + "%";
        }, 3)
    }
};

function ShowSkill(){
    var top = skillBox.getBoundingClientRect().top;
    if(!animationDone && top < window.innerHeight){
        animationDone = true;
        fillBars();
    }
};
