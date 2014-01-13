var Product = DS.Model.extend({
  title   : DS.attr(),
  subtitle  : DS.attr(),
  description : DS.attr(),
  picture   : DS.attr(),
  price   : DS.attr(),
  category  : DS.attr(),
  orderQty  : DS.attr(),
  totalQty  : DS.attr(),
  availableQty: DS.attr()
});

Product.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Underware No.1 long name',
      subtitle: 'Donec sed massa orci.',
      description: 'Aliquam imperdiet sodales enim, eu ornare ligula imperdiet id. Sed facilisis imperdiet augue, eget sagittis sem convallis ut.',
      picture: 'assets/img/placeholder/product.jpg',
      price: 24,
      category: 1,
      orderQty: 3
    },
    {
      id: 2,
      title: 'Underware No.2',
      subtitle: 'Integer at magna feugiat, auctor ipsum accumsan, egestas risus.',
      description: 'Nam ultricies semper tellus vel fringilla. Curabitur fringilla aliquam lacus vel pulvinar.',
      picture: 'assets/img/placeholder/product.jpg',
      price: 10,
      category: 1,
      orderQty: 1
    },
    {
      id: 3,
      title: 'Underware No.3',
      subtitle: 'Quisque ultrices eros id ipsum commodo, eu facilisis odio iaculis.',
      description: 'Aenean id ligula molestie, pretium lacus et, molestie augue. Sed nisi nibh, ultrices sollicitudin tortor a, venenatis viverra felis?',
      picture: 'assets/img/placeholder/product.jpg',
      price: 30,
      category: 1
    },
    {
      id: 4,
      title: 'Underware No.3',
      subtitle: 'Quisque ultrices eros id ipsum commodo, eu facilisis odio iaculis.',
      description: 'Aenean id ligula molestie, pretium lacus et, molestie augue. Sed nisi nibh, ultrices sollicitudin tortor a, venenatis viverra felis?',
      picture: 'assets/img/placeholder/product.jpg',
      price: 30,
      category: 2
    }
  ]
});

export default Product;