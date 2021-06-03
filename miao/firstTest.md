# 开卷测试，可以查书本、网络及上课视频

1. 列出至少 7 个常用 Linux 命令及其基本使用方法
- ls 列出当前目录下的所有文件
- cd 切换到指定目录
- touch 新建文件
- mkdir dir name 新建文件夹/更新文件的最后修改时间
- rm 删除文件
- cp src dest 复制文件
- mv 将文件或目录移入其他位置
- cat 按顺序输出文件的内容/拼接文件
- pwd 输出当前工作目录
- echo 输出某句话
- split 拆分文件
2.  什么是 html 实体？常见 html 实体有哪些？
- HTML 实体是一段以连字号（&）开头、以分号（;）结尾的文本（字符串）。实体常常用于显示保留字符（这些字符会被解析为 HTML 代码）和不可见的字符（如“不换行空格”）。你也可以用实体来代替其他难以用标准键盘键入的字符。
- 空格	`&nbsp;`
- `<`	小于号	`&lt;`
- `>`	大于号	`&gt;`
3.  计算机为什么使用二进制？
- 二进制便于设计电路，有助于降低电路的复杂程度
- 二进制具有较好的抗干扰性
- 二进制已经足够使用，更多进制相对于二进制没有明显的提升
- 在计算机出现之前，对二进制已有理论研究（布尔代数）
4.  什么是 Unicode？如何表示，有什么作用？最通用的 Unicode 实现是？
- Unicode是一个通用字符集，编码世界上的绝大多数语言的文字和一些其他字符。一般格式为 U+十六进制数。最大的作用是让人们能够在同一个文件中表示多国语言而不乱码
- 最通用的Unicode实现是UTF-8，使用变长编码，是保存Unicode的具体方式
5.  什么是 GUI，什么是 CLI，什么是接口/界面？现实生活中有哪些例子？
- GUI全称为Graphic User Interface，即图形用户界面
- CLI全称为Command Line Interface，即命令行界面
- 接口/界面即系统或工具提供的封装过的、便于操作的一组命令或界面。如ATM是公众和银行系统的接口；操作系统是操作者和计算机硬件的接口等。
6.  在什么情况下 html 标签可以不需要闭合？
- 在不影响HTML解析器解析、语义清晰的情况下，可以不闭合
- `input`、`img`等规范中规定的非闭合标签可以不闭合
7.  在一些情况下某些非自闭合标签的结束标签可以省略的原因是什么？
- 省略后不影响解析和语义
8.  什么是费茨定律？它有哪些应用？
- 任意一点移动到目标中心位置所需时间与该点到目标的距离和大小有关，距离越大时间越长，目标越大时间越短。
- 应用
  - 按钮等可点击对象需要合理的大小尺寸。
  - 屏幕的边和角很适合放置像菜单栏和按钮这样的元素，
  - 出现在用户正在操作的对象旁边的控制菜单（右键菜单）比下拉菜单或工具栏可以被打开得更快，因为不需要移动到屏幕的其他位置。
  - 要让不常用或危险的UI元素难以被点击。
9.  WHY English is IMPORTANT for programmers?
- Because English is the most popular language of the world. People use it to communicate with each other.
- There are lots of information coded in English, we can't get them only if we can read English.
10.  将二进制 `10010` 数转换为十进制数
- 1*2^4 + 1*2 = 18
11. 将十六进制数 `ABCDEF` 转换为十进制数
- 10*16^5 + 11*16^4 + 12*16^3 + 13*16^2 + 14*16^1 + 15*16^0 = 11259375
12. 将十进制数 `435` 分别转换成二进制数和十六进制数
- 二进制 110110011
- 十六进制 1b3
13. 列出 HTML 中常见的全局属性
- id class style title contenteditable    
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes
14. 什么是操作系统的路径（Path）？它的作用及应用场景是？
- 路径是一个文件夹列表，列出了系统中若干个文件夹的完整路径
- Path记录了文件的路径，在路径中的文件可以在命令行中直接使用文件名调用
- 在命令行中，当前工作目录也是路径列表项目之一
15. 什么是文本文件？什么是二进制文件？它们最明显的区别是？
- 文本文件指内容由文本编码方式编码，并可以用文本编辑软件打开和编辑的文件，其中记录的是字符。常见的有：程序源代码、配置文件、.cfg文件
- 二进制文件中为二进制位
16. 为什么说 html 与数学公式有诸多相似之处？
- 和数学公式类似，HTML中也有类似的嵌套规则，并且均为树状结构
17. 几种常见图片格式有什么区别和特点？
- .bmp 记录每个像素的颜色 无压缩 文件体积大
- .png 位图 采用无损压缩算法 可以表现透明 文件体积较小
- .jpg 有损压缩 质量较高的前提下文件体积较小
- .gif 动图 有损压缩 质量较差
18. `data-*` 属性一般是用来干嘛？
- data-*是html的自定义属性，可以将自定义/存储的数据拿出来在js做进一步使用，而且不会覆盖html的原有属性。
19. 有没有办法扩大一个 checkbox 的可点击区域？
- 使用`label`标签 通过嵌套或者`for=id`来扩大可点击区域
20. 什么是 MIME Type？
- Multipurpose Internet Mail Extensions 或 MIME 类型。浏览器通过MIME类型区分不同的元素类型
- 一般是type/subtype形式 如jpg为 image/jpg
21. 哪些标签可以使用 target 属性？哪些标签可以使用 href 属性？
- target：
  - a
  - form
  - base
- href
  - a
  - base 
  - link    
