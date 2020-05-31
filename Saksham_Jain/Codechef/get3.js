getJSON(function(err,data){
    if(err!=null){
        console.error(err);
    }else{
        dat = data;
        show();
    }
});

function show(){
    for(i=0;i<37;i++){
        make(i);
    }
}

var info=document.getElementById('info');
var btn=document.getElementById('btn');

btn.addEventListener("click",function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','test.json');
  ourRequest.onload = function(){
    var ourData=JSON.parse(ourRequest.responseText)
    renderHTML(ourData);
  };
  ourRequest.send();
});

$("btn").click(function(){
  $.get("test.json", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});

function renderHTML(data){
  var htmlString="";
  for(i=0;i<data.length;i++){
    htmlString += "<p>" + data[i].Brand + "is a " + data[i].Variety + ".</p>";
  };
};

<script>
$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('test.json', function(data) {
   $.each(data, function(key, value){
    if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
    {
     $('#result').append('<li class="list-group-item link-class"><img src="'+value.Brand+'" height="40" width="40" class="img-thumbnail" /> '+value.Brand+' | <span class="text-muted">'+value.Variety+'</span></li>');
    }
   });
  });
 });

 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });
});
</script>

all.addEventListener('click',function(){
    showing = [];
    place.selectedIndex = 0;
    sortb.selectedIndex = 0;
    topt.selectedIndex = 0;
    disp.innerHTML = "";
    show();
});
