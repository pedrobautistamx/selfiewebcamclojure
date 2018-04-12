// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27824_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27824_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27825 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27826 = null;
var count__27827 = (0);
var i__27828 = (0);
while(true){
if((i__27828 < count__27827)){
var n = cljs.core._nth.call(null,chunk__27826,i__27828);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27829 = seq__27825;
var G__27830 = chunk__27826;
var G__27831 = count__27827;
var G__27832 = (i__27828 + (1));
seq__27825 = G__27829;
chunk__27826 = G__27830;
count__27827 = G__27831;
i__27828 = G__27832;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27825);
if(temp__5457__auto__){
var seq__27825__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27825__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27825__$1);
var G__27833 = cljs.core.chunk_rest.call(null,seq__27825__$1);
var G__27834 = c__4319__auto__;
var G__27835 = cljs.core.count.call(null,c__4319__auto__);
var G__27836 = (0);
seq__27825 = G__27833;
chunk__27826 = G__27834;
count__27827 = G__27835;
i__27828 = G__27836;
continue;
} else {
var n = cljs.core.first.call(null,seq__27825__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27837 = cljs.core.next.call(null,seq__27825__$1);
var G__27838 = null;
var G__27839 = (0);
var G__27840 = (0);
seq__27825 = G__27837;
chunk__27826 = G__27838;
count__27827 = G__27839;
i__27828 = G__27840;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27841){
var vec__27842 = p__27841;
var _ = cljs.core.nth.call(null,vec__27842,(0),null);
var v = cljs.core.nth.call(null,vec__27842,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__27845){
var vec__27846 = p__27845;
var k = cljs.core.nth.call(null,vec__27846,(0),null);
var v = cljs.core.nth.call(null,vec__27846,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27858_27866 = cljs.core.seq.call(null,deps);
var chunk__27859_27867 = null;
var count__27860_27868 = (0);
var i__27861_27869 = (0);
while(true){
if((i__27861_27869 < count__27860_27868)){
var dep_27870 = cljs.core._nth.call(null,chunk__27859_27867,i__27861_27869);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27870;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27870));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27870,(depth + (1)),state);
} else {
}


var G__27871 = seq__27858_27866;
var G__27872 = chunk__27859_27867;
var G__27873 = count__27860_27868;
var G__27874 = (i__27861_27869 + (1));
seq__27858_27866 = G__27871;
chunk__27859_27867 = G__27872;
count__27860_27868 = G__27873;
i__27861_27869 = G__27874;
continue;
} else {
var temp__5457__auto___27875 = cljs.core.seq.call(null,seq__27858_27866);
if(temp__5457__auto___27875){
var seq__27858_27876__$1 = temp__5457__auto___27875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27858_27876__$1)){
var c__4319__auto___27877 = cljs.core.chunk_first.call(null,seq__27858_27876__$1);
var G__27878 = cljs.core.chunk_rest.call(null,seq__27858_27876__$1);
var G__27879 = c__4319__auto___27877;
var G__27880 = cljs.core.count.call(null,c__4319__auto___27877);
var G__27881 = (0);
seq__27858_27866 = G__27878;
chunk__27859_27867 = G__27879;
count__27860_27868 = G__27880;
i__27861_27869 = G__27881;
continue;
} else {
var dep_27882 = cljs.core.first.call(null,seq__27858_27876__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27882;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27882));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27882,(depth + (1)),state);
} else {
}


var G__27883 = cljs.core.next.call(null,seq__27858_27876__$1);
var G__27884 = null;
var G__27885 = (0);
var G__27886 = (0);
seq__27858_27866 = G__27883;
chunk__27859_27867 = G__27884;
count__27860_27868 = G__27885;
i__27861_27869 = G__27886;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27862){
var vec__27863 = p__27862;
var seq__27864 = cljs.core.seq.call(null,vec__27863);
var first__27865 = cljs.core.first.call(null,seq__27864);
var seq__27864__$1 = cljs.core.next.call(null,seq__27864);
var x = first__27865;
var xs = seq__27864__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27863,seq__27864,first__27865,seq__27864__$1,x,xs,get_deps__$1){
return (function (p1__27849_SHARP_){
return clojure.set.difference.call(null,p1__27849_SHARP_,x);
});})(vec__27863,seq__27864,first__27865,seq__27864__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27887 = cljs.core.seq.call(null,provides);
var chunk__27888 = null;
var count__27889 = (0);
var i__27890 = (0);
while(true){
if((i__27890 < count__27889)){
var prov = cljs.core._nth.call(null,chunk__27888,i__27890);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27891_27899 = cljs.core.seq.call(null,requires);
var chunk__27892_27900 = null;
var count__27893_27901 = (0);
var i__27894_27902 = (0);
while(true){
if((i__27894_27902 < count__27893_27901)){
var req_27903 = cljs.core._nth.call(null,chunk__27892_27900,i__27894_27902);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27903,prov);


var G__27904 = seq__27891_27899;
var G__27905 = chunk__27892_27900;
var G__27906 = count__27893_27901;
var G__27907 = (i__27894_27902 + (1));
seq__27891_27899 = G__27904;
chunk__27892_27900 = G__27905;
count__27893_27901 = G__27906;
i__27894_27902 = G__27907;
continue;
} else {
var temp__5457__auto___27908 = cljs.core.seq.call(null,seq__27891_27899);
if(temp__5457__auto___27908){
var seq__27891_27909__$1 = temp__5457__auto___27908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27891_27909__$1)){
var c__4319__auto___27910 = cljs.core.chunk_first.call(null,seq__27891_27909__$1);
var G__27911 = cljs.core.chunk_rest.call(null,seq__27891_27909__$1);
var G__27912 = c__4319__auto___27910;
var G__27913 = cljs.core.count.call(null,c__4319__auto___27910);
var G__27914 = (0);
seq__27891_27899 = G__27911;
chunk__27892_27900 = G__27912;
count__27893_27901 = G__27913;
i__27894_27902 = G__27914;
continue;
} else {
var req_27915 = cljs.core.first.call(null,seq__27891_27909__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27915,prov);


var G__27916 = cljs.core.next.call(null,seq__27891_27909__$1);
var G__27917 = null;
var G__27918 = (0);
var G__27919 = (0);
seq__27891_27899 = G__27916;
chunk__27892_27900 = G__27917;
count__27893_27901 = G__27918;
i__27894_27902 = G__27919;
continue;
}
} else {
}
}
break;
}


