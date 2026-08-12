// Botkyrkas Ordfest – navigation, dropdowns och scroll-animationer

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      document.body.classList.toggle('nav-locked', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        document.body.classList.remove('nav-open', 'nav-locked');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.has-sub > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.querySelectorAll('.has-sub.open').forEach(function (other) {
        if (other !== li) {
          other.classList.remove('open');
          other.querySelector('button').setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-sub')) {
      document.querySelectorAll('.has-sub.open').forEach(function (li) {
        li.classList.remove('open');
        li.querySelector('button').setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var openSub = document.querySelector('.has-sub.open');
    if (openSub) {
      openSub.classList.remove('open');
      var btn = openSub.querySelector('button');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
      return;
    }
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      document.body.classList.remove('nav-open', 'nav-locked');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    }
  });

  document.querySelectorAll('.has-sub').forEach(function (li) {
    li.addEventListener('focusout', function () {
      requestAnimationFrame(function () {
        if (!li.contains(document.activeElement) && li.classList.contains('open')) {
          li.classList.remove('open');
          li.querySelector('button').setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
})();
