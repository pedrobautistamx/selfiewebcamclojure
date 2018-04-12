// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.badge');
goog.require('cljs.core');
re_mdl.components.badge.badge = (function re_mdl$components$badge$badge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21852 = arguments.length;
var i__4500__auto___21853 = (0);
while(true){
if((i__4500__auto___21853 < len__4499__auto___21852)){
args__4502__auto__.push((arguments[i__4500__auto___21853]));

var G__21854 = (i__4500__auto___21853 + (1));
i__4500__auto___21853 = G__21854;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.badge.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.badge.badge.cljs$core$IFn$_invoke$arity$variadic = (function (p__21848){
var map__21849 = p__21848;
var map__21849__$1 = ((((!((map__21849 == null)))?(((((map__21849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21849):map__21849);
var args = map__21849__$1;
var child = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"child","child",623967545));
var badge_label = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"badge-label","badge-label",479295996));
var attr = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var no_background_QMARK_ = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"no-background?","no-background?",90240736));
var children = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var el = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var overlap_QMARK_ = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"overlap?","overlap?",-24322237));
var icon_QMARK_ = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"icon?","icon?",-1663815703));
var id = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,(function (){var G__21851 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-badge",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = no_background_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-badge--no-background";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = overlap_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-badge--overlap";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = icon_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " material-icons";
} else {
return and__3911__auto__;
}
})())].join('')], null);
if(cljs.core.truth_(badge_label)){
return cljs.core.assoc.call(null,G__21851,new cljs.core.Keyword(null,"data-badge","data-badge",-2109057848),badge_label);
} else {
return G__21851;
}
})(),attr),child], null),children);
});

re_mdl.components.badge.badge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.badge.badge.cljs$lang$applyTo = (function (seq21847){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21847));
});


//# sourceMappingURL=badge.js.map?rel=1522769326316
