// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__23536 = arguments.length;
switch (G__23536) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__23537 = opts;
var map__23537__$1 = ((((!((map__23537 == null)))?(((((map__23537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23537):map__23537);
var ref = cljs.core.get.call(null,map__23537__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__23537__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__23539 = cljs.core.count.call(null,refs);
switch (G__23539) {
case (1):
var vec__23540 = refs;
var a = cljs.core.nth.call(null,vec__23540,(0),null);
return ((function (vec__23540,a,G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__23540,a,G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__23543 = refs;
var a = cljs.core.nth.call(null,vec__23543,(0),null);
var b = cljs.core.nth.call(null,vec__23543,(1),null);
return ((function (vec__23543,a,b,G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__23543,a,b,G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__23546 = refs;
var a = cljs.core.nth.call(null,vec__23546,(0),null);
var b = cljs.core.nth.call(null,vec__23546,(1),null);
var c = cljs.core.nth.call(null,vec__23546,(2),null);
return ((function (vec__23546,a,b,c,G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__23546,a,b,c,G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__23539,map__23537,map__23537__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__23549 = ref;
cljs.core.reset_BANG_.call(null,G__23549,recalc.call(null));

return G__23549;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__23537,map__23537__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__23537,map__23537__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__23537,map__23537__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__23537,map__23537__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__23550_23556 = cljs.core.seq.call(null,refs);
var chunk__23551_23557 = null;
var count__23552_23558 = (0);
var i__23553_23559 = (0);
while(true){
if((i__23553_23559 < count__23552_23558)){
var ref_23560__$1 = cljs.core._nth.call(null,chunk__23551_23557,i__23553_23559);
cljs.core.add_watch.call(null,ref_23560__$1,key,watch);


var G__23561 = seq__23550_23556;
var G__23562 = chunk__23551_23557;
var G__23563 = count__23552_23558;
var G__23564 = (i__23553_23559 + (1));
seq__23550_23556 = G__23561;
chunk__23551_23557 = G__23562;
count__23552_23558 = G__23563;
i__23553_23559 = G__23564;
continue;
} else {
var temp__5457__auto___23565 = cljs.core.seq.call(null,seq__23550_23556);
if(temp__5457__auto___23565){
var seq__23550_23566__$1 = temp__5457__auto___23565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23550_23566__$1)){
var c__4319__auto___23567 = cljs.core.chunk_first.call(null,seq__23550_23566__$1);
var G__23568 = cljs.core.chunk_rest.call(null,seq__23550_23566__$1);
var G__23569 = c__4319__auto___23567;
var G__23570 = cljs.core.count.call(null,c__4319__auto___23567);
var G__23571 = (0);
seq__23550_23556 = G__23568;
chunk__23551_23557 = G__23569;
count__23552_23558 = G__23570;
i__23553_23559 = G__23571;
continue;
} else {
var ref_23572__$1 = cljs.core.first.call(null,seq__23550_23566__$1);
cljs.core.add_watch.call(null,ref_23572__$1,key,watch);


var G__23573 = cljs.core.next.call(null,seq__23550_23566__$1);
var G__23574 = null;
var G__23575 = (0);
var G__23576 = (0);
seq__23550_23556 = G__23573;
chunk__23551_23557 = G__23574;
count__23552_23558 = G__23575;
i__23553_23559 = G__23576;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1522772865168
