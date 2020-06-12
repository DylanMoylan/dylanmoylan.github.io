(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["16db6c54"],{"120c":function(e,n,t){"use strict";var i=t("a79c"),o=t.n(i);o.a},"130c":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.projectIsInStaging?t("q-page",{staticClass:"flex full-height"},[t("q-scroll-area",{staticClass:"q-pa-md",staticStyle:{height:"70vh","text-align":"center","background-color":"#f5f5f5",width:"100%"},attrs:{visible:""}},[t("div",{staticClass:"q-mx-auto q-pa-lg",staticStyle:{height:"inherit"}},[t("div",{staticClass:"text-h4 text-center q-mb-md"},[e._v("Current Staging Round ("+e._s(e.getStagingRoundNumber)+")")]),t("staging-round-summary")],1)])],1):e._e()},o=[],a=(t("8e6e"),t("8a81"),t("ac6a"),t("cadf"),t("06db"),t("456d"),t("c47a")),c=t.n(a),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("q-table",{attrs:{data:e.rowData,columns:e.columns,"row-key":"name",filter:e.filter,pagination:e.pagination},on:{"update:pagination":function(n){e.pagination=n}},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"row justify-between items-center full-width"},[t("div",[e._v("Staging Edits")]),t("div",{staticClass:"row items-center"},[t("q-input",{attrs:{filled:"",borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(n){e.filter=n},expression:"filter"}})],1)])]},proxy:!0},{key:"body",fn:function(n){return[t("q-tr",{attrs:{props:n}},e._l(n.cols,(function(i){return t("q-td",{key:i.name,attrs:{props:n}},["fieldName"==i.name?t("q-item",{staticStyle:{"flex-direction":"column"}},[t("q-item-section",[e._v("\n                        "+e._s(e.abbreviate(i.field(n.row)))+"\n                        ")]),t("q-item-section",{staticClass:"text-grey-6",attrs:{caption:""}},[e._v("\n                            "+e._s(n.row.segmentLabel)+"\n                        ")]),n.row.questionGroup?t("q-item-section",{staticClass:"text-grey-6",attrs:{caption:""}},[e._v("\n                            "+e._s(e._f("questionGroup")(n.row.questionGroup))+"\n                        ")]):e._e()],1):"roundName"==i.name||"segmentLabel"==i.name?t("div",{staticStyle:{display:"none"}}):i.field(n.row)?t("div",[t("div",[e._v(e._s(n.row.questionAbbreviation))]),e.isChosen({fieldName:n.row.fieldName,segmentName:n.row.segmentName,stagingEditKey:i.name,fieldDataIndex:n.row.fieldDataIndex})?t("q-icon",{staticClass:"text-positive text-bold text-h6",attrs:{name:"done"}},[t("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("\n                                This value will be used when the staging round is dropped.\n                            ")])],1):e._e(),t("q-btn",{class:{"text-caption":!0,"is-chosen":e.isChosen({fieldName:n.row.fieldName,segmentName:n.row.segmentName,stagingEditKey:i.name,fieldDataIndex:n.row.fieldDataIndex}),"has-conflict":e.hasConflicts(n.row.fieldName)},attrs:{flat:"","no-caps":""},on:{click:function(t){return e.toggleFieldDetails({index:i.name,fieldName:n.row.fieldName,segmentName:n.row.segmentName,fieldDataIndex:n.row.fieldDataIndex})}}},[e._v("\n                                "+e._s(e.abbreviate(i.field(n.row)))+"\n                            "),t("q-icon",{staticClass:"q-ml-md",attrs:{name:"open_in_new"}}),t("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("\n                                Click to view details and choose or delete selection\n                            ")])],1)],1):t("div",{staticClass:"text-italic text-secondary"},[e._v("\n                        None\n                    ")])],1)})),1)]}}])}),t("div",{staticClass:"row full-width justify-end"},[e.hasPermission("drop")?t("q-btn",{staticClass:"bg-negative text-white q-mt-md",attrs:{label:"Consolidate Edits & Drop Staging Round",disable:!Object.keys(e.stagingEditFields).length},on:{click:e.consolidateAndDrop}}):e._e()],1),t("q-dialog",{attrs:{value:e.viewFieldDetails},on:{input:e.toggleFieldDetails}},[t("staging-round-field-details",{attrs:{field:e.fieldDetails,fieldFile:e.fieldFile,segmentFolder:e.segmentFolder,hasConflicts:e.viewChooseable,chosenFields:e.chosenFields,canDrop:e.hasPermission("drop")},on:{setRoundValue:e.chooseRoundFieldValue,deleteEdit:e.preDeleteStagingEditField}})],1)],1)},l=[],d=(t("4917"),t("55dd"),t("7f7f"),t("6762"),t("2fdb"),t("f751"),t("a481"),t("20d6"),t("7514"),t("6165")),r=t("2f62"),u=t("2ef0"),m=t.n(u),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-card",{staticStyle:{width:"50rem"}},[t("q-card-section",[t("div",{staticClass:"text-h6 text-center"},[t("span",{staticClass:"text-bold text-primary"},[e._v(e._s(e.getLabel(e.field.segmentName,e.field.fieldName)+" "))]),e._v("\n        "+e._s("Status at "+("dropped"==e.field.index?"drop":"Staging Round "+e.field.index))+"\n      ")])]),t("q-card-section",[t(e.componentFile,{tag:"component",attrs:{stagingFieldData:e.field.fieldData,segmentName:e.field.segmentName,fieldDataIndex:e.field.fieldDataIndex,s0:!0}})],1),e.canDrop?t("q-card-section",[t("div",{staticClass:"row justify-end"},[t("div",{staticClass:"col-grow text-center"},[e.hasConflicts&&"dropped"!=e.field.index?t("q-checkbox",{staticClass:"q-ml-md text-bold",staticStyle:{"max-width":"50%"},attrs:{label:"Use this value when submitting round.",value:e.isChosen},on:{input:function(n){return e.chooseForRound(n)}}}):e._e()],1),"dropped"!=e.field.index?t("q-btn",{staticClass:"bg-negative text-white",attrs:{label:"Delete this change"},on:{click:e.deleteEdit}}):e._e()],1)]):e._e()],1)},g=[];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v={mixins:[d["a"]],props:{field:{type:Object},fieldFile:{type:String,required:!0},segmentFolder:{type:String,required:!0},hasConflicts:{type:Boolean,required:!0},chosenFields:{type:Array,required:!0},canDrop:{type:Boolean,required:!0}},data:function(){return{checkboxValue:!1}},methods:{importComponent:function(){var e=this;return"question"==this.field.fieldName?(console.log("ys"),function(){return t.e("chunk-common").then(t.bind(null,"0264"))}):function(){return t("8528")("./".concat(e.segmentFolder,"/fields/").concat(e.fieldFile))}},chooseForRound:function(e){if(this.checkboxValue=e,this.checkboxValue){var n={fieldName:this.field.fieldName,segmentName:this.field.segmentName,stagingEditKey:this.field.index,fieldDataIndex:this.field.fieldDataIndex};if("question"==this.field.fieldName){console.log("this.field.fieldData.fields: ",this.field.fieldData.fields);var t=Object.keys(this.field.fieldData.fields)[0];n.questionGroup=this.field.fieldData.fields[t].questionGroup}this.$emit("setRoundValue",n)}},deleteEdit:function(){var e=this;this.$q.dialog({cancel:!0,title:"Delete Staging Edit",message:"Permanently Delete this change?"}).onOk((function(){e.$emit("deleteEdit",{fieldName:e.field.fieldName,segmentName:e.field.segmentName,stagingEditKey:e.field.index})}))}},computed:p({},Object(r["c"])("tickets",["getTargetFieldData"]),{componentFile:function(){return this.importComponent()},isChosen:function(){var e=this,n=this.field.fieldDataIndex;return"question"==this.field.fieldName&&(n=n.substring(0,1)),!!this.chosenFields.find((function(t){return t.fieldName===e.field.fieldName&&t.stagingEditKey==e.field.index&&Object.keys(t.field)[0]==n}))}})},b=v,k=t("2877"),y=Object(k["a"])(b,f,g,!1,null,null,null),N=y.exports,C=t("24e8"),D=t("7167"),O=t("f262");function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w={mixins:[d["a"],O["a"]],data:function(){return{computeCounter:0,viewFieldDetails:!1,viewChooseable:!1,fieldDetails:{},fieldFile:"",segmentFolder:"",filter:"",pagination:{sortBy:"fieldName",rowsPerPage:10}}},components:{"staging-round-field-details":N,"q-dialog":C["a"]},methods:I({},Object(r["b"])("tickets",["setChosenStagingFields","pushChosenStagingField","spliceChosenStagingFields","stagingConsolidateAndDrop","deleteStagingEditField"]),{forceStagingEditFields:function(){this.computeCounter++},preDeleteStagingEditField:function(e){var n=this;this.deleteStagingEditField(e).then((function(){n.viewFieldDetails=!1,n.forceStagingEditFields()}))},consolidateAndDrop:function(){var e=this;this.$q.dialog({title:"Drop this staging round?",message:"This will drop the current staging round with the changes selected from the table. Continue?",cancel:!0}).onOk((function(){e.stagingConsolidateAndDrop({roundKey:e.getStagingRoundNumber,user:e.username,chosenStagingFields:e.chosenFields}).then((function(n){n.ok?(e.trNotify("Staging Round Successfully Dropped."),e.$router.push({name:"edit"})):e.trNotify(n.message,"negative")}))}))},toggleFieldDetails:function(e){e&&(this.fieldDetails=e,this.fieldFile=e.fieldName.charAt(0).toUpperCase()+e.fieldName.slice(1)+".vue",this.segmentFolder=e.segmentName.charAt(0).toUpperCase()+e.segmentName.slice(1),this.viewChooseable=!!this.hasConflicts(e.fieldName),this.fieldDetails.fieldData={fields:this.getTargetFieldData({index:e.index,fieldName:e.fieldName,segmentName:e.segmentName,fieldDataIndex:e.fieldDataIndex})}),this.viewFieldDetails=!this.viewFieldDetails},isChosen:function(e){var n=e.fieldDataIndex;"question"==e.fieldName&&(n=n.substring(0,1));var t=this.chosenFields.find((function(t){return t.fieldName==e.fieldName&&e.stagingEditKey==t.stagingEditKey&&Object.keys(t.field)[0]==n}));this.hasConflicts(e.fieldName);return!!t},hasConflicts:function(e){var n=D["b"].getStagingEditConflicts(this.getStagingEdits);return n[e]},chooseRoundFieldValue:function(e){var n=e.fieldDataIndex;"question"==e.fieldName&&(n=n.substring(0,1));var t={stagingEditKey:e.stagingEditKey,fieldName:e.fieldName,segmentName:e.segmentName,field:c()({},n,"dropped"==e.stagingEditKey?this.droppedTicket[e.segmentName][e.fieldName][n]:this.getStagingEdits[e.stagingEditKey].changes[e.segmentName][e.fieldName].fields[n])};if(this.chosenFields.length>0){var i=this.chosenFields.findIndex((function(n){return e.questionGroup?Object.keys(n.field)[0].substring(0,1)==e.fieldDataIndex.substring(0,1)&&e.questionGroup==n.field[Object.keys(n.field)[0]].questionGroup:n.fieldName===e.fieldName&&Object.keys(n.field)[0].substring(0,1)==e.fieldDataIndex.substring(0,1)}));i>=0?this.spliceChosenStagingFields({index:i,removeAmount:1,newItem:t}):this.chosenFields=t}else this.chosenFields=t}}),filters:{questionGroup:function(e){switch(e){case"lla":return"LLA";case"pre":return"Pre assessment";case"post":return"Post assessment";case"cme":return"CME Posttest";case"caPolling":return"Clinical Advances Polling";case"evalIME":return"IME Evaluation";case"tykPatEd":return"Patient Education";case"tykIME":return"IME Test Yor Knowledge";case"surveyPatEd":return"Patient Education Survey";case"demoPatEd":return"Patient Education Demographic";default:return e}},stagingEditKeyFilter:function(e){return e.replace("_",".")}},computed:I({},Object(r["c"])("tickets",["getStagingEdits","droppedTicket","getWorkingProject","getChosenStagingFields","getStagingRoundNumber","getTargetFieldData"]),{},Object(r["c"])("auth",["username"]),{chosenFields:{get:function(){return this.getChosenStagingFields},set:function(e){Array.isArray(e)?this.setChosenStagingFields(e):this.pushChosenStagingField(e)}},stagingEditFields:function(){var e=this;this.computeCounter;var n={};Object.keys(this.getStagingEdits).forEach((function(t){Object.keys(e.getStagingEdits[t].changes).forEach((function(i){Object.keys(e.getStagingEdits[t].changes[i]).forEach((function(o){n[o]?n[o][t]=Object.assign({segmentName:i,fieldName:o,roundName:t},e.getStagingEdits[t].changes[i][o]):n[o]=c()({},t,Object.assign({segmentName:i,fieldName:o,roundName:t},e.getStagingEdits[t].changes[i][o]))}))}))})),Object.keys(n).forEach((function(e){n[e]=m.a.filter(n[e],(function(e){return Object.keys(e).find((function(e){return"fields"===e}))}))}));var t=m.a.pickBy(n,(function(n){return n.length>0&&n.find((function(n){return n.roundName.includes(e.getStagingRoundNumber)}))}));return t},columns:function(){var e=[{name:"fieldName",label:"Field Name",align:"left",field:function(e){return e.name}},{name:"dropped",align:"center",label:"Value At Last Drop",field:function(e){return e.dropped.length>0?e.dropped:null}}];return Object.keys(this.getStagingEdits).sort((function(e,n){return parseFloat(e.replace(/[A-Za-z]/g,""))>n.replace(/[A-Za-z]/g,"")})).forEach((function(n){e.push({name:n,align:"center",label:n.replace("_","."),field:function(e){return e[n]}})})),e.push({name:"roundName",field:"roundName"}),e.push({name:"segmentLabel",field:"segmentLabel"}),e},rowData:function(){var e,n=this,t=[],i=Object.keys(this.stagingEditFields).reduce((function(e,t){var i=n.stagingEditFields[t].filter((function(e){return!e.roundName.match(/[._]/)}));return e[t]=i,e}),{});console.log("oldRounds: ",i);var o=Object.keys(this.stagingEditFields).reduce((function(e,t){var i=n.stagingEditFields[t].filter((function(e){return e.roundName.match(/[._]/)}));return e[t]=i,e}),{});return console.log("newRounds: ",o),Object.keys(o).forEach((function(a){e=o[a];var c={};e.forEach((function(e){var o;if(c.fieldName=e.fieldName,c.segmentName=e.segmentName,n.getStagingEdits[e.roundName].changes.deletedFields&&n.getStagingEdits[e.roundName].changes.deletedFields.length&&(o=n.getStagingEdits[e.roundName].changes.deletedFields.find((function(n){return n.pointer.includes("".concat(e.segmentName,".").concat(e.fieldName))}))),o)c.dropped=o.field,c[e.roundName]="deleted";else{var s=n.droppedTicket[e.segmentName][e.fieldName],l=Object.keys(s.fields),d=!!l[l.length-1]&&l[l.length-1].substring(0,1),r=Object.keys(e.fields),u=!!r[r.length-1]&&r[r.length-1].substring(0,1);if("question"==e.fieldName){var m,f=Object.keys(n.droppedTicket[e.segmentName].question.fields).map((function(t){return n.droppedTicket[e.segmentName].question.fields[t]}));Object.keys(e.fields).forEach((function(i){c.name="Question ".concat(e.fields[i].position," (").concat(e.fields[i].id,")"),c.fieldDataIndex=e.fields[i].id;var o=f.find((function(n){return n.id==e.fields[i].id})),a=Object.keys(e.fields[i]).filter((function(e){return"id"!=e})),s=[];if(c.questionGroup=e.fields[i].questionGroup,o){console.log("question found"),c[m]=null;var l=[];a.forEach((function(t){l.push("".concat(n.getInputBindingLabel(t),": ").concat(n.droppedTicket[e.segmentName][e.fieldName].fields[i][t]))})),c.dropped=l.join(", "),a.forEach((function(t){s.push("".concat(n.getInputBindingLabel(t),": ").concat(e.fields[i][t]))}));var d=Object.keys(c).filter((function(e){return e.match(/S[0-9]/)}));d.forEach((function(e){return delete c[e]}));var r=m||e.roundName;c[r]=s.join(", "),c.questionAbbreviation=n.abbreviate(n.droppedTicket[e.segmentName][e.fieldName].fields[i].question)}else{console.log("!question"),c.dropped="None",c[m]=null;var u=Object.keys(c).filter((function(e){return e.match(/S[0-9]/)}));u.forEach((function(e){return delete c[e]})),c[e.roundName]="New Question",c.questionAbbreviation=n.abbreviate(e.fields[i].question),a.forEach((function(t){s.push("".concat(n.getInputBindingLabel(t),": ").concat(e.fields[i][t]))}))}c.roundName=e.roundName,c.segmentLabel=n.getLabel(e.segmentName),console.log("newRow: ",c),t.find((function(e){return e.fieldDataIndex==c.fieldDataIndex}))||(t.push(Object.assign({},c)),m=e.roundName)}))}else(d&&u&&parseInt(d)<=parseInt(u)||!d&&u)&&Object.keys(e.fields).forEach((function(o){c=t.find((function(n){return n.fieldDataIndex==o&&n.fieldName==e.fieldName}))||c;var l=Object.keys(e.fields[o]);c.name=n.getLabel(e.segmentName,e.fieldName)+" "+o.substring(0,1)+" (".concat(o,")"),c.fieldDataIndex=o;var d=[],r=[];l.forEach((function(t){d.push("".concat(n.getInputBindingLabel(t),": ").concat(e.fields[o][t])),s.fields[o]&&s.fields[o][t]&&(s.fields[o][t].length||"boolean"==typeof s.fields[o][t])?r.push("".concat(n.getInputBindingLabel(t),": ").concat(s.fields[o][t])):r=["None"]})),c.dropped=r.join(", ");var u=Object.keys(c).filter((function(e){return e.match(/S[0-9]_/)}));u.forEach((function(e){return delete c[e]}));var m=i[a].filter((function(e){return Object.keys(e.fields).find((function(e){return e==c.fieldDataIndex}))}));console.log("oldRoundValues: ",m),m.forEach((function(e){if(Object.keys(i).find((function(e){return e==c.fieldName}))){var t=[];l=Object.keys(e.fields[c.fieldDataIndex]),l.forEach((function(i){t.push("".concat(n.getInputBindingLabel(i),": ").concat(e.fields[c.fieldDataIndex][i]))})),c[e.roundName]=t}})),c[e.roundName]=d.join(","),c.roundName=e.roundName,c.segmentLabel=n.getLabel(e.segmentName),console.log("newRow: ",c),t.find((function(n){return n.fieldDataIndex==o&&n.fieldName==e.fieldName}))&&1!=c.fieldDataIndex.substring(0,1)||(1!=c.fieldDataIndex||t.find((function(e){return 1==e.fieldDataIndex.substring(0,1)&&e.fieldName==c.fieldName}))?1!=c.fieldDataIndex&&t.push(Object.assign({},c)):t.push(Object.assign({},c)))}))}c.segmentLabel=n.getLabel(e.segmentName)}))})),t}}),mounted:function(){var e=this;Object.keys(this.getStagingEdits).forEach((function(n){Object.keys(e.getStagingEdits[n].changes).forEach((function(t){Object.keys(e.getStagingEdits[n].changes[t]).forEach((function(i){m.a.hasIn(e.getStagingEdits[n].changes[t][i],"fields")&&!e.hasConflicts(i)&&Object.keys(e.getStagingEdits[n].changes[t][i].fields).forEach((function(o){e.chosenFields={stagingEditKey:n,fieldName:i,segmentName:t,field:c()({},o,e.getStagingEdits[n].changes[t][i].fields[o])}}))}))}))}))},beforeDestroy:function(){this.chosenFields=[]}},j=w,P=(t("120c"),Object(k["a"])(j,s,l,!1,null,null,null)),S=P.exports;function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x={components:{"staging-round-summary":S},computed:F({},Object(r["c"])("tickets",["getStagingRoundNumber","projectIsInStaging"])),beforeRouteEnter:function(e,n,t){t((function(e){e.projectIsInStaging||t({name:"edit"})}))}},R=x,q=Object(k["a"])(R,i,o,!1,null,null,null);n["default"]=q.exports},8528:function(e,n,t){var i={"./Activities/Activities":["7e30","chunk-common"],"./Activities/Activities.vue":["7e30","chunk-common"],"./Activities/fields/ActivityContent":["67ea","chunk-common"],"./Activities/fields/ActivityContent.vue":["67ea","chunk-common"],"./Activities/fields/AdditionalBuckets":["a8d0","chunk-common"],"./Activities/fields/AdditionalBuckets.vue":["a8d0","chunk-common"],"./AudienceEngagement/AudienceEngagement":["5421","chunk-common"],"./AudienceEngagement/AudienceEngagement.vue":["5421","chunk-common"],"./AudienceEngagement/fields/CAUpdateEmail":["3c3c","chunk-common"],"./AudienceEngagement/fields/CAUpdateEmail.vue":["3c3c","chunk-common"],"./ClinicalAdvancesPageDetails/ClinicalAdvancesPageDetails":["fc5f","chunk-common"],"./ClinicalAdvancesPageDetails/ClinicalAdvancesPageDetails.vue":["fc5f","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesIntroduction":["e700","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesIntroduction.vue":["e700","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTeaser":["db40","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTeaser.vue":["db40","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTitle":["ac78","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesTitle.vue":["ac78","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesURL":["2477","chunk-common"],"./ClinicalAdvancesPageDetails/fields/ClinicalAdvancesURL.vue":["2477","chunk-common"],"./Compliance/ComplianceReviewForm":["ea05","chunk-common"],"./Compliance/ComplianceReviewForm.vue":["ea05","chunk-common"],"./Compliance/fields/Activities":["da81","chunk-common"],"./Compliance/fields/Activities.vue":["da81","chunk-common"],"./Compliance/fields/ActivityPlanning":["1c29","chunk-common"],"./Compliance/fields/ActivityPlanning.vue":["1c29","chunk-common"],"./Compliance/fields/ActivityTitle":["71ca","chunk-common"],"./Compliance/fields/ActivityTitle.vue":["71ca","chunk-common"],"./Compliance/fields/ActivityType":["17e4","chunk-common"],"./Compliance/fields/ActivityType.vue":["17e4","chunk-common"],"./Compliance/fields/CmeReviewDate":["26fa","chunk-common"],"./Compliance/fields/CmeReviewDate.vue":["26fa","chunk-common"],"./Compliance/fields/Format":["85ee","chunk-common"],"./Compliance/fields/Format.vue":["85ee","chunk-common"],"./Compliance/fields/MipsActivities":["5387","chunk-common"],"./Compliance/fields/MipsActivities.vue":["5387","chunk-common"],"./Compliance/fields/Objectives":["abce","chunk-common"],"./Compliance/fields/Objectives.vue":["abce","chunk-common"],"./Compliance/fields/ReviewQuestions":["2460","chunk-common"],"./Compliance/fields/ReviewQuestions.vue":["2460","chunk-common"],"./Compliance/fields/Reviewers":["c992","chunk-common"],"./Compliance/fields/Reviewers.vue":["c992","chunk-common"],"./Compliance/fields/TargetAudience":["f9f3","chunk-common"],"./Compliance/fields/TargetAudience.vue":["f9f3","chunk-common"],"./Compliance/fields/WorkfrontLink":["baf8","chunk-common"],"./Compliance/fields/WorkfrontLink.vue":["baf8","chunk-common"],"./DesignInformation/DesignInformation":["6d1a","chunk-common"],"./DesignInformation/DesignInformation.vue":["6d1a","chunk-common"],"./DesignInformation/fields/ImageRecommendations":["51be","chunk-common"],"./DesignInformation/fields/ImageRecommendations.vue":["51be","chunk-common"],"./DesignInformation/fields/RelatedImages":["82d6","chunk-common"],"./DesignInformation/fields/RelatedImages.vue":["82d6","chunk-common"],"./EditDefault":["9625","vendor","chunk-common"],"./EditDefault.vue":["9625","vendor","chunk-common"],"./GeneralInformation/GeneralInformation":["ff6a","chunk-common"],"./GeneralInformation/GeneralInformation.vue":["ff6a","chunk-common"],"./GeneralInformation/fields/ClinicalAdvances":["8f0a","chunk-common"],"./GeneralInformation/fields/ClinicalAdvances.vue":["8f0a","chunk-common"],"./GeneralInformation/fields/DeliverableSFNumbers":["7fd3","chunk-common"],"./GeneralInformation/fields/DeliverableSFNumbers.vue":["7fd3","chunk-common"],"./GeneralInformation/fields/Partners":["a852","chunk-common"],"./GeneralInformation/fields/Partners.vue":["a852","chunk-common"],"./GeneralInformation/fields/PreviousSFBoxLink":["1700","chunk-common"],"./GeneralInformation/fields/PreviousSFBoxLink.vue":["1700","chunk-common"],"./GeneralInformation/fields/PreviousSFNumbers":["d708","chunk-common"],"./GeneralInformation/fields/PreviousSFNumbers.vue":["d708","chunk-common"],"./GeneralInformation/fields/ProductType":["ea69","chunk-common"],"./GeneralInformation/fields/ProductType.vue":["ea69","chunk-common"],"./GeneralInformation/fields/ProjectNumber":["3d56","chunk-common"],"./GeneralInformation/fields/ProjectNumber.vue":["3d56","chunk-common"],"./GeneralInformation/fields/RelatedTherapeuticAreaLeadSpecialty":["c2cb","chunk-common"],"./GeneralInformation/fields/RelatedTherapeuticAreaLeadSpecialty.vue":["c2cb","chunk-common"],"./GeneralInformation/fields/SelectSupporterAttribution":["0150","chunk-common"],"./GeneralInformation/fields/SelectSupporterAttribution.vue":["0150","chunk-common"],"./GeneralInformation/fields/Supporters":["dfee","chunk-common"],"./GeneralInformation/fields/Supporters.vue":["dfee","chunk-common"],"./GeneralInformation/fields/TherapeuticAreaLeadSpecialty":["d395","chunk-common"],"./GeneralInformation/fields/TherapeuticAreaLeadSpecialty.vue":["d395","chunk-common"],"./GeneralInformation/fields/WorkfrontLink":["1c42","chunk-common"],"./GeneralInformation/fields/WorkfrontLink.vue":["1c42","chunk-common"],"./GeneralInformation/fields/leadSpecialties":["16e4","chunk-common"],"./GeneralInformation/fields/leadSpecialties.js":["16e4","chunk-common"],"./HandoffNotes/HandoffNotes":["2c1d","chunk-common"],"./HandoffNotes/HandoffNotes.vue":["2c1d","chunk-common"],"./HandoffNotes/fields/AccreditationCompliance":["8159","chunk-common"],"./HandoffNotes/fields/AccreditationCompliance.vue":["8159","chunk-common"],"./HandoffNotes/fields/AudienceEngagement":["e748","chunk-common"],"./HandoffNotes/fields/AudienceEngagement.vue":["e748","chunk-common"],"./HandoffNotes/fields/CopyEditors":["8d77","chunk-common"],"./HandoffNotes/fields/CopyEditors.vue":["8d77","chunk-common"],"./HandoffNotes/fields/MedicalEducationDirectors":["167d","chunk-common"],"./HandoffNotes/fields/MedicalEducationDirectors.vue":["167d","chunk-common"],"./HandoffNotes/fields/ProductionStudio":["9dfe","chunk-common"],"./HandoffNotes/fields/ProductionStudio.vue":["9dfe","chunk-common"],"./Icd9Codes/Icd9Codes":["73dc","chunk-common"],"./Icd9Codes/Icd9Codes.vue":["73dc","chunk-common"],"./Icd9Codes/fields/Icd9Code":["fd25","chunk-common"],"./Icd9Codes/fields/Icd9Code.vue":["fd25","chunk-common"],"./LearningObjectives/LearningObjectives":["092d","chunk-common"],"./LearningObjectives/LearningObjectives.vue":["092d","chunk-common"],"./LearningObjectives/fields/EditObjective":["b53d","chunk-common"],"./LearningObjectives/fields/EditObjective.vue":["b53d","chunk-common"],"./LearningObjectives/fields/LearningObjective":["3406","chunk-common"],"./LearningObjectives/fields/LearningObjective.vue":["3406","chunk-common"],"./LocalPerspectives/LocalPerspectives":["bb85","chunk-common"],"./LocalPerspectives/LocalPerspectives.vue":["bb85","chunk-common"],"./LocalPerspectives/fields/ActivityAddons":["ba33","chunk-common"],"./LocalPerspectives/fields/ActivityAddons.vue":["ba33","chunk-common"],"./PartnerDetails/PartnerDetails":["cbc0","chunk-common"],"./PartnerDetails/PartnerDetails.vue":["cbc0","chunk-common"],"./PartnerDetails/fields/CopyrightStatement":["01e8","chunk-common"],"./PartnerDetails/fields/CopyrightStatement.vue":["01e8","chunk-common"],"./PartnerDetails/fields/PartnerLogoRequired":["6b61","chunk-common"],"./PartnerDetails/fields/PartnerLogoRequired.vue":["6b61","chunk-common"],"./PartnerDetails/fields/PartnerStatement":["c828","chunk-common"],"./PartnerDetails/fields/PartnerStatement.vue":["c828","chunk-common"],"./PollingQuestions/PollingQuestions":["7b47","chunk-common"],"./PollingQuestions/PollingQuestions.vue":["7b47","chunk-common"],"./Postcards/Postcards":["cde3","chunk-common"],"./Postcards/Postcards.vue":["cde3","chunk-common"],"./Postcards/fields/AdditionalComments":["2893","chunk-common"],"./Postcards/fields/AdditionalComments.vue":["2893","chunk-common"],"./Postcards/fields/Dimensions":["bbd0","chunk-common"],"./Postcards/fields/Dimensions.vue":["bbd0","chunk-common"],"./Postcards/fields/Quantity":["d6b8","chunk-common"],"./Postcards/fields/Quantity.vue":["d6b8","chunk-common"],"./Questions/Questions":["01f4","chunk-common"],"./Questions/Questions.vue":["01f4","chunk-common"],"./RelatedResources/RelatedResources":["3bce","chunk-common"],"./RelatedResources/RelatedResources.vue":["3bce","chunk-common"],"./RelatedResources/fields/ClinicalReferenceArticles":["3c2b","chunk-common"],"./RelatedResources/fields/ClinicalReferenceArticles.vue":["3c2b","chunk-common"],"./RelatedResources/fields/RelatedLinks":["ddba","chunk-common"],"./RelatedResources/fields/RelatedLinks.vue":["ddba","chunk-common"],"./RelatedResources/fields/SlideKits":["f2a7","chunk-common"],"./RelatedResources/fields/SlideKits.vue":["f2a7","chunk-common"],"./RenewalInformation/RenewalInformation":["e125","chunk-common"],"./RenewalInformation/RenewalInformation.vue":["e125","chunk-common"],"./RenewalInformation/fields/RenewalInformationField":["be2c","chunk-common"],"./RenewalInformation/fields/RenewalInformationField.vue":["be2c","chunk-common"],"./StagingEdits":["e44f","chunk-common"],"./StagingEdits.vue":["e44f","chunk-common"],"./SteeringCommittee/SteeringCommittee":["8bbe","chunk-common"],"./SteeringCommittee/SteeringCommittee.vue":["8bbe","chunk-common"],"./SteeringCommittee/fields/Contributor":["e92d","chunk-common"],"./SteeringCommittee/fields/Contributor.vue":["e92d","chunk-common"],"./TicketView/DesignInformation":["1e94","chunk-common"],"./TicketView/DesignInformation.vue":["1e94","chunk-common"],"./TicketView/GeneralInformation":["1e7f","chunk-common"],"./TicketView/GeneralInformation.vue":["1e7f","chunk-common"],"./TicketView/HandoffNotes":["5db8","chunk-common"],"./TicketView/HandoffNotes.vue":["5db8","chunk-common"],"./TicketView/PageDetails":["9932","chunk-common"],"./TicketView/PageDetails.vue":["9932","chunk-common"],"./TicketView/PartnerDetails":["6a14","chunk-common"],"./TicketView/PartnerDetails.vue":["6a14","chunk-common"]};function o(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(i)},o.id="8528",e.exports=o},a79c:function(e,n,t){}}]);