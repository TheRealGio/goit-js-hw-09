const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let o=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.disabled=!0;const n=()=>{d.style.backgroundColor=l(),d.style.color=l()};t.addEventListener("click",(()=>{o=setInterval(n,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.350d3538.js.map