(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"01b7":function(t,s,e){},"2c4e":function(t,s,e){},"51c3":function(t,s,e){},5389:function(t,s,e){"use strict";var a=e("e725"),i=e.n(a);i.a},"5b63":function(t,s,e){"use strict";var a=e("dee0"),i=e.n(a);i.a},"697f":function(t,s,e){"use strict";var a=e("01b7"),i=e.n(a);i.a},"833d":function(t,s,e){},"8cc4":function(t,s,e){"use strict";var a=e("51c3"),i=e.n(a);i.a},c52a:function(t,s,e){"use strict";var a=e("2c4e"),i=e.n(a);i.a},dbad:function(t,s,e){"use strict";var a=e("833d"),i=e.n(a);i.a},dee0:function(t,s,e){},e725:function(t,s,e){},faca:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex q-pa-md"},[e("q-scroll-area",{staticStyle:{height:"80vh",width:"100%"},attrs:{visible:""}},[this.previewObj?e("q-card",{staticClass:"my-card q-pa-md q-ma-xs q-mr-md"},[e("header-section",{attrs:{pageDetails:t.previewObj.clinicalAdvancesPageDetails,supporter:t.previewObj.generalInformation,videos:t.previewObj.videos}}),e("nav-section"),e("cme-activities"),e("med-challenge",{attrs:{challenges:t.previewObj.medChallenges}}),e("resources-section",{attrs:{resources:t.previewObj.relatedResources}}),e("steering-committee-section",{attrs:{committee:t.previewObj.steeringCommittee}})],1):t._e()],1)],1)},i=[],c=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("9523")),n=e.n(c),r=e("2f62"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ca-section ca-section--hero",attrs:{id:"ca-section-1"}},[""!==this.pageDetails.clinicalAdvancesTitle.fields["1"].text?e("div",{staticClass:"container"},[e("p",{staticClass:"above-heading"},[t._v("\n      Clinical Advances in\n    ")]),e("h1",[t._v("\n      "+t._s(t.pageDetails.clinicalAdvancesTitle.fields["1"].text)+"\n    ")]),e("div",{staticClass:"hero-content cag-wrapper"},[e("div",{staticClass:"cag-left"},[e("p",{staticClass:"cag-hero-overview js-open-modal",attrs:{"data-modal":"ca-section--hero"}},[t._v("Read Overview")]),t._m(0),[0!==this.supporter.selectSupporterAttribution.fields["1"].supporters.length?e("div",{staticClass:"hero-sponsor cag-hero-sponsor"},[e("span",{staticClass:"cag-hero-indent"}),e("p",{staticClass:"hero-sponsor-text"},[t._v("Supported by independent funding from\n                  ")]),e("div",[e("q-img",{staticStyle:{height:"81px",width:"185px"},attrs:{src:this.supporter.selectSupporterAttribution.fields["1"].supporters["0"].url?this.supporter.selectSupporterAttribution.fields["1"].supporters["0"].url:"../../statics/noImage.png"}})],1),e("p")]):t._e()]],2),e("div",{staticClass:"cag-right"},[e("div",{staticClass:"cag-hero-video"},[e("video",{attrs:{controls:"",preload:"metadata",controlslist:"nodownload",poster:"https://img.medscapestatic.com/pi/cme/uat/vid-poster-image.png",width:"540px",height:"302px",src:this.videos.videoSection.fields["1"].url}})])])])]):e("div",{staticClass:"text-center q-ma-xl"},[e("h4",{staticClass:"text-white"},[t._v("Clinical Advance Info Needs to be filled out from the Edit Menu to diplay here.")])])])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cag-hero-support"},[e("span",{staticClass:"cag-hero-indent"}),e("span",{staticClass:"cag-hero-copy"},[e("p",[t._v("Supported by educational grants from "),e("strong",[t._v("AstraZeneca")]),t._v(" and\n              "),e("strong",[t._v("AstraZeneca")]),t._v(" in collaboration with "),e("strong",[t._v("FibroGen")])]),e("p",[t._v("Developed through a partnership between "),e("strong",[t._v("Medscape")]),t._v(" and\n              "),e("strong",[t._v("University of California, San Diego School of Medicine")])])])])}],d={name:"Header",props:["pageDetails","supporter","videos"],mounted:function(){Object.keys(this.supporter.selectSupporterAttribution.fields["1"].multiSupporterUrls)}},v=d,p=(e("8cc4"),e("2877")),m=Object(p["a"])(v,l,o,!1,null,"cb7d11ae",null),g=m.exports,u=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ca-section-secondary-nav js-sticky-nav cag-nav-wrapper"},[e("nav",{staticClass:"container"},[e("ul",{staticClass:"secondary-nav cag-nav"},[e("li",[e("a",{staticClass:"current-section",attrs:{href:"#"}},[t._v("CME Activities")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Med Challenge")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Resources")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Committee")])])]),e("div",{staticClass:"right-side"},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"//img.medscapestatic.com/pi/cme/uat/MedChallenge2.png",alt:"",id:"medchallenge-logo"}}),e("span",{staticClass:"play-tag",attrs:{id:"play-now-menu"}},[t._v("PLAY NOW")])])])])])}],h={name:"navSection"},f=h,_=(e("c52a"),Object(p["a"])(f,u,C,!1,null,"75c34ce0",null)),y=_.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ca-section ca-section--medChallenge",attrs:{id:"ca-section-3"}},[e("div",{staticClass:"container"},[t._m(0),e("h2",{staticClass:"font-white"},[t._v("\n      "+t._s(this.challenges.medChallenge.fields["1"].sectionHeader)+"\n    ")]),e("p",{staticClass:"font-white med-challenge-intro-teaser"},[t._v("\n      "+t._s(this.challenges.medChallenge.fields["1"].sectionDescription)+"\n    ")]),e("ul",{staticClass:"card-list"},[Object.keys(this.challenges.medChallenge.fields).length>0&&""!==this.challenges.medChallenge.fields["1"].name?t._l(this.challenges.medChallenge.fields,(function(s,a){return e("li",{key:a,staticClass:"med-challenge-rounded-edges"},[e("a",{attrs:{href:s.url,target:"_blank"}},[e("div",{staticClass:"activityTitle med-challenge-card-title"},[e("p",{staticClass:"text-uppercase font-orange"},[e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/icon-rapid_fire.svg",alt:""}}),e("span",{staticClass:"text-category"},[t._v(t._s(s.type))])]),e("p",{staticClass:"title"},[t._v(t._s(s.title))])]),e("div",{staticClass:"teaser"},[t._v("\n           "+t._s(s.subtitle)+"\n          ")]),t._m(1,!0)])])})):t._e(),t._l(parseInt(t.notAvail),(function(s){return e("li",{key:Math.random(s),staticClass:"med-challenge-rounded-edges not-available"},[t._m(2,!0),e("div",{staticClass:"teaser text-center font-white"},[t._v("Coming Soon")]),e("div",{staticClass:"activityData"})])}))],2)])])},b=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",[e("img",{attrs:{src:"http://img.medscapestatic.com/pi/cme/logos/logo-MedChallenge.svg",alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"activityData"},[e("span",{staticClass:"play-tag"},[t._v("Play Now")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"activityTitle"},[e("p",{staticClass:"text-uppercase "},[e("img",{staticClass:"img-center",attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/icon-locked.svg",alt:""}}),e("span",{staticClass:"text-category"},[t._v(" ")])]),e("p",{staticClass:"title font-white text-center"},[t._v(" Available ")])])}],O=(e("7f7f"),{name:"medChallenge",props:["challenges"],data:function(){return{notAvail:""}},mounted:function(){""!==this.challenges.medChallenge.fields["1"].name?this.notAvail=4-Object.keys(this.challenges.medChallenge.fields).length:this.notAvail=4}}),k=O,E=(e("5b63"),Object(p["a"])(k,w,b,!1,null,"7c19bcf9",null)),j=E.exports,A=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ca-section ca-section--activities cag-activities loading",attrs:{id:"ca-section-2"}},[e("div",{staticClass:"container"},[e("h2",[t._v("CME Activities")])]),e("div",{staticClass:"container"},[e("div",{staticClass:"cag-activity-header"},[t._v("ANEMIA")]),e("ul",{staticClass:"card-list"},[e("span",{staticClass:"cag-card-nav-left active off"}),e("li",{staticClass:"active"},[e("div",{staticClass:"activityTitle"},[e("a",{staticClass:"title",attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[t._v("Understanding GBCAs to\n            Optimize Outcomes fdsfdsfsdf")])]),e("div",{staticClass:"byline"},[e("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")]),e("div",{staticClass:"teaser"},[t._v("Read these columns for a better understanding of GBCAs, including their\n          properties, safety, and how they may be applied during MRI.")]),e("div",{staticClass:"activityImage"},[e("a",{attrs:{href:"/viewarticle/842629"}},[e("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg","data-alt":"Understanding GBCAs to Optimize Outcomes"}})])]),e("div",{staticClass:"activityData"},[e("div",{staticClass:"credit_type_1"},[e("span",{staticClass:"credit-amount"},[t._v("1.5")]),e("span",{staticClass:"credit-type"},[t._v("CME")])]),e("div",{staticClass:"length"})])]),e("li",{staticClass:"active"},[e("div",{staticClass:"activityTitle"},[e("a",{staticClass:"title",attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[t._v("Understanding GBCAs to\n            Optimize Outcomes")])]),e("div",{staticClass:"byline"},[e("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")]),e("div",{staticClass:"teaser"},[t._v("Read these columns for a better understanding of GBCAs, including their\n          properties, safety, and how they may be applied during MRI.")]),e("div",{staticClass:"activityImage"},[e("a",{attrs:{href:"/viewarticle/842629"}},[e("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg","data-alt":"Understanding GBCAs to Optimize Outcomes"}})])]),e("div",{staticClass:"activityData"},[e("div",{staticClass:"credit_type_1"},[e("span",{staticClass:"credit-amount"},[t._v("1.5")]),e("span",{staticClass:"credit-type"},[t._v("CME")])]),e("div",{staticClass:"length"})])]),e("li",{staticClass:"active"},[e("div",{staticClass:"activityTitle"},[e("a",{staticClass:"title",attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[t._v("Understanding GBCAs to\n            Optimize Outcomes")])]),e("div",{staticClass:"byline"},[e("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")]),e("div",{staticClass:"teaser"},[t._v("Read these columns for a better understanding of GBCAs, including their\n          properties, safety, and how they may be applied during MRI.")]),e("div",{staticClass:"activityImage"},[e("a",{attrs:{href:"/viewarticle/842629"}},[e("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg","data-alt":"Understanding GBCAs to Optimize Outcomes"}})])]),e("div",{staticClass:"activityData"},[e("div",{staticClass:"credit_type_1"},[e("span",{staticClass:"credit-amount"},[t._v("1.5")]),e("span",{staticClass:"credit-type"},[t._v("CME")])]),e("div",{staticClass:"length"})])]),e("span",{staticClass:"cag-card-nav-right active off"})]),e("div",{staticClass:"container"},[e("h2",[t._v("Conference 360")])]),e("div",{staticClass:"cag-activity-header"},[t._v("PRE-CONFERENCE")]),e("ul",{staticClass:"card-list"},[e("li",{staticClass:"live-event active"},[e("div",{staticClass:"live-event-banner"},[e("span",{staticClass:"live-event-banner-title"},[t._v("LIVE EVENT")])]),e("div",{staticClass:"event-card-data-wrapper"},[e("div",{staticClass:"activityTitle"},[t._v("The Immunotherapies Congress")]),e("div",{staticClass:"live-date"},[t._v("August 13 - 21, 2020")]),e("div",{staticClass:"live-location"},[t._v("Boston, Massachusetts")]),e("div",{staticClass:"live-register"},[e("a",{attrs:{href:"/viewarticle/886024"}},[t._v("REGISTER NOW")])])])]),e("li",{staticClass:"survey-card active"},[e("div",{staticClass:"survey-banner"},[e("span",{staticClass:"survey-banner-title"},[t._v("SURVEY")])]),e("div",{staticClass:"event-card-data-wrapper"},[e("div",{staticClass:"activityTitle"},[t._v("Planning to attend the Immunotherapies Congress?")]),e("div",{staticClass:"teaser"},[t._v("We want to hear from you!")]),e("div",{staticClass:"take-survey"},[e("a",{attrs:{href:"/viewarticle/886024"}},[t._v("TAKE THE SURVEY NOW")])])])]),e("li",{staticClass:"active"},[e("div",{staticClass:"activityTitle"},[e("a",{staticClass:"title",attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[t._v("Understanding GBCAs to\n            Optimize Outcomes")])]),e("div",{staticClass:"byline"},[e("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")]),e("div",{staticClass:"teaser"},[t._v("Read these columns for a better understanding of GBCAs, including their\n          properties, safety, and how they may be applied during MRI.")]),e("div",{staticClass:"activityImage"},[e("a",{attrs:{href:"/viewarticle/842629"}},[e("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg","data-alt":"Understanding GBCAs to Optimize Outcomes"}})])]),e("div",{staticClass:"activityData"},[e("div",{staticClass:"credit_type_1"},[e("span",{staticClass:"credit-amount"},[t._v("1.5")]),e("span",{staticClass:"credit-type"},[t._v("CME")])]),e("div",{staticClass:"length"})])])]),e("div",{staticClass:"cag-activity-header"},[t._v("POST-CONFERENCE")]),e("ul",{staticClass:"card-list"},[e("li",{staticClass:"survey-card active"},[e("div",{staticClass:"survey-banner"},[e("span",{staticClass:"survey-banner-title"},[t._v("SURVEY")])]),e("div",{staticClass:"event-card-data-wrapper"},[e("div",{staticClass:"activityTitle"},[t._v("Did you attend the Immunotherapies Congress?")]),e("div",{staticClass:"teaser"},[t._v("We want to hear from you!")]),e("div",{staticClass:"take-survey"},[e("a",{attrs:{href:"/viewarticle/886024"}},[t._v("TAKE THE SURVEY NOW")])])])]),e("li",{staticClass:"active"},[e("div",{staticClass:"activityTitle"},[e("a",{staticClass:"title",attrs:{href:"http://www.medscape.org/viewarticle/842629"}},[t._v("Understanding GBCAs to\n            Optimize Outcomes")])]),e("div",{staticClass:"byline"},[e("i",[t._v("Medscape Education Radiology")]),t._v(", Reviewed and Renewed May 2017")]),e("div",{staticClass:"teaser"},[t._v("Read these columns for a better understanding of GBCAs, including their\n          properties, safety, and how they may be applied during MRI.")]),e("div",{staticClass:"activityImage"},[e("a",{attrs:{href:"/viewarticle/842629"}},[e("img",{staticClass:"featimgVar",attrs:{src:"https://img.medscapestatic.com/thumbnail_library/842629.jpg","data-alt":"Understanding GBCAs to Optimize Outcomes"}})])]),e("div",{staticClass:"activityData"},[e("div",{staticClass:"credit_type_1"},[e("span",{staticClass:"credit-amount"},[t._v("1.5")]),e("span",{staticClass:"credit-type"},[t._v("CME")])]),e("div",{staticClass:"length"})])]),e("li",{staticClass:"coming-soon-card active"},[e("div",{staticClass:"coming-soon-banner"}),e("div",{staticClass:"event-card-data-wrapper"},[e("div",{staticClass:"activityTitle"},[t._v("Coming Soon")]),e("div",{staticClass:"teaser"},[t._v("Join pharmacy experts in a discussion of emerging treatment options and\n            pain management of patients with melanoma.")])])])])])])}],x={name:"CmeActivities"},M=x,S=(e("697f"),Object(p["a"])(M,A,R,!1,null,"19ce455d",null)),I=S.exports,T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ca-section ca-section--resources cag-resources",staticStyle:{"background-color":"#ecf0f0"},attrs:{id:"ca-section-4"}},[e("section",[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"cag-resources-wrapper"},[e("div",{staticClass:"cag-resources-card"},[e("div",{staticClass:"cag-resources-card-top cag-resources-card-top-1"}),e("div",{staticClass:"cag-resources-card-content"},[e("div",{staticClass:"cag-content-title"},[t._v("Downloadable Slide Kit")]),t._l(this.resources.slideKits.fields,(function(s,a){return e("ul",{key:a,staticClass:"cag-content-lists"},[e("li",{staticClass:"cag-dl"},[e("a",{attrs:{href:s.url}},[t._v(" "+t._s(s.title)+" "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-dl.png"}})])])])}))],2)]),e("div",{staticClass:"cag-resources-card"},[e("div",{staticClass:"cag-resources-card-top cag-resources-card-top-2"}),e("div",{staticClass:"cag-resources-card-content"},[e("div",{staticClass:"cag-content-title"},[t._v("Clinical Articles")]),t._l(this.resources.clinicalReferenceArticles.fields,(function(s,a){return e("ul",{key:a,staticClass:"cag-content-lists"},[e("li",{staticClass:"cag-link"},[t._v("\n                  "+t._s(s.title)+"\n                  "),e("a",{staticClass:"offsite resource-link js-link-read-article",attrs:{target:"_blank",href:s.url}},[t._v("  "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])])])}))],2)]),e("div",{staticClass:"cag-resources-card"},[e("div",{staticClass:"cag-resources-card-top cag-resources-card-top-5"}),e("div",{staticClass:"cag-resources-card-content"},[e("div",{staticClass:"cag-content-title"},[t._v("Related Links")]),t._l(this.resources.relatedLinks.fields,(function(s,a){return e("ul",{key:a,staticClass:"cag-content-lists"},[e("li",{staticClass:"cag-link"},[t._v("\n                "+t._s(s.title)+"\n                "),e("a",{staticClass:"offsite resource-link js-link-read-article",attrs:{target:"_blank",href:s.url}},[t._v("  "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])])])}))],2)]),t._m(1),t._m(2)])])])])},D=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"section-title"},[e("h2",[t._v("Resources")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cag-resources-card"},[e("div",{staticClass:"cag-resources-card-top cag-resources-card-top-3"}),e("div",{staticClass:"cag-resources-card-content"},[e("div",{staticClass:"cag-content-title"},[t._v("Guidelines")]),e("ul",{staticClass:"cag-content-lists"},[e("li",{staticClass:"cag-link"},[e("a",{attrs:{href:"https://www.medscape.org/"}},[t._v("ASCO "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])]),e("li",{staticClass:"cag-link"},[e("a",{attrs:{href:"https://www.medscape.org/"}},[t._v("FDA "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])]),e("li",{staticClass:"cag-link"},[e("a",{attrs:{href:"https://www.medscape.org/"}},[t._v("ESMO "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cag-resources-card"},[e("div",{staticClass:"cag-resources-card-top cag-resources-card-top-4"}),e("div",{staticClass:"cag-resources-card-content"},[e("div",{staticClass:"cag-content-title"},[t._v("Patient Education")]),e("ul",{staticClass:"cag-content-lists"},[e("li",{staticClass:"cag-link"},[e("a",{attrs:{href:"https://www.medscape.org/"}},[t._v("Torquem detraxit hosti en\n                  quidem faciunt, ut de commodis suis."),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])]),e("li",{staticClass:"cag-link"},[e("a",{attrs:{href:"https://www.medscape.org/"}},[t._v("In quo enim ipsam per se texit,\n                  ne ad minima. "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])]),e("li",{staticClass:"cag-link"},[e("a",{attrs:{href:"https://www.medscape.org/"}},[t._v("In quo enim ipsam per se texit,\n                  ne ad minima. "),e("img",{attrs:{src:"https://img.medscapestatic.com/pi/cme/advances/icons/cag-link.png"}})])])])])])}],P={name:"resources",props:["resources"]},$=P,q=(e("dbad"),Object(p["a"])($,T,D,!1,null,"687cb7ad",null)),G=q.exports,B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ca-section ca-section--committee cag-committee",staticStyle:{"background-color":"#ecf0f0"},attrs:{id:"ca-section-5"}},[""!==this.committee.contributor.fields["1"].name?e("div",{staticClass:"container"},[t._m(0),t._l(this.committee.contributor.fields,(function(s,a){return e("div",{key:a,staticClass:"committee-members-wrapper"},[e("div",{staticClass:"committee-member"},[e("div",{staticClass:"cag-member-avatar"},[s.headshot?e("q-img",{staticClass:"q-my-md",staticStyle:{height:"275px",width:"271px"},attrs:{src:s.headshot},scopedSlots:t._u([{key:"error",fn:function(){return[e("div",{staticClass:"absolute-full flex flex-center"},[t._v("Cannot load image")])]},proxy:!0}],null,!0)}):t._e()],1),e("div",{staticClass:"cag-person-info"},[e("img",{staticClass:"cag-committee-expand-button",attrs:{src:"http://img.medscapestatic.com/pi/cme/advances/icons/committee-up-btn.png"}}),e("h5",{staticClass:"cag-person-name"},[t._v(t._s(s.name))]),e("p",{staticClass:"cag-person-title"},[t._v(t._s(s.contributorGroup))]),e("p",{staticClass:"cag-person-details",domProps:{innerHTML:t._s(s.affiliations)}}),t._m(1,!0)])])])}))],2):e("div",{staticClass:"text-center q-ma-xl"},[e("h4",[t._v("Steering Committee Info Needs to be filled out from the Edit Menu to diplay here.")])])])},U=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section-title"},[e("span",{staticClass:"cag-flex-placeholder"}),e("h2",[t._v("Steering Committee")]),e("button",{staticClass:"js-open-modal",attrs:{"data-modal":"ca-section--disclosures"}},[t._v("\n        Disclosures\n      ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cag-person-links"},[e("span",{staticClass:"cag-bio-vid-button"},[t._v("Bio Video")]),e("span",{staticClass:"social-link linkedin-social-link",attrs:{"data-src":"http://www.linkedin.com"}},[t._v("LinkedIn")]),e("span",{staticClass:"social-link twitter-social-link",attrs:{"data-src":"http://www.twitter.com"}},[t._v("Twitter")])])}],N={name:"steeringCommittee",props:["committee"]},V=N,z=(e("5389"),Object(p["a"])(V,B,U,!1,null,"37bcbe38",null)),W=z.exports;function L(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function H(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?L(Object(e),!0).forEach((function(s){n()(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var Y={name:"CAPreview",data:function(){return{}},components:{"header-section":g,"nav-section":y,"med-challenge":j,"cme-activities":I,"resources-section":G,"steering-committee-section":W},computed:H(H({},Object(r["c"])("tickets",["getProjects","getWorkingProject"])),{},{previewObj:{get:function(){if(this.getProjects&&Object.keys(this.getProjects).length){if(this.$route.query.projectId&&this.$route.query.projectId.length){var t=this.getProjects[this.$route.query.projectId].activeTicket;return this.getProjects[this.$route.query.projectId].tickets[t]}return null}},set:function(t){return t}}})},F=Y,K=Object(p["a"])(F,a,i,!1,null,"1ac1eb8a",null);s["default"]=K.exports}}]);