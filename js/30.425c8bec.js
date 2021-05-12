(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{ff6a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col"},[a("div",{staticClass:"text-h4 text-center"},[e._v("General Information")]),a("project-details"),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"workfrontLink"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])},[a("default-url",{ref:"workfrontLink",attrs:{fieldName:"workfrontLink",label:"Workfront Link"}})],1),a("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"deliverableSFNumbers"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("deliverable-s-f-numbers",{ref:"deliverableSFNumbers",attrs:{fieldDataIndex:e.dataIndex}})]}}])}),a("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"previousSFNumbers"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("previous-s-f-numbers",{ref:"previousSFNumbers",attrs:{fieldDataIndex:e.dataIndex}})]}}])}),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"previousSFBoxLink"},scopedSlots:e._u([{key:"resourcesPre",fn:function(){return[a("span",[e._v("Link: ")])]},proxy:!0}])},[a("default-url",{ref:"previousSFBoxLink",attrs:{fieldName:"previousSFBoxLink",label:"Folder Link for Previous SF #'s"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"clinicalAdvances"}},[a("clinical-advances",{ref:"clinicalAdvances"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"productType"}},[a("product-type",{ref:"productType"})],1),a("field-options",{attrs:{resources:"",segmentName:e.segmentName,fieldName:"supporters"},scopedSlots:e._u([{key:"resourcesPost",fn:function(){return[a("span",{staticClass:"text-grey"},[e._v("If the supporter you are looking for isn't available, it must be added to the "),a("router-link",{attrs:{to:{path:"/settings",query:{view:"supporterList"}}}},[e._v("supporter/partner list")])],1)]},proxy:!0}])},[a("supporters",{ref:"supporters"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"therapeuticAreaLeadSpecialty"}},[a("therapeutic-area-lead-specialty",{ref:"therapeuticAreaLeadSpecialty"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"relatedTherapeuticAreaLeadSpecialty"}},[a("related-therapeutic-area-lead-specialty",{ref:"relatedTherapeuticAreaLeadSpecialty"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"liveEvent"}},[a("live-event",{ref:"liveEvent"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"tHFormat"}},[a("th-format",{ref:"tHFormat"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"imeProgram"}},[a("default-option-group",{ref:"imeProgram",attrs:{fieldName:"imeProgram",label:"IME Program?"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"outcomesStudyIncluded"}},[a("outcomes-study-included",{ref:"outcomesStudyIncluded"})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"cmeGlobalProgram"}},[a("default-option-group",{ref:"cmeGlobalProgram",attrs:{fieldName:"cmeGlobalProgram",label:"CME Global Program?"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"brandingLogos"}},[a("default-option-group",{ref:"brandingLogos",attrs:{fieldName:"brandingLogos",label:"Branding Logos:",options:e.brandingOptions,inputBinding:"logo"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"selectSupporterAttribution"}},[a("select-supporter-attribution",{ref:"selectSupporterAttribution"})],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-input",{attrs:{filled:"","stack-label":"",label:"SF Number",value:e.pNumber,readonly:""}})},l=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a481"),a("9523")),o=a.n(s),u=a("2f62");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={computed:d(d({},Object(u["c"])("tickets",["getProjectID"])),{},{pNumber:function(){return this.getProjectID.replace("_",".")}})},f=p,m=a("2877"),b=Object(m["a"])(f,n,l,!1,null,null,null),g=b.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"cASelect",attrs:{filled:"","stack-label":"",clearable:"",value:e.fieldData["1"].cASelect,options:e.options,label:"Clinical Advances",disable:e.fieldDisabled,rules:e.addValidation()},on:{input:e.updateValues}})],1)},y=[],h=a("3544");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N={mixins:[h["a"]],data:function(){return{fieldName:"clinicalAdvances",cASelect:"",options:["New","Renewal","Update"]}},methods:D(D({},Object(u["b"])("tickets",["presetEmailTemplate"])),{},{updateValues:function(e){this.updateFieldData(e,{fieldDataIndex:1,inputBinding:"cASelect"},!0),this.presetEmailTemplate(e)}})},j=N,S=Object(m["a"])(j,v,y,!1,null,null,null),x=S.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"selectvalue",attrs:{filled:"","stack-label":"",value:e.fieldData["1"].selectValue,options:e.options,label:"Product Type",rules:e.addValidation("ignoreRequired"),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"selectValue"})}}})],1)},w=[],_={mixins:[h["a"]],data:function(){return{fieldName:"productType",selectValue:"",options:["CA New Launch","CA Renewal to CA","CA Lite New Launch","CA Renewal to CA Lite","CA Lite Renewal to CA","Collection Page Upgrade"]}}},k=_,q=Object(m["a"])(k,P,w,!1,null,null,null),I=q.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{ref:"sFNumber",attrs:{filled:"","stack-label":"",value:e.fieldData[e.fieldDataIndex].sFNumber,label:"Deliverable SF#'s",disable:e.fieldDisabled,rules:e.addValidation("sfNumber")},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"sFNumber"})}}})],1)},F=[],A={props:["fieldDataIndex"],mixins:[h["a"]],data:function(){return{fieldName:"deliverableSFNumbers",sFNumber:"",defaultField:{sFNumber:""}}}},E=A,L=Object(m["a"])(E,C,F,!1,null,null,null),B=L.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{ref:"text",attrs:{filled:"","stack-label":"",value:e.fieldData[e.fieldDataIndex].text,label:"Previous SF#'s",rules:e.addValidation("sfNumber"),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"text"})}}})],1)},M=[],T={props:["fieldDataIndex"],mixins:[h["a"]],data:function(){return{fieldName:"previousSFNumbers",text:"",defaultField:{text:""}}}},$=T,G=Object(m["a"])($,V,M,!1,null,null,null),H=G.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-sm"},[a("q-select",{ref:"multiSelect",attrs:{value:e.fieldData["1"].multiSelect,"use-input":"","use-chips":"",filled:"","stack-label":"",multiple:"","input-debounce":"0",options:e.filterOptions,disable:e.fieldDisabled,rules:e.addValidation(),label:"Supporters"},on:{"new-value":e.createValue,input:e.setValue,filter:e.filterFn},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}])})],1)},U=[];a("6762"),a("2fdb");function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=[],W={mixins:[h["a"]],data:function(){return{fieldName:"supporters",multiSelect:null,filterOptions:Q}},methods:{setValue:function(e){this.updateFieldData(e,{fieldDataIndex:1,inputBinding:"multiSelect"},!0),this.$refs.multiSelect.updateInputValue("")},createValue:function(e,t){e.length>0&&(Q.includes(e)||Q.push(e),t(e,"toggle"))},filterFn:function(e,t){var a=this;t((function(){if(""===e)a.filterOptions=Q;else{var t=e.toLowerCase();a.filterOptions=Q.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))}},computed:J({},Object(u["c"])("settings",["supporterNames"])),mounted:function(){Q=this.supporterNames}},z=W,K=Object(m["a"])(z,R,U,!1,null,null,null),X=K.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"specialtiesSelect",attrs:{clearable:"",multiple:"","use-chips":"",value:e.fieldData["1"].specialtiesSelect,options:e.specialtyOptions,label:"Related Therapeutic Areas/Specialties",filled:"","stack-label":"","emit-value":"",disable:e.fieldDisabled,rules:e.addValidation(),"map-options":""},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"specialtiesSelect"},!0)}}})],1)},ee=[],te=["Allergy & Clinical Immunology","Anesthesiology","Business of Medicine","Cardiology","Clinical Nutrition and Obesity","Critical Care","Dermatology","Diabetes & Endocrinology","Emergency Medicine","Family Medicine/Primary Care","Gastroenterology","General Surgery","Genomic Medicine","Hematology-Oncology","HIV/AIDS","Hospital Medicine","Infectious Diseases","Internal Medicine","Medical Geneticists","Medical Students","Nephrology","Neurology","None","Nurses","OB/GYN & Women's Health","Ophthalmology","Optometry","Orthopaedics","Other","Pathology & Lab Medicine","Pediatrics","Pharmacists","Physician's Assistants","Plastic Surgery & Aesthetic Medicine","Psychiatry","Public Health","Pulmonary Medicine","Radiology","Rheumatology","Surgery","Transplantation","Urology"];function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re={mixins:[h["a"]],data:function(){return{specialtiesSelect:null,specialties:te,fieldName:"relatedTherapeuticAreaLeadSpecialty"}},computed:ie(ie({},Object(u["c"])("tickets",["getFieldData"])),{},{therapeuticSpecialties:function(){var e=this.getFieldData({fieldName:"therapeuticAreaLeadSpecialty",segmentName:"generalInformation"});return e[1].specialtiesSelect},specialtyOptions:function(){var e=this;return this.specialties.map((function(t){return{label:t,value:t,disable:null!=e.therapeuticSpecialties&&e.therapeuticSpecialties.includes(t)}}))}})},ne=re,le=Object(m["a"])(ne,Z,ee,!1,null,null,null),se=le.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{ref:"specialtiesSelect",attrs:{clearable:"",multiple:"","use-chips":"",value:e.fieldData["1"].specialtiesSelect,filled:"","stack-label":"",options:e.specialties,label:"Therapeutic Areas/Specialties",disable:e.fieldDisabled,rules:e.addValidation()},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:1,inputBinding:"specialtiesSelect"},!0)}}})],1)},ue=[],ce={mixins:[h["a"]],data:function(){return{specialtiesSelect:null,specialties:null,fieldName:"therapeuticAreaLeadSpecialty"}},mounted:function(){this.specialties=te}},de=ce,pe=Object(m["a"])(de,oe,ue,!1,null,null,null),fe=pe.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("q-input",{ref:"supporterStatement",staticClass:"q-mb-md",attrs:{value:e.supporterStatement,rules:e.addValidation(),disable:e.fieldDisabled,filled:"","stack-label":"",label:"Supporter Statement","bottom-slots":!0},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"supporterStatement"})}},scopedSlots:e._u([{key:"hint",fn:function(){return[a("div",[e._v("Exclude supporter names, they will be added automatically.")])]},proxy:!0}])}),a("q-item",{staticClass:"text-left q-mb-sm"},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"text-primary",attrs:{name:"info"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-primary"},[e._v("Preview:")]),a("q-item-label",[a("span",[e._v(e._s(e.supporterStatement)+" ")]),a("span",{staticClass:"text-bold"},[e._v(e._s(e.supportersMap?e.supportersMap.join(", "):""))])])],1)],1),a("q-select",{ref:"supporters",attrs:{"use-input":"",clearable:"",options:e.filterOptions,value:e.supportersMap,multiple:"","use-chips":"",disable:e.fieldDisabled,rules:e.addValidation(),"stack-label":"",filled:"",label:"Select Supporter(s)"},on:{filter:e.filterFn,input:e.updateSupporters},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}])})],1),a("q-separator"),e._l(e.fieldData[1].supporters,(function(t,i){return a("div",{key:"ss0"+t.name,staticClass:"row justify-between items-center q-py-sm"},[a("span",{staticClass:"text-bold col-5 text-left"},[e._v("Select supporter logo for "+e._s(t.name)+":")]),e.getBadgeOptions(t.name).length>1?a("q-select",{staticStyle:{"min-width":"45%"},attrs:{options:e.getBadgeOptions(t.name),value:t.url,disable:e.fieldDisabled,filled:"","map-options":"","emit-value":"",clearable:""},on:{input:function(a){return e.updateSupporterUrl(a,i,t.name)},clear:function(a){return e.updateSupporterUrl("",i,t.name)}},scopedSlots:e._u([{key:"option",fn:function(t){return[a("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[a("q-item-section",[a("q-item-label",[t.opt.image&&t.opt.image.length?a("img",{attrs:{src:t.opt.image}}):a("div",[e._v(e._s(t.opt.label))])])],1)],1)]}},{key:"selected",fn:function(){return[t.url&&t.url.includes("data:app")?a("img",{attrs:{src:t.url}}):a("span",[e._v(e._s(t.url.length?t.url:""))])]},proxy:!0}],null,!0)}):a("div",[e._v("No badges/logos are available for this supporter. They can be added through the "),a("router-link",{attrs:{to:{path:"/settings",query:{view:"supporterList",supporter:t.name}}}},[a("span",{staticClass:"text-bold"},[e._v("supporter/partner list")])])],1)],1)}))],2)},be=[];a("7f7f"),a("7514");function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ye={mixins:[h["a"]],data:function(){return{fieldName:"selectSupporterAttribution",filterOptions:this.stringOptions}},methods:ve(ve({},Object(u["b"])("tickets",["selectSupporterAttributionUrl"])),{},{getBadgeOptions:function(e){var t=this,a=Object.keys(this.partners).find((function(a){return t.partners[a].primaryName==e})),i=this.partners[a].partnerLogos;i=i?i.map((function(e){if(e)return{label:e,value:e,image:null}})):[];var r=this.partners[a].badges;r=r?r.map((function(e){if(e)return{label:null,value:e.imageString,image:e.imageString}})):[];var n=[];return i.length&&(n=n.concat(i)),r.length&&(n=n.concat(r)),n.push({label:"Add New",image:null,value:"Add New"}),n},updateSupporters:function(e){var t=this,a=e;a=a?e.map((function(e){var a={name:e,url:""},i=t.fieldData[1].supporters.find((function(t){return t.name==e}));return i&&(a.url=i.url),a})):[],this.updateFieldData(a,{fieldDataIndex:"1",inputBinding:"supporters"},!0)},updateSupporterUrl:function(e,t,a){"Add New"==e?this.$router.push({path:"/settings",query:{view:"supporterList",supporter:a}}):this.selectSupporterAttributionUrl({url:e,index:t})},filterFn:function(e,t){var a=this;t((function(){if(""===e)a.filterOptions=a.supporterNames;else{var t=e.toLowerCase();a.filterOptions=a.supporterNames.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))}}),computed:ve(ve(ve({},Object(u["c"])("settings",["supporterNames","partners"])),Object(u["c"])("tickets",["programGeoTarget"])),{},{supportersMap:function(){var e=this.fieldData[1].supporters.map((function(e){return e.name}));return e.length?e:null},supporterStatement:function(){return this.fieldData[1].supporterStatement.length?this.fieldData[1].supporterStatement:this.multi?"Supported by independent educational grants from":"Supported by an independent educational grant from"}})},he=ye,Oe=Object(m["a"])(he,me,be,!1,null,null,null),De=Oe.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Outcomes Study Included? ")]),a("q-option-group",{ref:"included",attrs:{type:"radio",inline:"",options:[{value:!1,label:"No"},{value:!0,label:"Yes"}],value:e.fieldData[1].included,rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"included"},!0)}}})],1),e.fieldData[1].included?a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Measurement Focus: ")]),a("q-option-group",{ref:"measurementFocus",attrs:{type:"radio",inline:"",options:[{value:"Competence",label:"Competence"},{value:"Performance",label:"Performance"},{value:"Patient Outcomes",label:"Patient Outcomes"}],value:e.fieldData[1].measurementFocus,rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"measurementFocus"},!0)}}})],1):e._e()])},je=[],Se={mixins:[h["a"]],data:function(){return{fieldName:"outcomesStudyIncluded"}}},xe=Se,Pe=Object(m["a"])(xe,Ne,je,!1,null,null,null),we=Pe.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Live Event? ")]),a("q-option-group",{ref:"radio",attrs:{type:"radio",inline:"",options:[{value:!1,label:"No"},{value:!0,label:"Yes"}],value:e.fieldData[1].radio,rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"radio"},!0)}}})],1),e.fieldData[1].radio?a("div",[a("q-input",{ref:"date",staticClass:"q-mb-md",attrs:{filled:"","stack-label":"",label:"Date",type:"date",rules:e.addValidation(),disable:e.fieldDisabled,value:e.fieldData[1].date},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"date"},!0)}}}),a("q-input",{ref:"time",attrs:{filled:"","stack-label":"",label:"Time",type:"time",rules:["time"],disable:e.fieldDisabled,value:e.fieldData[1].time},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"time"},!0)}}})],1):e._e()])},ke=[],qe={mixins:[h["a"]],data:function(){return{fieldName:"liveEvent"}}},Ie=qe,Ce=Object(m["a"])(Ie,_e,ke,!1,null,null,null),Fe=Ce.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-left items-center q-mx-md"},[a("span",{staticClass:"text-bold"},[e._v("Townhall Event? ")]),a("q-option-group",{attrs:{type:"radio",inline:"",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}],value:e.fieldData[1].radio,disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"radio"},!0)}}})],1),e.fieldData[1].radio?a("div",[a("div",{staticClass:"row justify-start items-center"},[a("q-radio",{attrs:{label:"Audio summary + full event audio",value:e.fieldData[1].format,val:"Audio summary + full event audio",disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"format"},!0)}}})],1),a("div",{staticClass:"row justify-start items-center"},[a("q-radio",{staticClass:"q-mr-md col-shrink",attrs:{label:"Other, please specify",value:e.fieldData[1].format,val:e.other},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"format"},!0)}}}),e.hasOther?a("q-input",{staticClass:"col-grow",attrs:{filled:"","stack-label":"",label:"Other",disable:e.fieldDisabled,value:e.fieldData[1].format},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"format"})}}}):e._e()],1)]):e._e(),a("q-input",{ref:"format",staticStyle:{display:"none"},attrs:{rules:e.addValidation()},model:{value:e.hidden,callback:function(t){e.hidden=t},expression:"hidden"}})],1)},Ee=[],Le={mixins:[h["a"]],data:function(){return{fieldName:"tHFormat",hidden:""}},computed:{other:function(){return this.hasOther?this.fieldData[1].format:""},hasOther:function(){return"Audio summary + full event audio"!=this.fieldData[1].format}}},Be=Le,Ve=Object(m["a"])(Be,Ae,Ee,!1,null,null,null),Me=Ve.exports,Te=a("c643"),$e=a("dbcc"),Ge=a("4525"),He=a("0edb"),Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center"},[a("q-card",{staticClass:"col-grow col-xl-6 col-lg-8 col-sm-10 col-xs-12 justify-center items-center q-ma-md field-group",attrs:{id:"project-details"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Project Details")]),a("div",{staticClass:"text-caption row items-center q-mt-sm text-grey-7"},[a("q-icon",{attrs:{name:"info",size:"sm"}}),a("span",{staticClass:"q-ml-sm"},[e._v("QNA, Article, and Activity ID to be added by Online Production.")])],1)]),a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"col"},e._l(e.values,(function(e,t){return a("q-input",{key:"pi"+t,staticClass:"q-mb-sm",attrs:{filled:"","stack-label":"",value:e.value,label:e.label,readonly:""}})})),1)])],1)],1)},Ue=[];function Ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function Je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ye(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Qe={computed:Je(Je({},Object(u["c"])("tickets",["getProjectID","getFieldData","getProductType"])),{},{projectNumber:function(){return{label:"Project Number",value:this.getProjectID.replace("_",".")}},qnaID:function(){var e=this.getFieldData({fieldName:"qnaID",segmentName:"onlineProduction"});return e&&e[1]?{label:"QNA ID",value:e[1].text||""}:""},articleID:function(){if(this.getProductType.includes("advances"))return null;var e=this.getFieldData({fieldName:"articleID",segmentName:"onlineProduction"});return{label:"Article ID",value:e[1].text}},activityID:function(){if(!this.getProductType.includes("advances")){var e=this.getFieldData({fieldName:"activityID",segmentName:"onlineProduction"});return{label:"Activity ID",value:e[1].text}}},values:function(){return[this.projectNumber,this.qnaID,this.articleID,this.activityID].filter((function(e){return!!e}))}})},We=Qe,ze=Object(m["a"])(We,Re,Ue,!1,null,null,null),Ke=ze.exports,Xe={mixins:[Ge["a"]],data:function(){return{segmentName:"generalInformation"}},components:{"field-options":$e["a"],"default-url":Te["a"],"project-number":g,"clinical-advances":x,"product-type":I,"deliverable-s-f-numbers":B,"previous-s-f-numbers":H,supporters:X,"therapeutic-area-lead-specialty":fe,"related-therapeutic-area-lead-specialty":se,"select-supporter-attribution":De,"outcomes-study-included":we,"live-event":Fe,"th-format":Me,DefaultOptionGroup:He["a"],ProjectDetails:Ke},computed:{brandingOptions:function(){return["Medscape Education","Medscape Education Global","Medscape Oncology","Medscape Oncology Global","Medscape Education + theheart.org","MECC; None"].map((function(e){return{label:e,value:e}}))}}},Ze=Xe,et=Object(m["a"])(Ze,i,r,!1,null,null,null);t["default"]=et.exports}}]);