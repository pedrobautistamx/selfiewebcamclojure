// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.toggle');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.util');
re_mdl.components.toggle.checkbox_STAR_ = (function re_mdl$components$toggle$checkbox_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22554 = arguments.length;
var i__4500__auto___22555 = (0);
while(true){
if((i__4500__auto___22555 < len__4499__auto___22554)){
args__4502__auto__.push((arguments[i__4500__auto___22555]));

var G__22556 = (i__4500__auto___22555 + (1));
i__4500__auto___22555 = G__22556;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.checkbox_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.checkbox_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22550){
var map__22551 = p__22550;
var map__22551__$1 = ((((!((map__22551 == null)))?(((((map__22551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22551):map__22551);
var args = map__22551__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var model = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var handler_fn = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var children = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-checkbox mdl-js-checkbox",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-checkbox__input","input.mdl-checkbox__input",959709492),cljs.core.merge.call(null,(function (){var G__22553 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22551,map__22551__$1,args,disabled_QMARK_,ripple_effect_QMARK_,model,label,handler_fn,children,id,class$,attr){
return (function (p1__22548_SHARP_){
return handler_fn.call(null,p1__22548_SHARP_.target.checked);
});})(_,map__22551,map__22551__$1,args,disabled_QMARK_,ripple_effect_QMARK_,model,label,handler_fn,children,id,class$,attr))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22553,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22553;
}
})(),attr)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-checkbox__label","span.mdl-checkbox__label",-1507993629),label], null):null)], null),children);
});

re_mdl.components.toggle.checkbox_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.checkbox_STAR_.cljs$lang$applyTo = (function (seq22549){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22549));
});

re_mdl.components.toggle.checkbox = (function re_mdl$components$toggle$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22561 = arguments.length;
var i__4500__auto___22562 = (0);
while(true){
if((i__4500__auto___22562 < len__4499__auto___22561)){
args__4502__auto__.push((arguments[i__4500__auto___22562]));

var G__22563 = (i__4500__auto___22562 + (1));
i__4500__auto___22562 = G__22563;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__22558){
var map__22559 = p__22558;
var map__22559__$1 = ((((!((map__22559 == null)))?(((((map__22559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22559):map__22559);
var args = map__22559__$1;
var model = cljs.core.get.call(null,map__22559__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22559,map__22559__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialCheckbox;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.check();
} else {
return elem.uncheck();
}
});})(map__22559,map__22559__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.checkbox_STAR_], null));
});

re_mdl.components.toggle.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.checkbox.cljs$lang$applyTo = (function (seq22557){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22557));
});

re_mdl.components.toggle.radio_STAR_ = (function re_mdl$components$toggle$radio_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22570 = arguments.length;
var i__4500__auto___22571 = (0);
while(true){
if((i__4500__auto___22571 < len__4499__auto___22570)){
args__4502__auto__.push((arguments[i__4500__auto___22571]));

var G__22572 = (i__4500__auto___22571 + (1));
i__4500__auto___22571 = G__22572;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.radio_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.radio_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22566){
var map__22567 = p__22566;
var map__22567__$1 = ((((!((map__22567 == null)))?(((((map__22567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22567):map__22567);
var args = map__22567__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var model = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var value = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var handler_fn = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var label = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22567__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-radio mdl-js-radio",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-radio__button","input.mdl-radio__button",-558204412),(function (){var G__22569 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22567,map__22567__$1,args,disabled_QMARK_,model,attr,children,value,name,ripple_effect_QMARK_,handler_fn,label,id,class$){
return (function (p1__22564_SHARP_){
return handler_fn.call(null,p1__22564_SHARP_.target.value);
});})(_,map__22567,map__22567__$1,args,disabled_QMARK_,model,attr,children,value,name,ripple_effect_QMARK_,handler_fn,label,id,class$))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22569,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22569;
}
})()], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-radio__label","span.mdl-radio__label",365249656),label], null):null)], null),children);
});

re_mdl.components.toggle.radio_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.radio_STAR_.cljs$lang$applyTo = (function (seq22565){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22565));
});

