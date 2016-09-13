import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('member', params.id);
  },

  actions: {
    submit() {
      this.get('controller.model').save().then(()=> {
        this.transitionTo('members');
      });
    }
  }
});
