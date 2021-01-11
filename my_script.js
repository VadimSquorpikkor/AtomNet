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


function readfile(id) {
    // alert(document.getElementById('iframe').contentDocument.body.firstChild.innerHTML);

    /////перезагрузить содержимое (не работает)////
    // Get the iframe
    const iframe = document.getElementById(id);
    // Reload the iframe
    iframe.contentWindow.location.reload();
    ///////////////////////////////////////////////

    document.getElementById(id).contentDocument.body.firstChild.innerHTML;


}
