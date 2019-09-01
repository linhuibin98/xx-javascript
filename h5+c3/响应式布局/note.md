# 响应式布局

-> 搭建一个H5页面，我们需要在head中添加一个meta标签
```
<meta name="viewport" content="wdith=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

```

viewport : 视口
  width=device-width 设置视口的宽度等于设备的宽度，如果不设置的话，默认视口宽度等于980px

user-scalable: no, 禁止用户手动缩放
maximum-scale=1.0, minimum-scale=1.0 设置屏幕最大最小缩放比例

->高清屏
苹果手机是2倍高清屏幕的，也就是我们在手机上看到的那张100*100图片，其实苹果手机是按照200*200的尺寸给我们进行渲染的，这样的话，如果我们真实图片本身才100*100，最后呈现出来的就是被拉伸后变模糊的效果
->苹果手机上需要的素材图片都需要比看到的尺寸大一倍才可以

DPI适配思想：
我们在做页面的时候，最好每一张素材图片都准备两套或者三套，比如：
1ogo.png 100*100
1ogo@2x.png 200*200
1ogo@3x.png 300*300


媒体查询：@media
->媒体设备：a11所有设备screen所有屏幕设备PC+移动端print打印机设备..
->媒体条件：指定在什么样的条件下执行对应的样式
@media all and（max-width：319px）{//->宽度小于320px
  .box{
    height：110px；
  }
}

  ->响应式布局的解决方案：
      1）流式布局法
      （宽度百分比）->容器或者盒子的宽度一般都不写固定的值，而是使用百分比，相对于视口区域的百分比
      （其余设计稿一半）->其余的样式：字体、高度、MARGIN、PADDING等等都按照设计稿上标注尺寸的一半来设置
        ->对有些屏幕尺寸下，我们设置的固定值看起来不是特别的好看的话，使用emedia进行微调整

        特殊情况：设计是的设计稿是640px，我们的素材图也是640px的，这样的话在iphone6
        /iphone6 plus展示的时候，图片不够大，对于这种情况我们需要单       独的找设计师要一张更大的图，在腾讯的时候一般我要的大图都是      1280px的
        emedia all and（-webkit-min-device-pixel-ratio：2）and        （min-width：321px）{
          .box{
            background:ur1（'bannnerebig.png'）...
          }
        }


      2) REM响应式布局
          ->我们做的H5页面只在移动端访问（REM不兼容低版本的浏览器）
          第一步：从UI设计师拿到设计稿（PSD格式的设计稿）640*1136

          第二步：在样式中给HTML设定一个fontsize的值，我们一般都设置一个方便后面计算的值，例如：
              10px、100px...这里我们之所以用100px，主要是浏览器最小的字体大小都是12px|
            html{
              font-size：100px；/*1REM=100PX*/
            }
          
          第三步：写页面，写样式
            完全按照设计稿的尺寸来写样式，此时不用管任何的事情，设计稿给你的宽度、高度、字体大小、margin、padding的值是多少，我们就写多少
            ->但是我们在写样式值的时候，需要把得到的像素值除以100x计算出对应的REM的值，我们设定的也都是REM的值
              （值的注意的是：真实项目中外层盒子的宽度我们一般还是不写固定值，沿用流式布局法的思想，我们用百分比的方式布局）
            
          第四步：根据当前屏幕的宽度和设计稿的宽度来计算我们HTL的fontSize的值
            设计稿：640  600*300 fontSize=100 6rem*3rem
            手机：320  300*150 fontSize=50
            手机：375 （375/640）*100->fontSize=58.59375 351.5625*175.78125

            根据当前屏幕宽度动态计算获得单前html  font-size的值
            ```javascript
              (function() {
                var desW = 640;
                    winW = document.documentElement.clientWidth,
                    ratio = winW / desW;
                // 如果当前屏幕的宽度大于设计稿的宽度，则以设计稿宽度为最终宽度，用一个表签（section或div）包裹所有的内容，假设该标签id为main
                if (winW > desW) {
                  var oMain = document.getElementById('main');
                  oMain.style.width = desW + 'px';
                  oMain.style.margin = '0 auto';      //两边留空白，中间自适应 
                  return;
                }
                document.documentElement.fontSize = ratio * 100 + 'px';
              })()

            ```

         -> 我们有时候我们也需要检测一下单前访问浏览器是PC端还是移动端

