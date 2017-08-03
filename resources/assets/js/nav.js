const nav = (function (document) {
  const getClassElements = function (name) {
    return document.getElementsByClassName(name) ? document.getElementsByClassName(name) : "can't find the element";
  }

  let nav = getClassElements('nav__list')[0];
  let navItems = Array.prototype.slice.call(nav.children);
  let body = document.getElementsByTagName("BODY")[0];
  let aside = getClassElements('developer')[0];
  let activeSection = getClassElements('about')[0];
  let background1 = getClassElements('background-1')[0];
  let background3 = getClassElements('background-3')[0];
  let phoneSize = 768;

  const init = function () {
    navItems.forEach(function(item) {
      item.addEventListener('click', selected);
    }, this);

    if (body.clientWidth <= phoneSize) {
      navItems[0].click();
    }

    window.addEventListener("resize", function () {
      if (body.clientWidth > phoneSize && activeSection === aside) {
        navItems[1].click();
      }
    });
  }

  const getActive = function () {
    return getClassElements('nav__list-item--active')[0];
  }

  const getSection = function (name) {
    return getClassElements(name)[0];
  }

  const selected = function (e) {
    let active = getActive();
    active.classList.toggle('nav__list-item--active');
    
    let item = e.target.nodeName == "I" ? e.target.parentElement : e.target;
    item.classList.toggle('nav__list-item--active');

    activeSection.classList.toggle('ghost');
    body.className = "background--"+item.id;
    aside.className = "developer developer--"+item.id;
    
    if(item.id === "home") {
      var section = aside;
      if (body.clientWidth <= phoneSize) {
        background3.className = "background-3 transparent";
      }
    } else {
      var section = getSection(item.id);
      section.classList.toggle('ghost');
      background3.className = "background-3";
      if (body.clientWidth <= phoneSize) {
        aside.className = "developer developer--"+item.id;
      }
    }
    
    activeSection = section;
  }

  return {
    init: init,
  }
})(document);