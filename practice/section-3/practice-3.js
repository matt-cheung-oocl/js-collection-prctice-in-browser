'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
	var counting = {};

	for (var i = 0; i < collectionA.length; i++) {
	  counting[collectionA[i]] = counting[collectionA[i]] ? counting[collectionA[i]] + 1 : 1;
	}

  for (const element in counting) {
    if (objectB["value"].includes(element)) {
      result.push({"key": element, "count": (counting[element] - Math.floor(counting[element] / 3))});
    }
    else 
      result.push({"key": element, "count": counting[element]});
  }
  return result;
}
