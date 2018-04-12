// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.dialog');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.dialog.title = (function re_mdl$components$dialog$title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22629 = arguments.length;
var i__4500__auto___22630 = (0);
while(true){
if((i__4500__auto___22630 < len__4499__auto___22629)){
args__4502__auto__.push((arguments[i__4500__auto___22630]));

var G__22631 = (i__4500__auto___22630 + (1));
i__4500__auto___22630 = G__22631;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__22626){
var map__22627 = p__22626;
var map__22627__$1 = ((((!((map__22627 == null)))?(((((map__22627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22627):map__22627);
var args = map__22627__$1;
var child = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"child","child",623967545));
var el = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"h3","h3",2067611163));
var children = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog__title",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.dialog.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.title.cljs$lang$applyTo = (function (seq22625){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22625));
});

re_mdl.components.dialog.content = (function re_mdl$components$dialog$content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22636 = arguments.length;
var i__4500__auto___22637 = (0);
while(true){
if((i__4500__auto___22637 < len__4499__auto___22636)){
args__4502__auto__.push((arguments[i__4500__auto___22637]));

var G__22638 = (i__4500__auto___22637 + (1));
i__4500__auto___22637 = G__22638;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.content.cljs$core$IFn$_invoke$arity$variadic = (function (p__22633){
var map__22634 = p__22633;
var map__22634__$1 = ((((!((map__22634 == null)))?(((((map__22634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22634):map__22634);
var args = map__22634__$1;
var el = cljs.core.get.call(null,map__22634__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"div","div",1057191632));
var children = cljs.core.get.call(null,map__22634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22634__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22634__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22634__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog__content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.dialog.content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.content.cljs$lang$applyTo = (function (seq22632){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22632));
});

re_mdl.components.dialog.actions = (function re_mdl$components$dialog$actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22643 = arguments.length;
var i__4500__auto___22644 = (0);
while(true){
if((i__4500__auto___22644 < len__4499__auto___22643)){
args__4502__auto__.push((arguments[i__4500__auto___22644]));

var G__22645 = (i__4500__auto___22644 + (1));
i__4500__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.actions.cljs$core$IFn$_invoke$arity$variadic = (function (p__22640){
var map__22641 = p__22640;
var map__22641__$1 = ((((!((map__22641 == null)))?(((((map__22641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641):map__22641);
var args = map__22641__$1;
var el = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"div","div",1057191632));
var full_width_QMARK_ = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var children = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog__actions",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = full_width_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-dialog__actions--full-width";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.dialog.actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.actions.cljs$lang$applyTo = (function (seq22639){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22639));
});

re_mdl.components.dialog.dialog_STAR_ = (function re_mdl$components$dialog$dialog_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22650 = arguments.length;
var i__4500__auto___22651 = (0);
while(true){
if((i__4500__auto___22651 < len__4499__auto___22650)){
args__4502__auto__.push((arguments[i__4500__auto___22651]));

var G__22652 = (i__4500__auto___22651 + (1));
i__4500__auto___22651 = G__22652;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.dialog.dialog_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.dialog.dialog_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22647){
var map__22648 = p__22647;
var map__22648__$1 = ((((!((map__22648 == null)))?(((((map__22648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22648):map__22648);
var args = map__22648__$1;
var children = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22648__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-dialog",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.dialog.dialog_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.dialog.dialog_STAR_.cljs$lang$applyTo = (function (seq22646){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22646));
});

re_mdl.components.dialog.dialog = re_mdl.util.wrap_dialog_polyfill.call(null,re_mdl.components.dialog.dialog_STAR_);

//# sourceMappingURL=dialog.js.map?rel=1522769327766
