// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.loading');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.util');
re_mdl.components.loading.progress_STAR_ = (function re_mdl$components$loading$progress_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22659 = arguments.length;
var i__4500__auto___22660 = (0);
while(true){
if((i__4500__auto___22660 < len__4499__auto___22659)){
args__4502__auto__.push((arguments[i__4500__auto___22660]));

var G__22661 = (i__4500__auto___22660 + (1));
i__4500__auto___22660 = G__22661;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.loading.progress_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.loading.progress_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22656){
var map__22657 = p__22656;
var map__22657__$1 = ((((!((map__22657 == null)))?(((((map__22657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22657):map__22657);
var args = map__22657__$1;
var indeterminate_QMARK_ = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"indeterminate?","indeterminate?",-1382048766));
var model = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"model","model",331153215));
var buffer = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var children = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22657__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _ = re_mdl.util.mdl_get_value.call(null,model);
var ___$1 = re_mdl.util.mdl_get_value.call(null,buffer);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-progress mdl-js-progress",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = indeterminate_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-progress--indeterminate";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.loading.progress_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.loading.progress_STAR_.cljs$lang$applyTo = (function (seq22655){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22655));
});

re_mdl.components.loading.progress = (function re_mdl$components$loading$progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22668 = arguments.length;
var i__4500__auto___22669 = (0);
while(true){
if((i__4500__auto___22669 < len__4499__auto___22668)){
args__4502__auto__.push((arguments[i__4500__auto___22669]));

var G__22670 = (i__4500__auto___22669 + (1));
i__4500__auto___22669 = G__22670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.loading.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.loading.progress.cljs$core$IFn$_invoke$arity$variadic = (function (p__22663){
var map__22664 = p__22663;
var map__22664__$1 = ((((!((map__22664 == null)))?(((((map__22664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22664):map__22664);
var args = map__22664__$1;
var model = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"model","model",331153215));
var buffer = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__22664,map__22664__$1,args,model,buffer){
return (function (this$){
var G__22666 = reagent.core.dom_node.call(null,this$);
re_mdl.util.mdl_init_BANG_.call(null,G__22666);

G__22666.MaterialProgress.setProgress(re_mdl.util.mdl_get_value.call(null,model));

G__22666.MaterialProgress.setBuffer(re_mdl.util.mdl_get_value.call(null,buffer));

return G__22666;
});})(map__22664,map__22664__$1,args,model,buffer))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22664,map__22664__$1,args,model,buffer){
return (function (this$,_){
var props = re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$));
var G__22667 = reagent.core.dom_node.call(null,this$).MaterialProgress;
G__22667.setProgress(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(props)));

G__22667.setBuffer(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(props)));

return G__22667;
});})(map__22664,map__22664__$1,args,model,buffer))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.loading.progress_STAR_], null));
});

re_mdl.components.loading.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.loading.progress.cljs$lang$applyTo = (function (seq22662){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22662));
});

re_mdl.components.loading.spinner_STAR_ = (function re_mdl$components$loading$spinner_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22675 = arguments.length;
var i__4500__auto___22676 = (0);
while(true){
if((i__4500__auto___22676 < len__4499__auto___22675)){
args__4502__auto__.push((arguments[i__4500__auto___22676]));

var G__22677 = (i__4500__auto___22676 + (1));
i__4500__auto___22676 = G__22677;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.loading.spinner_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.loading.spinner_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22672){
var map__22673 = p__22672;
var map__22673__$1 = ((((!((map__22673 == null)))?(((((map__22673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22673):map__22673);
var args = map__22673__$1;
var el = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"div","div",1057191632));
var is_active_QMARK_ = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var single_color_QMARK_ = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"single-color?","single-color?",440532224));
var children = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22673__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-spinner mdl-js-spinner",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = is_active_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " is-active";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = single_color_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-spinner--single-color";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.loading.spinner_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.loading.spinner_STAR_.cljs$lang$applyTo = (function (seq22671){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22671));
});

re_mdl.components.loading.spinner = re_mdl.util.wrap_mdl.call(null,re_mdl.components.loading.spinner_STAR_);

//# sourceMappingURL=loading.js.map?rel=1522769327806
