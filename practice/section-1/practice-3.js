'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
	for (const element of collectionA) {
		if (objectB["value"].includes(element)) {
			result.push(element);
		}
	}
  return result;
}
