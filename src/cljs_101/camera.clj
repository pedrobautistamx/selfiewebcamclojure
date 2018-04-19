(ns cljs-101.camera
  (:import [com.github.sarxos.webcam Webcam WebcamResolution]
          [java.awt.image BufferedImage]
          [java.io File]
          [javax.imageio ImageIO]
          [java.awt Dimension]
          [java.util List]
          )
            ;(:require [clojure.data.json :as json])
          )


; (defn camweb []
;   (def camweb)
; (Webcam/.getDefault camweb))

  ; (defn takephoto []
  ;   (def ruta "a")
  ;   (def wb )
  ;   (println (str "funcion " ruta))
  ;
  ;   (let [webcam (.getDefault Webcam)]))
  ;   (let [webcam ( Webcam (.getDefault))])

(def ruta "/home/pbautista/f.png")
;(def vec (new Dimension 1920 1080))home
(def listWb (Webcam/getWebcams))
(println "Todo lista: " listWb)
;(print listWb)}


(let [tam (.size listWb)]
(println "tamano: " tam))


(let [cosa2 (Webcam/.getName (first listWb))]
(println "nombre primer camara:" cosa2)  )

;(let [cosa3  reduce (fn  [x]  (Webcam/.getName x) listWb)]
;(println "cosa 3:"  first cosa3)  )

; (def names ((fn  [x] (let [f (Webcam/.getName x)]  (println "nombres: " f)f)) listWb))
; (println names)
;(def camaras '()))


(defn getcams []
  (def cams (reduce (fn  [a x] (let [f (Webcam/.getName x)]  (println "EL f: " f) (conj a f) )) '() (Webcam/getWebcams)))
  (println "GetCams: " cams)
cams
  )

  (def camarera (getcams))

(println "cama" (type camarera))
  ;;json-----

; (def cams (reduce (fn  [a x] (let [f (Webcam/.getName x)]  (println "EL f: " f) (conj a f) )) '() (Webcam/getWebcams)))
; (println "el DEF:   " cams)
;
; (defn add-map [data]
;   (map-indexed #(hash-map :id (inc %1) :name (str %2)) data))
;
;
; (def mapcams (add-map cams))
;
;
;
;
; (println "mapa de camarones:" mapcams)
;
; (def jeison (json/write-str mapcams))
;
; (println "jeison" jeison)
;
;
; (spit "/home/pbautista/primerjson.json" jeison)
;
;
; (def vex [(json/read-str (slurp "/home/pbautista/primerjson.json"))])
;
;
;
; (println "vector" vex )

;;----------------------------------------

;(println  "json recupeRADO : "(json/read-str (slurp "/home/pbautista/primerjson.json")))

; (def m
; ;
; ; (into m (fn [p] (Webcam/. getName ))listWb))
; (defn fib  ([n] (fib [0 1] n))
;   ([x, n]
;      (if (< (count x) n)
;        (fib (conj x (+ (last x) (nth x (- (count x) 2)))) n)
;        x)))
;
;
;
; (defn cams [lista webcams ]
;
;
; (let [jeje (fn [t] (Webcam/.getName t ) webcams) camax (concat lista jeje) ]
; ;(cams  camax webcams)
; ;camax
;
; (println "camaras nuevas" camax)
; )
; )
;
; (def listavacia [])


;(cams listavacia listWb)

;(println "camarones: "camaras)

;(println (type camaras))

;(println "Cosa 4: " cosa4)










; (let [cosa (bean listWb)]
; (println "cosa: " cosa)
; )


; (let [lista (into #{} listWb)]
;   (let [listaf (bean lista)]
; (println "Tipo lista:" (type lista))
; (println listaf)))
;
;
; (defn lisCam[]
; (let [count 0 ])
;   )




(defn build-webcam []
  (let [webcam (Webcam/getDefault) vector (new Dimension 1920 1080)]
      ;  (println "Tipo Vector:" (type vector))

       (.setCustomViewSizes webcam (into-array Dimension [vector]))
        (.setViewSize webcam vector)
        (.open webcam false)
        (let [image (.getImage webcam)]
       (let [file (new File ruta)]
       (ImageIO/write image "PNG" file)))
        ))

; (let [image ( BufferedImage)
;       (image (.getImage webcam)) ])
;         ))

(defn -main [& args]
  (let [webcam (build-webcam)])
  )
