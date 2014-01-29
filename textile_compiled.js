if(!lt.util.load.provided_QMARK_('lt.plugins.lt-textile')) {
goog.provide('lt.plugins.lt_textile');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_textile.setTextileHTML_BANG_ = (function setTextileHTML_BANG_(ed,obj){return lt.object.__GT_content.call(null,obj).innerHTML = textile(lt.objs.editor.__GT_cm_ed.call(null,ed).getValue());
});
lt.plugins.lt_textile.textile_skeleton = (function textile_skeleton(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"lt-textile"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"This should be replaced with textile content eventually"], null)], null));var seq__8238_8244 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8239_8245 = null;var count__8240_8246 = 0;var i__8241_8247 = 0;while(true){
if((i__8241_8247 < count__8240_8246))
{var vec__8242_8248 = cljs.core._nth.call(null,chunk__8239_8245,i__8241_8247);var ev__8100__auto___8249 = cljs.core.nth.call(null,vec__8242_8248,0,null);var func__8101__auto___8250 = cljs.core.nth.call(null,vec__8242_8248,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8249,func__8101__auto___8250);
{
var G__8251 = seq__8238_8244;
var G__8252 = chunk__8239_8245;
var G__8253 = count__8240_8246;
var G__8254 = (i__8241_8247 + 1);
seq__8238_8244 = G__8251;
chunk__8239_8245 = G__8252;
count__8240_8246 = G__8253;
i__8241_8247 = G__8254;
continue;
}
} else
{var temp__4092__auto___8255 = cljs.core.seq.call(null,seq__8238_8244);if(temp__4092__auto___8255)
{var seq__8238_8256__$1 = temp__4092__auto___8255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8238_8256__$1))
{var c__7485__auto___8257 = cljs.core.chunk_first.call(null,seq__8238_8256__$1);{
var G__8258 = cljs.core.chunk_rest.call(null,seq__8238_8256__$1);
var G__8259 = c__7485__auto___8257;
var G__8260 = cljs.core.count.call(null,c__7485__auto___8257);
var G__8261 = 0;
seq__8238_8244 = G__8258;
chunk__8239_8245 = G__8259;
count__8240_8246 = G__8260;
i__8241_8247 = G__8261;
continue;
}
} else
{var vec__8243_8262 = cljs.core.first.call(null,seq__8238_8256__$1);var ev__8100__auto___8263 = cljs.core.nth.call(null,vec__8243_8262,0,null);var func__8101__auto___8264 = cljs.core.nth.call(null,vec__8243_8262,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8263,func__8101__auto___8264);
{
var G__8265 = cljs.core.next.call(null,seq__8238_8256__$1);
var G__8266 = null;
var G__8267 = 0;
var G__8268 = 0;
seq__8238_8244 = G__8265;
chunk__8239_8245 = G__8266;
count__8240_8246 = G__8267;
i__8241_8247 = G__8268;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-textile","lt-textile.textile","lt.plugins.lt-textile/lt-textile.textile",1039274878),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lt-textile.textile","lt-textile.textile",1898588905)], null),new cljs.core.Keyword(null,"name","name",1017277949),"textile",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-textile","on-close-destroy","lt.plugins.lt-textile/on-close-destroy",4528087358)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.lt_textile.textile_skeleton.call(null,this$);
}));
lt.plugins.lt_textile.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8269 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8269))
{var ts_8270 = temp__4092__auto___8269;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8270))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8270);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-textile","on-close-destroy","lt.plugins.lt-textile/on-close-destroy",4528087358),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_textile.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.lt_textile.__BEH__read_editor = (function __BEH__read_editor(this$){var textile_obj = new cljs.core.Keyword(null,"textile","textile",3891043015).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.lt_textile.setTextileHTML_BANG_.call(null,this$,textile_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-textile","read-editor","lt.plugins.lt-textile/read-editor",1920137603),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_textile.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"Textile: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.lt-textile","read-editor","lt.plugins.lt-textile/read-editor",1920137603)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-textile","watch-editor","lt.plugins.lt-textile/watch-editor",992721450),new cljs.core.Keyword(null,"desc","desc",1016984067),"Textile: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var textile_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-textile","lt-textile.textile","lt.plugins.lt-textile/lt-textile.textile",1039274878));var ed = lt.objs.editor.pool.last_active.call(null);lt.objs.tabs.add_or_focus_BANG_.call(null,textile_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textile","textile",3891043015)], null),(function (){return textile_obj;
}));
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-textile","read-editor","lt.plugins.lt-textile/read-editor",1920137603));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.lt-textile","read-editor","lt.plugins.lt-textile/read-editor",1920137603));
})], null));
}

//# sourceMappingURL=textile_compiled.js.map