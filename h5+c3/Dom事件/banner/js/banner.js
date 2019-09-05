// rem
document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';

// 移动端滑动事件：浏览器默认行为：滑动前进、后退，此时需要禁用浏览器默认事件(页面中如果自己使用了TOUCH MOVE等原生事件，需要把浏览器默认的行为阻止掉)
document.addEventListener('touchmove', function (e) {
  e.preventDefault();
}, {passive: false});

// banner

$(function () {
  let banner = (function () {
    let winW = document.documentElement.clientWidth;   // 浏览器尺寸 
    let $banner = $('.banner');
    let $swiper = $('.swiper');
    let $sliderList = $swiper.children('.slider');
    let imgList = $swiper.find('img');

    let step = 1;    // 当前轮播图所在位置

    let count = $sliderList.length;    // 轮播图数量 + 2 

    let startL = -winW;  // 初始 left 的值

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
        startL: startL,
        startX: point.clientX,
        startY: point.clientY,
        isMove: false,
        dir: '',
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
          startL = $swiper.attr('startL'),
          moveX = endX - startX;

      let isMove = isSwiper(startX, startY, endX, endY);
      let dir = swiperDir(startX, startY, endX, endY);

      if (isMove && /left|right/i.test(dir)) {
        $swiper.attr({
          isMove: true,
          dir: dir,
          moveX: moveX 
        });
      }
      moveX = (Math.abs(moveX) >= winW) ? ((dir === 'left') ? -winW : winW) : moveX;
      let curL = parseFloat(startL) + parseFloat(moveX);
      $swiper[0].style.transitionDuration = '0s';
      $swiper.css('left', curL);
    }

    // touch end
    function dragEnd (e) {
      let isMove = $swiper.attr('isMove');
      let dir = $swiper.attr('dir');
      let moveX = $swiper.attr('moveX');

      if (isMove && /left|right/i.test(dir)) {
        if (Math.abs(moveX) >= winW /2) {
          if (dir === 'left') {
            step++;
          } else {
            step--;
          }
        } 
        $swiper[0].style.transitionDuration = '.3s';
        startL = -step * winW;
        $swiper.css('left', startL);
        lazyImg();  // step变化后...加载图片

        
        let timer = window.setTimeout(function () {
          if (step === 0 || step === count - 1) {
            $swiper[0].style.transitionDuration = '0s';
            step = (step === 0) ? (count - 2) : 1;
            startL = -step * winW;
            lazyImg(); 
            $swiper.css('left', startL);
          }
          window.clearTimeout(timer);
        })

      }

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
        $swiper.css({
          width: count * winW,
          left: startL
        });
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