var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.route("about", { path: "/about" });
    this.route("faq", { path: "/faq" });
    this.route("ordertrack", { path: "track"});
    this.route("myAccount", { path: "account" });

    this.route('our-boxes');
    this.resource('store', function() {
      this.resource('category', {path:'/:category_id'}, function() {
        this.resource('product', {path:'/:product_id'});
      });
    });
    this.route('create-account');
    this.route('shipping');
    this.route('billing');
    this.route('tracking');
});

export default Router;
