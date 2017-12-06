define('barrager', function() {
  var Barrager = function(id) {
    this.id = document.getElementById(id);
    this.texts = [];
    this.elements = [];
    this.loop();
    this.MAX = 5;
    this.canNext = true;
    this.lastTop = 0;
  }

  Barrager.random = function(iMin, iMax) {
    return Math.floor(Math.random() * (iMax - iMin)) + iMin;
  }

  Barrager.prototype.renderTop = function(barr) {
    var top = this.id.offsetHeight / this.MAX;
    var arr = [];
    for (var i = 0; i < this.MAX; i++) {
      arr.push(i * top);
    }
    var n = Barrager.random(0, arr.length);
    barr.randomTop = arr[n];
    return arr[n];
  }

  Barrager.prototype.render = function(text) {
    var div = document.createElement('div');
    div.next = true;
    div.className = 'col';
    div.innerHTML = text;
    div.speed = Barrager.random(1, 2);
    div.timeout = Barrager.random(500, 2000);
    div.style.left = this.id.offsetWidth * 1.2 + 'px';
    this.id.appendChild(div);
    div.style.top = this.renderTop(div) + 'px';
    return div;
  }

  Barrager.prototype.add = function(text) {
    this.texts.push(text);
  }

  Barrager.prototype.next = function() {
    if (this.elements.length < this.MAX) {
      if (this.texts.length > 0) {
        this.elements.push(this.render(this.texts.shift()));
      }
    }
  }

  Barrager.prototype.loop = function() {
    var that = this;
    setInterval(function() {
      this.next();
      for (var i = 0; i < this.elements.length; i++) {
        var barr = this.elements[i];
        var barrOffsetLeft = barr.offsetLeft;
        barr.style.left = (barrOffsetLeft - barr.speed) + 'px';
        if (barrOffsetLeft < 0 && Math.abs(barrOffsetLeft) > barr.offsetWidth + 100) {
          this.elements.splice(i, 1);
          this.id.removeChild(barr);
          this.add(barr.innerText);
          i--;
        }
      }
    }.bind(this), 1000 / 40)
  }
  return Barrager;
})