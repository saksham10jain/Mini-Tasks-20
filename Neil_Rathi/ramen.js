 	
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
// var jsonObj=[{"Brand": "MAMA", "Variety": "Instant Noodles Coconut Milk Flavour","Style": "Pack","Country": "Myanmar","Stars": 5,"TopTen": "2016 #10"},
// 	{"Brand": "Prima Taste","Variety": "Singapore Laksa Wholegrain La Mian","Style": "Nan","Country": "Singapore","Stars": 5,"TopTen": "2016 #1"},
//     {"Brand": "Prima","Variety": "Juzz's Mee Creamy Chicken Flavour","Style": "Pack","Country": "Singapore","Stars": "NaN","TopTen": "2016 #8"},
//     {"Brand": "Prima Taste","Variety": "Singapore Curry Wholegrain La Mian","Style": "Pack","Country": "Singapore","Stars": 5,"TopTen": "2016 #5"},
//     {"Brand": "Tseng Noodles","Variety": "Scallion With Sichuan Pepper  Flavor","Style": "Pack","Country": "Taiwan","Stars": 5,"TopTen": "2016 #9"},
//     {"Brand": "Wugudaochang","Variety": "Tomato Beef Brisket Flavor Purple Potato Noodle","Style": "Pack","Country": "China","Stars": 5,"TopTen": "2016 #7" },
//     {"Brand": "A-Sha Dry Noodle","Variety": "Veggie Noodle Tomato Noodle With Vine Ripened Tomato Sauce","Style": "Pack","Country": "Taiwan","Stars": 5,"TopTen": "NaN"},
//     {"Brand": "MyKuali","Variety": "Penang Hokkien Prawn Noodle (New Improved Taste)","Style": "Pack","Country": "Malaysia","Stars": 5,"TopTen": "NaN"},
//     {"Brand": "CarJEN","Variety": "Nyonya Curry Laksa","Style": "Pack","Country": "Malaysia","Stars": 5,"TopTen":"2015 5"  },
//     {"Brand": "Maruchan","Variety": "Gotsumori Sauce Yakisoba","Style": "Tray","Country": "JPN","Stars": 5,"TopTen": "2015 #9"},
//     {"Brand": "Mamee","Variety": "Chef Gold Recipe Mi Kari Seribu Rasa","Style": "Pack","Country": "Malaysia","Stars": 5,"TopTen": "2015 #6"},
//     {"Brand": "MyKuali","Variety": "Penang Red Tom Yum Goong Noodle","Style": "Pack","Country": "Malaysia","Stars": 5,"TopTen": "2015 #1"},
//     {"Brand": "Mama","Variety": "Instant Noodles Shrimp Creamy Tom Yum Flavour Jumbo Pack","Style": "Pack","Country": "Thailand","Stars": 5,"TopTen": "2013 #10"},
//     {"Brand": "Mama","Variety": "Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack","Style": "Pack","Country": "Thailand","Stars": 5,"TopTen": "2015 #8"},
//     {"Brand": "Mamee","Variety": "Chef Curry Laksa Flavour","Style": "Pack","Country": "Malaysia","Stars": "NaN","TopTen": "2014 #7"},
//     {"Brand": "Sapporo Ichiban","Variety": "Otafuku Okonomi Sauce Yakisoba","Style": "Tray","Country": "Japan","Stars": "NaN","TopTen": "2014 #4"},
//     {"Brand": "Nongshim","Variety": "Soon Veggie Noodle Soup","Style": "Pack","Country": "South Korea","Stars": 5,"TopTen": "2014 #9"},
//     {"Brand": "Mama","Variety": "Instant Noodles Yentafo Tom Yum Mohfai Flavour","Style": "Pack","Country": "Thailand","Stars": 5,"TopTen": "2014 #10"},
//     {"Brand": "Prima Taste","Variety": "Singapore Chilli Crab La Mian","Style": "NaN","Country": "Singapore","Stars": 5,"TopTen": "NaN"},
//     {"Brand": "Samyang Foods","Variety": "Maesaengyitangmyun Baked Noodle","Style": "Pack","Country": "South Korea","Stars": 5,"TopTen": "2014 #5"},
//     {"Brand": "Paldo","Variety": "Cheese Noodle","Style": "Pack","Country": "South Korea","Stars": 5,"TopTen": "2014 #6"},
//     {"Brand": "MyKuali", "Variety": "Penang White Curry Noodle" ,"Style": "Pack" ,"Country": "Malaysia", "Stars": 5 ,"TopTen": "2014 #1"},
//     {"Brand": "Prima Taste", "Variety": "Singapore Laksa La Mian", "Style": "Pack", "Country": "SG", "Stars": 5, "TopTen": "2013 #1"},
//     {"Brand": "Prima Taste", "Variety": "Singapore Curry La Mian" ,"Style": "Pack" ,"Country": "Singapore", "Stars": "NaN", "TopTen": "2013 #2"},
//     {"Brand": "Nongshim", "Variety": "Jinjja Jinjja Flamin' Hot & Nutty", "Style": "Pack","Country": "USA","Stars": 5,"TopTen": "2013 #4"},
//     {"Brand": "Paldo","Variety": "Kokomen Spicy Chicken","Style": "Pack","Country": "South Korea","Stars": 5,"TopTen": "2013 #9"},
//     {"Brand": "Indomie","Variety": "Mi Goreng Rendang (Import)","Style": "Pack","Country": "Indonesia","Stars": 5,"TopTen": "2013 #3"},
//     {"Brand": "Koka","Variety": "Spicy Black Pepper","Style": "Pack","Country": "SG","Stars": 5,"TopTen": "NaN"},
//     {"Brand": "Nongshim","Variety": "Shin Ramyun Black","Style": "Pack","Country": "South Korea","Stars": 4.75,"TopTen": "2012 #7"},
//     {"Brand": "Mi Sedaap","Variety": "Kari Spesial","Style": "Pack","Country": "Indonesia","Stars": 4.5,"TopTen": "2012 #5"},
//      {"Brand": "Nissin","Variety": "Yakisoba Noodles Karashi","Style": "Tray","Country": "Japan","Stars":5,"TopTen": "2012 #3"},
//     {"Brand": "Myojo","Variety": "Hyoubanya No Chukasoba Oriental","Style": "Pack","Country": "Japan","Stars": 4.25,"TopTen": "2012 #6"},
//     {"Brand": "Doll","Variety": "Artificial Chicken","Style": "Pack","Country": "Hong Kong","Stars": 4.5,"TopTen": "2012 #9"},
//     {"Brand": "Indomie","Variety": "Special Fried Curly Noodle","Style": "Pack","Country": "Indonesia","Stars": 5,"TopTen": "2012 #1"},
//     {"Brand": "Indomie","Variety": "Mi Goreng Jumbo Barbecue Chicken","Style": "Pack","Country": "Indonesia","Stars": "NaN","TopTen": "2012 #2"},
//     {"Brand": "Myojo","Variety": "Ippeichan Yakisoba","Style": "Tray","Country": "Japan","Stars": 4,"TopTen": "2013 #6"},
//     {"Brand": "Sapporo Ichiban","Variety": "Chow Mein","Style": "Pack","Country": "JPN","Stars": 5,"TopTen": "2015 #2"}]
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

		

	