22. 什么是 BOM 头？
- BOM(Byte Order Mark 字节序标记）是用来判断文本文件是哪一种Unicode编码的标记，其本身是一个Unicode字符（"\uFEFF"），位于文本文件头部。UTF16中会用到
23. group（分组）类型的标签有哪些？
- fieldset
- hgroup
- colgroup
- optgroup
- p	表示段落
- div	一个没有任何语义的通用元素，和span是对应元素
- blockquote	表示引自他处的大段内容
- pre	表示其格式应被保留的内容
- hr	表示段落级别的主题转换，即水平线
- ul,ol	表示无序列表，有序列表
- li	用于ul，ol元素中的列表项
- dl,dt,dd	表示包含一系列术语和定义说明的列表。dt在dl内部表示术语，一般充当标题。dd在dl内部表示定义，一般是内容。
- figure	表示图片
- figcaption	表示figure元素的标题
24. 什么是 SEO？
- Search Engine Optimization 搜索引擎优化 指通过对HTML和CSS进行调整以使网页更容易被搜索引擎索引和在索引中排行更靠前
25. 分别列出每种常见浏览器的内核名称（自己查）。
- Webkit类：Blink（Google Chrome）、Gecko（Mozilla Firefox）、Webkit（Apple Safari、Microsof Edge)
- 其他：Trident（Microsoft Internet Explorer）
26. 列表类标签有哪些？分别如何使用？需要注意些什么？
- `ul` `ol` 无序、有序列表 其中只能嵌套`li`
- `dl` 描述列表 其中只能嵌套`dt`、`dd`
27. 为什么不同类型的标签的 fallback 内容要以不同的形式提供？如iframe的fallback需要写在其内部，而script和frame标签的fallback需要写在其外部。
- 因为有些标签在正常使用时，内部需要放东西；另一些标签使用时内部是空的，所以放里面
28. 分别写出在 head 中设定页面编码，设定 icon，引入样式表的标签
- 设定编码 `<meta charset="UTF-8">`
- 设定icon `<link rel="icon" href="favicon.ico">`
- 引入样式表 `<link rel="stylesheet" href="*.css">`
29. 什么叫做可访问性，html 中为此做了什么工作？
- 可访问性是指网页对于残障人士的可用程度 
  - HTML中有许多标签和属性可以方便视障人群使用读屏软件 比如img标签的alt属性 读屏软件在遇到图片时会读出alt属性的内容
  - role与aria属性用来标记标签此时的状态和角色以便读屏软件正确识别
  - td标签的headers属性与对应表头单元格th的id相关联
30. 写出以下几个符号的 ASCII 码：`a，A，0，CR，LF，空格，NBSP`。
- a 97
- A 65
- 0 48
- CR 13
- LF 10
- 空格 32
- NBSP 160
31. 中英互翻
    * geek 极客
    * nerd 技术宅
    * hacker 黑客
    * edge 边缘
    * bleeding/cutting edge 前沿/尖端/可能存在风险的技术
    * HTML 实体 HTML entity
    * coordinate 坐标
    * polygon 多边形
    * bit 比特
    * byte 字节
    * alternative 可选的
    * 属性 attribute
    * obsolete 过时的
    * 二进制 binary
    * 十进制 decimal
    * 十六进制 hexadecimal
    * octal 八进制
    * deprecate 废弃的
    * loop 循环
    * 行 row
    * 列 column
    * horizontal 水平的
    * 语义化 semantic
    * 可访问性 accessibility


32. 用文字描述如下选择器将选择哪些（个）元素，并给出其优先级
  ```css
  div, h1 {} /*div和h1标签 (0,0,1) (0,0,1)*/
  div[class] [id="abc"] {} /*拥有class属性的div里面的id为abc的div (0,2,1)*/
  div:hover ul li > div {} /*在hover状态下 div中的ul中的li的子代div (0,1,4)*/
  body :active {} /*body中处于active状态的元素 (0,0,1)*/
  div:hover::after {} /*处于hover状态的div的after伪元素 (0,1,1)*/
  div:hover ::after {} /*处于hover状态的div中的after伪元素 (0,1,1)*/
  ::selection {} /*被用户高亮的元素 如被选中*/
  :target {} /*选中id的值为地址栏#后面部分的元素（0,1,0)*/
  input + ul + p ~ span {} /*input的第一个ul兄弟的第一个p兄弟的所有span兄弟 004*/
  * * * {} /*所有在嵌套层级中属于第三级的元素 000*/
  div * span {} /*div中处于第三嵌套层级的span 002*/
  div[title] {} /*拥有title属性的div 011*/
  fieldset legend + input {} /*fieldset中的legend的第一个input兄弟 003*/
  #some #thing .not:hover .abc:hover {} /*id为some的元素中的 id为thing的元素中的class为not和类为abc的hover状态的元素 240*/
  ```
33.  `em,px,rem,vw,vh` 分别代表多长？
- em 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width
- px 一个像素的长度
- rem 根元素的字体大小
- vw 浏览器viewport的宽度的1%
- vh 浏览器viewport的高度1%
34. 显示器的物理分辨率为 `1920x1080`，操作系统设置的分辨率为 `1280x720`，网页的放大倍数为 `110%`，请计算一个 CSS 像素对应多少个显示器物理像素（面积与长度）？
- 面积 一个CSS像素 = 2.7225个物理像素
- 长度 一个CSS像素 = 1.65个物理像素
35. 写出如下代码显示在浏览器后**每个单词**的字号
    ```html
    <style>
      html {
        font-size: 20px;
      }
      section {
        font-size: 10rem;
      }
      p {
        font-size: 24px;
      }
      span {
        font-size: 150%;
      }
      .sucks {
        font-size: inherit;
      }
    </style>
    <body>
      <section>
        <h2>Brown</h2>
        <p>quick</p>
        <p>jumps <span>over <span>lazy</span> dog</span></p>
        <p class="sucks">sucks</p>
      </section>
    </body>
    ```
- Brown 300px
- quick 24px
- jumps 24px
- over 36px
- lazy 54px
- dog 36px
- sucks 200px

36. 如何给css添加注释
- 手动添加 /* */
- 使用快捷键ctrl+/
37. 指出如下css代码中的错误
    ```css
    p,h1,{/*多了一个逗号*/

        background-color: rgba:(abc) /*rgba中应为','分隔的0-255的数字；没有冒号*/
        font-varient; abc; /*拼写错误 应为font-variant；应为冒号；应为small-caps*/
        colr: #ff048; /*拼写错误 应为color；位数错误*/
        font: "serif" 25px; /*font-family必须最后指定；serif没有引号*/
    }
    ```

