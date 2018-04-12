// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e29575){if((e29575 instanceof Error)){
var e = e29575;
return "Error: Unable to stringify";
} else {
throw e29575;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29578 = arguments.length;
switch (G__29578) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29576_SHARP_){
if(typeof p1__29576_SHARP_ === 'string'){
return p1__29576_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29576_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29581 = arguments.length;
var i__4500__auto___29582 = (0);
while(true){
if((i__4500__auto___29582 < len__4499__auto___29581)){
args__4502__auto__.push((arguments[i__4500__auto___29582]));

var G__29583 = (i__4500__auto___29582 + (1));
i__4500__auto___29582 = G__29583;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29580){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29580));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29585 = arguments.length;
var i__4500__auto___29586 = (0);
while(true){
if((i__4500__auto___29586 < len__4499__auto___29585)){
args__4502__auto__.push((arguments[i__4500__auto___29586]));

var G__29587 = (i__4500__auto___29586 + (1));
i__4500__auto___29586 = G__29587;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29584){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29584));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29588){
var map__29589 = p__29588;
var map__29589__$1 = ((((!((map__29589 == null)))?(((((map__29589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29589):map__29589);
var message = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24615__auto___29668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto___29668,ch){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto___29668,ch){
return (function (state_29640){
var state_val_29641 = (state_29640[(1)]);
if((state_val_29641 === (7))){
var inst_29636 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29642_29669 = state_29640__$1;
(statearr_29642_29669[(2)] = inst_29636);

(statearr_29642_29669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (1))){
var state_29640__$1 = state_29640;
var statearr_29643_29670 = state_29640__$1;
(statearr_29643_29670[(2)] = null);

(statearr_29643_29670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (4))){
var inst_29593 = (state_29640[(7)]);
var inst_29593__$1 = (state_29640[(2)]);
var state_29640__$1 = (function (){var statearr_29644 = state_29640;
(statearr_29644[(7)] = inst_29593__$1);

return statearr_29644;
})();
if(cljs.core.truth_(inst_29593__$1)){
var statearr_29645_29671 = state_29640__$1;
(statearr_29645_29671[(1)] = (5));

} else {
var statearr_29646_29672 = state_29640__$1;
(statearr_29646_29672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (15))){
var inst_29600 = (state_29640[(8)]);
var inst_29615 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29600);
var inst_29616 = cljs.core.first.call(null,inst_29615);
var inst_29617 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29616);
var inst_29618 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29617)].join('');
var inst_29619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29618);
var state_29640__$1 = state_29640;
var statearr_29647_29673 = state_29640__$1;
(statearr_29647_29673[(2)] = inst_29619);

(statearr_29647_29673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (13))){
var inst_29624 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29648_29674 = state_29640__$1;
(statearr_29648_29674[(2)] = inst_29624);

(statearr_29648_29674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (6))){
var state_29640__$1 = state_29640;
var statearr_29649_29675 = state_29640__$1;
(statearr_29649_29675[(2)] = null);

(statearr_29649_29675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (17))){
var inst_29622 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29650_29676 = state_29640__$1;
(statearr_29650_29676[(2)] = inst_29622);

(statearr_29650_29676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (3))){
var inst_29638 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29640__$1,inst_29638);
} else {
if((state_val_29641 === (12))){
var inst_29599 = (state_29640[(9)]);
var inst_29613 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29599,opts);
var state_29640__$1 = state_29640;
if(cljs.core.truth_(inst_29613)){
var statearr_29651_29677 = state_29640__$1;
(statearr_29651_29677[(1)] = (15));

} else {
var statearr_29652_29678 = state_29640__$1;
(statearr_29652_29678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (2))){
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29640__$1,(4),ch);
} else {
if((state_val_29641 === (11))){
var inst_29600 = (state_29640[(8)]);
var inst_29605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29606 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29600);
var inst_29607 = cljs.core.async.timeout.call(null,(1000));
var inst_29608 = [inst_29606,inst_29607];
var inst_29609 = (new cljs.core.PersistentVector(null,2,(5),inst_29605,inst_29608,null));
var state_29640__$1 = state_29640;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29640__$1,(14),inst_29609);
} else {
if((state_val_29641 === (9))){
var inst_29600 = (state_29640[(8)]);
var inst_29626 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29627 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29600);
var inst_29628 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29627);
var inst_29629 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29628)].join('');
var inst_29630 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29629);
var state_29640__$1 = (function (){var statearr_29653 = state_29640;
(statearr_29653[(10)] = inst_29626);

return statearr_29653;
})();
var statearr_29654_29679 = state_29640__$1;
(statearr_29654_29679[(2)] = inst_29630);

(statearr_29654_29679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (5))){
var inst_29593 = (state_29640[(7)]);
var inst_29595 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29596 = (new cljs.core.PersistentArrayMap(null,2,inst_29595,null));
var inst_29597 = (new cljs.core.PersistentHashSet(null,inst_29596,null));
var inst_29598 = figwheel.client.focus_msgs.call(null,inst_29597,inst_29593);
var inst_29599 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29598);
var inst_29600 = cljs.core.first.call(null,inst_29598);
var inst_29601 = figwheel.client.autoload_QMARK_.call(null);
var state_29640__$1 = (function (){var statearr_29655 = state_29640;
(statearr_29655[(9)] = inst_29599);

(statearr_29655[(8)] = inst_29600);

return statearr_29655;
})();
if(cljs.core.truth_(inst_29601)){
var statearr_29656_29680 = state_29640__$1;
(statearr_29656_29680[(1)] = (8));

} else {
var statearr_29657_29681 = state_29640__$1;
(statearr_29657_29681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (14))){
var inst_29611 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29658_29682 = state_29640__$1;
(statearr_29658_29682[(2)] = inst_29611);

(statearr_29658_29682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (16))){
var state_29640__$1 = state_29640;
var statearr_29659_29683 = state_29640__$1;
(statearr_29659_29683[(2)] = null);

(statearr_29659_29683[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (10))){
var inst_29632 = (state_29640[(2)]);
var state_29640__$1 = (function (){var statearr_29660 = state_29640;
(statearr_29660[(11)] = inst_29632);

return statearr_29660;
})();
var statearr_29661_29684 = state_29640__$1;
(statearr_29661_29684[(2)] = null);

(statearr_29661_29684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (8))){
var inst_29599 = (state_29640[(9)]);
var inst_29603 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29599,opts);
var state_29640__$1 = state_29640;
if(cljs.core.truth_(inst_29603)){
var statearr_29662_29685 = state_29640__$1;
(statearr_29662_29685[(1)] = (11));

} else {
var statearr_29663_29686 = state_29640__$1;
(statearr_29663_29686[(1)] = (12));

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
});})(c__24615__auto___29668,ch))
;
return ((function (switch__24525__auto__,c__24615__auto___29668,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24526__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24526__auto____0 = (function (){
var statearr_29664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29664[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24526__auto__);

(statearr_29664[(1)] = (1));

return statearr_29664;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24526__auto____1 = (function (state_29640){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_29640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e29665){if((e29665 instanceof Object)){
var ex__24529__auto__ = e29665;
var statearr_29666_29687 = state_29640;
(statearr_29666_29687[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29688 = state_29640;
state_29640 = G__29688;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24526__auto__ = function(state_29640){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24526__auto____1.call(this,state_29640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24526__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24526__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto___29668,ch))
})();
var state__24617__auto__ = (function (){var statearr_29667 = f__24616__auto__.call(null);
(statearr_29667[(6)] = c__24615__auto___29668);

return statearr_29667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto___29668,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29689_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29689_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29693 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29693){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29691 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29692 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29691,_STAR_print_fn_STAR_29692,sb,base_path_29693){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29691,_STAR_print_fn_STAR_29692,sb,base_path_29693))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29692;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29691;
}}catch (e29690){if((e29690 instanceof Error)){
var e = e29690;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29693], null));
} else {
var e = e29690;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29693))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29694){
var map__29695 = p__29694;
var map__29695__$1 = ((((!((map__29695 == null)))?(((((map__29695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695):map__29695);
var opts = map__29695__$1;
var build_id = cljs.core.get.call(null,map__29695__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29695,map__29695__$1,opts,build_id){
return (function (p__29697){
var vec__29698 = p__29697;
var seq__29699 = cljs.core.seq.call(null,vec__29698);
var first__29700 = cljs.core.first.call(null,seq__29699);
var seq__29699__$1 = cljs.core.next.call(null,seq__29699);
var map__29701 = first__29700;
var map__29701__$1 = ((((!((map__29701 == null)))?(((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var msg = map__29701__$1;
var msg_name = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29699__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29698,seq__29699,first__29700,seq__29699__$1,map__29701,map__29701__$1,msg,msg_name,_,map__29695,map__29695__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29698,seq__29699,first__29700,seq__29699__$1,map__29701,map__29701__$1,msg,msg_name,_,map__29695,map__29695__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29695,map__29695__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29703){
var vec__29704 = p__29703;
var seq__29705 = cljs.core.seq.call(null,vec__29704);
var first__29706 = cljs.core.first.call(null,seq__29705);
var seq__29705__$1 = cljs.core.next.call(null,seq__29705);
var map__29707 = first__29706;
var map__29707__$1 = ((((!((map__29707 == null)))?(((((map__29707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29707):map__29707);
var msg = map__29707__$1;
var msg_name = cljs.core.get.call(null,map__29707__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29705__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29709){
var map__29710 = p__29709;
var map__29710__$1 = ((((!((map__29710 == null)))?(((((map__29710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29710):map__29710);
var on_compile_warning = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29710,map__29710__$1,on_compile_warning,on_compile_fail){
return (function (p__29712){
var vec__29713 = p__29712;
var seq__29714 = cljs.core.seq.call(null,vec__29713);
var first__29715 = cljs.core.first.call(null,seq__29714);
var seq__29714__$1 = cljs.core.next.call(null,seq__29714);
var map__29716 = first__29715;
var map__29716__$1 = ((((!((map__29716 == null)))?(((((map__29716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29716):map__29716);
var msg = map__29716__$1;
var msg_name = cljs.core.get.call(null,map__29716__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29714__$1;
var pred__29718 = cljs.core._EQ_;
var expr__29719 = msg_name;
if(cljs.core.truth_(pred__29718.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29719))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29718.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29719))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29710,map__29710__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24615__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto__,msg_hist,msg_names,msg){
return (function (state_29808){
var state_val_29809 = (state_29808[(1)]);
if((state_val_29809 === (7))){
var inst_29728 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29728)){
var statearr_29810_29857 = state_29808__$1;
(statearr_29810_29857[(1)] = (8));

} else {
var statearr_29811_29858 = state_29808__$1;
(statearr_29811_29858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (20))){
var inst_29802 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29812_29859 = state_29808__$1;
(statearr_29812_29859[(2)] = inst_29802);

(statearr_29812_29859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (27))){
var inst_29798 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29813_29860 = state_29808__$1;
(statearr_29813_29860[(2)] = inst_29798);

(statearr_29813_29860[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (1))){
var inst_29721 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29721)){
var statearr_29814_29861 = state_29808__$1;
(statearr_29814_29861[(1)] = (2));

} else {
var statearr_29815_29862 = state_29808__$1;
(statearr_29815_29862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (24))){
var inst_29800 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29816_29863 = state_29808__$1;
(statearr_29816_29863[(2)] = inst_29800);

(statearr_29816_29863[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (4))){
var inst_29806 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29808__$1,inst_29806);
} else {
if((state_val_29809 === (15))){
var inst_29804 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29817_29864 = state_29808__$1;
(statearr_29817_29864[(2)] = inst_29804);

(statearr_29817_29864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (21))){
var inst_29757 = (state_29808[(2)]);
var inst_29758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29759 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29758);
var state_29808__$1 = (function (){var statearr_29818 = state_29808;
(statearr_29818[(7)] = inst_29757);

return statearr_29818;
})();
var statearr_29819_29865 = state_29808__$1;
(statearr_29819_29865[(2)] = inst_29759);

(statearr_29819_29865[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (31))){
var inst_29787 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29787)){
var statearr_29820_29866 = state_29808__$1;
(statearr_29820_29866[(1)] = (34));

} else {
var statearr_29821_29867 = state_29808__$1;
(statearr_29821_29867[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (32))){
var inst_29796 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29822_29868 = state_29808__$1;
(statearr_29822_29868[(2)] = inst_29796);

(statearr_29822_29868[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (33))){
var inst_29783 = (state_29808[(2)]);
var inst_29784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29785 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29784);
var state_29808__$1 = (function (){var statearr_29823 = state_29808;
(statearr_29823[(8)] = inst_29783);

return statearr_29823;
})();
var statearr_29824_29869 = state_29808__$1;
(statearr_29824_29869[(2)] = inst_29785);

(statearr_29824_29869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (13))){
var inst_29742 = figwheel.client.heads_up.clear.call(null);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(16),inst_29742);
} else {
if((state_val_29809 === (22))){
var inst_29763 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29764 = figwheel.client.heads_up.append_warning_message.call(null,inst_29763);
var state_29808__$1 = state_29808;
var statearr_29825_29870 = state_29808__$1;
(statearr_29825_29870[(2)] = inst_29764);

(statearr_29825_29870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (36))){
var inst_29794 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29826_29871 = state_29808__$1;
(statearr_29826_29871[(2)] = inst_29794);

(statearr_29826_29871[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (29))){
var inst_29774 = (state_29808[(2)]);
var inst_29775 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29776 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29775);
var state_29808__$1 = (function (){var statearr_29827 = state_29808;
(statearr_29827[(9)] = inst_29774);

return statearr_29827;
})();
var statearr_29828_29872 = state_29808__$1;
(statearr_29828_29872[(2)] = inst_29776);

(statearr_29828_29872[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (6))){
var inst_29723 = (state_29808[(10)]);
var state_29808__$1 = state_29808;
var statearr_29829_29873 = state_29808__$1;
(statearr_29829_29873[(2)] = inst_29723);

(statearr_29829_29873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (28))){
var inst_29770 = (state_29808[(2)]);
var inst_29771 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29772 = figwheel.client.heads_up.display_warning.call(null,inst_29771);
var state_29808__$1 = (function (){var statearr_29830 = state_29808;
(statearr_29830[(11)] = inst_29770);

return statearr_29830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(29),inst_29772);
} else {
if((state_val_29809 === (25))){
var inst_29768 = figwheel.client.heads_up.clear.call(null);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(28),inst_29768);
} else {
if((state_val_29809 === (34))){
var inst_29789 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(37),inst_29789);
} else {
if((state_val_29809 === (17))){
var inst_29748 = (state_29808[(2)]);
var inst_29749 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29750 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29749);
var state_29808__$1 = (function (){var statearr_29831 = state_29808;
(statearr_29831[(12)] = inst_29748);

return statearr_29831;
})();
var statearr_29832_29874 = state_29808__$1;
(statearr_29832_29874[(2)] = inst_29750);

(statearr_29832_29874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (3))){
var inst_29740 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29740)){
var statearr_29833_29875 = state_29808__$1;
(statearr_29833_29875[(1)] = (13));

} else {
var statearr_29834_29876 = state_29808__$1;
(statearr_29834_29876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (12))){
var inst_29736 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29835_29877 = state_29808__$1;
(statearr_29835_29877[(2)] = inst_29736);

(statearr_29835_29877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (2))){
var inst_29723 = (state_29808[(10)]);
var inst_29723__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29808__$1 = (function (){var statearr_29836 = state_29808;
(statearr_29836[(10)] = inst_29723__$1);

return statearr_29836;
})();
if(cljs.core.truth_(inst_29723__$1)){
var statearr_29837_29878 = state_29808__$1;
(statearr_29837_29878[(1)] = (5));

} else {
var statearr_29838_29879 = state_29808__$1;
(statearr_29838_29879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (23))){
var inst_29766 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29766)){
var statearr_29839_29880 = state_29808__$1;
(statearr_29839_29880[(1)] = (25));

} else {
var statearr_29840_29881 = state_29808__$1;
(statearr_29840_29881[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (35))){
var state_29808__$1 = state_29808;
var statearr_29841_29882 = state_29808__$1;
(statearr_29841_29882[(2)] = null);

(statearr_29841_29882[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (19))){
var inst_29761 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29761)){
var statearr_29842_29883 = state_29808__$1;
(statearr_29842_29883[(1)] = (22));

} else {
var statearr_29843_29884 = state_29808__$1;
(statearr_29843_29884[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (11))){
var inst_29732 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29844_29885 = state_29808__$1;
(statearr_29844_29885[(2)] = inst_29732);

(statearr_29844_29885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (9))){
var inst_29734 = figwheel.client.heads_up.clear.call(null);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(12),inst_29734);
} else {
if((state_val_29809 === (5))){
var inst_29725 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29808__$1 = state_29808;
var statearr_29845_29886 = state_29808__$1;
(statearr_29845_29886[(2)] = inst_29725);

(statearr_29845_29886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (14))){
var inst_29752 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29752)){
var statearr_29846_29887 = state_29808__$1;
(statearr_29846_29887[(1)] = (18));

} else {
var statearr_29847_29888 = state_29808__$1;
(statearr_29847_29888[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (26))){
var inst_29778 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29778)){
var statearr_29848_29889 = state_29808__$1;
(statearr_29848_29889[(1)] = (30));

} else {
var statearr_29849_29890 = state_29808__$1;
(statearr_29849_29890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (16))){
var inst_29744 = (state_29808[(2)]);
var inst_29745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29746 = figwheel.client.heads_up.display_exception.call(null,inst_29745);
var state_29808__$1 = (function (){var statearr_29850 = state_29808;
(statearr_29850[(13)] = inst_29744);

return statearr_29850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(17),inst_29746);
} else {
if((state_val_29809 === (30))){
var inst_29780 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29781 = figwheel.client.heads_up.display_warning.call(null,inst_29780);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(33),inst_29781);
} else {
if((state_val_29809 === (10))){
var inst_29738 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29851_29891 = state_29808__$1;
(statearr_29851_29891[(2)] = inst_29738);

(statearr_29851_29891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (18))){
var inst_29754 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29755 = figwheel.client.heads_up.display_exception.call(null,inst_29754);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(21),inst_29755);
} else {
if((state_val_29809 === (37))){
var inst_29791 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29852_29892 = state_29808__$1;
(statearr_29852_29892[(2)] = inst_29791);

(statearr_29852_29892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (8))){
var inst_29730 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(11),inst_29730);
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
});})(c__24615__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24525__auto__,c__24615__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto____0 = (function (){
var statearr_29853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29853[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto__);

(statearr_29853[(1)] = (1));

return statearr_29853;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto____1 = (function (state_29808){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_29808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e29854){if((e29854 instanceof Object)){
var ex__24529__auto__ = e29854;
var statearr_29855_29893 = state_29808;
(statearr_29855_29893[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29894 = state_29808;
state_29808 = G__29894;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto__ = function(state_29808){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto____1.call(this,state_29808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto__,msg_hist,msg_names,msg))
})();
var state__24617__auto__ = (function (){var statearr_29856 = f__24616__auto__.call(null);
(statearr_29856[(6)] = c__24615__auto__);

return statearr_29856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto__,msg_hist,msg_names,msg))
);

return c__24615__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24615__auto___29923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto___29923,ch){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto___29923,ch){
return (function (state_29909){
var state_val_29910 = (state_29909[(1)]);
if((state_val_29910 === (1))){
var state_29909__$1 = state_29909;
var statearr_29911_29924 = state_29909__$1;
(statearr_29911_29924[(2)] = null);

(statearr_29911_29924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (2))){
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29909__$1,(4),ch);
} else {
if((state_val_29910 === (3))){
var inst_29907 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29909__$1,inst_29907);
} else {
if((state_val_29910 === (4))){
var inst_29897 = (state_29909[(7)]);
var inst_29897__$1 = (state_29909[(2)]);
var state_29909__$1 = (function (){var statearr_29912 = state_29909;
(statearr_29912[(7)] = inst_29897__$1);

return statearr_29912;
})();
if(cljs.core.truth_(inst_29897__$1)){
var statearr_29913_29925 = state_29909__$1;
(statearr_29913_29925[(1)] = (5));

} else {
var statearr_29914_29926 = state_29909__$1;
(statearr_29914_29926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (5))){
var inst_29897 = (state_29909[(7)]);
var inst_29899 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29897);
var state_29909__$1 = state_29909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29909__$1,(8),inst_29899);
} else {
if((state_val_29910 === (6))){
var state_29909__$1 = state_29909;
var statearr_29915_29927 = state_29909__$1;
(statearr_29915_29927[(2)] = null);

(statearr_29915_29927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (7))){
var inst_29905 = (state_29909[(2)]);
var state_29909__$1 = state_29909;
var statearr_29916_29928 = state_29909__$1;
(statearr_29916_29928[(2)] = inst_29905);

(statearr_29916_29928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29910 === (8))){
var inst_29901 = (state_29909[(2)]);
var state_29909__$1 = (function (){var statearr_29917 = state_29909;
(statearr_29917[(8)] = inst_29901);

return statearr_29917;
})();
var statearr_29918_29929 = state_29909__$1;
(statearr_29918_29929[(2)] = null);

(statearr_29918_29929[(1)] = (2));


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
});})(c__24615__auto___29923,ch))
;
return ((function (switch__24525__auto__,c__24615__auto___29923,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24526__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24526__auto____0 = (function (){
var statearr_29919 = [null,null,null,null,null,null,null,null,null];
(statearr_29919[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24526__auto__);

(statearr_29919[(1)] = (1));

return statearr_29919;
});
var figwheel$client$heads_up_plugin_$_state_machine__24526__auto____1 = (function (state_29909){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_29909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e29920){if((e29920 instanceof Object)){
var ex__24529__auto__ = e29920;
var statearr_29921_29930 = state_29909;
(statearr_29921_29930[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29931 = state_29909;
state_29909 = G__29931;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24526__auto__ = function(state_29909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24526__auto____1.call(this,state_29909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24526__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24526__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto___29923,ch))
})();
var state__24617__auto__ = (function (){var statearr_29922 = f__24616__auto__.call(null);
(statearr_29922[(6)] = c__24615__auto___29923);

return statearr_29922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto___29923,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24615__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto__){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto__){
return (function (state_29937){
var state_val_29938 = (state_29937[(1)]);
if((state_val_29938 === (1))){
var inst_29932 = cljs.core.async.timeout.call(null,(3000));
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29937__$1,(2),inst_29932);
} else {
if((state_val_29938 === (2))){
var inst_29934 = (state_29937[(2)]);
var inst_29935 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29937__$1 = (function (){var statearr_29939 = state_29937;
(statearr_29939[(7)] = inst_29934);

return statearr_29939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29937__$1,inst_29935);
} else {
return null;
}
}
});})(c__24615__auto__))
;
return ((function (switch__24525__auto__,c__24615__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24526__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24526__auto____0 = (function (){
var statearr_29940 = [null,null,null,null,null,null,null,null];
(statearr_29940[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24526__auto__);

(statearr_29940[(1)] = (1));

return statearr_29940;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24526__auto____1 = (function (state_29937){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_29937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e29941){if((e29941 instanceof Object)){
var ex__24529__auto__ = e29941;
var statearr_29942_29944 = state_29937;
(statearr_29942_29944[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29945 = state_29937;
state_29937 = G__29945;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24526__auto__ = function(state_29937){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24526__auto____1.call(this,state_29937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24526__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24526__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto__))
})();
var state__24617__auto__ = (function (){var statearr_29943 = f__24616__auto__.call(null);
(statearr_29943[(6)] = c__24615__auto__);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto__))
);

return c__24615__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24615__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24615__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__24616__auto__ = (function (){var switch__24525__auto__ = ((function (c__24615__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29952){
var state_val_29953 = (state_29952[(1)]);
if((state_val_29953 === (1))){
var inst_29946 = cljs.core.async.timeout.call(null,(2000));
var state_29952__$1 = state_29952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29952__$1,(2),inst_29946);
} else {
if((state_val_29953 === (2))){
var inst_29948 = (state_29952[(2)]);
var inst_29949 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29950 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29949);
var state_29952__$1 = (function (){var statearr_29954 = state_29952;
(statearr_29954[(7)] = inst_29948);

return statearr_29954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29952__$1,inst_29950);
} else {
return null;
}
}
});})(c__24615__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24525__auto__,c__24615__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto____0 = (function (){
var statearr_29955 = [null,null,null,null,null,null,null,null];
(statearr_29955[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto__);

(statearr_29955[(1)] = (1));

return statearr_29955;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto____1 = (function (state_29952){
while(true){
var ret_value__24527__auto__ = (function (){try{while(true){
var result__24528__auto__ = switch__24525__auto__.call(null,state_29952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24528__auto__;
}
break;
}
}catch (e29956){if((e29956 instanceof Object)){
var ex__24529__auto__ = e29956;
var statearr_29957_29959 = state_29952;
(statearr_29957_29959[(5)] = ex__24529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29960 = state_29952;
state_29952 = G__29960;
continue;
} else {
return ret_value__24527__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto__ = function(state_29952){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto____1.call(this,state_29952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24526__auto__;
})()
;})(switch__24525__auto__,c__24615__auto__,figwheel_version,temp__5457__auto__))
})();
var state__24617__auto__ = (function (){var statearr_29958 = f__24616__auto__.call(null);
(statearr_29958[(6)] = c__24615__auto__);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24617__auto__);
});})(c__24615__auto__,figwheel_version,temp__5457__auto__))
);

return c__24615__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29961){
var map__29962 = p__29961;
var map__29962__$1 = ((((!((map__29962 == null)))?(((((map__29962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29962):map__29962);
var file = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29964 = "";
var G__29964__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29964),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29964);
var G__29964__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29964__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29964__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29964__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29964__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29965){
var map__29966 = p__29965;
var map__29966__$1 = ((((!((map__29966 == null)))?(((((map__29966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29966):map__29966);
var ed = map__29966__$1;
var formatted_exception = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29968_29972 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29969_29973 = null;
var count__29970_29974 = (0);
var i__29971_29975 = (0);
while(true){
if((i__29971_29975 < count__29970_29974)){
var msg_29976 = cljs.core._nth.call(null,chunk__29969_29973,i__29971_29975);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29976);


var G__29977 = seq__29968_29972;
var G__29978 = chunk__29969_29973;
var G__29979 = count__29970_29974;
var G__29980 = (i__29971_29975 + (1));
seq__29968_29972 = G__29977;
chunk__29969_29973 = G__29978;
count__29970_29974 = G__29979;
i__29971_29975 = G__29980;
continue;
} else {
var temp__5457__auto___29981 = cljs.core.seq.call(null,seq__29968_29972);
if(temp__5457__auto___29981){
var seq__29968_29982__$1 = temp__5457__auto___29981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29968_29982__$1)){
var c__4319__auto___29983 = cljs.core.chunk_first.call(null,seq__29968_29982__$1);
var G__29984 = cljs.core.chunk_rest.call(null,seq__29968_29982__$1);
var G__29985 = c__4319__auto___29983;
var G__29986 = cljs.core.count.call(null,c__4319__auto___29983);
var G__29987 = (0);
seq__29968_29972 = G__29984;
chunk__29969_29973 = G__29985;
count__29970_29974 = G__29986;
i__29971_29975 = G__29987;
continue;
} else {
var msg_29988 = cljs.core.first.call(null,seq__29968_29982__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29988);


var G__29989 = cljs.core.next.call(null,seq__29968_29982__$1);
var G__29990 = null;
var G__29991 = (0);
var G__29992 = (0);
seq__29968_29972 = G__29989;
chunk__29969_29973 = G__29990;
count__29970_29974 = G__29991;
i__29971_29975 = G__29992;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29993){
var map__29994 = p__29993;
var map__29994__$1 = ((((!((map__29994 == null)))?(((((map__29994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29994):map__29994);
var w = map__29994__$1;
var message = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29996 = cljs.core.seq.call(null,plugins);
var chunk__29997 = null;
var count__29998 = (0);
var i__29999 = (0);
while(true){
if((i__29999 < count__29998)){
var vec__30000 = cljs.core._nth.call(null,chunk__29997,i__29999);
var k = cljs.core.nth.call(null,vec__30000,(0),null);
var plugin = cljs.core.nth.call(null,vec__30000,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30006 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29996,chunk__29997,count__29998,i__29999,pl_30006,vec__30000,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30006.call(null,msg_hist);
});})(seq__29996,chunk__29997,count__29998,i__29999,pl_30006,vec__30000,k,plugin))
);
} else {
}


var G__30007 = seq__29996;
var G__30008 = chunk__29997;
var G__30009 = count__29998;
var G__30010 = (i__29999 + (1));
seq__29996 = G__30007;
chunk__29997 = G__30008;
count__29998 = G__30009;
i__29999 = G__30010;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29996);
if(temp__5457__auto__){
var seq__29996__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29996__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29996__$1);
var G__30011 = cljs.core.chunk_rest.call(null,seq__29996__$1);
var G__30012 = c__4319__auto__;
var G__30013 = cljs.core.count.call(null,c__4319__auto__);
var G__30014 = (0);
seq__29996 = G__30011;
chunk__29997 = G__30012;
count__29998 = G__30013;
i__29999 = G__30014;
continue;
} else {
var vec__30003 = cljs.core.first.call(null,seq__29996__$1);
var k = cljs.core.nth.call(null,vec__30003,(0),null);
var plugin = cljs.core.nth.call(null,vec__30003,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30015 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29996,chunk__29997,count__29998,i__29999,pl_30015,vec__30003,k,plugin,seq__29996__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30015.call(null,msg_hist);
});})(seq__29996,chunk__29997,count__29998,i__29999,pl_30015,vec__30003,k,plugin,seq__29996__$1,temp__5457__auto__))
);
} else {
}


var G__30016 = cljs.core.next.call(null,seq__29996__$1);
var G__30017 = null;
var G__30018 = (0);
var G__30019 = (0);
seq__29996 = G__30016;
chunk__29997 = G__30017;
count__29998 = G__30018;
i__29999 = G__30019;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30021 = arguments.length;
switch (G__30021) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30022_30027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30023_30028 = null;
var count__30024_30029 = (0);
var i__30025_30030 = (0);
while(true){
if((i__30025_30030 < count__30024_30029)){
var msg_30031 = cljs.core._nth.call(null,chunk__30023_30028,i__30025_30030);
figwheel.client.socket.handle_incoming_message.call(null,msg_30031);


var G__30032 = seq__30022_30027;
var G__30033 = chunk__30023_30028;
var G__30034 = count__30024_30029;
var G__30035 = (i__30025_30030 + (1));
seq__30022_30027 = G__30032;
chunk__30023_30028 = G__30033;
count__30024_30029 = G__30034;
i__30025_30030 = G__30035;
continue;
} else {
var temp__5457__auto___30036 = cljs.core.seq.call(null,seq__30022_30027);
if(temp__5457__auto___30036){
var seq__30022_30037__$1 = temp__5457__auto___30036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30022_30037__$1)){
var c__4319__auto___30038 = cljs.core.chunk_first.call(null,seq__30022_30037__$1);
var G__30039 = cljs.core.chunk_rest.call(null,seq__30022_30037__$1);
var G__30040 = c__4319__auto___30038;
var G__30041 = cljs.core.count.call(null,c__4319__auto___30038);
var G__30042 = (0);
seq__30022_30027 = G__30039;
chunk__30023_30028 = G__30040;
count__30024_30029 = G__30041;
i__30025_30030 = G__30042;
continue;
} else {
var msg_30043 = cljs.core.first.call(null,seq__30022_30037__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30043);


var G__30044 = cljs.core.next.call(null,seq__30022_30037__$1);
var G__30045 = null;
var G__30046 = (0);
var G__30047 = (0);
seq__30022_30027 = G__30044;
chunk__30023_30028 = G__30045;
count__30024_30029 = G__30046;
i__30025_30030 = G__30047;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30052 = arguments.length;
var i__4500__auto___30053 = (0);
while(true){
if((i__4500__auto___30053 < len__4499__auto___30052)){
args__4502__auto__.push((arguments[i__4500__auto___30053]));

var G__30054 = (i__4500__auto___30053 + (1));
i__4500__auto___30053 = G__30054;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30049){
var map__30050 = p__30049;
var map__30050__$1 = ((((!((map__30050 == null)))?(((((map__30050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);
var opts = map__30050__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30048){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30048));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30055){if((e30055 instanceof Error)){
var e = e30055;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30055;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30056){
var map__30057 = p__30056;
var map__30057__$1 = ((((!((map__30057 == null)))?(((((map__30057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);
var msg_name = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1522769334685
