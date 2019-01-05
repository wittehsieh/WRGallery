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
// 		<hr/>
// 		<p class="desc" id="card-desc"></p>
// 		<a class="button" id="card-button_0"></a>
// 		<a class="button" id="card-button_1"></a>
// 		<a class="button" id="card-button_2"></a>
// 		<a class="button" id="card-button_3"></a>
// 		<a class="button" id="card-button_4"></a>
// 		<!-- ================================ -->
// 	</div>
// </div>

// 建立card類別
var card = new Object();
var cardButtonArray = [];
// 初始化
function createCard(dataObject, parent) {

	var card = document.createElement('div');
	card.setAttribute('class', 'card card-horizontal');

	var cardImg = document.createElement('div');
	var img = document.createElement('img');
	img.setAttribute('id', 'card-img');
	img.setAttribute('class', 'img-fluid');
	img.setAttribute('width', '100%');
	cardImg.appendChild(img);

	var cardContent = document.createElement('div');
	cardContent.setAttribute('class', 'card-content');

	var cardTitle = document.createElement('h3');
	cardTitle.setAttribute('id', 'card-title');
	cardTitle.setAttribute('class', 'title');
	cardContent.appendChild(cardTitle);

	var cardYear = document.createElement('span');
	cardYear.setAttribute('id', 'card-year');
	cardYear.setAttribute('class', 'title-sub');
	cardContent.appendChild(cardYear);

	var cardSubtitle = document.createElement('span');
	cardSubtitle.setAttribute('id', 'card-subtitle');
	cardSubtitle.setAttribute('class', 'title-sub');
	cardContent.appendChild(cardSubtitle);

	var cardType = document.createElement('span');
	cardType.setAttribute('id', 'card-type');
	cardType.setAttribute('class', 'title-sub');
	cardContent.appendChild(cardType);

	var hr = document.createElement('hr');
	cardContent.appendChild(hr);

	var cardDesc = document.createElement('p');
	cardDesc.setAttribute('id', 'card-desc');
	cardDesc.setAttribute('class', 'desc');
	cardContent.appendChild(cardDesc);

    for (var i=0; i<5; i++) {
    	var cardButton = document.createElement('a');
		cardButton.setAttribute('id', 'card-button_'+i);
		cardButton.setAttribute('class', 'button');
		cardButton.setAttribute('target', '_blank');
		cardContent.appendChild(cardButton);

		cardButtonArray.push(cardButton);
    }
    
	card.appendChild(cardImg);
	card.appendChild(cardContent);

	parent.append(card);

	reloadCard(dataObject);
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

	var cardLinkTitleArray = dataObject.linkTitle.split(",");
	var cardLinkArray = dataObject.link.split(",");
	for (var i=0; i<cardButtonArray.length; i++) {
		if(i<cardLinkArray.length && cardLinkArray[i].trim().length > 0) {
			cardButtonArray[i].style.visibility = 'visible'; 
			cardButtonArray[i].setAttribute('href', cardLinkArray[i]);
			cardButtonArray[i].textContent = cardLinkTitleArray[i];	
		}
		else {
			cardButtonArray[i].style.visibility = 'hidden'; 
		}
	}
}