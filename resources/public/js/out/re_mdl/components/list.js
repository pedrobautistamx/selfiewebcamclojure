// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.list');
goog.require('cljs.core');
re_mdl.components.list.item_primary_content = (function re_mdl$components$list$item_primary_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22794 = arguments.length;
var i__4500__auto___22795 = (0);
while(true){
if((i__4500__auto___22795 < len__4499__auto___22794)){
args__4502__auto__.push((arguments[i__4500__auto___22795]));

var G__22796 = (i__4500__auto___22795 + (1));
i__4500__auto___22795 = G__22796;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_primary_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_primary_content.cljs$core$IFn$_invoke$arity$variadic = (function (p__22791){
var map__22792 = p__22791;
var map__22792__$1 = ((((!((map__22792 == null)))?(((((map__22792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22792):map__22792);
var args = map__22792__$1;
var el = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var icon = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var avatar = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
var child = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.not.call(null,(function (){var and__3911__auto__ = icon;
if(cljs.core.truth_(and__3911__auto__)){
return avatar;
} else {
return and__3911__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Can't have both icon and avatar","\n","(not (and icon avatar))"].join('')));
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-primary-content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),(function (){var temp__5457__auto__ = (function (){var or__3922__auto__ = icon;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return avatar;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var icon_name = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(icon)?"mdl-list__item-icon":"mdl-list__item-avatar")], null),icon_name], null);
} else {
return null;
}
})(),child], null),children);
});

re_mdl.components.list.item_primary_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_primary_content.cljs$lang$applyTo = (function (seq22790){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22790));
});

re_mdl.components.list.item_secondary_content = (function re_mdl$components$list$item_secondary_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22801 = arguments.length;
var i__4500__auto___22802 = (0);
while(true){
if((i__4500__auto___22802 < len__4499__auto___22801)){
args__4502__auto__.push((arguments[i__4500__auto___22802]));

var G__22803 = (i__4500__auto___22802 + (1));
i__4500__auto___22802 = G__22803;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_secondary_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_secondary_content.cljs$core$IFn$_invoke$arity$variadic = (function (p__22798){
var map__22799 = p__22798;
var map__22799__$1 = ((((!((map__22799 == null)))?(((((map__22799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22799):map__22799);
var args = map__22799__$1;
var el = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-secondary-content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_secondary_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_secondary_content.cljs$lang$applyTo = (function (seq22797){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22797));
});

re_mdl.components.list.item_secondary_action = (function re_mdl$components$list$item_secondary_action(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22809 = arguments.length;
var i__4500__auto___22810 = (0);
while(true){
if((i__4500__auto___22810 < len__4499__auto___22809)){
args__4502__auto__.push((arguments[i__4500__auto___22810]));

var G__22811 = (i__4500__auto___22810 + (1));
i__4500__auto___22810 = G__22811;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_secondary_action.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_secondary_action.cljs$core$IFn$_invoke$arity$variadic = (function (p__22805){
var map__22806 = p__22805;
var map__22806__$1 = ((((!((map__22806 == null)))?(((((map__22806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22806):map__22806);
var args = map__22806__$1;
var child = cljs.core.get.call(null,map__22806__$1,new cljs.core.Keyword(null,"child","child",623967545));
var el = cljs.core.get.call(null,map__22806__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var href = cljs.core.get.call(null,map__22806__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var children = cljs.core.get.call(null,map__22806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22806__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22806__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22806__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.not.call(null,(cljs.core.truth_(href)?cljs.core.not_EQ_.call(null,el,new cljs.core.Keyword(null,"a","a",-2123407586)):null))){
} else {
throw (new Error(["Assert failed: ","href only valid on <a>","\n","(not (when href (not= el :a)))"].join('')));
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,(function (){var G__22808 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-secondary-action",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null);
if(cljs.core.truth_(href)){
return cljs.core.assoc.call(null,G__22808,new cljs.core.Keyword(null,"href","href",-793805698),href);
} else {
return G__22808;
}
})(),attr),child], null),children);
});

re_mdl.components.list.item_secondary_action.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_secondary_action.cljs$lang$applyTo = (function (seq22804){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22804));
});

re_mdl.components.list.item_secondary_info = (function re_mdl$components$list$item_secondary_info(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22816 = arguments.length;
var i__4500__auto___22817 = (0);
while(true){
if((i__4500__auto___22817 < len__4499__auto___22816)){
args__4502__auto__.push((arguments[i__4500__auto___22817]));

var G__22818 = (i__4500__auto___22817 + (1));
i__4500__auto___22817 = G__22818;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_secondary_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_secondary_info.cljs$core$IFn$_invoke$arity$variadic = (function (p__22813){
var map__22814 = p__22813;
var map__22814__$1 = ((((!((map__22814 == null)))?(((((map__22814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22814):map__22814);
var args = map__22814__$1;
var el = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22814__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-secondary-info",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_secondary_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_secondary_info.cljs$lang$applyTo = (function (seq22812){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22812));
});

re_mdl.components.list.item_text_body = (function re_mdl$components$list$item_text_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22823 = arguments.length;
var i__4500__auto___22824 = (0);
while(true){
if((i__4500__auto___22824 < len__4499__auto___22823)){
args__4502__auto__.push((arguments[i__4500__auto___22824]));

var G__22825 = (i__4500__auto___22824 + (1));
i__4500__auto___22824 = G__22825;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_text_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_text_body.cljs$core$IFn$_invoke$arity$variadic = (function (p__22820){
var map__22821 = p__22820;
var map__22821__$1 = ((((!((map__22821 == null)))?(((((map__22821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22821):map__22821);
var args = map__22821__$1;
var el = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22821__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-text-body",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_text_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_text_body.cljs$lang$applyTo = (function (seq22819){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22819));
});

re_mdl.components.list.item_sub_title = (function re_mdl$components$list$item_sub_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22830 = arguments.length;
var i__4500__auto___22831 = (0);
while(true){
if((i__4500__auto___22831 < len__4499__auto___22830)){
args__4502__auto__.push((arguments[i__4500__auto___22831]));

var G__22832 = (i__4500__auto___22831 + (1));
i__4500__auto___22831 = G__22832;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item_sub_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item_sub_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__22827){
var map__22828 = p__22827;
var map__22828__$1 = ((((!((map__22828 == null)))?(((((map__22828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22828):map__22828);
var args = map__22828__$1;
var el = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"span","span",1394872991));
var child = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-list__item-sub-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.list.item_sub_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item_sub_title.cljs$lang$applyTo = (function (seq22826){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22826));
});

re_mdl.components.list.item = (function re_mdl$components$list$item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22838 = arguments.length;
var i__4500__auto___22839 = (0);
while(true){
if((i__4500__auto___22839 < len__4499__auto___22838)){
args__4502__auto__.push((arguments[i__4500__auto___22839]));

var G__22840 = (i__4500__auto___22839 + (1));
i__4500__auto___22839 = G__22840;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.item.cljs$core$IFn$_invoke$arity$variadic = (function (p__22834){
var map__22835 = p__22834;
var map__22835__$1 = ((((!((map__22835 == null)))?(((((map__22835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22835):map__22835);
var args = map__22835__$1;
var item_type = cljs.core.get.call(null,map__22835__$1,new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"one-line","one-line",721238939));
var children = cljs.core.get.call(null,map__22835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22835__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22835__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22835__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"three-line","three-line",1456173601),null,new cljs.core.Keyword(null,"two-line","two-line",196060392),null,new cljs.core.Keyword(null,"one-line","one-line",721238939),null], null), null).call(null,item_type))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid item-type :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_type)].join('')),"\n","(#{:three-line :two-line :one-line} item-type)"].join('')));
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mdl-list__item mdl-list__item",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22837 = item_type;
var G__22837__$1 = (((G__22837 instanceof cljs.core.Keyword))?G__22837.fqn:null);
switch (G__22837__$1) {
case "two-line":
return "--two-line";

break;
case "three-line":
return "--three-line";

break;
default:
return null;

}
})())].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.list.item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.item.cljs$lang$applyTo = (function (seq22833){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22833));
});

re_mdl.components.list.list_coll = (function re_mdl$components$list$list_coll(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22846 = arguments.length;
var i__4500__auto___22847 = (0);
while(true){
if((i__4500__auto___22847 < len__4499__auto___22846)){
args__4502__auto__.push((arguments[i__4500__auto___22847]));

var G__22848 = (i__4500__auto___22847 + (1));
i__4500__auto___22847 = G__22848;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.list.list_coll.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.list.list_coll.cljs$core$IFn$_invoke$arity$variadic = (function (p__22843){
var map__22844 = p__22843;
var map__22844__$1 = ((((!((map__22844 == null)))?(((((map__22844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22844):map__22844);
var args = map__22844__$1;
var children = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mdl-list","ul.mdl-list",1707778310),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),attr)], null),children);
});

re_mdl.components.list.list_coll.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.list.list_coll.cljs$lang$applyTo = (function (seq22842){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22842));
});


//# sourceMappingURL=list.js.map?rel=1522769328078