38. 写出如下结构中div元素的所有后代/祖先/子/父/兄弟元素
    ```html
    <section>
      <h1><span></span></h1>
      <main>
        <h2></h2>
        <div>
          <ul>
            <li><a href=""><img src="" alt=""></a></li>
          </ul>
        </div>
        <aside>
          <h3></h3>
        </aside>
      </main>
    </section>
    ```
- 后代 `ul` `li` `a` `img` 
- 祖先 `main` `section`
- 子 `ul`
- 父 `main` 
- 兄弟 `h2` `aside`

39. 常见的替换元素有哪些？它们与非替换元素最大的区别什么？
- 典型的可替换元素有：
  - `<iframe>`
  - `<video>`
  - `<embed>`
  - `<img>`
- 有些元素仅在特定情况下被作为可替换元素处理，例如：
  - `<option>`
  - `<audio>`
  - `<canvas>`
  - `<object>`
  - `<applet>`
- 可替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。html 的大多数元素是不可替换元素，即其内容直接表现给用户端（例如浏览器）。
- 替换元素没有后代，有内置宽高
40. 让 CSS 在 HTML 页面上生效有哪些方法，分别写出来。
- 行内样式表 通过形如`<div style="color=red">`的方式使用CSS
- 内嵌样式表 将CSS语句写在`<head>`的`<style>`中
- 独立的CSS文件 通过`<head>`的`<link rel="stylesheet" href="*.css">`
41. 如何让页面打印时应用不同的效果？
    - `<link rel="stylesheet" href="*.css" media="print">`
42. 假设 index.html 的路径为 http://user.coding.me/task/index.html ，如下引用的a.css和b.css路径分别为？
```html
<!-- index.html的内容 -->
<l>
    @import "/foo/bar/.././a.css";
</l>
```
```css
/* a.css的内容 */
@import "./foo/b.css";
```
- a.css http://user.coding.me/foo/a.css
- b.css http://user.coding.me/foo/foo/b.css

43.    写出满足如下条件的选择器
* 第  8个子结点之后，倒数第 5 个子结点之前的li结点
  * li:nth-child(n+8):nth-last-child(n+5)
* 【类名】以“damiao-”开头的元素
  * [class^="damiao-"], [class*=" damiao-"]
* rel 属性中有 nofollow 这个单词的标签
  * [rel~="nofollow"]
44. 链接伪类的几种状态书写的顺序是什么？为什么？
- 顺序为:link :visited :focus :hover :active
- 否则后面的选择器会覆盖前面的样式 达不到想要的效果 
45. 如下 font 属性的值哪一个是书写正确的？
* font: serif 24px;
* font: serif bold 24px/1.2;
* font: bold 24px/1.2 serif;
  * 只有最后一个正确
46. 详述你对盒模型的理解。
- 每个元素都会生成一个或多个矩形盒子
- 盒有内容区、内边框，外边框，外边距
- 盒子的大小可以通过width，height设置
- 外边距可以为负，其他不可以
- 可以通过box-sizing设置width/height属性效果
47. 元素的高度写百分比在什么情况下【无效】，为什么？在什么情况下【有效】，有效时是以哪个元素的高度为基准值？
- 在元素的包含块高度为auto且为常规六元素时，无效；反之有效
- 有效时以包含块的内容box高度为基准值
48.   字体的 italic 与 oblique 的区别是？
- italic是字体设计人员设计好的斜体 oblique是浏览器对字体进行变换生成的斜体
50. 什么是模拟信号？什么是数字信号？它们的区别是？
- 模拟信号是连续的 数字信号是离散的
- 模拟信号抗干扰能力较强，常用于远距离传输；数字信号抗干扰能力较弱，常用于近距离传输
51. 将如下 markdown 转换成 html
    ```md
    ## 四季变换

    一年有四季，
    四季有其对应的节气

    * 春
        - 立春
        - 惊蛰
        - 元宵
    * 夏
        - **小米**发布会
        - 华为发布会
    * 秋
        - 开学了
        - 军训了
    * 冬
        - 下雪了
            + 打雪仗了
        - 来暖气了
        - 开空调了

    > 知识就是力量，法国就是培根。

    [春](http://baike.baidu.com/item/%E6%98%A5/6983693)
    ![春](https://www.google.com.hk/images/nav_logo242_hr.png)
    ```

    ```html
    <h2>四季变换</h2>
    <p>一年有四季，
    四季有其对应的节气<p>
    <ul>春
        <li>立春</li>
        <li>惊蛰</li>
        <li>元宵</li>
    </ul>
    <ul>夏
        <li><strong>小米</strong>发布会</li>
        <li>华为发布会</li>
    </ul>
    <ul>秋
        <li>开学了</li>
        <li>军训了</li>
    </ul>
    <ul>冬
        <li>下雪了
          <ul>
            <li>打雪仗了</li>
          </ul>
        </li>
        <li>来暖气了</li>
        <li>开空调了</li>
    </ul>
    <blockquote>知识就是力量，法国就是培根。</blockquote>
    <a href="http://baike.baidu.com/item/%E6%98%A5/6983693">春</a>
    <img src="https://www.google.com.hk/images/nav_logo242_hr.png" alt="春">
    ```

52. 如下表单提交后将跳转到什么地址
    ```html
    <form action="https://www.baidu.com/s" target="_blank">
      <input type="text" value="bb" name="a">
      <input type="checkbox" name="b" id="b" value="123" checked>
      <input type="checkbox" name="b" id="b" value="456" checked>
      <input type="checkbox" name="b" id="b" value="789">
      <input type="radio" name="c" id="c" value="a2">
      <input type="radio" name="c" id="c" value="a5" checked>
      <input type="radio" name="c" id="c" value="a4">
      <select name="select">
        <option value="01">0001</option>
        <option value="02">0002</option>
        <option value="03" selected>0003</option>
        <option value="04">0004</option>
        <option value="05">0005</option>
      </select>
      <button>提交</button>
    </form>
    ```
