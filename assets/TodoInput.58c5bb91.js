import{_ as n,o as s,c as a,a as e,t as l,b as r,h as u,v as T,i as p}from"./app.e12c69cb.js";const c={name:"TodoInput",data(){return{todoTitle:""}},methods:{},props:["addTodo","dones","all"]};function f(m,t,o,_,d,h){return s(),a("div",null,[e("div",null,"\u5DF2\u5B8C\u6210"+l(o.dones)+"/"+l(o.all),1),e("label",null,[r("Add todo: "),u(e("input",{type:"text",onKeydown:t[0]||(t[0]=p(()=>{this.todoTitle=this.todoTitle.trim(),this.todoTitle!==""&&(o.addTodo(this.todoTitle),this.todoTitle="")},["enter"])),"onUpdate:modelValue":t[1]||(t[1]=i=>d.todoTitle=i)},null,544),[[T,d.todoTitle]])])])}const x=n(c,[["render",f],["__file","TodoInput.vue"]]);export{x as default};