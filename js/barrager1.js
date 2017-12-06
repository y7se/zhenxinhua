define('barrager', function() {
    var Barrager = function(id) {
        this.id = document.getElementById(id);
        this.elements = [];
        this.loop();
    }

    Barrager.random = function(iMin, iMax) {
        return Math.floor(Math.random() * (iMax - iMin)) + iMin;
    }

    Barrager.prototype.add = function(text, async) {
        var div = document.createElement('div');
        div.className = 'col';
        div.innerHTML = text;
        div.style.left = this.id.offsetWidth * 1.2 + 'px';
        div.speed = Barrager.random(1, 2);
        div.timeout = Barrager.random(500, 2000);
        this.id.appendChild(div);
        div.style.top = Barrager.random(div.offsetHeight, this.id.offsetHeight - div.offsetHeight) + 'px';
        this.addToElements(div, async);
    }

    Barrager.prototype.addToElements = function(div, async) {
        var that = this;
        var timer = setTimeout(function() {
            that.elements.push(div);
            timer = null;
        }, async ? 0 : div.timeout);
    }

    Barrager.prototype.loop = function() {
        var that = this;
        setInterval(function() {
            for (var i = 0; i < that.elements.length; i++) {
                var div = that.elements[i];
                div.style.left = (div.offsetLeft - div.speed) + 'px';
                if (div.offsetLeft < 0 && Math.abs(div.offsetLeft) > div.offsetWidth + 100) {
                    that.elements.splice(i, 1);
                    that.id.removeChild(div);
                    i--;
                    that.add(div.innerHTML);
                }
            }
        }, 1000 / 40)
    }
    return Barrager;
})
