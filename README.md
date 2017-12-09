# isCCW

Checks whether polygon is counter-clockwise (anti-clockwise)

```js
var var isccw = require('isccw')

var polygon = [ 
                [4217551.0462295525,  2334125.362804338],
                [4217544.514949324,   2334137.0507002505],
                [4217557.756431655,   2334143.653760109],
                [4217563.792125977,   2334132.6343561145]
              ]

var isCounterClockWise = isccw(polygon)

console.log(isCounterClockWise) // TRUE
```