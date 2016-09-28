import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sumbit() {
      this.sendAction('sumbit');
    }
  }
});
