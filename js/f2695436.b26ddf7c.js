(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f2695436"],{"2e49":function(t,e,a){},"3c29":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-scroll-area",{staticStyle:{height:"80vh",width:"100%"},attrs:{visible:""}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-center text-h4 "},[t._v("Welcome to Ticket Runner")]),a("div",{staticClass:"row q-gutter-lg justify-center"},[a("q-card",{staticClass:"my-card q-ma-xl",staticStyle:{background:"linear-gradient( #35a2ff 0%, #014a88 100%)"}},[a("router-link",{attrs:{to:"/new"}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{staticClass:"home-icon",attrs:{name:"create"}}),a("h5",{staticClass:"text-white"},[t._v("New Project")])],1)],1)],1),a("q-card",{staticClass:"my-card q-ma-xl",staticStyle:{background:"linear-gradient( #8e9eab 0%, #eef2f3 100%)"}},[a("router-link",{attrs:{to:"/edit"}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{staticClass:"home-icon",attrs:{name:"list"}}),a("h5",{staticClass:"text-white"},[t._v("\n              "+t._s(Object.keys(t.myProjects).length?"Project List":"Choose Project")+"\n            ")])],1)],1)],1),t.filteredUsers?a("q-card",{staticClass:"my-card q-ma-xl",staticStyle:{background:"linear-gradient( #134e5e 0%, #71b280 100%)"}},[a("router-link",{attrs:{to:"/edit/compliance"}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{staticClass:"home-icon",attrs:{name:"check_circle"}}),a("h5",{staticClass:"text-white"},[t._v("Compliance Review")])],1)],1)],1):t._e(),a("q-card",{staticClass:"my-card q-ma-xl",staticStyle:{background:"linear-gradient( #283048 0%, #859398 100%)"}},[a("router-link",{attrs:{to:"/settings"}},[a("q-card-section",{staticClass:"text-center"},[a("q-icon",{staticClass:"home-icon",attrs:{name:"settings"}}),a("h5",{staticClass:"text-white"},[t._v("Settings and Tools")])],1)],1)],1)],1)]),a("activity-feed")],1)},s=[],r=(a("8e6e"),a("8a81"),a("7514"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("6762"),a("c47a")),c=a.n(r),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"0 10vw 10px 10vw"}},[t.user&&t.activeComments?a("q-table",{attrs:{title:"Recent Activity",data:t.rowData,columns:t.columns,"row-key":"name",filter:t.filter},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"text-primary text-bold text-h5"},[t._v("Recent Activity")])]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{staticStyle:{cursor:"pointer"},attrs:{props:e},on:{click:function(a){return t.setActivityItem(e.row.activityData)}}},[a("q-td",{key:"activity"},[a("q-icon",{staticClass:"q-mr-sm text-primary",attrs:{name:e.row.activityData.flagType?"flag":"comment"}}),t._v("\n          "+t._s(e.row.activity)+"\n        ")],1),a("q-td",{key:"time"},[t._v("\n          "+t._s(t.displayDate(e.row.time,"hh:mma ddd, MM/DD"))+"\n        ")]),a("q-td",{key:"projectID"},[t._v("\n          "+t._s(e.row.projectID)+"\n        ")]),a("q-td",{key:"field"},[t._v("\n          "+t._s(e.row.field)+"\n        ")])],1)]}}],null,!1,585932206)}):t._e(),a("q-dialog",{model:{value:t.viewDetails,callback:function(e){t.viewDetails=e},expression:"viewDetails"}},[a("activity-feed-details",{attrs:{activityItem:t.activityItem},on:{closeModal:function(e){t.viewDetails=!1}}})],1)],1)},o=[],l=(a("55dd"),a("4db1")),m=a.n(l),u=a("2f62"),d=a("6165"),f=a("24e8"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",[a("q-card-section",{staticClass:"bg-primary text-white text-h5 text-bold row justify-center items-center"},[a("q-icon",{staticStyle:{"font-size":"1.5em","margin-right":"10px"},attrs:{name:"info_outline"}}),t._v(" Details\n    ")],1),t.activityItem.comment?[a("q-card-section",{staticClass:"q-ma-md"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Comment:")]),a("span",[t._v(t._s(t.activityItem.comment))])]),a("q-separator"),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Created by:")]),a("span",[t._v(t._s(t.activityItem.author))])]),a("q-separator"),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Date:")]),a("span",[t._v(t._s(t.displayDate(t.activityItem.dateCreated)))])]),a("q-separator"),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Project SF#:")]),a("span",[t._v(t._s(t.activityItem.pointers.projectID))])]),a("q-separator"),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Field:")]),a("span",[t._v(t._s(t.getLabel(t.activityItem.pointers.segmentName,t.activityItem.pointers.fieldName)))])]),a("q-separator")],1)]:[a("q-card-section",{staticClass:"q-ma-md"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md",class:t.activityItem.flagDescription.length?"":"text-italic"},[t._v("Description:")]),a("span",[t._v("\n                "+t._s(t.activityItem.flagDescription.length?t.activityItem.flagDescription:"No description provided.")+"\n              ")])]),a("q-separator"),"assignUser"!=t.activityItem.urgency?[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Urgency:")]),a("span",[t._v(t._s(t.activityItem.urgency))])]),a("q-separator")]:t._e(),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Created by:")]),a("span",[t._v(t._s(t.activityItem.author.firstName+" "+t.activityItem.author.lastName))])]),a("q-separator"),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Date:")]),a("span",[t._v(t._s(t.displayDate(t.activityItem.flagDate)))])]),a("q-separator"),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Project SF#:")]),a("span",[t._v(t._s(t.activityItem.projectID))])]),a("q-separator"),a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-primary q-mr-md"},[t._v("Field:")]),a("span",[t._v(t._s(t.getLabel(t.activityItem.segmentName,t.activityItem.fieldName)))])]),a("q-separator")],2)],a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{label:"close"},on:{click:t.closeModal}}),a("q-btn",{staticClass:"bg-primary text-white",attrs:{label:"View Project List"},on:{click:t.goToProjects}})],1)],2)},y=[],v={mixins:[d["a"]],props:["activityItem"],methods:{goToProjects:function(){this.$router.push({name:"edit"})},closeModal:function(){this.$emit("closeModal")}}},b=v,g=a("2877"),h=Object(g["a"])(b,p,y,!1,null,null,null),j=h.exports;function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function q(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _={mixins:[d["a"]],components:{"q-dialog":f["a"],"activity-feed-details":j},data:function(){var t=this;return{viewDetails:!1,activityItem:null,filter:"",columns:[{name:"activity",required:!0,label:"Activity",align:"left",field:function(t){return t.activity}},{name:"time",required:!0,label:"When",align:"left",field:function(t){return t.time},format:function(e){return t.displayDate(e)},sortable:!0},{name:"projectID",required:!0,label:"SF Number",align:"left",field:function(t){return t.projectID},sortable:!0},{name:"field",required:!0,label:"Field",align:"left",field:function(t){return t.field},sortable:!0}]}},methods:q({},Object(u["b"])("flags",["fetchFlags"]),{setActivityItem:function(t){this.activityItem=t||null,this.viewDetails=!this.viewDetails}}),computed:q({},Object(u["c"])("auth",["user","username"]),{},Object(u["c"])("flags",["userFlags"]),{},Object(u["e"])("flags",["flagsFetched"]),{rowData:function(){var t=this,e=Object.keys(this.activeComments).map((function(e){return t.activeComments[e]})),a=[].concat(m()(e),m()(this.userFlags.filter((function(e){return e.author.userName!=t.username}))));return a.map((function(e){var a;return a=e.flagType?"assignUser"==e.urgency?"".concat(e.author.firstName," ").concat(e.author.lastName," assigned you to a field."):"".concat(e.author.firstName," ").concat(e.author.lastName," added you to a flag"):"".concat(e.author," mentioned you in a comment"),{activity:a,activityData:e,projectID:e.projectID||e.pointers.projectID,field:e.flagType?t.getLabel(e.segmentName,e.fieldName):t.getLabel(e.pointers.segmentName,e.pointers.fieldName),time:e.dateCreated||e.flagDate}})).sort((function(t,e){return e.time-t.time}))},activeComments:function(){return this.user.comments}}),beforeMount:function(){this.flagsFetched||this.fetchFlags()}},C=_,O=Object(g["a"])(C,n,o,!1,null,null,null),x=O.exports;function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var P=["admin","cpe","cme","teamLead"],k={name:"HomePage",mixins:[d["a"]],components:{"activity-feed":x},data:function(){return{}},computed:I({},Object(u["c"])("auth",["user"]),{},Object(u["c"])("tickets",["getWorkingProject","getProjects"]),{filteredUsers:function(){return!!this.user&&P.includes(this.user.role)},myProjects:function(){var t=this;return Object.keys(this.getProjects).reduce((function(e,a){return t.getProjects[a].associatedUsers&&t.getProjects[a].associatedUsers.find((function(e){return e==t.username}))&&(e[a]=t.getProjects[a]),e}),{})}})},N=k,S=(a("f4b7"),Object(g["a"])(N,i,s,!1,null,"6447031b",null));e["default"]=S.exports},f4b7:function(t,e,a){"use strict";var i=a("2e49"),s=a.n(i);s.a}}]);