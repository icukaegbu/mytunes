// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",
  
  initialize: function() {
  	//this.render();
  	//var self = this;
  
  	this.collection.on('add', function(model){
  		this.render();
  		//console.log("from songqueueview: collection ="+collection);
  	}, this);

    this.collection.on('remove', function(model){
      this.render();
    }, this);
  },

  render: function() {
  	this.$el.children().detach();

  	this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
      	return new SongQueueEntryView({model: song}).render();
      })
  	);
    return this.$el;   //to remove?
  }

});
