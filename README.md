

### 悟空CRM9.0（JAVA版）
悟空软件长期为企业提供企业管理软件(CRM/HRM/OA/ERP等)的研发、实施、营销、咨询、培训、服务于一体的信息化服务。悟空软件以高科技为起点，以技术为核心、以完善的售后服务为后盾，秉承稳固与发展、求实与创新的精神，已为国内外上千家企业提供服务。

悟空的发展受益于开源，也会回馈于开源。2019年，悟空CRM会继续秉承“拥抱开放、合作共赢、创造价值”的理念，在开源的道路上继续砥砺前行，和更多的社区开发者一起为国内外开源做出积极贡献。

官网：[http://www.5kcrm.com](http://www.5kcrm.com/)

官网：[http://www.72crm.com](http://www.72crm.com/)

论坛：[http://bbs.72crm.net](http://bbs.72crm.net/)

演示地址：[demo9java.5kcrm.net](http://demo9java.5kcrm.net/)(帐号：18888888888   密码：123456)

JAVA版QQ群交流群①群：[1026560336](https://shang.qq.com/wpa/qunwpa?idkey=13d5e5809eb9feb350336e55c8b7a00b9cb472078b09b4441222a52dd76b278e)

微信交流社区

<img src="https://images.gitee.com/uploads/images/2019/0523/093737_8fe49348_345098.png" width="300">




悟空CRM采用全新的前后端分离模式，本仓库代码中已集成前端vue打包后文件，可免去打包操作

如需调整前端代码，请单独下载前端代码，前端代码在根目录的ux文件夹中


## 主要技术栈

核心框架：jfinal3.8

缓存：redis caffeine

数据库连接池：Druid

工具类：hutool,fastjson,poi-ooxml

定时任务：jfinal-cron

项目构建工具：maven

Web容器：tomcat,undertow(默认)

前端MVVM框架：Vue.JS 2.5.x 

路由：Vue-Router 3.x 

数据交互：Axios 

UI框架：Element-UI 2.6.3 



## 安装说明

配置java运行环境，redis环境，mysql环境，
然后将目录doc下的72crm.sql导入到数据库，修改`resources/config/crm9-config.txt`下的数据库以及redis的配置文件，
undertow启动端口号在`resources/config/undertow.txt`下修改,
默认账号 admin 默认密码 123456





## 部署说明

本项目JDK要求JDK8及以上

### 一、Tomcat部署


```
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided</scope>
</dependency>
```

取消以上代码的注释，将undertow的引用注释掉，打包方式改为war，运行maven package命令，将war包放在`tomcat/webapps`目录下

### 二、Undertow（默认）


```
<dependency>
    <groupId>com.jfinal</groupId>
    <artifactId>jfinal-undertow</artifactId>
    <version>1.6</version>
</dependency>
```


取消以上代码的注释，将tomcat的引用注释掉，打包方式改为jar 运行maven package。将上述打包命令生成的 zip 文件上传到服务器并解压,将目录下的
`
72crm.sh/72crm.bat
`
放到解压后的目录下，运行即可

项目webapp下自带打包后的前端代码，如果不需要对前端代码更改，直接访问即可
如果更改了前端代码，将打包后的dist下static文件夹和index.html替换到webapp下   
ps:可以使用`nginx`代理静态文件，后台只做接口响应，项目本身设计是前后端完全分离的



### 前端部署

安装node.js 前端部分是基于node.js上运行的，所以必须先安装`node.js`，版本要求为6.0以上

使用npm安装依赖 下载悟空CRM9.0前端代码； 可将代码放置在后端同级目录ux，执行命令安装依赖：

    npm install

修改内部配置 修改请求地址或域名：config/dev.env.js里修改BASE_API（开发环境服务端地址，默认localhost） 修改自定义端口：config/index.js里面的dev对象的port参数（默认8090，不建议修改）

### 运行前端

     npm run dev

注意：前端服务启动，默认会占用8090端口，所以在启动前端服务之前，请确认8090端口没有被占用。
程序运行之前需搭建好Server端



## 系统介绍

以下为悟空CRM9.0 JAVA版部分功能系统截图

![输入图片说明](https://images.gitee.com/uploads/images/2019/0523/093932_dacf59fe_345098.png "g4.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0523/093941_44519a69_345098.png "g1.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0523/093950_3dfe6ad0_345098.png "g3.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0523/093957_e39d2e09_345098.png "g5.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0523/094004_5964050b_345098.png "g6.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0523/094011_048b3c7a_345098.png "g9.png")
