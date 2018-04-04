/*welcome page loader animation*/


function startloading(){
     document.getElementById("buttonholder").style.display="none";            
    //document.getElementById("startbutton").style.display="none";
    //start loading progress bar
    document.getElementById("Progress").style.display="block";

    var elem = document.getElementById("Bar"); 
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            window.location.href="index.html";
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
        }
    }

}


$(function(){
// Create the dropdown base
$("<select />").appendTo("nav");
// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("nav select");

// Populate dropdown with menu items
$("nav a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("nav select");
});

$("nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});

})


//jquery when mouse over paragraph contact that add animation 

