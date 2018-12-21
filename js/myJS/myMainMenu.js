// <nav class="nav">
// 	<!-- <a href="#" class="nav-link active">Web</a> -->
// 		<div class="dropdown nav-link">
// 			<button class="btn dropdown-toggle" type="button" data-toggle="dropdown">Web<span class="caret"></span></button>
// 			<ul class="dropdown-menu">
//    			<li><a href="#">喔熊列車圓夢計畫</a></li>
// 				<li><a href="#">卡米爾VR簡報 </a></li>
// 			</ul>
// 		</div> 
// 	<a href="#" class="nav-link">App</a>
// 	<a href="#" class="nav-link">Expo</a>
// 	<a href="https://medium.com/@sengallery" class="nav-link" target="_blank">Blog</a>
// </nav>

function createMainMenu(dataObject, parent) {

	var objectArrayByType = dataCenter.getObjectByKey("type");
	var keyArrayByType = Object.keys(objectArrayByType);
	var objectArrayByTitle = dataCenter.getObjectByKey("title");
	var keyArrayByTitle = Object.keys(objectArrayByTitle);

	var nav = document.createElement('nav');
	nav.setAttribute('class', 'nav');

	for(var i=0; i<keyArrayByType.length; i++) { 
		// console.log(keyArrayByType[i]); // APP WEB EXPO UNITY
		var div = document.createElement('div');
		div.setAttribute('class', 'dropdown nav-link');
		nav.appendChild(div);

		var btn = document.createElement('button');
		btn.setAttribute('class', 'btn dropdown-toggle');
		btn.setAttribute('type', 'button');
		btn.setAttribute('data-toggle', 'dropdown');

		btn.innerHTML = keyArrayByType[i];
		// console.log(keyArrayByType[i].length);
		// if(keyArrayByType[i].length>1) { btn.innerHTML += '<span class="caret"></span>'; }
		div.appendChild(btn);

		var ul = document.createElement('ul');
		ul.setAttribute('class', 'dropdown-menu');
		div.appendChild(ul);

		for(var j=0; j<keyArrayByType[i].length; j++) { 

			// console.log(keyArrayByTitle[i].length); // 8 9 6 11  (should be 8 3 2 1)
			var li = document.createElement('li');
			var a = document.createElement('a');
			a.text = keyArrayByTitle[j];
			li.appendChild(a);
			ul.appendChild(li);
		}	
	}

	parent.append(nav);
}