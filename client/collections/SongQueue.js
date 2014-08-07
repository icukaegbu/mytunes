// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  	this.on("enqueue", function(song){
  	  this.add(song);
  	  console.log("from SongQueue; ");
    })
  },

  //method to add songs to the queue
  // this.on("add", function(song){
  // 	//this.add(song);
  // 	console.log("from SongQueue; ");
  // })
  // enqueue: function(song){
  // 	this.add(song);
  // 	console.log("from SongQueue; "+song.attributes.title);
  // }


  //method to remove songs from the queue

});