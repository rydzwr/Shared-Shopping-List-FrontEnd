"use strict";(self.webpackChunkSharedShoppingList=self.webpackChunkSharedShoppingList||[]).push([[1033],{1033:function(E,s,n){n.r(s),n.d(s,{ion_img:function(){return d}});var a=n(5671),h=n(3144),t=n(2361),l=n(6254),c=n(3756),d=function(){function o(i){var e=this;(0,a.Z)(this,o),(0,t.r)(this,i),this.ionImgWillLoad=(0,t.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,t.e)(this,"ionImgDidLoad",7),this.ionError=(0,t.e)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=function(){e.ionImgDidLoad.emit()},this.onError=function(){e.ionError.emit()}}return(0,h.Z)(o,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,c.j)(this.el,["draggable"])}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var e=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(function(r){r[r.length-1].isIntersecting&&(e.load(),e.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return e.load()},200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){var e=this.loadSrc,r=this.alt,g=this.onLoad,f=this.loadError,v=this.inheritedAttributes.draggable;return(0,t.h)(t.H,{class:(0,l.b)(this)},(0,t.h)("img",{decoding:"async",src:e,alt:r,onLoad:g,onError:f,part:"image",draggable:_(v)}))}},{key:"el",get:function(){return(0,t.i)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),o}(),_=function(i){switch(i){case"true":return!0;case"false":return!1;default:return}};d.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);