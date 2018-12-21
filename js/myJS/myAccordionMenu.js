// ---------------------------- // 
// 1.createItemList
// ---------------------------- // 
// <div class="panel-body">
// 	<ul>
// 		<li><a>item1</a></li>
// 		<li><a>item2</a></li>
// 	</ul>
// </div>
// function onAccordionItemClicked(dataObject, parent) {
function onAccordionItemClicked(dataObject) {
	reloadCard(dataObject);
}
function createItemList(dataArray, parent) {

	var panelBody = document.createElement('div');
	panelBody.setAttribute('class', 'panel-body');

	var ul = document.createElement('ul');
	panelBody.appendChild(ul);

	for (var i=0; i<dataArray.length; i++) {

		(function(j){
			var li = document.createElement('li');
			var a = document.createElement('a');
			a.text = dataArray[j].title; 
			// a.setAttribute('href', 'index.html');
			// a.setAttribute('href', '#');
			a.addEventListener('click', function(){ onAccordionItemClicked(dataArray[j]); }, false);
			li.appendChild(a);

			ul.appendChild(li);
		})(i);
	}
	parent.appendChild(panelBody);
}
// ---------------------------- // 
// 2.createAccordionPanel
// ---------------------------- // 
// <div class="panel">
//	<div id="heading_X class="panel-heading">
// 		<h4 class="panel-title">
//          <a class="accordion-toggle collapsed" 
//                    data-toggle="collapse" 
//                    data-parent="#accordion" 
//                    href="#collapse_X">category1
//          </a>
// 		</h4>
// 	</div>
// 	<div id="collapse_X" class="panel-collapse collapse">
// 		<div class="panel-body">
// 			createItemList();
// 		</div>
// 	</div>
// </div>
function createAccordionPanel(dataObject, index, key, parent) {

	// console.log('createAccordionPanel');

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
	panelTitleLink.setAttribute('href', '#collapse_'+index);
	panelTitleLink.text = key;
	panelTitle.appendChild(panelTitleLink);

	var panelCollapse = document.createElement('div');
	panelCollapse.setAttribute('class', 'panel-collapse collapse');
	panelCollapse.setAttribute('id', 'collapse_'+index);
	createItemList(dataObject, panelCollapse) ;
	panel.appendChild(panelCollapse);

	parent.append(panel);
}
// ---------------------------- // 
// 3.createAccordionMenu
// ---------------------------- // 
// <div id="accordion" class="panel-group">
//  createAccordionPanel();
// </div>
function createAccordionMenu(dataCenter, parent) {

	var panelGroup = document.createElement('div');
	panelGroup.setAttribute('id', 'accordion');
	panelGroup.setAttribute('class', 'panel-group');

	var objectArrayByKey = dataCenter.getObjectByKey("year");
	// console.log(dataCenter);
	// console.log(objectArrayByKey);

	var keyArray = Object.keys(objectArrayByKey);
	for (var i=0; i<keyArray.length; i++) {
		createAccordionPanel(objectArrayByKey[keyArray[i]], i, keyArray[i], panelGroup);
	}
	
	parent.append(panelGroup);
}
