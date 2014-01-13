var ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.product_id);
  },
  actions: {
    addcart: function(product) {
      product.set('orderQty', (product.get('orderQty') ? product.get('orderQty') : 0) + 1);
      product.get('store').find('product');
      this.transitionTo('category');
    },
    close: function() {
      this.transitionTo('category');
    }
  }
});

export default ProductRoute;