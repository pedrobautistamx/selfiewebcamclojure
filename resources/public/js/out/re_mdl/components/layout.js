// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.layout');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.layout.layout_STAR_ = (function re_mdl$components$layout$layout_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22371 = arguments.length;
var i__4500__auto___22372 = (0);
while(true){
if((i__4500__auto___22372 < len__4499__auto___22371)){
args__4502__auto__.push((arguments[i__4500__auto___22372]));

var G__22373 = (i__4500__auto___22372 + (1));
i__4500__auto___22372 = G__22373;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22368){
var map__22369 = p__22368;
var map__22369__$1 = ((((!((map__22369 == null)))?(((((map__22369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22369):map__22369);
var args = map__22369__$1;
var fixed_drawer_QMARK_ = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"fixed-drawer?","fixed-drawer?",-1209955123));
var fixed_header_QMARK_ = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"fixed-header?","fixed-header?",-619624567));
var fixed_tabs_QMARK_ = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"fixed-tabs?","fixed-tabs?",1226277538));
var no_drawer_button_QMARK_ = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"no-drawer-button?","no-drawer-button?",-1096066801));
var no_desktop_drawer_button_QMARK_ = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"no-desktop-drawer-button?","no-desktop-drawer-button?",-574341240));
var children = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22369__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout mdl-js-layout",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = fixed_drawer_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--fixed-drawer";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = fixed_header_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--fixed-header";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = fixed_tabs_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--fixed-tabs";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = no_drawer_button_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--no-drawer-button";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = no_desktop_drawer_button_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--no-desktop-drawer-button";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children)], null);
});

re_mdl.components.layout.layout_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_STAR_.cljs$lang$applyTo = (function (seq22367){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22367));
});

