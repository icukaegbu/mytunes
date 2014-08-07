// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();

      console.log("called from library "+this.model.attributes.title);
      this.model.enqueue(this.model);
    },

    //add a song to the SongQueue
    // 'click': function() {
    //   console.log("called from library "+this.model.attributes.title);
    //   this.model.add(this.model);
      
    // }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
