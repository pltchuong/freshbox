var CategoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.category_id);
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('products', this.store.find('product', {category: parseInt(model.id, 10)}));
    
    this.controllerFor('store').set('bg', 'background: url("' + model.get('banner') + '") no-repeat center top;');
  },
  actions: {
    addcart: function(product) {
      product.set('orderQty', (product.get('orderQty') ? product.get('orderQty') : 0) + 1);
    }
  }
});

export default CategoryRoute;