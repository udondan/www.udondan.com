jQuery(document).ready(function ($) {

  /*======= Skillset *=======*/

  $('.level-bar-inner').css('width', '0')

  $(window).on('load', function () {
    $('.level-bar-inner').each(function () {
      var itemWidth = $(this).data('level')

      $(this).animate({
        width: itemWidth
      }, 800)
    })
  })

  if (window.location.search.includes('with=mobile')) {
    $('ul.contact-list').append('<li class="mobie"><span class="fa-li"><i class="fas fa-phone"></i></span><a href="tel:+&#052;&#057;&#032;(&#048;)&#049;&#055;&#054;&#032;&#050;&#053;&#050;&#048;&#053;&#054;&#057;&#048;">+&#052;&#057;&#032;(&#048;)&#049;&#055;&#054;&#032;&#050;&#053;&#050;&#048;&#053;&#054;&#057;&#048;</a></li>')
  }

  if (window.location.search.includes('with=mail')) {
    $('ul.contact-list').append('<li class="mail"><span class="fa-li"><i class="fas fa-envelope"></i></span><a href="mailto:&#100;&#101;&#101;&#109;&#101;&#115;&#055;&#057;&#064;&#103;&#111;&#111;&#103;&#108;&#101;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#100;&#101;&#101;&#109;&#101;&#115;&#055;&#057;&#064;&#103;&#111;&#111;&#103;&#108;&#101;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a></li>')
  }

  $('div.main-wrapper div > ul').addClass('fa-ul')
  $('div.main-wrapper div > ul>li').prepend('<span class="fa-li"><i class="fas fa-star"></i></span>')
})
