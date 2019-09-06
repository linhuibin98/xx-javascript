# webstorm配置typescript自动编译 + 语法检查



### 1、 安装node、typescript、tslint

安装完成后，打开CMD，输入

```javascript
node -v
npm -v
```

上面两个命令如果均输出的版本号，证明安装成功，否则证明没有安装成功，接下来的步骤也就不能继续了

- 全局安装typescript

  ```
  npm install typescript -g
  
  
  ```

- 全局安装tslint

  ```
  
  ```

  ```undefined
  npm install tslint -g
  ```

### 2、写tslint配置文件

在...\nodejs\node_global\node_modules\tslint  文件加下新建tslint.json文件，内容如下

```json

```

```json
{
  "rules": {
    // TS特性
    "member-access": true, // 设置成员对象的访问权限（public,private,protect)
    "member-ordering": [// 设置修饰符顺序
      true,
      {
        "order": [
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    "no-empty-interface":true,// 不允许空接口
    "no-parameter-reassignment":true,// 不允许修改方法输入参数
    "prefer-for-of":true,// 如果for循环中没有使用索引，建议是使用for-of

    // 功能特性
    "await-promise":true,// 不允许没有Promise的情况下使用await
    "curly":true,// if/for/do/while强制使用大括号
    "forin":true,// 使用for in语句时，强制进行hasOwnProperty检查
    "no-arg":true,// 不允许使用arguments.callee
    // "no-bitwise":true, // 不允许使用特殊运算符 &, &=, |, |=, ^, ^=, <<, <<=, >>, >>=, >>>, >>>=, ~
    "no-conditional-assignment":true,// do while/for/if/while 语句中将会对例如if(a=b)进行检查
    // "no-console":true,// 不允许使用console对象
    "no-debugger":true,// 不允许使用debugger
    "no-duplicate-super":true,// 不允许super() 两次使用在构造函数中
    "no-empty":true,// 函数体不允许空
    "no-eval":false,// 不允许使用eval
    "no-for-in-array":true,// 不允许对Array使用for-in
    "no-invalid-template-strings":true,// 只允许在模板字符串中使用${
    "no-invalid-this":false,// 不允许在class之外使用this
    "no-null-keyword":true,// 不允许使用null,使用undefined代替null，指代空指针对象
    "no-sparse-arrays":true,// 不允许array中有空元素
    "no-string-throw":true,// 不允许throw一个字符串
    "no-switch-case-fall-through":true,// 不允许case段落中在没有使用breack的情况下，在新启一段case逻辑
    "no-unsafe-finally":true,// 不允许在finally语句中使用return/continue/break/throw
    "no-unused-expression":true,// 不允许使用未使用的表达式
    "no-use-before-declare":true,// 在使用前必须声明
    "no-var-keyword":true,// 不允许使用var
    "radix":true,// parseInt时，必须输入radix精度参数
    "restrict-plus-operands":true,// 不允许自动类型转换，如果已设置不允许使用关键字var该设置无效
    "triple-equals":true,// 必须使用恒等号，进行等于比较
    "use-isnan":true,// 只允许使用isNaN方法检查数字是否有效

    // 维护性功能
    "indent":[true, "spaces", 4],// 每行开始以4个空格符开始
    "linebreak-style":["off","windows"],// 换行符格式 CR/LF可以通用使用在windows和osx
    "max-classes-per-file":[true,1],// 每个文件中可定义类的个数
    "max-file-line-count":[true,1000],// 定义每个文件代码行数
    "max-line-length":[false,120],// 定义每行代码数
    "no-default-export":true,// 禁止使用export default关键字，因为当export对象名称发生变化时，需要修改import中的对象名。https://github.com/palantir/tslint/issues/1182#issue-151780453
    "no-duplicate-imports":true,// 禁止在一个文件内，多次引用同一module

    // 格式
    "align":[true,"parameters","arguments","statements","members","elements"],// 定义对齐风格
    "array-type":[true,"array"],// 建议使用T[]方式声明一个数组对象
    "class-name":true,// 类名以大驼峰格式命名
    "comment-format":[true, "check-space"],// 定义注释格式
    "encoding":true,// 定义编码格式默认utf-8
    "import-spacing":true,// import关键字后加空格
    "interface-name":[true,"always-prefix"],// interface必须以I开头
    "jsdoc-format":true,// 注释基于jsdoc风格
    "new-parens":true,// 调用构造函数时需要用括号
    "no-consecutive-blank-lines":[true,2],// 不允许有空行
    "no-trailing-whitespace": [// 不允许空格结尾
      true,
      "ignore-comments",
      "ignore-jsdoc"
    ],
    "no-unnecessary-initializer":true,// 不允许没有必要的初始化
    "variable-name":[false,"check-format",// 定义变量命名规则
      "allow-leading-underscore",
      "allow-trailing-underscore",
      "ban-keywords"]
  }
}
```

可根据官网说明自行配置，<https://palantir.github.io/tslint/> 。

### 3、打开webstorm -> file -> settings -> Tools -> file wathers (如果执行上面过程的时候webstorm是打开的，那么这里要关闭重新打开一次)
并在右侧否选typescript

![1](note_imgs\1.png)

标红的地方需要引入安装好的tsc.cmd文件，如果没有安装ts请浏览, 自己node全局安装的位置

### 4 、Tools -> File Watchers 配置(ts文件自动编译为js文件)

![2](note_imgs\2.png)

点击+号

![3](note_imgs\3.png)

--target "ES5"  目标输出ES5 语法 ，可改为--target "ES6"

```
TypeScript
--target "ES5"
$FileNameWithoutExtension$.js
$FileDir$

```

![4](note_imgs\4.png)

保存即可。

### 5. 在项目根目录下新建一个tsconfig.json文件,内容如下

 - 目标输出ES5 语法

   ```json
   
   {
     "compilerOptions": {
         // 采用的模块系统
       "module": "commonjs",
         // 编译输出目标 ES 版本
       "target": "es5",
         // 删除所有注释，除了以 /!*开头的版权信息
       "removeComments": true
     },
     "exclude": [
       "node_modules"
     ]
   }
   
   ```

   

- 目标输出ES6语法

  ```json
  
  {
    "compilerOptions": {
      // 采用的模块系统
    "module": "es6",
      // 编译输出目标 ES 版本
    "target": "es6",
      // 删除所有注释，除了以 /!*开头的版权信息
    "removeComments": true
  }
  
  
  ```

  可根据官网说明自行配置<https://www.tslang.cn/docs/handbook/tsconfig-json.html>

### 6、手动编译
- 安装typescript后，命令行支持tsc命令
```javascript
tsc 需要编译的文件路径

比如
tsc 1.ts


```

原文链接：https://blog.csdn.net/qq_36255237/article/details/98055686