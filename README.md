

# api接口集合

api接口集合的功能界面，提供对api的添加和删除，并且在router里动态配置添加

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://github.com/hot777zzz/api-together/">
    <img src="public/logo192.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">api接口集合</h3>
  <p align="center">
    为自己写的接口配置前端的方便调用
    <br />
    <a href="https://github.com/hot777zzz/api-together"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/hot777zzz/api-together/README.md">查看Demo</a>
    ·
    <a href="https://github.com/hot777zzz/api-together/issues">报告Bug</a>
    ·
    <a href="https://github.com/hot777zzz/api-together/issues">提出新特性</a>
  </p>

</p>


 本篇README.md面向开发者
 
## 目录

- [上手指南](#上手指南)
  - [开发前的配置要求](#开发前的配置要求)
  - [安装步骤](#安装步骤)
- [文件目录说明](#文件目录说明)
- [开发的架构](#开发的架构)
- [部署](#部署)
- [使用到的框架](#使用到的框架)
- [贡献者](#贡献者)
  - [如何参与开源项目](#如何参与开源项目)
- [版本控制](#版本控制)
- [作者](#作者)
- [鸣谢](#鸣谢)

### 上手指南

这是一个与后端联系的前端页面，用于配置和部署你的api并且有展示的页面的项目



###### 开发前的配置要求

1.node已经安装
2.有本地或者服务器进行api的后端部署

###### **安装步骤**

1.npm init
2.npm run start

```sh
git clone https://github.com/api-together
```

### 文件目录说明
eg:

```
api-together
├── .gitignore
├── package.json   文件包依赖
├── README.md  
├── /public/  静态资源
├── /scripts/ npm命令
├── /src/ 主文件
│  ├── /api/ 在这里添加你的接口文件，也可以重写
│  │  ├── request.js 主api调用axios
│  │  └── ai.js
│  │  └── dataSta.js
│  │  └── login.js
|  ├── /store/ 视口级存储你的信息
|  ├── /views/ 你的页面
│  ├── index.js 在这里配置你的router

```





### 开发的架构 

请阅读[ARCHITECTURE.md](https://github.com/shaojintian/Best_README_template/blob/master/ARCHITECTURE.md) 查阅为该项目的架构。

### 部署

暂无

### 使用到的框架

- [react](https://react.com)
- [prochat](https://prochat.com)

### 贡献者

 @hot777zzz

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

hot7@hot777zzz

知乎:hot7  &ensp; qq:912275990   

 *您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/hot777zzz/api-together/blob/master/LICENSE.txt)

### 鸣谢


- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [xxxxxxxxxxxxxx](https://connoratherton.com/loaders)

<!-- links -->
[your-project-path]:shaojintian/Best_README_template
[contributors-shield]: https://img.shields.io/github/contributors/shaojintian/Best_README_template.svg?style=flat-square
[contributors-url]: https://github.com/shaojintian/Best_README_template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shaojintian/Best_README_template.svg?style=flat-square
[forks-url]: https://github.com/shaojintian/Best_README_template/network/members
[stars-shield]: https://img.shields.io/github/stars/shaojintian/Best_README_template.svg?style=flat-square
[stars-url]: https://github.com/shaojintian/Best_README_template/stargazers
[issues-shield]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg
[license-shield]: https://img.shields.io/github/license/shaojintian/Best_README_template.svg?style=flat-square
[license-url]: https://github.com/shaojintian/Best_README_template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shaojintian



