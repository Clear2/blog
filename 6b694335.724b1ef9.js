(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(139)),l={id:"ES6",title:"ES6",author:"Clear",author_title:null,author_url:"https://github.com/wgao19",author_image_url:"https://avatars1.githubusercontent.com/u/2055384?v=4",tags:["ES6","docusaurus"]},c={permalink:"/blog/blog/ES6",editUrl:"https://github.com/Clear2/blog/tree/master/blog/2019-07-20-ES6.md",source:"@site/blog/2019-07-20-ES6.md",description:"var\u7684\u95ee\u9898",date:"2019-07-20T00:00:00.000Z",tags:[{label:"ES6",permalink:"/blog/blog/tags/es-6"},{label:"docusaurus",permalink:"/blog/blog/tags/docusaurus"}],title:"ES6",readingTime:.395,truncated:!1,prevItem:{title:"new & this & prototype",permalink:"/blog/blog/new"},nextItem:{title:"Hello",permalink:"/blog/blog/hello-world"}},i=[],u={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"var\u7684\u95ee\u9898"},"var\u7684\u95ee\u9898"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"var\u58f0\u660e\u7684\u53d8\u91cf,\u58f0\u660e\u5230\u5168\u5c40 \u6c61\u67d3\u5168\u5c40\u53d8\u91cf (\u51fd\u6570\u4f5c\u7528\u57df \u5168\u5c40)"),Object(o.b)("li",{parentName:"ol"},"\u53d8\u91cf\u63d0\u5347 \u53ef\u4ee5\u5728\u58f0\u660e\u4e4b\u524d\u8c03\u7528 function var import"),Object(o.b)("li",{parentName:"ol"},"let const  \u53ef\u4ee5 {}\u65b9\u5f0f\u6765\u8fde\u7528 \u5757\u4f5c\u7528\u57df"),Object(o.b)("li",{parentName:"ol"},"var \u80fd\u91cd\u590d\u58f0\u660e, \u5728\u540c\u4e00\u4f5c\u7528\u57df\u4e0b")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"var a = 1;\n{ \n    var a = 2 \n}\nconsole.log(a)\n\nlet a = 1;\n{ \n    console.log(a) // \u6682\u5b58\u6b7b\u533a(Cannot access 'a' before initialization)\n    let a = 2 \n}\nconsole.log(a)\n\nconst a = {} // \u6df1\u5ea6\u6539\u53d8\uff0c\u53ea\u8981\u4e0d\u6539\u53d8\u7a7a\u95f4\u5373\u53ef  \na.x = 100\nconsole.log(a)\n\n")),Object(o.b)("h4",{id:"symbol"},"Symbol"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"let s1 = Symbol()\nlet s2 = Symbol()\nconsole.log(s1 === s2)\n")))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,f=b["".concat(l,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);