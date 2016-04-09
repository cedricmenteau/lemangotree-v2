// Initialize OKayNav
var navigation = $('#nav-main').okayNav({
  parent : '', // will call nav's parent() by default
  toggle_icon_class : 'okayNav__menu-toggle',
  toggle_icon_content: '<span /><span /><span />',
  align_right: true, // If false, the menu and the kebab icon will be on the left
  swipe_enabled: true, // If true, you'll be able to swipe left/right to open the navigation
  threshold: 50, // Nav will auto open/close if swiped >= this many percent
  beforeOpen : function() {}, // Will trigger before the nav gets opened
  afterOpen : function() {}, // Will trigger after the nav gets opened
  beforeClose : function() {}, // Will trigger before the nav gets closed
  afterClose : function() {}, // Will trigger after the nav gets closed
  itemHidden: function() {}, // Will trigger after an item moves to the hidden navigation
  itemDisplayed: function() {} // Will trigger after an item moves to the visible navigation
});

// SLICK
$('.carousel').slick({
  dots: true,
  autoPlay: false,
  speed: 700,
  initialSlide: 2,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true
});

// INSTAFEED
var userFeed = new Instafeed({
  get: 'user',
  clientID: '3ac2f5cc133c4d25abb04f4e033199da',
  accessToken:'1802227604.3ac2f5c.1e1314e961e24d7e8f36f4057be38d68',
  userId: 1802227604,
  limit: 10,
  link: false,
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
});

userFeed.run();