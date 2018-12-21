var createItemList = function(item) {
	var htmlString = '';
	if(!Array.isArray(item)) {
		htmlString = '<div class="panel-body">'+item+'</div>';
	}
	else { 
		for(i=0; i<item.length; i++) {
  			htmlString += '<div class="panel-body">'+item[i]+'</div>';
		}
  	}
  	return htmlString;
}

var createAccordionMenu = function(panel, index) {
	$('.site-main-menu').append('<div class="panel panel-default">'+
		'<div class="panel-heading" role="tab" id="heading_'+index+'">'+
			'<h4 class="panel-title">'+
				'<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_'+index+'">'+
					panel.title+
				'</a>'+
			'</h4>'+
		'</div>'+
          
		'<div id="collapse_'+index+'" class="panel-collapse collapse">'+
			// '<div class="panel-body">'+
			//   item.content+              
            // '</div>'+
            createItemList(panel.content)+
		'</div>'+
	'</div>'
	);
}

var success = function(data) {
	data.items.forEach(createAccordionMenu);
}