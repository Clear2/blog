---
id: develop 
title: 项目开发问题
author: clear2
tags: [开发问题, 项目]
---
项目开发问题的思考
<!--truncate-->
### 1. 规范CSS问题

在小程序项目中,是通过配置文件注入的全局css
```javascript
const sass = {
  resource: [
    "src/assets/styles/base.scss",
    "src/assets/styles/default.scss",
    "src/assets/styles/mixins.scss",
  ],
  projectDirectory: path.resolve(__dirname, "..")
}
```
base.scss
```scss
.mt5 { margin-top: 10px}
.mt10 { margin-top: 20px }
.mt15 { margin-top: 15px }

.mra { margin-right: auto }
.pb5 { padding-bottom: 5PX }
.pb10 { padding-bottom: 10PX }
```
![css](https://jx2020.oss-cn-beijing.aliyuncs.com/1594111352858.jpg
)

所以打包就会出现如图这种情况，导致多余css样式被打包

制定CSS规范，在全局app.scss里导入

