var nav = ((document) => {
  var nav = document.getElementsByClassName('nav__list')[0];
  var navItems = Array.prototype.slice.call(nav.children);
  var body = document.getElementsByTagName("BODY")[0];
  var aside = document.getElementsByClassName('developer')[0];
  var activeSection = document.getElementsByClassName('home')[0];

  var init = () => {
    navItems.forEach(function(item) {
      item.addEventListener('click', selected);
    }, this);
  }

  var getActive = () => {
    return document.getElementsByClassName('nav__list-item--active')[0];
  }

  var getSection = (name) => {
    return document.getElementsByClassName(name)[0];
  }

  var selected = (e) => {
    var active = getActive();
    active.classList.toggle('nav__list-item--active');
    
    var item = e.target.nodeName == "I" ? e.target.parentElement : e.target;
    item.classList.toggle('nav__list-item--active');

    var section = getSection(item.id);
    activeSection.classList.toggle('ghost');
    section.classList.toggle('ghost');
    body.className = "background--"+item.id;
    aside.className = "developer developer--"+item.id;
    activeSection = section;
  }

  return {
    init: init,
  }
})(document);