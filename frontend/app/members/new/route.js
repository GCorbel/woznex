import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('member');
  },

  actions: {
    submit() {
      this.get('controller.model').save().then(()=> {
        this.transitionTo('members');
      });
    }
  }
});
