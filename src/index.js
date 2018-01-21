'use strict';

import CircularQueue from './CircularQueue';

const cq = new CircularQueue(3);

cq.add(0);
cq.add(1);
cq.add(2);
cq.add(3);

console.log(cq.data);
console.log("get 1  = ", cq.get(1));

cq.forEach((data => console.log('for each', data)));