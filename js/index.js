require(['jquery', 'barrager', 'deng', 'sharepop'], function($, Barrager) {

  var barrager = new Barrager('screen');
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      barrager.add('hello world' + i);
    }, i * 3000);
  }

  var $enters = $('#enters');
  var $send = $('#send');

  function enterWords(val) {
    $enters.val(val);
  }

  function sendWords(val) {
    if ($.trim($enters.val())) {
      barrager.add($enters.val(), true);
      $enters.val('');
    }
  }
  $('#words').on('click', 'span', function() {
    enterWords($(this).text());
  })
  $('#send').on('click', sendWords);



  /*************************************************
  手机验证
  *************************************************/


  (function() {
    var $confirmBtn = $('#confirmBtn'),
      $code = $('#code'),
      $codeBtn = $('#codeBtn'),
      $phone = $('#phone'),
      $err = $('#err');

    function showError(str) {
      $err.html(str);
    }

    function checkPhone() {
      var $val = $.trim($phone.val());
      if (!/^1[3|4|5|7|8|9]\d{9}$/.test($val)) {
        showError('请输入正确的手机号');
        return false;
      }
      return true;
    }

    function checkCode() {
      var $val = $.trim($phone.val());
      if ($val.length !== 4) {
        showError('请输入正确验证码');
        return false;
      }
      return true;
    }

    $codeBtn.on('click', function() {
      if (!checkPhone()) {
        return false;
      }

      // 发送短信ajax
    })


    $confirmBtn.on('click', function() {
      if (!checkPhone() || !checkCode()) {
        return false;
      }
      // 发送提交ajax
    })
  })();



  /** [关闭眯着活动说明] */
  $(document).on('click', '.closeBtn', function() {
    $(this).parents('.zfixed').hide();
    return false;
  })


  /** 说明弹窗 */
  $('#button-comm').on('click', function() {
    $('#button-comm-con').show();
  })


})