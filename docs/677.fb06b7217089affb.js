"use strict";(self.webpackChunkAmigoInvisible=self.webpackChunkAmigoInvisible||[]).push([[677],{1677:(dt,R,c)=>{c.r(R),c.d(R,{CacaComponent:()=>ct});var g=c(6814),v=c(7954),h=c(8484),t=c(9212),f=c(3680),k=c(4300),u=c(1088),S=c(9594),r=c(6825),T=c(6028),p=c(8645),P=c(3019),x=c(2181),b=c(8180);function Z(i,d){}const j={bottomSheetState:(0,r.X$)("state",[(0,r.SB)("void, hidden",(0,r.oB)({transform:"translateY(100%)"})),(0,r.SB)("visible",(0,r.oB)({transform:"translateY(0%)"})),(0,r.eR)("visible => void, visible => hidden",(0,r.ru)([(0,r.jt)(`${f.mZ.COMPLEX} ${f.yN.ACCELERATION_CURVE}`),(0,r.IO)("@*",(0,r.pV)(),{optional:!0})])),(0,r.eR)("void => visible",(0,r.ru)([(0,r.jt)(`${f.mZ.EXITING} ${f.yN.DECELERATION_CURVE}`),(0,r.IO)("@*",(0,r.pV)(),{optional:!0})]))])};let z=(()=>{class i extends v.LL{constructor(e,a,n,s,o,l,m,_,M,lt){super(e,a,n,s,o,l,m,lt),this._changeDetectorRef=M,this._animationState="void",this._animationStateChanged=new t.vpe,this._breakpointSubscription=_.observe([u.u3.Medium,u.u3.Large,u.u3.XLarge]).subscribe(()=>{this._toggleClass("mat-bottom-sheet-container-medium",_.isMatched(u.u3.Medium)),this._toggleClass("mat-bottom-sheet-container-large",_.isMatched(u.u3.Large)),this._toggleClass("mat-bottom-sheet-container-xlarge",_.isMatched(u.u3.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}exit(){this._destroyed||(this._animationState="hidden",this._changeDetectorRef.markForCheck())}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_onAnimationDone(e){"visible"===e.toState&&this._trapFocus(),this._animationStateChanged.emit(e)}_onAnimationStart(e){this._animationStateChanged.emit(e)}_captureInitialFocus(){}_toggleClass(e,a){this._elementRef.nativeElement.classList.toggle(e,a)}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(t.SBq),t.Y36(k.qV),t.Y36(g.K0,8),t.Y36(v.ib),t.Y36(k.ic),t.Y36(t.R0b),t.Y36(S.Iu),t.Y36(u.Yg),t.Y36(t.sBO),t.Y36(k.tE))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:4,hostBindings:function(a,n){1&a&&t.WFA("@state.start",function(o){return n._onAnimationStart(o)})("@state.done",function(o){return n._onAnimationDone(o)}),2&a&&(t.uIk("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-label",n._config.ariaLabel),t.d8E("@state",n._animationState))},features:[t.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(a,n){1&a&&t.YNc(0,Z,0,0,"ng-template",0)},dependencies:[h.Pl],styles:[".mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;background:var(--mat-bottom-sheet-container-background-color);color:var(--mat-bottom-sheet-container-text-color);font-family:var(--mat-bottom-sheet-container-text-font);font-size:var(--mat-bottom-sheet-container-text-size);line-height:var(--mat-bottom-sheet-container-text-line-height);font-weight:var(--mat-bottom-sheet-container-text-weight);letter-spacing:var(--mat-bottom-sheet-container-text-tracking)}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape);border-top-right-radius:var(--mat-bottom-sheet-container-shape)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],encapsulation:2,data:{animation:[j.bottomSheetState]}})}return i})(),w=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[v.Su,f.BQ,h.eL,f.BQ]})}return i})();const Y=new t.OlP("MatBottomSheetData");class N{constructor(){this.data=null,this.hasBackdrop=!0,this.disableClose=!1,this.ariaLabel=null,this.ariaModal=!0,this.closeOnNavigation=!0,this.autoFocus="dialog",this.restoreFocus=!0}}class D{get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}constructor(d,e,a){this._ref=d,this._afterOpened=new p.x,this.containerInstance=a,this.disableClose=e.disableClose,a._animationStateChanged.pipe((0,x.h)(n=>"done"===n.phaseName&&"visible"===n.toState),(0,b.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),a._animationStateChanged.pipe((0,x.h)(n=>"done"===n.phaseName&&"hidden"===n.toState),(0,b.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),d.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),(0,P.T)(this.backdropClick(),this.keydownEvents().pipe((0,x.h)(n=>n.keyCode===T.hY))).subscribe(n=>{!this.disableClose&&("keydown"!==n.type||!(0,T.Vb)(n))&&(n.preventDefault(),this.dismiss())})}dismiss(d){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe((0,x.h)(e=>"start"===e.phaseName),(0,b.q)(1)).subscribe(e=>{this._closeFallbackTimeout=setTimeout(()=>{this._ref.close(this._result)},e.totalTime+100),this._ref.overlayRef.detachBackdrop()}),this._result=d,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}}const G=new t.OlP("mat-bottom-sheet-default-options");let H=(()=>{class i{get _openedBottomSheetRef(){const e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}constructor(e,a,n,s){this._overlay=e,this._parentBottomSheet=n,this._defaultOptions=s,this._bottomSheetRefAtThisLevel=null,this._dialog=a.get(v.Vq)}open(e,a){const n={...this._defaultOptions||new N,...a};let s;return this._dialog.open(e,{...n,disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:z,scrollStrategy:n.scrollStrategy||this._overlay.scrollStrategies.block(),positionStrategy:this._overlay.position().global().centerHorizontally().bottom("0"),templateContext:()=>({bottomSheetRef:s}),providers:(o,l,m)=>(s=new D(o,n,m),[{provide:D,useValue:s},{provide:Y,useValue:n.data}])}),s.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===s&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>s.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):s.containerInstance.enter(),this._openedBottomSheetRef=s,s}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static#t=this.\u0275fac=function(a){return new(a||i)(t.LFG(S.aV),t.LFG(t.zs3),t.LFG(i,12),t.LFG(G,8))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:w})}return i})();var A=c(2296),U=c(2096),V=c(5177),y=c(2),X=c(7580),q=c(2831),$=c(9773);function K(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",1)(1,"button",2),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.action())}),t._uU(2),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.hij(" ",e.data.action," ")}}const W=["label"];function J(i,d){}const Q=Math.pow(2,31)-1;class C{constructor(d,e){this._overlayRef=e,this._afterDismissed=new p.x,this._afterOpened=new p.x,this._onAction=new p.x,this._dismissedByAction=!1,this.containerInstance=d,d._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(d){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(d,Q))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}const O=new t.OlP("MatSnackBarData");class B{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}let E=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275dir=t.lG2({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0})}return i})(),L=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275dir=t.lG2({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0})}return i})(),I=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275dir=t.lG2({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0})}return i})(),tt=(()=>{class i{constructor(e,a){this.snackBarRef=e,this.data=a}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(C),t.Y36(O))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t._uU(1),t.qZA(),t.YNc(2,K,3,1,"div",1)),2&a&&(t.xp6(1),t.hij(" ",n.data.message,"\n"),t.xp6(1),t.um2(2,n.hasAction?2:-1))},dependencies:[A.ot,A.lW,E,L,I,g.ez],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}return i})();const et={snackBarState:(0,r.X$)("state",[(0,r.SB)("void, hidden",(0,r.oB)({transform:"scale(0.8)",opacity:0})),(0,r.SB)("visible",(0,r.oB)({transform:"scale(1)",opacity:1})),(0,r.eR)("* => visible",(0,r.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,r.eR)("* => void, * => hidden",(0,r.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,r.oB)({opacity:0})))])};let at=0,F=(()=>{class i extends h.en{constructor(e,a,n,s,o){super(),this._ngZone=e,this._elementRef=a,this._changeDetectorRef=n,this._platform=s,this.snackBarConfig=o,this._document=(0,t.f3M)(g.K0),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new p.x,this._onExit=new p.x,this._onEnter=new p.x,this._animationState="void",this._liveElementId="mat-snack-bar-container-live-"+at++,this.attachDomPortal=l=>{this._assertNotAttached();const m=this._portalOutlet.attachDomPortal(l);return this._afterPortalAttached(),m},this._live="assertive"!==o.politeness||o.announcementMessage?"off"===o.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();const a=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),a}attachTemplatePortal(e){this._assertNotAttached();const a=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),a}onAnimationEnd(e){const{fromState:a,toState:n}=e;if(("void"===n&&"void"!==a||"hidden"===n)&&this._completeExit(),"visible"===n){const s=this._onEnter;this._ngZone.run(()=>{s.next(),s.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,b.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_afterPortalAttached(){const e=this._elementRef.nativeElement,a=this.snackBarConfig.panelClass;a&&(Array.isArray(a)?a.forEach(o=>e.classList.add(o)):e.classList.add(a)),this._exposeToModals();const n=this._label.nativeElement,s="mdc-snackbar__label";n.classList.toggle(s,!n.querySelector(`.${s}`))}_exposeToModals(){const e=this._liveElementId,a=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<a.length;n++){const s=a[n],o=s.getAttribute("aria-owns");this._trackedModals.add(s),o?-1===o.indexOf(e)&&s.setAttribute("aria-owns",o+" "+e):s.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{const a=e.getAttribute("aria-owns");if(a){const n=a.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),a=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&a){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(n=document.activeElement),e.removeAttribute("aria-hidden"),a.appendChild(e),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(q.t4),t.Y36(B))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(a,n){if(1&a&&(t.Gf(h.Pl,7),t.Gf(W,7)),2&a){let s;t.iGM(s=t.CRH())&&(n._portalOutlet=s.first),t.iGM(s=t.CRH())&&(n._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(a,n){1&a&&t.WFA("@state.done",function(o){return n.onAnimationEnd(o)}),2&a&&t.d8E("@state",n._animationState)},standalone:!0,features:[t.qOj,t.jDz],decls:6,vars:3,consts:[[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["label",""],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3),t.YNc(4,J,0,0,"ng-template",4),t.qZA(),t._UZ(5,"div"),t.qZA()()),2&a&&(t.xp6(5),t.uIk("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[h.eL,h.Pl],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[et.snackBarState]}})}return i})();const it=new t.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function nt(){return new B}});let st=(()=>{class i{get _openedSnackBarRef(){const e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(e,a,n,s,o,l){this._overlay=e,this._live=a,this._injector=n,this._breakpointObserver=s,this._parentSnackBar=o,this._defaultConfig=l,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=tt,this.snackBarContainerComponent=F,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(e,a){return this._attach(e,a)}openFromTemplate(e,a){return this._attach(e,a)}open(e,a="",n){const s={...this._defaultConfig,...n};return s.data={message:e,action:a},s.announcementMessage===e&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,a){const s=t.zs3.create({parent:a&&a.viewContainerRef&&a.viewContainerRef.injector||this._injector,providers:[{provide:B,useValue:a}]}),o=new h.C5(this.snackBarContainerComponent,a.viewContainerRef,s),l=e.attach(o);return l.instance.snackBarConfig=a,l.instance}_attach(e,a){const n={...new B,...this._defaultConfig,...a},s=this._createOverlay(n),o=this._attachSnackBarContainer(s,n),l=new C(o,s);if(e instanceof t.Rgc){const m=new h.UE(e,null,{$implicit:n.data,snackBarRef:l});l.instance=o.attachTemplatePortal(m)}else{const m=this._createInjector(n,l),_=new h.C5(e,void 0,m),M=o.attachComponentPortal(_);l.instance=M.instance}return this._breakpointObserver.observe(u.u3.HandsetPortrait).pipe((0,$.R)(s.detachments())).subscribe(m=>{s.overlayElement.classList.toggle(this.handsetCssClass,m.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(l,n),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,a){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),a.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),a.duration&&a.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(a.duration))}_createOverlay(e){const a=new S.X_;a.direction=e.direction;let n=this._overlay.position().global();const s="rtl"===e.direction,o="left"===e.horizontalPosition||"start"===e.horizontalPosition&&!s||"end"===e.horizontalPosition&&s,l=!o&&"center"!==e.horizontalPosition;return o?n.left("0"):l?n.right("0"):n.centerHorizontally(),"top"===e.verticalPosition?n.top("0"):n.bottom("0"),a.positionStrategy=n,this._overlay.create(a)}_createInjector(e,a){return t.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:C,useValue:a},{provide:O,useValue:e.data}]})}static#t=this.\u0275fac=function(a){return new(a||i)(t.LFG(S.aV),t.LFG(k.Kd),t.LFG(t.zs3),t.LFG(u.Yg),t.LFG(i,12),t.LFG(it))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ot=c(4221);let rt=(()=>{class i{constructor(e,a){this._snackBar=e,this.store=a}respuesta(e){switch(e){case"seCago":this.openSnackBar("Pudo haber sido, pero era algo incomodo");break;case"leCagamos":this.openSnackBar("A lo mejor le llegaba a parecer mal. Pero el problema es que no hab\xeda servilletas");break;case"natilla":this.openSnackBar("Nunca se lo llegamos a decir. \xc9l sigue pensando que fue un acidente"),this.store.dispatch((0,X.x)({id:2}))}}openSnackBar(e){this._snackBar.open(e,"Guay!",{horizontalPosition:"center",verticalPosition:"top",duration:8e3})}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(st),t.Y36(ot.yh))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-caca"]],standalone:!0,features:[t.jDz],decls:16,vars:0,consts:[["mat-list-item","",3,"click"],["matListItemTitle",""],["matLine",""]],template:function(a,n){1&a&&(t.TgZ(0,"mat-nav-list")(1,"a",0),t.NdJ("click",function(){return n.respuesta("seCago")}),t.TgZ(2,"span",1),t._uU(3,"Se cag\xf3 en la nevera"),t.qZA(),t.TgZ(4,"span",2),t._uU(5,"Era un apuro"),t.qZA()(),t.TgZ(6,"a",0),t.NdJ("click",function(){return n.respuesta("leCagamos")}),t.TgZ(7,"span",1),t._uU(8,"Le cagamos en la nevera"),t.qZA(),t.TgZ(9,"span",2),t._uU(10,"Nos pareci\xf3 divertido"),t.qZA()(),t.TgZ(11,"a",0),t.NdJ("click",function(){return n.respuesta("natilla")}),t.TgZ(12,"span",1),t._uU(13,"Le explotamos la natilla"),t.qZA(),t.TgZ(14,"span",2),t._uU(15,"A lo mejor sin querer"),t.qZA()()())},dependencies:[y.ie,y.Hk,y.Tg,y.sL],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]{width:90%;border-radius:10px}"]})}return i})(),ct=(()=>{class i{constructor(e){this._bottomSheet=e}ngOnInit(){(0,U.of)(null).pipe((0,b.q)(1),(0,V.g)(3e3)).subscribe(()=>this.abrirRespuestas())}abrirRespuestas(){this._bottomSheet.open(rt)}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(H))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-caca"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"container"],["src","assets/caca.jpg","alt","kike OK",1,"imagen",3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"\xbfQue crees que pas\xf3 este d\xeda?"),t.qZA(),t.TgZ(3,"img",1),t.NdJ("click",function(){return n.abrirRespuestas()}),t.qZA()())},dependencies:[g.ez,w,A.ot],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]{width:90%;border-radius:10px}"]})}return i})()}}]);