import Ember from 'ember';

export default Ember.Route.extend({
	model({name}) {
		return this.get('store').findRecord('githubUser', name);
	}
});
