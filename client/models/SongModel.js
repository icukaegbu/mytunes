// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  //set defaults
  defaults: {
    "url": "",
    "title": "",
    "artist": ""
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
  	//add to the SongQueue
  	//display in the bound lists - 
  	//bind
  	this.trigger('enqueue', this);
  	//console.log("called from SongModel, clicked on "+this.attributes.title);
  },

  dequeue: function(){
  	//remove from the SongQueue and unbind from views
  	this.trigger('dequeue', this);
  },

  ended: function(){
    //remove from the SongQueue and unbind from views
    this.trigger('ended', this);
  }

});
