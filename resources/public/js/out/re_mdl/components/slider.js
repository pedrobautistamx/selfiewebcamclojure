// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.slider');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.util');
re_mdl.components.slider.slider_STAR_ = (function re_mdl$components$slider$slider_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22694 = arguments.length;
var i__4500__auto___22695 = (0);
while(true){
if((i__4500__auto___22695 < len__4499__auto___22694)){
args__4502__auto__.push((arguments[i__4500__auto___22695]));

var G__22696 = (i__4500__auto___22695 + (1));
i__4500__auto___22695 = G__22696;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.slider.slider_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.slider.slider_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22690){
var map__22691 = p__22690;
var map__22691__$1 = ((((!((map__22691 == null)))?(((((map__22691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22691):map__22691);
var args = map__22691__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var step = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var model = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var min = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var handler_fn = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),cljs.core.constantly.call(null,null));
var id = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
var _ = re_mdl.util.mdl_get_value.call(null,model);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,(function (){var G__22693 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"min","min",444991522),re_mdl.util.mdl_get_value.call(null,min),new cljs.core.Keyword(null,"max","max",61366548),re_mdl.util.mdl_get_value.call(null,max),new cljs.core.Keyword(null,"step","step",1288888124),re_mdl.util.mdl_get_value.call(null,step),new cljs.core.Keyword(null,"class","class",-2030961996),["mdl-slider mdl-js-slider",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = class$;
if(cljs.core.truth_(and__3911__auto__)){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return and__3911__auto__;
}
})())].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (_,map__22691,map__22691__$1,args,disabled_QMARK_,step,model,attr,children,min,handler_fn,id,class$,max){
return (function (e){
return handler_fn.call(null,e.target.value);
});})(_,map__22691,map__22691__$1,args,disabled_QMARK_,step,model,attr,children,min,handler_fn,id,class$,max))
,new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),re_mdl.util.mdl_get_value.call(null,model)], null);
if(cljs.core.truth_(re_mdl.util.mdl_get_value.call(null,disabled_QMARK_))){
return cljs.core.assoc.call(null,G__22693,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return G__22693;
}
})(),attr)], null),children);
});

re_mdl.components.slider.slider_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.slider.slider_STAR_.cljs$lang$applyTo = (function (seq22689){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22689));
});

re_mdl.components.slider.slider = (function re_mdl$components$slider$slider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22701 = arguments.length;
var i__4500__auto___22702 = (0);
while(true){
if((i__4500__auto___22702 < len__4499__auto___22701)){
args__4502__auto__.push((arguments[i__4500__auto___22702]));

var G__22703 = (i__4500__auto___22702 + (1));
i__4500__auto___22702 = G__22703;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.slider.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.slider.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__22698){
var map__22699 = p__22698;
var map__22699__$1 = ((((!((map__22699 == null)))?(((((map__22699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22699):map__22699);
var args = map__22699__$1;
var model = cljs.core.get.call(null,map__22699__$1,new cljs.core.Keyword(null,"model","model",331153215));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_mdl.util.mdl_init_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__22699,map__22699__$1,args,model){
return (function (this$,_){
return reagent.core.dom_node.call(null,this$).MaterialSlider.change(re_mdl.util.mdl_get_value.call(null,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(re_mdl.util.mdl_get_props.call(null,reagent.core.argv.call(null,this$)))));
});})(map__22699,map__22699__$1,args,model))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_mdl.components.slider.slider_STAR_], null));
});

re_mdl.components.slider.slider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.slider.slider.cljs$lang$applyTo = (function (seq22697){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22697));
});


//# sourceMappingURL=slider.js.map?rel=1522769327869
