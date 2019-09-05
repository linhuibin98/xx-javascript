# 本地存储
- 在客户端运行的JS是不能操作用户电脑磁盘中的文件的（保护客户端运行的安全）
- Js中的本地存储：使用JS向浏览器的某一个位置中存储一些内容，浏览器即使关闭了，存储的信息也不会销毁，当在重新打开浏览器的时候我们依然可以获取到上一次存储的信剧
- 本地存储的方案：
    - 传统：
        - cookie：把信息存储到客户端的浏览器中（但是项目服务器端也是可以获取COOKIE的）
        - session：把信息存储到服务器上的（服务器存储）
    - HTML5：webStorage
        - localStorage：永久存储到客户端的本地
            - localStorage.setItem()     存储信息  
            - localStorage.getItem()     获取指定信息   
            - localStorage.removeItem()  移除指定信息   
            - localStorage.clear()       清空所有localStorage       
            - localStorage.length        localStorage的长度
            - localStorage.key(index)    获取指定索引的key值
        - sessionStorage：信息的会话存储(临时存储)，会话窗口存在信息也存在，会话窗口关闭信息就消关了
        ```javascript
          // webStorage  
             //setItem（[key]，Ivaluel）：向客户端的本地存储一条记录；存储的[value]需要是字符串格式的，如果编写的不是字符，浏览器也会默认转化为字符串然后在进行存储；同源下存储的
             //[key]是不会重复的，如架之前有的话，是把存储的信息值重修的进行修改；
           //getItem（[key]）：获取之前存储的值
          // removeItem(name);  移除指定数据
          // clear(); 移除当前域下的所有数据
          localStorage.setItem("age", 18);
          localStorage.getItem("age");  // 18;
      
          localStorage.removeItem('age'); //移除指定
          localStorage.clear();  // 移除所有
          localStorage.length;  // 1
          localStorage.key(0); // 'age'
      
          // sessionStorage
          
        ```
        - localStorage和sessionStorage的区别 
            - localStorage属于永久存储到本地，不管是刷新页面还是关掉页面或者是关掉浏览器，存储的内容都不会消失，只有我们自己天动的去删除才会消关（不管是杀毒软件还是浏览器自带的清除历史记录功能都不能把localstorage存储的内容移除掉）
            - ，只要当前的贝面不关闭，信息就可以存储下来，但是页面一但关闭，存储的信息就会自动清除(F5刷新页面只是把当前的DoM结构等进行重新的渲染，会话并没有关闭)sessionStorage属于临时的会话存储
            
        - cookie
        
        - cookie和localStorage的区别
            - cookie存储内容的大小是由限制的，一般同源下只能存储4KB的内容；localStorage存储的内容也有大小限制，一般同源下只能存储5MB；
            - cookie存储的内容是有过期时间的，而localStorage是永久存储到本地，使用杀毒软件或者浏监器自带的清除垃圾的功能都可能会把存储的cookie给删除掉
            - 用户可能出于安全的角度禁用cookie（无痕浏览器），但是不能禁止localStorage
        
    - 真实项目中的本地存储都使用哪些东西？
        - cookie
            - 记住用户名密码或者是自动登录；用户的部分信息，当用户登录成功后我们会把用户的一些信息记录到本地cookie中，这样在项目中的任何页面都可以知道当前登录的用户是哪一个了；购物车
              ..（存储少量信息或者是需要浏览器兼容的都需要使用cookie来进行存储）
        - localStorage
            - 在PC端我们可以用其存储某一个Js或者css中的源代码；还可以把一些不需要经常更新的数帮存储到本地，存储的时候可以设置一个存储的时间，以后重新刷新页面，看一下时间有没有超过预定的时间，如果已经超过了，我们从新获取最新数据，没超过我们使用本地数据；
        - 本地存储都是明文存储
            - 对于重要的信息我们一般不要存储到本地，如果非要存储的话我们需要把存储的信息进行加密
            -  可逆转加密：加密完成还可以解密回来
            -  不可逆转加密：MD5