re_mdl.components.toggle.radio = (function re_mdl$components$toggle$radio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22577 = arguments.length;
var i__4500__auto___22578 = (0);
while(true){
if((i__4500__auto___22578 < len__4499__auto___22577)){
args__4502__auto__.push((arguments[i__4500__auto___22578]));

var G__22579 = (i__4500__auto___22578 + (1));
i__4500__auto___22578 = G__22579;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.radio.cljs$core$IFn$_invoke$arity$variadic = (function (p__22574){
var map__22575 = p__22574;
var map__22575__$1 = ((((!((map__22575 == null)))?(((((map__22575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22575):map__22575);
var args = map__22575__$1;
var model = cljs.core.get.call(null,map__22575__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22575,map__22575__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialRadio;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.check();
} else {
return elem.uncheck();
}
});})(map__22575,map__22575__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.radio_STAR_], null));
});

re_mdl.components.toggle.radio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.radio.cljs$lang$applyTo = (function (seq22573){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22573));
});

re_mdl.components.toggle.radios = (function re_mdl$components$toggle$radios(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22588 = arguments.length;
var i__4500__auto___22589 = (0);
while(true){
if((i__4500__auto___22589 < len__4499__auto___22588)){
args__4502__auto__.push((arguments[i__4500__auto___22589]));

var G__22590 = (i__4500__auto___22589 + (1));
i__4500__auto___22589 = G__22590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.radios.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.radios.cljs$core$IFn$_invoke$arity$variadic = (function (p__22581){
var map__22582 = p__22581;
var map__22582__$1 = ((((!((map__22582 == null)))?(((((map__22582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22582):map__22582);
var args = map__22582__$1;
var model = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var disabled = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.PersistentHashSet.EMPTY);
var name = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var choices = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var handler_fn = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var id = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22582__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["re-mdl-radio",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),(function (){var or__3922__auto__ = children;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.map_indexed.call(null,((function (or__3922__auto__,map__22582,map__22582__$1,args,model,attr,children,disabled,name,ripple_effect_QMARK_,choices,handler_fn,id,class$){
return (function (idx,p__22584){
var vec__22585 = p__22584;
var val = cljs.core.nth.call(null,vec__22585,(0),null);
var label = cljs.core.nth.call(null,vec__22585,(1),null);
var choice = vec__22585;
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.components.toggle.radio,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),handler_fn,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled.call(null,val),new cljs.core.Keyword(null,"model","model",331153215),cljs.core._EQ_.call(null,val,re_mdl.util.mdl_get_value.call(null,model)),new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356),ripple_effect_QMARK_], null);
});})(or__3922__auto__,map__22582,map__22582__$1,args,model,attr,children,disabled,name,ripple_effect_QMARK_,choices,handler_fn,id,class$))
,choices);
}
})());
});

re_mdl.components.toggle.radios.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.radios.cljs$lang$applyTo = (function (seq22580){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22580));
});

re_mdl.components.toggle.icon_toggle_STAR_ = (function re_mdl$components$toggle$icon_toggle_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22597 = arguments.length;
var i__4500__auto___22598 = (0);
while(true){
if((i__4500__auto___22598 < len__4499__auto___22597)){
args__4502__auto__.push((arguments[i__4500__auto___22598]));

var G__22599 = (i__4500__auto___22598 + (1));
i__4500__auto___22598 = G__22599;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.icon_toggle_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.icon_toggle_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22593){
var map__22594 = p__22593;
var map__22594__$1 = ((((!((map__22594 == null)))?(((((map__22594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22594):map__22594);
var args = map__22594__$1;
var handler_fn = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var icon = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var disabled_QMARK_ = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var model = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"model","model",331153215));
var children = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22594__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-icon-toggle mdl-js-icon-toggle",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-icon-toggle__input","input.mdl-icon-toggle__input",1666799323),cljs.core.merge.call(null,(function (){var G__22596 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22594,map__22594__$1,args,handler_fn,icon,disabled_QMARK_,ripple_effect_QMARK_,model,children,id,class$,attr){
return (function (p1__22591_SHARP_){
return handler_fn.call(null,p1__22591_SHARP_.target.checked);
});})(_,map__22594,map__22594__$1,args,handler_fn,icon,disabled_QMARK_,ripple_effect_QMARK_,model,children,id,class$,attr))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22596,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22596;
}
})(),attr)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdl-icon-toggle__label.material-icons","i.mdl-icon-toggle__label.material-icons",215649517),icon], null)], null),children);
});

re_mdl.components.toggle.icon_toggle_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.icon_toggle_STAR_.cljs$lang$applyTo = (function (seq22592){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22592));
});