- https://www.baidu.com/s?a=bb&b=123&b=456&c=a5&select=03

53. 列出 input 的 type 有哪些值，以及为各个值时分别需要怎么使用。
- submit 提交按钮 默认值
- button 常规按钮
- reset 重置按钮
- text
- password
- range max min step
- email
- number
- color
- checkbox checked value
- radio checked value
54. 想要让一个文本输入框在页面打开后自动获得光标要怎么办？
- `autofocus="autofocus"`
55. 如何在文本框里放置提示性文字？
- `<input type="text" placeholder="hello">`
56. option 标签的主体内容太长影响用户体验，你会如何解决？
- 用title属性
57. 想要在 textarea 标签中默认显示一段 html 代码最安全的做法是什么？
- 使用&lt或&gt破坏HTML标签结构
58. 如何禁用一组输入框？
- `<fieldset disabled><input><input></fieldset>`
59. 如下表格渲染出来后是什么效果？不要直接将代码贴入jsbin中看效果
    ```html
    <table border=1>
      <caption>美国队长</caption>
      <col>
      <col bgcolor=red>
      <col>
      <colgroup bgcolor=pink>
        <col>
        <col>
        <col bgcolor=brown>
      </colgroup>
      <thead>
        <tr>
          <th>01</th>
          <th>02</th>
          <th>03</th>
          <th>04</th>
          <th>05</th>
          <th>06</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abc</td>
          <td colspan=3 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td colspan=2 rowspan=3>abc</td>
        </tr>
        <tr bgcolor=lightgreen>
          <td colspan=2 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
        </tr>
      </tbody>
    </table>
    ```

60. 写出如下标签或属性值的英文全称
- 标签
  - HTML: Hyper Text Markup Language
  - div: division
  - p: paragraph
  - a: anchor
  - em: emphasis
  - tr: Table Row
  - th: Table Head
  - td: Table Data
  - col: column
  - ul: Unordered List
  - ol: Ordered List
  - li: List Item
  - dl: Description List
  - dt: Description Term
  - dd: Description Details
  - pre: preformatted text
  - nav: navigation
- 属性
  - coord: coordinate
  - rect: rectangle
  - poly: polygon
  - href: Hyper Reference
  - src: source
  
61. 请说出你对命令行程序的理解，以及其与 GUI 程序的区别
- 通过命令与程序交互
- 最大区别是没有易用的图形界面
62. 请确认以下标签分别属性什么类别（Content Category）？
- p：Flow content, palpable content
- meta： Metadata content
- h1：Flow content, Heading content
- fieldset：Flow content
- option: none
- input：Flow content, Phrasing content, Form-associated content
- area：Flow content, Phrasing content

63. 解释 box-sizing 可以取哪些值，以及每个值的意义
- content-box: 默认值 width只规定内容区的宽度 增加的border和padding都会使盒子变大
- border-box: width规定内容区、border、padding的宽度 但不包括margin
64. 简述 ie7 市场份额比 ie6 低的原因并在网络上找出目前各大浏览器在中国和全球的市场份额
- 因为很多政府机关仍在使用Windows XP系统，而该系统自带IE6
- 浏览器市场份额
  ```mermaid
  pie title 中国
   "Chrome" : 43
   "UC": 13
   "Safari": 10
   "QQ Browser": 8
   "360": 7
   "Firefox": 3
   "Edge": 2
   "others" : 15
  ```
  ```mermaid
  pie title 世界
   "Chrome" : 64
   "Safari" : 18
   "Edge": 3
   "Firefox": 3
   "others": 12
  ```
