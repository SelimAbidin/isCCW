# isCCW
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Checks whether polygon is counter-clockwise (anti-clockwise)

```js
var var {isConvexCCW} = require('isccw')

var polygon = [ 
                [4217551.0462295525,  2334125.362804338,   4162688.043176685],
                [4217544.514949324,   2334137.0507002505,  4162688.106388359],
                [4217557.756431655,   2334143.653760109,   4162671.10242251],
                [4217563.792125977,   2334132.6343561145,  4162671.165634375]
              ]

var isCounterClockWise = isccw(points)

console.log(isCounterClockWise) // TRUE
```