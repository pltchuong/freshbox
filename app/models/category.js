var Category = DS.Model.extend({
  slug    : DS.attr(),
  name    : DS.attr(),
  parent  : DS.attr(),
  banner  : DS.attr()
});

Category.reopenClass({
  FIXTURES: [
  {
    id : 1,
    slug : 'underware',
    name : 'Underware',
    parent : 0,
    banner: 'assets/img/placeholder/banner2.jpg'
  },
  {
    id : 2,
    slug : 'shirts',
    name : 'Shirts',
    parent : 0,
    banner: 'assets/img/placeholder/banner3.jpg'
  },
  {
    id : 3,
    slug : 'socks',
    name : 'Socks',
    parent : 0,
    banner: 'assets/img/placeholder/banner3.jpg'
  },
  {
    id : 4,
    slug : 'grooming',
    name : 'Grooming',
    parent : 0,
    banner: 'assets/img/placeholder/banner2.jpg'
  },
  {
    id : 5,
    slug : 'condoms',
    name : 'Condoms',
    parent : 0,
    banner: 'assets/img/placeholder/banner2.jpg'
  },
  {
    id : 6,
    slug : 'boxer-briefs',
    name : 'Boxer Briefs',
    parent : 1,
    banner: 'assets/img/placeholder/banner2.jpg'
  },
  {
    id : 7,
    slug : 'boxers',
    name : 'Boxer',
    parent : 1,
    banner: 'assets/img/placeholder/banner2.jpg'
  },
  {
    id : 8,
    slug : 'briefs',
    name : 'Briefs',
    parent : 1,
    banner: 'assets/img/placeholder/banner2.jpg'
  },
  {
    id : 9,
    slug : 'sub-cat-1',
    name : 'Sub Cat 1',
    parent : 2,
    banner: 'assets/img/placeholder/banner3.jpg'
  },
  {
    id : 10,
    slug : 'sub-cat-2',
    name : 'Sub Cat 2',
    parent : 2,
    banner: 'assets/img/placeholder/banner3.jpg'
  }
]});

export default Category;
