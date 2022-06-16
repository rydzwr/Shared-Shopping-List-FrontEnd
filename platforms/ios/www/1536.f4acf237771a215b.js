"use strict";(self.webpackChunkSharedShoppingList=self.webpackChunkSharedShoppingList||[]).push([[1536],{1536:function(w,b,o){o.r(b),o.d(b,{ion_tab:function(){return _},ion_tabs:function(){return m}});var c=o(5861),v=o(5671),p=o(3144),g=o(7757),u=o.n(g),l=o(2361),y=o(1878),_=function(){function h(t){(0,v.Z)(this,h),(0,l.r)(this,t),this.loaded=!1,this.active=!1}return(0,p.Z)(h,[{key:"componentWillLoad",value:(t=(0,c.Z)(u().mark(function n(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!this.active){i.next=3;break}return i.next=3,this.setActive();case 3:case"end":return i.stop()}},n,this)})),function e(){return t.apply(this,arguments)})},{key:"setActive",value:function(){var t=(0,c.Z)(u().mark(function n(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return i.stop()}},n,this)}));return function e(){return t.apply(this,arguments)}}()},{key:"changeActive",value:function(e){e&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,y.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var n=this.active,r=this.component;return(0,l.h)(l.H,{role:"tabpanel","aria-hidden":n?null:"true","aria-labelledby":"tab-button-".concat(this.tab),class:{"ion-page":void 0===r,"tab-hidden":!n}},(0,l.h)("slot",null))}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),h;var t}();_.style=":host(.tab-hidden){display:none !important}";var m=function(){function h(t){var e=this;(0,v.Z)(this,h),(0,l.r)(this,t),this.ionNavWillLoad=(0,l.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,l.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,l.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(n){var r=n.detail,i=r.href,a=r.tab;if(e.useRouter&&void 0!==i){var s=document.querySelector("ion-router");s&&s.push(i)}else e.select(a)}}return(0,p.Z)(h,[{key:"componentWillLoad",value:(t=(0,c.Z)(u().mark(function n(){var r;return u().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){a.next=6;break}if(!((r=this.tabs).length>0)){a.next=6;break}return a.next=6,this.select(r[0]);case 6:this.ionNavWillLoad.emit();case 7:case"end":return a.stop()}},n,this)})),function e(){return t.apply(this,arguments)})},{key:"componentWillRender",value:function(){var e=this.el.querySelector("ion-tab-bar");e&&(e.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:function(){var t=(0,c.Z)(u().mark(function n(r){var i;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(i=f(this.tabs,r),this.shouldSwitch(i)){s.next=3;break}return s.abrupt("return",!1);case 3:return s.next=5,this.setActive(i);case 5:return s.next=7,this.notifyRouter();case 7:return this.tabSwitch(),s.abrupt("return",!0);case 9:case"end":return s.stop()}},n,this)}));return function e(n){return t.apply(this,arguments)}}()},{key:"getTab",value:function(){var t=(0,c.Z)(u().mark(function n(r){return u().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",f(this.tabs,r));case 1:case"end":return a.stop()}},n,this)}));return function e(n){return t.apply(this,arguments)}}()},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(){var t=(0,c.Z)(u().mark(function n(r){var a,i=this;return u().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(a=f(this.tabs,r),this.shouldSwitch(a)){d.next=3;break}return d.abrupt("return",{changed:!1,element:this.selectedTab});case 3:return d.next=5,this.setActive(a);case 5:return d.abrupt("return",{changed:!0,element:this.selectedTab,markVisible:function(){return i.tabSwitch()}});case 6:case"end":return d.stop()}},n,this)}));return function e(n){return t.apply(this,arguments)}}()},{key:"getRouteId",value:function(){var t=(0,c.Z)(u().mark(function n(){var r,i;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=null===(r=this.selectedTab)||void 0===r?void 0:r.tab,s.abrupt("return",void 0!==i?{id:i,element:this.selectedTab}:void 0);case 2:case"end":return s.stop()}},n,this)}));return function e(){return t.apply(this,arguments)}}()},{key:"setActive",value:function(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var e=this.selectedTab,n=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&n!==e&&(n&&(n.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(e){return void 0!==e&&e!==this.selectedTab&&!this.transitioning}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"render",value:function(){return(0,l.h)(l.H,{onIonTabButtonClick:this.onTabClicked},(0,l.h)("slot",{name:"top"}),(0,l.h)("div",{class:"tabs-inner"},(0,l.h)("slot",null)),(0,l.h)("slot",{name:"bottom"}))}},{key:"el",get:function(){return(0,l.i)(this)}}]),h;var t}(),f=function(t,e){var n="string"==typeof e?t.find(function(r){return r.tab===e}):e;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};m.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);