var G__27920 = seq__27887;
var G__27921 = chunk__27888;
var G__27922 = count__27889;
var G__27923 = (i__27890 + (1));
seq__27887 = G__27920;
chunk__27888 = G__27921;
count__27889 = G__27922;
i__27890 = G__27923;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27887);
if(temp__5457__auto__){
var seq__27887__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27887__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27887__$1);
var G__27924 = cljs.core.chunk_rest.call(null,seq__27887__$1);
var G__27925 = c__4319__auto__;
var G__27926 = cljs.core.count.call(null,c__4319__auto__);
var G__27927 = (0);
seq__27887 = G__27924;
chunk__27888 = G__27925;
count__27889 = G__27926;
i__27890 = G__27927;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27887__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27895_27928 = cljs.core.seq.call(null,requires);
var chunk__27896_27929 = null;
var count__27897_27930 = (0);
var i__27898_27931 = (0);
while(true){
if((i__27898_27931 < count__27897_27930)){
var req_27932 = cljs.core._nth.call(null,chunk__27896_27929,i__27898_27931);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27932,prov);


var G__27933 = seq__27895_27928;
var G__27934 = chunk__27896_27929;
var G__27935 = count__27897_27930;
var G__27936 = (i__27898_27931 + (1));
seq__27895_27928 = G__27933;
chunk__27896_27929 = G__27934;
count__27897_27930 = G__27935;
i__27898_27931 = G__27936;
continue;
} else {
var temp__5457__auto___27937__$1 = cljs.core.seq.call(null,seq__27895_27928);
if(temp__5457__auto___27937__$1){
var seq__27895_27938__$1 = temp__5457__auto___27937__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27895_27938__$1)){
var c__4319__auto___27939 = cljs.core.chunk_first.call(null,seq__27895_27938__$1);
var G__27940 = cljs.core.chunk_rest.call(null,seq__27895_27938__$1);
var G__27941 = c__4319__auto___27939;
var G__27942 = cljs.core.count.call(null,c__4319__auto___27939);
var G__27943 = (0);
seq__27895_27928 = G__27940;
chunk__27896_27929 = G__27941;
count__27897_27930 = G__27942;
i__27898_27931 = G__27943;
continue;
} else {
var req_27944 = cljs.core.first.call(null,seq__27895_27938__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27944,prov);


var G__27945 = cljs.core.next.call(null,seq__27895_27938__$1);
var G__27946 = null;
var G__27947 = (0);
var G__27948 = (0);
seq__27895_27928 = G__27945;
chunk__27896_27929 = G__27946;
count__27897_27930 = G__27947;
i__27898_27931 = G__27948;
continue;
}
} else {
}
}
break;
}


