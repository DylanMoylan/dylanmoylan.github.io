(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"197c":function(e,t,a){},"25d7":function(e,t,a){"use strict";var n=a("197c"),i=a.n(n);i.a},"5b1d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h4 text-center"},[e._v("\n        Online Production\n    ")]),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"articleID"}},[a("default-text",{ref:"articleID",attrs:{fieldName:"articleID",validation:"numeric"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"qnaID"}},[a("default-text",{ref:"qnaID",attrs:{fieldName:"qnaID",label:"QnA ID",validation:"numeric"}})],1),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"validatorURL"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])},[a("default-url",{ref:"validatorURL",attrs:{fieldName:"validatorURL",label:"Validator URL"}})],1),a("field-options",{attrs:{fieldName:"thumbnailURL",segmentName:e.segmentName}},[a("thumbnail-url",{ref:"thumbnailURL"})],1),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"bannerURL"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])},[a("default-url",{ref:"bannerURL",attrs:{fieldName:"bannerURL",label:"Banner URL"}})],1),a("field-options",{attrs:{repeatable:"",resources:"",segmentName:e.segmentName,fieldName:"mediaReviewURL"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("media-review-url",{ref:"MediaReviewURL",attrs:{fieldDataIndex:e.dataIndex}})]}},{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])})],1)},i=[],r=a("dbcc"),l=a("4525"),s=a("c643"),u=a("d11a"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h6"},[e._v("Faculty Thumbnail URL(s)")]),Object.keys(e.faculty).length?e._l(e.faculty,(function(t,n){return a("div",{key:n,staticClass:"q-col-gutter-md row items-center q-mb-md"},[a("div",{staticClass:"col-2"},[a("q-img",{staticStyle:{height:"140px","max-width":"150px"},attrs:{src:e.getURL(e.fieldData[1][n])},scopedSlots:e._u([{key:"error",fn:function(){return[a("div",{staticClass:"absolute-full flex flex-center bg-secondary",staticStyle:{"min-height":"100%","min-width":"100%"}},[a("div",{staticClass:"text-subtitle1"},[e._v(e._s(t))]),a("div",{staticClass:"text-caption"},[e._v("Cannot load image")])])]},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"absolute-bottom text-subtitle1 text-center"},[e._v("\n                            "+e._s(t)+"\n                        ")])]},proxy:!0}],null,!0)})],1),a("q-input",{ref:n,refInFor:!0,staticClass:"col-grow",attrs:{filled:"","stack-label":"",label:"Thumbnail URL for "+t,value:e.fieldData[1][n],disable:e.fieldDisabled,rules:e.addValidation("urlOptional")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:n})}}})],1)})):[a("div",{staticClass:"text-body1 text-primary"},[e._v("No contributors added.")])]],2)},o=[],c=(a("8e6e"),a("8a81"),a("7f7f"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("6762"),a("2fdb"),a("9523")),f=a.n(c),m=a("3544"),p=a("b4d7"),b=a("2f62");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={mixins:[m["a"],p["a"]],data:function(){return{fieldName:"thumbnailURL"}},computed:g(g({},Object(b["c"])("tickets",["getFieldData","getProductType"])),{},{faculty:function(){var e=this.getProductType.includes("advances")||this.getProductType.includes("demo")?"steeringCommittee":"facultyInformation",t=this.getFieldData({segmentName:e,fieldName:"contributor"});return Object.keys(t).reduce((function(e,a){return t[a].name&&t[a].name.length&&(e[a]=t[a].name),e}),{})}}),methods:{getURL:function(e){return e&&e.length>0?this.parseURL(e):""}}},y=h,x=a("2877"),D=Object(x["a"])(y,d,o,!1,null,null,null),N=D.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{ref:"url",attrs:{filled:"","stack-label":"",label:"Media Review URL",value:e.url,disable:e.fieldDisabled,rules:e.addValidation("urlOptional"),autogrow:""},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"url"})}}})],1)},w=[],R=(a("6c7b"),{mixins:[m["a"]],props:["fieldDataIndex"],data:function(){return{fieldName:"mediaReviewURL",width:"80%"}},computed:{year:function(){return this.fieldData[this.fieldDataIndex].year?this.fieldData[this.fieldDataIndex].year:""},yearOptions:function(){var e=(new Date).getFullYear();return new Array(e+5-(e-5)).fill().map((function(t,a){return a+e-5}))},url:function(){return this.fieldData[this.fieldDataIndex].url&&this.fieldData[this.fieldDataIndex].url.length?this.fieldData[this.fieldDataIndex].url:"https://api.staging.medscape.com/contentservice/video/validate/results?path=en/pi/editorial/studio/configs/".concat((new Date).getFullYear(),"/education/")}},methods:{focusInput:function(){this.$refs.url.focus()}}}),L=R,_=(a("25d7"),Object(x["a"])(L,O,w,!1,null,null,null)),I=_.exports,U={mixins:[l["a"]],data:function(){return{segmentName:"onlineProduction"}},components:{FieldOptions:r["a"],"default-url":s["a"],DefaultText:u["a"],"thumbnail-url":N,"media-review-url":I}},k=U,j=Object(x["a"])(k,n,i,!1,null,null,null);t["default"]=j.exports}}]);