'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
	for (const element of collectionA) {
		if (objectB["value"].includes(element["key"])) {
			element["count"]--;
			result.push(element);
		}
		else 
			result.push(element);
	}
  return result;
}
