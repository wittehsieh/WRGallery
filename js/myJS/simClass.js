// https://ithelp.ithome.com.tw/articles/10128721
Class.method = function () { /* code */ }
Class.prototype.method = function () { /* code using this.values */ }



// http://expect7.pixnet.net/blog/post/37266353-%5B%E7%A8%8B%E5%BC%8F%5D%5Bjavascript%5D-javascript-%E7%89%A9%E4%BB%B6(oo)%E5%AF%AB%E6%B3%95%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%B4%B9
// --------- Factory  --------- 
// 此法只能生成一個物件
var Fish = new Object;
Fish.color = 'red';
Fish.size = 4;
Fish.type = '淡水';
Fish.showColor = function() { alert(this.color); };

// 把屬性與方法包起來，但物件一樣要一個個生成
function createCar() {
	var Fish = new Object;
	Fish.color = 'red';
	Fish.size = 4;
	Fish.type = '淡水';
	Fish.showColor = function() { alert(this.color); };
	return Fish;
};
var Fish1 = createCar();
var Fish2 = createCar();

// --------- Constructor diagram (最常見寫法) --------- 
function Fish(iColor, iSize, iType) {
	this.color = iColor;
	this.size = iSize;
	this.type = iType;
	this.showColor = function() { alert(this.color); };
};
var Fish1 = new Fish('red', 4, '淡水');
var Fish2 = new Fish('blue', 3, '海水');

Fish1.show(); //red
Fish2.show(); //blue

// --------- Hybrid Constructor --------- 
function Fish(iColor, iSize, iType) {
	this.color = iColor;
	this.size = iSize;
	this.type = iType;
	// this.showColor = function() { alert(this.color); };
};
//方法只生成一份(效能較好)(但不建議採用，還是全包較好)
Fish.prototype.showColor = function() { alert(this.color); };

// --------- Prototype Constructor (不好的寫法) ---------
function Fish() {};
Fish.prototype.color = 'red';
Fish.prototype.doors = 4;
Fish.prototype.mpg = 23;
Fish.prototype.showColor = function() { alert(this.color); };
var Fish1 = new Fish();
var Fish2 = new Fish();
//
function Fish(iColor, iSize, iType) {
	myObj = this;
	myObj.color = iColor;
	myObj.size = iSize;
	myObj.type = iType;

	//public
	myObj.showColor = function() { alert(myObj.color); };

	//private
	var showSize = function() { alert(myObj.type);};
};
var Fish1 = new Fish('red', 4, '淡水');
var Fish2 = new Fish('blue', 3, '海水');
Fish1.showColor();
fish2.showSize(); //error