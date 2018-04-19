// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_101.hello');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
var c__23283__auto___24287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23283__auto___24287){
return (function (){
var f__23284__auto__ = (function (){var switch__23260__auto__ = ((function (c__23283__auto___24287){
return (function (state_24281){
var state_val_24282 = (state_24281[(1)]);
if((state_val_24282 === (1))){
var inst_24274 = cljs_http.client.get.call(null,"http://localhost:3000/cams");
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24281__$1,(2),inst_24274);
} else {
if((state_val_24282 === (2))){
var inst_24276 = (state_24281[(2)]);
var inst_24277 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24276);
var inst_24278 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24277)].join('');
var inst_24279 = console.log(inst_24278);
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24281__$1,inst_24279);
} else {
return null;
}
}
});})(c__23283__auto___24287))
;
return ((function (switch__23260__auto__,c__23283__auto___24287){
return (function() {
var cljs_101$hello$state_machine__23261__auto__ = null;
var cljs_101$hello$state_machine__23261__auto____0 = (function (){
var statearr_24283 = [null,null,null,null,null,null,null];
(statearr_24283[(0)] = cljs_101$hello$state_machine__23261__auto__);

(statearr_24283[(1)] = (1));

return statearr_24283;
});
var cljs_101$hello$state_machine__23261__auto____1 = (function (state_24281){
while(true){
var ret_value__23262__auto__ = (function (){try{while(true){
var result__23263__auto__ = switch__23260__auto__.call(null,state_24281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23263__auto__;
}
break;
}
}catch (e24284){if((e24284 instanceof Object)){
var ex__23264__auto__ = e24284;
var statearr_24285_24288 = state_24281;
(statearr_24285_24288[(5)] = ex__23264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24289 = state_24281;
state_24281 = G__24289;
continue;
} else {
return ret_value__23262__auto__;
}
break;
}
});
cljs_101$hello$state_machine__23261__auto__ = function(state_24281){
switch(arguments.length){
case 0:
return cljs_101$hello$state_machine__23261__auto____0.call(this);
case 1:
return cljs_101$hello$state_machine__23261__auto____1.call(this,state_24281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_101$hello$state_machine__23261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_101$hello$state_machine__23261__auto____0;
cljs_101$hello$state_machine__23261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_101$hello$state_machine__23261__auto____1;
return cljs_101$hello$state_machine__23261__auto__;
})()
;})(switch__23260__auto__,c__23283__auto___24287))
})();
var state__23285__auto__ = (function (){var statearr_24286 = f__23284__auto__.call(null);
(statearr_24286[(6)] = c__23283__auto___24287);

return statearr_24286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23285__auto__);
});})(c__23283__auto___24287))
);

cljs_101.hello.text_field_demo_text = (function cljs_101$hello$text_field_demo_text(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.textfield,new cljs.core.Keyword(null,"floating-label?","floating-label?",-1615247461),true,new cljs.core.Keyword(null,"label","label",1718410804),"Ruta"], null);
});
/**
 * This is a raised button that is colored.
 */
cljs_101.hello.button_demo_colored_raised = (function cljs_101$hello$button_demo_colored_raised(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.button,new cljs.core.Keyword(null,"raised?","raised?",145778912),true,new cljs.core.Keyword(null,"colored?","colored?",1847962275),true,new cljs.core.Keyword(null,"child","child",623967545),"Capturar"], null);
});
cljs_101.hello.choise_webcam = (function cljs_101$hello$choise_webcam(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mdl-textfield.mdl-js-textfield.getmdl-select","div.mdl-textfield.mdl-js-textfield.getmdl-select",95083235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#sample1.mdl-textfield__input","input#sample1.mdl-textfield__input",-254253907)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"sample1",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"type","type",1174270348),"hidden"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.mdl-textfield__label","label.mdl-textfield__label",-1621295497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"sample1"], null),"Choise webcam"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu","ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu",-1176294735),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"sample1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mdl-menu__item","li.mdl-menu__item",-598444289),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-val","data-val",-1410637751),"DEU",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (x){
return console.log(x.currentTarget.getAttribute("data-val"));
})], null),"Webcam1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mdl-menu__item","li.mdl-menu__item",-598444289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-val","data-val",-1410637751),"BLR"], null),"Webcam2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.mdl-menu__item","li.mdl-menu__item",-598444289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-val","data-val",-1410637751),"RUS"], null),"Webcam3"], null)], null)], null);
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

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.jumbo], null),document.getElementById("jumbotron1"));
});
goog.exportSymbol('cljs_101.hello.init', cljs_101.hello.init);

//# sourceMappingURL=hello.js.map?rel=1524151585488
