// https://www.oxxostudio.tw/articles/201501/svg-d3-13-csv.html

// loadCsvData
// getValuesOfKey 
// getObjectByKey 
// getObjectByCondition 

var dataCenter = new Object();

// variable
dataCenter.csvData = [];

// method
// Convert CSV to JSON
dataCenter.loadCsvData = function(csvDataUrl, onLoadComplete) {
	d3.csv(csvDataUrl, function(data) { 
		dataCenter.csvData = data; 
		onLoadComplete();
		// console.log(data);

		// dataCenter.getValuesOfKey("year"); //["2014", "2015", "2016", "2017", "2018"]
		// dataCenter.getValuesOfKey("type"); //["APP", "WEB", "EXPO", "ANIM"]
		// dataCenter.getObjectByKey("type"); //{APP: Array(10), WEB: Array(3), EXPO: Array(3), ANIM: Array(1)}

		// dataCenter.getObjectByCondition({key:"type", val:"WEB"}); 
		// 0: {id:"OhBear", year:"2016", type:"WEB", ...}
		// 1: {id:"CameoVR", year:"2017", type:"WEB", ...}
		// 2: {id:"CloudShop", year:"2018", type:"WEB", ...}

	});
}
dataCenter.getObjectByCondition = function(condition) {

	var result = [];
	for (var i=0; i<this.csvData.length; i++) {
		var valArray = this.csvData[i][condition.key].split(',');	
		if(valArray.includes(condition.val)) {
			result.push(this.csvData[i]);
		}
	} 
	// console.log(result);
	return result;	
}
dataCenter.getValuesOfKey = function(myKey) {

	var result = [];
	for (var i=0; i<this.csvData.length; i++) {
		var valArray = this.csvData[i][myKey].split(',');	
		for(var j=0; j<valArray.length; j++) {
			if (!result.includes(valArray[j])) {
				result.push(valArray[j]);
			}
		}
	} 
	// console.log(result);
	return result;
}
dataCenter.getObjectByKey = function(myKey) {

	var result = {};
	var values = this.getValuesOfKey(myKey);
	for (var i=0; i<values.length; i++) {
		result[values[i]] = this.getObjectByCondition({key:myKey, val:values[i]});
	}
	// console.log(result);
	return result;
}

