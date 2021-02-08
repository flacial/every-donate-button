(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1LOa":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n    padding-bottom: 2rem;\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 1.5rem;\n    }\n}\n",""]),n.exports=e},"2Pik":function(n,e,t){var o=t("mU8M");n.exports="string"==typeof o?o:o.toString()},"4kCZ":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e},"7hI2":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 0 2rem;\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .donations {\n        row-gap: 1.5rem;\n        padding: 0 1.5rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--one-column > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--two-column {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},Ai0b:function(n){"use strict";function e(n,e){var t,o,i=n[1]||"",r=n[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=(t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),s=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[i].concat(s).concat([a]).join("\n")}return[i].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(e&&(l[2]=l[2]?"".concat(e," and ").concat(l[2]):e),t.push(l))}},t}},CvPi:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n",""]),n.exports=e},EJIf:function(n,e,t){var o=t("4kCZ");n.exports="string"==typeof o?o:o.toString()},KIIj:function(n,e,t){var o=t("ZaWy");n.exports="string"==typeof o?o:o.toString()},LhVE:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},Oxty:function(n,e,t){var o=t("CvPi");n.exports="string"==typeof o?o:o.toString()},"R3/S":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".logo {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    column-gap: 1rem;\n\n    /* Fix logo to the top and scroll the content beneath*/\n    position: sticky;\n    top: 0;\n    background: white;\n\n    margin: -1rem -2rem 0 -2rem;\n    padding: 1.5rem 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .logo {\n        margin: -1rem -1.5rem 0 -1.5rem;\n        padding: 1.5rem 1.5rem;\n    }\n}\n\n.logo__img {\n    height: 2rem;\n    grid-row: 1 / -1;\n    align-self: center;\n}\n\n.logo__title {\n    align-self: start;\n}\n\n.logo__link {\n    align-self: end;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},Rsgl:function(n,e,t){var o=t("LhVE");n.exports="string"==typeof o?o:o.toString()},SZxn:function(n,e,t){var o=t("tEhV");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("R3/S");n.exports="string"==typeof o?o:o.toString()},YENv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,i=n.length,r=-4&i;o<r;){for(var a=Math.min(o+4096,r);o<a;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<i;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},YuUb:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function i(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return sn}));var l=t("hosL"),c=t("QRet"),u=t("KIIj"),d=t.n(u),m=t("uuJQ"),p=t.n(m),g=t("Oxty"),h=t.n(g),f=t("Rsgl"),b=t.n(f),y=t("2Pik"),v=t.n(y),x=t("jgzK"),_=t.n(x),j=t("lUhE"),w=t.n(j),O=t("UpYz"),C=t.n(O),N=t("SZxn"),k=t.n(N),S=t("EJIf"),D=[d.a,p.a,h.a,b.a,v.a,_.a,w.a,C.a,k.a,t.n(S).a],T=t("YENv"),z=t.n(T),A=function(n){function e(){for(var e,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return r(i(e=n.call.apply(n,[this].concat(o))||this),"scopeClassNameCache",{}),r(i(e),"scopedCSSTextCache",{}),r(i(e),"scoped",void 0===e.props.scoped||e.props.scoped),r(i(e),"pepper",""),r(i(e),"getStyleString",(function(){if(e.props.children instanceof Array){var n=e.props.children.filter((function(n){return!Object(l.g)(n)&&"string"==typeof n}));if(n.length>1)throw new Error("Multiple style objects as direct descedents of a\n        Style component are not supported ("+n.length+" style objects detected):\n        "+n[0]+"\n        ");return n[0]}return"string"!=typeof e.props.children||Object(l.g)(e.props.children)?null:e.props.children})),r(i(e),"getRootElement",(function(){if(e.props.children instanceof Array){var n=e.props.children.filter((function(n){return Object(l.g)(n)}));return n[0]}return Object(l.g)(e.props.children)?e.props.children:null})),r(i(e),"getRootSelectors",(function(n){var e=[];return n.props.id&&e.push("#"+n.props.id),n.props.className&&n.props.className.trim().split(/\s+/g).forEach((function(n){return e.push(n)})),e.length||"function"==typeof n.type||e.push(n.type),e})),r(i(e),"processCSSText",(function(n,t,o){return n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map((function(n){var i=/.*:.*;/g,r=/.*:.*(;|$|\s+)/g,a=/\s*@/g,s=/\s*(([0-9][0-9]?|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((function(n,l,c){if(!n.trim().length)return"";var u=c.length-1===l&&n.match(r);if(n.match(i)||u)return e.escapeTextContentForBrowser(n);var d=n;return t&&!/:target/gi.test(d)?d.match(a)||d.match(s)?d:e.scopeSelector(t,d,o):d})).join("{\n")})).join("}\n")})),r(i(e),"escaper",(function(n){return{">":"&gt;","<":"&lt;"}[n]})),r(i(e),"escapeTextContentForBrowser",(function(n){return(""+n).replace(/[><]/g,e.escaper)})),r(i(e),"scopeSelector",(function(n,t,o){var i=[];return t.split(/,(?![^(|[]*\)|\])/g).forEach((function(t){var r;if((null==o?void 0:o.length)&&o.some((function(n){return t.match(n)}))){r=t;var a=null==o?void 0:o.map((function(n){return n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}));r=r.replace(new RegExp("("+(null==a?void 0:a.join("|"))+")"),"$1"+n),i.push(r,e.scoped?n+" "+t:t)}else i.push(e.scoped?n+" "+t:t)})),!e.scoped&&i.length>1?i[1]:i.join(", ")})),r(i(e),"getScopeClassName",(function(n,t){var o=n;return t&&(e.pepper="",e.traverseObjectToGeneratePepper(t),o+=e.pepper),"s"+z()(o)})),r(i(e),"traverseObjectToGeneratePepper",(function(n,t){void 0===t&&(t=0),t>32||e.pepper.length>1e4||Object.keys(n).forEach((function(o){var i=/^[_$]|type|ref|^value$/.test(o);n[o]&&"object"==typeof n[o]&&!i?e.traverseObjectToGeneratePepper(n[o],t+1):n[o]&&!i&&"function"!=typeof n[o]&&(e.pepper+=n[o])}))})),r(i(e),"isVoidElement",(function(n){return["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some((function(e){return n===e}))})),r(i(e),"createStyleElement",(function(n,e){return Object(l.e)("style",{id:"direflow_styles",type:"text/css",key:e,dangerouslySetInnerHTML:{__html:n||""}})})),r(i(e),"getNewChildrenForCloneElement",(function(n,t,o){return[e.createStyleElement(n,o)].concat(t.props.children)})),e}var t,a;return a=n,(t=e).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,e.prototype.render=function(){var n=this.getStyleString(),e=this.getRootElement();if(!n&&e)return e.props.children;if(n&&!e)return this.createStyleElement(this.processCSSText(n),this.getScopeClassName(n,e));var t,i,r=e.props.className?e.props.className+" ":"",a=r+(e.props.id?e.props.id:"")+n;this.scopeClassNameCache[a]?i=this.scopedCSSTextCache[t=this.scopeClassNameCache[a]]:(t=this.getScopeClassName(n,e),i=this.processCSSText(n,"."+t,this.getRootSelectors(e)),this.scopeClassNameCache[a]=t,this.scopedCSSTextCache[t]=i);var s=this.scoped?""+r+t:r;return Object(l.c)(e,o({},e.props,{className:s.trim()}),this.getNewChildrenForCloneElement(i,e,t))},e}(l.a),E=function(n){var e;return e="string"==typeof n.styles?n.styles.toString():n.styles.reduce((function(n,e){return n+" "+e})),Object(l.e)(A,{scoped:n.scoped},e,n.children)},I=Object(l.d)({}),U=I,R=function(){var n=function(){var n=window.navigator.language;return n.includes("-")?n.split("-")[0]:n}(),e=Object(c.a)(I),t=e.i18n,o=e.language;return t[o]?t[o]:t[n]?t[n]:t.en},P=function(n,e){return e.replace(/{{(\w*)}}/g,(function(e,t){return n[t]?n[t]:""}))},Y=function(n,e,t,o){if(n){var i=new RegExp("<"+e+">(.*)</"+e+">","g"),r=n.split(i),a=r[0],s=r[1],c=r[2],u=Object(l.e)(t,o,s);return Object(l.e)(l.b,null,a,u,c)}return n},L=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg",M=Object(l.e)("img",{className:"logo__img",src:L,alt:"logo"}),F=function(n){var e=n.monthlyDonation,t=void 0===e||e,o=n.scrolled,i=void 0!==o&&o,r=R(),a=t?r.monthly.logo:r.oneTime.logo,s=function(n,e){return Y(n,"link","a",{className:"logo__link",href:e})}(a.text,a.link),c=i?"box-shadow: 0 3px 7px 0px rgba(0, 0, 0, 0.1)":"";return Object(l.e)("div",{className:"logo",style:c},M,Object(l.e)("div",{className:"t-title logo__title"},a.header),Object(l.e)("p",{className:"t-body--small logo__link"},s))},$=function(n){var e=n.handleClick,t=n.monthlyDonation,o=R(),i=t?o.monthly:o.oneTime;return Object(l.e)("p",{className:"t-title donation-type"},function(n,e){return Y(n,"action","span",{onClick:e})}(i.switch,e))},V=function(n){var e=n.monthlyDonation,t=R(),o=e?t.monthly:t.oneTime;return Object(l.e)(l.b,null,Object(l.e)("h1",{className:"t-heading-primary"},o.header),Object(l.e)("h2",{className:"t-heading-secondary"},o.info))},B=function(n){var e=n.name,t=n.text,o=n.amount,i=n.handleClick,r=n.description,a=n.image,s=n.bgColor,c=["radio-button"];n.selected&&c.push("radio-button--selected");var u=["radio-button__label"].concat([t?"u-justify-content-space-between":"u-justify-content-center"]);return Object(l.e)("div",{className:c.join(" ")},Object(l.e)("input",{onClick:i,className:"radio-button__input",type:"radio",name:e,id:o}),Object(l.e)("label",{className:u.join(" "),htmlFor:o},t&&Object(l.e)("span",{className:"t-label radio-button__text"},t),Object(l.e)("span",{className:"t-label radio-button__amount"},"$",o)),t&&r&&Object(l.e)("div",{style:{backgroundColor:s},className:"radio-button__extra"},Object(l.e)("div",{className:"radio-button__img-container"},Object(l.e)("img",{className:"radio-button__image",src:a,alt:t})),Object(l.e)("p",{className:"t-body radio-button__description"},r)))},J=Object(l.e)("span",{className:"t-input input__prefix no-line-height"},"$"),Z=function(n){var e=n.value,t=n.setValue,o=n.extraClasses,i=n.label,r=n.placeholder,s=n.description,c=n.selected,u=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e.indexOf(t=r[o])>=0||(i[t]=n[t]);return i}(n,["value","setValue","extraClasses","label","placeholder","description","selected"]),d=["input__container"].concat(o).concat([c?"input--selected":""]).concat(e?["input--filled"]:[]);return Object(l.e)("div",{className:d.join(" ")},Object(l.e)("div",{className:"input"},J,Object(l.e)("input",a({className:["t-input","input__input"].join(" "),placeholder:r,type:"text",value:e,onChange:function(n){return t(n.target.value)}},u)),i&&Object(l.e)("span",{className:"t-input input__suffix no-line-height"},i)),s&&Object(l.e)("p",{className:"t-body input__description"},s))},G=Object(l.d)(),K=function(n){var e=n.handleClick,t=n.extraClasses,o=n.children;return Object(l.e)("button",{className:["btn"].concat(t).join(" "),onClick:e},o)},q=function(n){return!!(n&&n.constructor&&n.call&&n.apply)},H=function(n){var e=n.monthlyDonation,t=n.extraClasses,o=void 0===t?[]:t,i=R(),r=Object(c.a)(G).donationAmount,a=Object(c.a)(U),s=a.onSubmit,u=a.currency,d=a.mode,m=e?i.monthly:i.oneTime,p=function(n){if(!isNaN(r)){var t=e?"MONTHLY":"ONCE";if(q(s))s({amount:r,frequency:t});else{var o=function(n,e,t,o,i){return""+("https://www.every.org/"+n+"/donate?frequency="+e+"&amount="+t+"&utm_campaign=single-or-split&utm_content="+o.toLowerCase()+"&utm_source="+n+"&utm_medium=every-month")+Object.keys(i).reduce((function(n,e){return n.concat("&"+e+"="+i[e])}),"")}(s.charity,t,r,n,s.params);window.location.href=o}}};return Object(l.e)(K,{extraClasses:o,handleClick:function(){return p(d)}},function(n,e,t){return n&&!isNaN(n)?P({amount:"$"+n+" "+t},e):P({amount:""},e)}(r,m.button,u))},Q=function(n,e){return n.findIndex((function(n){return n.amount==e}))},W=function(n){var e=n.monthlyDonation,t=Object(c.a)(G),o=t.donationAmount,i=t.setDonationAmount,r=t.customDonation,a=t.setCustomDonation,s=t.setTriggerAnimation,u=Object(c.a)(U),d=u.monthly,m=u.oneTime,p=Object(c.e)(!1),g=p[0],h=p[1],f=R(),b=e?f.monthly:f.oneTime;Object(c.b)((function(){var n=d.levels.find((function(n){return n.default}));if(n){x(d.levels[0].amount);var e=setTimeout((function(){x(n.amount)}));return function(){return clearTimeout(e)}}}),[]);var y=function(){var n=Q(d.levels,o);e&&s([n,d.levels.length-1]),i(r),h(!0)},v=function(){h(!1)},x=function(n){var t=r||!o?d.levels.length-1:Q(d.levels,o),l=Q(d.levels,n);e&&s([t,l]),i(n),a("")},_=function(n){i(n),a(n)},j=d.levels.filter((function(n){return"custom"!==n.amount})),w=d.levels.find((function(n){return"custom"===n.amount})),O=e?j.every((function(n){var e,t;return null==b||null==(e=b.levels)||null==(t=e.find((function(e){return e.amount===n.amount})))?void 0:t.name})):m.levels.every((function(n){var e,t;return null==b||null==(e=b.levels)||null==(t=e.find((function(e){return e.amount===n})))?void 0:t.name})),C=["donations__form"].concat([O?"donations__form--one-column":"donations__form--two-column"]);return Object(l.e)(l.b,null,Object(l.e)("div",{className:C.join(" ")},e&&Object(l.e)(l.b,null,j.map((function(n,e){var t,i,r;return Object(l.e)(B,{key:e,name:"amount",amount:n.amount,selected:o===n.amount,handleClick:function(){return x(n.amount)},text:O?null==(t=b.levels.find((function(e){return e.amount===n.amount})))?void 0:t.name:"",description:(r=null==(i=b.levels.find((function(e){return e.amount===n.amount})))?void 0:i.description1,Y(r,"bold","span",{})),image:n.img,bgColor:n.bgColor})})),w&&Object(l.e)(Z,{label:b.custom.label,placeholder:b.custom.placeholder,value:r,setValue:_,description:f.oneTime.description,extraClasses:["donations__input"],onFocus:y,onBlur:v,selected:g})),!e&&Object(l.e)(l.b,null,m.levels.map((function(n){var e,t;return Object(l.e)(B,{key:n,name:"amount",amount:n,selected:o===n,handleClick:function(){return x(n)},text:O?null==b||null==(e=b.levels)||null==(t=e.find((function(e){return(null==e?void 0:e.amount)===n})))?void 0:t.name:""})})),m.allowCustom&&Object(l.e)(Z,{placeholder:b.custom.placeholder,value:r,setValue:_,extraClasses:["donations__input"],onFocus:y,onBlur:v,selected:g}))),Object(l.e)("div",{className:"donations__submit"},Object(l.e)(H,{monthlyDonation:e,extraClasses:["u-hide-mobile"]}),Object(l.e)("p",{className:"t-body--small"},f.footer)))},X=function(n){var e=n.monthlyDonation,t=n.setMonthlyDonation,o=Object(c.d)(null),i=Object(c.e)(!1),r=i[0],a=i[1];return Object(c.b)((function(){var n=function(){o.current&&a(o.current.scrollTop>0)};return o.current.addEventListener("scroll",n),n(),function(){return o.current.removeEventListener("scroll",n)}}),[]),Object(l.e)(l.b,null,Object(l.e)("div",{ref:o,className:"donations"},Object(l.e)(F,{scrolled:r,monthlyDonation:e}),Object(l.e)("div",{className:"donations__header"},Object(l.e)(V,{monthlyDonation:e})),Object(l.e)(W,{monthlyDonation:e}),Object(l.e)($,{handleClick:function(){return t(!e)},monthlyDonation:e})))},nn=function(n,e,t,o){if(e){var i=!t||o?n.monthly.custom:function(n,e){return n.reduce((function(n,t){return parseInt(t.amount,10)<=parseInt(e,10)?t:n}))}(n.monthly.levels,t);return Object(l.e)(l.b,null,Object(l.e)("p",{className:"t-heading-secondary"},i.description1&&Y(i.description1,"bold","strong",{})),i.description2&&Object(l.e)("p",{className:"t-heading-secondary"},i.description2))}return Object(l.e)("p",{className:"t-heading-secondary"},n.oneTime.description)},en=function(n){var e=n.bgColor,t=Object(c.d)(null),o=Object(c.a)(G),i=o.donationAmount,r=o.monthlyDonation,a=o.customDonation,s=Object(c.a)(U),u=R();return Object(c.c)((function(){t.current&&(t.current.style.background=r?e:s.oneTime.bgColor)}),[i,r,s,e]),Object(l.e)("div",{ref:t,className:"description"},nn(u,r,i,a))},tn=function(n){var e=n.image,t=Object(c.a)(U),o=Object(c.a)(G).monthlyDonation?e:t.oneTime.img;return Object(l.e)("div",{className:"images",style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url("+o+")"}})},on=function(){var n=R().company,e=n.logo||L;return Object(l.e)("div",{className:"company"},Object(l.e)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(l.e)("p",{className:"t-title company__title"},n.name),Object(l.e)("p",{className:"t-body--small company__subtitle"},n.location))},rn=t("ahFK"),an=Object(l.e)(on,null),sn=function(n){var e,t,o=n.options,i=n.hide,r=function(n){return n.target===n.currentTarget&&i()},a=Object(c.e)(!0),u=a[0],d=a[1],m=o.monthly.levels.find((function(n){return n.default})),p=Object(c.e)((null==m?void 0:m.amount)||(null==(e=o.monthly.levels)||null==(t=e[0])?void 0:t.amount)),g=p[0],h=p[1],f=Object(c.e)(""),b=f[0],y=f[1],v=Object(c.e)([-1,0]),x=v[0],_=v[1],j=Object(c.e)(o.monthly.levels.sort((function(n,e){return isNaN(e.amount)?-1:0}))),w=j[0],O=j[1];return Object(c.b)((function(){var n=x[0],e=x[1];if(n>e){var t=w.map((function(t,o){return o===n?s({},t,{classes:["fadeOutDown"]}):o===e?s({},t,{classes:["fadeInDown","right-panel__item--active"]}):t}));O(t)}if(n<e){var o=w.map((function(t,o){return s({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));O(o)}var i=setTimeout((function(){var n=w.map((function(n,t){return s({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]})}));O(n)}),300);return function(){return clearTimeout(i)}}),[x]),Object(l.e)(E,{scoped:!1,styles:D},Object(l.e)("div",null,Object(l.e)("div",{className:"wrapper",onClick:r},Object(l.e)("div",{className:"close",onClick:r}),Object(l.e)(U.Provider,{value:o},Object(l.e)(G.Provider,{value:{monthlyDonation:u,setMonthlyDonation:d,donationAmount:g,setDonationAmount:h,customDonation:b,setCustomDonation:y,setTriggerAnimation:_}},o.mode.toUpperCase()===rn.a.SPLIT_PANEL&&Object(l.e)("div",{className:"widget widget--split"},Object(l.e)(X,{monthlyDonation:u,setMonthlyDonation:d}),Object(l.e)("div",{className:"right-panel"},an,w.map((function(n,e){return Object(l.e)("div",{key:e,className:["right-panel__item"].concat(n.classes).join(" ")},Object(l.e)(tn,{image:n.img}),Object(l.e)(en,{bgColor:n.bgColor}))})))),o.mode.toUpperCase()===rn.a.SINGLE&&Object(l.e)("div",{className:"widget widget--single"},Object(l.e)(X,{monthlyDonation:u,setMonthlyDonation:d})),Object(l.e)("div",{className:"u-hide-desktop btn-mobile"},Object(l.e)(H,{monthlyDonation:u,extraClasses:["u-hide-desktop"]})))))))}},ZaWy:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n  z-index: 5;\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n.t-label {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: max-content;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  display: grid;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},fANn:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1.25rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},jgzK:function(n,e,t){var o=t("7hI2");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("1LOa");n.exports="string"==typeof o?o:o.toString()},mU8M:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.5rem;\n    left: 2rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},tEhV:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n}\n\n@media only screen and (max-width: 64em), (max-height: 46.3125em)  {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("fANn");n.exports="string"==typeof o?o:o.toString()}}]);
//# sourceMappingURL=1.chunk.5ad37.js.map