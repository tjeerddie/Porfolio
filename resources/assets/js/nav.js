var nav = (function (document) {
  var getClassElements = function (name) {
    return document.getElementsByClassName(name) ? document.getElementsByClassName(name) : "can't find the element";
  }

  var nav = getClassElements('nav__list')[0];
  var navItems = Array.prototype.slice.call(nav.children);
  var body = document.getElementsByTagName("BODY")[0];
  var aside = getClassElements('developer')[0];
  var activeSection = getClassElements('about')[0];
  var background1 = getClassElements('background-1')[0];
  var background3 = getClassElements('background-3')[0];

  var init = function () {
    navItems.forEach(function(item) {
      item.addEventListener('click', selected);
    }, this);

    if (screen.width <= 768) {
      navItems[0].click();
    }

    window.addEventListener("resize", function () {
      if (screen.width > 768 && activeSection === aside) {
        navItems[1].click();
      }
    });
  }

  var getActive = function () {
    return getClassElements('nav__list-item--active')[0];
  }

  var getSection = function (name) {
    return getClassElements(name)[0];
  }

  var selected = function (e) {
    var active = getActive();
    active.classList.toggle('nav__list-item--active');
    
    var item = e.target.nodeName == "I" ? e.target.parentElement : e.target;
    item.classList.toggle('nav__list-item--active');

    activeSection.classList.toggle('ghost');
    body.className = "background--"+item.id;
    aside.className = "developer developer--"+item.id;
    
    if(item.id === "home") {
      var section = aside;
      if (screen.width <= 768) {
        background3.className = "background-3 transparent";
      }
    } else {
      var section = getSection(item.id);
      section.classList.toggle('ghost');
      if (screen.width <= 768) {
        background3.className = "background-3";
        aside.className = "developer developer--"+item.id;
      }
    }
    
    activeSection = section;
  }

  return {
    init: init,
  }
})(document);