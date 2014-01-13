var StoreController = Ember.ArrayController.extend({
  carttotal: function() {
    var carttotal = 0;
    this.get('products').forEach(function(product) {
      carttotal += product.get('orderQty') * product.get('price');
    });
    return carttotal;
  }.property('products', 'products.@each.orderQty', 'products.@each.price'),

  subtotal: function() {
    var carttotal = 0;
    var subtotal = 0;
    this.get('products').forEach(function(product) {
      carttotal += product.get('orderQty') * product.get('price');
    });

    subtotal = carttotal;
    return subtotal;
  }.property('products', 'products.@each.orderQty', 'products.@each.price'),

  total: function() {
    var carttotal = 0;
    var subtotal = 0;
    var shipping = 5;
    var total = 0;
    this.get('products').forEach(function(product) {
      carttotal += product.get('orderQty') * product.get('price');
    });

    subtotal = carttotal;
    total = subtotal + shipping;

    return total;
  }.property('products', 'products.@each.orderQty', 'products.@each.price'),
});

export default StoreController;