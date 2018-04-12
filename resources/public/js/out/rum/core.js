// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__23991_SHARP_,p2__23990_SHARP_){
return p2__23990_SHARP_.call(null,p1__23991_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__23993_SHARP_,p2__23992_SHARP_){
return p2__23992_SHARP_.call(null,old_state,p1__23993_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__3922__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__23994_SHARP_){
return p1__23994_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__23996 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__23996,(0),null);
var next_state = cljs.core.nth.call(null,vec__23996,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__23995_SHARP_){
return p1__23995_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__23999__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__23999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24000__i = 0, G__24000__a = new Array(arguments.length -  0);
while (G__24000__i < G__24000__a.length) {G__24000__a[G__24000__i] = arguments[G__24000__i + 0]; ++G__24000__i;}
  args = new cljs.core.IndexedSeq(G__24000__a,0,null);
} 
return G__23999__delegate.call(this,args);};
G__23999.cljs$lang$maxFixedArity = 0;
G__23999.cljs$lang$applyTo = (function (arglist__24001){
var args = cljs.core.seq(arglist__24001);
return G__23999__delegate(args);
});
G__23999.cljs$core$IFn$_invoke$arity$variadic = G__23999__delegate;
return G__23999;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__24002__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__24002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24003__i = 0, G__24003__a = new Array(arguments.length -  0);
while (G__24003__i < G__24003__a.length) {G__24003__a[G__24003__i] = arguments[G__24003__i + 0]; ++G__24003__i;}
  args = new cljs.core.IndexedSeq(G__24003__a,0,null);
} 
return G__24002__delegate.call(this,args);};
G__24002.cljs$lang$maxFixedArity = 0;
G__24002.cljs$lang$applyTo = (function (arglist__24004){
var args = cljs.core.seq(arglist__24004);
return G__24002__delegate(args);
});
G__24002.cljs$core$IFn$_invoke$arity$variadic = G__24002__delegate;
return G__24002;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__24005__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__24005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24006__i = 0, G__24006__a = new Array(arguments.length -  0);
while (G__24006__i < G__24006__a.length) {G__24006__a[G__24006__i] = arguments[G__24006__i + 0]; ++G__24006__i;}
  args = new cljs.core.IndexedSeq(G__24006__a,0,null);
} 
return G__24005__delegate.call(this,args);};
G__24005.cljs$lang$maxFixedArity = 0;
G__24005.cljs$lang$applyTo = (function (arglist__24007){
var args = cljs.core.seq(arglist__24007);
return G__24005__delegate(args);
});
G__24005.cljs$core$IFn$_invoke$arity$variadic = G__24005__delegate;
return G__24005;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3922__auto__ = (function (){var and__3911__auto__ = typeof window !== 'undefined';
if(and__3911__auto__){
var or__3922__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((function (or__3922__auto__){
return (function (p1__24008_SHARP_){
return setTimeout(p1__24008_SHARP_,(16));
});
;})(or__3922__auto__))
}
})();
rum.core.batch = (function (){var or__3922__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return ((function (or__3922__auto____$1,or__3922__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3922__auto____$1,or__3922__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__24009 = cljs.core.seq.call(null,queue);
var chunk__24011 = null;
var count__24012 = (0);
var i__24013 = (0);
while(true){
if((i__24013 < count__24012)){
var comp = cljs.core._nth.call(null,chunk__24011,i__24013);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__24015 = seq__24009;
var G__24016 = chunk__24011;
var G__24017 = count__24012;
var G__24018 = (i__24013 + (1));
seq__24009 = G__24015;
chunk__24011 = G__24016;
count__24012 = G__24017;
i__24013 = G__24018;
continue;
} else {
var G__24019 = seq__24009;
var G__24020 = chunk__24011;
var G__24021 = count__24012;
var G__24022 = (i__24013 + (1));
seq__24009 = G__24019;
chunk__24011 = G__24020;
count__24012 = G__24021;
i__24013 = G__24022;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24009);
if(temp__5457__auto__){
var seq__24009__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24009__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24009__$1);
var G__24023 = cljs.core.chunk_rest.call(null,seq__24009__$1);
var G__24024 = c__4319__auto__;
var G__24025 = cljs.core.count.call(null,c__4319__auto__);
var G__24026 = (0);
seq__24009 = G__24023;
chunk__24011 = G__24024;
count__24012 = G__24025;
i__24013 = G__24026;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24009__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();


var G__24027 = cljs.core.next.call(null,seq__24009__$1);
var G__24028 = null;
var G__24029 = (0);
var G__24030 = (0);
seq__24009 = G__24027;
chunk__24011 = G__24028;
count__24012 = G__24029;
i__24013 = G__24030;
continue;
} else {
var G__24031 = cljs.core.next.call(null,seq__24009__$1);
var G__24032 = null;
var G__24033 = (0);
var G__24034 = (0);
seq__24009 = G__24031;
chunk__24011 = G__24032;
count__24012 = G__24033;
i__24013 = G__24034;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__24036 = arguments.length;
switch (G__24036) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24038 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24039 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24039,(0),null);
var next_state = cljs.core.nth.call(null,vec__24039,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24042_24054 = cljs.core.seq.call(null,old_reactions);
var chunk__24043_24055 = null;
var count__24044_24056 = (0);
var i__24045_24057 = (0);
while(true){
if((i__24045_24057 < count__24044_24056)){
var ref_24058 = cljs.core._nth.call(null,chunk__24043_24055,i__24045_24057);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24058)){
} else {
cljs.core.remove_watch.call(null,ref_24058,key);
}


var G__24059 = seq__24042_24054;
var G__24060 = chunk__24043_24055;
var G__24061 = count__24044_24056;
var G__24062 = (i__24045_24057 + (1));
seq__24042_24054 = G__24059;
chunk__24043_24055 = G__24060;
count__24044_24056 = G__24061;
i__24045_24057 = G__24062;
continue;
} else {
var temp__5457__auto___24063 = cljs.core.seq.call(null,seq__24042_24054);
if(temp__5457__auto___24063){
var seq__24042_24064__$1 = temp__5457__auto___24063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24042_24064__$1)){
var c__4319__auto___24065 = cljs.core.chunk_first.call(null,seq__24042_24064__$1);
var G__24066 = cljs.core.chunk_rest.call(null,seq__24042_24064__$1);
var G__24067 = c__4319__auto___24065;
var G__24068 = cljs.core.count.call(null,c__4319__auto___24065);
var G__24069 = (0);
seq__24042_24054 = G__24066;
chunk__24043_24055 = G__24067;
count__24044_24056 = G__24068;
i__24045_24057 = G__24069;
continue;
} else {
var ref_24070 = cljs.core.first.call(null,seq__24042_24064__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24070)){
} else {
cljs.core.remove_watch.call(null,ref_24070,key);
}


var G__24071 = cljs.core.next.call(null,seq__24042_24064__$1);
var G__24072 = null;
var G__24073 = (0);
var G__24074 = (0);
seq__24042_24054 = G__24071;
chunk__24043_24055 = G__24072;
count__24044_24056 = G__24073;
i__24045_24057 = G__24074;
continue;
}
} else {
}
}
break;
}

var seq__24046_24075 = cljs.core.seq.call(null,new_reactions);
var chunk__24047_24076 = null;
var count__24048_24077 = (0);
var i__24049_24078 = (0);
while(true){
if((i__24049_24078 < count__24048_24077)){
var ref_24079 = cljs.core._nth.call(null,chunk__24047_24076,i__24049_24078);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24079)){
} else {
cljs.core.add_watch.call(null,ref_24079,key,((function (seq__24046_24075,chunk__24047_24076,count__24048_24077,i__24049_24078,ref_24079,comp,old_reactions,vec__24039,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24038){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24046_24075,chunk__24047_24076,count__24048_24077,i__24049_24078,ref_24079,comp,old_reactions,vec__24039,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24038))
);
}


var G__24080 = seq__24046_24075;
var G__24081 = chunk__24047_24076;
var G__24082 = count__24048_24077;
var G__24083 = (i__24049_24078 + (1));
seq__24046_24075 = G__24080;
chunk__24047_24076 = G__24081;
count__24048_24077 = G__24082;
i__24049_24078 = G__24083;
continue;
} else {
var temp__5457__auto___24084 = cljs.core.seq.call(null,seq__24046_24075);
if(temp__5457__auto___24084){
var seq__24046_24085__$1 = temp__5457__auto___24084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24046_24085__$1)){
var c__4319__auto___24086 = cljs.core.chunk_first.call(null,seq__24046_24085__$1);
var G__24087 = cljs.core.chunk_rest.call(null,seq__24046_24085__$1);
var G__24088 = c__4319__auto___24086;
var G__24089 = cljs.core.count.call(null,c__4319__auto___24086);
var G__24090 = (0);
seq__24046_24075 = G__24087;
chunk__24047_24076 = G__24088;
count__24048_24077 = G__24089;
i__24049_24078 = G__24090;
continue;
} else {
var ref_24091 = cljs.core.first.call(null,seq__24046_24085__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24091)){
} else {
cljs.core.add_watch.call(null,ref_24091,key,((function (seq__24046_24075,chunk__24047_24076,count__24048_24077,i__24049_24078,ref_24091,seq__24046_24085__$1,temp__5457__auto___24084,comp,old_reactions,vec__24039,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24038){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24046_24075,chunk__24047_24076,count__24048_24077,i__24049_24078,ref_24091,seq__24046_24085__$1,temp__5457__auto___24084,comp,old_reactions,vec__24039,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24038))
);
}


var G__24092 = cljs.core.next.call(null,seq__24046_24085__$1);
var G__24093 = null;
var G__24094 = (0);
var G__24095 = (0);
seq__24046_24075 = G__24092;
chunk__24047_24076 = G__24093;
count__24048_24077 = G__24094;
i__24049_24078 = G__24095;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_24038;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24096 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24050_24097 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24051_24098 = null;
var count__24052_24099 = (0);
var i__24053_24100 = (0);
while(true){
if((i__24053_24100 < count__24052_24099)){
var ref_24101 = cljs.core._nth.call(null,chunk__24051_24098,i__24053_24100);
cljs.core.remove_watch.call(null,ref_24101,key_24096);


var G__24102 = seq__24050_24097;
var G__24103 = chunk__24051_24098;
var G__24104 = count__24052_24099;
var G__24105 = (i__24053_24100 + (1));
seq__24050_24097 = G__24102;
chunk__24051_24098 = G__24103;
count__24052_24099 = G__24104;
i__24053_24100 = G__24105;
continue;
} else {
var temp__5457__auto___24106 = cljs.core.seq.call(null,seq__24050_24097);
if(temp__5457__auto___24106){
var seq__24050_24107__$1 = temp__5457__auto___24106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24050_24107__$1)){
var c__4319__auto___24108 = cljs.core.chunk_first.call(null,seq__24050_24107__$1);
var G__24109 = cljs.core.chunk_rest.call(null,seq__24050_24107__$1);
var G__24110 = c__4319__auto___24108;
var G__24111 = cljs.core.count.call(null,c__4319__auto___24108);
var G__24112 = (0);
seq__24050_24097 = G__24109;
chunk__24051_24098 = G__24110;
count__24052_24099 = G__24111;
i__24053_24100 = G__24112;
continue;
} else {
var ref_24113 = cljs.core.first.call(null,seq__24050_24107__$1);
cljs.core.remove_watch.call(null,ref_24113,key_24096);


var G__24114 = cljs.core.next.call(null,seq__24050_24107__$1);
var G__24115 = null;
var G__24116 = (0);
var G__24117 = (0);
seq__24050_24097 = G__24114;
chunk__24051_24098 = G__24115;
count__24052_24099 = G__24116;
i__24053_24100 = G__24117;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24124 = arguments.length;
var i__4500__auto___24125 = (0);
while(true){
if((i__4500__auto___24125 < len__4499__auto___24124)){
args__4502__auto__.push((arguments[i__4500__auto___24125]));

var G__24126 = (i__4500__auto___24125 + (1));
i__4500__auto___24125 = G__24126;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__24121){
var map__24122 = p__24121;
var map__24122__$1 = ((((!((map__24122 == null)))?(((((map__24122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24122):map__24122);
var options = map__24122__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq24118){
var G__24119 = cljs.core.first.call(null,seq24118);
var seq24118__$1 = cljs.core.next.call(null,seq24118);
var G__24120 = cljs.core.first.call(null,seq24118__$1);
var seq24118__$2 = cljs.core.next.call(null,seq24118__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24119,G__24120,seq24118__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24130 = arguments.length;
var i__4500__auto___24131 = (0);
while(true){
if((i__4500__auto___24131 < len__4499__auto___24130)){
args__4502__auto__.push((arguments[i__4500__auto___24131]));

var G__24132 = (i__4500__auto___24131 + (1));
i__4500__auto___24131 = G__24132;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq24127){
var G__24128 = cljs.core.first.call(null,seq24127);
var seq24127__$1 = cljs.core.next.call(null,seq24127);
var G__24129 = cljs.core.first.call(null,seq24127__$1);
var seq24127__$2 = cljs.core.next.call(null,seq24127__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24128,G__24129,seq24127__$2);
});


//# sourceMappingURL=core.js.map?rel=1522772865482
