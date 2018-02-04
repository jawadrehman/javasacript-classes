"use strict";

import CircularQueue from "./CircularQueue";
import SortedMap from "./SortedMap";
import NaiveMap from "./NaiveSortedMap";
const cq = new CircularQueue(3);
const map = new SortedMap(function(item, currentItem) {
  if (item.data > currentItem.data) {
    return 1;
  } else if (item.data < currentItem.data) {
    return -1;
  } else {
    return 0;
  }
});

const naiveMap = new NaiveMap(function(item, currentItem) {
  if (item.data > currentItem.data) {
    return 1;
  } else if (item.data < currentItem.data) {
    return -1;
  } else {
    return 0;
  }
});

map.add("LLOY", { data: 3 });
map.add("VOD", { data: 5 });
map.add("tso", { data: 2 });
map.add("MNOD", { data: 82 });
map.add("HSBA", { data: 10 });
map.add("BARC", { data: 1 });
map.add("BARC", { data: 8 });
map.add("HSBA", { data: 7 });
map.add("MNOD", { data: 4 });

naiveMap.add("LLOY", { data: 3 });
naiveMap.add("VOD", { data: 5 });
naiveMap.add("tso", { data: 2 });
naiveMap.add("MNOD", { data: 82 });
naiveMap.add("HSBA", { data: 10 });
naiveMap.add("BARC", { data: 1 });
naiveMap.add("BARC", { data: 8 });
naiveMap.add("HSBA", { data: 7 });
naiveMap.add("MNOD", { data: 4 });

console.log("smart ", map.sortedKeys);
console.log("naive ", naiveMap.sortedKeys);
var startDate = new Date();

for (var i = 0, j = 10000; i < j; i++) {
  naiveMap.add(
    naiveMap.sortedKeys[
      parseInt(Math.random() * naiveMap.sortedKeys.length - 1)
    ],
    {
      data: Math.random * 100
    }
  );
}
var endDate = new Date();

var timeTaken = endDate.getTime() - startDate.getTime();

console.log(
  "Time take to execute the script is " + timeTaken + " milliseconds"
);

var startDate = new Date();

for (var i = 0, j = 10000; i < j; i++) {
  map.add(map.sortedKeys[parseInt(Math.random() * map.sortedKeys.length - 1)], {
    data: Math.random * 100
  });
}
var endDate = new Date();

var timeTaken = endDate.getTime() - startDate.getTime();

console.log(
  "Time take to execute the script is " + timeTaken + " milliseconds"
);

// map.add("VOD", { data: 6 });
console.log(map.sortedKeys);
