(ns cljs-101.hello
  (:require-macros [cljs.core.async.macros :refer [go]])

  (:require [reagent.core :as reagent]
            [re-mdl.core  :as mdl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]


            ;[cljs-101.camera :as camara]
            ))
                      ;  [cljs-101.core :include-macros true :refer [slurp]])
        ;[com.github.sarxos.webcam Webcam WebcamResolution]

;(def jsondata (t/read (t/reader :json) (.readFileSync fs "/home/pbautista/primerjson.json" "utf8")))
;(def r (t/reader :primerjson.json))

(go (let [response (<! (http/get "http://localhost:3000/cams"))]
      (.log js/console (str (:body response)))))



            ; (defn getnames []
            ;
            ; (let [names (json/read-str (slurp "/home/pbautista/primerjson.json"))]
            ;
            ; (.log js/console names  )
            ;
            ;
            ; )
            ; )


; (defn panel
;   "This is a wide card with a share button."
;   []
;   [mdl/card
;    :attr   {:style {:width  "512px"}}
;    :shadow 2
;    :children
;    [[mdl/card-title
;      :attr   {:style {:height     "196px"
;                       :color      "#fff"
;                       :background "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}}
;      :header :h2
;      :child  "Welcome"]
;     [mdl/card-supporting-text
;      :children ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.
;                  Mauris sagittis pellentesque lacus eleifend lacinia..."]]
;     [mdl/card-actions
;      :border? true
;      :children
;      [[mdl/button
;        :el             :a
;        :colored?       true
;        :ripple-effect? true
;        :child          "Get Started"]]]
;     [mdl/card-menu
;      :children [[mdl/button
;                  :attr           {:style {:color "pink"}}
;                  :icon?          true
;                  :ripple-effect? true
;                  :child          [:i.material-icons "share"]]]]]])








  (defn text-field-demo-text
    []
    [mdl/textfield
    :floating-label? true

     :label       "Ruta"])

     (defn button-demo-colored-raised
  "This is a raised button that is colored."
  []
  [mdl/button
  ;[:i {:class "material-icons"} "camera alt"]
   :raised?  true
   :colored? true
   :child    "Capturar"]
   )


(defn choise-webcam []
  [:div.mdl-textfield.mdl-js-textfield.getmdl-select
   [:input#sample1.mdl-textfield__input
    ]
   [:input {:name "sample1", :value "", :type "hidden"}]
   [:label.mdl-textfield__label {:for "sample1"} "Choise webcam"]
   [:ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu
    {:for "sample1"}
    [:li.mdl-menu__item {:data-val "DEU" :on-click (fn [x] (.log js/console (-> x .-currentTarget (.getAttribute "data-val"))))} "Webcam1"]
    [:li.mdl-menu__item {:data-val "BLR"} "Webcam2"]
    [:li.mdl-menu__item {:data-val "RUS"} "Webcam3"]]])


    (defn jumbo[]
      [:div {:class "jumbotron text-center"}
 [:h1 "Selfie WebCam"]
 [:p "hola bootstrap"]])





  (defn footer-demo-mega []
  [mdl/mega-footer
   :logo "Title"
   :middle
   [[mdl/mega-footer-dropdown
     :heading "Features"
     :children
     [[:a {:href "http://www.google.com"} "About"]
      [:a {:href "#"} "Terms"]
      [:a {:href "#"} "Partners"]
      [:a {:href "#"} "Updates"]]]
    [mdl/mega-footer-dropdown
     :heading "Details"
     :children
     [[:a {:href "#"} "Specs"]
      [:a {:href "#"} "Tools"]
      [:a {:href "#"} "Resources"]]]
    [mdl/mega-footer-dropdown
     :heading "Technology"
     :children
     [[:a {:href "#"} "How it works"]
      [:a {:href "#"} "Patterns"]
      [:a {:href "#"} "Usage"]
      [:a {:href "#"} "Products"]
      [:a {:href "#"} "Contracts"]]]
    [mdl/mega-footer-dropdown
     :heading "FAQ"
     :children
     [[:a {:href "#"} "Questions"]
      [:a {:href "#"} "Answers"]
      [:a {:href "#"} "Contact"]]]]
   :bottom
   [[mdl/mega-footer-link-list
     :children
     [[:a {:href "#"} "Help"]
      [:a {:href "#"} "Privacy & Terms"]]]]])

      (defn ^:export init[]
        ;(js/alert "Hello from ClojureScript!")
        (.log js/console "Hello from ClojureScript!")
      ;(reagent/render [panel] (.getElementById js/document "app"))
        ;(reagent/render [footer-demo-mega] (.getElementById js/document "foo"))
        ;(reagent/render [loading-progress-demo-indeterminate] (.getElementById js/document "app"))
        (reagent/render [text-field-demo-text] (.getElementById js/document "app"))
        (reagent/render [choise-webcam] (.getElementById js/document "choiseWebcam"))
        (reagent/render [button-demo-colored-raised] (.getElementById js/document "button"))
        (reagent/render [jumbo] (.getElementById js/document "jumbotron1"))
        ;(reagent/render [getnames] (.getElementById js/document "jumbotron1"))
      )
