(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{fc5f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h4 text-center"},[e._v("Clinical Advances Page Details")]),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvancesTitle"}},[a("clinical-advances-title",{ref:"clinicalAdvancesTitle"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvancesTeaser"}},[a("clinical-advances-teaser",{ref:"clinicalAdvancesTeaser"})],1),a("field-options",{attrs:{resources:"",resourcesPrefix:"https://www.medscape.org/sites/advances/",segmentName:e.segmentName,fieldName:"clinicalAdvancesURL"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])},[a("clinical-advances-url",{ref:"clinicalAdvancesURL"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvancesIntroduction"}},[a("clinical-advances-introduction",{ref:"clinicalAdvancesIntroduction"})],1)],1)},i=[],l=a("cbfa"),s=a("db40"),c=a("ac78"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{ref:"url",attrs:{filled:"","stack-label":"",prefix:"https://www.medscape.org/sites/advances/",value:e.fieldData["1"].url,disable:e.fieldDisabled,label:"Clinical Advances URL","bottom-slots":"","hide-hint":"",rules:e.addValidation("urlSnippet")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"url"})}},scopedSlots:e._u([{key:"hint",fn:function(){return[a("div",{staticClass:"text-negative"},[e._v("For new pages or updates only")])]},proxy:!0},{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"link"}})]},proxy:!0}])}),a("qr-code-generator",{attrs:{url:"https://www.medscape.org/sites/advances/"+e.fieldData[1].url}})],1)},d=[],o=a("3544"),u=a("ee24"),f={components:{"qr-code-generator":u["a"]},mixins:[o["a"]],data:function(){return{url:"",fieldName:"clinicalAdvancesURL"}}},p=f,m=a("2877"),v=Object(m["a"])(p,r,d,!1,null,null,null),x=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-bold text-left q-pa-sm"},[e._v("Introduction")]),a("custom-editor",{ref:"text",attrs:{disable:e.fieldDisabled,value:e.fieldData[1].text},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"text"},!0)}}}),a("div",{staticClass:"text-left q-pa-sm"},[e._v("Please use 80 words or less.")])],1)},w=[],b=(a("28a5"),a("eed6")),h={mixins:[o["a"]],components:{"custom-editor":b["a"]},data:function(){return{text:"",fieldName:"clinicalAdvancesIntroduction"}},computed:{wordCount:function(){return this.fieldData[1].text.length?this.fieldData[1].text.trim().split(" ").length:0}}},N=h,A=Object(m["a"])(N,g,w,!1,null,null,null),D=A.exports,_=a("4525"),k={mixins:[_["a"]],data:function(){return{segmentName:"clinicalAdvancesPageDetails"}},components:{"field-options":l["a"],"clinical-advances-teaser":s["a"],"clinical-advances-title":c["a"],"clinical-advances-url":x,"clinical-advances-introduction":D}},y=k,C=Object(m["a"])(y,n,i,!1,null,null,null);t["default"]=C.exports}}]);