// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_101.hello');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
cljs_101.hello.right_triangle2_QMARK_ = (function cljs_101$hello$right_triangle2_QMARK_(p__26972){
var vec__26973 = p__26972;
var a = cljs.core.nth.call(null,vec__26973,(0),null);
var b = cljs.core.nth.call(null,vec__26973,(1),null);
var c = cljs.core.nth.call(null,vec__26973,(2),null);
var a_square = (a * a);
var b_square = (b * b);
var c_square = (c * c);
return cljs.core._EQ_.call(null,(a_square + b_square),c_square);
});
var c__23245__auto___26990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23245__auto___26990){
return (function (){
var f__23246__auto__ = (function (){var switch__23222__auto__ = ((function (c__23245__auto___26990){
return (function (state_26983){
var state_val_26984 = (state_26983[(1)]);
if((state_val_26984 === (1))){
var inst_26976 = cljs_http.client.get.call(null,"http://localhost:3000/cams");
var state_26983__$1 = state_26983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26983__$1,(2),inst_26976);
} else {
if((state_val_26984 === (2))){
var inst_26978 = (state_26983[(2)]);
var inst_26979 = cljs_101.hello.pepsi = inst_26978;
var inst_26980 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs_101.hello.pepsi);
var inst_26981 = cljs_101.hello.select = inst_26980;
var state_26983__$1 = (function (){var statearr_26985 = state_26983;
(statearr_26985[(7)] = inst_26979);

return statearr_26985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26983__$1,inst_26981);
} else {
return null;
}
}
});})(c__23245__auto___26990))
;
return ((function (switch__23222__auto__,c__23245__auto___26990){
return (function() {
var cljs_101$hello$state_machine__23223__auto__ = null;
var cljs_101$hello$state_machine__23223__auto____0 = (function (){
var statearr_26986 = [null,null,null,null,null,null,null,null];
(statearr_26986[(0)] = cljs_101$hello$state_machine__23223__auto__);

(statearr_26986[(1)] = (1));

return statearr_26986;
});
var cljs_101$hello$state_machine__23223__auto____1 = (function (state_26983){
while(true){
var ret_value__23224__auto__ = (function (){try{while(true){
var result__23225__auto__ = switch__23222__auto__.call(null,state_26983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23225__auto__;
}
break;
}
}catch (e26987){if((e26987 instanceof Object)){
var ex__23226__auto__ = e26987;
var statearr_26988_26991 = state_26983;
(statearr_26988_26991[(5)] = ex__23226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26992 = state_26983;
state_26983 = G__26992;
continue;
} else {
return ret_value__23224__auto__;
}
break;
}
});
cljs_101$hello$state_machine__23223__auto__ = function(state_26983){
switch(arguments.length){
case 0:
return cljs_101$hello$state_machine__23223__auto____0.call(this);
case 1:
return cljs_101$hello$state_machine__23223__auto____1.call(this,state_26983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_101$hello$state_machine__23223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_101$hello$state_machine__23223__auto____0;
cljs_101$hello$state_machine__23223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_101$hello$state_machine__23223__auto____1;
return cljs_101$hello$state_machine__23223__auto__;
})()
;})(switch__23222__auto__,c__23245__auto___26990))
})();
var state__23247__auto__ = (function (){var statearr_26989 = f__23246__auto__.call(null);
(statearr_26989[(6)] = c__23245__auto___26990);

return statearr_26989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23247__auto__);
});})(c__23245__auto___26990))
);

console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_101.hello.select)].join(''));
cljs_101.hello.choise_webcam = (function cljs_101$hello$choise_webcam(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-textfield.mdl-js-textfield.getmdl-select","div.mdl-textfield.mdl-js-textfield.getmdl-select",95083235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#sample1.mdl-textfield__input","input#sample1.mdl-textfield__input",-254253907)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"sample1",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"type","type",1174270348),"hidden"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mdl-textfield__label","label.mdl-textfield__label",-1621295497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"sample1"], null),"Choise webcam"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu","ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu",-1176294735),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"sample1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mdl-menu__item","li.mdl-menu__item",-598444289),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-val","data-val",-1410637751),"camara 1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (x){
return console.log(x.currentTarget.getAttribute("data-val"));
})], null),"Webcam1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mdl-menu__item","li.mdl-menu__item",-598444289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-val","data-val",-1410637751),"BLR"], null),"cam 2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mdl-menu__item","li.mdl-menu__item",-598444289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-val","data-val",-1410637751),"RUS"], null),"Webcam3"], null)], null)], null);
});
cljs_101.hello.text_field_demo_text = (function cljs_101$hello$text_field_demo_text(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.textfield,new cljs.core.Keyword(null,"floating-label?","floating-label?",-1615247461),true,new cljs.core.Keyword(null,"label","label",1718410804),"Ruta"], null);
});
/**
 * This is a raised button that is colored.
 */
