(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2Pik":function(n,e,t){var o=t("dRvM");n.exports="string"==typeof o?o:o.toString()},ANJM:function(n,e,t){var o=t("wW48");n.exports="string"==typeof o?o:o.toString()},"Hp/m":function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},KIIj:function(n,e,t){var o=t("cRcm");n.exports="string"==typeof o?o:o.toString()},OsHv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,i=n.length,r=-4&i;o<r;){for(var a=Math.min(o+4096,r);o<a;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<i;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},Oxty:function(n,e,t){var o=t("hwuB");n.exports="string"==typeof o?o:o.toString()},Rsgl:function(n,e,t){var o=t("mn5G");n.exports="string"==typeof o?o:o.toString()},SOrw:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".logo {\n    display: flex;\n    align-items: flex-start;\n\n    /* Fix logo to the top and scroll the content beneath*/\n    position: sticky;\n    top: 0;\n    background: white;\n\n    margin: -1rem -2rem 0 -2rem;\n    padding: 1.5rem 2rem;\n}\n\n.logo > *:not(:last-child) {\n    margin-right: 1rem;\n}\n\n.logo__heading > * {\n    min-height: 1rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .logo {\n        margin: -1rem -1.5rem 0 -1.5rem;\n        padding: 1.5rem 1.5rem;\n    }\n}\n\n.logo__img {\n    height: 2rem;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},SZxn:function(n,e,t){var o=t("Hp/m");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("SOrw");n.exports="string"==typeof o?o:o.toString()},VNgF:function(n){"use strict";function e(n,e){var t,o,i=n[1]||"",r=n[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=(t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),s=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[i].concat(s).concat([a]).join("\n")}return[i].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(e&&(l[2]=l[2]?"".concat(e," and ").concat(l[2]):e),t.push(l))}},t}},W2lv:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1.25rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},cRcm:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n  z-index: 5;\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n.t-label {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: max-content;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  display: grid;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},dRvM:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.5rem;\n    left: 2rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},ek2p:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 0 2rem;\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .donations {\n        row-gap: 1.5rem;\n        padding: 0 1.5rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--one-column > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--two-column {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},fBbg:function(n,e,t){"use strict";function o(n,e,t,o){if(n){const i=new RegExp(`<${e}>(.*)</${e}>`,"g"),[r,a,s]=n.split(i),l=Object(c.h)(t,o,a);return Object(c.h)(c.Fragment,null,r,l,s)}return n}function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return sn}));var c=t("NMMh"),d=t("uOFG");var m=Object(c.createContext)(null),p=t("QLgr");const h=Object(c.createContext)(p.c);var u=h;const g=(n,e)=>e.replace(/{{(\w*)}}/g,(e,t)=>n[t]?n[t]:"");var b=()=>{var n,e;const t=(()=>{const n=window.navigator.language;return n.includes("-")?n.split("-")[0]:n})(),{i18n:o,language:i}=Object(d.a)(h);return null!=(n=null!=(e=o[i])?e:o[t])?n:o.en},f=t("SZxn"),y=t.n(f);const v=(n,e,t,i)=>{if(!n)return null;if(e){const e=n.monthly.levels?!t||i?n.monthly.custom:((n,e)=>{const t=[...n].sort((n,e)=>Number(n.amount)-Number(e.amount));return Number.isNaN(Number(e))?t[0]:t[Math.max(0,t.findIndex(n=>Number(n.amount)>Number(e))-1)]})(n.monthly.levels,t):void 0;return e&&("description1"in e&&"description2"in e)?Object(c.h)(c.Fragment,null,Object(c.h)("p",{className:"t-heading-secondary"},e.description1&&o(e.description1,"bold",n=>Object(c.h)("strong",n),{})),e.description2&&Object(c.h)("p",{className:"t-heading-secondary"},e.description2)):null}return Object(c.h)("p",{className:"t-heading-secondary"},n.oneTime.description)};var x=({monthlyBgColor:n})=>{const e=Object(d.d)(null),t=Object(d.a)(m),o=Object(d.a)(u),i=b();if(Object(d.c)(()=>{if(!e.current||!t)return;const{monthlyDonation:i}=t;i&&n?e.current.style.background=n:o.oneTime.bgColor&&(e.current.style.background=o.oneTime.bgColor)},[t,n]),!t)return null;const{donationAmount:r,monthlyDonation:a,customDonation:s}=t;return Object(c.h)("div",{ref:e,className:"description"},v(i,a,r,s))},j=t("ANJM"),_=t.n(j),O=function({handleClick:n,extraClasses:e=[],children:t}){return Object(c.h)("button",{className:["btn"].concat(e).join(" "),onClick:n},t)};var w=({monthlyDonation:n,extraClasses:e=[]})=>{const t=b(),o=Object(d.a)(m),{onSubmit:r,currency:a,mode:s}=Object(d.a)(u),l=n?null==t?void 0:t.monthly:null==t?void 0:t.oneTime,p=null==o?void 0:o.donationAmount,h=e=>{if(!p||Number.isNaN(Number(p)))return;const t=n?"MONTHLY":"ONCE";if("function"==typeof r)r({amount:p,frequency:t});else{const n=function({company:n,frequency:e,amount:t,mode:o,extras:r={}}){return`${`https://www.every.org/${n}/donate`}?${Object.entries(i({frequency:e,amount:t,utm_campaign:"single-or-split",utm_content:o.toLowerCase(),utm_source:n,utm_medium:"donate-button-0.2"},r)).map(n=>n.join("=")).join("&")}`}({company:r.charity,frequency:t,amount:p,mode:e,extras:r.params});window.location.href=n}};return Object(c.h)(O,{extraClasses:e,handleClick:()=>{h(s)}},((n,e,t)=>t&&!Number.isNaN(Number(t))?g({amount:`$${t} ${e}`},n):g({amount:""},n))(l.button,a,p))},N=t("Oxty"),C=t.n(N),k=Object(c.h)("span",{className:"t-input input__prefix no-line-height"},"$");var S=n=>{let{value:e,setValue:t,extraClasses:o,label:i,placeholder:a,description:s,selected:l}=n,d=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e.indexOf(t=r[o])>=0||(i[t]=n[t]);return i}(n,["value","setValue","extraClasses","label","placeholder","description","selected"]);const m=["input__container"].concat(o).concat([l?"input--selected":""]).concat(e?["input--filled"]:[]);return Object(c.h)("div",{className:m.join(" ")},Object(c.h)("div",{className:"input"},k,Object(c.h)("input",r({className:["t-input","input__input"].join(" "),placeholder:a,type:"text",value:e,onChange:n=>{t(n.currentTarget.value)}},d)),i&&Object(c.h)("span",{className:"t-input input__suffix no-line-height"},i)),s&&Object(c.h)("p",{className:"t-body input__description"},s))},D=t("uuJQ"),T=t.n(D);var z=({name:n,text:e,amount:t,selected:o,handleClick:i,description:r,image:a,bgColor:s})=>{const l=["radio-button"];o&&l.push("radio-button--selected");const d=["radio-button__label"].concat([e?"u-justify-content-space-between":"u-justify-content-center"]);return Object(c.h)("div",{className:l.join(" ")},Object(c.h)("input",{onClick:i,className:"radio-button__input",type:"radio",name:n,id:t}),Object(c.h)("label",{className:d.join(" "),htmlFor:t},e&&Object(c.h)("span",{className:"t-label radio-button__text"},e),Object(c.h)("span",{className:"t-label radio-button__amount"},"$",t)),e&&r&&Object(c.h)("div",{style:{backgroundColor:s},className:"radio-button__extra"},Object(c.h)("div",{className:"radio-button__img-container"},Object(c.h)("img",{className:"radio-button__image",src:a,alt:e})),Object(c.h)("p",{className:"t-body radio-button__description"},r)))};const E=(n,e)=>n.findIndex(n=>n.amount===e);var F=({monthlyDonation:n})=>{const e=Object(d.a)(m),{monthly:t,oneTime:i}=Object(d.a)(u),[r,a]=Object(d.e)(!1),s=b(),l=n?s.monthly:s.oneTime;if(Object(d.b)(()=>{const n=t.levels.find(n=>n.default);if(n){j(t.levels[0].amount);const e=setTimeout(()=>{j(n.amount)});return()=>{clearTimeout(e)}}},[]),!e)return null;const{donationAmount:p,setDonationAmount:h,customDonation:g,setCustomDonation:f,setTriggerAnimation:y}=e,v=()=>{const e=p?E(t.levels,p):0;n&&y&&y([e,t.levels.length-1]),h&&h(g),a(!0)},x=()=>{a(!1)},j=e=>{const o=g||!p?t.levels.length-1:E(t.levels,p),i=E(t.levels,e);n&&y&&y([o,i]),h(e),f("")},_=n=>{h(n),f(n)},O=t.levels.filter(n=>"custom"!==n.amount),N=t.levels.find(n=>"custom"===n.amount),C=n?O.every(n=>{var e,t;return null==l||null==(e=l.levels)||null==(t=e.find(e=>e.amount===n.amount))?void 0:t.name}):i.levels.every(n=>{var e,t;return null==l||null==(e=l.levels)||null==(t=e.find(e=>e.amount===String(n)))?void 0:t.name}),k=["donations__form"].concat([C?"donations__form--one-column":"donations__form--two-column"]);return Object(c.h)(c.Fragment,null,Object(c.h)("div",{className:k.join(" ")},n&&Object(c.h)(c.Fragment,null,O.map((n,e)=>{var t,i,r,a,s;const d=null==(t=l.levels)||null==(i=t.find(e=>e.amount===n.amount))?void 0:i.description1;return Object(c.h)(z,{key:e,name:"amount",amount:n.amount,selected:p===n.amount,handleClick:()=>{j(n.amount)},text:C&&null!=(r=null==(a=l.levels)||null==(s=a.find(e=>e.amount===n.amount))?void 0:s.name)?r:"",description:d&&(m=d,o(m,"bold",n=>Object(c.h)("span",n),{})),image:n.img,bgColor:n.bgColor});var m}),N&&Object(c.h)(S,{label:l.custom.label,placeholder:l.custom.placeholder,value:g,setValue:_,description:s.oneTime.description,extraClasses:["donations__input"],onFocus:v,onBlur:x,selected:r})),!n&&Object(c.h)(c.Fragment,null,i.levels.map(n=>{var e,t;return Object(c.h)(z,{key:n,name:"amount",amount:String(n),selected:p===String(n),handleClick:()=>{j(String(n))},text:C?null==l||null==(e=l.levels)||null==(t=e.find(e=>(null==e?void 0:e.amount)===String(n)))?void 0:t.name:""})}),i.allowCustom&&Object(c.h)(S,{placeholder:l.custom.placeholder,value:g,setValue:_,extraClasses:["donations__input"],onFocus:v,onBlur:x,selected:r}))),Object(c.h)("div",{className:"donations__submit"},Object(c.h)(w,{monthlyDonation:n,extraClasses:["u-hide-mobile"]}),Object(c.h)("p",{className:"t-body--small"},s.footer)))};var $=({monthlyDonation:n})=>{const e=b(),t=n?e.monthly:e.oneTime;return Object(c.h)(c.Fragment,null,Object(c.h)("h1",{className:"t-heading-primary"},t.header),Object(c.h)("h2",{className:"t-heading-secondary"},t.info))},I=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg",A=t("UpYz"),U=t.n(A);var V=Object(c.h)("img",{className:"logo__img",src:I,alt:"logo"});var M=({monthlyDonation:n=!0,scrolled:e=!1})=>{const t=b(),i=n?t.monthly.logo:t.oneTime.logo,r=((n,e)=>o(n,"link",n=>Object(c.h)("a",n),{className:"logo__link",href:e}))(i.text,i.link),a=e?"box-shadow: 0 3px 7px 0px rgba(0, 0, 0, 0.1)":"";return Object(c.h)("div",{className:"logo",style:a},V,Object(c.h)("div",{className:"logo__heading"},Object(c.h)("h3",{className:"t-title logo__title"},i.header),Object(c.h)("p",{className:"t-body--small logo__link"},r)))},R=t("lUhE"),P=t.n(R);var B=({handleClick:n,monthlyDonation:e})=>{const t=b(),i=e?t.monthly:t.oneTime;return Object(c.h)("p",{className:"t-title donation-type"},((n,e)=>o(n,"action",n=>Object(c.h)("span",n),{onClick:e}))(i.switch,n))},Y=t("jgzK"),L=t.n(Y);var G=({monthlyDonation:n,setMonthlyDonation:e})=>{const t=Object(d.d)(null),[o,i]=Object(d.e)(!1);return Object(d.b)(()=>{var n;const e=()=>{t.current&&i(t.current.scrollTop>0)};return null==(n=t.current)||n.addEventListener("scroll",e),e(),()=>{var n;return null==(n=t.current)?void 0:n.removeEventListener("scroll",e)}},[]),Object(c.h)(c.Fragment,null,Object(c.h)("div",{ref:t,className:"donations"},Object(c.h)(M,{scrolled:o,monthlyDonation:n}),Object(c.h)("div",{className:"donations__header"},Object(c.h)($,{monthlyDonation:n})),Object(c.h)(F,{monthlyDonation:n}),Object(c.h)(B,{handleClick:()=>{e(!n)},monthlyDonation:n})))},H=t("KIIj"),J=t.n(H),q=t("2Pik"),K=t.n(q),W=t("Rsgl");var Q=[J.a,T.a,C.a,t.n(W).a,K.a,L.a,P.a,U.a,y.a,_.a];var Z=({image:n})=>{var e;const t=Object(d.a)(u),o=Object(d.a)(m),i=null==(e=null==o?void 0:o.monthlyDonation)||e?n:t.oneTime.img;return i?Object(c.h)("div",{className:"images",style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url(${i})`}}):null};var X=()=>{const{company:n}=b(),e=n.logo||I;return Object(c.h)("div",{className:"company"},Object(c.h)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(c.h)("p",{className:"t-title company__title"},n.name),Object(c.h)("p",{className:"t-body--small company__subtitle"},n.location))},nn=t("OsHv"),en=t.n(nn);const tn={">":"&gt;","<":"&lt;"};var on=class extends c.Component{constructor(...n){super(...n),s(this,"scopeClassNameCache",{}),s(this,"scopedCSSTextCache",{}),s(this,"scoped",void 0===this.props.scoped||this.props.scoped),s(this,"pepper",""),s(this,"getStyleString",()=>{if(Array.isArray(this.props.children)){const n=this.props.children.filter(n=>!Object(c.isValidElement)(n)&&"string"==typeof n);if(n.length>1)throw new Error(`Multiple style objects as direct descedents of a\n        Style component are not supported (${n.length} style objects detected):\n        ${n[0]}\n        `);return n[0]}return"string"!=typeof this.props.children||Object(c.isValidElement)(this.props.children)?null:this.props.children}),s(this,"getRootElement",()=>{if(Array.isArray(this.props.children)){const n=this.props.children.filter(c.isValidElement);return n[0]}return Object(c.isValidElement)(this.props.children)?this.props.children:null}),s(this,"getRootSelectors",n=>{const e=[],{id:t,className:o}=n.props;return t&&e.push("#"+t),o&&o.trim().split(/\s+/g).forEach(n=>e.push(n)),0===e.length&&"function"!=typeof n.type&&e.push(n.type),e}),s(this,"processCSSText",(n,e,t)=>n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map(n=>{const o=/.*:.*;/g,i=/.*:.*(;|$|\s+)/g,r=/\s*@/g,a=/\s*((\d{1,2}|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((n,s,l)=>{if(0===n.trim().length)return"";const c=l.length-1===s&&n.match(i);if(n.match(o)||c)return this.escapeTextContentForBrowser(n);const d=n;return e&&!/:target/gi.test(d)?d.match(r)||d.match(a)?d:this.scopeSelector(e,d,t):d}).join("{\n")}).join("}\n")),s(this,"escaper",n=>tn[n]||""),s(this,"escapeTextContentForBrowser",n=>n.replace(/[><]/g,this.escaper)),s(this,"scopeSelector",(n,e,t)=>{const o=[];return e.split(/,(?![^(|[]*\)|])/g).forEach(e=>{let i,r;if(null!=t&&t.length&&t.some(n=>e.includes(n))){r=e;const a=null==t?void 0:t.map(n=>n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"));r=r.replace(new RegExp(`(${null==a?void 0:a.join("|")})`),"$1"+n),i=this.scoped?`${n} ${e}`:e,o.push(r,i)}else i=this.scoped?`${n} ${e}`:e,o.push(i)}),!this.scoped&&o.length>1?o[1]:o.join(", ")}),s(this,"getScopeClassName",(n,e)=>{let t=n;return e&&(this.pepper="",this.traverseObjectToGeneratePepper(e),t+=this.pepper),"s"+String(en()(t))}),s(this,"traverseObjectToGeneratePepper",(n,e=0)=>{e>32||this.pepper.length>1e4||"object"==typeof n&&n&&Object.entries(n).forEach(([n,t])=>{const o=/^[_$]|type|ref|^value$/.test(n);Boolean(t)&&"object"==typeof t&&!o?this.traverseObjectToGeneratePepper(t,e+1):Boolean(t)&&!o&&"function"!=typeof t&&(this.pepper+=t)})}),s(this,"isVoidElement",n=>["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some(e=>n===e)),s(this,"createStyleElement",(n,e)=>Object(c.h)("style",{id:"direflow_styles",type:"text/css",key:e,dangerouslySetInnerHTML:{__html:n||""}})),s(this,"getNewChildrenForCloneElement",(n,e,t)=>[this.createStyleElement(n,t),e.props.children])}render(){var n,e,t;const o=null!=(n=this.getStyleString())?n:"",i=this.getRootElement();if(!o&&i)return i.props.children;if(o&&!i)return this.createStyleElement(this.processCSSText(o),this.getScopeClassName(o,i));const r=null!=(e=(null==i?void 0:i.props).id)?e:"",s=null!=(t=(null==i?void 0:i.props).className)?t:"";let l,d;const m=s+r+o;this.scopeClassNameCache[m]?(l=this.scopeClassNameCache[m],d=this.scopedCSSTextCache[l]):(l=this.getScopeClassName(o,i),d=this.processCSSText(o,"."+l,i&&this.getRootSelectors(i)),this.scopeClassNameCache[m]=l,this.scopedCSSTextCache[l]=d);const p=this.scoped?`${s}${l}`:s;return i&&Object(c.cloneElement)(i,a({},i.props,{className:p.trim()}),this.getNewChildrenForCloneElement(d,i,l))}};const rn=n=>{const e="string"==typeof n.styles?n.styles.toString():n.styles.join(" ");return Object(c.h)(on,{scoped:n.scoped},e,n.children)};var an=Object(c.h)(X,null),sn=function({options:n,hide:e}){var t;const o=n=>{n.target===n.currentTarget&&e()},[i,r]=Object(d.e)(Object(p.d)(n));Object(d.b)(()=>{r(Object(p.d)(n))},[]);const a=i.defaultMode!==p.a.ONE_TIME,[s,h]=Object(d.e)(a),g=i.monthly.levels.find(n=>n.default),[b,f]=Object(d.e)(null!=(t=null==g?void 0:g.amount)?t:i.monthly.levels[0].amount),[y,v]=Object(d.e)(""),[j,_]=Object(d.e)([-1,0]),[O,N]=Object(d.e)([...i.monthly.levels].sort((n,e)=>Number.isNaN(Number(e.amount))?-1:0));return Object(d.b)(()=>{const[n,e]=j;if(n>e){const t=O.map((t,o)=>o===n?l({},t,{classes:["fadeOutDown"]}):o===e?l({},t,{classes:["fadeInDown","right-panel__item--active"]}):t);N(t)}if(n<e){const t=O.map((t,o)=>l({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]}));N(t)}const t=setTimeout(()=>{const n=O.map((n,t)=>l({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]}));N(n)},300);return()=>{clearTimeout(t)}},[j]),Object(c.h)(rn,{scoped:!1,styles:Q},Object(c.h)("div",null,Object(c.h)("div",{className:"wrapper",onClick:o},Object(c.h)("div",{className:"close",onClick:o}),Object(c.h)(u.Provider,{value:i},Object(c.h)(m.Provider,{value:{monthlyDonation:s,setMonthlyDonation:h,donationAmount:b,setDonationAmount:f,customDonation:y,setCustomDonation:v,setTriggerAnimation:_}},"SPLIT_PANEL"===i.mode.toUpperCase()&&Object(c.h)("div",{className:"widget widget--split"},Object(c.h)(G,{monthlyDonation:s,setMonthlyDonation:h}),Object(c.h)("div",{className:"right-panel"},an,O.map((n,e)=>{var t;return Object(c.h)("div",{key:e,className:["right-panel__item"].concat(null!=(t=n.classes)?t:[]).join(" ")},n.img&&Object(c.h)(Z,{image:n.img}),Object(c.h)(x,{monthlyBgColor:n.bgColor}))}))),"SINGLE"===i.mode.toUpperCase()&&Object(c.h)("div",{className:"widget widget--single"},Object(c.h)(G,{monthlyDonation:s,setMonthlyDonation:h})),Object(c.h)("div",{className:"u-hide-desktop btn-mobile"},Object(c.h)(w,{monthlyDonation:s,extraClasses:["u-hide-desktop"]})))))))}},hwuB:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n",""]),n.exports=e},jgzK:function(n,e,t){var o=t("ek2p");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("u9N7");n.exports="string"==typeof o?o:o.toString()},mn5G:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},u9N7:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n    padding-bottom: 2rem;\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 1.5rem;\n    }\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("W2lv");n.exports="string"==typeof o?o:o.toString()},wW48:function(n,e,t){(e=t("VNgF")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e}}]);
//# sourceMappingURL=1.chunk.314ef.esm.js.map