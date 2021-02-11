function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}


$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});
function onClickSubmit(){
  var submit = document.getElementById("submitbutton");
  var load = document.getElementById("loading");
  submit.style.display = "none";
  load.style.display = "block";
  setTimeout("submitappear()",3000);
}
function submitappear(){
  var submit = document.getElementById("submitbutton");
  var load = document.getElementById("loading");
  submit.style.display = "block";
  load.style.display = "none"; 
  alert("Submit Successful");
}
var i = 0;

function makeProgress() {
  if (i < 100) {
    i = i+1;
  }
  else {
    i=0
    readURL(document.getElementById("upload"));
    return
  }
  $(".progress-bar").css("width", i + "%").text(i+" %");
  
  setTimeout("makeProgress()", 50);
  
}