65. 画出如下代码中 div 及其子元素的渲染结果，并指出 p 标签中【每个行内元素的，内容区，行内框的范围】，p 元素的行框，并指明理论的行框高度。有尺子的可以以 1mm 为 2px 来绘制。
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>JS Bin</title>
      <l>
        p {
          font-size: 20px;
          line-height: 120%;
          margin: 30px;
          margin-left: auto;
          margin-right: -20px;
          width: 300px;
          background-color: tan;
        }

        .a {
          display: inline-block;
        }

        .b {
          font-size: 30px;
          vertical-align: 15px;
        }

        .c {
          display: inline-block;
          width: 60px;
          height: 60px;
          background-color: pink;
          margin: 8px;
        }

        img {
          box-sizing: border-box;
          width: 50px;
          height: 50px;
          border: 2px solid;
          margin: 4px;
          vertical-align: -10px;
          margin-bottom: -5px;
        }
        div {
          width: 400px;
          border: 1px dotted;
        }
      </l>
    </head>
    <body>
      <div>
        <p>
          <span class=a>foo</span>
          <span class=b>bar</span>
          <span class=c></span>
          <img src="https://drscdn.500px.org/photo/205228769/m%3D1170_k%3D1/d721302d063d447aa3bd6301dc1cba87" alt="">
        </p>
      </div>
    </body>
    </html>
    ```
    - 行高86px

66. vertical-align 取 middle 时元素如何对齐？
- 元素以基线上半个当前字号下x字母高度为基准对齐
- 元素的行内框垂直中点与匿名文本x的中点对齐
67. 什么是 baseline？
- 文字的基线
- 英文字符x的下边缘
68. 解释 position 可以取哪些值以及这些值的意义
- static 默认值 无定位，元素处于常规流
- relative 相对定位 相对与元素之前所在的位置定位
- absolute 绝对定位 元素被移出正常文档流 相对于最近的带有定位的祖先元素定位
- fixed 固定定位 相对于浏览器viewport定位
- sticky 粘性定位 相对于最近滚动祖先定位
69. 被定位的元素（即想要定位的那个元素）的定位原点是其哪个 box？
- margin-box相对于包含快元素的padding-box定位
70. 说出级联菜单的大体实现思路
- 使用ul搭建结构 每一级菜单为一个ul 灵活使用选择器对菜单进行定位
71. 如下结构中，div 有两个伪元素，分别标出伪元素的位置，用 `<before></before>` 表示 `::before` 伪元素，用 `<after></after>` 表示 `::after` 伪元素
    ```html
    <div><before></before>
      <h1>The article</h1>
      <p>the quick brown fox</p>
    <after></after></div>
    ```
72. 如何在伪元素中插入换行符？如何让这个换行符在页面中生效？
- white-space:pre;
- 使用'\a'代替回车 和white-space: pre;
73. 有坐标点 `(1, 2), (3, 4), (3, 0), (8, 1)`，画出它的大致Beizer曲线。可查维基百科。
74. 可渐变与不可渐变属性的最大的区别是什么？
- 一般来说可渐变属性都是数值属性
- 但也有例外，visibility属性，color
75. 想要让一个元素对鼠标完全不可点击，用什么办法？
- pointer-events: none;
76. 页面有无 `doctype` 声明会有什么区别？
- 有DOCTYPE时，浏览器会使用标准模式解析；没有时，IE9等早期浏览器会使用怪异模式进行解析，盒模型尺寸为border-box
77. HTML 的 `aria-*` 与 `role` 属性的作用是？
- 与可访问性相关 告诉读屏软件HTML元素的角色 增强语义化程度
78. 中英互翻
- omit：省略
- multiple：多个
- 驼峰式：camel case
- 中划线式：kabab case
- layout：布局
- typo：拼写错误
- code review：代码审查
- 半径：radius
- config：配置
- 集合：set
- 矩形：rectangle
- binary：二进制
- decimal：十进制
- 十六进制：hexadecimal
- 八进制：octonary
- SEO：搜索引擎优化
- HTML实体：HTML Entity
- 语义化：semantization
- 兼容性：compatibility
- quirk：怪异
- reference：引用
- 大小写敏感：case sensitive
- 别名：alias
79. 有一张高为 80 宽为 50 的图片，中心有一个直径为 40 的圆，其做为一个 150x200 的元素的背景图片，background-size 为 contain 和 cover 时，圆的直径分别为多少？
- contain 100px
- cover 120px
80. 画出以下代码的布局，并标出关键位置的尺寸。
    ```html
    <style>
    .b {
      position: relative;
      margin: 10px 15px 30px;
      border: 20px solid;
      padding: 5px 20px 10px 35px;
      width: 565px;
      height: 400px;
      box-sizing: border-box;
    }
    .c {
      width: 198px;
      height: 200px;
      background-color: #fff;
      position: absolute;
      left: 52px;
      bottom: 45px;
    }
    .a {
      position: absolute;
      margin: 8px 9px;
      border: 6px solid;
      border-right-width: 14px;
      padding: 13px 17px;
      width: 100px;
      height: 100px;
    }
    </style>
    <div class=b>
      <div class=c>
        <div class=a></div>
      </div>
    </div>
    ```
81. 写出实现小米首页 logo 返回主页的动画效果的代码。
- 背景图片移动
- 子元素位置移动+overflow:hidden
82. 清除浮动与闭合浮动分别是什么？它们的区别和联系是什么？
- 清除浮动：某个块框通过向下移动，使其两边没有浮动元素
- 闭合浮动：某个块框通过增加自己的高度使其能够包含其浮动的后代元素（通过自己变大，使所有后代被自己包起来）
- 闭合浮动的一种方案可以通过清除浮动来实现：即在需要闭合浮动的元素最后加一个块元素并清除这个元素的浮动，块元素会下移，同时撑开父亲元素，达到父元素闭合浮动的效果
83. 解释如下代码渲染结果的成因：https://jsbin.com/nigucupoju/edit?html,css,output
- a元素浮动，脱离了标准流。li的高度小于a的高度，由于左浮动元素不能超过在其之前的左浮动元素，所以各个a元素呈阶梯形排列
84. 什么是 CSS Sprite？为什么要使用 CSS Sprite？它有哪些优缺点？
- 即精灵图，将多个图片合成一张图片，通过background-position和JS配合，实现按需取用。
- 优点
  - 将多次http请求合成为一次，节省流量，加快加载速度
  - 优化了文件结构，减少了文件数量。
  - 页面中使用了这个精灵图的图片能同时出现
- 缺点：使用繁琐；图片的增删改查较为困难。
85. 如何理解 display 为 inline-block,inline-table,inline-flex 等inline类型的元素？它它有什么需要注意的地方？
- 看这种类型的元素自身的摆放时，当成行内元素，看其行内框，它的margin-box就是它的行内框
- 看内部的时候，内部元素认为自己在block/table/flex元素中
- 需要注意的是它的基线还有元素之间的空格
86. color 这个属性有什么需要注意的地方？
- color是可继承属性，需要注意元素间的父子关系。
- color设定的是前景色，不止包括字体颜色，也包括边框。
- 可以用currentColor取当前元素的color值
87. 简述 em 框，内容区，行内框，行框的构成以及其需要注意的问题。
- em框即字号框
- 内容区即多个em框拼接而成的框
- 行内框即行内元素的行高
  - 对于行内替换元素或inline-block元素，是其margin-box
- 行框是包裹这一行所有行内框的最小框
88. 如何确定一个行内框的baseline及其最高点和最低点？
- 文字的基线
- 没有基线就用元素的顶部和底部
89. 表格布局中各层的层次顺序是什么？
- 自底向上：表 列组 列 行组 行 单元格
90. 找出如下代码中的错误
    ```html
    <style>
      div::after：hover {/*应为半角冒号；伪元素应该写在最后*/
        opacity: 85%；/*应为半角分号*/
        transition: opactiy .3s step(5,end);  /*拼写错误，应为opacity；应为steps*/
      }
      a:visited {
        font-size: 28px; /*只能改颜色*/
      }
    </style>
    <div>
      <a href="jd.com”>京东商场<a>  <!--标签书写错误，应为</a>-->/*应为半角引号；a标签没闭合*/
      <a href="mi.com”>小米网<a>  <!--网址书写错误，应在前面加上协议："https://"-->
    </div>
    ```

91. 如下内容渲染在【同一行】中，请计算那一行的理论行高
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
      <style>
        div {
          margin: 80px;
          background-color: violet;
        }
        span {
          display: inline-block;
          border: 1px dotted;
          background-color: pink;
        }

        .a {
          vertical-align: -15px;
          width: 30px;
          height: 30px;
        }
        .b {
          margin-top: -50px;
          width: 30px;
          height: 30px;
          vertical-align: top;
        }
        .c {
          margin-bottom: 10px;
          vertical-align: middle;
        }
        .d {
          width: 30px;
          height: 30px;
        }
      </style>
    </head>
    <body>
      <div>
        x<span class="a">foo</span>
        <span class="b">bar</span>
        <span class="c">baz</span>
        <span class="d"></span>
      </div>
    </body>
    </html>
    ```
