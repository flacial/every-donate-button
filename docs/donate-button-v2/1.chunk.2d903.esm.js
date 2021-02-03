(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1LOa":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n    padding-bottom: 2rem;\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 1.5rem;\n    }\n}\n",""]),n.exports=e},"2Pik":function(n,e,t){var o=t("mU8M");n.exports="string"==typeof o?o:o.toString()},"4kCZ":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em) {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e},"7hI2":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 0 2rem;\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em) {\n    .donations {\n        row-gap: 1.5rem;\n        padding: 0 1.5rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--one-column > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--two-column {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},Ai0b:function(n){"use strict";function e(n,e){var t,o,i=n[1]||"",a=n[3];if(!a)return i;if(e&&"function"==typeof btoa){var r=(t=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),s=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(s).concat([r]).join("\n")}return[i].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(e&&(l[2]=l[2]?"".concat(e," and ").concat(l[2]):e),t.push(l))}},t}},CvPi:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em) {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n",""]),n.exports=e},EJIf:function(n,e,t){var o=t("4kCZ");n.exports="string"==typeof o?o:o.toString()},KIIj:function(n,e,t){var o=t("ZaWy");n.exports="string"==typeof o?o:o.toString()},LhVE:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},Oxty:function(n,e,t){var o=t("CvPi");n.exports="string"==typeof o?o:o.toString()},"R3/S":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".logo {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    column-gap: 1rem;\n\n    /* Fix logo to the top and scroll the content beneath*/\n    position: sticky;\n    top: 0;\n    background: white;\n\n    margin: -1rem -2rem;\n    padding: 1.5rem 2rem;\n}\n\n@media only screen and (max-width: 64em) {\n    .logo {\n        margin: -1 -1.5rem;\n        padding: 1 1.5rem;\n    }\n}\n\n.logo__img {\n    height: 2rem;\n    grid-row: 1 / -1;\n    align-self: center;\n}\n\n.logo__title {\n    align-self: start;\n}\n\n.logo__link {\n    align-self: end;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},Rsgl:function(n,e,t){var o=t("LhVE");n.exports="string"==typeof o?o:o.toString()},SZxn:function(n,e,t){var o=t("tEhV");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("R3/S");n.exports="string"==typeof o?o:o.toString()},YENv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,i=n.length,a=-4&i;o<a;){for(var r=Math.min(o+4096,a);o<r;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<i;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},YuUb:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return rn}));var s=t("hosL"),l=t("QRet"),c=t("KIIj"),d=t.n(c),m=t("uuJQ"),p=t.n(m),h=t("Oxty"),u=t.n(h),g=t("Rsgl"),b=t.n(g),f=t("2Pik"),y=t.n(f),v=t("jgzK"),_=t.n(v),x=t("lUhE"),j=t.n(x),w=t("UpYz"),O=t.n(w),C=t("SZxn"),N=t.n(C),k=t("EJIf");var S=[d.a,p.a,u.a,b.a,y.a,_.a,j.a,O.a,N.a,t.n(k).a],D=t("YENv"),$=t.n(D);var E=class extends s.Component{constructor(...n){super(...n),i(this,"scopeClassNameCache",{}),i(this,"scopedCSSTextCache",{}),i(this,"scoped",void 0===this.props.scoped||this.props.scoped),i(this,"pepper",""),i(this,"getStyleString",()=>{if(this.props.children instanceof Array){const n=this.props.children.filter(n=>!Object(s.isValidElement)(n)&&"string"==typeof n);if(n.length>1)throw new Error(`Multiple style objects as direct descedents of a\n        Style component are not supported (${n.length} style objects detected):\n        ${n[0]}\n        `);return n[0]}return"string"!=typeof this.props.children||Object(s.isValidElement)(this.props.children)?null:this.props.children}),i(this,"getRootElement",()=>{if(this.props.children instanceof Array){const n=this.props.children.filter(n=>Object(s.isValidElement)(n));return n[0]}return Object(s.isValidElement)(this.props.children)?this.props.children:null}),i(this,"getRootSelectors",n=>{const e=[];return n.props.id&&e.push("#"+n.props.id),n.props.className&&n.props.className.trim().split(/\s+/g).forEach(n=>e.push(n)),e.length||"function"==typeof n.type||e.push(n.type),e}),i(this,"processCSSText",(n,e,t)=>n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map(n=>{const o=/.*:.*;/g,i=/.*:.*(;|$|\s+)/g,a=/\s*@/g,r=/\s*(([0-9][0-9]?|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((n,s,l)=>{if(!n.trim().length)return"";const c=l.length-1===s&&n.match(i);if(n.match(o)||c)return this.escapeTextContentForBrowser(n);const d=n;return e&&!/:target/gi.test(d)?d.match(a)||d.match(r)?d:this.scopeSelector(e,d,t):d}).join("{\n")}).join("}\n")),i(this,"escaper",n=>({">":"&gt;","<":"&lt;"}[n])),i(this,"escapeTextContentForBrowser",n=>(""+n).replace(/[><]/g,this.escaper)),i(this,"scopeSelector",(n,e,t)=>{const o=[];return e.split(/,(?![^(|[]*\)|\])/g).forEach(e=>{let i,a;if((null==t?void 0:t.length)&&t.some(n=>e.match(n))){a=e;const r=null==t?void 0:t.map(n=>n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.replace(new RegExp(`(${null==r?void 0:r.join("|")})`),"$1"+n),i=this.scoped?`${n} ${e}`:e,o.push(a,i)}else i=this.scoped?`${n} ${e}`:e,o.push(i)}),!this.scoped&&o.length>1?o[1]:o.join(", ")}),i(this,"getScopeClassName",(n,e)=>{let t=n;return e&&(this.pepper="",this.traverseObjectToGeneratePepper(e),t+=this.pepper),"s"+$()(t)}),i(this,"traverseObjectToGeneratePepper",(n,e=0)=>{e>32||this.pepper.length>1e4||Object.keys(n).forEach(t=>{const o=/^[_$]|type|ref|^value$/.test(t);n[t]&&"object"==typeof n[t]&&!o?this.traverseObjectToGeneratePepper(n[t],e+1):n[t]&&!o&&"function"!=typeof n[t]&&(this.pepper+=n[t])})}),i(this,"isVoidElement",n=>["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some(e=>n===e)),i(this,"createStyleElement",(n,e)=>Object(s.h)("style",{id:"direflow_styles",type:"text/css",key:e,dangerouslySetInnerHTML:{__html:n||""}})),i(this,"getNewChildrenForCloneElement",(n,e,t)=>[this.createStyleElement(n,t)].concat(e.props.children))}render(){const n=this.getStyleString(),e=this.getRootElement();if(!n&&e)return e.props.children;if(n&&!e)return this.createStyleElement(this.processCSSText(n),this.getScopeClassName(n,e));const t=e.props.className?e.props.className+" ":"";let i,a;const r=t+(e.props.id?e.props.id:"")+n;this.scopeClassNameCache[r]?(i=this.scopeClassNameCache[r],a=this.scopedCSSTextCache[i]):(i=this.getScopeClassName(n,e),a=this.processCSSText(n,"."+i,this.getRootSelectors(e)),this.scopeClassNameCache[r]=i,this.scopedCSSTextCache[i]=a);const l=this.scoped?`${t}${i}`:t;return Object(s.cloneElement)(e,o({},e.props,{className:l.trim()}),this.getNewChildrenForCloneElement(a,e,i))}};const T=n=>{let e;return e="string"==typeof n.styles?n.styles.toString():n.styles.reduce((n,e)=>`${n} ${e}`),Object(s.h)(E,{scoped:n.scoped},e,n.children)},z=Object(s.createContext)({});var A=z;var I=()=>{const n=(()=>{const n=window.navigator.language;return n.includes("-")?n.split("-")[0]:n})(),{i18n:e,language:t}=Object(l.a)(z);return e[t]?e[t]:e[n]?e[n]:e.en};const U=(n,e)=>e.replace(/{{(\w*)}}/g,(e,t)=>n[t]?n[t]:""),F=(n,e,t,o)=>{if(n){const i=new RegExp(`<${e}>(.*)</${e}>`,"g");let[a,r,l]=n.split(i);const c=Object(s.h)(t,o,r);return Object(s.h)(s.Fragment,null,a,c,l)}return n};var R=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg";var P=Object(s.h)("img",{className:"logo__img",src:R,alt:"logo"});var Y=({monthlyDonation:n=!0,scrolled:e=!1})=>{const t=I(),o=n?t.monthly.logo:t.oneTime.logo,i=((n,e)=>F(n,"link","a",{className:"logo__link",href:e}))(o.text,o.link),a=e?"box-shadow: 0 3px 7px 0px rgba(0, 0, 0, 0.1)":"";return Object(s.h)("div",{className:"logo",style:a},P,Object(s.h)("div",{className:"t-title logo__title"},o.header),Object(s.h)("p",{className:"t-body--small logo__link"},i))};var L=({handleClick:n,monthlyDonation:e})=>{const t=I(),o=e?t.monthly:t.oneTime;return Object(s.h)("p",{className:"t-title donation-type"},((n,e)=>F(n,"action","span",{onClick:e}))(o.switch,n))};var V=({monthlyDonation:n})=>{const e=I(),t=n?e.monthly:e.oneTime;return Object(s.h)(s.Fragment,null,Object(s.h)("h1",{className:"t-heading-primary"},t.header),Object(s.h)("h2",{className:"t-heading-secondary"},t.info))};var M=({name:n,text:e,amount:t,selected:o,handleClick:i,description:a,image:r,bgColor:l})=>{const c=["radio-button"];o&&c.push("radio-button--selected");const d=["radio-button__label"].concat([e?"u-justify-content-space-between":"u-justify-content-center"]);return Object(s.h)("div",{className:c.join(" ")},Object(s.h)("input",{onClick:i,className:"radio-button__input",type:"radio",name:n,id:t}),Object(s.h)("label",{className:d.join(" "),htmlFor:t},e&&Object(s.h)("span",{className:"t-label radio-button__text"},e),Object(s.h)("span",{className:"t-label radio-button__amount"},"$",t)),e&&a&&Object(s.h)("div",{style:{backgroundColor:l},className:"radio-button__extra"},Object(s.h)("div",{className:"radio-button__img-container"},Object(s.h)("img",{className:"radio-button__image",src:r,alt:e})),Object(s.h)("p",{className:"t-body radio-button__description"},a)))},B=Object(s.h)("span",{className:"t-input input__prefix no-line-height"},"$");var J=n=>{let{value:e,setValue:t,extraClasses:o,label:i,placeholder:r,description:l,selected:c}=n,d=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)e.indexOf(t=a[o])>=0||(i[t]=n[t]);return i}(n,["value","setValue","extraClasses","label","placeholder","description","selected"]);const m=["input__container"].concat(o).concat([c?"input--selected":""]).concat(e?["input--filled"]:[]);return Object(s.h)("div",{className:m.join(" ")},Object(s.h)("div",{className:"input"},B,Object(s.h)("input",a({className:["t-input","input__input"].join(" "),placeholder:r,type:"text",value:e,onChange:n=>t(n.target.value)},d)),i&&Object(s.h)("span",{className:"t-input input__suffix no-line-height"},i)),l&&Object(s.h)("p",{className:"t-body input__description"},l))};var Z=Object(s.createContext)();var G=({handleClick:n,extraClasses:e,children:t})=>Object(s.h)("button",{className:["btn"].concat(e).join(" "),onClick:n},t);var K=n=>!!(n&&n.constructor&&n.call&&n.apply);var q=({monthlyDonation:n,extraClasses:e=[]})=>{const t=I(),{donationAmount:o}=Object(l.a)(Z),{onSubmit:i,currency:a,mode:r}=Object(l.a)(A),c=n?t.monthly:t.oneTime,d=e=>{if(!isNaN(o)){const t=n?"MONTHLY":"ONCE";if(K(i))i({amount:o,frequency:t});else{const n=((n,e,t,o,i)=>`${`https://www.every.org/${n}/donate?frequency=${e}&amount=${t}&utm_campaign=single-or-split&utm_content=${o.toLowerCase()}&utm_source=${n}&utm_medium=every-month`}${Object.keys(i).reduce((n,e)=>n.concat(`&${e}=${i[e]}`),"")}`)(i.charity,t,o,e,i.params);window.location.href=n}}};return Object(s.h)(G,{extraClasses:e,handleClick:()=>d(r)},((n,e,t)=>n&&!isNaN(n)?U({amount:`$${n} ${t}`},e):U({amount:""},e))(o,c.button,a))};const H=(n,e)=>n.findIndex(n=>n.amount==e);var Q=({monthlyDonation:n})=>{const{donationAmount:e,setDonationAmount:t,customDonation:o,setCustomDonation:i,setTriggerAnimation:a}=Object(l.a)(Z),{monthly:r,oneTime:c}=Object(l.a)(A),[d,m]=Object(l.e)(!1),p=I(),h=n?p.monthly:p.oneTime;Object(l.b)(()=>{const n=r.levels.find(n=>n.default);if(n){b(r.levels[0].amount);const e=setTimeout(()=>{b(n.amount)});return()=>clearTimeout(e)}},[]);const u=()=>{const i=H(r.levels,e);n&&a([i,r.levels.length-1]),t(o),m(!0)},g=()=>{m(!1)},b=s=>{const l=o||!e?r.levels.length-1:H(r.levels,e),c=H(r.levels,s);n&&a([l,c]),t(s),i("")},f=n=>{t(n),i(n)},y=r.levels.filter(n=>"custom"!==n.amount),v=r.levels.find(n=>"custom"===n.amount),_=n?y.every(n=>{var e,t;return null==h||null==(e=h.levels)||null==(t=e.find(e=>e.amount===n.amount))?void 0:t.name}):c.levels.every(n=>{var e,t;return null==h||null==(e=h.levels)||null==(t=e.find(e=>e.amount===n))?void 0:t.name}),x=["donations__form"].concat([_?"donations__form--one-column":"donations__form--two-column"]);return Object(s.h)(s.Fragment,null,Object(s.h)("div",{className:x.join(" ")},n&&Object(s.h)(s.Fragment,null,y.map((n,t)=>{var o,i,a;return Object(s.h)(M,{key:t,name:"amount",amount:n.amount,selected:e===n.amount,handleClick:()=>b(n.amount),text:_?null==(o=h.levels.find(e=>e.amount===n.amount))?void 0:o.name:"",description:(a=null==(i=h.levels.find(e=>e.amount===n.amount))?void 0:i.description1,F(a,"bold","span",{})),image:n.img,bgColor:n.bgColor})}),v&&Object(s.h)(J,{label:h.custom.label,placeholder:h.custom.placeholder,value:o,setValue:f,description:p.oneTime.description,extraClasses:["donations__input"],onFocus:u,onBlur:g,selected:d})),!n&&Object(s.h)(s.Fragment,null,c.levels.map(n=>{var t,o;return Object(s.h)(M,{key:n,name:"amount",amount:n,selected:e===n,handleClick:()=>b(n),text:_?null==h||null==(t=h.levels)||null==(o=t.find(e=>(null==e?void 0:e.amount)===n))?void 0:o.name:""})}),c.allowCustom&&Object(s.h)(J,{placeholder:h.custom.placeholder,value:o,setValue:f,extraClasses:["donations__input"],onFocus:u,onBlur:g,selected:d}))),Object(s.h)("div",{className:"donations__submit"},Object(s.h)(q,{monthlyDonation:n,extraClasses:["u-hide-mobile"]}),Object(s.h)("p",{className:"t-body--small"},p.footer)))};var W=({monthlyDonation:n,setMonthlyDonation:e})=>{const t=Object(l.d)(null),[o,i]=Object(l.e)(!1);return Object(l.b)(()=>{const n=()=>{t.current&&i(t.current.scrollTop>0)};return t.current.addEventListener("scroll",n),n(),()=>t.current.removeEventListener("scroll",n)},[]),Object(s.h)(s.Fragment,null,Object(s.h)("div",{ref:t,className:"donations"},Object(s.h)(Y,{scrolled:o,monthlyDonation:n}),Object(s.h)("div",{className:"donations__header"},Object(s.h)(V,{monthlyDonation:n})),Object(s.h)(Q,{monthlyDonation:n}),Object(s.h)(L,{handleClick:()=>e(!n),monthlyDonation:n})))};const X=(n,e,t,o)=>{if(e){const e=!t||o?n.monthly.custom:((n,e)=>n.reduce((n,t)=>parseInt(t.amount,10)<=parseInt(e,10)?t:n))(n.monthly.levels,t);return Object(s.h)(s.Fragment,null,Object(s.h)("p",{className:"t-heading-secondary"},e.description1&&F(e.description1,"bold","strong",{})),e.description2&&Object(s.h)("p",{className:"t-heading-secondary"},e.description2))}return Object(s.h)("p",{className:"t-heading-secondary"},n.oneTime.description)};var nn=({bgColor:n})=>{const e=Object(l.d)(null),{donationAmount:t,monthlyDonation:o,customDonation:i}=Object(l.a)(Z),a=Object(l.a)(A),r=I();return Object(l.c)(()=>{e.current&&(e.current.style.background=o?n:a.oneTime.bgColor)},[t,o,a,n]),Object(s.h)("div",{ref:e,className:"description"},X(r,o,t,i))};var en=({image:n})=>{const e=Object(l.a)(A),{monthlyDonation:t}=Object(l.a)(Z),o=t?n:e.oneTime.img;return Object(s.h)("div",{className:"images",style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url(${o})`}})};var tn=()=>{const{company:n}=I(),e=n.logo||R;return Object(s.h)("div",{className:"company"},Object(s.h)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(s.h)("p",{className:"t-title company__title"},n.name),Object(s.h)("p",{className:"t-body--small company__subtitle"},n.location))},on=t("ahFK"),an=Object(s.h)(tn,null),rn=function({options:n,hide:e}){var t,o;const i=n=>n.target===n.currentTarget&&e(),[a,c]=Object(l.e)(!0),d=n.monthly.levels.find(n=>n.default),[m,p]=Object(l.e)((null==d?void 0:d.amount)||(null==(t=n.monthly.levels)||null==(o=t[0])?void 0:o.amount)),[h,u]=Object(l.e)(""),[g,b]=Object(l.e)([-1,0]),[f,y]=Object(l.e)(n.monthly.levels.sort((n,e)=>isNaN(e.amount)?-1:0));return Object(l.b)(()=>{const[n,e]=g;if(n>e){const t=f.map((t,o)=>o===n?r({},t,{classes:["fadeOutDown"]}):o===e?r({},t,{classes:["fadeInDown","right-panel__item--active"]}):t);y(t)}if(n<e){const t=f.map((t,o)=>r({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]}));y(t)}const t=setTimeout(()=>{const n=f.map((n,t)=>r({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]}));y(n)},300);return()=>clearTimeout(t)},[g]),Object(s.h)(T,{scoped:!1,styles:S},Object(s.h)("div",null,Object(s.h)("div",{className:"wrapper",onClick:i},Object(s.h)("div",{className:"close",onClick:i}),Object(s.h)(A.Provider,{value:n},Object(s.h)(Z.Provider,{value:{monthlyDonation:a,setMonthlyDonation:c,donationAmount:m,setDonationAmount:p,customDonation:h,setCustomDonation:u,setTriggerAnimation:b}},n.mode.toUpperCase()===on.a.SPLIT_PANEL&&Object(s.h)("div",{className:"widget widget--split"},Object(s.h)(W,{monthlyDonation:a,setMonthlyDonation:c}),Object(s.h)("div",{className:"right-panel"},an,f.map((n,e)=>Object(s.h)("div",{key:e,className:["right-panel__item"].concat(n.classes).join(" ")},Object(s.h)(en,{image:n.img}),Object(s.h)(nn,{bgColor:n.bgColor}))))),n.mode.toUpperCase()===on.a.SINGLE&&Object(s.h)("div",{className:"widget widget--single"},Object(s.h)(W,{monthlyDonation:a,setMonthlyDonation:c})),Object(s.h)("div",{className:"u-hide-desktop btn-mobile"},Object(s.h)(q,{monthlyDonation:a,extraClasses:["u-hide-desktop"]})))))))}},ZaWy:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n.t-label {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em) {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: max-content;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  display: grid;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em) {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},fANn:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1.25rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em) {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},jgzK:function(n,e,t){var o=t("7hI2");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("1LOa");n.exports="string"==typeof o?o:o.toString()},mU8M:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.5rem;\n    left: 2rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em) {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em) {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},tEhV:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n}\n\n@media only screen and (max-width: 64em) {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("fANn");n.exports="string"==typeof o?o:o.toString()}}]);
//# sourceMappingURL=1.chunk.2d903.esm.js.map