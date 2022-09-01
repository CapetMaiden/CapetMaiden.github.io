(function (window) {
    var helloSpeaker = {};
    helloSpeaker.name = " ";
    var speak = "Hello";
    helloSpeaker.speak = function (name) {
     console.log(speak + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);

(function (window) {
    var byeSpeaker = {};
    byeSpeaker.name = " "
    var speak = "Good Bye"
    byeSpeaker.speak = function (name) {
     
     console.log(speak + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);


(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

   for (var i = 0; i < names.length; i++) {
   var firstLetter = names[i].charAt(0).toLowerCase();
   if (firstLetter === 'j') {

    console.log(byeSpeaker.speak( names[i]));
  } else {

   console.log(helloSpeaker.speak( names[i]));
  }
}

})();