- 61px

92. `vertical-align` 取值为 `baseline` 时在不同情况下分别是如何对齐的？
- 最后一行文本
- margin-box底部
- 表格布局中，同一行单元格内容的第一行基线对齐
93. 解释如下代码渲染结果的成因：https://jsbin.com/dimaxip/1
- 同83
94. 说出至少三种闭合浮动的方案，并解释原理
- 通过在浮动元素末尾添加一个空的标签，例如：`<div style=”clear:both”></div>`
  - 添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度
- 使用 br标签和其自身的 html属性
- 父元素设置 overflow：hidden、display:flow-root、display: table等，触发BFC
- 使用:after 伪元素
- 父元素也进行浮动
- 给定高度
95. 默写与表格布局相关的 CSS 属性，并说明相关属性的作用
- caption-side
- border-collapse:separate/ collapse
- border-spacing:x y
- empty-cells:show/hide
- table-layout:fixed/auto
96. 在各种情况下，一个元素的包含块分别是什么？
- 常规流中，为最近的块级祖先
- 定位
  - 固定定位：窗口
  - 绝对定位：最近的定位祖先
97. 解释常规流与包含块的概念
- 常规流：元素在布局时的正常流动，元素之间会相互感知到，子元素会影响到父元素的大小
- 包含块是一个元素的布局上下文，元素的布局仅看其包含块 TODO
98. 写出与背景相关的属性并说明每个属性的作用和会产生的效果
- background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size、background-attachment
99.  如何实现单方向的盒子阴影？
- 使用负的扩散半径
100. `visibility:hidden`，`display:none`，`opacity:0`分别有什么不同？
- 结构
  - `display:none`: 会让元素完全从dom中消失，渲染的时候不占据任何空间, 不能点击
  - `visibility: hidden`:不会让元素从dom中消失，渲染元素继续占据空间，只是内容不可见，不能点击
  - `opacity: 0`: 不会让元素从dom中消失，渲染元素继续占据空间，只是内容不可见，可以点击
- 继承：
  - `display: none`: 是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
  - `visibility: hidden`：是继承属性，子孙节点消失由于继承了hidden，通过设置`visibility: visible`可以让子孙节点显式。
  - `opacity: 0`: 非继承属性，但有这个属性的元素会被当成整体看待，即使没有被继承。其子元素的透明度都会和父元素相同。
- 性能：
  - `display:none` : 修改元素会造成文档回流与重绘,读屏器不会读取`display: none`元素内容，性能消耗较大
  - `visibility:hidden`: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取`visibility: hidden`元素内容
  - `opacity: 0` ： 修改元素会造成重绘，性能消耗较少
101. 表单元素有哪些伪类选择器？
- `:valid`: 表单元素有效，主要适用于input type为number, email等类型;
- `:invalid`: 与:valid相反概念;
- `:required`: input是否设置required属性;
- `:optional`:与:required相对应;
- `:in-range`:针对input type为number的情况，如果输入的值属于有效的值；
- `:out-of-range`: 与:in-range相对应;
102. 为什么要在文件的最后一行加一个回车？
- 兼容旧编译器、便于拼接文件
- 重新编辑时更好定位光标到最后一个位置
- git diff时噪音更小
103. `:nth-of-type()`，`:nth-last-of-type()`，`:first-of-type`，`:last-of-type` 这一组伪类选择器有什么需要注意的地方？
- 选中的元素是相对与父元素来说的
- 把一组兄弟元素按标签名分组后在组内计数
104. 给写以下结构，写出只选中第一个p标签的选择器
  ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <div></div>
      <p></p>
      <p></p>
      <p></p>
    </body>
    </html>
  ```
- `p:first-of-type()`
- `div+p`
- `body > nth-child(2)`
105. 写出至少两种三栏等高自适应布局的代码
TODO
106. 表布局中边框合并的原则是什么？
107. 如何让一个元素可被 focus？如何去掉其被 focus 时的虚框？
- 使用`tabindex`属性
- `outline:none;`
108. IE hack 是什么，如何使用？vendor prefix 又是什么，它的意义是什么？条件注释的语法是什么，它有什么用处？
- CSS hack是通过在CSS样式中加入一些特殊的符号，让不同的浏览器识别不同的符号（什么样的浏览器识别什么样的符号是有标准的，CSS hack就是让你记住这个标准），以达到应用不同的CSS样式的目的，比如`.kwstu{width:300px;_width:200px;}`，一般浏览器会先给元素使用`width:300px;`的样式，紧接着后面还有个`_width:200px;`由于下划线`_width`只有IE6可以识别，所以此样式在IE6中实际设置对象的宽度为200px，后面的把前面的给覆盖了，而其他浏览器不识别`_width`不会执行`_width:200px;`这句样式，所以在其他浏览器中设置对象的宽度就是300px;
- Vendor prefix—浏览器引擎前缀，是一些放在CSS属性前的小字符串，用来确保这种属性只在特定的浏览器渲染引擎下才能识别和生效。谷歌浏览器和Safari浏览器使用的是WebKit渲染引擎，火狐浏览器使用的是Gecko引擎，Internet Explorer使用的是Trident引擎，Opera以前使用Presto引擎，后改为WebKit引擎。一种浏览器引擎里一般不实现其它引擎前缀标识的CSS属性，但由于以WebKit为引擎的移动浏览器相当流行，火狐等浏览器在其移动版里也实现了部分WebKit引擎前缀的CSS属性。
- 大体上有：
  ```
  -moz-     /* 火狐等使用Mozilla浏览器引擎的浏览器 */
  -webkit-  /* Safari, 谷歌浏览器等使用Webkit引擎的浏览器 */
  -o-       /* Opera浏览器(早期) */
  -ms-      /* Internet Explorer (不一定) */ 
  ```
- 条件注释只有IE支持，一般用来解决IE的兼容性问题
109. CSS 中一般为何不使用 `cm`，`mm` 等长度单位？
- 因为很难保证显示的长度等于设定的长度
- 不过打印的时候是准的
110. display 属性有哪些值可选？
```css
/* legacy values */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* box generation */
display: none;
display: contents;

