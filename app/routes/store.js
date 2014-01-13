var StoreRoute = Ember.Route.extend({
  model: function() {
		return this.store.find('category', {parent: 0});
  },
  setupController: function(controller, model) {
    controller.set('content', model);

    this.get('store').find('product'); // reload
    controller.set('products', this.get('store').filter('product', function(product) {
      return product.get('orderQty') > 0;
    }));
  },
  actions: {
    cancel: function(product) {
      product.set('orderQty', 0);
    }
  }
});

export default StoreRoute;