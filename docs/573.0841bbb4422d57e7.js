"use strict";(self.webpackChunkAmigoInvisible=self.webpackChunkAmigoInvisible||[]).push([[573],{9573:(E,m,c)=>{c.r(m),c.d(m,{CrucigramaComponent:()=>b});var t=c(6814),o=c(2296),d=c(3176),i=c(7580),a=c(9212),_=c(9068),g=c(4221);const p=(e,f,l)=>({noSeleccionada:e,seleccionada:f,marcada:l});function u(e,f){if(1&e){const l=a.EpF();a.TgZ(0,"mat-grid-tile",8),a.NdJ("click",function(){const n=a.CHM(l).$implicit,P=a.oxw(2);return a.KtG(P.teclaSeleccionada(n))}),a._uU(1),a.qZA()}if(2&e){const l=f.$implicit;a.Q6J("ngClass",a.kEZ(2,p,!l.sel,l.sel,l.marcada&&!l.sel)),a.xp6(1),a.hij(" ",l.l," ")}}function C(e,f){if(1&e&&(a.ynx(0),a.YNc(1,u,2,6,"mat-grid-tile",7),a.BQk()),2&e){const l=f.$implicit;a.xp6(1),a.Q6J("ngForOf",l)}}const h=e=>({tachada:e});function O(e,f){if(1&e&&(a.TgZ(0,"p",9),a._uU(1),a.qZA()),2&e){const l=f.$implicit;a.Q6J("ngClass",a.VKq(2,h,l.encontrada)),a.xp6(1),a.Oqu(l.palabra)}}let b=(()=>{class e{constructor(l,s){this._modalService=l,this.store=s,this.letrasSeleccionas="",this.juegoAcabado=!1,this.palabras=[{palabra:"gayoso",encontrada:!1},{palabra:"pi\xf1eiro",encontrada:!1},{palabra:"mucha e nucha",encontrada:!1},{palabra:"digocho eu",encontrada:!1},{palabra:"larpeiros",encontrada:!1},{palabra:"xabarin club",encontrada:!1},{palabra:"land rober",encontrada:!1},{palabra:"luar",encontrada:!1},{palabra:"touri\xf1an",encontrada:!1}],this.palabrasOrdenadas=[],this.arr=[[{sel:!1,marcada:!1,l:"L"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"V"},{sel:!1,marcada:!1,l:"N"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"\xd1"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"U"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"T"}],[{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"T"},{sel:!1,marcada:!1,l:"S"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"Y"},{sel:!1,marcada:!1,l:"I"}],[{sel:!1,marcada:!1,l:"B"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"J"},{sel:!1,marcada:!1,l:"W"},{sel:!1,marcada:!1,l:"S"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"U"},{sel:!1,marcada:!1,l:"Y"},{sel:!1,marcada:!1,l:"H"}],[{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"Z"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"Q"},{sel:!1,marcada:!1,l:"H"},{sel:!1,marcada:!1,l:"S"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"T"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"\xd1"}],[{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"D"},{sel:!1,marcada:!1,l:"Y"},{sel:!1,marcada:!1,l:"J"},{sel:!1,marcada:!1,l:"C"},{sel:!1,marcada:!1,l:"W"},{sel:!1,marcada:!1,l:"D"},{sel:!1,marcada:!1,l:"U"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"B"},{sel:!1,marcada:!1,l:"G"}],[{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"P"},{sel:!1,marcada:!1,l:"W"},{sel:!1,marcada:!1,l:"S"},{sel:!1,marcada:!1,l:"L"},{sel:!1,marcada:!1,l:"S"},{sel:!1,marcada:!1,l:"J"},{sel:!1,marcada:!1,l:"R"}],[{sel:!1,marcada:!1,l:"G"},{sel:!1,marcada:!1,l:"J"},{sel:!1,marcada:!1,l:"G"},{sel:!1,marcada:!1,l:"N"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"\xd1"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"P"}],[{sel:!1,marcada:!1,l:"V"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"L"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"N"},{sel:!1,marcada:!1,l:"D"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"B"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"R"}],[{sel:!1,marcada:!1,l:"D"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"S"},{sel:!1,marcada:!1,l:"O"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"P"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"L"}],[{sel:!1,marcada:!1,l:"B"},{sel:!1,marcada:!1,l:"U"},{sel:!1,marcada:!1,l:"L"},{sel:!1,marcada:!1,l:"C"},{sel:!1,marcada:!1,l:"N"},{sel:!1,marcada:!1,l:"I"},{sel:!1,marcada:!1,l:"R"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"B"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"X"}],[{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"H"},{sel:!1,marcada:!1,l:"C"},{sel:!1,marcada:!1,l:"U"},{sel:!1,marcada:!1,l:"N"},{sel:!1,marcada:!1,l:"E"},{sel:!1,marcada:!1,l:"A"},{sel:!1,marcada:!1,l:"H"},{sel:!1,marcada:!1,l:"C"},{sel:!1,marcada:!1,l:"U"},{sel:!1,marcada:!1,l:"M"}]]}ngOnInit(){this.palabras.forEach(l=>{this.palabrasOrdenadas.push(l.palabra.split("").sort().join("").trim().toUpperCase())}),this._modalService.modalText({titulo:"EXPLICACI\xd3N",texto:"\xa1\xa1TVG!! Encuentra las palabras en la sopa de letras",imagen:"gayoso.gif",button:"Comenzar"})}teclaSeleccionada(l){l.sel?(l.sel=!1,this.letrasSeleccionas=this.letrasSeleccionas.replace(l.l,"")):(l.sel=!0,this.letrasSeleccionas=this.letrasSeleccionas.concat(l.l))}comprobarPalabra(){const l=this.letrasSeleccionas.split("").sort().join("");if(this.palabrasOrdenadas.includes(l)){this.arr=this.arr.map(r=>r.map(n=>n.sel?{...n,sel:!1,marcada:!0}:n));const s=this.palabrasOrdenadas.indexOf(l);this.palabras[s].encontrada=!0,this._modalService.mostrarModalOk()}else this.arr=this.arr.map(s=>s.map(r=>r.sel?{...r,sel:!1}:r)),this._modalService.mostrarModalFail();this._juegoAcabado(),this.letrasSeleccionas=""}_juegoAcabado(){const l=this.palabras.every(s=>s.encontrada);return l&&(this.store.dispatch((0,i.x)({id:0})),this.juegoAcabado=!0),l}static#a=this.\u0275fac=function(s){return new(s||e)(a.Y36(_.Z),a.Y36(g.yh))};static#l=this.\u0275cmp=a.Xpm({type:e,selectors:[["app-inicio"]],standalone:!0,features:[a.jDz],decls:11,vars:4,consts:[[1,"container"],[1,"crucigrama"],[3,"cols"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"disabled","click"],[1,"palabras"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[3,"ngClass"]],template:function(s,r){1&s&&(a.TgZ(0,"div",0)(1,"h2"),a._uU(2,"Sopa de letras TVG"),a.qZA(),a.TgZ(3,"div",1)(4,"mat-grid-list",2),a.YNc(5,C,2,1,"ng-container",3),a.qZA()(),a.TgZ(6,"div")(7,"button",4),a.NdJ("click",function(){return r.comprobarPalabra()}),a._uU(8," Comprobar Palabra "),a.qZA()(),a.TgZ(9,"div",5),a.YNc(10,O,2,4,"p",6),a.qZA()()),2&s&&(a.xp6(4),a.Q6J("cols",r.arr[0].length),a.xp6(1),a.Q6J("ngForOf",r.arr),a.xp6(2),a.Q6J("disabled",r.juegoAcabado||""===r.letrasSeleccionas),a.xp6(3),a.Q6J("ngForOf",r.palabras))},dependencies:[t.ez,t.mk,t.sg,o.ot,o.lW,d.N6,d.Il,d.DX],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:2rem}.container[_ngcontent-%COMP%]   .crucigrama[_ngcontent-%COMP%]{width:80vw;max-width:62.5rem;font-weight:700}.container[_ngcontent-%COMP%]   .crucigrama[_ngcontent-%COMP%]   .noSeleccionada[_ngcontent-%COMP%]{background-color:#add8e6}.container[_ngcontent-%COMP%]   .crucigrama[_ngcontent-%COMP%]   .seleccionada[_ngcontent-%COMP%]{background-color:#f4f469b0}.container[_ngcontent-%COMP%]   .crucigrama[_ngcontent-%COMP%]   .marcada[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.container[_ngcontent-%COMP%]   .palabras[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.5rem 2rem;max-width:80%;text-transform:uppercase;font-weight:700}.container[_ngcontent-%COMP%]   .palabras[_ngcontent-%COMP%]   .tachada[_ngcontent-%COMP%]{text-decoration:line-through;color:#d3d3d3}"],changeDetection:0})}return e})()}}]);