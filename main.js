var x = document.getElementById('progress-bar-line');
let count = 1;
let progress = 0;
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      let val = parseInt(mutation.target.getAttribute('aria-valuenow'))
      if (val < progress) {
        let nextVidEl = document.getElementById(count);
        nextVidEl.scrollIntoView();
        var x = document.getElementById('progress-bar-line');
        count++;
        progress = 0
      }
      progress = val;
    }
  });
});
observer.observe(x, {
  attributes: true
});
