(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2Pik":function(n,e,t){var o=t("dRvM");n.exports="string"==typeof o?o:o.toString()},ANJM:function(n,e,t){var o=t("wW48");n.exports="string"==typeof o?o:o.toString()},"Hp/m":function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},KIIj:function(n,e,t){var o=t("cRcm");n.exports="string"==typeof o?o:o.toString()},OsHv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,i=n.length,r=-4&i;o<r;){for(var a=Math.min(o+4096,r);o<a;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<i;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},Oxty:function(n,e,t){var o=t("hwuB");n.exports="string"==typeof o?o:o.toString()},Rsgl:function(n,e,t){var o=t("mn5G");n.exports="string"==typeof o?o:o.toString()},SOrw:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".logo {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    column-gap: 1rem;\n\n    /* Fix logo to the top and scroll the content beneath*/\n    position: sticky;\n    top: 0;\n    background: white;\n\n    margin: -1rem -2rem 0 -2rem;\n    padding: 1.5rem 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .logo {\n        margin: -1rem -1.5rem 0 -1.5rem;\n        padding: 1.5rem 1.5rem;\n    }\n}\n\n.logo__img {\n    height: 2rem;\n    grid-row: 1 / -1;\n    align-self: center;\n}\n\n.logo__title {\n    align-self: start;\n}\n\n.logo__link {\n    align-self: end;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},SZxn:function(n,e,t){var o=t("Hp/m");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("SOrw");n.exports="string"==typeof o?o:o.toString()},VNgF:function(n){"use strict";function e(n,e){var t,o,i=n[1]||"",r=n[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=(t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),l=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([a]).join("\n")}return[i].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(e&&(s[2]=s[2]?"".concat(e," and ").concat(s[2]):e),t.push(s))}},t}},W2lv:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1.25rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},cRcm:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n  z-index: 5;\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n.t-label {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: max-content;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  display: grid;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},dRvM:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.5rem;\n    left: 2rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},ek2p:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 0 2rem;\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .donations {\n        row-gap: 1.5rem;\n        padding: 0 1.5rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--one-column > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--two-column {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},fBbg:function(n,e,t){"use strict";function o(n,e,t,o){if(n){var i=new RegExp("<"+e+">(.*)</"+e+">","g"),r=n.split(i),a=r[0],l=r[1],s=r[2],c=Object(d.e)(t,o,l);return Object(d.e)(d.b,null,a,c,s)}return n}function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function l(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s(n,e){return(s=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(){return(u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return cn}));var d=t("NMMh"),m=t("uOFG"),p=Object(d.d)(null),g=t("QLgr"),f=Object(d.d)(g.b),h=f,b=function(n,e){return e.replace(/{{(\w*)}}/g,(function(e,t){return n[t]?n[t]:""}))},y=function(){var n=function(){var n=window.navigator.language;return n.includes("-")?n.split("-")[0]:n}(),e=Object(m.a)(f),t=e.i18n,o=e.language;return t[o]?t[o]:t[n]?t[n]:t.en},v=t("SZxn"),x=t.n(v),j=function(n,e,t,i){if(e){var r=n.monthly.levels?!t||i?n.monthly.custom:function(n,e){var t=[].concat(n).sort((function(n,e){return Number(n.amount)-Number(e.amount)}));return Number.isNaN(Number(e))?t[0]:t[Math.max(0,t.findIndex((function(n){return Number(n.amount)>Number(e)}))-1)]}(n.monthly.levels,t):void 0;return r&&("description1"in r&&"description2"in r)?Object(d.e)(d.b,null,Object(d.e)("p",{className:"t-heading-secondary"},r.description1&&o(r.description1,"bold",(function(n){return Object(d.e)("strong",n)}),{})),r.description2&&Object(d.e)("p",{className:"t-heading-secondary"},r.description2)):null}return Object(d.e)("p",{className:"t-heading-secondary"},n.oneTime.description)},_=function(n){var e=n.monthlyBgColor,t=Object(m.d)(null),o=Object(m.a)(p),i=Object(m.a)(h),r=y();if(Object(m.c)((function(){t.current&&o&&(o.monthlyDonation&&e?t.current.style.background=e:i.oneTime.bgColor&&(t.current.style.background=i.oneTime.bgColor))}),[o,e]),!o)return null;var a=o.donationAmount,l=o.monthlyDonation,s=o.customDonation;return Object(d.e)("div",{ref:t,className:"description"},j(r,l,a,s))},O=t("ANJM"),w=t.n(O),N=function(n){var e=n.handleClick,t=n.extraClasses,o=void 0===t?[]:t,i=n.children;return Object(d.e)("button",{className:["btn"].concat(o).join(" "),onClick:e},i)},C=function(n){var e=n.monthlyDonation,t=n.extraClasses,o=void 0===t?[]:t,r=y(),a=Object(m.a)(p),l=Object(m.a)(h),s=l.onSubmit,c=l.currency,u=l.mode,g=e?r.monthly:r.oneTime,f=null==a?void 0:a.donationAmount,v=function(n){if(f&&!Number.isNaN(Number(f))){var t,o,r,a,l=e?"MONTHLY":"ONCE";if("function"==typeof s)s({amount:f,frequency:l});else{var c=(a=void 0===(r=(t={company:s.charity,frequency:l,amount:f,mode:n,extras:s.params}).extras)?{}:r,"https://www.every.org/"+(o=t.company)+"/donate?"+Object.entries(i({frequency:t.frequency,amount:t.amount,utm_campaign:"single-or-split",utm_content:t.mode.toLowerCase(),utm_source:o,utm_medium:"donate-button-0.2"},a)).map((function(n){return n.join("=")})).join("&"));window.location.href=c}}};return Object(d.e)(N,{extraClasses:o,handleClick:function(){v(u)}},function(n,e,t){return t&&!Number.isNaN(Number(t))?b({amount:"$"+t+" "+e},n):b({amount:""},n)}(g.button,c,f))},k=t("Oxty"),S=t.n(k),D=Object(d.e)("span",{className:"t-input input__prefix no-line-height"},"$"),T=function(n){var e=n.value,t=n.setValue,o=n.extraClasses,i=n.label,a=n.placeholder,l=n.description,s=n.selected,c=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e.indexOf(t=r[o])>=0||(i[t]=n[t]);return i}(n,["value","setValue","extraClasses","label","placeholder","description","selected"]),u=["input__container"].concat(o).concat([s?"input--selected":""]).concat(e?["input--filled"]:[]);return Object(d.e)("div",{className:u.join(" ")},Object(d.e)("div",{className:"input"},D,Object(d.e)("input",r({className:["t-input","input__input"].join(" "),placeholder:a,type:"text",value:e,onChange:function(n){t(n.currentTarget.value)}},c)),i&&Object(d.e)("span",{className:"t-input input__suffix no-line-height"},i)),l&&Object(d.e)("p",{className:"t-body input__description"},l))},z=t("uuJQ"),E=t.n(z),A=function(n){var e=n.name,t=n.text,o=n.amount,i=n.handleClick,r=n.description,a=n.image,l=n.bgColor,s=["radio-button"];n.selected&&s.push("radio-button--selected");var c=["radio-button__label"].concat([t?"u-justify-content-space-between":"u-justify-content-center"]);return Object(d.e)("div",{className:s.join(" ")},Object(d.e)("input",{onClick:i,className:"radio-button__input",type:"radio",name:e,id:o}),Object(d.e)("label",{className:c.join(" "),htmlFor:o},t&&Object(d.e)("span",{className:"t-label radio-button__text"},t),Object(d.e)("span",{className:"t-label radio-button__amount"},"$",o)),t&&r&&Object(d.e)("div",{style:{backgroundColor:l},className:"radio-button__extra"},Object(d.e)("div",{className:"radio-button__img-container"},Object(d.e)("img",{className:"radio-button__image",src:a,alt:t})),Object(d.e)("p",{className:"t-body radio-button__description"},r)))},F=function(n,e){return n.findIndex((function(n){return n.amount===e}))},I=function(n){var e=n.monthlyDonation,t=Object(m.a)(p),i=Object(m.a)(h),r=i.monthly,a=i.oneTime,l=Object(m.e)(!1),s=l[0],c=l[1],u=y(),g=e?u.monthly:u.oneTime;if(Object(m.b)((function(){var n=r.levels.find((function(n){return n.default}));if(n){w(r.levels[0].amount);var e=setTimeout((function(){w(n.amount)}));return function(){clearTimeout(e)}}}),[]),!t)return null;var f=t.donationAmount,b=t.setDonationAmount,v=t.customDonation,x=t.setCustomDonation,j=t.setTriggerAnimation,_=function(){var n=f?F(r.levels,f):0;e&&j&&j([n,r.levels.length-1]),b&&b(v),c(!0)},O=function(){c(!1)},w=function(n){var t=v||!f?r.levels.length-1:F(r.levels,f),o=F(r.levels,n);e&&j&&j([t,o]),b(n),x("")},N=function(n){b(n),x(n)},k=r.levels.filter((function(n){return"custom"!==n.amount})),S=r.levels.find((function(n){return"custom"===n.amount})),D=e?k.every((function(n){var e,t;return null==g||null==(e=g.levels)||null==(t=e.find((function(e){return e.amount===n.amount})))?void 0:t.name})):a.levels.every((function(n){var e,t;return null==g||null==(e=g.levels)||null==(t=e.find((function(e){return e.amount===String(n)})))?void 0:t.name})),z=["donations__form"].concat([D?"donations__form--one-column":"donations__form--two-column"]);return Object(d.e)(d.b,null,Object(d.e)("div",{className:z.join(" ")},e&&Object(d.e)(d.b,null,k.map((function(n,e){var t,i,r,a,l,s,c=null==(t=g.levels)||null==(i=t.find((function(e){return e.amount===n.amount})))?void 0:i.description1;return Object(d.e)(A,{key:e,name:"amount",amount:n.amount,selected:f===n.amount,handleClick:function(){w(n.amount)},text:D&&null!=(r=null==(a=g.levels)||null==(l=a.find((function(e){return e.amount===n.amount})))?void 0:l.name)?r:"",description:c&&(s=c,o(s,"bold",(function(n){return Object(d.e)("span",n)}),{})),image:n.img,bgColor:n.bgColor})})),S&&Object(d.e)(T,{label:g.custom.label,placeholder:g.custom.placeholder,value:v,setValue:N,description:u.oneTime.description,extraClasses:["donations__input"],onFocus:_,onBlur:O,selected:s})),!e&&Object(d.e)(d.b,null,a.levels.map((function(n){var e,t;return Object(d.e)(A,{key:n,name:"amount",amount:String(n),selected:f===String(n),handleClick:function(){w(String(n))},text:D?null==g||null==(e=g.levels)||null==(t=e.find((function(e){return(null==e?void 0:e.amount)===String(n)})))?void 0:t.name:""})})),a.allowCustom&&Object(d.e)(T,{placeholder:g.custom.placeholder,value:v,setValue:N,extraClasses:["donations__input"],onFocus:_,onBlur:O,selected:s}))),Object(d.e)("div",{className:"donations__submit"},Object(d.e)(C,{monthlyDonation:e,extraClasses:["u-hide-mobile"]}),Object(d.e)("p",{className:"t-body--small"},u.footer)))},U=function(n){var e=n.monthlyDonation,t=y(),o=e?t.monthly:t.oneTime;return Object(d.e)(d.b,null,Object(d.e)("h1",{className:"t-heading-primary"},o.header),Object(d.e)("h2",{className:"t-heading-secondary"},o.info))},R=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg",M=t("UpYz"),P=t.n(M),V=Object(d.e)("img",{className:"logo__img",src:R,alt:"logo"}),B=function(n){var e=n.monthlyDonation,t=void 0===e||e,i=n.scrolled,r=void 0!==i&&i,a=y(),l=t?a.monthly.logo:a.oneTime.logo,s=function(n,e){return o(n,"link",(function(n){return Object(d.e)("a",n)}),{className:"logo__link",href:e})}(l.text,l.link),c=r?"box-shadow: 0 3px 7px 0px rgba(0, 0, 0, 0.1)":"";return Object(d.e)("div",{className:"logo",style:c},V,Object(d.e)("div",{className:"t-title logo__title"},l.header),Object(d.e)("p",{className:"t-body--small logo__link"},s))},Y=t("lUhE"),L=t.n(Y),$=function(n){var e=n.handleClick,t=n.monthlyDonation,i=y(),r=t?i.monthly:i.oneTime;return Object(d.e)("p",{className:"t-title donation-type"},function(n,e){return o(n,"action",(function(n){return Object(d.e)("span",n)}),{onClick:e})}(r.switch,e))},G=t("jgzK"),H=t.n(G),J=function(n){var e=n.monthlyDonation,t=n.setMonthlyDonation,o=Object(m.d)(null),i=Object(m.e)(!1),r=i[0],a=i[1];return Object(m.b)((function(){var n,e=function(){o.current&&a(o.current.scrollTop>0)};return null==(n=o.current)||n.addEventListener("scroll",e),e(),function(){var n;return null==(n=o.current)?void 0:n.removeEventListener("scroll",e)}}),[]),Object(d.e)(d.b,null,Object(d.e)("div",{ref:o,className:"donations"},Object(d.e)(B,{scrolled:r,monthlyDonation:e}),Object(d.e)("div",{className:"donations__header"},Object(d.e)(U,{monthlyDonation:e})),Object(d.e)(I,{monthlyDonation:e}),Object(d.e)($,{handleClick:function(){t(!e)},monthlyDonation:e})))},q=t("KIIj"),K=t.n(q),W=t("2Pik"),Q=t.n(W),Z=t("Rsgl"),X=[K.a,E.a,S.a,t.n(Z).a,Q.a,H.a,L.a,P.a,x.a,w.a],nn=function(n){var e,t=n.image,o=Object(m.a)(h),i=Object(m.a)(p),r=null==(e=null==i?void 0:i.monthlyDonation)||e?t:o.oneTime.img;return r?Object(d.e)("div",{className:"images",style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url("+r+")"}}):null},en=function(){var n=y().company,e=n.logo||R;return Object(d.e)("div",{className:"company"},Object(d.e)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(d.e)("p",{className:"t-title company__title"},n.name),Object(d.e)("p",{className:"t-body--small company__subtitle"},n.location))},tn=t("OsHv"),on=t.n(tn),rn={">":"&gt;","<":"&lt;"},an=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return c(l(e=n.call.apply(n,[this].concat(o))||this),"scopeClassNameCache",{}),c(l(e),"scopedCSSTextCache",{}),c(l(e),"scoped",void 0===e.props.scoped||e.props.scoped),c(l(e),"pepper",""),c(l(e),"getStyleString",(function(){if(Array.isArray(e.props.children)){var n=e.props.children.filter((function(n){return!Object(d.g)(n)&&"string"==typeof n}));if(n.length>1)throw new Error("Multiple style objects as direct descedents of a\n        Style component are not supported ("+n.length+" style objects detected):\n        "+n[0]+"\n        ");return n[0]}return"string"!=typeof e.props.children||Object(d.g)(e.props.children)?null:e.props.children})),c(l(e),"getRootElement",(function(){if(Array.isArray(e.props.children)){var n=e.props.children.filter(d.g);return n[0]}return Object(d.g)(e.props.children)?e.props.children:null})),c(l(e),"getRootSelectors",(function(n){var e=[],t=n.props,o=t.id,i=t.className;return o&&e.push("#"+o),i&&i.trim().split(/\s+/g).forEach((function(n){return e.push(n)})),0===e.length&&"function"!=typeof n.type&&e.push(n.type),e})),c(l(e),"processCSSText",(function(n,t,o){return n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map((function(n){var i=/.*:.*;/g,r=/.*:.*(;|$|\s+)/g,a=/\s*@/g,l=/\s*((\d{1,2}|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((function(n,s,c){if(0===n.trim().length)return"";var u=c.length-1===s&&n.match(r);if(n.match(i)||u)return e.escapeTextContentForBrowser(n);var d=n;return t&&!/:target/gi.test(d)?d.match(a)||d.match(l)?d:e.scopeSelector(t,d,o):d})).join("{\n")})).join("}\n")})),c(l(e),"escaper",(function(n){return rn[n]||""})),c(l(e),"escapeTextContentForBrowser",(function(n){return n.replace(/[><]/g,e.escaper)})),c(l(e),"scopeSelector",(function(n,t,o){var i=[];return t.split(/,(?![^(|[]*\)|])/g).forEach((function(t){var r;if(null!=o&&o.length&&o.some((function(n){return t.includes(n)}))){r=t;var a=null==o?void 0:o.map((function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}));r=r.replace(new RegExp("("+(null==a?void 0:a.join("|"))+")"),"$1"+n),i.push(r,e.scoped?n+" "+t:t)}else i.push(e.scoped?n+" "+t:t)})),!e.scoped&&i.length>1?i[1]:i.join(", ")})),c(l(e),"getScopeClassName",(function(n,t){var o=n;return t&&(e.pepper="",e.traverseObjectToGeneratePepper(t),o+=e.pepper),"s"+String(on()(o))})),c(l(e),"traverseObjectToGeneratePepper",(function(n,t){void 0===t&&(t=0),t>32||e.pepper.length>1e4||"object"==typeof n&&n&&Object.entries(n).forEach((function(n){var o=n[1],i=/^[_$]|type|ref|^value$/.test(n[0]);Boolean(o)&&"object"==typeof o&&!i?e.traverseObjectToGeneratePepper(o,t+1):Boolean(o)&&!i&&"function"!=typeof o&&(e.pepper+=o)}))})),c(l(e),"isVoidElement",(function(n){return["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some((function(e){return n===e}))})),c(l(e),"createStyleElement",(function(n,e){return Object(d.e)("style",{id:"direflow_styles",type:"text/css",key:e,dangerouslySetInnerHTML:{__html:n||""}})})),c(l(e),"getNewChildrenForCloneElement",(function(n,t,o){return[e.createStyleElement(n,o),t.props.children]})),e}var t,o;return o=n,(t=e).prototype=Object.create(o.prototype),t.prototype.constructor=t,s(t,o),e.prototype.render=function(){var n,e,t,o=null!=(n=this.getStyleString())?n:"",i=this.getRootElement();if(!o&&i)return i.props.children;if(o&&!i)return this.createStyleElement(this.processCSSText(o),this.getScopeClassName(o,i));var r,l,s=null!=(e=(null==i?void 0:i.props).id)?e:"",c=null!=(t=(null==i?void 0:i.props).className)?t:"",u=c+s+o;this.scopeClassNameCache[u]?l=this.scopedCSSTextCache[r=this.scopeClassNameCache[u]]:(r=this.getScopeClassName(o,i),l=this.processCSSText(o,"."+r,i&&this.getRootSelectors(i)),this.scopeClassNameCache[u]=r,this.scopedCSSTextCache[r]=l);var m=this.scoped?""+c+r:c;return i&&Object(d.c)(i,a({},i.props,{className:m.trim()}),this.getNewChildrenForCloneElement(l,i,r))},e}(d.a),ln=function(n){var e="string"==typeof n.styles?n.styles.toString():n.styles.join(" ");return Object(d.e)(an,{scoped:n.scoped},e,n.children)},sn=Object(d.e)(en,null),cn=function(n){var e,t=n.options,o=n.hide,i=function(n){n.target===n.currentTarget&&o()},r=Object(m.e)(!0),a=r[0],l=r[1],s=t.monthly.levels.find((function(n){return n.default})),c=Object(m.e)(null!=(e=null==s?void 0:s.amount)?e:t.monthly.levels[0].amount),g=c[0],f=c[1],b=Object(m.e)(""),y=b[0],v=b[1],x=Object(m.e)([-1,0]),j=x[0],O=x[1],w=Object(m.e)([].concat(t.monthly.levels).sort((function(n,e){return Number.isNaN(Number(e.amount))?-1:0}))),N=w[0],k=w[1];return Object(m.b)((function(){var n=j[0],e=j[1];if(n>e){var t=N.map((function(t,o){return o===n?u({},t,{classes:["fadeOutDown"]}):o===e?u({},t,{classes:["fadeInDown","right-panel__item--active"]}):t}));k(t)}if(n<e){var o=N.map((function(t,o){return u({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));k(o)}var i=setTimeout((function(){var n=N.map((function(n,t){return u({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));k(n)}),300);return function(){clearTimeout(i)}}),[j]),Object(d.e)(ln,{scoped:!1,styles:X},Object(d.e)("div",null,Object(d.e)("div",{className:"wrapper",onClick:i},Object(d.e)("div",{className:"close",onClick:i}),Object(d.e)(h.Provider,{value:t},Object(d.e)(p.Provider,{value:{monthlyDonation:a,setMonthlyDonation:l,donationAmount:g,setDonationAmount:f,customDonation:y,setCustomDonation:v,setTriggerAnimation:O}},"SPLIT_PANEL"===t.mode.toUpperCase()&&Object(d.e)("div",{className:"widget widget--split"},Object(d.e)(J,{monthlyDonation:a,setMonthlyDonation:l}),Object(d.e)("div",{className:"right-panel"},sn,N.map((function(n,e){var t;return Object(d.e)("div",{key:e,className:["right-panel__item"].concat(null!=(t=n.classes)?t:[]).join(" ")},n.img&&Object(d.e)(nn,{image:n.img}),Object(d.e)(_,{monthlyBgColor:n.bgColor}))})))),"SINGLE"===t.mode.toUpperCase()&&Object(d.e)("div",{className:"widget widget--single"},Object(d.e)(J,{monthlyDonation:a,setMonthlyDonation:l})),Object(d.e)("div",{className:"u-hide-desktop btn-mobile"},Object(d.e)(C,{monthlyDonation:a,extraClasses:["u-hide-desktop"]})))))))}},hwuB:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n",""]),n.exports=e},jgzK:function(n,e,t){var o=t("ek2p");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("u9N7");n.exports="string"==typeof o?o:o.toString()},mn5G:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},u9N7:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n    padding-bottom: 2rem;\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 1.5rem;\n    }\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("W2lv");n.exports="string"==typeof o?o:o.toString()},wW48:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e}}]);
//# sourceMappingURL=1.chunk.86f2f.js.map