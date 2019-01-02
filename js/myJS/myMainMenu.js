// _toggle.css

// <nav class="nav">
// 		<div class="dropdown nav-link">
// 			<button class="btn dropdown-toggle" type="button" 
//                  data-toggle="dropdown">APP<span class="caret"></span></button>
// 			<ul class="dropdown-menu">
//    			<li><a>聖劍使的禁咒詠唱</a></li>
// 				<li><a>溫蒂妮小姐AR紅包</a></li>
// 				<li><a>....</a></li>
// 				<li><a>....</a></li>             
// 			</ul>
// 		</div> 
// 		<div class="dropdown nav-link">...</a>
// 		<div class="dropdown nav-link">...</a>
// 		<div class="dropdown nav-link">...</a>
// </nav>

function onItemClicked(dataObject) {

	reloadCard(dataObject);
}
function createMainMenu(dataCenter, sortKey, parent) {

	var objectArrayByKey = dataCenter.getObjectByKey(sortKey);
	var keyArray = Object.keys(objectArrayByKey); //["APP", "WEB", "EXPO", "ANIM"]
	var valueArray = Object.values(objectArrayByKey);

	var nav = document.createElement('nav');
	nav.setAttribute('class', 'nav');

	for(var i=0; i<keyArray.length; i++) { // 4
		var div = document.createElement('div');
		div.setAttribute('class', 'dropdown nav-link');
		nav.appendChild(div);

		// four btn: APP WEP EXPO ANI 
		var btn = document.createElement('button');
		btn.setAttribute('class', 'site-menu-btn dropdown-toggle');
		btn.setAttribute('type', 'button');
		btn.setAttribute('data-toggle', 'dropdown');
		btn.innerHTML = keyArray[i]; // APP WEB EXPO ANIM
		div.appendChild(btn);

  		// four dropdown ul
		var ul = document.createElement('ul');
		ul.setAttribute('class', 'dropdown-menu');
		div.appendChild(ul);
		for (var j=0; j<valueArray[i].length; j++) { // 10 3 3 1
			(function(k){	
				var li = document.createElement('li');
				var a = document.createElement('a');
				var dataObject = valueArray[i][j];
				a.text = dataObject.title;
				a.addEventListener('click', function(){ onItemClicked(dataObject); }, false);
				// a.addEventListener('click', function(){ reloadCard(dataObject); }, false);
				li.appendChild(a);
				ul.appendChild(li);
			})(j);
		}	
	}

	parent.append(nav);
}
function setMainMenuToggled(toggleButton, menu){

	toggleButton.click(function(){ 
		$(this).toggleClass('open');
		menu.slideToggle();
	});
}

