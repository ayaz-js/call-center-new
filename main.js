(()=>{var e={554:()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(){var t,n=document.querySelectorAll(".faq__accardion-button"),r="faq__accardion-panel-active",o=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw c}}}}(n);try{var a=function(){var e=t.value;e.addEventListener("click",(function(){e.classList.toggle("faq__accardion-button-active");var t=e.nextElementSibling;t.classList.contains(r)?t.classList.remove(r):t.classList.add(r)}))};for(o.s();!(t=o.n()).done;)a()}catch(e){o.e(e)}finally{o.f()}}()},509:()=>{!function(e,t,n){(t[n]=t[n]||[]).push({formId:186501,host:"formdesigner.ru",formHeight:100,el:"form_186501_1",center:1,scroll:0});var r=e.createElement("script"),o="getElementsByTagName";r.type="text/javascript",r.charset="UTF-8",r.async=!0,r.src=("https:"==e.location.protocol?"https:":"http:")+"//formdesigner.ru/js/iform.js?v=0.0.3",(e[o]("head")[0]||e[o]("body")[0]).appendChild(r)}(document,window,"fdforms")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{"use strict";var e=document.querySelector(".nav__wrapper"),t=document.querySelector(".nav__menu-icon"),r=document.querySelector(".nav__menu-icon-close"),o=document.querySelector(".nav__menu-list"),a=document.querySelector(".faq"),c=document.querySelector(".nav__button");function i(){e.classList.remove("nav__wrapper_opened"),document.body.style.overflow="auto"}n(554),n(509),c.addEventListener("click",(function(){a.scrollIntoView({block:"start",behavior:"smooth"})})),t.addEventListener("click",(function(){e.classList.add("nav__wrapper_opened"),document.body.style.overflow="hidden"})),r.addEventListener("click",i),o.addEventListener("click",(function(e){var t=e.target;t&&t.classList.contains("nav__menu-link")&&i()})),c.addEventListener("click",i)})()})();