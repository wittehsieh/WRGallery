function createMenuItemModel(itemContent, displayKey, childList, onClickEvent) {

	// dictionary
	var menuItemModel = {};

	menuItemModel.itemContent = itemContent;
	menuItemModel.displayKey = displayKey;
	menuItemModel.childList = childList;
	menuItemModel.onClickEvent = onClickEvent;

	return menuItemModel;
}		

var menuItemIndustry = new Object();

menuItemIndustry.viewCreators = new Object();

//TODO: creators======================================================
var MenuItemEnum = {
	SideBar = "SideBar";
}

menuItemIndustry.viewCreators[MenuItemEnum.SideBar] = function(menuItemModel) {


}
//===================================================================

menuItemIndustry.createMenuItemView = function(parent, menuItemModel) {
	var menuItemView = viewCreators[menuItemModel.displayKey](menuItemModel);
	parent.append(menuItemView);

	if(menuItemModel.childList != null)
	{
		for (var i=0; i<menuItemModel.childList.length; i++) {
			createMenuItemView(menuItemView, menuItemModel.childList[i]);
		}
	}
}