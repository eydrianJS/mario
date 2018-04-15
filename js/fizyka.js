var Fizyka = {
    aktualizacja: function(dane) {
        Fizyka.zadania.Grawitacja(dane.obiekty.mario);
    },

    zadania: {
        Grawitacja: function(obiekt) {
            obiekt.penY+=1;
            obiekt.y+=obiekt.pedY
        },

        WykrywanieKolizji: function(dane) {
            var mario = dane.obiekty.mario;

            var WykrywanieKolizji = function(obiekt) {
                if(mario.x<obiekt.x+obiekt.w && mario.x+mario.w > obiekt.x && mario.y<obiekt.y+obiekt.h && mario.y+mario.h>obiekt.y) {
                    Fizyka.zadania.Kolizja(dane, obiekt);
                }
            }

            dane.obiekty.tabelaScian.forEach(function(sciana) {
                WykrywanieKolizji(sciana);
            })
        }
    }
}