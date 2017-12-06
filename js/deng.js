define('deng', ['jquery'], function($) {
  var $deng = $('#deng');
  var texts = $deng.html().split('');
  setInterval(() => {
    var t = texts.shift();
    texts.push(t);
    $deng.html(texts.join(''));
  }, 400)
})