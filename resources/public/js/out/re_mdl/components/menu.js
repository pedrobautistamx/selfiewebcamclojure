// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.menu');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.menu.item = (function re_mdl$components$menu$item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22778 = arguments.length;
var i__4500__auto___22779 = (0);
while(true){
if((i__4500__auto___22779 < len__4499__auto___22778)){
args__4502__auto__.push((arguments[i__4500__auto___22779]));

var G__22780 = (i__4500__auto___22779 + (1));
i__4500__auto___22779 = G__22780;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.menu.item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.menu.item.cljs$core$IFn$_invoke$arity$variadic = (function (p__22774){
var map__22775 = p__22774;
var map__22775__$1 = ((((!((map__22775 == null)))?(((((map__22775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22775):map__22775);
var args = map__22775__$1;
var child = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"child","child",623967545));
var disabled_QMARK_ = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_click = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var full_bleed_divider_QMARK_ = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"full-bleed-divider?","full-bleed-divider?",842768617));
var children = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,(function (){var G__22777 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-menu__item",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = full_bleed_divider_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-menu__item--full-bleed-divider";
} else {
return and__3911__auto__;
}
})())].join('')], null);
var G__22777__$1 = (cljs.core.truth_(disabled_QMARK_)?cljs.core.assoc.call(null,G__22777,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):G__22777);
if(cljs.core.truth_(on_click)){
return cljs.core.assoc.call(null,G__22777__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click);
} else {
return G__22777__$1;
}
})(),attr),child], null),children);
});

re_mdl.components.menu.item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.menu.item.cljs$lang$applyTo = (function (seq22773){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22773));
});

re_mdl.components.menu.menu_STAR_ = (function re_mdl$components$menu$menu_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22785 = arguments.length;
var i__4500__auto___22786 = (0);
while(true){
if((i__4500__auto___22786 < len__4499__auto___22785)){
args__4502__auto__.push((arguments[i__4500__auto___22786]));

var G__22787 = (i__4500__auto___22786 + (1));
i__4500__auto___22786 = G__22787;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.menu.menu_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.menu.menu_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22782){
var map__22783 = p__22782;
var map__22783__$1 = ((((!((map__22783 == null)))?(((((map__22783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22783):map__22783);
var args = map__22783__$1;
var for$ = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"for","for",-1323786319));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var top_left_QMARK_ = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"top-left?","top-left?",40899743));
var top_right_QMARK_ = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"top-right?","top-right?",-1458248270));
var bottom_right_QMARK_ = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"bottom-right?","bottom-right?",-475116569));
var children = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22783__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"for","for",-1323786319),for$,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-menu mdl-js-menu",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = top_left_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-menu--top-left";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = top_right_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-menu--top-right";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = bottom_right_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-menu--bottom-right";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.menu.menu_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.menu.menu_STAR_.cljs$lang$applyTo = (function (seq22781){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22781));
});

re_mdl.components.menu.menu = re_mdl.util.wrap_mdl.call(null,re_mdl.components.menu.menu_STAR_);

//# sourceMappingURL=menu.js.map?rel=1522769328003
