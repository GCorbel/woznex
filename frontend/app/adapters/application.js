import DS from 'ember-data';
import ENV from 'woznex/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.host
});
