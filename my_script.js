function show_menu(){
    let x = document.getElementById("menu");
    if (x.style.display === "") {
        x.style.display = "block";
    }
    else if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
