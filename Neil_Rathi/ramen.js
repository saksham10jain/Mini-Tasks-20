 	
var div1=document.querySelector('#container');
		let requesturl='https://neilrathi17.github.io/test1/ramen.json'
		let request=new XMLHttpRequest();
		request.open("GET",requesturl);
		request.responseType='text';
		request.send();
		var jsonObj=[]

request.onload=function()
{
// var ram=request.response;
			jsonObj=JSON.parse(request.response)
			// console.log(jsonObj)
			display(jsonObj)
		}
var sorry=document.createElement('h4');
sorry.textContent="No matches found";
sorry.style.color="steelblue";
sorry.classList.add("active");
div1.append(sorry);
			//display function to display all restsurants
		function display(jsonObj)
		{
			for(var i=0;i<37;++i)
				creator(jsonObj,i)
		// 
	}
		// display(jsonObj);
		//destroyer function to clear contents of the page
		function destroyer(jsonObj)
		{
			var list=document.querySelectorAll(".rest");
			for(var i=0;i<list.length;++i)
			{
				list[i].remove();
				// list[i].innerHTML="";
			}
		}

		function creator(jsonObj,n)
		{
			sorry.classList.add('active')
			var div=document.createElement('div');
			div.classList.add("rest");
			div1.appendChild(div);
			
			//brand 
			var brand=document.createElement('p');
			brand.textContent=jsonObj[n]["Brand"];
			brand.classList.add("brand")
			div.append(brand);
			//stars
			var stars=document.createElement('p');
			if( jsonObj[n]["Stars"]==="NaN")
				stars.textContent="No Rating";
			else
			stars.innerHTML= jsonObj[n]["Stars"]+ '<i class="fas fa-star"></i>';
			stars.classList.add("stars");
			div.append(stars);
			//variety
			var variety=document.createElement('p');
			variety.textContent=jsonObj[n]["Variety"];
			variety.insertAdjacentHTML("afterbegin", "<span class='tags'>Variety of ramen served: </span>");
		    div.append(variety);
			//style
			var style=document.createElement('p');
			style.textContent=jsonObj[n]["Style"];
			style.insertAdjacentHTML("afterbegin", "<span class='tags'>Style of ramen: </span>");
			div.append(style);
			// country and rating
			var country=document.createElement('p');
			country.textContent=jsonObj[n]["Country"];
			country.insertAdjacentHTML("afterbegin", "<span class='tags'>Location: </span>");
			div.append(country);
			//topten
			var top=document.createElement('p');
			var list=jsonObj[n]["TopTen"].split(" ");
			if(list.length==2)
			top.textContent="Ranked "+list[1]+" in "+ list[0];
			else 
				top.textContent="No previous top ten ranking"
			top.classList.add('topten')
			div.append(top);
		}

		//input for search box
		
		var input=document.querySelector("input[type='text']")
		input.addEventListener("keypress",function(event)
		{
			if(event.which==13)
			{var text=this.value;
			this.value="";
			search(text);
			
		}})
		
		var home=document.querySelector('#home')
		home.addEventListener("click",function()
		{
			reset('country');
			reset('topten');
			reset('sort')
			destroyer(jsonObj)
			display(jsonObj);
		})
		
		function sort()
		{	
			reset('country');
			reset('topten');
			destroyer(jsonObj)
			var x = document.getElementById("sort").value;
			if(x==='Stars')
			{
				for(var i=0;i<35;++i)
			{
				var min=i;
				for(var j=i+1;j<36;++j)
					{
						if(jsonObj[j][x]>jsonObj[min][x])
							{
								min=j;
							}
					}
				// creator(jsonObj,min)
				var temp = jsonObj[min]; 
            	jsonObj[min] = jsonObj[i]; 
            	jsonObj[i] = temp; 
			}
			display(jsonObj)	
			}
			else 
			{
				for(var i=0;i<35;++i)
			{
				var min=i;
				for(var j=i+1;j<36;++j)
					{
						if(jsonObj[j][x]<jsonObj[min][x])
							{
								min=j;
							}
					}
				// creator(jsonObj,min)
				var temp = jsonObj[min]; 
            	jsonObj[min] = jsonObj[i]; 
            	jsonObj[i] = temp; 
				
			}
					display(jsonObj)

			}
			// jsonObj.sort((a, b) => (a.x > b.x) ? 1 : -1)
					}

		function countr()
		{
			reset('sort');
			reset('topten');
			destroyer(jsonObj);
			var x = document.getElementById("country").value;
			if(x==="All")
				display(jsonObj);
			for(var i=0;i<36;++i)
			{		
				if(x.toUpperCase()==jsonObj[i]["Country"].toUpperCase())
				{
				creator(jsonObj,i);
				}	
			}
					
					
		}
		function search(input)
		{
			var chk=false;
		
			for(var i=0;i<36;++i)
			{
				if(input.toUpperCase()==jsonObj[i]["Brand"].toUpperCase())
					{
						if(chk==false)
							destroyer(jsonObj);

						sorry.classList.add('active')
						
						creator(jsonObj,i);
						chk=true;
					}
			}
			if(chk==false)
					{
						destroyer(jsonObj)
						sorry.classList.remove('active')
					}
		}
		function topten()
		{
			reset('sort');
			reset('country');
			var obj=[]
			var index
			destroyer(jsonObj);
			var x = document.getElementById("topten").value;
			for(var i =0;i<36;++i)
			{
				var list=jsonObj[i]['TopTen'].split(" ");
				var num=[]
				if(x===list[0])			
					creator(jsonObj,i)
			}
		}
		function reset(input)
		{
			destroyer(jsonObj)
			var index=document.getElementById(input);
			index.selectedIndex=0;
		}

		

	


