var createItemList = function(itemContent) {
  var returnHtmlString = '';
  if(!Array.isArray(itemContent)) {
    returnHtmlString = '<div class="panel-body">'+itemContent+'</div>';
  }
  else  {
    for(i=0; i<itemContent.length; i++) {
      returnHtmlString += '<div class="panel-body">'+itemContent[i]+'</div>';
    }
  }
  return returnHtmlString;
}

var createAccordionMenu = function(item,index) {
    $('.site-main-menu').append(
        '<div class="panel panel-default">'+
          '<div class="panel-heading" role="tab" id="heading_'+index+'">'+
            '<h4 class="panel-title">'+
              '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_'+index+'">'+
                  item.title+
              '</a>'+
            '</h4>'+
          '</div>'+
          '<div id="collapse_'+index+'" class="panel-collapse collapse">'+
            // '<div class="panel-body">'+
            //   item.content+              
            // '</div>'+
            createItemList(item.content)+
          '</div>'+
        '</div>'
      );
  }


var success = function(data) {
  data.items.forEach(createAccordionMenu);
}