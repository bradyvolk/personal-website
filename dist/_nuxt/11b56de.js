(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{291:function(t,n,e){var content=e(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("25dc3964",content,!0,{sourceMap:!1})},292:function(t,n,e){var content=e(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("493619b1",content,!0,{sourceMap:!1})},293:function(t,n,e){var content=e(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("0f85935b",content,!0,{sourceMap:!1})},294:function(t,n,e){"use strict";e(291)},295:function(t,n,e){var r=e(101)(!1);r.push([t.i,"\n.about-content[data-v-5864be80] {\r\n  display: flex;\n}\n.portrait-image[data-v-5864be80] {\r\n  height: 400px;\n}\n.portrait-caption[data-v-5864be80] {\r\n  font-size: 14px;\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  line-height: 5px;\n}\n.about-text-container[data-v-5864be80] {\r\n  align-self: end;\r\n  padding: 0 3rem 1rem 3rem;\n}\n.about-title[data-v-5864be80] {\r\n  display: inline-block;\r\n  color: #1a3d5b;\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  letter-spacing: 4px;\r\n  padding-bottom: 1rem;\n}\n.about-paragraph[data-v-5864be80] {\r\n  font-size: 14px;\r\n  padding: 0;\n}\n@media screen and (max-width: 1080px) {\n.portrait[data-v-5864be80] {\r\n    display: flex;\r\n    flex-direction: column;\n}\n.portrait-image[data-v-5864be80] {\r\n    height: auto;\n}\n.portrait-caption[data-v-5864be80] {\r\n    font-size: 14px;\r\n    font-style: italic;\r\n    font-weight: 300;\r\n    line-height: 1rem;\n}\n.about-content[data-v-5864be80] {\r\n    flex-direction: column;\n}\n.about-text-container[data-v-5864be80] {\r\n    align-self: start;\r\n    padding: 2rem;\n}\n}\r\n",""]),t.exports=r},296:function(t,n,e){"use strict";e(292)},297:function(t,n,e){var r=e(101)(!1);r.push([t.i,"\n.projects-content[data-v-e0ad5ea2] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: auto;\r\n  margin-bottom: 3rem;\n}\n.projects-title[data-v-e0ad5ea2] {\r\n  display: inline-block;\r\n  color: #1a3d5b;\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  letter-spacing: 4px;\r\n  padding-bottom: 1rem;\n}\n.projects-subtitle[data-v-e0ad5ea2] {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  padding-bottom: 0.5rem;\n}\n.img-fade[data-v-e0ad5ea2] {\r\n  opacity: 65%;\n}\n.image-overlay[data-v-e0ad5ea2] {\r\n  background-color: #132b3f;\n}\n[data-v-e0ad5ea2] .carousel-item {\r\n  height: 340px;\n}\r\n",""]),t.exports=r},298:function(t,n,e){"use strict";e.r(n);var r={name:"About",components:{}},o=(e(294),e(61)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"about-content"},[n("div",{staticClass:"portrait"},[n("img",{staticClass:"portrait-image",attrs:{src:"portrait-brady.png"}}),t._v(" "),n("span",{staticClass:"portrait-caption"},[t._v("Me ~enjoying~ the bitter winters of upstate New York at Lake\n      Cazenovia!")])]),t._v(" "),n("div",{staticClass:"about-text-container"},[n("span",{staticClass:"about-title"},[t._v("about me . . .")]),t._v(" "),n("p",{staticClass:"about-paragraph"},[t._v("\n      Hey, nice to meet you. I’m Brady. I’m a full-stack developer at IBM. My\n      team there manages a data pipeline and an interface for controlling that\n      pipeline. I regularly develop new UI features, ingest data from\n      multidimensional data sources using complex jobs configured by our UI,\n      manage Kubernetes pods and create docker images to build these pods.\n      Most recently, I’ve redesigned our product’s UI with mockups and am in\n      the process of implementing it. We are removing much of the existing\n      legacy code for a simpler, more consistent design and information\n      hierarchy.\n    ")]),t._v(" "),n("p",{staticClass:"about-paragraph"},[t._v("\n      I’m mainly not a computer person though. I love to cook, play music with\n      friends, keep up with the news, and worry about things. Beyond doing\n      work that is challenging and interesting technically, I hope to do work\n      that I also feel deeply connected to, to take these technical skills and\n      bring them to equity-focused non-profits and public programs with\n      technology needs.\n    ")])])])}],!1,null,"5864be80",null);n.default=component.exports},299:function(t,n,e){"use strict";e.r(n);var r={name:"Projects",components:{}},o=(e(296),e(61)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"projects-content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",[n("b-carousel",{staticClass:"projects-carousel",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{interval:8e3,controls:"",indicators:"",background:"#ababab","img-height":"100px"},model:{value:t.slide,callback:function(n){t.slide=n},expression:"slide"}},[n("b-carousel-slide",{attrs:{"img-height":"100px"},scopedSlots:t._u([{key:"img",fn:function(){return[n("div",{staticClass:"image-overlay"},[n("a",{attrs:{href:"https://github.com/bradyvolk/personal-website",target:"_blank"}},[n("img",{staticClass:"d-block img-fluid w-100 img-fade",attrs:{src:"this-site.png",alt:"screenshot of this website"}})])])]},proxy:!0}])},[n("h2",[t._v("This Site")])]),t._v(" "),n("b-carousel-slide",{attrs:{"img-height":"100px"},scopedSlots:t._u([{key:"img",fn:function(){return[n("div",{staticClass:"image-overlay"},[n("a",{attrs:{href:"https://github.com/bradyvolk/ewb-dig-ag-site",target:"_blank"}},[n("img",{staticClass:"d-block img-fluid w-100 img-fade",attrs:{src:"dig-ag-site.png",alt:"screenshot of ewb-dig-ag.org website"}})])])]},proxy:!0}])},[n("h2",[t._v("Cornell Digital Agriculture Website")])]),t._v(" "),n("b-carousel-slide",{attrs:{"img-height":"100px"},scopedSlots:t._u([{key:"img",fn:function(){return[n("div",{staticClass:"image-overlay"},[n("a",{attrs:{href:"https://github.com/bradyvolk/ewb-gui",target:"_blank"}},[n("img",{staticClass:"d-block img-fluid w-100 img-fade",attrs:{src:"dig-ag-desktop-app.png",alt:"screenshot of EWB dig ag desktop app"}})])])]},proxy:!0}])},[n("h2",[t._v("Cornell Digital Agriculture Desktop App")])])],1)],1)])}),[function(){var t=this._self._c;return t("div",[t("span",{staticClass:"projects-title"},[this._v("my projects . . .")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"projects-subtitle"},[this._v("Check out my different projects on GitHub")])])}],!1,null,"e0ad5ea2",null);n.default=component.exports},300:function(t,n,e){"use strict";e.r(n);var r={name:"Writing",components:{}},o=e(61),component=Object(o.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,"2ae0da68",null);n.default=component.exports},301:function(t,n,e){"use strict";e.r(n);var r={name:"Resume",components:{}},o=e(61),component=Object(o.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,"0d0aff54",null);n.default=component.exports},302:function(t,n,e){"use strict";e(293)},303:function(t,n,e){var r=e(101)(!1);r.push([t.i,"\n.tab-content[data-v-5020d087] {\r\n  height: 68vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 5% 0 10%;\n}\n.tabs[data-v-5020d087] {\r\n  display: flex;\r\n  height: 60px;\r\n  grid-gap: 24px;\r\n  padding-left: 10%;\r\n  padding-bottom: 6rem;\n}\n.tab-btn[data-v-5020d087] {\r\n  width: 150px;\r\n  height: 60px;\r\n  background-color: #f7f2ff;\r\n  border-radius: 8px;\r\n  border: 1px solid #1a3d5b;\r\n  font-size: 22px;\r\n  color: #1a3d5b;\r\n  letter-spacing: 4px;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;\n}\n.tab-btn[data-v-5020d087]:hover {\r\n  background-color: #ece0ff;\n}\n.tab-btn-selected[data-v-5020d087] {\r\n  font-weight: 500;\r\n  background-color: #1a3d5b;\r\n  color: #ffffff;\n}\n.tab-btn-selected[data-v-5020d087]:hover {\r\n  background-color: #1a3d5b;\n}\n.fade[data-v-5020d087] {\r\n  animation: fadeIn-5020d087 0.25s ease-out 0s forwards;\n}\n@keyframes fadeIn-5020d087 {\n0% {\r\n    opacity: 0;\n}\n100% {\r\n    opacity: 1;\n}\n}\n.mobile-nav[data-v-5020d087] {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100vw;\n}\n@media screen and (max-width: 1080px) {\n.mobile-nav[data-v-5020d087] {\r\n    visibility: visible;\n}\n.tabs[data-v-5020d087] {\r\n    visibility: hidden;\n}\n.tab-content[data-v-5020d087] {\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 3rem 2.5% 0 2.5%;\n}\n}\r\n",""]),t.exports=r},304:function(t,n,e){var content=e(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("0624ee06",content,!0,{sourceMap:!1})},305:function(t,n,e){"use strict";e.r(n);var r=e(298),o=e(299),l=e(300),d=e(301),c={name:"MainContent",components:{About:r.default,Projects:o.default,Writing:l.default,Resume:d.default},computed:{isSelectedClass:function(t){return{"btn-selected":this.selectedTab===t}}},data:function(){return{selectedTab:"about",buttonOptions:["about","projects","writing","résumé"],tabBtnClass:"tab-btn",tabBtnSelectedClass:"tab-btn-selected"}},methods:{changeSelectedTab:function(t){this.selectedTab=t}}},f=(e(302),e(61)),component=Object(f.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"primary-content"},[n("div",{staticClass:"tab-content"},["about"===t.selectedTab?n("About",{staticClass:"fade"}):t._e(),t._v(" "),"projects"===t.selectedTab?n("Projects",{staticClass:"fade"}):t._e(),t._v(" "),"writing"===t.selectedTab?n("Writing",{staticClass:"fade"}):t._e(),t._v(" "),"résumé"===t.selectedTab?n("Resume",{staticClass:"fade"}):t._e()],1),t._v(" "),n("div",{staticClass:"tabs"},t._l(t.buttonOptions,(function(e){return n("button",{key:e,staticClass:"tab-btn",class:[e===t.selectedTab?t.tabBtnSelectedClass:"",t.tabBtnClass],on:{click:function(n){return t.changeSelectedTab(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("div",{staticClass:"mobile-nav"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v(t._s(t.selectedTab))]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",t._l(t.buttonOptions,(function(e){return n("b-nav-item",{key:e,on:{click:function(n){return t.changeSelectedTab(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])})),1)],1)],1)],1)])}),[],!1,null,"5020d087",null);n.default=component.exports},306:function(t,n,e){"use strict";e(304)},307:function(t,n,e){var r=e(101)(!1);r.push([t.i,'\n.background-image[data-v-4a918bbd] {\r\n  opacity: 0.5;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  z-index: -100;\n}\n.content[data-v-4a918bbd] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n.landing[data-v-4a918bbd] {\r\n  height: 65vw;\n}\n.header[data-v-4a918bbd] {\r\n  height: 35vh;\r\n  line-height: 35vh;\r\n  width: 100%;\r\n  opacity: 0;\r\n  animation: fadeIn-4a918bbd 1s ease-out 0s forwards;\n}\n@keyframes slideDown-4a918bbd {\nto {\r\n    transform: translateY(5vh);\n}\n}\n@keyframes slideFromRight-4a918bbd {\nto {\r\n    transform: translateX(-5vw);\n}\n}\n@keyframes fadeIn-4a918bbd {\n0% {\r\n    opacity: 0;\n}\n100% {\r\n    opacity: 1;\n}\n}\n.my-name[data-v-4a918bbd] {\r\n  font-size: 3vw;\r\n  color: #1a3d5b;\r\n  font-weight: 600;\r\n  letter-spacing: 8px;\r\n  margin-left: 5%;\n}\n.my-position-container[data-v-4a918bbd] {\r\n  height: 10vh;\r\n  line-height: 10vh;\r\n  width: 100%;\r\n  line-height: 15vh;\r\n  text-align: right;\r\n  opacity: 0;\r\n  animation: fadeIn-4a918bbd 1s ease-out 1s forwards;\n}\n.my-position[data-v-4a918bbd] {\r\n  font-size: 2vw;\r\n  color: #1a3d5b;\r\n  font-weight: 400;\r\n  letter-spacing: 2px;\r\n  margin-left: auto;\r\n  margin-right: 5%;\n}\n.mobile-nav[data-v-4a918bbd] {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100vw;\n}\n@media screen and (max-width: 1080px) {\n.background-image[data-v-4a918bbd] {\r\n    overflow-x: hidden;\r\n    width: auto;\r\n    height: 100vh;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\n}\n.landing[data-v-4a918bbd] {\r\n    height: 100vh;\n}\n.my-position[data-v-4a918bbd] {\r\n    font-size: 1rem;\r\n    letter-spacing: 1px;\n}\n.my-position-container[data-v-4a918bbd] {\r\n    height: 1vh;\r\n    line-height: 1vh;\n}\n.my-name[data-v-4a918bbd] {\r\n    font-size: 2rem;\r\n    letter-spacing: 2px;\n}\n}\r\n',""]),t.exports=r},308:function(t,n,e){var content=e(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("53e8c60a",content,!0,{sourceMap:!1})},309:function(t,n,e){"use strict";e.r(n);var r={name:"Home",components:{MainContent:e(305).default}},o=(e(306),e(61)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",[n("img",{staticClass:"background-image",attrs:{src:"homemade-background.png"}}),t._v(" "),n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("main-content")],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"landing"},[n("div",{staticClass:"header"},[n("span",{staticClass:"my-name"},[t._v("brady volkmann . . .")])]),t._v(" "),n("div",{staticClass:"my-position-container"},[n("span",{staticClass:"my-position"},[t._v("full-stack developer")])])])}],!1,null,"4a918bbd",null);n.default=component.exports},310:function(t,n,e){"use strict";e(308)},311:function(t,n,e){var r=e(101)(!1);r.push([t.i,"\n.main {\n  position: relative;\n  width: 100% !important;\n  overflow-x: hidden !important;\n}\n",""]),t.exports=r},312:function(t,n,e){"use strict";e.r(n);var r={name:"IndexPage"},o=(e(310),e(61)),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"main"},[t("Home")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Home:e(309).default})}}]);