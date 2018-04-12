// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.table');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.table.valid_shadows = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(4),null,(6),null,(3),null,(2),null,(16),null,(8),null], null), null);
re_mdl.components.table.table_STAR_ = (function re_mdl$components$table$table_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22767 = arguments.length;
var i__4500__auto___22768 = (0);
while(true){
if((i__4500__auto___22768 < len__4499__auto___22767)){
args__4502__auto__.push((arguments[i__4500__auto___22768]));

var G__22769 = (i__4500__auto___22768 + (1));
i__4500__auto___22768 = G__22769;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22748){
var map__22749 = p__22748;
var map__22749__$1 = ((((!((map__22749 == null)))?(((((map__22749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22749):map__22749);
var args = map__22749__$1;
var selectable_QMARK_ = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"selectable?","selectable?",-1491881776));
var headers = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var shadow = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var children = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(shadow)){
if(cljs.core.truth_(re_mdl.components.table.valid_shadows.call(null,shadow))){
} else {
throw (new Error("Assert failed: (valid-shadows shadow)"));
}
} else {
}

var non_numerics = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,((function (map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr){
return (function (idx,p__22751){
var vec__22752 = p__22751;
var seq__22753 = cljs.core.seq.call(null,vec__22752);
var first__22754 = cljs.core.first.call(null,seq__22753);
var seq__22753__$1 = cljs.core.next.call(null,seq__22753);
var _ = first__22754;
var map__22755 = seq__22753__$1;
var map__22755__$1 = ((((!((map__22755 == null)))?(((((map__22755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22755):map__22755);
var non_numeric = cljs.core.get.call(null,map__22755__$1,new cljs.core.Keyword(null,"non-numeric","non-numeric",29827643));
if(cljs.core.truth_(non_numeric)){
return idx;
} else {
return null;
}
});})(map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr))
,headers)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-data-table mdl-js-data-table",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = selectable_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-data-table--selectable";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = shadow;
if(cljs.core.truth_(and__3911__auto__)){
return [" mdl-shadow--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow),"dp"].join('');
} else {
return and__3911__auto__;
}
})())].join('')], null),attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.map_indexed.call(null,((function (non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr){
return (function (idx,p__22757){
var vec__22758 = p__22757;
var seq__22759 = cljs.core.seq.call(null,vec__22758);
var first__22760 = cljs.core.first.call(null,seq__22759);
var seq__22759__$1 = cljs.core.next.call(null,seq__22759);
var label = first__22760;
var map__22761 = seq__22759__$1;
var map__22761__$1 = ((((!((map__22761 == null)))?(((((map__22761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22761):map__22761);
var non_numeric = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"non-numeric","non-numeric",29827643));
var ascending = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486));
var descending = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"descending","descending",-24766135));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = non_numeric;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-data-table__cell--non-numeric";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = ascending;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-data-table__header--sorted-ascending";
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = descending;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-data-table__header--sorted-descending";
} else {
return and__3911__auto__;
}
})())].join('')], null),label], null);
});})(non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr))
,headers))], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4292__auto__ = ((function (non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr){
return (function re_mdl$components$table$iter__22763(s__22764){
return (new cljs.core.LazySeq(null,((function (non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr){
return (function (){
var s__22764__$1 = s__22764;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22764__$1);
if(temp__5457__auto__){
var s__22764__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22764__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22764__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22766 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22765 = (0);
while(true){
if((i__22765 < size__4291__auto__)){
var row = cljs.core._nth.call(null,c__4290__auto__,i__22765);
cljs.core.chunk_append.call(null,b__22766,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.map_indexed.call(null,((function (i__22765,row,c__4290__auto__,size__4291__auto__,b__22766,s__22764__$2,temp__5457__auto__,non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr){
return (function (idx,datum){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(non_numerics.call(null,idx))?"mdl-data-table__cell--non-numeric":null)], null),datum], null);
});})(i__22765,row,c__4290__auto__,size__4291__auto__,b__22766,s__22764__$2,temp__5457__auto__,non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr))
,row)));

var G__22770 = (i__22765 + (1));
i__22765 = G__22770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22766),re_mdl$components$table$iter__22763.call(null,cljs.core.chunk_rest.call(null,s__22764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22766),null);
}
} else {
var row = cljs.core.first.call(null,s__22764__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.map_indexed.call(null,((function (row,s__22764__$2,temp__5457__auto__,non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr){
return (function (idx,datum){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(non_numerics.call(null,idx))?"mdl-data-table__cell--non-numeric":null)], null),datum], null);
});})(row,s__22764__$2,temp__5457__auto__,non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr))
,row)),re_mdl$components$table$iter__22763.call(null,cljs.core.rest.call(null,s__22764__$2)));
}
} else {
return null;
}
break;
}
});})(non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr))
,null,null));
});})(non_numerics,map__22749,map__22749__$1,args,selectable_QMARK_,headers,rows,shadow,children,id,class$,attr))
;
return iter__4292__auto__.call(null,rows);
})())], null),children);
});

re_mdl.components.table.table_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.table.table_STAR_.cljs$lang$applyTo = (function (seq22747){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22747));
});

re_mdl.components.table.table = re_mdl.util.wrap_mdl.call(null,re_mdl.components.table.table_STAR_);

//# sourceMappingURL=table.js.map?rel=1522769327975
