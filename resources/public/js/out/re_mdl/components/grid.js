// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.grid');
goog.require('cljs.core');
re_mdl.components.grid.grid = (function re_mdl$components$grid$grid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21861 = arguments.length;
var i__4500__auto___21862 = (0);
while(true){
if((i__4500__auto___21862 < len__4499__auto___21861)){
args__4502__auto__.push((arguments[i__4500__auto___21862]));

var G__21863 = (i__4500__auto___21862 + (1));
i__4500__auto___21862 = G__21863;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.grid.grid.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.grid.grid.cljs$core$IFn$_invoke$arity$variadic = (function (p__21858){
var map__21859 = p__21858;
var map__21859__$1 = ((((!((map__21859 == null)))?(((((map__21859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21859):map__21859);
var args = map__21859__$1;
var no_spacing_QMARK_ = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword(null,"no-spacing?","no-spacing?",-43973699));
var children = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var id = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-grid",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = no_spacing_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return " mdl-grid--no-spacing";
} else {
return and__3911__auto__;
}
})())].join('')], null),attr)], null),children);
});

re_mdl.components.grid.grid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.grid.grid.cljs$lang$applyTo = (function (seq21857){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21857));
});

re_mdl.components.grid.valid_align = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"middle","middle",-701029031),null], null), null);
re_mdl.components.grid.align_mdl_class = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"mdl-cell--top",new cljs.core.Keyword(null,"middle","middle",-701029031),"mdl-cell--middle",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"mdl-cell--bottom"], null);
re_mdl.components.grid.cell = (function re_mdl$components$grid$cell(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21885 = arguments.length;
var i__4500__auto___21886 = (0);
while(true){
if((i__4500__auto___21886 < len__4499__auto___21885)){
args__4502__auto__.push((arguments[i__4500__auto___21886]));

var G__21887 = (i__4500__auto___21886 + (1));
i__4500__auto___21886 = G__21887;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.grid.cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.grid.cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__21865){
var map__21866 = p__21865;
var map__21866__$1 = ((((!((map__21866 == null)))?(((((map__21866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21866):map__21866);
var args = map__21866__$1;
var stretch_QMARK_ = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"stretch?","stretch?",-1913293476));
var attr = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var tablet = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"tablet","tablet",-318585919));
var children = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var phone = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
var offset = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var col = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var id = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var desktop = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"desktop","desktop",1494219798));
var order = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
if(cljs.core.truth_(align)){
if(cljs.core.truth_(re_mdl.components.grid.valid_align.call(null,align))){
} else {
throw (new Error("Assert failed: (valid-align align)"));
}
} else {
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,["mdl-cell",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = stretch_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return [" mdl-cell--stretch"].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = align;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_mdl.components.grid.align_mdl_class.call(null,align))].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = offset;
if(cljs.core.truth_(and__3911__auto__)){
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"-offset"].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = order;
if(cljs.core.truth_(and__3911__auto__)){
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(order),"-order"].join('');
} else {
return and__3911__auto__;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = col;
if(cljs.core.truth_(and__3911__auto__)){
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"-col"].join('');
} else {
return and__3911__auto__;
}
})())].join(''),(function (){var iter__4292__auto__ = ((function (map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order){
return (function re_mdl$components$grid$iter__21868(s__21869){
return (new cljs.core.LazySeq(null,((function (map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order){
return (function (){
var s__21869__$1 = s__21869;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21869__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__21874 = cljs.core.first.call(null,xs__6012__auto__);
var view_type = cljs.core.nth.call(null,vec__21874,(0),null);
var arg_map = cljs.core.nth.call(null,vec__21874,(1),null);
var iterys__4288__auto__ = ((function (s__21869__$1,vec__21874,view_type,arg_map,xs__6012__auto__,temp__5457__auto__,map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order){
return (function re_mdl$components$grid$iter__21868_$_iter__21870(s__21871){
return (new cljs.core.LazySeq(null,((function (s__21869__$1,vec__21874,view_type,arg_map,xs__6012__auto__,temp__5457__auto__,map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order){
return (function (){
var s__21871__$1 = s__21871;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__21871__$1);
if(temp__5457__auto____$1){
var s__21871__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21871__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__21871__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__21873 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__21872 = (0);
while(true){
if((i__21872 < size__4291__auto__)){
var vec__21877 = cljs.core._nth.call(null,c__4290__auto__,i__21872);
var arg = cljs.core.nth.call(null,vec__21877,(0),null);
var v = cljs.core.nth.call(null,vec__21877,(1),null);
var view_str = cljs.core.name.call(null,view_type);
cljs.core.chunk_append.call(null,b__21873,(function (){var G__21880 = arg;
var G__21880__$1 = (((G__21880 instanceof cljs.core.Keyword))?G__21880.fqn:null);
switch (G__21880__$1) {
case "col":
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
case "offset":
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"-offset-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
case "order":
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"-order-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
case "hide?":
return [" mdl-cell--hide-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
default:
throw cljs.core.ex_info.call(null,"Invalid arg for cell view",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("re-mdl.components.grid","invalid-arg","re-mdl.components.grid/invalid-arg",141973554),new cljs.core.Keyword(null,"arg","arg",-1747261837),arg,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),view_type], null));

}
})());

var G__21889 = (i__21872 + (1));
i__21872 = G__21889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),re_mdl$components$grid$iter__21868_$_iter__21870.call(null,cljs.core.chunk_rest.call(null,s__21871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),null);
}
} else {
var vec__21881 = cljs.core.first.call(null,s__21871__$2);
var arg = cljs.core.nth.call(null,vec__21881,(0),null);
var v = cljs.core.nth.call(null,vec__21881,(1),null);
var view_str = cljs.core.name.call(null,view_type);
return cljs.core.cons.call(null,(function (){var G__21884 = arg;
var G__21884__$1 = (((G__21884 instanceof cljs.core.Keyword))?G__21884.fqn:null);
switch (G__21884__$1) {
case "col":
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
case "offset":
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"-offset-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
case "order":
return [" mdl-cell--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"-order-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
case "hide?":
return [" mdl-cell--hide-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_str)].join('');

break;
default:
throw cljs.core.ex_info.call(null,"Invalid arg for cell view",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("re-mdl.components.grid","invalid-arg","re-mdl.components.grid/invalid-arg",141973554),new cljs.core.Keyword(null,"arg","arg",-1747261837),arg,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),view_type], null));

}
})(),re_mdl$components$grid$iter__21868_$_iter__21870.call(null,cljs.core.rest.call(null,s__21871__$2)));
}
} else {
return null;
}
break;
}
});})(s__21869__$1,vec__21874,view_type,arg_map,xs__6012__auto__,temp__5457__auto__,map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order))
,null,null));
});})(s__21869__$1,vec__21874,view_type,arg_map,xs__6012__auto__,temp__5457__auto__,map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,arg_map));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,re_mdl$components$grid$iter__21868.call(null,cljs.core.rest.call(null,s__21869__$1)));
} else {
var G__21891 = cljs.core.rest.call(null,s__21869__$1);
s__21869__$1 = G__21891;
continue;
}
} else {
return null;
}
break;
}
});})(map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order))
,null,null));
});})(map__21866,map__21866__$1,args,stretch_QMARK_,attr,tablet,children,align,phone,offset,col,id,class$,desktop,order))
;
return iter__4292__auto__.call(null,cljs.core.select_keys.call(null,args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desktop","desktop",1494219798),new cljs.core.Keyword(null,"tablet","tablet",-318585919),new cljs.core.Keyword(null,"phone","phone",-763596057)], null)));
})())], null),attr)], null),children);
});

re_mdl.components.grid.cell.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.grid.cell.cljs$lang$applyTo = (function (seq21864){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21864));
});


//# sourceMappingURL=grid.js.map?rel=1522769326372
