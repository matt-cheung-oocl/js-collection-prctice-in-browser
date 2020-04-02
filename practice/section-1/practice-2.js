'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
	for (const element of collectionA) {
		if (collectionB[0].includes(element)) {
			result.push(element);
		}
	}
  return result;
}
