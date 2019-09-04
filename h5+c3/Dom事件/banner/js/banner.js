// rem
document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';

$(function () {
  let banner = (function () {
    let winW = document.documentElement.clientWidth;
    let $banner = $('.banner');
    let $swiper = $('.swiper');
    let $sliderList = $swiper.children('.slider');
    let imgList = $swiper.find('img');
    let step = 1;

    // public fn  公共方法

    function isSwiper (startX, startY, endX, endY) {  // 判断是否发生滑动
      return Math.abs(startX - endX) > 30 || Math.abs(startY - endY);
    }

    function swiperDir (startX, startY, endX, endY) {  // 判断滑动方向
      return Math.abs(startX - endX) >= Math.abs(startY - endY) ? (startX - endX) > 0 ? 'left' : 'right' : (startY - endY) > 0 ? 'up' : 'down';
    }

    // touch start
    function dragStart (e) {
      let point = e.touches[0];
      // 将 初始值保存在 html自定义属性中
      $swiper.attr({
        startL: parseFloat($swiper.css('left')),
        startX: point.clientX,
        startY: point.clientY,
        isMove: false,
        moveX: 0
      });
    }

    // touch move
    function dragMove (e) {
      let point = e.touches[0],
          endX = point.clientX,
          endY = point.clientY,
          startX = $swiper.attr('startX'),
          startY = $swiper.attr('startY'),
          moveX = Math.abs(endX - startX);

      let isMove = isSwiper(startX, startY, endX, endY);
      let dir = swiperDir(startX, startY, endX, endY);

    }

    // touch end
    function dragEnd (e) {
      
    }

    // -> lazyImg  图片延迟加载、、、让当前活动块及其相连的活动块进行加载...
    function lazyImg() {
      let $cur = $sliderList.eq(step);
      let $tar = $cur.add($cur.prev()).add($cur.next());

      $tar.each(function (index, item) {
        // this : item
        let $img = $(item).children('img');

        if ($img.attr('isLoad')) return ;

        let oImg = new Image();
        oImg.src = $img.attr('data-src');
        oImg.onload = function () {
          $img
            .attr({
              src: this.src,
              isLoad: true
            })
            .css('display', 'block');
          oImg = null;
        }
      })
    }


    return {
      init: function () {
        // init css style
        $swiper.css('width', winW * imgList.length);
        $sliderList.css('width', winW);

        //lazy img
        lazyImg();

        // swiper left and swiper right
        $banner
          .on('touchstart', dragStart)
          .on('touchmove', dragMove)
          .on('touchend', dragEnd);
      }
    }
  })()

  banner.init();
})