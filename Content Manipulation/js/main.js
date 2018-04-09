    /* 
    Get all buttons in an HTMLCollection */
    
    /* 
    Complete the rest of your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    
    /* 
    Start your handleSelection function here. */
        
        /* 
        Get the reference of your HTML-container
        that will be dynamically loaded. */ 
        
        /* 
        Remove the existing main-content */
        
        /* 
        Remove the id "active-button" from the element that
        contains it prior to the click-event */

        /*
        Set the id "active-button" to the currently clicked button */
    
        /* 
        Use target property and getAttribute method to get the value
        of data-content attribute of clicked button. This will match the key of
        chosen content in resources-object. */
        
        /* 
        Create HTML:
        <h1>{heading-content}</h1>
        <img src="{img-url}" alt="{img-alt}">
        <p>{text-content}</p> */
    
        /* 
        Load the created HTML into the HTML-container for dynamic content */  
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register handleSelection to listen for the click event on a button */
    
//}()); // Closing and invoking closure  

var btn = document.querySelectorAll(".buttons button");
var section = document.querySelector("section");
const green = {
    food: {
        title: "Food",
        body: "Food Lorem dolor sit amet, consectetur adipiscing elit. Morbi nec risus accumsan leo lobortis hendrerit dictum at massa. Phasellus feugiat nisl et faucibus hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, elit in rutrum dictum, nunc enim consequat quam, vulputate finibus urna nunc at lectus. Cras hendrerit tortor id tellus vulputate aliquam. Vivamus arcu eros, auctor sit amet fermentum vitae, interdum a est. Maecenas mattis, augue vitae consequat tincidunt, nibh arcu vulputate nulla, maximus tempor purus lorem vitae leo. Donec a erat enim. Proin ut blandit dui. Duis finibus purus nisi, ut vehicula ligula varius at. Suspendisse a convallis elit, id feugiat lacus.Curabitur sollicitudin feugiat nulla et consequat. Quisque ac massa lobortis, tincidunt elit quis, laoreet ligula. Nullam eu elementum lectus, et suscipit tellus. Curabitur tincidunt consequat risus, eu blandit velit fringilla ac. Nulla mi enim, interdum nec orci gravida, ultrices fringilla nibh. Vestibulum a risus accumsan, ullamcorper eros ac, commodo ipsum. Mauris ultricies ipsum quam, vel luctus sem hendrerit a. Nullam lobortis eget nisi et dictum. In in posuere sapien. Suspendisse pretium eleifend cursus. Nunc vitae mauris eleifend, pharetra mauris vitae, mollis augue.",
        image: "./img/food.jpg"
    },
    recycle: {
        title: "Recycle",
        body: "Recycle Lorem dolor sit amet, consectetur adipiscing elit. Morbi nec risus accumsan leo lobortis hendrerit dictum at massa. Phasellus feugiat nisl et faucibus hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, elit in rutrum dictum, nunc enim consequat quam, vulputate finibus urna nunc at lectus. Cras hendrerit tortor id tellus vulputate aliquam. Vivamus arcu eros, auctor sit amet fermentum vitae, interdum a est. Maecenas mattis, augue vitae consequat tincidunt, nibh arcu vulputate nulla, maximus tempor purus lorem vitae leo. Donec a erat enim. Proin ut blandit dui. Duis finibus purus nisi, ut vehicula ligula varius at. Suspendisse a convallis elit, id feugiat lacus.Curabitur sollicitudin feugiat nulla et consequat. Quisque ac massa lobortis, tincidunt elit quis, laoreet ligula. Nullam eu elementum lectus, et suscipit tellus. Curabitur tincidunt consequat risus, eu blandit velit fringilla ac. Nulla mi enim, interdum nec orci gravida, ultrices fringilla nibh. Vestibulum a risus accumsan, ullamcorper eros ac, commodo ipsum. Mauris ultricies ipsum quam, vel luctus sem hendrerit a. Nullam lobortis eget nisi et dictum. In in posuere sapien. Suspendisse pretium eleifend cursus. Nunc vitae mauris eleifend, pharetra mauris vitae, mollis augue.",
        image: "./img/recycle.jpg"
    },
    makeup: {
        title: "Body Product Replacements",
        body: "Makeup Lorem dolor sit amet, consectetur adipiscing elit. Morbi nec risus accumsan leo lobortis hendrerit dictum at massa. Phasellus feugiat nisl et faucibus hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, elit in rutrum dictum, nunc enim consequat quam, vulputate finibus urna nunc at lectus. Cras hendrerit tortor id tellus vulputate aliquam. Vivamus arcu eros, auctor sit amet fermentum vitae, interdum a est. Maecenas mattis, augue vitae consequat tincidunt, nibh arcu vulputate nulla, maximus tempor purus lorem vitae leo. Donec a erat enim. Proin ut blandit dui. Duis finibus purus nisi, ut vehicula ligula varius at. Suspendisse a convallis elit, id feugiat lacus.Curabitur sollicitudin feugiat nulla et consequat. Quisque ac massa lobortis, tincidunt elit quis, laoreet ligula. Nullam eu elementum lectus, et suscipit tellus. Curabitur tincidunt consequat risus, eu blandit velit fringilla ac. Nulla mi enim, interdum nec orci gravida, ultrices fringilla nibh. Vestibulum a risus accumsan, ullamcorper eros ac, commodo ipsum. Mauris ultricies ipsum quam, vel luctus sem hendrerit a. Nullam lobortis eget nisi et dictum. In in posuere sapien. Suspendisse pretium eleifend cursus. Nunc vitae mauris eleifend, pharetra mauris vitae, mollis augue.",
        image: "./img/makeup.jpg"
    }
};

// function preloader() {
//     const imagesList = [
//         "./img/img-1.png",
//         "./img/img-2.png",
//         "./img/img-3.png"
//     ];
//     const images = [];
//     for (let i = 0; i < imagesList.length; i++) {
//         images[i] = new Image();
//         images[i].src = imagesList[i];
//     }

// console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
// };
// window.addEventListener("load", preloader);



function loadContent(ev) {

    for (var i = 0; i < btn.length; i++) {
        if (btn[i].hasAttribute("class")) {
            btn[i].removeAttribute("class");
        }
        var clickedBtn = ev.target;
        clickedBtn.setAttribute("class", "active");
        var show = clickedBtn.getAttribute("data-content");

        section.innerHTML = "";

        section.innerHTML = `<h1>${green[show].title}</h1><img src="${green[show].image}"><p>${green[show].body}</p>`;
    }
}

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", loadContent);
};


// --other method--
// function foodInfo() {
//     var f = document.getElementById("foodInfo");
//     if (f.style.display === "none") {
//         f.style.display = "block";
//     } else {
//         f.style.display = "none";
//     }
// }

// function makeupInfo() {
//     var r = document.getElementById("makeupInfo");
//     if (r.style.display === "none") {
//         r.style.display = "block";
        
//     } else {
//         r.style.display = "none";
//         f.style.display ="none";
        
//     }
// }

