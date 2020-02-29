// There are a few typical problems while you working with arrays, and your goal is to solve it.
// You should implement 3 functions: max, min, and avg for searching minimal value, 
//maximal value, and an average value of a given array.
// For example:
// min(1, 2, 3, 4) // returns 1;
// max(1, 2, 3, 4) // returns 4;
// avg(1, 2, 3, 4) // returns 2.5;
// Please note, that you should return 0 if no params specified or an empty array passed

exports.min = function min (array) {
  if (Array.isArray(array)){
  if(array.length==0) return 0;
  else {
    array.sort(function(a, b) {
      return a - b;
    });
    return array[0];
  } }
  else return 0;
}
exports.max = function max (array) {
  if(Array.isArray(array)){
  if(array.length==0) return 0;
  else {
    array.sort(function(a, b) {
      return b - a;
    });
    return array[0];
  }}
  else return 0;
}

exports.avg = function avg (array) {
  if(Array.isArray(array)){
  if(array.length==0) return 0;
  else{    
    let s = array.reduce((sum,cur)=> sum+cur,0 );
    return s/array.length;
  }}
  else return 0;
}
