"use strict";(self.webpackChunkSharedShoppingList=self.webpackChunkSharedShoppingList||[]).push([[3804],{3804:function(ze,$,b){b.r($),b.d($,{ion_popover:function(){return Q}});var N=b(4942),re=b(5671),oe=b(3144),j=b(5861),ne=b(7757),I=b.n(ne),w=b(2361),U=b(6254),F=b(1878),T=b(3756),W=b(599),ie=b(2854),ae=b(4318),x=b(9442),H=(b(7593),function(r,e,t){var o=e.getBoundingClientRect(),n=o.height,a=o.width;return"cover"===r&&t&&(a=t.getBoundingClientRect().width),{contentWidth:a,contentHeight:n}}),B=function(r,e){return e&&"ION-ITEM"===e.tagName?r.findIndex(function(t){return t===e}):-1},le=function(r,e){return r[B(r,e)+1]},de=function(r,e){return r[B(r,e)-1]},K=function(r){var t=(0,T.g)(r).querySelector("button");t&&(0,T.r)(function(){return t.focus()})},ve=function(r){return r.hasAttribute("data-ion-popover-trigger")},G=function(r,e,t,o,n,a,i,s,p,c,f){var u,g={top:0,left:0,width:0,height:0};if("event"===a){if(!f)return p;g={top:f.clientY,left:f.clientX,width:1,height:1}}else{var _=c||(null===(u=null==f?void 0:f.detail)||void 0===u?void 0:u.ionShadowTarget)||(null==f?void 0:f.target);if(!_)return p;var l=_.getBoundingClientRect();g={top:l.top,left:l.left,width:l.width,height:l.height}}var y=ge(i,g,e,t,o,n,r),k=me(s,i,g,e,t),E=y.top+k.top,P=y.left+k.left,O=he(i,o,n,E,P,e,t,r),D=O.arrowTop,L=O.arrowLeft,m=ue(i,s,r);return{top:E,left:P,referenceCoordinates:g,arrowTop:D,arrowLeft:L,originX:m.originX,originY:m.originY}},ue=function(r,e,t){switch(r){case"top":return{originX:q(e),originY:"bottom"};case"bottom":return{originX:q(e),originY:"top"};case"left":return{originX:"right",originY:z(e)};case"right":return{originX:"left",originY:z(e)};case"start":return{originX:t?"left":"right",originY:z(e)};case"end":return{originX:t?"right":"left",originY:z(e)}}},q=function(r){switch(r){case"start":return"left";case"center":return"center";case"end":return"right"}},z=function(r){switch(r){case"start":return"top";case"center":return"center";case"end":return"bottom"}},he=function(r,e,t,o,n,a,i,s){var p={arrowTop:o+i/2-e/2,arrowLeft:n+a-e/2},c={arrowTop:o+i/2-e/2,arrowLeft:n-1.5*e};switch(r){case"top":return{arrowTop:o+i,arrowLeft:n+a/2-e/2};case"bottom":return{arrowTop:o-t,arrowLeft:n+a/2-e/2};case"left":return p;case"right":return c;case"start":return s?c:p;case"end":return s?p:c;default:return{arrowTop:0,arrowLeft:0}}},ge=function(r,e,t,o,n,a,i){var s={top:e.top,left:e.left-t-n},p={top:e.top,left:e.left+e.width+n};switch(r){case"top":return{top:e.top-o-a,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+a,left:e.left};case"left":return s;case"start":return i?p:s;case"end":return i?s:p}},me=function(r,e,t,o,n){switch(r){case"center":return we(e,t,o,n);case"end":return be(e,t,o,n);default:return{top:0,left:0}}},be=function(r,e,t,o){switch(r){case"start":case"end":case"left":case"right":return{top:-(o-e.height),left:0};default:return{top:0,left:-(t-e.width)}}},we=function(r,e,t,o){switch(r){case"start":case"end":case"left":case"right":return{top:-(o/2-e.height/2),left:0};default:return{top:0,left:-(t/2-e.width/2)}}},J=function(r,e,t,o,n,a,i,s,p,c,f,u){var E,g=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,d=arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,h=arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,_=g,y=t,k=e,P=c,O=f,D=!1,L=!1,m=u?u.top+u.height:a/2-s/2,C=u?u.height:0,S=!1;return y<o+p?(y=o,D=!0,P="left"):i+o+y+p>n&&(L=!0,y=n-i-o,P="right"),m+C+s>a&&("top"===r||"bottom"===r)&&(m-s>0?(_=(k=m-s-C-(h-1))+s,O="bottom",S=!0):E=o),{top:k,left:y,bottom:E,originX:P,originY:O,checkSafeAreaLeft:D,checkSafeAreaRight:L,arrowTop:_,arrowLeft:d,addPopoverBottomClass:S}},Pe=function(r,e){var t,o=e.event,n=e.size,a=e.trigger,i=e.reference,s=e.side,p=e.align,c=r.ownerDocument,f="rtl"===c.dir,u=c.defaultView.innerWidth,g=c.defaultView.innerHeight,d=(0,T.g)(r),h=d.querySelector(".popover-content"),_=d.querySelector(".popover-arrow"),l=a||(null===(t=null==o?void 0:o.detail)||void 0===t?void 0:t.ionShadowTarget)||(null==o?void 0:o.target),y=H(n,h,l),k=y.contentWidth,E=y.contentHeight,P=function(r){if(!r)return{arrowWidth:0,arrowHeight:0};var e=r.getBoundingClientRect();return{arrowWidth:e.width,arrowHeight:e.height}}(_),D=P.arrowHeight,m=G(f,k,E,P.arrowWidth,D,i,s,p,{top:g/2-E/2,left:u/2-k/2,originX:f?"right":"left",originY:"top"},a,o),A=J(s,m.top,m.left,"cover"===n?0:5,u,g,k,E,"cover"===n?0:25,m.originX,m.originY,m.referenceCoordinates,m.arrowTop,m.arrowLeft,D),Z=A.originX,X=A.originY,R=A.top,M=A.left,Y=A.bottom,Le=A.checkSafeAreaLeft,Ce=A.checkSafeAreaRight,Se=A.arrowTop,We=A.arrowLeft,Me=A.addPopoverBottomClass,Ne=(0,x.c)(),ee=(0,x.c)(),te=(0,x.c)();return ee.addElement(d.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),te.addElement(d.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Ne.easing("ease").duration(100).beforeAddWrite(function(){"cover"===n&&r.style.setProperty("--width","".concat(k,"px")),Me&&r.classList.add("popover-bottom"),void 0!==Y&&h.style.setProperty("bottom","".concat(Y,"px"));var V="".concat(M,"px");if(Le&&(V="".concat(M,"px").concat(" + var(--ion-safe-area-left, 0)")),Ce&&(V="".concat(M,"px").concat(" - var(--ion-safe-area-right, 0)")),h.style.setProperty("top","calc(".concat(R,"px + var(--offset-y, 0))")),h.style.setProperty("left","calc(".concat(V," + var(--offset-x, 0))")),h.style.setProperty("transform-origin","".concat(X," ").concat(Z)),null!==_){var Ke=function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>3?arguments[3]:void 0;return!(!(arguments.length>2?arguments[2]:void 0)&&!o||"top"!==r&&"bottom"!==r&&e)}(s,m.top!==R||m.left!==M,o,a);Ke?(_.style.setProperty("top","calc(".concat(Se,"px + var(--offset-y, 0))")),_.style.setProperty("left","calc(".concat(We,"px + var(--offset-x, 0))"))):_.style.setProperty("display","none")}}).addAnimation([ee,te])},xe=function(r){var e=(0,T.g)(r),t=e.querySelector(".popover-content"),o=e.querySelector(".popover-arrow"),n=(0,x.c)(),a=(0,x.c)(),i=(0,x.c)();return a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(function(){r.style.removeProperty("--width"),r.classList.remove("popover-bottom"),t.style.removeProperty("top"),t.style.removeProperty("left"),t.style.removeProperty("bottom"),t.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([a,i])},De=function(r,e){var t,o=e.event,n=e.size,a=e.trigger,i=e.reference,s=e.side,p=e.align,c=r.ownerDocument,f="rtl"===c.dir,u=c.defaultView.innerWidth,g=c.defaultView.innerHeight,d=(0,T.g)(r),h=d.querySelector(".popover-content"),_=a||(null===(t=null==o?void 0:o.detail)||void 0===t?void 0:t.ionShadowTarget)||(null==o?void 0:o.target),l=H(n,h,_),y=l.contentWidth,k=l.contentHeight,P=G(f,y,k,0,0,i,s,p,{top:g/2-k/2,left:u/2-y/2,originX:f?"right":"left",originY:"top"},a,o),D=J(s,P.top,P.left,"cover"===n?0:12,u,g,y,k,0,P.originX,P.originY,P.referenceCoordinates),L=D.originX,m=D.originY,C=D.top,S=D.left,A=D.bottom,Z=(0,x.c)(),X=(0,x.c)(),R=(0,x.c)(),M=(0,x.c)(),Y=(0,x.c)();return X.addElement(d.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),R.addElement(d.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),M.addElement(h).beforeStyles({top:"calc(".concat(C,"px + var(--offset-y, 0px))"),left:"calc(".concat(S,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(m," ").concat(L)}).beforeAddWrite(function(){void 0!==A&&h.style.setProperty("bottom","".concat(A,"px"))}).fromTo("transform","scale(0.8)","scale(1)"),Y.addElement(d.querySelector(".popover-viewport")).fromTo("opacity",.01,1),Z.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(function(){"cover"===n&&r.style.setProperty("--width","".concat(y,"px")),"bottom"===m&&r.classList.add("popover-bottom")}).addAnimation([X,R,M,Y])},Ae=function(r){var e=(0,T.g)(r),t=e.querySelector(".popover-content"),o=(0,x.c)(),n=(0,x.c)(),a=(0,x.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(function(){r.style.removeProperty("--width"),r.classList.remove("popover-bottom"),t.style.removeProperty("top"),t.style.removeProperty("left"),t.style.removeProperty("bottom"),t.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,a])},Q=function(){function v(r){var e=this;(0,re.Z)(this,v),(0,w.r)(this,r),this.didPresent=(0,w.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,w.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,w.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,w.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,w.e)(this,"didPresent",7),this.willPresentShorthand=(0,w.e)(this,"willPresent",7),this.willDismissShorthand=(0,w.e)(this,"willDismiss",7),this.didDismissShorthand=(0,w.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=Oe++,this.coreDelegate=(0,F.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.onBackdropTap=function(){e.dismiss(void 0,W.B)},this.onLifecycle=function(t){var o=e.usersElement,n=Te[t.type];if(o&&n){var a=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(a)}},this.configureTriggerInteraction=function(){var t=e.trigger,o=e.triggerAction,n=e.el,a=e.destroyTriggerInteraction;a&&a();var i=e.triggerEl=void 0!==t?document.getElementById(t):null;!i||(e.destroyTriggerInteraction=function(r,e,t){var a,o=[];switch(e){case"hover":var n;o=[{eventName:"mouseenter",callback:(a=(0,j.Z)(I().mark(function s(p){return I().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:p.stopPropagation(),n&&clearTimeout(n),n=setTimeout(function(){(0,T.r)(function(){t.presentFromTrigger(p),n=void 0})},100);case 3:case"end":return f.stop()}},s)})),function i(s){return a.apply(this,arguments)})},{eventName:"mouseleave",callback:function(i){n&&clearTimeout(n);var s=i.relatedTarget;!s||s.closest("ion-popover")!==t&&t.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(i){return i.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(i){return t.presentFromTrigger(i,!0)}}];break;case"context-menu":o=[{eventName:"contextmenu",callback:function(i){i.preventDefault(),t.presentFromTrigger(i)}},{eventName:"click",callback:function(i){return i.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(i){return t.presentFromTrigger(i,!0)}}];break;default:o=[{eventName:"click",callback:function(i){return t.presentFromTrigger(i)}},{eventName:"ionPopoverActivateTrigger",callback:function(i){return t.presentFromTrigger(i,!0)}}]}return o.forEach(function(a){return r.addEventListener(a.eventName,a.callback)}),r.setAttribute("data-ion-popover-trigger","true"),function(){o.forEach(function(a){return r.removeEventListener(a.eventName,a.callback)}),r.removeAttribute("data-ion-popover-trigger")}}(i,o,n))},this.configureKeyboardInteraction=function(){var t=e.destroyKeyboardInteraction,o=e.el;t&&t(),e.destroyKeyboardInteraction=function(r){var e=function(){var t=(0,j.Z)(I().mark(function o(n){var a,i,s,p,f,u,g,d,h;return I().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(i=document.activeElement,s=[],"ION-POPOVER"===(p=null===(a=n.target)||void 0===a?void 0:a.tagName)||"ION-ITEM"===p){l.next=5;break}return l.abrupt("return");case 5:try{s=Array.from(r.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(y){}l.t0=n.key,l.next="ArrowLeft"===l.t0?9:"ArrowDown"===l.t0?14:"ArrowUp"===l.t0?18:"Home"===l.t0?22:"End"===l.t0?26:"ArrowRight"===l.t0||" "===l.t0||"Enter"===l.t0?30:32;break;case 9:return l.next=11,r.getParentPopover();case 11:return l.sent&&r.dismiss(void 0,void 0,!1),l.abrupt("break",32);case 14:return n.preventDefault(),void 0!==(f=le(s,i))&&K(f),l.abrupt("break",32);case 18:return n.preventDefault(),void 0!==(u=de(s,i))&&K(u),l.abrupt("break",32);case 22:return n.preventDefault(),void 0!==(g=s[0])&&K(g),l.abrupt("break",32);case 26:return n.preventDefault(),void 0!==(d=s[s.length-1])&&K(d),l.abrupt("break",32);case 30:return i&&ve(i)&&(h=new CustomEvent("ionPopoverActivateTrigger"),i.dispatchEvent(h)),l.abrupt("break",32);case 32:case"end":return l.stop()}},o)}));return function(n){return t.apply(this,arguments)}}();return r.addEventListener("keydown",e),function(){return r.removeEventListener("keydown",e)}}(o)},this.configureDismissInteraction=function(){var t=e.destroyDismissInteraction,o=e.parentPopover,n=e.triggerAction,a=e.triggerEl,i=e.el;!o||!a||(t&&t(),e.destroyDismissInteraction=function(r,e,t,o){var n=[],i=(0,T.g)(o).querySelector(".popover-content");return(n="hover"===e?[{eventName:"mouseenter",callback:function(p){document.elementFromPoint(p.clientX,p.clientY)!==r&&t.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:function(p){p.target.closest("[data-ion-popover-trigger]")!==r?t.dismiss(void 0,void 0,!1):p.stopPropagation()}}]).forEach(function(s){return i.addEventListener(s.eventName,s.callback)}),function(){n.forEach(function(s){return i.removeEventListener(s.eventName,s.callback)})}}(a,n,i,o))}}return(0,oe.Z)(v,[{key:"onTriggerChange",value:function(){this.configureTriggerInteraction()}},{key:"onIsOpenChange",value:function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}},{key:"connectedCallback",value:function(){(0,W.e)(this.el)}},{key:"componentWillLoad",value:function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex),this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")")),void 0===this.alignment&&(this.alignment="ios"===(0,U.b)(this)?"center":"start")}},{key:"componentDidLoad",value:function(){var e=this,t=this.parentPopover;!0===this.isOpen&&(0,T.r)(function(){return e.present()}),t&&(0,T.a)(t,"ionPopoverWillDismiss",function(){e.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}},{key:"presentFromTrigger",value:(r=(0,j.Z)(I().mark(function t(o){var a=arguments;return I().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.focusDescendantOnPresent=a.length>1&&void 0!==a[1]&&a[1],s.next=4,this.present(o);case 4:this.focusDescendantOnPresent=!1;case 5:case"end":return s.stop()}},t,this)})),function e(t){return r.apply(this,arguments)})},{key:"getDelegate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,o=this.inline=null!==t&&!this.hasController,n=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:n}}},{key:"present",value:function(){var r=(0,j.Z)(I().mark(function t(o){var n,a,i,s;return I().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!this.presented){c.next=2;break}return c.abrupt("return");case 2:if(void 0===this.currentTransition){c.next=5;break}return c.next=5,this.currentTransition;case 5:return n=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),a=this.getDelegate(!0),i=a.inline,s=a.delegate,c.next=9,(0,F.a)(s,this.el,this.component,["popover-viewport"],n,i);case 9:return this.usersElement=c.sent,c.next=12,(0,ae.e)(this.usersElement);case 12:return this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.currentTransition=(0,W.d)(this,"popoverEnter",Pe,De,{event:o||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),c.next=17,this.currentTransition;case 17:this.currentTransition=void 0,this.focusDescendantOnPresent&&(0,W.j)(this.el,this.el);case 19:case"end":return c.stop()}},t,this)}));return function e(t){return r.apply(this,arguments)}}()},{key:"dismiss",value:function(){var r=(0,j.Z)(I().mark(function t(o,n){var a,i,s,p,c,f,u=arguments;return I().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(a=!(u.length>2&&void 0!==u[2])||u[2],void 0===this.currentTransition){d.next=4;break}return d.next=4,this.currentTransition;case 4:return i=this.destroyKeyboardInteraction,s=this.destroyDismissInteraction,a&&this.parentPopover&&this.parentPopover.dismiss(o,n,a),this.currentTransition=(0,W.f)(this,o,n,"popoverLeave",xe,Ae,this.event),d.next=9,this.currentTransition;case 9:if(!(p=d.sent)){d.next=16;break}return i&&(i(),this.destroyKeyboardInteraction=void 0),s&&(s(),this.destroyDismissInteraction=void 0),c=this.getDelegate(),f=c.delegate,d.next=16,(0,F.d)(f,this.usersElement);case 16:return this.currentTransition=void 0,d.abrupt("return",p);case 18:case"end":return d.stop()}},t,this)}));return function e(t,o){return r.apply(this,arguments)}}()},{key:"getParentPopover",value:function(){var r=(0,j.Z)(I().mark(function t(){return I().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.parentPopover);case 1:case"end":return n.stop()}},t,this)}));return function e(){return r.apply(this,arguments)}}()},{key:"onDidDismiss",value:function(){return(0,W.g)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,W.g)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,t=this,o=(0,U.b)(this),n=this.onLifecycle,a=this.popoverId,i=this.parentPopover,s=this.dismissOnSelect,p=this.side,c=this.arrow,f=this.htmlAttributes,u=(0,U.a)("desktop"),g=c&&!i;return(0,w.h)(w.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},f,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:a,class:Object.assign(Object.assign({},(0,ie.g)(this.cssClass)),(e={},(0,N.Z)(e,o,!0),(0,N.Z)(e,"popover-translucent",this.translucent),(0,N.Z)(e,"overlay-hidden",!0),(0,N.Z)(e,"popover-desktop",u),(0,N.Z)(e,"popover-side-".concat(p),!0),(0,N.Z)(e,"popover-nested",!!i),e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonBackdropTap:this.onBackdropTap}),!i&&(0,w.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,w.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:s?function(){return t.dismiss()}:void 0},g&&(0,w.h)("div",{class:"popover-arrow",part:"arrow"}),(0,w.h)("div",{class:"popover-content",part:"content"},(0,w.h)("slot",null))))}},{key:"el",get:function(){return(0,w.i)(this)}}],[{key:"watchers",get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}}]),v;var r}(),Te={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},Oe=0;Q.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);