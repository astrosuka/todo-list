(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>c});var r=t(648),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([n.id,"* :not(dialog) {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    user-select: none;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: whitesmoke;\n    display: flex;\n}\n\nbutton {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.8rem;\n    text-align: center;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton:hover {\n    background-color: #ddd;\n}\n\nbutton:active {\n    background-color: #fff;\n}\n\n.add-new-task {\n    margin-bottom: 1rem;\n}\n\nli {\n    list-style: none;\n}\n\n#nav-menu {\n    background-color: #eeeeee;\n    min-height: 100vh;\n    min-width: 200px;\n    padding: 2rem 1rem;\n}\n\n#create-list-button {\n    margin-bottom: 1rem;\n}\n\n#list-menu li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 0.5rem;\n}\n\n#list-menu li div:hover {\n    background-color: #ddd;\n}\n\n#list-menu li div:active {\n    background-color: #fff;\n}\n\n#wrapper {\n    width: 100%;\n    padding: 2rem;\n}\n\n#wrapper h1 {\n    margin-bottom: 1rem;\n}\n\n\n#add-task form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.card {\n    padding: 12px;\n    border: 1px dotted black;\n    margin-bottom: 0.5rem;\n    display: grid;\n    grid-template-columns: 5fr auto auto;\n    gap: 0.5rem;\n    place-items: center;\n\n}\n\n.card h2{\n    text-decoration: underline;\n    font-weight: 500;\n    font-size: 1rem;\n    justify-self: start;\n}\n\n.description {\n    grid-column: span 2;    \n}\n\n.date {\n    font-size: 1rem;\n    writing-mode: vertical-rl;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.priority {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.75rem;\n    text-align: center;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.priority-1 {\n    background-color: greenyellow;\n}\n\n.priority-2 {\n    background-color: yellow;\n}\n\n.priority-3 {\n    background-color: red;\n    color: whitesmoke;\n}\n\ndialog {\n    border: 1px solid black;\n    box-shadow: 0 0 12px #00000085;\n\n}\n\n#add-list-form,\nform {\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    gap: 1rem;\n}\n\n.dialog-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\ninput {\n    padding: 0.25rem;\n    accent-color: black;\n}\n\nfieldset {\n    border: none;\n}\n\nfieldset>div {\n    padding-left: 0.5rem;\n}\n\n.block-label-input {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\ntextarea {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 0.25rem;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,qBAAqB;IACrB,aAAa;IACb,oCAAoC;IACpC,WAAW;IACX,mBAAmB;;AAEvB;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;;AAElC;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,yCAAyC;IACzC,gBAAgB;AACpB",sourcesContent:["* :not(dialog) {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    user-select: none;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: whitesmoke;\n    display: flex;\n}\n\nbutton {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.8rem;\n    text-align: center;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton:hover {\n    background-color: #ddd;\n}\n\nbutton:active {\n    background-color: #fff;\n}\n\n.add-new-task {\n    margin-bottom: 1rem;\n}\n\nli {\n    list-style: none;\n}\n\n#nav-menu {\n    background-color: #eeeeee;\n    min-height: 100vh;\n    min-width: 200px;\n    padding: 2rem 1rem;\n}\n\n#create-list-button {\n    margin-bottom: 1rem;\n}\n\n#list-menu li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 0.5rem;\n}\n\n#list-menu li div:hover {\n    background-color: #ddd;\n}\n\n#list-menu li div:active {\n    background-color: #fff;\n}\n\n#wrapper {\n    width: 100%;\n    padding: 2rem;\n}\n\n#wrapper h1 {\n    margin-bottom: 1rem;\n}\n\n\n#add-task form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.card {\n    padding: 12px;\n    border: 1px dotted black;\n    margin-bottom: 0.5rem;\n    display: grid;\n    grid-template-columns: 5fr auto auto;\n    gap: 0.5rem;\n    place-items: center;\n\n}\n\n.card h2{\n    text-decoration: underline;\n    font-weight: 500;\n    font-size: 1rem;\n    justify-self: start;\n}\n\n.description {\n    grid-column: span 2;    \n}\n\n.date {\n    font-size: 1rem;\n    writing-mode: vertical-rl;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.priority {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.75rem;\n    text-align: center;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.priority-1 {\n    background-color: greenyellow;\n}\n\n.priority-2 {\n    background-color: yellow;\n}\n\n.priority-3 {\n    background-color: red;\n    color: whitesmoke;\n}\n\ndialog {\n    border: 1px solid black;\n    box-shadow: 0 0 12px #00000085;\n\n}\n\n#add-list-form,\nform {\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    gap: 1rem;\n}\n\n.dialog-buttons {\n    display: flex;\n    gap: 0.5rem;\n}\n\ninput {\n    padding: 0.25rem;\n    accent-color: black;\n}\n\nfieldset {\n    border: none;\n}\n\nfieldset>div {\n    padding-left: 0.5rem;\n}\n\n.block-label-input {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\ntextarea {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 0.25rem;\n}"],sourceRoot:""}]);const c=a},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},648:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],s=r.base?A[0]+r.base:A[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var u=t(d),m={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var A=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=A}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{constructor(n){this.title=n,this.list=[]}removeTask(n){this.list.splice(n,1)}addTask(n){this.list.push(n)}}class e{constructor(n,e,t,r){this.title=n,this.description=e,this.dueDate=t,this.priority=r,this.isComplete=!1}toggleComplete(){this.isComplete=!this.isComplete}set priority(n){n>=1&&n<=3?this._priority=n:console.error("Invalid Value!")}get priority(){return this._priority}}function r(){(function(n){let e;try{e=window.localStorage;const n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&e&&0!==e.length}})()&&localStorage.setItem("userdata",JSON.stringify(a))}const o=document.querySelector("#add-task");function i(n){const e=document.querySelector("#wrapper"),t=document.createElement("h1");e.textContent="",t.textContent=n.title,e.appendChild(t);const a=document.createElement("button");a.classList.add("add-new-task"),a.textContent="add new task",a.addEventListener("click",(()=>{o.showModal()})),e.appendChild(a),n.list.forEach((t=>{e.appendChild(function(n,e){const t=n,o=document.createElement("div");o.classList.add("card");const a=document.createElement("h2");a.textContent=n.title;const c=document.createElement("p");c.classList.add("description"),c.textContent=n.description;const A=document.createElement("p");A.classList.add("date"),""!==n.dueDate?A.textContent=`due date: ${n.dueDate}`:A.textContent="";const s=document.createElement("div");function l(){return s.className="priority",s.classList.add(`priority-${n.priority}`),n.priority}s.classList.add("priority"),s.textContent=n.priority,l(),s.addEventListener("click",(()=>{1===n.priority?t.priority=2:2===n.priority?t.priority=3:3===n.priority&&(t.priority=1),s.textContent=n.priority,l(),r()}));const d=document.createElement("button");return d.textContent="delete",d.addEventListener("click",(()=>{e.removeTask(e.list.indexOf(n)),r(),i(e)})),o.append(a,d,s,c,A),o}(t,n))}))}!function(){const n=document.querySelector("#title"),t=document.querySelector("#description"),a=document.querySelector("#date"),c=document.querySelectorAll('[name="priority"]');let A;document.querySelector("#submit-button").addEventListener("click",(l=>{l.preventDefault(),c.forEach((n=>{n.checked&&(A=n.value)})),s().addTask(new e(n.value,t.value,a.value,+A)),r(),i(s()),o.close(),document.querySelector("form").reset()})),document.querySelector("#cancel-button").addEventListener("click",(n=>{n.preventDefault(),o.close(),document.querySelector("form").reset()}))}();const a=[];let c;function A(n){c=n}function s(){return c}function l(e){a.push(new n(e)),r(),c=a[a.length-1],i(c)}function d(){const n=document.querySelector("#list-menu");n.textContent="",a.forEach((e=>{const t=document.createElement("li"),o=document.createElement("div");o.textContent=e.title,t.append(o),n.append(t),o.addEventListener("click",(()=>{A(e),i(s())}));const c=document.createElement("button");c.textContent="x",t.append(c),c.addEventListener("click",(()=>{var n;n=a.indexOf(e),a.splice(n,1),r(),0===a.length?(A([]),document.querySelector("#wrapper").textContent=""):0===n?(A(a[0]),i(a[0])):(A(a[n-1]),i(a[n-1])),d()}))}))}var u=t(596),m=t.n(u),p=t(520),f=t.n(p),C=t(176),B=t.n(C),g=t(120),y=t.n(g),I=t(808),b=t.n(I),v=t(936),h=t.n(v),x=t(904),E={};E.styleTagTransform=h(),E.setAttributes=y(),E.insert=B().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=b(),m()(x.c,E),x.c&&x.c.locals&&x.c.locals,localStorage.getItem("userdata")?(function(){const n=JSON.parse(localStorage.getItem("userdata"));let t=0;n.forEach((n=>{l(n.title),n.list.forEach((n=>{a[t].addTask(new e(n.title,n.description,n.dueDate,n._priority))})),t+=1}))}(),A(a[0]),r()):function(){const e=new n("My Tasks");a.push(e),A(e)}(),d(),function(){const n=document.querySelector("#add-list");document.querySelector("#create-list-button").addEventListener("click",(()=>{n.showModal()}));const e=document.querySelector("#list-title");document.querySelector("#list-cancel-button").addEventListener("click",(e=>{e.preventDefault(),n.close(),document.querySelector("#add-list-form").reset()})),document.querySelector("#list-submit-button").addEventListener("click",(t=>{t.preventDefault(),l(e.value),d(),n.close(),document.querySelector("#add-list-form").reset()}))}(),0!==a.length&&i(s())})()})();
//# sourceMappingURL=main.js.map