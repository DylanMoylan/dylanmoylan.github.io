(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2c7e8672"],{3092:function(e,t,s){"use strict";var n=s("fc4f"),i=s.n(n);i.a},"89c8":function(e,t,s){"use strict";var n=s("e427"),i=s.n(n);i.a},9678:function(e,t,s){},a790:function(e,t,s){"use strict";var n=s("9678"),i=s.n(n);i.a},d61c:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"q-pb-md"},[s("div",{staticClass:"q-mx-auto",staticStyle:{height:"75vh"}},[s("q-form",{ref:"myform",staticStyle:{height:"inherit",position:"relative"},attrs:{greedy:""},on:{"validation-error":e.logError}},[s("q-scroll-area",{ref:"scrollArea",staticClass:"q-pa-md q-mb-sm main-scroll-area",staticStyle:{height:"75vh","text-align":"center","background-color":"#f5f5f5"},attrs:{visible:""}},[s("router-view",{ref:"routerView"})],1)],1),e.segmentParams&&!e.isDroppedNotStaging?s("div",{staticClass:"q-py-sm row justify-center fixed-bottom",staticStyle:{"background-color":"white"}},[s("div",{style:{"margin-left":e.buttonLeftMargin+"px"}},[s("q-btn",{attrs:{type:"submit",label:"Submit",disable:e.localIsStale},on:{click:e.handleForm}},[e.localIsStale?s("q-tooltip",[e._v("\n                  Your browser's version is behind the public version. Please copy over any desired changes into the public version to enable submission.\n                ")]):e._e()],1),s("q-btn",{attrs:{label:"Save"},on:{click:e.saveProject}}),e.hasLocal?s("q-btn",{attrs:{label:e.localIsLoaded?"View public Version":"View Local Version"},on:{click:e.toggleVersion}}):e._e()],1)]):e._e()],1),s("q-dialog",{attrs:{value:e.viewComments},on:{input:e.toggleComments}},[s("comment-modal",{attrs:{comments:e.getFieldComments}})],1),s("q-dialog",{attrs:{value:e.viewFlags},on:{input:e.toggleFlags}},[s("flags-modal")],1)],1)},i=[],o=(s("8e6e"),s("8a81"),s("7f7f"),s("6762"),s("2fdb"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("a481"),s("c47a")),a=s.n(o),r=s("24e8"),c=s("2f62"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",[s("q-card-section",{staticClass:"row justify-center items-center"},[s("div",{staticClass:"text-h6"},[s("span",{staticClass:"text-weight-bold text-primary"},[e._v('"'+e._s(e.getLabel(this.activeComment.segmentName,this.activeComment.fieldName))+'"')]),e._v(" Comments\n        ")]),s("div",{staticClass:"text-h8"},[e.projectIsInStaging&&e.activeComment.commentIndex>1?s("span",{staticClass:"text-weight-bold text-negative"},[e._v("\n                  Warning: This is a duplicate field - any comments will not be visible after staging submission. You can leave comments on original field instead.\n              ")]):e._e()]),s("div",{staticClass:"col-auto"},[s("autocomplete-input",{ref:"commentInput",staticClass:"q-mr-sm",staticStyle:{"min-width":"350px"},attrs:{error:e.commentsUnacknowledged,autofocus:"","bottom-slots":"",label:"create"==e.submissionState?"Add New Comment":"Edit Comment",hint:"@username to message a specific user associated with this project",disable:e.commentsUnacknowledged,type:"text",keyupHandler:e.keyupHandler,keydownHandler:e.keydownHandler,inputHandler:e.checkAutocompleteMenu,clickHandler:function(e){e.stopPropagation()},menuItems:e.userOptions,menuItemsSelected:e.chosenUsers,menuModel:e.newUser.state,itemClickHandler:e.targetUser,menuContentStyle:"width: 350px",found:e.found}})],1),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{disable:e.commentsUnacknowledged,label:"submit"},on:{click:e.submitComment}})],1)]),e.comments.length>0?s("q-card-section",{staticClass:"q-mt-md",staticStyle:{"max-height":"400px"}},[e.commentsUnacknowledged?s("div",{staticClass:"row justify-end q-my-md"},[s("q-btn",{attrs:{icon:"markunread_mailbox",label:"Mark All As Read",size:"sm",color:"negative"},on:{click:e.markAllComments}})],1):e._e(),s("q-list",{attrs:{separator:""}},e._l(e.sortedComments,(function(t,n){return s("q-item",{key:n,staticClass:"comment wrap",class:e.hasUsername(t.text)?"text-black q-pa-sm":"",style:e.hasUsername(t.text)?"background-color:#ffe79d":""},[s("q-item-section",[s("q-item-label",[e._v(e._s(t.username))]),e.hasUsername(t.text)?s("q-item-label",{domProps:{innerHTML:e._s(e.hasUsernameText(t.text))}}):s("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.text))])],1),s("q-item-section",{attrs:{side:"",top:""}},[s("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.displayDate(t.dateCreated)))]),t.associatedUsers[e.username].acknowledged||t.username==e.username?e._e():s("q-btn",{staticClass:"q-mt-sm",attrs:{size:"sm",icon:"check",color:"primary",label:"Mark as Read"},on:{click:function(s){return e.preSetCommentStatus({index:n,username:e.username,text:t.text})}}})],1),s("div",{staticClass:"row"},[t.username===e.username?s("q-item-label",{attrs:{caption:""}},[s("q-btn",{attrs:{icon:"more_vert",dense:"",flat:""}},[s("q-menu",[s("q-list",[s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return e.setEditState(t.dateCreated,t.text)}}},[s("q-item-section",[e._v("Edit Comment")])],1),s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return e.findDeleteComment(t.dateCreated)}}},[s("q-item-section",[e._v("Delete Comment")])],1)],1)],1)],1)],1):e._e()],1)],1)})),1)],1):s("q-card-section",{staticClass:"row justify-center items-center q-mb-md"},[s("span",{staticClass:"text-italic"},[e._v("No comments to display")])])],1)},m=[],u=(s("20d6"),s("55dd"),s("4db1")),d=s.n(u),f=(s("7514"),s("4917"),s("6165")),g=s("2ef0"),h=s.n(g),p=s("2f60");function b(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function v(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?b(Object(s),!0).forEach((function(t){a()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var y={props:["comments"],mixins:[f["a"]],data:function(){return{newUser:{state:!1,completed:!1},found:null,submissionState:"create"}},components:{"autocomplete-input":p["a"]},computed:v({},Object(c["c"])("tickets",["activeTicket","fieldLabel","associatedUsers"]),{},Object(c["c"])("auth",["username","user","orgUsers"]),{},Object(c["d"])("tickets",["activeComment"]),{userOptions:function(){return Object.keys(this.orgUsers)},chosenUsers:function(){var e=this.$refs&&this.$refs.commentInput?this.$refs.commentInput.model:"";return e=e.match(/[@]([^ ])+/g)||[""],e.pop()},commentsUnacknowledged:function(){var e=this,t=this.comments||[];return!!t.find((function(t){return!1===t.associatedUsers[e.username].acknowledged}))},sortedComments:function(){var e=d()(this.comments);return e.sort((function(e,t){return t.dateCreated-e.dateCreated}))}}),methods:v({},Object(c["b"])("tickets",["setCommentStatus","addComment","deleteComment","updateComment"]),{},Object(c["b"])("flags",["markAsCompleted"]),{preSetCommentStatus:function(e){if(this.hasUsername(e.text)){var t=h.a.findIndex(this.comments,(function(t){return t.text==e.text}));e.index=t,this.markAsCompleted({comment:e.text,username:this.username}),this.setCommentStatus({index:e.index,username:e.username})}},hasUsername:function(e){return e.includes(this.username)},hasUsernameText:function(e){var t=e.match("@"+this.username)[0],s=e.replace(t,"");return this.hasUsername(e)?'<span class="text-negative">'.concat(t,"</span>").concat(s):e},findDeleteComment:function(e){var t=this.comments.findIndex((function(t){return t.dateCreated===e}));this.deleteComment(t)},setEditState:function(e,t){var s=this;console.log("comment: ",t),this.submissionState=e,this.$refs.commentInput.model=t,setTimeout((function(){s.$refs.commentInput.$el.querySelector("input").focus()}),700)},targetUser:function(e,t){this.$refs.commentInput.model="@".concat(this.userOptions[t]," "),this.newUser.state=!1,this.newUser.completed=!0},checkAutocompleteMenu:function(){var e=this,t=!1;"@"===this.$refs.commentInput.model[0]&&!1===this.newUser.completed?(this.newUser.state=!0,this.$refs.commentInput.model.length>1&&this.userOptions.forEach((function(s,n){var i=s.toLowerCase(),o=e.$refs.commentInput.model.substring(1).toLowerCase();i===o?(e.found=n,t=!0):i.includes(o)&&!t&&(e.found=n,t=!0)}))):this.newUser.state&&(this.newUser.state=!1),t||(this.found=null)},markAllComments:function(){var e=this;this.comments.filter((function(t,s){return t.associatedUsers[e.username].acknowledged||(e.hasUsername(t.text)&&e.markAsCompleted({comment:t.text,username:e.username}),e.setCommentStatus({index:s,username:e.username})),!t.associatedUsers[e.username].acknowledged}))},submitComment:function(){var e=this;if(this.newUser.state=!1,this.$refs.commentInput.model.length>0){if("create"!=this.submissionState){var t=this.comments.findIndex((function(t){return t.dateCreated===e.submissionState}));this.updateComment({index:t,comment:this.$refs.commentInput.model}),this.trNotify("Comment Updated"),this.submissionState="create"}else{var s={};Object.keys(this.associatedUsers).forEach((function(t){e.associatedUsers[t]===e.username?s[e.associatedUsers[t]]={acknowledged:!0,seen:!0,dateRead:Date.now(),dateSeen:Date.now()}:s[e.associatedUsers[t]]={acknowledged:!1,seen:!1,dateRead:0,dateSeen:0}}));var n={user:this.user,username:this.username,text:this.$refs.commentInput.model,dateCreated:Date.now(),associatedUsers:s};this.addComment(n);var i=this.getLabel(this.activeComment.segmentName,this.activeComment.fieldName);this.trNotify("New comment added to ".concat(i))}this.$refs.commentInput.model="",this.newUser.completed=!1}},keydownHandler:function(e){9===e.which&&e.preventDefault()},keyupHandler:function(e){""!==this.$refs.commentInput.model&&"@"!==this.$refs.commentInput.model||(this.newUser.completed=!1),13===e.which&&(e.stopPropagation(),this.submitComment(),this.newUser.state=!1),40===e.which&&(this.found<this.userOptions.length?this.found++:this.found=0),38===e.which&&(this.found>0?this.found--:this.found=this.userOptions.length),27===e.which&&(this.$refs.commentInput.model=""),9===e.which&&this.found&&this.targetUser(e,this.found)}})},k=y,w=s("2877"),C=Object(w["a"])(k,l,m,!1,null,null,null),j=C.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",[s("q-card-section",{staticClass:"q-ma-md",staticStyle:{"text-align":"center"}},[e.findFlag?s("div",{staticClass:"text-h6"},[e._v("Edit/Remove "),s("span",{staticClass:"text-weight bold text-primary"},[e._v(e._s(e.getLabel(this.activeFlag.segmentName,this.activeFlag.fieldName)))]),e._v(" Flag\n          ")]):s("div",{staticClass:"text-h6"},[e._v("Mark "),s("span",{staticClass:"text-weight-bold text-primary"},[e._v(e._s(e.getLabel(this.activeFlag.segmentName,this.activeFlag.fieldName)))]),e._v(" For Review")]),s("div",{staticClass:"col-auto"},[s("q-input",{staticClass:"q-mr-sm q-mb-md",staticStyle:{"min-width":"350px"},attrs:{label:"Add a description for this flag (optional)",type:"text"},on:{keyup:function(t){return t.stopPropagation(),function(t){return e.descriptionKeyupHandler(t)}(t)}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),s("div",{staticClass:"col-auto"},[s("q-select",{attrs:{options:e.urgencyOptions,label:"Urgency / Actions"},model:{value:e.urgency,callback:function(t){e.urgency=t},expression:"urgency"}})],1),s("q-card-section",{staticClass:"row justify-center items-center"},["assignUser"!=e.urgency.value?s("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{"no-caps":"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"For all users",value:!0},{label:"Choose which users to flag",value:!1}]},model:{value:e.flagAll,callback:function(t){e.flagAll=t},expression:"flagAll"}}):e._e()],1),e.flagAll?e._e():s("q-card-section",{staticClass:"row justify-center items-center q-pa-none q-mt-md"},[s("user-select",{attrs:{userOptions:e.userOptions,userRoles:e.flagRoles,selectedUsers:e.flaggedUsers,selectedRoles:e.assocRoles,showRoles:"assignUser"!=e.urgency.value},on:{input:e.updateFlaggedUsers}})],1)],1),s("q-card-section",{staticClass:"float-right"},[s("q-btn",{staticClass:"q-mr-sm",attrs:{label:"Cancel"},on:{click:e.toggleFlags}}),s("q-btn",{staticClass:"q-mr-sm",attrs:{label:e.findFlag?"Update":"Submit"},on:{click:e.preSubmitFlag}}),e.findFlag?s("q-btn",{staticClass:"bg-negative text-white",attrs:{label:"Remove Flag"},on:{click:e.submitRemoveFlag}}):e._e()],1)],1)},P=[],q=(s("3846"),s("81d4"));function x(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?x(Object(s),!0).forEach((function(t){a()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var $={mixins:[f["a"]],components:{"user-select":q["a"]},data:function(){return{flagAll:!0,roleSelect:null,assocRoles:[],description:"",urgency:"",urgencyOptions:[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"},{label:"Assign User To This Field",value:"assignUser"}],flaggedUsers:[],userInput:"",flagID:null,flagRoles:[],newUser:{state:!1,completed:!1},found:null}},watch:{urgency:function(e){"undefined"!=typeof e&&"assignUser"==e.value&&(this.flagAll=!1)}},computed:S({},Object(c["c"])("flags",["activeFlag","flags"]),{},Object(c["c"])("tickets",["associatedUsers","ticketNumber"]),{},Object(c["c"])("auth",["user","username","orgUsers"]),{},Object(c["d"])("tickets",["workingProject"]),{findFlag:function(){var e=this,t=_.filter(this.flags,(function(t,s){if(t.fieldKey===e.activeFlag.fieldKey&&t.fieldName===e.activeFlag.fieldName&&"none"!=t.urgency)return e.flagID=s,t}));return t.length>0&&t[0]},userOptions:function(){var e=this;return Object.keys(this.orgUsers).filter((function(t){return t!=e.username}))}}),methods:S({},Object(c["b"])("flags",["toggleFlags","submitFlag","updateFlag","removeFlag"]),{updateFlaggedUsers:function(e){this.flaggedUsers=e.selectedUsersLocal,this.flagRoles=e.selectedRolesLocal},submitRemoveFlag:function(){this.removeFlag(this.flagID),this.trNotify("Flag disabled"),this.toggleFlags()},descriptionKeyupHandler:function(e){27===e.which&&(this.description="")},preSubmitFlag:function(){var e={},t={};this.flagAll?t={all:"all"}:(this.roleSelect&&this.roleSelect.length>0&&this.roleSelect.forEach((function(e){t[e.value]=e.value})),this.flaggedUsers&&this.flaggedUsers.length>0&&this.flaggedUsers.forEach((function(t){e[t]={seen:!1,dateSeen:"",completed:!1,dateCompleted:""}})));var s={author:{firstName:this.user.profile.firstName,lastName:this.user.profile.lastName,userName:this.username},flagDescription:this.description,urgency:this.urgency.value||"low",associatedUsers:e,associatedRoles:t,flagDate:Date.now(),projectID:this.workingProject,ticketID:this.ticketNumber,flagType:"field"},n=this.getLabel(this.activeFlag.segmentName,this.activeFlag.fieldName);if(this.findFlag){s.flagDate=this.findFlag.flagDate;var i={id:this.flagID,flag:s};this.updateFlag(i),this.trNotify("".concat(n," flag updated."))}else this.submitFlag(s),this.trNotify("New flag added to ".concat(n));this.toggleFlags()}}),mounted:function(){var e=this;this.flagRoles=Object.keys(this.labels.role).map((function(t){return{label:e.labels.role[t],value:t}}));var t=this.findFlag;if(t){if(this.description=t.flagDescription,t.associatedRoles.hasOwnProperty("all")||!Object.keys(t.associatedRoles).length&&!Object.keys(t.associatedUsers).length)this.flagAll=!0;else{this.flagAll=!1;var s=Object.keys(t.associatedUsers);s.forEach((function(t){e.flaggedUsers.push(t)}));var n=Object.keys(t.associatedRoles);if(n.length>0){var i=[];n.forEach((function(t){i.push(e.flagRoles.find((function(e){return e.value===t})))})),i.length>0&&(this.roleSelect=i)}}this.urgency=t.urgency}}},U=$,I=(s("a790"),Object(w["a"])(U,O,P,!1,null,"054fec7e",null)),N=I.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-dialog",{ref:"dialog",staticStyle:{position:"relative"},on:{hide:e.onDialogHide}},[s("q-card",{staticClass:"q-dialog-plugin"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[e._v(e._s(e.title))]),s("div",{staticClass:"text-subtitle",domProps:{innerHTML:e._s(e.message)}})]),e.isValidated?e._e():s("q-card-section",[s("q-scroll-area",{staticStyle:{height:"400px"}},[s("div",{staticClass:"shadow-1 q-ma-sm q-pa-sm"},e._l(e.validationFilter,(function(t,n){return s("div",{key:n,staticClass:"q-my-sm row justify-between"},[s("q-btn",{staticClass:"q-my-sm",attrs:{color:"negative",dense:"",flat:""},on:{click:function(t){return e.sendRoute(n)}},scopedSlots:e._u([{key:"default",fn:function(){return[s("div",{staticClass:"text-left"},[s("div",{staticClass:"text-black text-bold"},[e._v("\n                    "+e._s(e.getLabel(n,null))+":\n                  ")]),e._l(t,(function(t,i){return s("div",{key:i},[e._v("\n                    "+e._s(e.getLabel(n,i))+"\n                  ")])}))],2)]},proxy:!0}],null,!0)})],1)})),0)])],1),e.isValidated?[e.projectIsInStaging?[s("q-card-section",[s("div",{staticClass:"text-bold"},[e._v("\n            Please Enter any special notes to Video Post Production about this\n            staging edit:\n          ")]),s("q-editor",{staticStyle:{"text-align":"left"},model:{value:e.notesToVPP,callback:function(t){e.notesToVPP=t},expression:"notesToVPP"}})],1),s("q-card-section",[s("div",{staticClass:"text-bold"},[e._v("\n            Please Enter any special notes to Online Production about this\n            staging edit:\n          ")]),s("q-editor",{staticStyle:{"text-align":"left"},model:{value:e.notesToOP,callback:function(t){e.notesToOP=t},expression:"notesToOP"}})],1)]:[s("q-card-section",[s("div",{staticClass:"text-bold"},[e._v("\n            Please Enter a comment to describe your changes or as a note to\n            other contributors:\n          ")]),s("q-editor",{staticStyle:{"text-align":"left"},model:{value:e.submissionComment,callback:function(t){e.submissionComment=t},expression:"submissionComment"}})],1)]]:e._e(),s("q-card-actions",{staticClass:"row justify-end"},[s("div",{staticClass:"row"},[s("q-checkbox",{staticClass:"q-mb-sm q-mr-sm",attrs:{label:"I am done working (unlock project)"},model:{value:e.doneWorking,callback:function(t){e.doneWorking=t},expression:"doneWorking"}})],1),s("div",{staticClass:"row"},[s("q-btn",{staticClass:"q-mr-sm",attrs:{color:"primary",label:"Cancel"},on:{click:e.onCancelClick}}),s("div",[s("q-btn",{staticClass:"q-mr-sm",attrs:{color:"primary",label:"Submit",disable:!e.isValidated||!e.hasPermission("edit")},on:{click:function(t){return e.onOKClick({submissionType:"submit",submissionComment:e.submissionComment,doneWorking:e.doneWorking})}}}),e.isValidated?e._e():s("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("Please address all problems to enable submission.")])],1),s("div",[e.canDrop&&!e.projectIsInStaging?s("q-btn",{staticClass:"q-mr-sm",attrs:{color:"negative",label:"Drop",disable:!e.isComplianceComplete},on:{click:function(t){return e.onOKClick({submissionType:"drop",submissionComment:e.submissionComment,doneWorking:e.doneWorking})}}}):e._e(),e.isComplianceComplete?e._e():s("q-tooltip",{attrs:{"content-class":"text-white bg-primary text-body1"}},[e._v("\n              The compliance review form for this project hasn't been completed yet.\n            ")])],1)],1)])],2)],1)},D=[],T=s("f262");function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function V(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(Object(s),!0).forEach((function(t){a()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var L={props:["validated","currentUser","projectRoles"],mixins:[f["a"],T["a"]],components:{"q-dialog":r["a"]},data:function(){return{submissionComment:"",notesToVPP:"",notesToOP:"",doneWorking:!1}},methods:{sendRoute:function(e){this.$route.name===e?this.onCancelClick():this.$router.push({name:e})},show:function(){this.$refs.dialog.show()},hide:function(){this.$refs.dialog.hide()},onDialogHide:function(){this.$emit("hide")},onOKClick:function(e){this.projectIsInStaging&&(e={submissionType:"stagingEdit",notesToOP:this.notesToOP,notesToVPP:this.notesToVPP,doneWorking:this.doneWorking}),"drop"==e.submissionType&&(e.validated=this.isValidated),this.$emit("ok",e),this.hide()},onCancelClick:function(){this.hide()}},computed:V({},Object(c["c"])("tickets",["projectIsInStaging","getFieldEnabled","isComplianceComplete"]),{canDrop:function(){return this.projectRoles[this.currentUser.role].includes("drop")},isValidated:function(){return!(Object.keys(this.validationFilter).length>0)},validationFilter:function(){var e=this,t={};return Object.keys(this.validated).forEach((function(s){var n=_.pickBy(e.validated[s],(function(t,n){return!1===t&&e.getFieldEnabled({fieldName:n,segmentName:s})}));Object.keys(n).length&&(t[s]=n)})),t},validationFilterList:function(){return Object.keys(this.validationFilter)},message:function(){return this.isValidated?"Prodticket version will be incremented and stored in database.":'There were problems found in the following sections of the ProdTicket. Please correct any issues or mark the field as incomplete to continue. <br /><br /><span class="text-bold">(To mark a field as "not required", uncheck the field in the tree navigator in the menu.)</span>'},title:function(){return this.isValidated?"Submit Prodticket?":"Submission Error:"}})},R=L,A=(s("89c8"),Object(w["a"])(R,F,D,!1,null,"5fbe1be6",null)),W=A.exports;function H(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function M(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?H(Object(s),!0).forEach((function(t){a()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var K={mixins:[T["a"],f["a"]],data:function(){return{ticket:{},segmentParams:null,validated:{},buttonLeftMargin:400}},methods:M({},Object(c["b"])("tickets",["saveWorkingProject","submitWorkingProject","toggleComments","createNewTicket","createStagingEdit","setWorkingProject","clearLocalStorage"]),{},Object(c["b"])("flags",["toggleFlags"]),{toggleVersion:function(){this.$root.$emit("updateKey"),this.$root.$emit("dismissLocalBanner"),this.localIsLoaded?(this.setWorkingProject({localChange:this.getProjectID.replace("Local-","")}),this.trNotify("Now Viewing Database Version")):(this.setWorkingProject({localChange:"Local-"+this.getProjectID}),this.trNotify("Now Viewing Local Version"))},handleForm:function(){this.submit()},logError:function(e){console.log(e)},saveProject:function(){var e=this;this.$root.$emit("getRefs"),this.$q.dialog({title:"Save working project?",message:"If you delete cache/cookies saved changes will be lost."}).onOk((function(){e.saveWorkingProject(),e.trNotify("Changes saved.")})).onCancel((function(){}))},submit:function(){var e=this;this.validated[this.segmentName]={},Object.keys(this.$refs.routerView.$refs).forEach((function(t){e.validated[e.segmentName][e.$refs.routerView.$refs[t].fieldName]=!0,Object.keys(e.$refs.routerView.$refs[t].$refs).forEach((function(s){e.$refs.routerView.$refs[t].$refs[s].rules&&(e.$refs.routerView.$refs[t].$refs[s].validate()||(e.validated[e.segmentName][e.$refs.routerView.$refs[t].fieldName]=!1))}))})),this.$refs.myform.validate().then((function(t){e.$q.dialog({component:W,parent:e,validated:e.validated,currentUser:e.user,projectRoles:e.roles}).onOk((function(t){"drop"===t.submissionType?t.validated?e.createNewTicket("drop").then((function(t){t.ok?e.trNotify("Project Successfully Dropped."):e.trNotify(t.message)})):e.$q.dialog({title:"Warning",message:"There may be issues with the current ticket. Continue with drop anyway?",cancel:!0,persistent:!0}).onOk((function(){e.createNewTicket("drop"),e.submitWorkingProject({submissionComment:t.submissionComment,user:e.username,submitType:"drop"}),e.trNotify("Project Successfully Dropped.")})):e.projectIsInStaging?e.createStagingEdit({notesToVPP:t.notesToVPP,notesToOP:t.notesToOP,user:e.username}).then((function(t){t.ok?(e.trNotify("Edit Submitted"),e.$q.dialog({title:"Project Submitted",message:"Changes saved to database. Ticket version incremented."}),setTimeout((function(){e.$root.$emit("stagingSubmission"),e.$router.push({name:"stagingRound"})}),200)):(e.trNotify("Submission failed: No changes found.","negative"),e.$q.dialog({title:"Submission failed",message:"There was an issue submitting your changes. Verify that you have a working internet connection and that valid changes have been made to the project."}))})):e.submitWorkingProject({submissionComment:t.submissionComment,user:e.username,submitType:"edit"}).then((function(t){if(t.ok)return e.trNotify("Project Submitted"),e.$q.dialog({title:"Project Submitted",message:t.message}),e.createNewTicket();e.trNotify(t.message,"negative"),e.$q.dialog({title:"Submission failed",message:t.message})})).then((function(s){s.ok?t.doneWorking?(e.$router.push({name:"edit"}),e.setWorkingProject({oldID:e.getProjectID})):e.hasLocal&&e.clearLocalStorage():e.$q.dialog({title:"Submission failed",message:s.message})})).catch((function(e){return console.log("error: ",e)}))})).onCancel((function(){console.log("cancelled")}))}))},reset:function(){this.$refs.form.resetValidation()}}),computed:M({},Object(c["c"])("tickets",["getWorkingProject","activeTicket","viewComments","getFieldComments","projectIsInStaging","projectIsDropped","activeTicket","getProjectID","hasLocal","localIsLoaded","localIsStale"]),{},Object(c["d"])("tickets",["workingProject","projects"]),{},Object(c["d"])("flags",["viewFlags"]),{},Object(c["c"])("auth",["user","roles","username"]),{isDroppedNotStaging:function(){return this.getWorkingProject.dropped&&!this.projectIsInStaging}}),components:{"comment-modal":j,"flags-modal":N,"q-dialog":r["a"],"submit-dialogue":W},beforeMount:function(){var e=this;this.$root.$on("segmentName",(function(t){e.segmentName=t})),this.$root.$on("validate",(function(t){e.validated[t.segmentName]=t.validations}))},mounted:function(){var e=this;this.$root.$emit("scrollArea",this.$refs.scrollArea),this.$root.$on("drawerChange",(function(t){e.buttonLeftMargin=t?400:0})),this.$root.$on("setScroll",(function(t){e.$refs.scrollArea.setScrollPosition(t,300)})),this.$route.path.includes("edit")&&"edit"!=this.$route.name?this.segmentParams=!0:this.segmentParams=!1},watch:{$route:function(e,t){"edit"!=e.name?this.segmentParams=!0:this.segmentParams=!1}}},z=K,B=(s("3092"),Object(w["a"])(z,n,i,!1,null,null,null));t["default"]=B.exports},e427:function(e,t,s){},fc4f:function(e,t,s){}}]);