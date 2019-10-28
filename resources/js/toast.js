function toastFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 100);
    toastr.options.fadeOut = 2500;
}
