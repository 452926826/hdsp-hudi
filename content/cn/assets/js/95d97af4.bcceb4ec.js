"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3477],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"Employing the right indexes for fast updates, deletes in Apache Hudi",excerpt:"Detailing different indexing mechanisms in Hudi and when to use each of them",author:"vinoth",category:"blog",image:"/assets/images/blog/hudi-indexes/with-and-without-index.png"},l=void 0,s={permalink:"/cn/blog/2020/11/11/hudi-indexing-mechanisms",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-11-11-hudi-indexing-mechanisms.md",source:"@site/blog/2020-11-11-hudi-indexing-mechanisms.md",title:"Employing the right indexes for fast updates, deletes in Apache Hudi",description:"Apache Hudi employs an index to locate the file group, that an update/delete belongs to. For Copy-On-Write tables, this enables",date:"2020-11-11T00:00:00.000Z",formattedDate:"November 11, 2020",tags:[],readingTime:7.585,truncated:!0,authors:[{name:"vinoth"}],prevItem:{title:"Can Big Data Solutions Be Affordable?",permalink:"/cn/blog/2020/11/29/Can-Big-Data-Solutions-Be-Affordable"},nextItem:{title:"Architecting Data Lakes for the Modern Enterprise at Data Summit Connect Fall 2020",permalink:"/cn/blog/2020/10/21/Architecting-Data-Lakes-for-the-Modern-Enterprise-at-Data-Summit-Connect-Fall-2020"}},u={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Hudi employs an index to locate the file group, that an update/delete belongs to. For Copy-On-Write tables, this enables\nfast upsert/delete operations, by avoiding the need to join against the entire dataset to determine which files to rewrite.\nFor Merge-On-Read tables, this design allows Hudi to bound the amount of records any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions"},"Apache Hive ACID"),"),\ncould end up having to merge all the base files against all incoming updates/delete records."))}f.isMDXComponent=!0}}]);