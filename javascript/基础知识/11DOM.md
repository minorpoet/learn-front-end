### DOM是啥？

Document Object Model 文档对象模型

> 维基百科 
> https://en.wikipedia.org/wiki/Document_Object_Model
> 
> The Document Object Model (DOM) is a cross-platfremoveorm and language-independent application programming interface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document. The objects can be manipulated programmatically and any visible changes occurring as a result may then be reflected in the display of the document.ip

文档对象模型是一个跨平台和语言无关的应用程序接口。它把HTML，XHTML或XML文档表示成一种树形结构，其中，每个节点都是代表文档一个部分的对象。可以以编程的方式操作这些对象并且任何看得见的改变都会反应在文档的展示上。


分析：

1. dom是对象： 既然是对象了，那么就可以通过程序语言来来操作；
2. 树形结构： 树形说明其各个节点间是有父子兄弟这样的关系，那么应该会提供通过一个节点查询相关节点的api
3. 对dom的修改会直接反馈在ui上： 那么我们js动态化html页面的过程其实也就是dom的操作过程
4. 习惯用jquery强大的选择器和dom操作之外，原生的dom接口也要好好熟悉下哇


