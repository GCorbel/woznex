import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('member');
  },

  actions: {
    delete(model) {
      model.destroyRecord().then(()=> {
        this.transitionTo('members');
      });
    }
  }
});
