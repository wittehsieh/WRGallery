// Used with _accordion.css

// ---------------------------- // 
// 1.createItemList
// ---------------------------- // 
// <div class="panel-body">
// 	<ul>
// 		<li><a>item1</a></li>
// 		<li><a>item2</a></li>
// 	</ul>
// </div>
// ---------------------------- // 
// 2.createAccordionPanel
// ---------------------------- // 
// data-toggle="collapse" 設定連結為可展開/可折疊
// data-target 指定連結的子元件ID (指定連結打開面版)
// data-parent 指定連結的父元件ID (限定一次僅一面板打開)
// ---------------------------- // 
// <div class="panel">
// 	<div class="panel-heading" id="rootID_heading_X">
// 		<h4 class="panel-title">
//          <a class="accordion-toggle collapsed" 
//             data-toggle="collapse" 
//             data-parent="#rootID"
//             data-target="#rootID_collapse_X">categoryX 
//          </a>
// 		</h4>
// 	</div>
// 	<div class="panel-collapse collapse" id="rootID_collapse_X">
// 		<div class="panel-body">
// 			createItemList();
// 		</div>
// 	</div>
// </div>
// ---------------------------- // 
// 3.createAccordionMenu
// ---------------------------- // 
// <div id="rootID" class="panel-group">     
//  createAccordionPanel();
// </div>

function onItemClicked(dataObject) {

	reloadCard(dataObject);
}
function createItemList(dataObjectArray, parent) {

	var panelBody = document.createElement('div');
	panelBody.setAttribute('class', 'panel-body');

	var ul = document.createElement('ul');
	panelBody.appendChild(ul);

	for (var i=0; i<dataObjectArray.length; i++) {
		(function(j){
			var li = document.createElement('li');
			var a = document.createElement('a');
			var dataObject = dataObjectArray[j];
			a.text = dataObject.title; 
			// a.text = dataObject[accordionMenuConfig]; 
			a.addEventListener('click', function(){ onItemClicked(dataObject); }, false);
			li.appendChild(a);
			ul.appendChild(li);
		})(i);
	}
	parent.appendChild(panelBody);
}
function createAccordionPanel(dataObjectArray, index, key, parent, rootID) {

	var panel = document.createElement('div');
	panel.setAttribute('class', 'panel');

	var panelHeading = document.createElement('div');
	panelHeading.setAttribute('class', 'panel-heading');
	panelHeading.setAttribute('id', rootID+'_heading_'+index);
	panel.appendChild(panelHeading);

	var panelTitle = document.createElement('h4');
	panelTitle.setAttribute('class', 'panel-title');
	panelHeading.appendChild(panelTitle);

	var panelTitleLink = document.createElement('a');
	panelTitleLink.setAttribute('class', 'accordion-toggle collapsed');
	panelTitleLink.setAttribute('data-toggle', 'collapse');
	panelTitleLink.setAttribute('data-target', '#'+rootID+'_collapse_'+index);
	panelTitleLink.setAttribute('data-parent', '#'+rootID);
	panelTitleLink.text = key;
	panelTitle.appendChild(panelTitleLink);

	var panelCollapse = document.createElement('div');
	panelCollapse.setAttribute('class', 'panel-collapse collapse');
	panelCollapse.setAttribute('id', rootID+'_collapse_'+index);
	createItemList(dataObjectArray, panelCollapse) ;
	panel.appendChild(panelCollapse);

	parent.append(panel);
}
function createAccordionMenu(dataCenter, sortKey, parent, rootID) {

	var panelGroup = document.createElement('div');
	panelGroup.setAttribute('id', rootID);
	panelGroup.setAttribute('class', 'panel-group');

	var objectArrayByKey = dataCenter.getObjectByKey(sortKey); //{2014: Array(1), 2015: Array(3), ...}
	var keyArray = Object.keys(objectArrayByKey); //["2014", "2015", ...]
	
	for (var i=0; i<keyArray.length; i++) {
		createAccordionPanel(objectArrayByKey[keyArray[i]], i, keyArray[i], panelGroup, rootID);
	}
	
	parent.append(panelGroup);
}


function myFunction(x) {
	$('.accordion-toggle:not(".collapsed")').collapse('toggle');

}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes