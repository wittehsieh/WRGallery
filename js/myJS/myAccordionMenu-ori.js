
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
// <div class="panel">
// 	<div class="panel-heading" id="heading_X">
// 		<h4 class="panel-title">
//          <a class="accordion-toggle collapsed" data-toggle="collapse" 
//                    data-parent="#accordion" href="#collapse_X">category1
//                    data-parent=".accordion" href="#collapse_X">category1
//          </a>
// 		</h4>
// 	</div>
// 	<div id="collapse_X" class="panel-collapse collapse">
// 		<div class="panel-body">
// 			createItemList();
// 		</div>
// 	</div>
// </div>
// ---------------------------- // 
// 3.createAccordionMenu
// ---------------------------- // 
// <div id="accordion" class="panel-group">     X
// <div class="accordion" class="panel-group">  O
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
function createAccordionPanel(dataObjectArray, index, key, parent) {

	var panel = document.createElement('div');
	panel.setAttribute('class', 'panel');

	var panelHeading = document.createElement('div');
	panelHeading.setAttribute('class', 'panel-heading');
	panelHeading.setAttribute('id', 'heading_'+index);
	panel.appendChild(panelHeading);

	var panelTitle = document.createElement('h4');
	panelTitle.setAttribute('class', 'panel-title');
	panelHeading.appendChild(panelTitle);

	var panelTitleLink = document.createElement('a');
	panelTitleLink.setAttribute('class', 'accordion-toggle collapsed');
	panelTitleLink.setAttribute('data-toggle', 'collapse');
	panelTitleLink.setAttribute('data-parent', '#accordion');
	// panelTitleLink.setAttribute('data-parent', '.accordion');
	panelTitleLink.setAttribute('href', '#collapse_'+index);
	panelTitleLink.text = key;
	panelTitle.appendChild(panelTitleLink);

	var panelCollapse = document.createElement('div');
	panelCollapse.setAttribute('class', 'panel-collapse collapse');
	panelCollapse.setAttribute('id', 'collapse_'+index);
	createItemList(dataObjectArray, panelCollapse) ;
	panel.appendChild(panelCollapse);

	parent.append(panel);
}
function createAccordionMenu(dataCenter, sortKey, parent) {

	var panelGroup = document.createElement('div');
	panelGroup.setAttribute('id', 'accordion');
	// panelGroup.setAttribute('class', 'accordion');
	panelGroup.setAttribute('class', 'panel-group');

	var objectArrayByKey = dataCenter.getObjectByKey(sortKey); //{2014: Array(1), 2015: Array(3), ...}
	var keyArray = Object.keys(objectArrayByKey); //["2014", "2015", ...]
	
	for (var i=0; i<keyArray.length; i++) {
		createAccordionPanel(objectArrayByKey[keyArray[i]], i, keyArray[i], panelGroup);
	}
	
	parent.append(panelGroup);
}
