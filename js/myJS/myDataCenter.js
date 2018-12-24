// loadCsvData
// getObjectByCondition
// getValuesOfKey
// getObjectByKey

var dataCenter = new Object();

dataCenter.csvData = [];

dataCenter.loadCsvData = function(csvDataUrl, onLoadComplete) {
	d3.csv(csvDataUrl, function(data) { 
		dataCenter.csvData = data; 
		onLoadComplete();
		
		// getObjectByCondition({key:"year", val:"2015"});
		// getValuesOfKey("year");
		// getValuesOfKey("type");
		// getObjectByKey("type");
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

