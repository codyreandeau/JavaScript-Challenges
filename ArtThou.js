function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);

  arr = collection.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" });