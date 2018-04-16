var Wejscie = {
	ini: function(dane) {
		document.onkeydown = function(event) {
			Wejscie.zadania.nacisnieto[event.keyCode] = true;
		};
		
		document.onkeyup = function() {			
			Wejscie.zadania.nacisnieto[event.keyCode]=false;
			//wnetrze.zadania.przytrzymano[event.keyCode]=false;
		}
	},
	
	aktualizacja: function(dane) {
		var mario = dane.obiekty.mario;
		
		if(Wejscie.zadania.Nacisnieto(37)) {
			if(mario.pedY == 0) {
				mario.obecnyStan = mario.stan.poruszanie;
			} else {
				if(mario.x > dane.canvas.fgCanvas.width/2 || dane.obiekty.mapa.x>=0) {
					mario.x -= mario.pedX;
				} else {
					dane.obiekty.mapa.x += mario.pedX;
					for(var i = 0; i<dane.obiekty.tabelaScian.length; i++) {
						dane.obiekty.tabelaScian[i].x += mario.pedX;
					}
				}
			}
			
			mario.kierunek = "lewo";
		}
		
		if(Wejscie.zadania.Nacisnieto(39)) {
			mario.kierunek = "prawo";
			
			if(mario.pedY == 0) {
				mario.obecnyStan = mario.stan.poruszanie;
			} else {
				if(mario.x < dane.canvas.fgCanvas.width/2 || dane.obiekty.mapa.x<=dane.canvas.fgCanvas.width-dane.obiekty.mapa.w) {
					mario.x += mario.pedX;
				} else {
					dane.obiekty.mapa.x -= mario.pedX;
					for(var i = 0; i<dane.obiekty.tabelaScian.length; i++) {
						dane.obiekty.tabelaScian[i].x -= mario.pedX;
					}
				}
			}
		}
		
		if(Wejscie.zadania.Nacisnieto(32)) { //----------
			mario.obecnyStan = mario.stan.skakanie;
		}
	},
	
	zadania: {
		Nacisnieto: function(code) {
			return Wejscie.zadania.nacisnieto[code];
		},
		/*
		Przytrzymano: function(code) {
			if(Wejscie.zadania.przytrzymano[code]) {
				return false;
			} else if(Wejscie.zadania.nacisnieto[code]) {
				return Wejscie.zadania.przytrzymano[code] = true;
			}
			
			return false;
		},
		*/
		nacisnieto: {},
		przytrzymano: {}
	}
};