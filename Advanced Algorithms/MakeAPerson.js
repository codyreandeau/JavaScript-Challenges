var Person = function(firstAndLast) {
  
  var fullName = firstAndLast;
  var name_split = fullName.split(' ');
  
  this.getFirstName = function() {
    return name_split[0];
  };

  this.getLastName = function() {
    return name_split[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + ' ' + name_split[1];
  };

  this.setLastName = function(name) {
    fullName = name_split[0] + ' ' + name;
  };

  this.setFullName = function(name) {
    fullName = name;
    name_split = fullName.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();