// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %></td><td><%= title %></td>'),

  events: {
  	'click': function() {
      this.model.play();
    },

    //double click to remove an item from the playlist
    'dblclick': function(){
      this.model.remove();
    }
  },

  render: function(){
  	return this.$el.html(this.template(this.model.attributes));
  }
});
