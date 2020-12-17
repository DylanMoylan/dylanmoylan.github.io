(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"7b47":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col"},[i("div",{staticClass:"text-h4 text-center"},[e._v(e._s(e.title))]),"pollingQuestions"==e.segmentName?[i("field-options",{attrs:{repeatable:"",segmentName:e.segmentName,fieldName:"question"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("polling-question",{ref:"question",attrs:{fieldDataIndex:e.dataIndex}})]}}],null,!1,3708112186)})]:[i("q-btn",{staticClass:"q-my-md bg-primary text-white",attrs:{label:"Add New Question",disable:e.fieldDisabled},on:{click:e.toggleQuestion}}),i("question-list",{attrs:{segmentName:e.segmentName}}),i("q-dialog",{attrs:{value:e.viewQuestion},on:{input:e.toggleQuestion}},[i("question")],1)]],2)},s=[],o=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("9523")),a=i.n(o),r=i("24e8"),l=i("4525"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"full-width"},[i("q-stepper",{attrs:{vertical:"",color:"primary",animated:"","header-nav":""},scopedSlots:e._u([{key:"message",fn:function(){return[1===e.step?i("q-banner",{staticClass:"bg-primary text-white q-px-lg"},[e._v("Select Question Grouping & Question Number")]):2===e.step?i("q-banner",{staticClass:"bg-primary text-white q-px-lg"},[e._v("Select Question Type")]):3===e.step?i("q-banner",{staticClass:"bg-primary text-white q-px-lg"},[e._v("Question Configuration")]):5===e.step?i("q-banner",{staticClass:"bg-primary text-white q-px-lg"},[e._v("Learning Objectives Mapping")]):i("q-banner",{staticClass:"bg-primary text-white q-px-lg"},[e._v("Question Content")])]},proxy:!0}]),model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[i("q-step",{attrs:{name:1,title:"Select Question Grouping & Question Number",caption:"Required",icon:"settings",done:e.step>1,"header-nav":e.step>1}},[i("div",{staticClass:"q-mt-lg"},[i("div",{staticClass:"q-gutter-sm row justify-start q-mb-md"},[i("q-option-group",{attrs:{type:"radio",options:e.questionGroupOptions,dense:""},model:{value:e.questionGroup,callback:function(t){e.questionGroup=t},expression:"questionGroup"}})],1),i("div",{staticClass:"q-gutter-sm q-mt-md row"},[""!=e.questionGroup?i("q-select",{staticStyle:{width:"350px"},attrs:{label:"Question Number",filled:"","stack-label":"",options:e.positionOptions},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}}):e._e()],1)]),i("q-stepper-navigation",[i("q-btn",{attrs:{color:"primary",label:"Continue",disable:""===e.questionGroup},on:{click:function(t){e.step=2}}})],1)],1),i("q-step",{attrs:{name:2,title:"Select Question Type",caption:"Optional",icon:"create_new_folder",done:e.step>2,"header-nav":e.step>2}},[i("div",[i("div",{staticClass:"q-gutter-sm col justify-start q-mb-md"},e._l(e.questionTypeOptions,(function(t){return i("div",{key:"qt"+t.val},[i("q-radio",{attrs:{dense:"",val:t.val,label:t.label,disable:t.disable},model:{value:e.questionType,callback:function(t){e.questionType=t},expression:"questionType"}}),i("q-icon",{staticClass:"cursor-pointer q-ml-sm",attrs:{name:"help_outline"}},[i("q-tooltip",[i("div",[e._v("Example")]),i("img",{style:t.style,attrs:{src:"statics/"+t.url+".png"}})])],1),"matrixQ"==e.questionType&&"matrixQ"==t.val?i("div",[i("div",{staticClass:"q-gutter-sm"},[i("q-checkbox",{attrs:{label:"Likert Scale"},model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}})],1)]):e._e()],1)})),0)]),i("q-stepper-navigation",[i("q-btn",{attrs:{color:e.questionType.length?"primary":"secondary",label:e.questionType.length?"Continue":"Skip (Optional)"},on:{click:e.setQuestionType}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=1}}})],1)],1),i("q-step",{attrs:{name:3,title:"Question Configuration",icon:"assignment",done:e.step>3,"header-nav":e.step>3}},[i("div",{staticClass:"col"},[i("q-option-group",{staticStyle:{"text-align":"left"},attrs:{options:e.configurationOptions,type:"checkbox"},model:{value:e.qConfiguration,callback:function(t){e.qConfiguration=t},expression:"qConfiguration"}}),"openEnded"!==e.questionType?i("div",{staticClass:"q-gutter-sm q-mt-md row"},[i("q-input",{staticClass:"q-my-sm",attrs:{filled:"","stack-label":"",label:"Number of Answer Choices",type:"number"},model:{value:e.numberOfChoices,callback:function(t){e.numberOfChoices=e._n(t)},expression:"numberOfChoices"}})],1):e._e()],1),i("q-stepper-navigation",[i("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:e.setChoices}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=2}}})],1)],1),i("q-step",{attrs:{name:4,title:"Question Content",icon:"add_comment",done:e.step>4,"header-nav":e.step>4}},[i("div",[i("div",[i("div",{staticClass:"q-ma-sm",staticStyle:{"font-size":"larger"}},[e._v("Introduction:")]),i("custom-editor",{ref:"intro_ref",staticClass:"q-my-sm",attrs:{value:e.intro},on:{input:function(t){return e.intro=t}}})],1),i("div",{staticClass:"q-ma-sm",staticStyle:{"font-size":"larger"}},[i("span",[e._v("Question:")]),0===this.trimmedQuestion.length?i("span",{staticClass:"text-negative text-right q-ml-sm"},[e._v("*Required Field")]):e._e()]),i("custom-editor",{ref:"question_ref",attrs:{value:e.question},on:{input:function(t){return e.question=t}}}),"openEnded"!==e.questionType&&"standard"===e.questionType?i("div",{staticClass:"question-choices-group"},[i("div",[i("span",[e._v("Answer Choices:")]),i("span",[e._v("(Correct answers require an answer explanation)")])]),e._l(e.choices,(function(t,n){return i("div",{key:"choice"+n},[i("div",[i("q-expansion-item",{staticClass:"choiceOption",attrs:{value:t.isCorrect},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col-md-10 col-xs-12"},[i("q-input",{ref:"choices"+n,refInFor:!0,staticClass:"q-my-sm col",attrs:{filled:"",autogrow:"","stack-label":"",label:"Question Choice"},on:{click:function(e){e.stopPropagation()}},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"choice.value"}})],1),i("div",{staticClass:"col-md-2 col-xs-12"},[i("q-checkbox",{staticClass:"text-caption",attrs:{val:n,label:"Correct"},on:{click:function(e){e.stopPropagation()}},model:{value:t.isCorrect,callback:function(i){e.$set(t,"isCorrect",i)},expression:"choice.isCorrect"}})],1)])]},proxy:!0}],null,!0)},[i("div",{staticClass:"q-pa-sm text-bold"},[e._v("Choice #"+e._s(parseInt(n)+1)+" Answer Explanation:")]),i("custom-editor",{attrs:{value:t.answerExplanation},on:{input:function(e){return t.answerExplanation=e}}})],1)],1)])}))],2):e._e(),"matrixQ"===e.questionType?i("div",{staticClass:"question-choices-group"},[i("div",[i("span",[e._v("Sub Questions")])]),e._l(e.choices,(function(t,n){return i("div",{key:"choice"+n},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col-md-10 col-xs-12"},[i("q-input",{ref:"choices"+n,refInFor:!0,staticClass:"q-my-sm col",attrs:{autogrow:"",filled:"","stack-label":""},on:{click:function(e){e.stopPropagation()}},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"choice.value"}})],1)])])})),i("div",{staticClass:"question-choices-group"},[i("div",[i("span",[e._v("Answers")])]),e._l(e.agreeDisagree,(function(t,n){return i("div",{key:"choice"+n},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col-md-10 col-xs-12"},[i("q-input",{ref:"choices"+n,refInFor:!0,staticClass:"q-my-sm col",attrs:{filled:"","stack-label":""},on:{click:function(e){e.stopPropagation()}},model:{value:t.label,callback:function(i){e.$set(t,"label",i)},expression:"choice.label"}})],1)])])}))],2)],2):e._e(),"demo"===e.questionType?i("div",{staticClass:"question-choices-group"},[i("div",[i("span",[e._v("Answer Choices")])]),e._l(e.choices,(function(t,n){return i("div",{key:"choice"+n},[i("div",{staticClass:"row items-center"},[i("div",{staticClass:"col-md-10 col-xs-12"},[i("q-input",{ref:"choices"+n,refInFor:!0,staticClass:"q-my-sm col",attrs:{autogrow:"",filled:"","stack-label":""},on:{click:function(e){e.stopPropagation()}},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"choice.value"}})],1)])])}))],2):e._e(),"confidence"===e.questionType?i("div",{staticClass:"question-choices-group"},[i("div",[i("span",[e._v("Answer Choices:")])]),e._l(e.confidentNotConfident,(function(t,n){return i("div",{key:"choice"+n},[i("div",[i("q-input",{ref:"choices"+n,refInFor:!0,staticClass:"q-my-sm col",attrs:{autogrow:"",filled:"","stack-label":"",label:"Question Choice"},on:{click:function(e){e.stopPropagation()}},model:{value:t.label,callback:function(i){e.$set(t,"label",i)},expression:"choice.label"}})],1)])}))],2):e._e()],1),i("q-stepper-navigation",[!e.hasCorrectChoice&&(e.questionType.length&&"openEnded"!==e.questionType&&"confidence"!==e.questionType&&"matrixQ"!==e.questionType&&"caPolling"!==e.questionGroup&&"demo"!==e.questionType||"matrixQ"==e.questionType&&!1===e.agree)?i("div",{staticClass:"text-negative text-right"},[e._v("Please specify the correct answer choice.")]):e._e(),e.noAnswerChoices&&e.questionType.length&&"openEnded"!==e.questionType&&"confidence"!==e.questionType&&"demo"!==e.questionType?i("div",{staticClass:"text-negative text-right"},[e._v("Please provide at least one answer choice.")]):e._e(),e.questionCanHaveObjectives?i("q-btn",{attrs:{color:"primary",disable:e.formInvalid,label:"Continue"},on:{click:function(t){e.step=5}}}):i("div",{staticStyle:{display:"inline"}},[i("q-btn",{attrs:{color:"primary",label:"create"===e.mode?"Finish":"Update",disable:e.formInvalid},on:{click:function(t){"create"===e.mode?e.addQuestion():e.questionToUpdate()}}}),e.formInvalid?i("q-tooltip",{attrs:{"content-class":"bg-negative"}},[e._v("Please fix issues in the form to continue.")]):e._e()],1),i("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=3}}}),i("q-btn",{attrs:{flat:"",label:"Reset",color:"negative"},on:{click:e.reset}})],1)],1),e.questionCanHaveObjectives?i("q-step",{directives:[{name:"show",rawName:"v-show",value:e.questionCanHaveObjectives,expression:"questionCanHaveObjectives"}],attrs:{name:5,title:"Learning Objectives Mapping",caption:"Optional",icon:"add_comment",done:e.step>5,"header-nav":e.step>5}},[i("div",[e._v("Select a learning objective to associate with this question (optional):")]),Object.keys(e.learningObjectiveOptions).length?i("q-list",{staticClass:"q-mt-md",attrs:{bordered:"",separator:""}},e._l(e.learningObjectiveOptions,(function(t,n){return i("q-item",{key:"LO"+n,attrs:{clickable:""},on:{click:function(t){return e.setLearningObjective(n)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-checkbox",{attrs:{label:"Select",value:e.learningObjective==n},on:{input:function(t){return e.setLearningObjective(n)}}})],1),i("q-item-section",[i("div",{domProps:{innerHTML:e._s(e.renderObjective(t.objectives))}})])],1)})),1):e._e(),i("q-stepper-navigation",[i("div",{staticStyle:{display:"inline"}},[i("q-btn",{attrs:{color:"primary",label:"create"===e.mode?"Finish":"Update",disable:e.formInvalid},on:{click:function(t){"create"===e.mode?e.addQuestion():e.questionToUpdate()}}}),e.formInvalid?i("q-tooltip",{attrs:{"content-class":"bg-negative"}},[e._v("Please fix issues in the form to continue.")]):e._e()],1),i("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=4}}}),i("q-btn",{attrs:{flat:"",label:"Reset",color:"negative"},on:{click:e.reset}})],1)],1):e._e()],1)],1)},u=[],d=(i("7514"),i("448a")),p=i.n(d),h=(i("6762"),i("2fdb"),i("2ef0")),g=i.n(h),f=i("2b0e"),m=i("2f62"),v=i("6165"),b=i("eed6");function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var C={mixins:[v["a"]],components:{"custom-editor":b["a"]},data:function(){return{step:1,questionGroup:"",questionID:null,mode:"create",nativeQuestionText:"",position:1,positionOptions:[1],questionType:"",qConfiguration:[],numberOfChoices:5,question:"",intro:"",agree:!0,choices:{},learningObjective:"",agreeDisagree:[{label:"Strongly Agree",value:"stronglyAgree"},{label:"Agree",value:"agree"},{label:"No Opinion",value:"noOpinion"},{label:"Disagree",value:"disagree"},{label:"Strongly Disagree",value:"stonglyDisagree"}],confidentNotConfident:[{label:"1 - Not Confident",value:"notConfident"},{label:"2 - Slightly Confident",value:"slightlyConfident"},{label:"3 - Moderately Confident",value:"moderatelyConfident"},{label:"4 - Mostly Confident",value:"mostlyConfident"},{label:"5 - Very  Confident",value:"veryConfident"}]}},methods:y(y({},Object(m["b"])("tickets",["createQuestion","toggleQuestion","updateQuestion","setSegmentData"])),{},{setQuestionType:function(){this.questionType.length||(this.questionType="standard"),this.step=3},setLearningObjective:function(e){this.learningObjective=this.learningObjective!=e?e:""},renderObjective:function(e){return Object.keys(e).map((function(t){return"".concat(t,": ").concat(e[t])})).join("<br />")},questionToUpdate:function(){var e=g.a.pickBy(this.choices,(function(e){return e.value.length})),t={questionGroup:this.questionGroup,position:this.position,standard:"standard"===this.questionType,matrixQ:"matrixQ"===this.questionType,demo:"demo"===this.questionType,openEnded:"openEnded"===this.questionType,confidence:"confidence"===this.questionType,required:this.qConfiguration.includes("required"),showPoll:this.qConfiguration.includes("showPoll"),showRightWrong:this.qConfiguration.includes("showRightWrong"),multipleAnswers:this.qConfiguration.includes("multipleAnswers"),introduction:this.intro,question:this.trimmedQuestion,correctChoices:this.correctChoices,id:this.questionID,answerChoices:e,agreeDisagree:"matrixQ"==this.questionType?this.agreeDisagree.map((function(e){return e.label})):this.confidentNotConfident.map((function(e){return e.label}))};this.updateQuestion({question:t,questionID:this.questionID}),this.learningObjective.length&&this.updateLearningObjective(),this.trNotify("Question Updated."),this.toggleQuestion()},addQuestion:function(){var e=g.a.pickBy(this.choices,(function(e){return e.value.length})),t={questionGroup:this.questionGroup,position:this.position,standard:"standard"===this.questionType,matrixQ:"matrixQ"===this.questionType,demo:"demo"===this.questionType,confidence:"confidence"===this.questionType,openEnded:"openEnded"===this.questionType,required:this.qConfiguration.includes("required"),showPoll:this.qConfiguration.includes("showPoll"),showRightWrong:this.qConfiguration.includes("showRightWrong"),multipleAnswers:this.qConfiguration.includes("multipleAnswers"),introduction:this.intro,question:this.trimmedQuestion,correctChoices:this.correctChoices,answerChoices:e,agreeDisagree:"matrixQ"==this.questionType?this.agreeDisagree.map((function(e){return e.label})):this.confidentNotConfident.map((function(e){return e.label}))};this.createQuestion(t),!this.learningObjective.length||this.learningObjectiveOptions[this.learningObjective].questionNumber&&this.learningObjectiveOptions[this.learningObjective].questionNumber.includes(this.position)||this.updateLearningObjective(),this.reset(),this.toggleQuestion(),this.trNotify("New Question Created")},updateLearningObjective:function(){var e=this;Object.keys(this.learningObjectiveOptions).filter((function(t){return t!=e.learningObjective})).forEach((function(t){null!=e.learningObjectiveOptions[t].questionNumber&&e.setSegmentData({segmentName:"learningObjectives",fieldName:"learningObjective",updatedInput:{fieldDataIndex:t,inputBinding:"questionNumber"},newValue:g.a.difference(e.learningObjectiveOptions[t].questionNumber,[e.position])})})),this.setSegmentData({segmentName:"learningObjectives",fieldName:"learningObjective",updatedInput:{inputBinding:"questionNumber",fieldDataIndex:this.learningObjective},newValue:this.learningObjectiveOptions[this.learningObjective].questionNumber?[].concat(p()(this.learningObjectiveOptions[this.learningObjective].questionNumber),[this.position]):[this.position]})},reset:function(){this.step=1,this.position=1,this.positionOptions=[1],this.questionGroup="",this.questionType="",this.questionID=null,this.qConfiguration=[],this.numberOfChoices="5",this.question="",this.intro="",this.choices={},this.answerExplanation=""},setChoices:function(){if(this.numberOfChoices<Object.keys(this.choices).length){this.choices={};for(var e=0;e<parseInt(this.numberOfChoices);e++)f["a"].set(this.choices,e,{value:"",answerExplanation:"",isCorrect:!1,choiceNumber:e})}else for(var t=0;t<parseInt(this.numberOfChoices);t++)this.choices[t]||f["a"].set(this.choices,t,{value:"",answerExplanation:"",isCorrect:!1,choiceNumber:t});this.step=4}}),computed:y(y({},Object(m["c"])("tickets",["getQuestion","viewQuestion","getQuestions","getFieldData","getProductType"])),{},{questionGroupOptions:function(){var e=this,t={curbside:["cme","interactivity","lla"],spotlight:[],advances:"all",advancesRenewal:"all",demo:"all"};return[{label:"LLA Question Pairs",value:"lla"},{label:"Include in Pre-Assessment Only",value:"pre"},{label:"Include in Post-Assessment Only",value:"post"},{label:"CME Post Test",value:"cme"},{label:"Clinical Advances Polling",value:"caPolling"},{label:"IME Evaluation",value:"evalIME"},{label:"IME Test Your Knowledge",value:"tykIME"},{label:"Patient Education Test Your Knowledge",value:"tykPatEd"},{label:"Patient Education Survey",value:"surveyPatEd"},{label:"Patient Education Demographic",value:"demoPatEd"},{label:"Interactivity",value:"interactivity"}].filter((function(i){return"all"==t[e.getProductType]||t[e.getProductType].includes(i.value)}))},questionTypeOptions:function(){return[{label:"Standard",val:"standard",url:"standard",style:"width:500px",disable:!1},{label:"Matrix",val:"matrixQ",url:"matrix",style:"max-height:350px",disable:!["evalIME","tykIME","tykPatEd","interactivity"].includes(this.questionGroup)},{label:"Demographic",val:"demo",url:"demo",style:"max-height:300px",disable:["cme","caPolling","tykPatEd","interactivity"].includes(this.questionGroup)},{label:"Confidence",val:"confidence",url:"confidence",style:"max-height:300px",disable:["cme","caPolling","tykPatEd","interactivity"].includes(this.questionGroup)},{label:"Open Ended",val:"openEnded",url:"open-ended",style:"max-height:300px",disable:["lla","cme","caPolling","tykPatEd","demoPatEd"].includes(this.questionGroup)}]},configurationOptions:function(){return[{label:"Required",value:"required",disable:"caPolling"==this.questionGroup},{label:"Show Poll",value:"showPoll",disable:!1},{label:"Show Right/Wrong",value:"showRightWrong",disable:["caPolling","evalIME","demoPatEd","surveyPatEd"].includes(this.questionGroup)},{label:"Multiple Answers",value:"multipleAnswers",disable:!0}]},questionCanHaveObjectives:function(){return!this.getProductType.includes("advances")&&("lla"==this.questionGroup||"cme"==this.questionGroup||"caPolling"==this.questionGroup)&&Object.keys(this.learningObjectiveOptions).length},hasCorrectChoice:function(){return this.correctChoices.length>0},correctChoices:function(){return g.a.filter(this.choices,(function(e){return!0===e.isCorrect}))},noAnswerChoices:function(){if("openEnded"!==this.questionType){var e=g.a.pickBy(this.choices,(function(e){return e.value.length>0}));return 0===Object.keys(e).length}return!1},answerExplanationInvalid:function(){if(this.hasCorrectChoice){var e=!1;return this.correctChoices.forEach((function(t){t.answerExplanation.length>0||(e=!0)})),e}return!1},trimmedQuestion:function(){return this.question.trim()},formInvalid:function(){return"openEnded"===this.questionType||"confidence"===this.questionType?0===this.trimmedQuestion.length:this.answerExplanationInvalid||0===this.trimmedQuestion.length||this.noAnswerChoices},learningObjectiveOptions:function(){return g.a.pickBy(this.getFieldData({fieldName:"learningObjective",segmentName:"learningObjectives"}),(function(e){return Object.keys(e).length}))}}),watch:{questionGroup:function(e){var t=this;if(Object.keys(this.getQuestions).length){var i=Object.keys(this.getQuestions).filter((function(i){return t.getQuestions[i].questionGroup===e}));if(i){for(var n=[],s=0;s<=i.length;s++)n.push(s+1);this.positionOptions=n,"create"===this.mode&&(this.position=this.positionOptions.length)}else this.positionOptions=[1],this.position=1}}},mounted:function(){var e=this;if(this.getQuestion.question){if(this.questionID=this.getQuestion.questionID,this.mode="edit",this.step=4,this.getQuestion.question.standard&&(this.questionType="standard"),this.getQuestion.question.matrixQ&&(this.questionType="matrixQ",this.agreeDisagree=this.getQuestion.question.agreeDisagree.map((function(e){return{label:e}}))),this.getQuestion.question.demo&&(this.questionType="demo"),this.getQuestion.question.confidence&&(this.questionType="confidence",this.confidentNotConfident=this.getQuestion.question.agreeDisagree.map((function(e){return{label:e}}))),this.getQuestion.question.openEnded&&(this.questionType="openEnded"),this.getQuestion.question.required&&this.qConfiguration.push("required"),this.getQuestion.question.showPoll&&this.qConfiguration.push("showPoll"),this.getQuestion.question.showRightWrong&&this.qConfiguration.push("showRightWrong"),this.getQuestion.question.multipleAnswers&&this.qConfiguration.push("multipleAnswers"),this.questionGroup=this.getQuestion.question.questionGroup,Object.keys(this.getQuestions).length){var t=Object.keys(this.getQuestions).filter((function(t){return e.getQuestions[t].questionGroup===e.questionGroup}));if(t){for(var i=[],n=0;n<=t.length;n++)i.push(n+1);this.positionOptions=i}}this.position=this.getQuestion.question.position,this.intro=this.getQuestion.question.introduction,this.question=this.getQuestion.question.question,this.numberOfChoices=Object.keys(this.getQuestion.question.answerChoices).length,this.choices=g.a.cloneDeep(this.getQuestion.question.answerChoices);var s=Object.keys(this.learningObjectiveOptions);if(s.length&&"lla"==this.questionGroup){var o=s.find((function(t){return e.learningObjectiveOptions[t].questionNumber.includes(e.position)}));o&&(this.learningObjective=o)}}}},O=C,w=i("2877"),x=Object(w["a"])(O,c,u,!1,null,null,null),j=x.exports,k=i("cbfa"),_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return Object.keys(e.groups).length>0?i("div",{staticClass:"q-mx-auto",staticStyle:{"max-width":"75rem"}},[e._l(e.groups,(function(t){return i("div",{key:"group"+t.groupName,staticClass:"q-ma-md q-pa-lg bg-white",staticStyle:{"border-radius":"3px",border:"1px solid #e0e0e0"}},[i("div",{staticClass:"text-h6 text-left"},[e._v(e._s(e.qGroup[t.groupName])+":")]),e._l(t.group,(function(t,n){return i("div",{key:"question"+n,staticClass:"row items-center"},[Object.keys(t).length>0?[e.s0?e._e():i("div",[e.isFlagged(t.id)?i("q-btn",{class:e.urgencyColor(t.id),attrs:{round:"",flat:"",dense:"",fab:"",icon:"info"},on:{click:function(i){e.toggleFlagInfo(t.id.substring(0,1))}}},[i("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("This field has been marked for review")])],1):e._e()],1),i("q-expansion-item",{class:n%2===0?"bg-primary q-my-md text-white col":"bg-secondary q-my-md text-white col",attrs:{"expand-icon-class":"text-white",value:!!e.s0},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",[i("span",[i("q-btn",{attrs:{icon:"arrow_upward",dense:"",disabled:!e.fieldEnabled},on:{click:function(i){return i.stopPropagation(),e.changeQuestionPosition({questionID:t.id,position:t.position-1,question:t})}}})],1),i("span",{staticClass:"q-mr-md"},[i("q-btn",{attrs:{icon:"arrow_downward",dense:"",disabled:!e.fieldEnabled},on:{click:function(i){return i.stopPropagation(),e.changeQuestionPosition({questionID:t.id,position:t.position+1,question:t})}}})],1),i("span",[e._v("Question #"+e._s(t.position))])]),i("q-item-section",{staticClass:"text-center",domProps:{innerHTML:e._s(e.abbreviate(e.stripHTML(t.question)))}})]},proxy:!0}],null,!0)},[i("q-card",{staticClass:"text-left text-black",staticStyle:{border:"1px solid #e0e0e0"}},[e.s0?e._e():i("q-card-actions",{staticClass:"q-pb-md",attrs:{align:"right"}},[i("q-btn",{attrs:{color:"negative",label:"Remove Question",disable:!e.fieldEnabled},on:{click:function(i){return e.removeQuestion(t.id)}}}),i("q-btn",{attrs:{color:"primary",label:"Edit Question",disable:!e.fieldEnabled},on:{click:function(i){return e.editQuestion(t,n)}}})],1),i("q-card-section",[i("span",{staticClass:"text-primary"},[e._v("Introduction: ")]),""!==t.introduction?i("span",{domProps:{innerHTML:e._s(t.introduction)}}):i("span",{staticClass:"text-italic"},[e._v("None")])]),i("q-separator"),i("q-card-section",[i("span",{staticClass:"text-primary"},[e._v("Question: ")]),""!==t.question?i("span",{domProps:{innerHTML:e._s(t.question)}}):i("span",{staticClass:"text-italic"},[e._v("None")])]),i("q-separator"),i("q-card-section",[i("span",{staticClass:"text-primary"},[e._v("Question Type: ")]),i("span",[e._v(e._s(e.getQuestionType(t)))])]),i("q-separator"),i("q-card-section",[i("span",{staticClass:"text-primary"},[e._v("Details: ")]),t.required?i("span",[i("q-icon",{staticClass:"text-primary",attrs:{name:"check"}}),e._v("Required\n              ")],1):e._e(),t.showPoll?i("span",[i("q-icon",{staticClass:"text-primary",attrs:{name:"check"}}),e._v("Show Poll\n              ")],1):e._e(),t.showRightWrong?i("span",[i("q-icon",{staticClass:"text-primary",attrs:{name:"check"}}),e._v("Show Right/Wrong\n              ")],1):e._e(),t.multipleAnswers?i("span",[i("q-icon",{staticClass:"text-primary",attrs:{name:"check"}}),e._v("Multiple Answers\n              ")],1):e._e(),e.hasNoDetails(t)?i("span",{staticClass:"text-italic"},[e._v("None")]):e._e()]),i("q-separator"),t.matrixQ||t.confidence?i("q-card-section",[i("span",{staticClass:"text-primary"},[e._v("Sub Questions")]),Object.keys(t.answerChoices).length<=1&&""===t.answerChoices[0]?i("span",{staticClass:"text-italic"},[e._v("None")]):i("q-list",{attrs:{bordered:"",separator:""}},e._l(t.answerChoices,(function(n,s){return i("q-item",{key:"aChoice"+s,staticClass:"q-my-md",staticStyle:{"flex-wrap":"wrap"},attrs:{dense:""}},[i("q-item-section",{staticClass:"col-12"},[i("span",[i("span",{staticClass:"text-negative"},[e._v("Answer: ")]),i("span",{staticClass:"text-primary"},[e._v(e._s(n.value))])])]),e._l(t.agreeDisagree,(function(n,s){return i("q-item-section",{key:"xx"+s,staticClass:"col-12",staticStyle:{"margin-left":"0"}},[i("div",{staticClass:"row justify-between items-center"},[i("div",[i("span",{staticClass:"text-primary"},[e._v(e._s(t.matrixQ?"Matrix Answer":"Confidence Answer")+": ")]),i("span",{domProps:{innerHTML:e._s(n)}})])])])}))],2)})),1)],1):e._e(),t.openEnded||t.matrixQ||t.confidence?e._e():i("q-card-section",[i("span",{staticClass:"text-primary"},[e._v("Answer Choices:")]),Object.keys(t.answerChoices).length<=1&&""===t.answerChoices[0]?i("span",{staticClass:"text-italic"},[e._v("None")]):i("q-list",{attrs:{bordered:"",separator:""}},e._l(t.answerChoices,(function(t,n){return i("q-item",{key:"aChoice"+n,staticClass:"q-my-md",staticStyle:{"flex-wrap":"wrap"},attrs:{dense:""}},[i("q-item-section",{staticClass:"col-12"},[i("span",[i("span",{staticClass:"text-negative"},[e._v("Answer:")]),i("span",{staticClass:"text-primary"},[e._v(e._s(t.value))])])]),t.isCorrect?i("q-item-section",{staticClass:"col-12",staticStyle:{"margin-left":"0"}},[i("div",{staticClass:"row justify-between items-center q-my-md"},[i("div",[i("span",{staticClass:"text-primary"},[e._v("Answer Explanation:")]),i("div",{staticClass:"q-my-md",domProps:{innerHTML:e._s(t.answerExplanation)}})]),i("span",{staticClass:"bg-primary text-white q-pa-sm"},[i("q-icon",{staticClass:"q-mx-sm",attrs:{name:"check"}}),e._v("Correct Answer\n                      ")],1)])]):e._e()],1)})),1)],1),e.findLearningObjective(t.position)?i("q-card-section",[i("span",{staticClass:"text-primary"},[e._v("Learning Objectives:")]),i("div",{domProps:{innerHTML:e._s(e.findLearningObjective(t.position))}})]):e._e()],1)],1),e.s0?e._e():i("div",{staticClass:"col-2"},[i("q-btn",{attrs:{"icon-right":"chat",color:e.commentUnacknowledged(t.id)?"warning":"","text-color":e.commentUnacknowledged(t.id)?"white":"primary",label:e.getDuplicateComments(t.id).length>0?e.getDuplicateComments(t.id).length:"+"},on:{click:function(i){return i.stopPropagation(),e.toggleWithSlotData("comments",t.id)}}},[i("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("View and Add comments for this field")])],1),e.hasPermission("create")?i("q-btn",{staticClass:"q-ml-sm",attrs:{icon:"flag","text-color":"primary"},on:{click:function(i){return i.stopPropagation(),e.toggleWithSlotData("flags",t.id)}}},[i("q-tooltip",{attrs:{"content-class":"bg-primary"}},[e._v("Flag this field for review")])],1):e._e()],1)]:e._e()],2)}))],2)})),i("q-dialog",{attrs:{value:e.viewFlagInfo,position:"top"},on:{input:e.toggleFlagInfo}},[i("flag-info",{attrs:{flags:e.currentFlag,username:e.username,flagID:e.flagID}})],1)],2):e._e()},Q=[],P=i("f262"),D=i("8746"),I=i("8e89");function E(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?E(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var N={mixins:[v["a"],P["a"],D["a"]],props:["segmentName","s0","stagingFieldData"],data:function(){return{comments:[],viewFlagInfo:!1,flagID:null,currentFlag:{},fieldName:"question",qGroup:{lla:"LLA Question Pairs",pre:"Include In Pre Assessment Only",post:"Include In Post Assessment Only",cme:"CME Post Test",caPolling:"Clinical Advances Polling",evalIME:"IME Evaluation",tykIME:"IME Test Your Knowledge",tykPatEd:"Patient Education Test Your Knowledge",surveyPatEd:"Patient Education Survey",demoPatEd:"Patient Education Demographic",interactivity:"Interactivity Questions"},displayOptions:[{label:"Required",value:"required"},{label:"Show Poll",value:"showPoll"},{label:"Show Right/Wrong",value:"showRightWrong"},{label:"Multiple Answers",value:"multipleAnswers"}]}},components:{"flag-info":I["a"],"q-dialog":r["a"]},methods:T(T({},Object(m["b"])("tickets",["toggleQuestion","deleteQuestion","changeQuestionPosition"])),{},{editQuestion:function(e){this.toggleQuestion({question:e,questionID:e.id})},removeQuestion:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Delete this question?",cancel:!0,persistent:!0}).onOk((function(){t.deleteQuestion(e),t.trNotify("Question Successfully Removed","negative")})).onCancel((function(){}))},getQuestionType:function(e){return e.standard?"Standard":e.matrixQ?"Matrix Question":e.demo?"Demographic Question":e.confidence?"Confidence Question":"None"},getOptions:function(e){var t=[];return e.required&&t.push("required"),e.showPoll&&t.push("showPoll"),e.showRightWrong&&t.push("showRightWrong"),e.multipleAnswers&&t.push("multipleAnswers"),t},findLearningObjective:function(e){var t,i=this,n=Object.keys(this.learningObjectives).find((function(t){return i.learningObjectives[t].questionNumber&&i.learningObjectives[t].questionNumber.includes(e)}));return n&&(t=this.learningObjectives[n],t=Object.keys(t.objectives).map((function(e){return"<li>"+e+": <br />"+t.objectives[e]+"</li>"})),t="<ul>"+t.join("")+"</ul>"),t}}),computed:{learningObjectives:function(){return this.getProductType.includes("advances")?[]:this.getFieldData({fieldName:"learningObjective",segmentName:"learningObjectives"})},hasNoDetails:function(e){return function(e){return!(e.required||e.showPoll||e.showRightWrong||e.multipleAnswers)}},groups:function(){var e={},t=["lla","pre","post","cme","caPolling","evalIME","tykIME","tykPatEd","surveyPatEd","demoPatEd","interactivity"],i=[],n=this.fieldData,s=function(t,i){var n;n=i?t[i]:t,e.hasOwnProperty(n.questionGroup)?e[n.questionGroup].push(n):e[n.questionGroup]=[n]};return n.questionGroup?s(n):Object.keys(n).forEach((function(e){s(n,e)})),Object.keys(e).forEach((function(t){e[t].sort((function(e,t){return e.position-t.position}))})),t.forEach((function(t){e[t]&&e[t].length>0&&i.push({groupName:t,group:e[t]})})),i}},mounted:function(){var e=this;this.$root.$on("showFlag",(function(t){"question"===t.fieldName&&e.toggleFlagInfo(t.id.substring(0,1))}))}},S=N,A=Object(w["a"])(S,_,Q,!1,null,null,null),G=A.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"text-left"},[i("q-select",{staticStyle:{width:"350px"},attrs:{value:e.position,options:e.positions,label:"Question Position",filled:"","stack-label":"",disable:e.fieldDisabled},on:{input:function(t){return e.changeQuestionPosition({position:t,question:e.fieldData[e.fieldDataIndex],questionID:e.fieldDataIndex})}}}),i("q-checkbox",{staticClass:"q-mb-md",attrs:{label:"Include Introduction",disable:e.fieldDisabled},model:{value:e.hasIntroduction,callback:function(t){e.hasIntroduction=t},expression:"hasIntroduction"}}),e.hasIntroduction?i("div",[i("div",{staticClass:"text-bold q-my-sm"},[e._v("Introduction: ")]),i("custom-editor",{ref:"introduction",attrs:{value:e.fieldData[e.fieldDataIndex].introduction||"",rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"introduction"},!0)}}})],1):e._e(),i("div",{staticClass:"text-bold q-mb-sm"},[e._v("Question: ")]),i("custom-editor",{ref:"question",attrs:{value:e.fieldData[e.fieldDataIndex].question||"",rules:e.addValidation(),disable:e.fieldDisabled},on:{input:function(t){return e.updateFieldData(t,{fieldDataIndex:e.fieldDataIndex,inputBinding:"question"},!0)}}}),e._m(0),i("q-splitter",{style:"height: "+e.splitterHeight+"px; border:1px solid #e1e1e1;",scopedSlots:e._u([{key:"before",fn:function(){return[i("div",{staticClass:"q-py-sm"},[i("q-list",{attrs:{separator:""}},e._l(e.fieldData[e.fieldDataIndex].choices,(function(t,n){return i("q-item",{key:"choice"+n,attrs:{clickable:"",active:e.activeQuestion==n},on:{click:function(t){e.activeQuestion=n}}},[e._v("\n                      "+e._s("Answer Choice #"+(n+1))+"\n                  ")])})),1),i("q-btn",{staticClass:"bg-positive text-white q-mt-sm",attrs:{icon:"add",label:"Answer choice","no-caps":"",dense:"",disable:e.fieldDisabled},on:{click:e.addChoice}})],1)]},proxy:!0},{key:"after",fn:function(){return[null!=e.activeQuestion?i("div",{staticClass:"q-pa-md"},[i("div",{staticClass:"text-bold q-mb-sm"},[e._v("Answer Choice #"+e._s(e.activeQuestion+1))]),i("custom-editor",{attrs:{value:e.fieldData[e.fieldDataIndex].choices[e.activeQuestion].value||"",disable:e.fieldDisabled},on:{input:function(t){return e.setChoiceValue(t,e.activeQuestion)}}}),i("div",{staticClass:"full-width row justify-end"},[i("q-btn",{staticClass:"bg-negative text-white q-mt-md",attrs:{label:"Remove",icon:"remove","no-caps":"",disable:e.fieldDisabled},on:{click:e.removePollingQuestionChoice}})],1)],1):i("div",{staticClass:"row justify-center items-center",staticStyle:{"margin-top":"25%"}},[i("div",{staticClass:"text-italic text-primary"},[e._v("\n                    Click an item to the left to edit.\n                ")])])]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)},F=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row full-width justify-start"},[i("span",{staticClass:"text-bold q-my-sm"},[e._v("Answer choices:")])])}],L=i("3544");function R(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function W(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?R(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var H={props:["fieldDataIndex"],mixins:[L["a"],v["a"]],components:{"custom-editor":b["a"]},data:function(){return{fieldName:"question",activeQuestion:null,splitterModel:20,splitterHeight:250,hasIntroduction:!1}},computed:{position:function(){return this.fieldData[this.fieldDataIndex].position?this.fieldData[this.fieldDataIndex].position:this.fieldDataIndex.substring(0,1)},positions:function(){var e=Object.keys(this.fieldData).length;return p()(Array(e).keys()).map((function(e){return e+1}))}},methods:W(W({},Object(m["b"])("tickets",["addPollingQuestionChoice","changeQuestionPosition"])),{},{setChoiceValue:function(e,t){var i=g.a.cloneDeep(this.fieldData[this.fieldDataIndex].choices);i[t].value=e,this.updateFieldData(i,{fieldDataIndex:this.fieldDataIndex,inputBinding:"choices",ignoreValidations:!0},!0)},removePollingQuestionChoice:function(){var e=g.a.cloneDeep(this.fieldData[this.fieldDataIndex].choices),t=this.activeQuestion;e.splice(t,1),this.activeQuestion=null,this.updateFieldData(e,{fieldDataIndex:this.fieldDataIndex,inputBinding:"choices",ignoreValidations:!0},!0),this.trNotify("Answer choice #".concat(t+1," removed."),"negative")},addChoice:function(){this.addPollingQuestionChoice(this.fieldDataIndex),this.activeQuestion=this.fieldData[this.fieldDataIndex].choices.length-1}}),mounted:function(){this.fieldData[this.fieldDataIndex].introduction&&this.fieldData[this.fieldDataIndex].introduction.length&&(this.hasIntroduction=!0)}},B=H,$=Object(w["a"])(B,M,F,!1,null,null,null),V=$.exports;function U(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function K(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?U(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):U(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var Y={mixins:[l["a"],P["a"]],data:function(){return{question:!1}},components:{"q-dialog":r["a"],question:j,"question-list":G,"field-options":k["a"],"polling-question":V},methods:K({},Object(m["b"])("tickets",["toggleQuestion"])),computed:K(K({},Object(m["c"])("tickets",["viewQuestion","getFieldEnabled","projectIsActive","getQuestionSegment"])),{},{fieldDisabled:function(){return!this.projectIsActive||!this.hasPermission("edit")||!this.getFieldEnabled({segmentName:this.segmentName,fieldName:"question"})},segmentName:function(){return this.getQuestionSegment},title:function(){return"pollingQuestions"==this.segmentName?"Polling Questions":"Questions"}})},z=Y,J=Object(w["a"])(z,n,s,!1,null,null,null);t["default"]=J.exports}}]);