// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//     scrollFunction()
// };

function scrollFunction() {
    // console.log(window.innerWidth);
    /////////////////////let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        ///////////////////////////mybutton.style.display = "block";
        document.getElementById("top_slide_panel").style.top = "0";
        // document.getElementById('left_side_menu').style.top = "38px"
        // document.getElementById('mySidepanel').style.top = "35px"
    } else {
        ////////////////////////////mybutton.style.display = "none";2
        document.getElementById("top_slide_panel").style.top = "-50px";
        // document.getElementById('left_side_menu').style.top = "0"
        // document.getElementById('mySidepanel').style.top = "0"
    }
}

window.onclick = function(event) {
    // if (!event.target.matches('.openbtn')) closeNav();
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    // document.getElementById("mySidepanel").style.width = "420px";/*todo поменять на left*/
    document.getElementById("mySidepanel").style.left = "0px";/*todo поменять на left*/



    // console.log(document.getElementById("content_div").style.marginLeft.valueOf());
    // document.getElementById("content_div").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    // document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.left = "-450px";


    // document.getElementById("content_div").style.marginLeft = "auto";
}


// closeAllMenuItem();



function closeAllMenuItem() {
    let allMenuDetails = document.getElementById('left_side_menu').getElementsByTagName('details');
    for (let i = 0; i < allMenuDetails.length; i++) {
        allMenuDetails[i].open = false;
        // if (allMenuDetails[i].has)
    }

}