re_mdl.components.toggle.icon_toggle = (function re_mdl$components$toggle$icon_toggle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22604 = arguments.length;
var i__4500__auto___22605 = (0);
while(true){
if((i__4500__auto___22605 < len__4499__auto___22604)){
args__4502__auto__.push((arguments[i__4500__auto___22605]));

var G__22606 = (i__4500__auto___22605 + (1));
i__4500__auto___22605 = G__22606;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.icon_toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.icon_toggle.cljs$core$IFn$_invoke$arity$variadic = (function (p__22601){
var map__22602 = p__22601;
var map__22602__$1 = ((((!((map__22602 == null)))?(((((map__22602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22602):map__22602);
var args = map__22602__$1;
var model = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22602,map__22602__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialIconToggle;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.check();
} else {
return elem.uncheck();
}
});})(map__22602,map__22602__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.icon_toggle_STAR_], null));
});

re_mdl.components.toggle.icon_toggle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.icon_toggle.cljs$lang$applyTo = (function (seq22600){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22600));
});

re_mdl.components.toggle.switch_STAR_ = (function re_mdl$components$toggle$switch_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22613 = arguments.length;
var i__4500__auto___22614 = (0);
while(true){
if((i__4500__auto___22614 < len__4499__auto___22613)){
args__4502__auto__.push((arguments[i__4500__auto___22614]));

var G__22615 = (i__4500__auto___22614 + (1));
i__4500__auto___22614 = G__22615;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.switch_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.switch_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22609){
var map__22610 = p__22609;
var map__22610__$1 = ((((!((map__22610 == null)))?(((((map__22610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22610):map__22610);
var args = map__22610__$1;
var handler_fn = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var model = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"model","model",331153215));
var disabled_QMARK_ = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var label = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-switch mdl-js-switch",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mdl-switch__input","input.mdl-switch__input",-679965372),cljs.core.merge.call(null,(function (){var G__22612 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),re_mdl.util.mdl_get_value.call(null,model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22610,map__22610__$1,args,handler_fn,model,disabled_QMARK_,ripple_effect_QMARK_,label,children,id,class$,attr){
return (function (p1__22607_SHARP_){
return handler_fn.call(null,p1__22607_SHARP_.target.checked);
});})(_,map__22610,map__22610__$1,args,handler_fn,model,disabled_QMARK_,ripple_effect_QMARK_,label,children,id,class$,attr))
], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.call(null,G__22612,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22612;
}
})(),attr)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mdl-switch__label","span.mdl-switch__label",685742243),label], null):null)], null),children);
});

re_mdl.components.toggle.switch_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.switch_STAR_.cljs$lang$applyTo = (function (seq22608){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22608));
});

re_mdl.components.toggle.switch$ = (function re_mdl$components$toggle$switch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22620 = arguments.length;
var i__4500__auto___22621 = (0);
while(true){
if((i__4500__auto___22621 < len__4499__auto___22620)){
args__4502__auto__.push((arguments[i__4500__auto___22621]));

var G__22622 = (i__4500__auto___22621 + (1));
i__4500__auto___22621 = G__22622;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.toggle.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.toggle.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (p__22617){
var map__22618 = p__22617;
var map__22618__$1 = ((((!((map__22618 == null)))?(((((map__22618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22618):map__22618);
var args = map__22618__$1;
var model = cljs.core.get.call(null,map__22618__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22618,map__22618__$1,args,model){
return (function (this$,_){
var elem = reagent.core.dom_node.call(null,this$).MaterialSwitch;
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))))){
return elem.on();
} else {
return elem.off();
}
});})(map__22618,map__22618__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.toggle.switch_STAR_], null));
});

re_mdl.components.toggle.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.toggle.switch$.cljs$lang$applyTo = (function (seq22616){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22616));
});


//# sourceMappingURL=toggle.js.map?rel=1522769327716
