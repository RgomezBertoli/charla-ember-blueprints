import Ember from 'ember';

export default Ember.Route.extend({

  store: Ember.inject.service(),

  model: function(){
    return this.get('store').createRecord('<%=dasherizedModuleName %>');
  },

  actions:{
    next: function(model){
      if(model.validate()){
        this.transitionTo();
      }
    }
  }
});
