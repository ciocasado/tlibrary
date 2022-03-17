function init() {
  // add a queue event here
  _ =
    _ ||
    function () {
      (_.q = _.q || []).push(arguments);
    };

  let s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";
  let x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
}

function test() {
  console.log(_.sortBy([3, 1, 2]));
}

let tlibrary = {
  init,
  test,
};

module.exports.tlibrary = tlibrary;
