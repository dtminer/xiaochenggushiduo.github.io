(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,e,n){"use strict";n.r(e);var i=n(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# 所有文章\n<div style="display: flex; flex-direction: column">\n    <div v-for="page of $site.pages.filter(item => item.path !== \'/\')" :key="page.key" style="padding: 20px 0; max-width: 33%;">\n        <router-link :to="page.path">\n            {{page.title}}\n            <div style="color: #c2c5cd; font-size: .5rem;">{{(page.frontmatter.tags || [\'无标签\']).join(\',  \')}}</div>\n        </router-link>\n    </div>\n</div>\n')])])])])}],!1,null,null,null);e.default=a.exports}}]);