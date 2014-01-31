(ns lt.plugins.lt-textile
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn setTextileHTML! [ed obj]
  (set! (.-innerHTML (object/->content obj))
        (js/textile (.getValue (editor/->cm-ed ed)))))

(defn get-filename [ed]
  (-> @ed :info :name))

(defui textile-skeleton [this]
  [:div {:class "lt-textile"}
   [:h1 "This should be replaced with textile content eventually"]])

(object/object* ::lt-textile.textile
                :tags [:lt-textile.textile]
                :name "textile"
                :behaviors [::on-close-destroy]
                :init (fn [this filename]
                        (object/update! this [:name] (constantly (str filename " - Live")))
                        (textile-skeleton this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::read-editor
          :triggers [:change ::read-editor]
          :desc "Textile: Read the content inside an editor"
          :reaction (fn [this]
                      (let [textile-obj (:textile @this)]
                        (setTextileHTML! this textile-obj))))

(cmd/command {:command ::watch-editor
              :desc "Textile: Watch this editor for changes"
              :exec (fn []
                      (let [ed (pool/last-active)
                            filename (get-filename ed)
                            textile-obj (object/create ::lt-textile.textile filename)]
                        (tabs/add-or-focus! textile-obj)
                        (object/update! ed [:textile] (fn [] textile-obj))
                        (object/add-behavior! ed ::read-editor)
                        ;; Update the new tab with the textile
                        (object/raise ed ::read-editor)))})