re_mdl.components.layout.layout = re_mdl.util.wrap_mdl.call(null,re_mdl.components.layout.layout_STAR_);
re_mdl.components.layout.title = (function re_mdl$components$layout$title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22378 = arguments.length;
var i__4500__auto___22379 = (0);
while(true){
if((i__4500__auto___22379 < len__4499__auto___22378)){
args__4502__auto__.push((arguments[i__4500__auto___22379]));

var G__22380 = (i__4500__auto___22379 + (1));
i__4500__auto___22379 = G__22380;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__22375){
var map__22376 = p__22375;
var map__22376__$1 = ((((!((map__22376 == null)))?(((((map__22376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22376):map__22376);
var args = map__22376__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var label = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22376__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),label], null),children);
});

re_mdl.components.layout.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.title.cljs$lang$applyTo = (function (seq22374){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22374));
});

re_mdl.components.layout.spacer = (function re_mdl$components$layout$spacer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22385 = arguments.length;
var i__4500__auto___22386 = (0);
while(true){
if((i__4500__auto___22386 < len__4499__auto___22385)){
args__4502__auto__.push((arguments[i__4500__auto___22386]));

var G__22387 = (i__4500__auto___22386 + (1));
i__4500__auto___22386 = G__22387;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.spacer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.spacer.cljs$core$IFn$_invoke$arity$variadic = (function (p__22382){
var map__22383 = p__22382;
var map__22383__$1 = ((((!((map__22383 == null)))?(((((map__22383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22383):map__22383);
var args = map__22383__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22383__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout-spacer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.spacer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.spacer.cljs$lang$applyTo = (function (seq22381){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22381));
});

re_mdl.components.layout.header = (function re_mdl$components$layout$header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22392 = arguments.length;
var i__4500__auto___22393 = (0);
while(true){
if((i__4500__auto___22393 < len__4499__auto___22392)){
args__4502__auto__.push((arguments[i__4500__auto___22393]));

var G__22394 = (i__4500__auto___22393 + (1));
i__4500__auto___22393 = G__22394;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.header.cljs$core$IFn$_invoke$arity$variadic = (function (p__22389){
var map__22390 = p__22389;
var map__22390__$1 = ((((!((map__22390 == null)))?(((((map__22390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22390):map__22390);
var args = map__22390__$1;
var waterfall_QMARK_ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"waterfall?","waterfall?",2126834777));
var seamed_QMARK_ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"seamed?","seamed?",1695119326));
var attr = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var waterfall_hide_top_QMARK_ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"waterfall-hide-top?","waterfall-hide-top?",1909145440));
var scroll_QMARK_ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));
var children = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var transparent_QMARK_ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"transparent?","transparent?",-1446050548));
var id = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__header",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = waterfall_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--waterfall";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = waterfall_hide_top_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--waterfall-hide-top";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = transparent_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--transparent";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = seamed_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--seamed";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__header--scroll";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.header.cljs$lang$applyTo = (function (seq22388){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22388));
});

re_mdl.components.layout.icon = (function re_mdl$components$layout$icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22399 = arguments.length;
var i__4500__auto___22400 = (0);
while(true){
if((i__4500__auto___22400 < len__4499__auto___22399)){
args__4502__auto__.push((arguments[i__4500__auto___22400]));

var G__22401 = (i__4500__auto___22400 + (1));
i__4500__auto___22400 = G__22401;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__22396){
var map__22397 = p__22396;
var map__22397__$1 = ((((!((map__22397 == null)))?(((((map__22397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22397):map__22397);
var args = map__22397__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22397__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22397__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var id = cljs.core.get.call(null,map__22397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22397__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22397__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout-icon",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null);
});

re_mdl.components.layout.icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.icon.cljs$lang$applyTo = (function (seq22395){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22395));
});

re_mdl.components.layout.header_row = (function re_mdl$components$layout$header_row(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22406 = arguments.length;
var i__4500__auto___22407 = (0);
while(true){
if((i__4500__auto___22407 < len__4499__auto___22406)){
args__4502__auto__.push((arguments[i__4500__auto___22407]));

var G__22408 = (i__4500__auto___22407 + (1));
i__4500__auto___22407 = G__22408;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.header_row.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.header_row.cljs$core$IFn$_invoke$arity$variadic = (function (p__22403){
var map__22404 = p__22403;
var map__22404__$1 = ((((!((map__22404 == null)))?(((((map__22404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22404):map__22404);
var args = map__22404__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__header-row",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.header_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.header_row.cljs$lang$applyTo = (function (seq22402){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22402));
});

re_mdl.components.layout.drawer = (function re_mdl$components$layout$drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22413 = arguments.length;
var i__4500__auto___22414 = (0);
while(true){
if((i__4500__auto___22414 < len__4499__auto___22413)){
args__4502__auto__.push((arguments[i__4500__auto___22414]));

var G__22415 = (i__4500__auto___22414 + (1));
i__4500__auto___22414 = G__22415;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (p__22410){
var map__22411 = p__22410;
var map__22411__$1 = ((((!((map__22411 == null)))?(((((map__22411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22411):map__22411);
var args = map__22411__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22411__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22411__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__22411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22411__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22411__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__drawer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.drawer.cljs$lang$applyTo = (function (seq22409){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22409));
});

re_mdl.components.layout.content = (function re_mdl$components$layout$content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22420 = arguments.length;
var i__4500__auto___22421 = (0);
while(true){
if((i__4500__auto___22421 < len__4499__auto___22420)){
args__4502__auto__.push((arguments[i__4500__auto___22421]));

var G__22422 = (i__4500__auto___22421 + (1));
i__4500__auto___22421 = G__22422;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.content.cljs$core$IFn$_invoke$arity$variadic = (function (p__22417){
var map__22418 = p__22417;
var map__22418__$1 = ((((!((map__22418 == null)))?(((((map__22418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22418):map__22418);
var args = map__22418__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22418__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__content",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.content.cljs$lang$applyTo = (function (seq22416){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22416));
});

re_mdl.components.layout.nav = (function re_mdl$components$layout$nav(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22427 = arguments.length;
var i__4500__auto___22428 = (0);
while(true){
if((i__4500__auto___22428 < len__4499__auto___22427)){
args__4502__auto__.push((arguments[i__4500__auto___22428]));

var G__22429 = (i__4500__auto___22428 + (1));
i__4500__auto___22428 = G__22429;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.nav.cljs$core$IFn$_invoke$arity$variadic = (function (p__22424){
var map__22425 = p__22424;
var map__22425__$1 = ((((!((map__22425 == null)))?(((((map__22425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22425):map__22425);
var args = map__22425__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22425__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22425__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var children = cljs.core.get.call(null,map__22425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22425__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22425__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22425__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-navigation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.nav.cljs$lang$applyTo = (function (seq22423){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22423));
});

re_mdl.components.layout.nav_link = (function re_mdl$components$layout$nav_link(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22435 = arguments.length;
var i__4500__auto___22436 = (0);
while(true){
if((i__4500__auto___22436 < len__4499__auto___22435)){
args__4502__auto__.push((arguments[i__4500__auto___22436]));

var G__22437 = (i__4500__auto___22436 + (1));
i__4500__auto___22436 = G__22437;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.nav_link.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.nav_link.cljs$core$IFn$_invoke$arity$variadic = (function (p__22431){
var map__22432 = p__22431;
var map__22432__$1 = ((((!((map__22432 == null)))?(((((map__22432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22432):map__22432);
var args = map__22432__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var href = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var content = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"content","content",15833224));
var on_click = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var id = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22432__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,(function (){var G__22434 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-navigation__link",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})())].join('')], null);
if(cljs.core.truth_(on_click)){
return cljs.core.assoc.call(null,G__22434,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click);
} else {
return G__22434;
}
})(),attr),content], null);
});

re_mdl.components.layout.nav_link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.nav_link.cljs$lang$applyTo = (function (seq22430){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22430));
});

re_mdl.components.layout.layout_tab_bar = (function re_mdl$components$layout$layout_tab_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22442 = arguments.length;
var i__4500__auto___22443 = (0);
while(true){
if((i__4500__auto___22443 < len__4499__auto___22442)){
args__4502__auto__.push((arguments[i__4500__auto___22443]));

var G__22444 = (i__4500__auto___22443 + (1));
i__4500__auto___22443 = G__22444;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_tab_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_tab_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__22439){
var map__22440 = p__22439;
var map__22440__$1 = ((((!((map__22440 == null)))?(((((map__22440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22440):map__22440);
var args = map__22440__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var tab_manual_switch_QMARK_ = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"tab-manual-switch?","tab-manual-switch?",1189314240));
var children = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22440__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__tab-bar",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = tab_manual_switch_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout__tab-manual-switch";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.layout_tab_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_tab_bar.cljs$lang$applyTo = (function (seq22438){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22438));
});

re_mdl.components.layout.layout_tab = (function re_mdl$components$layout$layout_tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22449 = arguments.length;
var i__4500__auto___22450 = (0);
while(true){
if((i__4500__auto___22450 < len__4499__auto___22449)){
args__4502__auto__.push((arguments[i__4500__auto___22450]));

var G__22451 = (i__4500__auto___22450 + (1));
i__4500__auto___22450 = G__22451;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_tab.cljs$core$IFn$_invoke$arity$variadic = (function (p__22446){
var map__22447 = p__22446;
var map__22447__$1 = ((((!((map__22447 == null)))?(((((map__22447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22447):map__22447);
var args = map__22447__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var is_active_QMARK_ = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var href = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var content = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"content","content",15833224));
var id = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22447__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__tab",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = is_active_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " is-active";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),content], null);
});

re_mdl.components.layout.layout_tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_tab.cljs$lang$applyTo = (function (seq22445){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22445));
});

re_mdl.components.layout.layout_tab_panel = (function re_mdl$components$layout$layout_tab_panel(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22456 = arguments.length;
var i__4500__auto___22457 = (0);
while(true){
if((i__4500__auto___22457 < len__4499__auto___22456)){
args__4502__auto__.push((arguments[i__4500__auto___22457]));

var G__22458 = (i__4500__auto___22457 + (1));
i__4500__auto___22457 = G__22458;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.layout_tab_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.layout_tab_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__22453){
var map__22454 = p__22453;
var map__22454__$1 = ((((!((map__22454 == null)))?(((((map__22454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22454):map__22454);
var args = map__22454__$1;
var large_screen_only_QMARK_ = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"large-screen-only?","large-screen-only?",-1040583386));
var small_screen_only_QMARK_ = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"small-screen-only?","small-screen-only?",2036719660));
var is_active_QMARK_ = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var children = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22454__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-layout__tab-panel",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = large_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--large-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = small_screen_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-layout--small-screen-only";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = is_active_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " is-active";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ripple_effect_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-js-ripple-effect";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.layout_tab_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.layout_tab_panel.cljs$lang$applyTo = (function (seq22452){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22452));
});

re_mdl.components.layout.tab_bar = (function re_mdl$components$layout$tab_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22463 = arguments.length;
var i__4500__auto___22464 = (0);
while(true){
if((i__4500__auto___22464 < len__4499__auto___22463)){
args__4502__auto__.push((arguments[i__4500__auto___22464]));

var G__22465 = (i__4500__auto___22464 + (1));
i__4500__auto___22464 = G__22465;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tab_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tab_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__22460){
var map__22461 = p__22460;
var map__22461__$1 = ((((!((map__22461 == null)))?(((((map__22461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22461):map__22461);
var args = map__22461__$1;
var children = cljs.core.get.call(null,map__22461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22461__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22461__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22461__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs__tab-bar",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.tab_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tab_bar.cljs$lang$applyTo = (function (seq22459){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22459));
});

re_mdl.components.layout.tabs_STAR_ = (function re_mdl$components$layout$tabs_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22470 = arguments.length;
var i__4500__auto___22471 = (0);
while(true){
if((i__4500__auto___22471 < len__4499__auto___22470)){
args__4502__auto__.push((arguments[i__4500__auto___22471]));

var G__22472 = (i__4500__auto___22471 + (1));
i__4500__auto___22471 = G__22472;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tabs_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tabs_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22467){
var map__22468 = p__22467;
var map__22468__$1 = ((((!((map__22468 == null)))?(((((map__22468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22468):map__22468);
var args = map__22468__$1;
var ripple_effect_QMARK_ = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356));
var children = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22468__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs mdl-js-tabs",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.tabs_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tabs_STAR_.cljs$lang$applyTo = (function (seq22466){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22466));
});

re_mdl.components.layout.tabs = re_mdl.util.wrap_mdl.call(null,re_mdl.components.layout.tabs_STAR_);
re_mdl.components.layout.tab = (function re_mdl$components$layout$tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22477 = arguments.length;
var i__4500__auto___22478 = (0);
while(true){
if((i__4500__auto___22478 < len__4499__auto___22477)){
args__4502__auto__.push((arguments[i__4500__auto___22478]));

var G__22479 = (i__4500__auto___22478 + (1));
i__4500__auto___22478 = G__22479;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tab.cljs$core$IFn$_invoke$arity$variadic = (function (p__22474){
var map__22475 = p__22474;
var map__22475__$1 = ((((!((map__22475 == null)))?(((((map__22475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22475):map__22475);
var args = map__22475__$1;
var is_active_QMARK_ = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var href = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var child = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22475__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs__tab",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.layout.tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tab.cljs$lang$applyTo = (function (seq22473){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22473));
});

re_mdl.components.layout.tabs_panel = (function re_mdl$components$layout$tabs_panel(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22484 = arguments.length;
var i__4500__auto___22485 = (0);
while(true){
if((i__4500__auto___22485 < len__4499__auto___22484)){
args__4502__auto__.push((arguments[i__4500__auto___22485]));

var G__22486 = (i__4500__auto___22485 + (1));
i__4500__auto___22485 = G__22486;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.tabs_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.tabs_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__22481){
var map__22482 = p__22481;
var map__22482__$1 = ((((!((map__22482 == null)))?(((((map__22482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22482):map__22482);
var args = map__22482__$1;
var el = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"div","div",1057191632));
var is_active_QMARK_ = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"is-active?","is-active?",-513516250));
var children = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22482__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-tabs__panel",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
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
})())].join('')], null),attr)], null),children);
});

re_mdl.components.layout.tabs_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.tabs_panel.cljs$lang$applyTo = (function (seq22480){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22480));
});

re_mdl.components.layout.mega_social_btn = (function re_mdl$components$layout$mega_social_btn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22491 = arguments.length;
var i__4500__auto___22492 = (0);
while(true){
if((i__4500__auto___22492 < len__4499__auto___22491)){
args__4502__auto__.push((arguments[i__4500__auto___22492]));

var G__22493 = (i__4500__auto___22492 + (1));
i__4500__auto___22492 = G__22493;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_social_btn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_social_btn.cljs$core$IFn$_invoke$arity$variadic = (function (p__22488){
var map__22489 = p__22488;
var map__22489__$1 = ((((!((map__22489 == null)))?(((((map__22489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22489):map__22489);
var args = map__22489__$1;
var child = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22489__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__social-btn",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.layout.mega_social_btn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_social_btn.cljs$lang$applyTo = (function (seq22487){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22487));
});

re_mdl.components.layout.mega_link_list = (function re_mdl$components$layout$mega_link_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22502 = arguments.length;
var i__4500__auto___22503 = (0);
while(true){
if((i__4500__auto___22503 < len__4499__auto___22502)){
args__4502__auto__.push((arguments[i__4500__auto___22503]));

var G__22504 = (i__4500__auto___22503 + (1));
i__4500__auto___22503 = G__22504;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_link_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_link_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__22495){
var map__22496 = p__22495;
var map__22496__$1 = ((((!((map__22496 == null)))?(((((map__22496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22496):map__22496);
var args = map__22496__$1;
var children = cljs.core.get.call(null,map__22496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22496__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22496__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22496__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__link-list",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),(function (){var iter__4292__auto__ = ((function (map__22496,map__22496__$1,args,children,id,class$,attr){
return (function re_mdl$components$layout$iter__22498(s__22499){
return (new cljs.core.LazySeq(null,((function (map__22496,map__22496__$1,args,children,id,class$,attr){
return (function (){
var s__22499__$1 = s__22499;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22499__$1);
if(temp__5457__auto__){
var s__22499__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22499__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22499__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22501 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22500 = (0);
while(true){
if((i__22500 < size__4291__auto__)){
var child = cljs.core._nth.call(null,c__4290__auto__,i__22500);
cljs.core.chunk_append.call(null,b__22501,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)));

var G__22505 = (i__22500 + (1));
i__22500 = G__22505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22501),re_mdl$components$layout$iter__22498.call(null,cljs.core.chunk_rest.call(null,s__22499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22501),null);
}
} else {
var child = cljs.core.first.call(null,s__22499__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)),re_mdl$components$layout$iter__22498.call(null,cljs.core.rest.call(null,s__22499__$2)));
}
} else {
return null;
}
break;
}
});})(map__22496,map__22496__$1,args,children,id,class$,attr))
,null,null));
});})(map__22496,map__22496__$1,args,children,id,class$,attr))
;
return iter__4292__auto__.call(null,children);
})());
});

re_mdl.components.layout.mega_link_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_link_list.cljs$lang$applyTo = (function (seq22494){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22494));
});

re_mdl.components.layout.mega_drop_down = (function re_mdl$components$layout$mega_drop_down(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22510 = arguments.length;
var i__4500__auto___22511 = (0);
while(true){
if((i__4500__auto___22511 < len__4499__auto___22510)){
args__4502__auto__.push((arguments[i__4500__auto___22511]));

var G__22512 = (i__4500__auto___22511 + (1));
i__4500__auto___22511 = G__22512;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_drop_down.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_drop_down.cljs$core$IFn$_invoke$arity$variadic = (function (p__22507){
var map__22508 = p__22507;
var map__22508__$1 = ((((!((map__22508 == null)))?(((((map__22508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22508):map__22508);
var args = map__22508__$1;
var heading = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var children = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22508__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__drop-down-section",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.mdl-mega-footer__heading","h1.mdl-mega-footer__heading",-1739454366),heading], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.components.layout.mega_link_list,new cljs.core.Keyword(null,"children","children",-940561982),children], null)], null);
});

re_mdl.components.layout.mega_drop_down.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_drop_down.cljs$lang$applyTo = (function (seq22506){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22506));
});

re_mdl.components.layout.mega_footer = (function re_mdl$components$layout$mega_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22517 = arguments.length;
var i__4500__auto___22518 = (0);
while(true){
if((i__4500__auto___22518 < len__4499__auto___22517)){
args__4502__auto__.push((arguments[i__4500__auto___22518]));

var G__22519 = (i__4500__auto___22518 + (1));
i__4500__auto___22518 = G__22519;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mega_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mega_footer.cljs$core$IFn$_invoke$arity$variadic = (function (p__22514){
var map__22515 = p__22514;
var map__22515__$1 = ((((!((map__22515 == null)))?(((((map__22515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22515):map__22515);
var args = map__22515__$1;
var middle = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var attr = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var left = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var children = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var bottom = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var logo = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var top = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var id = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var right = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),(cljs.core.truth_(top)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__top-section","div.mdl-mega-footer__top-section",1720754359)], null),top):null),(cljs.core.truth_(left)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__left-section","div.mdl-mega-footer__left-section",-2092167638)], null),left):null),(cljs.core.truth_(middle)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__middle-section","div.mdl-mega-footer__middle-section",-1664058696)], null),middle):null),(cljs.core.truth_(right)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__right-section","div.mdl-mega-footer__right-section",-242846145)], null),right):null),(cljs.core.truth_(bottom)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mega-footer__bottom-section","div.mdl-mega-footer__bottom-section",1877823728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-logo","div.mdl-logo",419867641),(function (){var or__3922__auto__ = logo;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})()], null)], null),bottom):null)], null),children);
});

re_mdl.components.layout.mega_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mega_footer.cljs$lang$applyTo = (function (seq22513){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22513));
});

re_mdl.components.layout.mini_social_btn = (function re_mdl$components$layout$mini_social_btn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22524 = arguments.length;
var i__4500__auto___22525 = (0);
while(true){
if((i__4500__auto___22525 < len__4499__auto___22524)){
args__4502__auto__.push((arguments[i__4500__auto___22525]));

var G__22526 = (i__4500__auto___22525 + (1));
i__4500__auto___22525 = G__22526;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mini_social_btn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mini_social_btn.cljs$core$IFn$_invoke$arity$variadic = (function (p__22521){
var map__22522 = p__22521;
var map__22522__$1 = ((((!((map__22522 == null)))?(((((map__22522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22522):map__22522);
var args = map__22522__$1;
var child = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"child","child",623967545));
var children = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22522__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mega-footer__social-btn",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),child], null),children);
});

re_mdl.components.layout.mini_social_btn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mini_social_btn.cljs$lang$applyTo = (function (seq22520){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22520));
});

re_mdl.components.layout.mini_link_list = (function re_mdl$components$layout$mini_link_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22535 = arguments.length;
var i__4500__auto___22536 = (0);
while(true){
if((i__4500__auto___22536 < len__4499__auto___22535)){
args__4502__auto__.push((arguments[i__4500__auto___22536]));

var G__22537 = (i__4500__auto___22536 + (1));
i__4500__auto___22536 = G__22537;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mini_link_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mini_link_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__22528){
var map__22529 = p__22528;
var map__22529__$1 = ((((!((map__22529 == null)))?(((((map__22529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22529):map__22529);
var args = map__22529__$1;
var children = cljs.core.get.call(null,map__22529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22529__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22529__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22529__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mini-footer__link-list",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),(function (){var iter__4292__auto__ = ((function (map__22529,map__22529__$1,args,children,id,class$,attr){
return (function re_mdl$components$layout$iter__22531(s__22532){
return (new cljs.core.LazySeq(null,((function (map__22529,map__22529__$1,args,children,id,class$,attr){
return (function (){
var s__22532__$1 = s__22532;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22532__$1);
if(temp__5457__auto__){
var s__22532__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22532__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22532__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22534 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22533 = (0);
while(true){
if((i__22533 < size__4291__auto__)){
var child = cljs.core._nth.call(null,c__4290__auto__,i__22533);
cljs.core.chunk_append.call(null,b__22534,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)));

var G__22538 = (i__22533 + (1));
i__22533 = G__22538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22534),re_mdl$components$layout$iter__22531.call(null,cljs.core.chunk_rest.call(null,s__22532__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22534),null);
}
} else {
var child = cljs.core.first.call(null,s__22532__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),child], null)),re_mdl$components$layout$iter__22531.call(null,cljs.core.rest.call(null,s__22532__$2)));
}
} else {
return null;
}
break;
}
});})(map__22529,map__22529__$1,args,children,id,class$,attr))
,null,null));
});})(map__22529,map__22529__$1,args,children,id,class$,attr))
;
return iter__4292__auto__.call(null,children);
})());
});

re_mdl.components.layout.mini_link_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mini_link_list.cljs$lang$applyTo = (function (seq22527){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22527));
});

re_mdl.components.layout.mini_footer = (function re_mdl$components$layout$mini_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22543 = arguments.length;
var i__4500__auto___22544 = (0);
while(true){
if((i__4500__auto___22544 < len__4499__auto___22543)){
args__4502__auto__.push((arguments[i__4500__auto___22544]));

var G__22545 = (i__4500__auto___22544 + (1));
i__4500__auto___22544 = G__22545;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.layout.mini_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.layout.mini_footer.cljs$core$IFn$_invoke$arity$variadic = (function (p__22540){
var map__22541 = p__22540;
var map__22541__$1 = ((((!((map__22541 == null)))?(((((map__22541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22541):map__22541);
var args = map__22541__$1;
var left = cljs.core.get.call(null,map__22541__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__22541__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var logo = cljs.core.get.call(null,map__22541__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var children = cljs.core.get.call(null,map__22541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22541__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22541__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22541__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-mini-footer",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),(cljs.core.truth_(left)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mini-footer__left-section","div.mdl-mini-footer__left-section",615236179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-logo","div.mdl-logo",419867641),(function (){var or__3922__auto__ = logo;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})()], null)], null),left):null),(cljs.core.truth_(right)?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-mini-footer__right-section","div.mdl-mini-footer__right-section",1143857625)], null),right):null)], null),children);
});

re_mdl.components.layout.mini_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.layout.mini_footer.cljs$lang$applyTo = (function (seq22539){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22539));
});


//# sourceMappingURL=layout.js.map?rel=1522769327577
