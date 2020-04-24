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

function renderHTML(data){
  var htmlString="";
  for(i=0;i<data.length;i++){
    htmlString += "<p>" + data[i].Brand + "is a " + data[i].Variety + ".</p>";
  };
};
