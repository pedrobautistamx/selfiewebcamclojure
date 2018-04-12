// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_101.hello');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_mdl.core');
cljs_101.hello.takephoto = (function cljs_101$hello$takephoto(){
cljs_101.hello.ruta = "a";

return cljs.core.println.call(null,["funcion ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_101.hello.ruta)].join(''));
});
/**
 * This is a wide card with a share button.
 */
cljs_101.hello.panel = (function cljs_101$hello$panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.card,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"512px"], null)], null),new cljs.core.Keyword(null,"shadow","shadow",873231803),(2),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.card_title,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"196px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"background","background",-863952629),"url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"], null)], null),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"child","child",623967545),"Welcome"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.card_supporting_text,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                 Mauris sagittis pellentesque lacus eleifend lacinia..."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.card_actions,new cljs.core.Keyword(null,"border?","border?",-775600503),true,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.button,new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"colored?","colored?",1847962275),true,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356),true,new cljs.core.Keyword(null,"child","child",623967545),"Get Started"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.card_menu,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_mdl.core.button,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"pink"], null)], null),new cljs.core.Keyword(null,"icon?","icon?",-1663815703),true,new cljs.core.Keyword(null,"ripple-effect?","ripple-effect?",1342045356),true,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"share"], null)], null)], null)], null)], null)], null);
});
cljs_101.hello.init = (function cljs_101$hello$init(){
console.log("Hello from ClojureScript!");

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.text_field_demo_text], null),document.getElementById("app"));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.choise_webcam], null),document.getElementById("choiseWebcam"));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.button_demo_colored_raised], null),document.getElementById("button"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_101.hello.jumbo], null),document.getElementById("jumbotron1"));
});
goog.exportSymbol('cljs_101.hello.init', cljs_101.hello.init);
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

//# sourceMappingURL=hello.js.map?rel=1523541290893