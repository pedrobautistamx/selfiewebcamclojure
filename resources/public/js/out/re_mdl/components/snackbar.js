// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_mdl.components.snackbar');
goog.require('cljs.core');
goog.require('re_mdl.util');
re_mdl.components.snackbar.snackbar_target_STAR_ = (function re_mdl$components$snackbar$snackbar_target_STAR_(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-js-snackbar mdl-snackbar",new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"assertive",new cljs.core.Keyword(null,"aria-atomic","aria-atomic",1666973952),true,new cljs.core.Keyword(null,"aria-relevant","aria-relevant",694334002),"text"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-snackbar__text","div.mdl-snackbar__text",-397340235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mdl-snackbar__action","button.mdl-snackbar__action",-668688927)], null)], null);
});
re_mdl.components.snackbar.snackbar_target = re_mdl.util.wrap_mdl.call(null,re_mdl.components.snackbar.snackbar_target_STAR_);
re_mdl.components.snackbar.snackbar_BANG_ = (function re_mdl$components$snackbar$snackbar_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22684 = arguments.length;
var i__4500__auto___22685 = (0);
while(true){
if((i__4500__auto___22685 < len__4499__auto___22684)){
args__4502__auto__.push((arguments[i__4500__auto___22685]));

var G__22686 = (i__4500__auto___22685 + (1));
i__4500__auto___22685 = G__22686;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_mdl.components.snackbar.snackbar_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_mdl.components.snackbar.snackbar_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22681){
var map__22682 = p__22681;
var map__22682__$1 = ((((!((map__22682 == null)))?(((((map__22682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22682):map__22682);
var args = map__22682__$1;
var message = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var action_handler = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"action-handler","action-handler",553255604));
var action_text = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"action-text","action-text",1552233117));
var timeout = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
return document.querySelector(".mdl-js-snackbar").MaterialSnackbar.showSnackbar(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"actionHandler","actionHandler",1820034627),action_handler,new cljs.core.Keyword(null,"actionText","actionText",2138639047),action_text,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout], null)));
});

re_mdl.components.snackbar.snackbar_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_mdl.components.snackbar.snackbar_BANG_.cljs$lang$applyTo = (function (seq22680){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22680));
});


//# sourceMappingURL=snackbar.js.map?rel=1522769327824
