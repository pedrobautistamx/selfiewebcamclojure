// Compiled by ClojureScript 1.10.238 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23366__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23363 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23364 = cljs.core.seq.call(null,vec__23363);
var first__23365 = cljs.core.first.call(null,seq__23364);
var seq__23364__$1 = cljs.core.next.call(null,seq__23364);
var tag = first__23365;
var body = seq__23364__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23367__i = 0, G__23367__a = new Array(arguments.length -  0);
while (G__23367__i < G__23367__a.length) {G__23367__a[G__23367__i] = arguments[G__23367__i + 0]; ++G__23367__i;}
  args = new cljs.core.IndexedSeq(G__23367__a,0,null);
} 
return G__23366__delegate.call(this,args);};
G__23366.cljs$lang$maxFixedArity = 0;
G__23366.cljs$lang$applyTo = (function (arglist__23368){
var args = cljs.core.seq(arglist__23368);
return G__23366__delegate(args);
});
G__23366.cljs$core$IFn$_invoke$arity$variadic = G__23366__delegate;
return G__23366;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__23369(s__23370){
return (new cljs.core.LazySeq(null,(function (){
var s__23370__$1 = s__23370;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23370__$1);
if(temp__5457__auto__){
var s__23370__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23370__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23370__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23372 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23371 = (0);
while(true){
if((i__23371 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__23371);
cljs.core.chunk_append.call(null,b__23372,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23373 = (i__23371 + (1));
i__23371 = G__23373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23372),sablono$core$update_arglists_$_iter__23369.call(null,cljs.core.chunk_rest.call(null,s__23370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23372),null);
}
} else {
var args = cljs.core.first.call(null,s__23370__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23369.call(null,cljs.core.rest.call(null,s__23370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23379 = arguments.length;
var i__4500__auto___23380 = (0);
while(true){
if((i__4500__auto___23380 < len__4499__auto___23379)){
args__4502__auto__.push((arguments[i__4500__auto___23380]));

var G__23381 = (i__4500__auto___23380 + (1));
i__4500__auto___23380 = G__23381;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__23375(s__23376){
return (new cljs.core.LazySeq(null,(function (){
var s__23376__$1 = s__23376;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23376__$1);
if(temp__5457__auto__){
var s__23376__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23376__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23376__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23378 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23377 = (0);
while(true){
if((i__23377 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__23377);
cljs.core.chunk_append.call(null,b__23378,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23382 = (i__23377 + (1));
i__23377 = G__23382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23378),sablono$core$iter__23375.call(null,cljs.core.chunk_rest.call(null,s__23376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23378),null);
}
} else {
var style = cljs.core.first.call(null,s__23376__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23375.call(null,cljs.core.rest.call(null,s__23376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23374){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23374));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23383 = (function sablono$core$link_to23383(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23386 = arguments.length;
var i__4500__auto___23387 = (0);
while(true){
if((i__4500__auto___23387 < len__4499__auto___23386)){
args__4502__auto__.push((arguments[i__4500__auto___23387]));

var G__23388 = (i__4500__auto___23387 + (1));
i__4500__auto___23387 = G__23388;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23383.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to23383.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23383.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23383.cljs$lang$applyTo = (function (seq23384){
var G__23385 = cljs.core.first.call(null,seq23384);
var seq23384__$1 = cljs.core.next.call(null,seq23384);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23385,seq23384__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23383);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23389 = (function sablono$core$mail_to23389(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23396 = arguments.length;
var i__4500__auto___23397 = (0);
while(true){
if((i__4500__auto___23397 < len__4499__auto___23396)){
args__4502__auto__.push((arguments[i__4500__auto___23397]));

var G__23398 = (i__4500__auto___23397 + (1));
i__4500__auto___23397 = G__23398;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23389.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to23389.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23392){
var vec__23393 = p__23392;
var content = cljs.core.nth.call(null,vec__23393,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23389.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23389.cljs$lang$applyTo = (function (seq23390){
var G__23391 = cljs.core.first.call(null,seq23390);
var seq23390__$1 = cljs.core.next.call(null,seq23390);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23391,seq23390__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23389);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23399 = (function sablono$core$unordered_list23399(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list23399_$_iter__23400(s__23401){
return (new cljs.core.LazySeq(null,(function (){
var s__23401__$1 = s__23401;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23401__$1);
if(temp__5457__auto__){
var s__23401__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23401__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23401__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23403 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23402 = (0);
while(true){
if((i__23402 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23402);
cljs.core.chunk_append.call(null,b__23403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23404 = (i__23402 + (1));
i__23402 = G__23404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23403),sablono$core$unordered_list23399_$_iter__23400.call(null,cljs.core.chunk_rest.call(null,s__23401__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23403),null);
}
} else {
var x = cljs.core.first.call(null,s__23401__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23399_$_iter__23400.call(null,cljs.core.rest.call(null,s__23401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23399);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23405 = (function sablono$core$ordered_list23405(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list23405_$_iter__23406(s__23407){
return (new cljs.core.LazySeq(null,(function (){
var s__23407__$1 = s__23407;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23407__$1);
if(temp__5457__auto__){
var s__23407__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23407__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23407__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23409 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23408 = (0);
while(true){
if((i__23408 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23408);
cljs.core.chunk_append.call(null,b__23409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23410 = (i__23408 + (1));
i__23408 = G__23410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23409),sablono$core$ordered_list23405_$_iter__23406.call(null,cljs.core.chunk_rest.call(null,s__23407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23409),null);
}
} else {
var x = cljs.core.first.call(null,s__23407__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23405_$_iter__23406.call(null,cljs.core.rest.call(null,s__23407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23405);
/**
 * Create an image element.
 */
sablono.core.image23411 = (function sablono$core$image23411(var_args){
var G__23413 = arguments.length;
switch (G__23413) {
case 1:
return sablono.core.image23411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23411.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23411.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23411.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23411);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23415_SHARP_,p2__23416_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23415_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23416_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23417_SHARP_,p2__23418_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23417_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23418_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23420 = arguments.length;
switch (G__23420) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23422 = (function sablono$core$color_field23422(var_args){
var G__23424 = arguments.length;
switch (G__23424) {
case 1:
return sablono.core.color_field23422.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23422.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23353__auto__);
});

sablono.core.color_field23422.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.color_field23422.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23422);

/**
 * Creates a date input field.
 */
sablono.core.date_field23425 = (function sablono$core$date_field23425(var_args){
var G__23427 = arguments.length;
switch (G__23427) {
case 1:
return sablono.core.date_field23425.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23425.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23425.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23353__auto__);
});

sablono.core.date_field23425.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.date_field23425.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23425);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23428 = (function sablono$core$datetime_field23428(var_args){
var G__23430 = arguments.length;
switch (G__23430) {
case 1:
return sablono.core.datetime_field23428.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23428.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23428.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23353__auto__);
});

sablono.core.datetime_field23428.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.datetime_field23428.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23428);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23431 = (function sablono$core$datetime_local_field23431(var_args){
var G__23433 = arguments.length;
switch (G__23433) {
case 1:
return sablono.core.datetime_local_field23431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23431.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23353__auto__);
});

sablono.core.datetime_local_field23431.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.datetime_local_field23431.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23431);

/**
 * Creates a email input field.
 */
sablono.core.email_field23434 = (function sablono$core$email_field23434(var_args){
var G__23436 = arguments.length;
switch (G__23436) {
case 1:
return sablono.core.email_field23434.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23434.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23434.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23353__auto__);
});

sablono.core.email_field23434.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.email_field23434.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23434);

/**
 * Creates a file input field.
 */
sablono.core.file_field23437 = (function sablono$core$file_field23437(var_args){
var G__23439 = arguments.length;
switch (G__23439) {
case 1:
return sablono.core.file_field23437.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23437.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23437.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23353__auto__);
});

sablono.core.file_field23437.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.file_field23437.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23437);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23440 = (function sablono$core$hidden_field23440(var_args){
var G__23442 = arguments.length;
switch (G__23442) {
case 1:
return sablono.core.hidden_field23440.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23440.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23440.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23353__auto__);
});

sablono.core.hidden_field23440.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.hidden_field23440.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23440);

/**
 * Creates a month input field.
 */
sablono.core.month_field23443 = (function sablono$core$month_field23443(var_args){
var G__23445 = arguments.length;
switch (G__23445) {
case 1:
return sablono.core.month_field23443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23443.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23353__auto__);
});

sablono.core.month_field23443.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.month_field23443.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23443);

/**
 * Creates a number input field.
 */
sablono.core.number_field23446 = (function sablono$core$number_field23446(var_args){
var G__23448 = arguments.length;
switch (G__23448) {
case 1:
return sablono.core.number_field23446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23446.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23353__auto__);
});

sablono.core.number_field23446.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.number_field23446.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23446);

/**
 * Creates a password input field.
 */
sablono.core.password_field23449 = (function sablono$core$password_field23449(var_args){
var G__23451 = arguments.length;
switch (G__23451) {
case 1:
return sablono.core.password_field23449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23449.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23353__auto__);
});

sablono.core.password_field23449.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.password_field23449.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23449);

/**
 * Creates a range input field.
 */
sablono.core.range_field23452 = (function sablono$core$range_field23452(var_args){
var G__23454 = arguments.length;
switch (G__23454) {
case 1:
return sablono.core.range_field23452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23452.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23353__auto__);
});

sablono.core.range_field23452.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.range_field23452.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23452);

/**
 * Creates a search input field.
 */
sablono.core.search_field23455 = (function sablono$core$search_field23455(var_args){
var G__23457 = arguments.length;
switch (G__23457) {
case 1:
return sablono.core.search_field23455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23455.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23353__auto__);
});

sablono.core.search_field23455.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.search_field23455.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23455);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23458 = (function sablono$core$tel_field23458(var_args){
var G__23460 = arguments.length;
switch (G__23460) {
case 1:
return sablono.core.tel_field23458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23458.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23353__auto__);
});

sablono.core.tel_field23458.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.tel_field23458.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23458);

/**
 * Creates a text input field.
 */
sablono.core.text_field23461 = (function sablono$core$text_field23461(var_args){
var G__23463 = arguments.length;
switch (G__23463) {
case 1:
return sablono.core.text_field23461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23461.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23353__auto__);
});

sablono.core.text_field23461.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.text_field23461.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23461);

/**
 * Creates a time input field.
 */
sablono.core.time_field23464 = (function sablono$core$time_field23464(var_args){
var G__23466 = arguments.length;
switch (G__23466) {
case 1:
return sablono.core.time_field23464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23464.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23353__auto__);
});

sablono.core.time_field23464.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.time_field23464.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23464);

/**
 * Creates a url input field.
 */
sablono.core.url_field23467 = (function sablono$core$url_field23467(var_args){
var G__23469 = arguments.length;
switch (G__23469) {
case 1:
return sablono.core.url_field23467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23467.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23353__auto__);
});

sablono.core.url_field23467.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.url_field23467.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23467);

/**
 * Creates a week input field.
 */
sablono.core.week_field23470 = (function sablono$core$week_field23470(var_args){
var G__23472 = arguments.length;
switch (G__23472) {
case 1:
return sablono.core.week_field23470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23470.cljs$core$IFn$_invoke$arity$1 = (function (name__23353__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23353__auto__);
});

sablono.core.week_field23470.cljs$core$IFn$_invoke$arity$2 = (function (name__23353__auto__,value__23354__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23353__auto__,value__23354__auto__);
});

sablono.core.week_field23470.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23470);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23490 = (function sablono$core$check_box23490(var_args){
var G__23492 = arguments.length;
switch (G__23492) {
case 1:
return sablono.core.check_box23490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23490.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23490.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23490.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23490.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23490.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23490);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23494 = (function sablono$core$radio_button23494(var_args){
var G__23496 = arguments.length;
switch (G__23496) {
case 1:
return sablono.core.radio_button23494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23494.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23494.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23494.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23494.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23494.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23494);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23498 = (function sablono$core$select_options23498(coll){
var iter__4292__auto__ = (function sablono$core$select_options23498_$_iter__23499(s__23500){
return (new cljs.core.LazySeq(null,(function (){
var s__23500__$1 = s__23500;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23500__$1);
if(temp__5457__auto__){
var s__23500__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23500__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23500__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23502 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23501 = (0);
while(true){
if((i__23501 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23501);
cljs.core.chunk_append.call(null,b__23502,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23503 = x;
var text = cljs.core.nth.call(null,vec__23503,(0),null);
var val = cljs.core.nth.call(null,vec__23503,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23503,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23498.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23509 = (i__23501 + (1));
i__23501 = G__23509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23502),sablono$core$select_options23498_$_iter__23499.call(null,cljs.core.chunk_rest.call(null,s__23500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23502),null);
}
} else {
var x = cljs.core.first.call(null,s__23500__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23506 = x;
var text = cljs.core.nth.call(null,vec__23506,(0),null);
var val = cljs.core.nth.call(null,vec__23506,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23506,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23498.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23498_$_iter__23499.call(null,cljs.core.rest.call(null,s__23500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23498);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23510 = (function sablono$core$drop_down23510(var_args){
var G__23512 = arguments.length;
switch (G__23512) {
case 2:
return sablono.core.drop_down23510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23510.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23510.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23510.call(null,name,options,null);
});

sablono.core.drop_down23510.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23510.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23510);
/**
 * Creates a text area element.
 */
sablono.core.text_area23514 = (function sablono$core$text_area23514(var_args){
var G__23516 = arguments.length;
switch (G__23516) {
case 1:
return sablono.core.text_area23514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23514.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23514.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23514.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23514);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23518 = (function sablono$core$label23518(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23518);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23519 = (function sablono$core$submit_button23519(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23519);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23520 = (function sablono$core$reset_button23520(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23520);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23521 = (function sablono$core$form_to23521(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23528 = arguments.length;
var i__4500__auto___23529 = (0);
while(true){
if((i__4500__auto___23529 < len__4499__auto___23528)){
args__4502__auto__.push((arguments[i__4500__auto___23529]));

var G__23530 = (i__4500__auto___23529 + (1));
i__4500__auto___23529 = G__23530;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23521.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to23521.cljs$core$IFn$_invoke$arity$variadic = (function (p__23524,body){
var vec__23525 = p__23524;
var method = cljs.core.nth.call(null,vec__23525,(0),null);
var action = cljs.core.nth.call(null,vec__23525,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23521.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23521.cljs$lang$applyTo = (function (seq23522){
var G__23523 = cljs.core.first.call(null,seq23522);
var seq23522__$1 = cljs.core.next.call(null,seq23522);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23523,seq23522__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23521);

//# sourceMappingURL=core.js.map?rel=1522772865005
