var x = document.getElementById('progress-bar-line')
let count = 1
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      var val = mutation.target.getAttribute('aria-valuenow')
      if (val == 99) {
        var nextVidEl = document.getElementById(count)
        nextVidEl.scrollIntoView()
        var x = document.getElementById('progress-bar-line')
        count++
      }
    }
  });
});
observer.observe(x, {
  attributes: true
});
