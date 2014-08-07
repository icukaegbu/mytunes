// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",
  
  initialize: function() {
  	this.render();

  	var self = this;
  	this.collection.on('enqueue', function(){
  		//re-render the view
  		self.render();
  		console.log("from songqueueview: collection ="+collection);
  	});
  },

  render: function() {
  	this.$el.children().detach();

  	this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
      	return new SongQueueEntryView({model: song}).render();
      })
  	);
    return this.$el;
  }

});