/* two-value syntax */
display: block flow;
display: inline flow;
display: inline flow-root;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block flow-root;

/* other values */
display: table;
display: table-row; /* all table elements have an equivalent CSS display value */
display: list-item;

/* Global values */
display: inherit;
display: initial;
display: unset;
```
111. 画出如下代码的渲染结果
  ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
      <style>
        div {
          background-color: brown;
          width: 200px;
          height: 150px;
          margin: 20px;
          padding: 1px;
        }

        span {
          background-color: pink;
          margin: 1px;
        }

        [a1] {
          width: 50px;
          height: 40px;
          float: left;
        }
        [a2] {
          width: 20px;
          height: 50px;
          float: left;
        }
        [a3] {
          width: 20px;
          height: 70px;
          float: right;
        }
        [a4] {
          width: 30px;
          height: 30px;
          float: left;
          clear: both;
        }
        [a5] {
          width: 60px;
          height: 190px;
          float: right;
        }

        [b1] {
          width: 30px;
          height: 30px;
          float: left;
        }
        [b2] {
          width: 40px;
          height: 40px;
          float: right;
        }
        [b3] {
          width: 50px;
          height: 90px;
          clear: both;
          float: left;
        }
      </style>
    </head>
    <body>
      <div a>
        <span a1>a1</span>
        <span a2>a2</span>
        <span a3>a3</span>
        <span a4>a4</span>
        <span a5>a5</span>
        lorem
      </div>
      <div b>
        <span b1>b1</span>
        <span b2>b2</span>
        <span b3>b3</span>
      </div>
    </body>
    </html>
  ```
112. reset.css与normalize.css分别是什么，区别是什么，何种场景会使用到？现在更流行哪一种？
- Reset CSS和Normalize CSS都是重置浏览器自带样式。
  - Normalize.css 保护了有价值的默认值
  - Normalize.css 修复了浏览器的bug
  - Normalize.css 不会让你的调试工具变的杂乱
  - Normalize.css 是模块化的
  - Normalize.css 拥有详细的文档
  - Normalize.css 更加流行
113. 如何让背景图片从元素的左下角向上偏移5像素，往右偏移3像素；图片不重复平铺？写出代码。
- background-position:left 3px bottom 5px;
- background-repeat:norepeat;
114. `td` 元素的 `headers` 属性是干嘛的？
- headers 属性会将表格中的一个表头单元格和一个数据单元格联系起来。这个属性的值是引号包括的一列名称，这些名称是用 id 属性定义的不同表头单元格的名称。headers 属性对非可视化的浏览器，也就是那些在显示出相关数据单元格内容之前就显示表头单元格内容的浏览器非常有用。

1.   写出创建如下目录结果的命令行脚本（注：有扩展名的为文件，没有扩展名的为文件夹）。
    ```
    a
    │  readme.md
    │
    ├─foo
    │  └─c
    └─bar
        │  a.txt
        │  b.txt
        │
        └─y
                a.js
    ```
- mkdir a
- cd a
- touch readme.md
- mkdir foo
- mkdir foo/c
- mkdir bar
- touch a.txt
- touch b.txt
- mkdir y
- touch y/a.js
2. https://www.example.com/foo/bar/product.html 页面中有如下代码
```html
<link rel="stylesheet" href="//test.example.com/assets/../the/../path/bbc/ccd.css">
```
请问最终引入的c.css的完整路径是什么？
- https://test.example.com/path/bbc/ccd.css