cljs_101.hello.button_demo_colored_raised = (function cljs_101$hello$button_demo_colored_raised(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.button,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"raised?","raised?",145778912),true,new cljs.core.Keyword(null,"colored?","colored?",1847962275),true,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356),true,new cljs.core.Keyword(null,"child","child",623967545),"Capturar",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs_101.hello.fboton], null);
});
cljs_101.hello.fboton = (function cljs_101$hello$fboton(){
console.log("pulso boton");

return cljs_101.hello.redirect_BANG_.call(null,"http://localhost:3000/foto");
});
cljs_101.hello.fboton2 = (function cljs_101$hello$fboton2(){
console.log("pulso boton");

return cljs_101.hello.redirect_BANG_.call(null,"http://localhost:3000/foto2");
});
cljs_101.hello.redirect_BANG_ = (function cljs_101$hello$redirect_BANG_(loc){
return window.location = loc;
});
/**
 * This is a raised button that is colored.
 */
cljs_101.hello.button2 = (function cljs_101$hello$button2(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.button,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"raised?","raised?",145778912),true,new cljs.core.Keyword(null,"colored?","colored?",1847962275),true,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356),true,new cljs.core.Keyword(null,"child","child",623967545),"Capturar 2",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs_101.hello.fboton2], null);
});
cljs_101.hello.jumbo = (function cljs_101$hello$jumbo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron text-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Selfie WebCam"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hola bootstrap"], null)], null);
});
cljs_101.hello.footer_demo_mega = (function cljs_101$hello$footer_demo_mega(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.mega_footer,new cljs.core.Keyword(null,"logo","logo",1237980263),"Title",new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.mega_footer_dropdown,new cljs.core.Keyword(null,"heading","heading",-1312171873),"Features",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://www.google.com"], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Terms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Partners"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Updates"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.mega_footer_dropdown,new cljs.core.Keyword(null,"heading","heading",-1312171873),"Details",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Specs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Tools"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Resources"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.mega_footer_dropdown,new cljs.core.Keyword(null,"heading","heading",-1312171873),"Technology",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"How it works"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Patterns"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Usage"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Products"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Contracts"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.mega_footer_dropdown,new cljs.core.Keyword(null,"heading","heading",-1312171873),"FAQ",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Questions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Answers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Contact"], null)], null)], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.mega_footer_link_list,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Help"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Privacy & Terms"], null)], null)], null)], null)], null);
});
cljs_101.hello.init = (function cljs_101$hello$init(){
console.log("Hello from ClojureScript!");

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.text_field_demo_text], null),document.getElementById("app"));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.choise_webcam], null),document.getElementById("choiseWebcam"));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.button_demo_colored_raised], null),document.getElementById("button"));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.button2], null),document.getElementById("button2"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.jumbo], null),document.getElementById("jumbotron1"));
});
goog.exportSymbol('cljs_101.hello.init', cljs_101.hello.init);

//# sourceMappingURL=hello.js.map?rel=1524237821043
