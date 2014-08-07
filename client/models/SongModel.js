// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
  	//add to the SongQueue
  	//display in the bound lists - 
  	//bind
  	this.trigger('enqueue', this);
  	console.log("called from SongModel, clicked on "+this.attributes.title);
  },

  remove: function(){
  	//remove from the SongQueue and unbind from views
  	this.trigger('remove', this);
  }

});
