(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{cda3:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h4 text-center"},[e._v("Course/CME Details")]),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"courseTitle"}},[a("default-editor",{ref:"courseTitle",attrs:{fieldName:"courseTitle",label:"Title",charCount:"100"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"teaser"}},[a("default-editor",{ref:"teaser",attrs:{fieldName:"teaser",label:"Teaser",charCount:"140"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"spotlightTargetAudience"}},[a("default-text",{ref:"spotlightTargetAudience",attrs:{fieldName:"spotlightTargetAudience",type:"textarea",label:"Target Audience"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"goalStatement"}},[a("default-text",{ref:"goalStatement",attrs:{fieldName:"goalStatement",type:"textarea"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"gap"}},[a("default-text",{ref:"gap",attrs:{fieldName:"gap",type:"textarea"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"educationalDesign"}},[a("default-option-group",{ref:"educationalDesign",attrs:{fieldName:"educationalDesign",label:"Educational Design:",type:"checkbox",options:e.options.educationalDesign,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"aBMSCoreCompetencies"}},[a("default-option-group",{ref:"aBMSCoreCompetencies",attrs:{fieldName:"aBMSCoreCompetencies",label:"ABMS/ACGME Core Competencies",type:"checkbox",options:e.options.ABMS_ACGME,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"iPCECompetencies"}},[a("default-option-group",{ref:"iPCECompetencies",attrs:{fieldName:"iPCECompetencies",label:"IPCE Competencies",type:"checkbox",options:e.options.IPCE,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"cAPECompetencies"}},[a("default-option-group",{ref:"cAPECompetencies",attrs:{fieldName:"cAPECompetencies",label:"Cape Competencies (Pharmacists)",type:"checkbox",options:e.options.CAPE,inputBinding:"checkbox"}})],1),a("field-options",{attrs:{segmentName:e.segmentName,fieldName:"activityLength"}},[a("activity-length",{ref:"activityLength"})],1)],1)},n=[],l=a("dbcc"),o=a("4525"),s=a("bb17"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-input",{ref:"text",attrs:{label:"Activity Length",rules:e.addValidation(),disable:e.fieldDisabled,value:e.fieldData[1].text,mask:"fulltime","fill-mask":""},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:"1",inputBinding:"text"},!0)}}})],1)},m=[],d=a("3544"),c={mixins:[d["a"]],data:function(){return{fieldName:"activityLength"}}},u=c,p=a("2877"),f=Object(p["a"])(u,r,m,!1,null,null,null),g=f.exports,N=a("d11a"),C=a("149f"),b=a("0edb"),x={mixins:[o["a"]],data:function(){return{segmentName:"courseCmeDetails"}},components:{"field-options":l["a"],"activity-length":g,DefaultText:N["a"],DefaultOptionGroup:b["a"],DefaultEditor:C["a"]},computed:{options:function(){return{CAPE:s["a"].CAPE.map((function(e){return{label:e,value:e}})),educationalDesign:s["a"].educationalDesign.map((function(e){return{label:e,value:e}})),IPCE:s["a"].IPCE.map((function(e){return{label:e,value:e}})),ABMS_ACGME:s["a"].ABMS_ACGME.map((function(e){return{label:e,value:e}}))}}}},h=x,E=Object(p["a"])(h,i,n,!1,null,null,null);t["default"]=E.exports}}]);