1. 把如下公式【等号右边反A左边】转换为通过函数名来表达数学符号的单行纯文本表达式形式

    ![formule](https://wikimedia.org/api/rest_v1/media/math/render/svg/467cf813e1be327172fa6def9ed61afb54f37f19)

    * 用 `sigma(s,e,f)` 函数表示函数 `f(x)` 在 `x` 从 `s` 到 `e` 范围的和：
        * 即如果 `f(x) = x*x` ，则 `sigma(1,10,f)` 将得到 1 到 10 的平方和
    * 用 `factorial(x)` 表示 `x` 的阶乘
    * 用 `pow(x,y)` 表示 `x` 的 `y` 次方
    * 用 `division(x,y)` 表示 `x` 除以 `y`（`x/y`）
    * 用 `add(x,y)` 表示 `x` 加 `y`
    * 用 `mul(x,y)` 表示 `x` 乘以 `y`

    例如等差数列前 n 项和的公式可以表达为如下形式 `division(mul(n,add(n,1)),2)`
- sinx = sigma(0, infinite,mul(division(pow(-1,n),factorial(add(mul(2,n),1))),pow(x,add(mul(2,n),1))

1. 如下代码中，div 元素设置了多列布局，如何让 h2 标签跨越多列显示？
    ```html
    <div>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 11. Mollitia, 12. Harum atque quaerat recusandae quibusdam.</p>
        <p>Aliquid unde perferendis illo consectetur, magni corporis placeat, impedit ullam minus illum 13. Expedita, ipsa!</p>
        <p>Expedita, magni sed accusantium quaerat mollitia doloribus, cum! Possimus nostrum ratione autem aut, laborum doloremque!</p>
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 14. Cupiditate adipisci, esse? Cupiditate?</p>
        <p>Mollitia doloribus nihil dolor ipsam ab, nesciunt cupiditate, aut iste aspernatur reprehenderit.</p>
        <p>Veniam necessitatibus, doloremque iusto eveniet nisi illo! Excepturi facilis autem similique tempore!</p>
    </div>
    ```
- `white-space:nowrap;`

1.   写出如下选择器选中哪些元素
- :only-child
  - 该元素为其父元素的唯一一个子元素
- :only-of-type
  - 该元素为其父元素的唯一一个这一类型的子元素
- :first-of-type
  - 该元素为其父元素的第一个这一类型的子元素
- :last-of-type
  - 该元素为其父元素的最后一个这一类型的子元素
- :nth-of-type
  - 该元素为其父元素的第n个这一类型的子元素
- :nth-last-of-type
  - 该元素为其父元素的倒数第n个这一类型的子元素
- :not()
  - 对括号内的选择器取反
- :checked
  - 处于checked状态的radio、checkbox、option元素
- :disabled
  - 任何被禁用的元素
- :enabled
  - 任何被禁用的元素
- :valid
  - 表示内容验证正确的`<input>`或其他`<form>`元素
- :invalid
  - 表示未通过内容验证的`<input>`或其他`<form>`元素
- ::selection
  - 文档中被用户高亮的部分
  
1.    实现当页面内容很少时，页面的footer也处于视口的底部；当页面内容较多时（多于视口大小），footer显示在页面的尾部。
  效果页面：https://getbootstrap.com/examples/sticky-footer-navbar/
  调节视口高度即可观察到效果（当视口过高时，footer总是处于视口底部，当视口高度过小时，footer部分处于内容区域的尾部）

2.   给定如下html结构，为书名加书名号（《》）。为章节加上章节编号，为章节中的段落加上段落编号。为每个段落执行两个文字左右的缩进。并为每章（回）的第一段实现首字下沉效果（类似于报纸杂志的第一个字特大的效果）。
    ```html
    <h1>红楼梦</h1>
    <h2>甄士隐梦幻识通灵  贾雨村风尘怀闺秀</h2>
    <p>——此开卷第一回也。作者自云：曾历过一番梦幻之后，故将真事隐去，而借
  通灵说此《石头记》一书也，故曰“甄士隐”云云。……</p>
    <p>看官你道此书从何而起?说来虽近荒唐，细玩颇有趣味。却说那女娲氏炼石补
  天之时，于大荒山无稽崖炼成高十二丈、见方二十四丈大的顽石三万六千五百零一
  块。那娲皇只用了三万六千五百块，单单剩下一块未用，弃在青埂峰下。</p>
    <h2>贾夫人仙逝扬州城  冷子兴演说荣国府</h2>
    <p>甲：此回亦非正文，本旨只在冷子兴一人，即俗谓“冷中出热，无中生有”也。其演说荣府一篇者，盖因族大人多，若从作者笔下一一叙出，尽一二回不能得明，则成何文字？故借用冷子一人，略出其大半，使阅者心中，已有一荣府隐隐在心，然后用黛玉、宝钗等两三次皴染，则耀然于心中眼中矣。此即画家三染法也。</p>
    <p>未写荣府正人，先写外戚，是由远及近、由小至大也。若使先叙出荣府，然后一一叙及外戚，又一一至朋友、至奴仆，其死板拮据之笔，岂作“十二钗”人手中之物也？今先写外戚者，正是写荣国一府也。故又怕闲文赘累，开笔即写贾夫人已死，是特使黛玉入荣之速也。</p>
    <h2>托内兄如海荐西宾  接外孙贾母惜孤女</h2>
    <p>却说雨村忙回头看时，不是别人，乃是当日同僚一案参革的张如圭。他系此地
  人，革后家居，今打听得都中奏准起复旧员之信，他便四下里寻情找门路，忽遇见
  雨村，故忙道喜。二人见了礼，张如圭便将此信告知雨村，雨村欢喜，忙忙叙了两
  句，各自别去回家。</p>
    <p>那女学生原不忍离亲而去，无奈他外祖母必欲其往，且兼如海说：“汝父年已
  半百，再无续室之意，且汝多病，年又极小，上无亲母教养，下无姊妹扶持。今去
  依傍外祖母及舅氏姊妹，正好减我内顾之忧，如何不去？”黛玉听了，方洒泪拜别，
  随了奶娘及荣府中几个老妇登舟而去。雨村另有船只，带了两个小童，依附黛玉而
  行。</p>
    <h2>薄命女偏逢薄命郎  葫芦僧判断葫芦案</h2>
    <p>卻說黛玉衕姐妹們至王夫人處，見王夫人正和兄嫂處的來使計議家務，又說姨母家遭人命官司等語。因見王夫人事情冗雜，姐妹們遂出來，至寡嫂李氏房中來了。原來這李氏即賈珠之妻。珠雖夭亡，幸存一子，取名賈蘭，今方五歲，已入學攻書。這李氏亦系金陵名宦之女，父名李守中，曾為國子祭酒；族中男女無不讀詩書者。</p>
    <p>如今且說賈雨村授了應天府，一到任就有件人命官司詳至案下，卻是兩家爭買一婢，各不相讓，以致毆傷人命。</p>
    ```
TODO
3.   transition-property 写成 all 可能会造成什么问题？
- 写成all意味着所有可以缓动的属性在变动时都会缓动，可能并非我们想要的结果。
- 可能会触发布局属性的缓动，会造成较大的性能损失。

1.   如何让一个元素的大小正合适？
- 充分利用CSS的流体特性，使有元素大小自适应；也可以使用border-box。

1.   在 Twitter 点赞的动画中，为什么让动画以 `0.4666` 且以 `linear` 的方式进行，就可以正确观察到动画了？
- 因为动画一共有28帧，而浏览器的刷新率为60hz。28/60=0.4666，在0.4666s内将动画播放完正好和浏览器的刷新率同步，即可以正确观察到动画。
  
1.   缓动函数 steps(10, end) 表现出什么样的行为？