var G__27949 = cljs.core.next.call(null,seq__27887__$1);
var G__27950 = null;
var G__27951 = (0);
var G__27952 = (0);
seq__27887 = G__27949;
chunk__27888 = G__27950;
count__27889 = G__27951;
i__27890 = G__27952;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27953_27957 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27954_27958 = null;
var count__27955_27959 = (0);
var i__27956_27960 = (0);
while(true){
if((i__27956_27960 < count__27955_27959)){
var ns_27961 = cljs.core._nth.call(null,chunk__27954_27958,i__27956_27960);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27961);


var G__27962 = seq__27953_27957;
var G__27963 = chunk__27954_27958;
var G__27964 = count__27955_27959;
var G__27965 = (i__27956_27960 + (1));
seq__27953_27957 = G__27962;
chunk__27954_27958 = G__27963;
count__27955_27959 = G__27964;
i__27956_27960 = G__27965;
continue;
} else {
var temp__5457__auto___27966 = cljs.core.seq.call(null,seq__27953_27957);
if(temp__5457__auto___27966){
var seq__27953_27967__$1 = temp__5457__auto___27966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27953_27967__$1)){
var c__4319__auto___27968 = cljs.core.chunk_first.call(null,seq__27953_27967__$1);
var G__27969 = cljs.core.chunk_rest.call(null,seq__27953_27967__$1);
var G__27970 = c__4319__auto___27968;
var G__27971 = cljs.core.count.call(null,c__4319__auto___27968);
var G__27972 = (0);
seq__27953_27957 = G__27969;
chunk__27954_27958 = G__27970;
count__27955_27959 = G__27971;
i__27956_27960 = G__27972;
continue;
} else {
var ns_27973 = cljs.core.first.call(null,seq__27953_27967__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27973);


var G__27974 = cljs.core.next.call(null,seq__27953_27967__$1);
var G__27975 = null;
var G__27976 = (0);
var G__27977 = (0);
seq__27953_27957 = G__27974;
chunk__27954_27958 = G__27975;
count__27955_27959 = G__27976;
i__27956_27960 = G__27977;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27978__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27979__i = 0, G__27979__a = new Array(arguments.length -  0);
while (G__27979__i < G__27979__a.length) {G__27979__a[G__27979__i] = arguments[G__27979__i + 0]; ++G__27979__i;}
  args = new cljs.core.IndexedSeq(G__27979__a,0,null);
} 
return G__27978__delegate.call(this,args);};
G__27978.cljs$lang$maxFixedArity = 0;
G__27978.cljs$lang$applyTo = (function (arglist__27980){
var args = cljs.core.seq(arglist__27980);
return G__27978__delegate(args);
});
G__27978.cljs$core$IFn$_invoke$arity$variadic = G__27978__delegate;
return G__27978;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__27981_SHARP_,p2__27982_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27981_SHARP_)].join('')),p2__27982_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__27983_SHARP_,p2__27984_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27983_SHARP_)].join(''),p2__27984_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27985 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27985.addCallback(((function (G__27985){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27985))
);

G__27985.addErrback(((function (G__27985){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27985))
);

return G__27985;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27986){if((e27986 instanceof Error)){
var e = e27986;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27986;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27987){if((e27987 instanceof Error)){
var e = e27987;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27987;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27988 = cljs.core._EQ_;
var expr__27989 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27988.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27989))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27988.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27989))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27988.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27989))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27988,expr__27989){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27988,expr__27989))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27991,callback){
var map__27992 = p__27991;
var map__27992__$1 = ((((!((map__27992 == null)))?(((((map__27992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27992):map__27992);
var file_msg = map__27992__$1;
var request_url = cljs.core.get.call(null,map__27992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27992,map__27992__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27992,map__27992__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24615__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto__){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto__){
return (function (state_28030){
var state_val_28031 = (state_28030[(1)]);
if((state_val_28031 === (7))){
var inst_28026 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28032_28058 = state_28030__$1;
(statearr_28032_28058[(2)] = inst_28026);

(statearr_28032_28058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (1))){
var state_28030__$1 = state_28030;
var statearr_28033_28059 = state_28030__$1;
(statearr_28033_28059[(2)] = null);

(statearr_28033_28059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (4))){
var inst_27996 = (state_28030[(7)]);
var inst_27996__$1 = (state_28030[(2)]);
var state_28030__$1 = (function (){var statearr_28034 = state_28030;
(statearr_28034[(7)] = inst_27996__$1);

return statearr_28034;
})();
if(cljs.core.truth_(inst_27996__$1)){
var statearr_28035_28060 = state_28030__$1;
(statearr_28035_28060[(1)] = (5));

} else {
var statearr_28036_28061 = state_28030__$1;
(statearr_28036_28061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (15))){
var inst_28011 = (state_28030[(8)]);
var inst_28009 = (state_28030[(9)]);
var inst_28013 = inst_28011.call(null,inst_28009);
var state_28030__$1 = state_28030;
var statearr_28037_28062 = state_28030__$1;
(statearr_28037_28062[(2)] = inst_28013);

(statearr_28037_28062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (13))){
var inst_28020 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28038_28063 = state_28030__$1;
(statearr_28038_28063[(2)] = inst_28020);

(statearr_28038_28063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (6))){
var state_28030__$1 = state_28030;
var statearr_28039_28064 = state_28030__$1;
(statearr_28039_28064[(2)] = null);

(statearr_28039_28064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (17))){
var inst_28017 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28040_28065 = state_28030__$1;
(statearr_28040_28065[(2)] = inst_28017);

(statearr_28040_28065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (3))){
var inst_28028 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28030__$1,inst_28028);
} else {
if((state_val_28031 === (12))){
var state_28030__$1 = state_28030;
var statearr_28041_28066 = state_28030__$1;
(statearr_28041_28066[(2)] = null);

(statearr_28041_28066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (2))){
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28030__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28031 === (11))){
var inst_28001 = (state_28030[(10)]);
var inst_28007 = figwheel.client.file_reloading.blocking_load.call(null,inst_28001);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28030__$1,(14),inst_28007);
} else {
if((state_val_28031 === (9))){
var inst_28001 = (state_28030[(10)]);
var state_28030__$1 = state_28030;
if(cljs.core.truth_(inst_28001)){
var statearr_28042_28067 = state_28030__$1;
(statearr_28042_28067[(1)] = (11));

} else {
var statearr_28043_28068 = state_28030__$1;
(statearr_28043_28068[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (5))){
var inst_28002 = (state_28030[(11)]);
var inst_27996 = (state_28030[(7)]);
var inst_28001 = cljs.core.nth.call(null,inst_27996,(0),null);
var inst_28002__$1 = cljs.core.nth.call(null,inst_27996,(1),null);
var state_28030__$1 = (function (){var statearr_28044 = state_28030;
(statearr_28044[(11)] = inst_28002__$1);

(statearr_28044[(10)] = inst_28001);

return statearr_28044;
})();
if(cljs.core.truth_(inst_28002__$1)){
var statearr_28045_28069 = state_28030__$1;
(statearr_28045_28069[(1)] = (8));

} else {
var statearr_28046_28070 = state_28030__$1;
(statearr_28046_28070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (14))){
var inst_28011 = (state_28030[(8)]);
var inst_28001 = (state_28030[(10)]);
var inst_28009 = (state_28030[(2)]);
var inst_28010 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28011__$1 = cljs.core.get.call(null,inst_28010,inst_28001);
var state_28030__$1 = (function (){var statearr_28047 = state_28030;
(statearr_28047[(8)] = inst_28011__$1);

(statearr_28047[(9)] = inst_28009);

return statearr_28047;
})();
if(cljs.core.truth_(inst_28011__$1)){
var statearr_28048_28071 = state_28030__$1;
(statearr_28048_28071[(1)] = (15));

} else {
var statearr_28049_28072 = state_28030__$1;
(statearr_28049_28072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (16))){
var inst_28009 = (state_28030[(9)]);
var inst_28015 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28009);
var state_28030__$1 = state_28030;
var statearr_28050_28073 = state_28030__$1;
(statearr_28050_28073[(2)] = inst_28015);

(statearr_28050_28073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (10))){
var inst_28022 = (state_28030[(2)]);
var state_28030__$1 = (function (){var statearr_28051 = state_28030;
(statearr_28051[(12)] = inst_28022);

return statearr_28051;
})();
var statearr_28052_28074 = state_28030__$1;
(statearr_28052_28074[(2)] = null);

(statearr_28052_28074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (8))){
var inst_28002 = (state_28030[(11)]);
var inst_28004 = eval(inst_28002);
var state_28030__$1 = state_28030;
var statearr_28053_28075 = state_28030__$1;
(statearr_28053_28075[(2)] = inst_28004);

(statearr_28053_28075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24615__auto__))
;
return ((function (switch__24525__auto__,c__24615__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24526__auto__ = null;
var figwheel$client$file_reloading$state_machine__24526__auto____0 = (function (){
var statearr_28054 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28054[(0)] = figwheel$client$file_reloading$state_machine__24526__auto__);

(statearr_28054[(1)] = (1));

return statearr_28054;
});
var figwheel$client$file_reloading$state_machine__24526__auto____1 = (function (state_28030){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_28030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e28055){if((e28055 instanceof Object)){
var ex__24529__auto__ = e28055;
var statearr_28056_28076 = state_28030;
(statearr_28056_28076[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28077 = state_28030;
state_28030 = G__28077;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24526__auto__ = function(state_28030){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24526__auto____1.call(this,state_28030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24526__auto____0;
figwheel$client$file_reloading$state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24526__auto____1;
return figwheel$client$file_reloading$state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto__))
})();
var state__24617__auto__ = (function (){var statearr_28057 = f__24616__auto__.call(null);
(statearr_28057[(6)] = c__24615__auto__);

return statearr_28057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto__))
);

return c__24615__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28079 = arguments.length;
switch (G__28079) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28081,callback){
var map__28082 = p__28081;
var map__28082__$1 = ((((!((map__28082 == null)))?(((((map__28082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28082):map__28082);
var file_msg = map__28082__$1;
var namespace = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28082,map__28082__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28082,map__28082__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28084){
var map__28085 = p__28084;
var map__28085__$1 = ((((!((map__28085 == null)))?(((((map__28085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28085):map__28085);
var file_msg = map__28085__$1;
var namespace = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28087){
var map__28088 = p__28087;
var map__28088__$1 = ((((!((map__28088 == null)))?(((((map__28088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28088):map__28088);
var file_msg = map__28088__$1;
var namespace = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28090,callback){
var map__28091 = p__28090;
var map__28091__$1 = ((((!((map__28091 == null)))?(((((map__28091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28091):map__28091);
var file_msg = map__28091__$1;
var request_url = cljs.core.get.call(null,map__28091__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24615__auto___28141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto___28141,out){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto___28141,out){
return (function (state_28126){
var state_val_28127 = (state_28126[(1)]);
if((state_val_28127 === (1))){
var inst_28100 = cljs.core.seq.call(null,files);
var inst_28101 = cljs.core.first.call(null,inst_28100);
var inst_28102 = cljs.core.next.call(null,inst_28100);
var inst_28103 = files;
var state_28126__$1 = (function (){var statearr_28128 = state_28126;
(statearr_28128[(7)] = inst_28102);

(statearr_28128[(8)] = inst_28101);

(statearr_28128[(9)] = inst_28103);

return statearr_28128;
})();
var statearr_28129_28142 = state_28126__$1;
(statearr_28129_28142[(2)] = null);

(statearr_28129_28142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (2))){
var inst_28103 = (state_28126[(9)]);
var inst_28109 = (state_28126[(10)]);
var inst_28108 = cljs.core.seq.call(null,inst_28103);
var inst_28109__$1 = cljs.core.first.call(null,inst_28108);
var inst_28110 = cljs.core.next.call(null,inst_28108);
var inst_28111 = (inst_28109__$1 == null);
var inst_28112 = cljs.core.not.call(null,inst_28111);
var state_28126__$1 = (function (){var statearr_28130 = state_28126;
(statearr_28130[(11)] = inst_28110);

(statearr_28130[(10)] = inst_28109__$1);

return statearr_28130;
})();
if(inst_28112){
var statearr_28131_28143 = state_28126__$1;
(statearr_28131_28143[(1)] = (4));

} else {
var statearr_28132_28144 = state_28126__$1;
(statearr_28132_28144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (3))){
var inst_28124 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28126__$1,inst_28124);
} else {
if((state_val_28127 === (4))){
var inst_28109 = (state_28126[(10)]);
var inst_28114 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28109);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28126__$1,(7),inst_28114);
} else {
if((state_val_28127 === (5))){
var inst_28120 = cljs.core.async.close_BANG_.call(null,out);
var state_28126__$1 = state_28126;
var statearr_28133_28145 = state_28126__$1;
(statearr_28133_28145[(2)] = inst_28120);

(statearr_28133_28145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (6))){
var inst_28122 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28134_28146 = state_28126__$1;
(statearr_28134_28146[(2)] = inst_28122);

(statearr_28134_28146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (7))){
var inst_28110 = (state_28126[(11)]);
var inst_28116 = (state_28126[(2)]);
var inst_28117 = cljs.core.async.put_BANG_.call(null,out,inst_28116);
var inst_28103 = inst_28110;
var state_28126__$1 = (function (){var statearr_28135 = state_28126;
(statearr_28135[(9)] = inst_28103);

(statearr_28135[(12)] = inst_28117);

return statearr_28135;
})();
var statearr_28136_28147 = state_28126__$1;
(statearr_28136_28147[(2)] = null);

(statearr_28136_28147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24615__auto___28141,out))
;
return ((function (switch__24525__auto__,c__24615__auto___28141,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto____0 = (function (){
var statearr_28137 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28137[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto__);

(statearr_28137[(1)] = (1));

return statearr_28137;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto____1 = (function (state_28126){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_28126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e28138){if((e28138 instanceof Object)){
var ex__24529__auto__ = e28138;
var statearr_28139_28148 = state_28126;
(statearr_28139_28148[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28149 = state_28126;
state_28126 = G__28149;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto__ = function(state_28126){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto____1.call(this,state_28126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto___28141,out))
})();
var state__24617__auto__ = (function (){var statearr_28140 = f__24616__auto__.call(null);
(statearr_28140[(6)] = c__24615__auto___28141);

return statearr_28140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto___28141,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28150,opts){
var map__28151 = p__28150;
var map__28151__$1 = ((((!((map__28151 == null)))?(((((map__28151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28151):map__28151);
var eval_body = cljs.core.get.call(null,map__28151__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28153){var e = e28153;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28154_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28154_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28155){
var vec__28156 = p__28155;
var k = cljs.core.nth.call(null,vec__28156,(0),null);
var v = cljs.core.nth.call(null,vec__28156,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28159){
var vec__28160 = p__28159;
var k = cljs.core.nth.call(null,vec__28160,(0),null);
var v = cljs.core.nth.call(null,vec__28160,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28166,p__28167){
var map__28168 = p__28166;
var map__28168__$1 = ((((!((map__28168 == null)))?(((((map__28168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28168):map__28168);
var opts = map__28168__$1;
var before_jsload = cljs.core.get.call(null,map__28168__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28168__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28168__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28169 = p__28167;
var map__28169__$1 = ((((!((map__28169 == null)))?(((((map__28169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28169):map__28169);
var msg = map__28169__$1;
var files = cljs.core.get.call(null,map__28169__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28169__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28169__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24615__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28323){
var state_val_28324 = (state_28323[(1)]);
if((state_val_28324 === (7))){
var inst_28185 = (state_28323[(7)]);
var inst_28186 = (state_28323[(8)]);
var inst_28183 = (state_28323[(9)]);
var inst_28184 = (state_28323[(10)]);
var inst_28191 = cljs.core._nth.call(null,inst_28184,inst_28186);
var inst_28192 = figwheel.client.file_reloading.eval_body.call(null,inst_28191,opts);
var inst_28193 = (inst_28186 + (1));
var tmp28325 = inst_28185;
var tmp28326 = inst_28183;
var tmp28327 = inst_28184;
var inst_28183__$1 = tmp28326;
var inst_28184__$1 = tmp28327;
var inst_28185__$1 = tmp28325;
var inst_28186__$1 = inst_28193;
var state_28323__$1 = (function (){var statearr_28328 = state_28323;
(statearr_28328[(7)] = inst_28185__$1);

(statearr_28328[(8)] = inst_28186__$1);

(statearr_28328[(9)] = inst_28183__$1);

(statearr_28328[(10)] = inst_28184__$1);

(statearr_28328[(11)] = inst_28192);

return statearr_28328;
})();
var statearr_28329_28412 = state_28323__$1;
(statearr_28329_28412[(2)] = null);

(statearr_28329_28412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (20))){
var inst_28226 = (state_28323[(12)]);
var inst_28234 = figwheel.client.file_reloading.sort_files.call(null,inst_28226);
var state_28323__$1 = state_28323;
var statearr_28330_28413 = state_28323__$1;
(statearr_28330_28413[(2)] = inst_28234);

(statearr_28330_28413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (27))){
var state_28323__$1 = state_28323;
var statearr_28331_28414 = state_28323__$1;
(statearr_28331_28414[(2)] = null);

(statearr_28331_28414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (1))){
var inst_28175 = (state_28323[(13)]);
var inst_28172 = before_jsload.call(null,files);
var inst_28173 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28174 = (function (){return ((function (inst_28175,inst_28172,inst_28173,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28163_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28163_SHARP_);
});
;})(inst_28175,inst_28172,inst_28173,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28175__$1 = cljs.core.filter.call(null,inst_28174,files);
var inst_28176 = cljs.core.not_empty.call(null,inst_28175__$1);
var state_28323__$1 = (function (){var statearr_28332 = state_28323;
(statearr_28332[(13)] = inst_28175__$1);

(statearr_28332[(14)] = inst_28173);

(statearr_28332[(15)] = inst_28172);

return statearr_28332;
})();
if(cljs.core.truth_(inst_28176)){
var statearr_28333_28415 = state_28323__$1;
(statearr_28333_28415[(1)] = (2));

} else {
var statearr_28334_28416 = state_28323__$1;
(statearr_28334_28416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (24))){
var state_28323__$1 = state_28323;
var statearr_28335_28417 = state_28323__$1;
(statearr_28335_28417[(2)] = null);

(statearr_28335_28417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (39))){
var inst_28276 = (state_28323[(16)]);
var state_28323__$1 = state_28323;
var statearr_28336_28418 = state_28323__$1;
(statearr_28336_28418[(2)] = inst_28276);

(statearr_28336_28418[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (46))){
var inst_28318 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28337_28419 = state_28323__$1;
(statearr_28337_28419[(2)] = inst_28318);

(statearr_28337_28419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (4))){
var inst_28220 = (state_28323[(2)]);
var inst_28221 = cljs.core.List.EMPTY;
var inst_28222 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28221);
var inst_28223 = (function (){return ((function (inst_28220,inst_28221,inst_28222,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28164_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28164_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28164_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28164_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_28220,inst_28221,inst_28222,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28224 = cljs.core.filter.call(null,inst_28223,files);
var inst_28225 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28226 = cljs.core.concat.call(null,inst_28224,inst_28225);
var state_28323__$1 = (function (){var statearr_28338 = state_28323;
(statearr_28338[(17)] = inst_28222);

(statearr_28338[(18)] = inst_28220);

(statearr_28338[(12)] = inst_28226);

return statearr_28338;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28339_28420 = state_28323__$1;
(statearr_28339_28420[(1)] = (16));

} else {
var statearr_28340_28421 = state_28323__$1;
(statearr_28340_28421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (15))){
var inst_28210 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28341_28422 = state_28323__$1;
(statearr_28341_28422[(2)] = inst_28210);

(statearr_28341_28422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (21))){
var inst_28236 = (state_28323[(19)]);
var inst_28236__$1 = (state_28323[(2)]);
var inst_28237 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28236__$1);
var state_28323__$1 = (function (){var statearr_28342 = state_28323;
(statearr_28342[(19)] = inst_28236__$1);

return statearr_28342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28323__$1,(22),inst_28237);
} else {
if((state_val_28324 === (31))){
var inst_28321 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28323__$1,inst_28321);
} else {
if((state_val_28324 === (32))){
var inst_28276 = (state_28323[(16)]);
var inst_28281 = inst_28276.cljs$lang$protocol_mask$partition0$;
var inst_28282 = (inst_28281 & (64));
var inst_28283 = inst_28276.cljs$core$ISeq$;
var inst_28284 = (cljs.core.PROTOCOL_SENTINEL === inst_28283);
var inst_28285 = ((inst_28282) || (inst_28284));
var state_28323__$1 = state_28323;
if(cljs.core.truth_(inst_28285)){
var statearr_28343_28423 = state_28323__$1;
(statearr_28343_28423[(1)] = (35));

} else {
var statearr_28344_28424 = state_28323__$1;
(statearr_28344_28424[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (40))){
var inst_28298 = (state_28323[(20)]);
var inst_28297 = (state_28323[(2)]);
var inst_28298__$1 = cljs.core.get.call(null,inst_28297,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28299 = cljs.core.get.call(null,inst_28297,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28300 = cljs.core.not_empty.call(null,inst_28298__$1);
var state_28323__$1 = (function (){var statearr_28345 = state_28323;
(statearr_28345[(21)] = inst_28299);

(statearr_28345[(20)] = inst_28298__$1);

return statearr_28345;
})();
if(cljs.core.truth_(inst_28300)){
var statearr_28346_28425 = state_28323__$1;
(statearr_28346_28425[(1)] = (41));

} else {
var statearr_28347_28426 = state_28323__$1;
(statearr_28347_28426[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (33))){
var state_28323__$1 = state_28323;
var statearr_28348_28427 = state_28323__$1;
(statearr_28348_28427[(2)] = false);

(statearr_28348_28427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (13))){
var inst_28196 = (state_28323[(22)]);
var inst_28200 = cljs.core.chunk_first.call(null,inst_28196);
var inst_28201 = cljs.core.chunk_rest.call(null,inst_28196);
var inst_28202 = cljs.core.count.call(null,inst_28200);
var inst_28183 = inst_28201;
var inst_28184 = inst_28200;
var inst_28185 = inst_28202;
var inst_28186 = (0);
var state_28323__$1 = (function (){var statearr_28349 = state_28323;
(statearr_28349[(7)] = inst_28185);

(statearr_28349[(8)] = inst_28186);

(statearr_28349[(9)] = inst_28183);

(statearr_28349[(10)] = inst_28184);

return statearr_28349;
})();
var statearr_28350_28428 = state_28323__$1;
(statearr_28350_28428[(2)] = null);

(statearr_28350_28428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (22))){
var inst_28239 = (state_28323[(23)]);
var inst_28244 = (state_28323[(24)]);
var inst_28240 = (state_28323[(25)]);
var inst_28236 = (state_28323[(19)]);
var inst_28239__$1 = (state_28323[(2)]);
var inst_28240__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28239__$1);
var inst_28241 = (function (){var all_files = inst_28236;
var res_SINGLEQUOTE_ = inst_28239__$1;
var res = inst_28240__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28239,inst_28244,inst_28240,inst_28236,inst_28239__$1,inst_28240__$1,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28165_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28165_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28239,inst_28244,inst_28240,inst_28236,inst_28239__$1,inst_28240__$1,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28242 = cljs.core.filter.call(null,inst_28241,inst_28239__$1);
var inst_28243 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28244__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28243);
var inst_28245 = cljs.core.not_empty.call(null,inst_28244__$1);
var state_28323__$1 = (function (){var statearr_28351 = state_28323;
(statearr_28351[(23)] = inst_28239__$1);

(statearr_28351[(24)] = inst_28244__$1);

(statearr_28351[(25)] = inst_28240__$1);

(statearr_28351[(26)] = inst_28242);

return statearr_28351;
})();
if(cljs.core.truth_(inst_28245)){
var statearr_28352_28429 = state_28323__$1;
(statearr_28352_28429[(1)] = (23));

} else {
var statearr_28353_28430 = state_28323__$1;
(statearr_28353_28430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (36))){
var state_28323__$1 = state_28323;
var statearr_28354_28431 = state_28323__$1;
(statearr_28354_28431[(2)] = false);

(statearr_28354_28431[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (41))){
var inst_28298 = (state_28323[(20)]);
var inst_28302 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28303 = cljs.core.map.call(null,inst_28302,inst_28298);
var inst_28304 = cljs.core.pr_str.call(null,inst_28303);
var inst_28305 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28304)].join('');
var inst_28306 = figwheel.client.utils.log.call(null,inst_28305);
var state_28323__$1 = state_28323;
var statearr_28355_28432 = state_28323__$1;
(statearr_28355_28432[(2)] = inst_28306);

(statearr_28355_28432[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (43))){
var inst_28299 = (state_28323[(21)]);
var inst_28309 = (state_28323[(2)]);
var inst_28310 = cljs.core.not_empty.call(null,inst_28299);
var state_28323__$1 = (function (){var statearr_28356 = state_28323;
(statearr_28356[(27)] = inst_28309);

return statearr_28356;
})();
if(cljs.core.truth_(inst_28310)){
var statearr_28357_28433 = state_28323__$1;
(statearr_28357_28433[(1)] = (44));

} else {
var statearr_28358_28434 = state_28323__$1;
(statearr_28358_28434[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (29))){
var inst_28276 = (state_28323[(16)]);
var inst_28239 = (state_28323[(23)]);
var inst_28244 = (state_28323[(24)]);
var inst_28240 = (state_28323[(25)]);
var inst_28242 = (state_28323[(26)]);
var inst_28236 = (state_28323[(19)]);
var inst_28272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28275 = (function (){var all_files = inst_28236;
var res_SINGLEQUOTE_ = inst_28239;
var res = inst_28240;
var files_not_loaded = inst_28242;
var dependencies_that_loaded = inst_28244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28276,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28272,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28274){
var map__28359 = p__28274;
var map__28359__$1 = ((((!((map__28359 == null)))?(((((map__28359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28359):map__28359);
var namespace = cljs.core.get.call(null,map__28359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28276,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28272,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28276__$1 = cljs.core.group_by.call(null,inst_28275,inst_28242);
var inst_28278 = (inst_28276__$1 == null);
var inst_28279 = cljs.core.not.call(null,inst_28278);
var state_28323__$1 = (function (){var statearr_28361 = state_28323;
(statearr_28361[(16)] = inst_28276__$1);

(statearr_28361[(28)] = inst_28272);

return statearr_28361;
})();
if(inst_28279){
var statearr_28362_28435 = state_28323__$1;
(statearr_28362_28435[(1)] = (32));

} else {
var statearr_28363_28436 = state_28323__$1;
(statearr_28363_28436[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (44))){
var inst_28299 = (state_28323[(21)]);
var inst_28312 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28299);
var inst_28313 = cljs.core.pr_str.call(null,inst_28312);
var inst_28314 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28313)].join('');
var inst_28315 = figwheel.client.utils.log.call(null,inst_28314);
var state_28323__$1 = state_28323;
var statearr_28364_28437 = state_28323__$1;
(statearr_28364_28437[(2)] = inst_28315);

(statearr_28364_28437[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (6))){
var inst_28217 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28365_28438 = state_28323__$1;
(statearr_28365_28438[(2)] = inst_28217);

(statearr_28365_28438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (28))){
var inst_28242 = (state_28323[(26)]);
var inst_28269 = (state_28323[(2)]);
var inst_28270 = cljs.core.not_empty.call(null,inst_28242);
var state_28323__$1 = (function (){var statearr_28366 = state_28323;
(statearr_28366[(29)] = inst_28269);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28367_28439 = state_28323__$1;
(statearr_28367_28439[(1)] = (29));

} else {
var statearr_28368_28440 = state_28323__$1;
(statearr_28368_28440[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (25))){
var inst_28240 = (state_28323[(25)]);
var inst_28256 = (state_28323[(2)]);
var inst_28257 = cljs.core.not_empty.call(null,inst_28240);
var state_28323__$1 = (function (){var statearr_28369 = state_28323;
(statearr_28369[(30)] = inst_28256);

return statearr_28369;
})();
if(cljs.core.truth_(inst_28257)){
var statearr_28370_28441 = state_28323__$1;
(statearr_28370_28441[(1)] = (26));

} else {
var statearr_28371_28442 = state_28323__$1;
(statearr_28371_28442[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (34))){
var inst_28292 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
if(cljs.core.truth_(inst_28292)){
var statearr_28372_28443 = state_28323__$1;
(statearr_28372_28443[(1)] = (38));

} else {
var statearr_28373_28444 = state_28323__$1;
(statearr_28373_28444[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (17))){
var state_28323__$1 = state_28323;
var statearr_28374_28445 = state_28323__$1;
(statearr_28374_28445[(2)] = recompile_dependents);

(statearr_28374_28445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (3))){
var state_28323__$1 = state_28323;
var statearr_28375_28446 = state_28323__$1;
(statearr_28375_28446[(2)] = null);

(statearr_28375_28446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (12))){
var inst_28213 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28376_28447 = state_28323__$1;
(statearr_28376_28447[(2)] = inst_28213);

(statearr_28376_28447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (2))){
var inst_28175 = (state_28323[(13)]);
var inst_28182 = cljs.core.seq.call(null,inst_28175);
var inst_28183 = inst_28182;
var inst_28184 = null;
var inst_28185 = (0);
var inst_28186 = (0);
var state_28323__$1 = (function (){var statearr_28377 = state_28323;
(statearr_28377[(7)] = inst_28185);

(statearr_28377[(8)] = inst_28186);

(statearr_28377[(9)] = inst_28183);

(statearr_28377[(10)] = inst_28184);

return statearr_28377;
})();
var statearr_28378_28448 = state_28323__$1;
(statearr_28378_28448[(2)] = null);

(statearr_28378_28448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (23))){
var inst_28239 = (state_28323[(23)]);
var inst_28244 = (state_28323[(24)]);
var inst_28240 = (state_28323[(25)]);
var inst_28242 = (state_28323[(26)]);
var inst_28236 = (state_28323[(19)]);
var inst_28247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28249 = (function (){var all_files = inst_28236;
var res_SINGLEQUOTE_ = inst_28239;
var res = inst_28240;
var files_not_loaded = inst_28242;
var dependencies_that_loaded = inst_28244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28247,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28248){
var map__28379 = p__28248;
var map__28379__$1 = ((((!((map__28379 == null)))?(((((map__28379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28379):map__28379);
var request_url = cljs.core.get.call(null,map__28379__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28247,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28250 = cljs.core.reverse.call(null,inst_28244);
var inst_28251 = cljs.core.map.call(null,inst_28249,inst_28250);
var inst_28252 = cljs.core.pr_str.call(null,inst_28251);
var inst_28253 = figwheel.client.utils.log.call(null,inst_28252);
var state_28323__$1 = (function (){var statearr_28381 = state_28323;
(statearr_28381[(31)] = inst_28247);

return statearr_28381;
})();
var statearr_28382_28449 = state_28323__$1;
(statearr_28382_28449[(2)] = inst_28253);

(statearr_28382_28449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (35))){
var state_28323__$1 = state_28323;
var statearr_28383_28450 = state_28323__$1;
(statearr_28383_28450[(2)] = true);

(statearr_28383_28450[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (19))){
var inst_28226 = (state_28323[(12)]);
var inst_28232 = figwheel.client.file_reloading.expand_files.call(null,inst_28226);
var state_28323__$1 = state_28323;
var statearr_28384_28451 = state_28323__$1;
(statearr_28384_28451[(2)] = inst_28232);

(statearr_28384_28451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (11))){
var state_28323__$1 = state_28323;
var statearr_28385_28452 = state_28323__$1;
(statearr_28385_28452[(2)] = null);

(statearr_28385_28452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (9))){
var inst_28215 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28386_28453 = state_28323__$1;
(statearr_28386_28453[(2)] = inst_28215);

(statearr_28386_28453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (5))){
var inst_28185 = (state_28323[(7)]);
var inst_28186 = (state_28323[(8)]);
var inst_28188 = (inst_28186 < inst_28185);
var inst_28189 = inst_28188;
var state_28323__$1 = state_28323;
if(cljs.core.truth_(inst_28189)){
var statearr_28387_28454 = state_28323__$1;
(statearr_28387_28454[(1)] = (7));

} else {
var statearr_28388_28455 = state_28323__$1;
(statearr_28388_28455[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (14))){
var inst_28196 = (state_28323[(22)]);
var inst_28205 = cljs.core.first.call(null,inst_28196);
var inst_28206 = figwheel.client.file_reloading.eval_body.call(null,inst_28205,opts);
var inst_28207 = cljs.core.next.call(null,inst_28196);
var inst_28183 = inst_28207;
var inst_28184 = null;
var inst_28185 = (0);
var inst_28186 = (0);
var state_28323__$1 = (function (){var statearr_28389 = state_28323;
(statearr_28389[(7)] = inst_28185);

(statearr_28389[(32)] = inst_28206);

(statearr_28389[(8)] = inst_28186);

(statearr_28389[(9)] = inst_28183);

(statearr_28389[(10)] = inst_28184);

return statearr_28389;
})();
var statearr_28390_28456 = state_28323__$1;
(statearr_28390_28456[(2)] = null);

(statearr_28390_28456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (45))){
var state_28323__$1 = state_28323;
var statearr_28391_28457 = state_28323__$1;
(statearr_28391_28457[(2)] = null);

(statearr_28391_28457[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (26))){
var inst_28239 = (state_28323[(23)]);
var inst_28244 = (state_28323[(24)]);
var inst_28240 = (state_28323[(25)]);
var inst_28242 = (state_28323[(26)]);
var inst_28236 = (state_28323[(19)]);
var inst_28259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28261 = (function (){var all_files = inst_28236;
var res_SINGLEQUOTE_ = inst_28239;
var res = inst_28240;
var files_not_loaded = inst_28242;
var dependencies_that_loaded = inst_28244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28259,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28260){
var map__28392 = p__28260;
var map__28392__$1 = ((((!((map__28392 == null)))?(((((map__28392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28392):map__28392);
var namespace = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28259,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28262 = cljs.core.map.call(null,inst_28261,inst_28240);
var inst_28263 = cljs.core.pr_str.call(null,inst_28262);
var inst_28264 = figwheel.client.utils.log.call(null,inst_28263);
var inst_28265 = (function (){var all_files = inst_28236;
var res_SINGLEQUOTE_ = inst_28239;
var res = inst_28240;
var files_not_loaded = inst_28242;
var dependencies_that_loaded = inst_28244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28259,inst_28261,inst_28262,inst_28263,inst_28264,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28239,inst_28244,inst_28240,inst_28242,inst_28236,inst_28259,inst_28261,inst_28262,inst_28263,inst_28264,state_val_28324,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28266 = setTimeout(inst_28265,(10));
var state_28323__$1 = (function (){var statearr_28394 = state_28323;
(statearr_28394[(33)] = inst_28259);

(statearr_28394[(34)] = inst_28264);

return statearr_28394;
})();
var statearr_28395_28458 = state_28323__$1;
(statearr_28395_28458[(2)] = inst_28266);

(statearr_28395_28458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (16))){
var state_28323__$1 = state_28323;
var statearr_28396_28459 = state_28323__$1;
(statearr_28396_28459[(2)] = reload_dependents);

(statearr_28396_28459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (38))){
var inst_28276 = (state_28323[(16)]);
var inst_28294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28276);
var state_28323__$1 = state_28323;
var statearr_28397_28460 = state_28323__$1;
(statearr_28397_28460[(2)] = inst_28294);

(statearr_28397_28460[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (30))){
var state_28323__$1 = state_28323;
var statearr_28398_28461 = state_28323__$1;
(statearr_28398_28461[(2)] = null);

(statearr_28398_28461[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (10))){
var inst_28196 = (state_28323[(22)]);
var inst_28198 = cljs.core.chunked_seq_QMARK_.call(null,inst_28196);
var state_28323__$1 = state_28323;
if(inst_28198){
var statearr_28399_28462 = state_28323__$1;
(statearr_28399_28462[(1)] = (13));

} else {
var statearr_28400_28463 = state_28323__$1;
(statearr_28400_28463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (18))){
var inst_28230 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
if(cljs.core.truth_(inst_28230)){
var statearr_28401_28464 = state_28323__$1;
(statearr_28401_28464[(1)] = (19));

} else {
var statearr_28402_28465 = state_28323__$1;
(statearr_28402_28465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (42))){
var state_28323__$1 = state_28323;
var statearr_28403_28466 = state_28323__$1;
(statearr_28403_28466[(2)] = null);

(statearr_28403_28466[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (37))){
var inst_28289 = (state_28323[(2)]);
var state_28323__$1 = state_28323;
var statearr_28404_28467 = state_28323__$1;
(statearr_28404_28467[(2)] = inst_28289);

(statearr_28404_28467[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28324 === (8))){
var inst_28196 = (state_28323[(22)]);
var inst_28183 = (state_28323[(9)]);
var inst_28196__$1 = cljs.core.seq.call(null,inst_28183);
var state_28323__$1 = (function (){var statearr_28405 = state_28323;
(statearr_28405[(22)] = inst_28196__$1);

return statearr_28405;
})();
if(inst_28196__$1){
var statearr_28406_28468 = state_28323__$1;
(statearr_28406_28468[(1)] = (10));

} else {
var statearr_28407_28469 = state_28323__$1;
(statearr_28407_28469[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24525__auto__,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto____0 = (function (){
var statearr_28408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28408[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto__);

(statearr_28408[(1)] = (1));

return statearr_28408;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto____1 = (function (state_28323){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_28323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e28409){if((e28409 instanceof Object)){
var ex__24529__auto__ = e28409;
var statearr_28410_28470 = state_28323;
(statearr_28410_28470[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28471 = state_28323;
state_28323 = G__28471;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto__ = function(state_28323){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto____1.call(this,state_28323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24617__auto__ = (function (){var statearr_28411 = f__24616__auto__.call(null);
(statearr_28411[(6)] = c__24615__auto__);

return statearr_28411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto__,map__28168,map__28168__$1,opts,before_jsload,on_jsload,reload_dependents,map__28169,map__28169__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24615__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28474,link){
var map__28475 = p__28474;
var map__28475__$1 = ((((!((map__28475 == null)))?(((((map__28475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28475):map__28475);
var file = cljs.core.get.call(null,map__28475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__28475,map__28475__$1,file){
return (function (p1__28472_SHARP_,p2__28473_SHARP_){
if(cljs.core._EQ_.call(null,p1__28472_SHARP_,p2__28473_SHARP_)){
return p1__28472_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__28475,map__28475__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28478){
var map__28479 = p__28478;
var map__28479__$1 = ((((!((map__28479 == null)))?(((((map__28479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28479):map__28479);
var match_length = cljs.core.get.call(null,map__28479__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28479__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28477_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28477_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28481_SHARP_,p2__28482_SHARP_){
return cljs.core.assoc.call(null,p1__28481_SHARP_,cljs.core.get.call(null,p2__28482_SHARP_,key),p2__28482_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28483 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28483);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28483);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28484,p__28485){
var map__28486 = p__28484;
var map__28486__$1 = ((((!((map__28486 == null)))?(((((map__28486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28486):map__28486);
var on_cssload = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28487 = p__28485;
var map__28487__$1 = ((((!((map__28487 == null)))?(((((map__28487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28487):map__28487);
var files_msg = map__28487__$1;
var files = cljs.core.get.call(null,map__28487__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1522769332871
