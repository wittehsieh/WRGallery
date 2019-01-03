// <div class="card card-horizontal">
// 	<div class="card-img">
// 		<img id="card-img" class="img-fluid"></img>
// 		<!-- <div id="card-img" class="img-fluid"></div> -->
// 	</div>
// 	<div class="card-content">
// 		<!-- ================================ -->
// 		<h3 class="title" id="card-title"></h3>
// 		<span class="title-sub" id="card-year"></span>
// 		<span class="title-sub" id="card-subtitle"></span>
// 		<!-- &nbsp; -->
// 		<span class="title-sub" id="card-type"></span>
// 		<!-- <span class="title-sub" id="card-type-2"></span> -->
// 		<hr/>
// 		<p class="desc" id="card-desc"></p>
// 		<a class="button button-lightseagreen" id="card-button"></a>
// 		<!-- <a class="button button-lightseagreen" id="card-button2"></a> -->
// 		<!-- ================================ -->
// 	</div>
// </div>

// 建立card類別
var card = new Object();
// 初始化
function createCard(dataObject, parent) {

	var card = document.createElement('div');
	card.setAttribute('class', 'card card-horizontal');

	var cardImg = document.createElement('div');
	var img = document.createElement('img');
	img.setAttribute('id', 'card-img');
	img.setAttribute('class', 'img-fluid');
	img.setAttribute('src', dataObject.img);
	img.setAttribute('width', '100%');
	// img.setAttribute('object-fit', 'fill');
	cardImg.appendChild(img);

	var cardContent = document.createElement('div');
	cardContent.setAttribute('class', 'card-content');

	var cardTitle = document.createElement('h3');
	cardTitle.setAttribute('id', 'card-title');
	cardTitle.setAttribute('class', 'title');
	cardTitle.textContent = dataObject.title;
	cardContent.appendChild(cardTitle);

	var cardYear = document.createElement('span');
	cardYear.setAttribute('id', 'card-year');
	cardYear.setAttribute('class', 'title-sub');
	cardYear.textContent = dataObject.year+'\u00a0';
	cardContent.appendChild(cardYear);

	var cardSubtitle = document.createElement('span');
	cardSubtitle.setAttribute('id', 'card-subtitle');
	cardSubtitle.setAttribute('class', 'title-sub');
	cardSubtitle.textContent = dataObject.id+'\u00a0';
	cardContent.appendChild(cardSubtitle);

	var cardType = document.createElement('span');
	cardType.setAttribute('id', 'card-type');
	cardType.setAttribute('class', 'title-sub');
	cardType.textContent = dataObject.type;
	cardContent.appendChild(cardType);

	var hr = document.createElement('hr');
	cardContent.appendChild(hr);

	var cardDesc = document.createElement('p');
	cardDesc.setAttribute('id', 'card-desc');
	cardDesc.setAttribute('class', 'desc');
	cardDesc.textContent = dataObject.desc;
	cardContent.appendChild(cardDesc);

    if(dataObject.linkTitle !== '') {

    	console.log('createCard');

    	var cardButton = document.createElement('a');
		cardButton.setAttribute('id', 'card-button');
		cardButton.setAttribute('class', 'button');
		cardButton.setAttribute('target', '_blank');
		cardButton.textContent = dataObject.linkTitle;
		cardContent.appendChild(cardButton);
    }
	
	// var cardButton2;
	// var cardButton3;

	card.appendChild(cardImg);
	card.appendChild(cardContent);

	parent.append(card);
}
function reloadCard(dataObject) {

	var cardImg = document.getElementById("card-img");
	cardImg.setAttribute('src', dataObject.img);

	var cardTitle = document.getElementById("card-title");
	cardTitle.textContent = dataObject.title;

	var cardYear = document.getElementById("card-year");
	cardYear.textContent = dataObject.year+'\u00a0';

	var cardSubtitle = document.getElementById("card-subtitle");
	cardSubtitle.textContent = dataObject.id+'\u00a0';

	var cardType = document.getElementById("card-type");
	cardType.textContent = dataObject.type;

	var cardDesc = document.getElementById("card-desc");
	cardDesc.textContent = dataObject.desc;

	if(dataObject.linkTitle !== '') {

		// console.log(dataObject.link);
    	console.log('reloadCard');

		var cardButton = document.getElementById("card-button");
		cardButton.setAttribute('href', dataObject.link);
		cardButton.textContent = dataObject.linkTitle;	
    }
}