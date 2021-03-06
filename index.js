



/**
 * Based on https://stackoverflow.com/a/1165943/1345303
 * @param {Array} points [[x, y],[x,y],[x,y]]
 * @returns {Boolean}
 */
const isccw =  function (points) {
    
    let sum = 0
    let pt1, pt2, x2, y2
    let size = points.length - 1
    for (let i = 0; i < size; i++) {
        pt1 = points[i]
        pt2 = points[i+1]
        sum +=(pt2[0] - pt1[0]) * (pt2[1] + pt1[1])
    }
    
    return sum > 0
}

/**
 * Based on https://stackoverflow.com/a/1165943/1345303
 * @param {Array} points [[x, y],[x,y],[x,y]]
 * @param {Boolean} closePath if the polygon doesn't end where it started, you can pass true in order to close polygon 
 * @returns {Boolean}
 */
const isccwPolygon =  function (points, closePath) {
    
    let sum = 0
    let pt1, pt2, x2, y2
    let size = points.length - 1
    for (let i = 0; i < size; i++) {
        pt1 = points[i]
        pt2 = points[i+1]
        sum +=(pt2[0] - pt1[0]) * (pt2[1] + pt1[1])
    }

    if(closePath === true) {
        pt1 = points[size]
        pt2 = points[0]
        sum +=(pt2[0] - pt1[0]) * (pt2[1] + pt1[1])
    }
    return sum > 0
}

module.exports = {
    isccw : isccw,
    isccwPolygon : isccwPolygon
}

