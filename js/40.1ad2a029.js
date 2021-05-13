(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{4751:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ticketLoaded?n("q-page",{staticClass:"q-px-sm"},[n("q-scroll-area",{ref:"ticketScroll",staticStyle:{height:"80vh",width:"100%"},attrs:{visible:""}},[n("q-select",{staticClass:"q-ma-md",staticStyle:{width:"350px"},attrs:{filled:"","stack-label":"",options:t.stagingRounds,label:"Select Staging Round"},model:{value:t.selectedRound,callback:function(e){t.selectedRound=e},expression:"selectedRound"}}),n("q-card",{staticClass:"my-card q-pa-md q-ma-sm q-mr-md"},[n("notes-table",{attrs:{round:t.stagingRoundData[t.selectedRound]}})],1)],1)],1):t._e()},s=[],r=(n("8e6e"),n("8a81"),n("f751"),n("a481"),n("4917"),n("6762"),n("2fdb"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),c=n.n(r),i=n("2f62"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-table",{attrs:{data:t.rowData,title:"Submission Notes",columns:t.columns,"row-key":"round",dense:""},scopedSlots:t._u([{key:"body-cell-notesToOP",fn:function(e){return[e.row.notesToOP.length?[n("td",{staticClass:"cursor-pointer",on:{click:function(n){return t.showFullText("OP",e.row.notesToOP)}}},[n("span",{staticClass:"text-primary"},[n("q-icon",{staticClass:"q-mr-sm text-body2",attrs:{name:"launch"}}),n("span",[t._v(t._s(t.abbreviate(e.row.notesToOP)))])],1)])]:[n("td",[n("span",{staticClass:"text-italic"},[t._v("None")])])]]}},{key:"body-cell-notesToVPP",fn:function(e){return[e.row.notesToVPP.length?[n("td",{staticClass:"cursor-pointer",on:{click:function(n){return t.showFullText("VPP",e.row.notesToVPP)}}},[n("span",{staticClass:"text-primary"},[n("q-icon",{staticClass:"q-mr-sm text-body2",attrs:{name:"launch"}}),n("span",[t._v(t._s(t.abbreviate(e.row.notesToVPP)))])],1)])]:[n("td",[n("span",{staticClass:"text-italic"},[t._v("None")])])]]}}])})},u=[],l=(n("7f7f"),n("6165")),d={props:["round"],mixins:[l["a"]],data:function(){var t=this;return{columns:[{name:"round",label:"Staging Edit Version",align:"left",field:function(t){return t.round.includes("_")?t.round.replace("_","."):"".concat(t.round," (Final Value)")}},{name:"name",label:"Who?",align:"left",field:function(t){return t.name}},{name:"when",label:"When?",align:"left",field:function(e){return t.displayDate(e.when)}},{name:"notesToOP",label:"Notes to OP",align:"left",field:function(t){return t.notesToOP}},{name:"notesToVPP",label:"Notes to VPP",align:"left",field:function(t){return t.notesToVPP}}]}},computed:{rowData:function(){var t=this;return Object.keys(this.round).map((function(e){var n=t.round[e];return{round:e,name:n.user,when:n.submissionDate,notesToOP:n.notesToOP,notesToVPP:n.notesToVPP}}))}},methods:{showFullText:function(t,e){this.$q.dialog({title:"Notes To ".concat(t),transitionHide:"jump-down",transitionShow:"jump-up",message:e})}}},p=d,f=n("2877"),h=Object(f["a"])(p,a,u,!1,null,null,null),b=h.exports,g=n("2ef0"),m=n.n(g);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={data:function(){return{ticketLoaded:!1,project:{},selectedRound:null}},components:{"notes-table":b},computed:j(j(j({},Object(i["c"])("tickets",["getProjects"])),Object(i["c"])("auth",["username"])),{},{stagingRounds:function(){return Object.keys(this.project.stagingEdits).filter((function(t){return!t.includes("_")}))},stagingRoundData:function(){var t=this;return this.stagingRounds.reduce((function(e,n){return e[n]=Object.keys(t.project.stagingEdits).filter((function(t){return t.includes(n)})).reduce((function(e,n){return e[n]=t.project.stagingEdits[n],e}),{}),e}),{})},previousVersionNumber:function(){if("S1"==this.selectedRound)return this.project.droppedTicket;var t=this.selectedRound.match(/[0-9]+/);return"S".concat(t-1)},selectedRoundData:function(){return this.stagingRoundData[this.selectedRound][this.selectedRound].changes},previousVersionData:function(){var t=m.a.cloneDeep(this.project.tickets[this.previousVersionNumber]);if(this.previousVersionNumber.includes("S")){var e=parseInt(this.previousVersionNumber.replace("S",""));do{t=Object.assign(t,this.stagingEdits["S".concat(e)].changes),e++}while(e<this.selectedRound)}return t}}),methods:j({},Object(i["b"])("tickets",["setFetchedProject","fetchProjects"])),beforeMount:function(){var t=this,e=this.$route.query.projectID;e&&(Object.keys(this.getProjects).length?this.getProjects[e].latestRound?(this.ticketLoaded=!0,this.project=this.getProjects[e],this.selectedRound=this.project.latestRound.replace(/_.+/g,"")):this.setFetchedProject(e).then((function(n){t.ticketLoaded=n,t.project=t.getProjects[e],t.selectedRound=t.project.latestRound.replace(/_.+/g,"")})):this.fetchProjects(this.username).then((function(n){t.setFetchedProject(e).then((function(n){t.ticketLoaded=n,t.project=t.getProjects[e],t.selectedRound=t.project.latestRound.replace(/_.+/g,"")}))})))}},w=O,v=Object(f["a"])(w,o,s,!1,null,null,null);e["default"]=v.exports}}]);