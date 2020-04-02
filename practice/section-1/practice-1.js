'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = [];
	for (const element of collectionA) {
		if (collectionB.includes(element)) {
			result.push(element);
		}
	}
  return result;
}
