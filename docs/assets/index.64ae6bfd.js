import{o as t,c as e,a as s,w as n,v as a,F as o,r as l,t as i,b as r}from"./vendor.1b3b79c4.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(s){const n=new URL(t,location),a=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((s,o)=>{const l=new URL(t,n);if(self[e].moduleMap[l])return s(self[e].moduleMap[l]);const i=new Blob([`import * as m from '${l}';`,`${e}.moduleMap['${l}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){o(new Error(`Failed to import: ${t}`)),a(r)},onload(){s(self[e].moduleMap[l]),a(r)}});document.head.appendChild(r)})),self[e].moduleMap={}}}("assets/");const u={data:()=>({containerCss:"grid grid-cols-3 gap-4",commonItemCss:"bg-blue-500 text-white flex items-center justify-center w-10 h-10",itemsCount:6,itemCss:[]})},c={class:"container mx-auto"},p=s("h1",{class:"text-center text-3xl font-bold py-3"}," TailwindCSS Layout Playground ",-1),m={class:"border rounded p-4"},d={class:"input-group"},g=s("label",{class:"input-group-label w-1/4"},"Items count",-1),b={class:"input-group mt-3"},C=s("label",{class:"input-group-label w-1/4"},"Container classes",-1),v={class:"input-group mt-3"},y=s("label",{class:"input-group-label w-1/4"},"Common item classes",-1),x={class:"input-group-label w-1/4"},f={class:"container mx-auto bg-gray-200 mt-4"},w=s("div",{class:"container mx-auto mt-10"},[s("div",{class:"flex justify-center space-x-4 border-t py-4"},[s("a",{href:"https://tailwindchina.com",target:"_blank",class:"text-gray-500 hover:text-gray-600 hover:underline"},"Tailwind CSS 中文网"),s("a",{href:"https://docs.tailwindchina.com",target:"_blank",class:"text-gray-500 hover:text-gray-600 hover:underline"},"Tailwind CSS 中文文档")])],-1);u.render=function(r,u,h,U,j,L){return t(),e(o,null,[s("div",c,[p,s("div",m,[s("div",d,[g,n(s("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=t=>j.itemsCount=t),class:"input-group-input"},null,512),[[a,j.itemsCount,void 0,{number:!0}]])]),s("div",b,[C,n(s("input",{type:"text","onUpdate:modelValue":u[2]||(u[2]=t=>j.containerCss=t),class:"input-group-input"},null,512),[[a,j.containerCss]])]),s("div",v,[y,n(s("input",{type:"text","onUpdate:modelValue":u[3]||(u[3]=t=>j.commonItemCss=t),class:"input-group-input"},null,512),[[a,j.commonItemCss]])]),(t(!0),e(o,null,l(j.itemsCount,(o=>(t(),e("div",{class:"input-group mt-3",key:o},[s("label",x,"Item "+i(o)+" classes",1),n(s("input",{type:"text","onUpdate:modelValue":t=>j.itemCss[o-1]=t,class:"input-group-input"},null,8,["onUpdate:modelValue"]),[[a,j.itemCss[o-1]]])])))),128))])]),s("div",f,[s("div",{class:j.containerCss},[(t(!0),e(o,null,l(j.itemsCount,(s=>(t(),e("div",{key:s,class:[j.commonItemCss,j.itemCss[s-1]]},i(s),3)))),128))],2)]),w],64)};r(u).mount("#app");
