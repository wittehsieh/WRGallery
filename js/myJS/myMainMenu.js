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
function onMainItemClicked(dataObject) {
	reloadCard(dataObject);
	// console.log('hi');
}
function createMainMenu(dataCenter, parent) {

	var objectArrayByType = dataCenter.getObjectByKey("type");
	var typeArray = Object.keys(objectArrayByType);
	// console.log(typeArray); //APP WEB EXPO ANIM

	var valArrayByType = Object.values(objectArrayByType);
	// console.log(valArrayByType[0][0].title);
	// console.log(valArrayByType[0][1].title);

	var nav = document.createElement('nav');
	nav.setAttribute('class', 'nav');

	for(var i=0; i<typeArray.length; i++) { // 4
		// console.log(typeArray[i]); // APP WEB EXPO ANIM
		var div = document.createElement('div');
		div.setAttribute('class', 'dropdown nav-link');
		nav.appendChild(div);

		var btn = document.createElement('button');
		btn.setAttribute('class', 'site-menu-btn dropdown-toggle');
		btn.setAttribute('type', 'button');
		btn.setAttribute('data-toggle', 'dropdown');

		btn.innerHTML = typeArray[i]; // APP WEB EXPO ANIM
		// if(typeArray[i].length>1) { btn.innerHTML += '<span class="caret"></span>'; }
		div.appendChild(btn);

		var ul = document.createElement('ul');
		ul.setAttribute('class', 'dropdown-menu');
		div.appendChild(ul);

		for (var j=0; j<valArrayByType[i].length; j++) { // 10 3 3 1

			(function(k){	
				var li = document.createElement('li');
				var a = document.createElement('a');
				var dataObject = valArrayByType[i][j];
				a.text = dataObject.title;
				a.addEventListener('click', function(){ onMainItemClicked(dataObject); }, false);
				li.appendChild(a);
				ul.appendChild(li);
			})(j);
		}	
	}

	parent.append(nav);
}


// https://codepen.io/CreativeJuiz/pen/oCBxz
function createMainMenuToggle(){
	console.log('hi');
}