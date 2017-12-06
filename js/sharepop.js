define('sharepop', ['jquery'], function($) {
    var $fixed = $('#fixed');
    var $btn = $('#shareBtn');
    $fixed.on('touchstart', function() {
        $(this).hide();
        return false;
    })
    $btn.on('click', function() {
        $fixed.show();
        return false;
    })
})
