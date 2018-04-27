var uuid = require("uuid/v4");

function Friend(name,photo,scores,id,friendScore){
  this.name = name;
  this.photo = photo;
  this.scores = scores;
  this.id = id;
  this.friendScore = friendScore;
  this.FriendPrint = function(){
    console.log(this);
  }
}

var friendsArray = [
  {
   name:'Vinnychenzo DeStefano',
   photo:'this.jpg',
   scores:[
     2,
     5,
     4,
     3,
     2,
     2,
     2,
     4,
     5,
     2
   ],
   id:uuid(),
   friendScore:31,
  },
  {
    name:'Vinny test2',
    photo:'this.jpg',
    scores:[
      4,
      5,
      4,
      3,
      2,
      2,
      2,
      4,
      5,
      2
    ],
    id:uuid(),
    friendScore:33,
   },
    {
    name:'Vinny',
    photo:'this.jpg',
    scores:[
      1,
      5,
      4,
      3,
      2,
      2,
      2,
      4,
      5,
      2
    ],
    id:uuid(),
    friendScore:30,
   },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray, Friend;
