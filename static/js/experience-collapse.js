(function () {
  'use strict';
  var section = document.getElementById('experience');
  if (!section) return;

  // Find experience items: theme may use .col-md-6, .card, or .row > div
  var items = section.querySelectorAll('.col-md-6, .col-lg-6');
  if (items.length === 0) items = section.querySelectorAll('.card');
  if (items.length === 0) {
    var row = section.querySelector('.row');
    if (row) items = row.children;
  }
  if (items.length <= 4) return;

  var showCount = 4;
  var extra = [];
  for (var i = showCount; i < items.length; i++) {
    extra.push(items[i]);
  }
  var wrapper = document.createElement('div');
  wrapper.className = 'experience-more-block row';
  wrapper.setAttribute('hidden', '');
  extra.forEach(function (el) {
    wrapper.appendChild(el);
  });
  items[showCount - 1].parentNode.insertBefore(wrapper, items[showCount - 1].nextSibling);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn btn-outline-primary btn-sm experience-toggle-btn';
  btn.textContent = 'Show more';
  btn.setAttribute('aria-expanded', 'false');
  wrapper.parentNode.insertBefore(btn, wrapper);

  btn.addEventListener('click', function () {
    var isHidden = wrapper.hasAttribute('hidden');
    if (isHidden) {
      wrapper.removeAttribute('hidden');
      btn.textContent = 'Show less';
      btn.setAttribute('aria-expanded', 'true');
    } else {
      wrapper.setAttribute('hidden', '');
      btn.textContent = 'Show more';
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
