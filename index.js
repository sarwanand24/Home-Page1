document.getElementById("togglers").addEventListener("click", function(){
    document.getElementById("nav-links").classList.toggle("slider");
})
document.getElementById("bars").addEventListener("click", function(){
    document.getElementById("cross").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("opa1").style.opacity = "0.6";
    document.getElementById("content").style.opacity = "0.6";
})
document.getElementById("cross").addEventListener("click", function(){
    document.getElementById("cross").style.display = "none";
    document.getElementById("bars").style.display = "block";
    document.getElementById("opa1").style.opacity = "1";
    document.getElementById("content").style.opacity = "1";
})
document.getElementById("scroll-Top").addEventListener("click", function(){
    window.scrollTo({ top:0, behavior: 'smooth' });
})