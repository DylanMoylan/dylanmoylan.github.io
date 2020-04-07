(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2384a1"],{ff6a:function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"col"},[l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"projectNumber"}},[l("project-number")],1),l("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"deliverableSFNumbers"},scopedSlots:e._u([{key:"default",fn:function(e){return[l("deliverable-sf",{attrs:{fieldDataIndex:e.dataIndex}})]}}])}),l("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"previousSFNumbers"},scopedSlots:e._u([{key:"default",fn:function(e){return[l("previous-sf-numbers",{attrs:{fieldDataIndex:e.dataIndex}})]}}])}),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"previousSFBoxLink"}},[l("previous-sf-box-link")],1),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvances"}},[l("clinical-advances")],1),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"productType"}},[l("product-type")],1),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"partners"}},[l("partners")],1),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"supporters"}},[l("supporters")],1),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"therapeuticAreaLeadSpecialty"}},[l("therapeutic-area-lead-specialty")],1),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"relatedTherapeuticAreaLeadSpecialty"}},[l("related-therapeutic-area-lead-specialty")],1),l("field-options",{attrs:{segmentName:e.segmentName,fieldName:"selectSupporterAttribution"}},[l("select-supporter-attribution")],1)],1)},r=[],i=l("cbfa"),a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-input",{attrs:{filled:"","stack-label":"",label:"Project Number",rules:e.addValidation("alphaNumeric")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"pNumber"})}},model:{value:e.pNumber,callback:function(t){e.pNumber=t},expression:"pNumber"}})},s=[],u=l("3544"),o={mixins:[u["a"]],data:function(){return{pNumber:"",fieldName:"projectNumber",defaultField:{pNumber:""}}}},c=o,p=l("2877"),d=Object(p["a"])(c,a,s,!1,null,null,null),f=d.exports,m=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-select",{attrs:{filled:"","stack-label":"",options:e.options,label:"Clinical Advances"},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"cASelect"})}},model:{value:e.cASelect,callback:function(t){e.cASelect=t},expression:"cASelect"}})],1)},b=[],g={mixins:[u["a"]],data:function(){return{fieldName:"clinicalAdvances",cASelect:"",options:["New","Renewal","Update"]}}},v=g,y=Object(p["a"])(v,m,b,!1,null,null,null),h=y.exports,O=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-select",{attrs:{filled:"","stack-label":"",options:e.options,label:"Product Type",rules:[function(e){return!!e||"Field is required"}]},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"text"})}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})],1)},S=[],N={mixins:[u["a"]],data:function(){return{fieldName:"productType",selectValue:"",options:["CA New Launch","CA Renewal to CA","CA Lite New Launch","CA Renewal to CA Lite","CA Lite Renewal to CA","Collection Page Upgrade"]}}},x=N,j=Object(p["a"])(x,O,S,!1,null,null,null),D=j.exports,k=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-input",{attrs:{filled:"","stack-label":"",label:"Deliverable SF#'s",rules:e.addValidation("numeric")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"sFNumber"})}},model:{value:e.sFNumber,callback:function(t){e.sFNumber=t},expression:"sFNumber"}})],1)},w=[],P={props:["fieldDataIndex"],mixins:[u["a"]],data:function(){return{fieldName:"deliverableSFNumbers",sFNumber:"",defaultField:{sFNumber:""}}}},_=P,F=Object(p["a"])(_,k,w,!1,null,null,null),A=F.exports,C=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-input",{attrs:{filled:"","stack-label":"",label:"Box Link for Previous SF #'s",rules:e.addValidation("urlOptional")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"url"})}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)},I=[],E={mixins:[u["a"]],data:function(){return{url:"",fieldName:"previousSFBoxLink"}}},q=E,L=Object(p["a"])(q,C,I,!1,null,null,null),T=L.exports,B=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-input",{attrs:{filled:"","stack-label":"",label:"Previous SF#'s",rules:e.addValidation("numeric")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"text"})}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},$=[],M={props:["fieldDataIndex"],mixins:[u["a"]],data:function(){return{fieldName:"previousSFNumbers",text:"",defaultField:{text:""}}}},V=M,R=Object(p["a"])(V,B,$,!1,null,null,null),U=R.exports,G=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-select",{attrs:{filled:"","stack-label":"","use-input":"","use-chips":"",multiple:"","input-debounce":"0",options:e.filterOptions,label:"Partners"},on:{"new-value":e.createValue,input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"multiSelect"})},filter:e.filterFn},model:{value:e.multiSelect,callback:function(t){e.multiSelect=t},expression:"multiSelect"}})],1)},H=[],J=(l("8e6e"),l("8a81"),l("ac6a"),l("cadf"),l("06db"),l("456d"),l("c47a")),K=l.n(J),W=(l("6762"),l("2fdb"),l("2f62"));function Y(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function z(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(l),!0).forEach((function(t){K()(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):Y(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var Q=[],X={mixins:[u["a"]],data:function(){return{fieldName:"partners",multiSelect:null,filterOptions:Q}},methods:{createValue:function(e,t){e.length>0&&(Q.includes(e)||Q.push(e),t(e,"toggle"))},filterFn:function(e,t){var l=this;t((function(){if(""===e)l.filterOptions=Q;else{var t=e.toLowerCase();l.filterOptions=Q.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))}},computed:z({},Object(W["c"])("settings",["partnerNames"])),mounted:function(){Q=this.partnerNames}},Z=X,ee=Object(p["a"])(Z,G,H,!1,null,null,null),te=ee.exports,le=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"q-pa-md"},[l("q-select",{attrs:{"use-input":"","use-chips":"",filled:"","stack-label":"",multiple:"","input-debounce":"0",options:e.filterOptions,label:"Supporters"},on:{"new-value":e.createValue,input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"multiSelect"})},filter:e.filterFn},model:{value:e.multiSelect,callback:function(t){e.multiSelect=t},expression:"multiSelect"}})],1)},ne=[];function re(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function ie(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?re(Object(l),!0).forEach((function(t){K()(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):re(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var ae=[],se={mixins:[u["a"]],data:function(){return{fieldName:"supporters",multiSelect:null,filterOptions:ae}},methods:{createValue:function(e,t){e.length>0&&(ae.includes(e)||ae.push(e),t(e,"toggle"))},filterFn:function(e,t){var l=this;t((function(){if(""===e)l.filterOptions=ae;else{var t=e.toLowerCase();l.filterOptions=ae.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))}},computed:ie({},Object(W["c"])("settings",["partnerNames"])),mounted:function(){ae=this.partnerNames}},ue=se,oe=Object(p["a"])(ue,le,ne,!1,null,null,null),ce=oe.exports,pe=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-select",{attrs:{multiple:"","use-chips":"",options:e.specialties,label:"Related Therapeutic Areas/Specialties",filled:"","stack-label":""},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"specialtiesSelect"})}},model:{value:e.specialtiesSelect,callback:function(t){e.specialtiesSelect=t},expression:"specialtiesSelect"}})],1)},de=[],fe=["Allergy & Clinical Immunology","Anesthesiology","Business of Medicine","Cardiology","Clinical Nutrition and Obesity","Critical Care","Dermatology","Diabetes & Endocrinology","Emergency Medicine","Family Medicine/Primary Care","Gastroenterology","General Surgery","Genomic Medicine","Hematology-Oncology","HIV/AIDS","Hospital Medicine","Infectious Diseases","Internal Medicine","Medical Geneticists","Medical Students","Nephrology","Neurology","None","Nurses","OB/GYN & Women's Health","Ophthalmology","Optometry","Orthopaedics","Other","Pathology & Lab Medicine","Pediatrics","Pharmacists","Physician's Assistants","Plastic Surgery & Aesthetic Medicine","Psychiatry","Public Health","Pulmonary Medicine","Radiology","Rheumatology","Surgery","Transplantation","Urology"],me={mixins:[u["a"]],data:function(){return{specialtiesSelect:null,specialties:null,fieldName:"relatedTherapeuticAreaLeadSpecialty"}},mounted:function(){this.specialties=fe}},be=me,ge=Object(p["a"])(be,pe,de,!1,null,null,null),ve=ge.exports,ye=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-select",{attrs:{multiple:"","use-chips":"",filled:"","stack-label":"",options:e.specialties,label:"Therapeutic Areas/Specialties"},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"specialtiesSelect"})}},model:{value:e.specialtiesSelect,callback:function(t){e.specialtiesSelect=t},expression:"specialtiesSelect"}})],1)},he=[],Oe={mixins:[u["a"]],data:function(){return{specialtiesSelect:null,specialties:null,fieldName:"therapeuticAreaLeadSpecialty"}},mounted:function(){this.specialties=fe}},Se=Oe,Ne=Object(p["a"])(Se,ye,he,!1,null,null,null),xe=Ne.exports,je=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._m(0),l("q-separator"),l("div",{staticClass:"row items-center q-pa-sm"},[l("div",{staticClass:"q-mr-md"},[l("q-radio",{attrs:{val:!1,label:"Single"},model:{value:e.supporterType,callback:function(t){e.supporterType=t},expression:"supporterType"}}),l("q-radio",{attrs:{val:!0,label:"Multiple"},model:{value:e.supporterType,callback:function(t){e.supporterType=t},expression:"supporterType"}})],1),e.supporterType?l("div",{staticClass:"col"},[l("q-select",{attrs:{filled:"","stack-label":"",multiple:"","use-chips":"",options:e.partnerNames,label:"Select Supporters"},on:{input:e.mapSupporterModels},model:{value:e.multiSupporter,callback:function(t){e.multiSupporter=t},expression:"multiSupporter"}})],1):e._e(),null==e.supporterType||e.supporterType?e._e():l("div",{staticClass:"col"},[l("q-select",{attrs:{filled:"","stack-label":"",options:e.partnerNames,label:"Select Supporter"},model:{value:e.singleSupporter,callback:function(t){e.singleSupporter=t},expression:"singleSupporter"}})],1)]),l("q-separator"),e.supporterType&&e.multiSupporter&&e.multiSupporter.length>0?l("div",{staticClass:"row"},e._l(e.multiSupporter,(function(t,n){return l("div",{key:"urlS"+n},[e.partnerUrls(t).length>0?l("q-select",{staticStyle:{width:"350px"},attrs:{options:e.partnerUrls(t),label:"Select Badge URL"},on:{blur:function(l){return e.update(t,l)}},model:{value:e.urls[t],callback:function(l){e.$set(e.urls,t,l)},expression:"urls[supporter]"}}):l("q-input",{attrs:{label:"Badge URL for "+t},model:{value:e.urls[t],callback:function(l){e.$set(e.urls,t,l)},expression:"urls[supporter]"}})],1)})),0):e._e(),!1===e.supporterType&&e.singleSupporter&&e.singleSupporter.length>0?l("div",[e._v("\n        Single Select URL choice\n    ")]):e._e()],1)},De=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"text-h6"},[e._v("Select Supporter Attribution")])])}],ke=(l("f751"),l("2ef0")),we=l.n(ke),Pe=l("2b0e");function _e(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function Fe(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(l),!0).forEach((function(t){K()(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):_e(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var Ae={mixins:[u["a"]],data:function(){return{fieldName:"selectSupporterAttribution",supporterType:null,singleSupporter:null,multiSupporter:null,url:"",urls:{}}},computed:Fe({},Object(W["c"])("settings",["partnerNames","partners"])),methods:{update:function(e,t){Object.assign({},t);Pe["a"].set(this.urls,e,t)},mapSupporterModels:function(){var e=this;this.multiSupporter&&this.multiSupporter.length>0&&(console.log("firing mapsupportermodels"),this.multiSupporter.forEach((function(t){e.urls[t]=""})))},partnerUrls:function(e){var t=this,l=we.a.findKey(this.partners,(function(t){return t.primaryName===e}));console.log("partner: ",l);var n=[];return Object.keys(this.partners[l].badges).forEach((function(e){t.partners[l].badges[e].url.length>0&&n.push(t.partners[l].badges[e].url)})),console.log(n.length),n}}},Ce=Ae,Ie=Object(p["a"])(Ce,je,De,!1,null,null,null),Ee=Ie.exports,qe=l("4525"),Le={mixins:[qe["a"]],data:function(){return{segmentName:"generalInformation"}},components:{"field-options":i["a"],"project-number":f,"clinical-advances":h,"product-type":D,"deliverable-sf":A,"previous-sf-box-link":T,"previous-sf-numbers":U,partners:te,supporters:ce,"therapeutic-area-lead-specialty":xe,"related-therapeutic-area-lead-specialty":ve,"select-supporter-attribution":Ee}},Te=Le,Be=Object(p["a"])(Te,n,r,!1,null,null,null);t["default"]=Be.exports}}]);