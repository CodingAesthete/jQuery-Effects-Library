(function () {
  "use strict";

  $('#hidebox').click(function () {
    $('#box').hide(500, 'swing')
  });

  $('#showbox').click(function () {
    $('#box').show('normal');
  });

  $('#togglebox').click(function () {
    $('#box').toggle(500, function () {
      alert('Done');
    });
  });

  $('#slideupbox').click(function () {
    $('#box').slideUp('slow')
  });

  $('#slidedownbox').click(function () {
    $('#box').slideDown(500);
  });

  $('#slidetogglebox').click(function () {
    $('#box').slideToggle(500, 'easeInBounce');
  });

  $('#fadeoutbox').click(function () {
    $('#box').fadeOut(500, 'swing', alert('done'));
  });

  $('#fadeinbox').click(function () {
    $('#box').fadeIn('slow')
  });

  $('#fadeto20box').click(function () {
    $('#box').fadeTo(1000, 0.2);
  });

  $('#fadeto100box').click(function () {
    $('#box').fadeTo(700, 1, 'easeInBounce');
  });

  $('#growbox').click(function () {
    $('#box').animate({
      width: '1168px'
    });
  });

  $('#growtext').click(function () {
    $('#box').animate({
      fontSize: '40px'
    });
  });

  $('#movebox').click(function () {
    $('#box').animate({
      left: '+=450px'
    }, 2000);
  });

  $('#moveback').click(function () {
    $('#box').animate({
      left: '-=450px'
    }, 2000);
  });

  $('#doall').click(function () {
    $('#box').animate({
      fontSize: '30px',
      left: '+400px',
      width: '400px'
    }, 1500);
  });

  $('#sequence').click(function () {
    $('#box').animate({ width: '468px' }, 1500, function () {
      $('#box').animate({ fontSize: '40px' }, 1500, function () {
        $('#box').animate({ left: '+=70px' }, 2000, function () {
          $('#box').animate({ left: '-=400px' }, 2000), function () {
            $('#box').animate({
              fontSize: '30px',
              left: '-400px',
              width: '400px'
            }, 1500);
          }
        });
      });
    });
  });

})();