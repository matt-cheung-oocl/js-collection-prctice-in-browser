'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
	for (const element of collectionA) {
		if (objectB["value"].includes(element["key"])) {
			var count = Math.floor(element["count"] / 3);
			element["count"] = element["count"] - count;
			result.push(element);
		}
		else 
			result.push(element);
	}
  return result;
}
