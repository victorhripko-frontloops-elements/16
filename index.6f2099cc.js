(()=>{class e{constructor(e,t){this.time=e,this.wrapper=t,this.timeToDie=1e3,this.div,this.create()}create(){this.div=document.createElement("div"),this.div.className="bubble",this.div.innerHTML=this.time,r.append(this.div),this.update()}update(){this.iterval=setInterval((()=>{this.time--<=0?this.destroy():this.div.innerHTML=this.time}),1e3)}destroy(){this.div.classList.add("bubble--die"),setTimeout((()=>this.div.remove()),this.timeToDie)}}const t=document.querySelector(".app"),i=t.querySelector(".app__input"),s=t.querySelector(".app__button"),r=t.querySelector(".app__body");i.onkeypress=e=>{13===e.keyCode&&a(e.target.value)},s.addEventListener("click",(e=>{e.preventDefault(),a(i.value)}));const a=t=>{t.trim()&&(new e(t,r),i.value=null)}})();