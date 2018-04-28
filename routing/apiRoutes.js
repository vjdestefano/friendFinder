
var friendList = require("../data/friends.js");
var uuid = require("uuid/v4");



module.exports = function(app) {
  
  
  function getScores(friendList){
    for(var i = 0; i < friendList.length; i++){
      var sum = 0;
      friendList[i].scores.forEach(function(item, index) {
        console.log(item);
          sum += item;
          })
      
      console.log(sum);
      friendList[i].friendScore = sum;
        };
      };



      function totalDifference(userFriendScore){
        console.log(userFriendScore);
        var difference = 0;
        var lowestDif = [];
        for(var i = 0; i < friendList.length; i++){
          var id = friendList[i].id;
          var name = friendList[i].name;
          var item = friendList[i].friendScore;
          difference = Math.abs(userFriendScore - item);

          var newObj = {
            name: name,
            id: id,
            item: item,
            difference: difference,
          }

          lowestDif.push(newObj);
        }
        lowestDif.sort(function(a,b){
          var alc = a.difference, blc = b.difference;
          return alc > blc ? 1 : alc < blc ? -1 : 0;
         });
         console.log(lowestDif);
         return friendsSorted(lowestDif);
      }

      function friendsSorted(lowestDif){
        
      }
      
  
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/questions", function(req, res) {
    res.json(questions);
  });

  app.get("/api/friendList", function(req, res) {

    res.json(friendList);
    
    //getScores(friendList);

    totalDifference(friendList[0].friendScore);


  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friendList/new", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware


    var newFriend = req.body;

    // generate a unique id for this reservation
    newFriend.id = uuid();


    // push new reservation into our array of exisiting reservations
    friendList.push(newFriend);

    // send new reservation data back to our ajax request (goes in the .then())
    res.json(newFriend);
    

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendList = [];
    

    console.log(friendList);
  });
};