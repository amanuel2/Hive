(function(angular){
    
    var app = angular.module('Hive')
    
    app.service('letterAvatarService', ['$http',letterAvatarServiceFunc])
    
    function letterAvatarServiceFunc($http){
        
        this.letters = {
	"letters": {

		"a": {
			"letter": "A",
			"URL": "https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/avatar-a.png?raw=true"
		},

		"b": {
			"letter": "B",
			"URL": "https://github.com/leovinogradov/letteravatarpics/blob/master/Letter_Avatars/avatar-b.png?raw=true"
		},

		"c": {
			"letter": "C",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-c.png"
		},

		"d": {
			"letter": "D",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-d.png"
		},

		"e": {
			"letter": "E",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-e.png"
		},

		"f": {
			"letter": "F",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-f.png"
		},
		"g": {
			"letter": "G",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-g.png"
		},
		"h": {
			"letter": "H",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-h.png"
		},
		"i": {
			"letter": "I",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-i.png"
		},
		"j": {
			"letter": "J",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-j.png"
		},
		"k": {
			"letter": "K",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-k.png"
		},
		"l": {
			"letter": "L",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-l.png"
		},
		"m": {
			"letter": "M",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-m.png"
		},
		"n": {
			"letter": "N",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-n.png"
		},
		"o": {
			"letter": "O",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-o.png"
		},
		"p": {
			"letter": "P",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-p.png"
		},
		"q": {
			"letter": "Q",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-q.png"
		},
		"r": {
			"letter": "R",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-r.png"
		},
		"s": {
			"letter": "S",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-s.png"
		},
		"t": {
			"letter": "T",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-t.png"
		},
		"u": {
			"letter": "U",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-u.png"
		},
		"v": {
			"letter": "V",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-v.png"
		},
		"w": {
			"letter": "W",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-w.png"
		},
		"x": {
			"letter": "X",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-x.png"
		},
		"y": {
			"letter": "Y",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-y.png"
		},
		"z": {
			"letter": "Z",
			"URL": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/avatar-z.png"
		}

	},

	"numbers": {

		"0": {
			"number": "0",
			"URL": "https://i.imgsafe.org/808b5e9427.png"
		},
		"1": {
			"number": "1",
			"URL": "https://i.imgsafe.org/808c31726a.png"
		},
		"2": {
			"number": "2",
			"URL": "https://i.imgsafe.org/808e69280f.png"
		},
		"3": {
			"number": "3",
			"URL": "https://i.imgsafe.org/808f82b8e4.png"
		},
		"4": {
			"number": "4",
			"URL": "https://i.imgsafe.org/8090c37df7.png"
		},
		"5": {
			"number": "5",
			"URL": "https://i.imgsafe.org/809177bd5e.png"
		},
		"6": {
			"number": "6",
			"URL": "https://i.imgsafe.org/809295a3dc.png"
		},
		"7": {
			"number": "7",
			"URL": "https://i.imgsafe.org/80938a0f43.png"
		},
		"8": {
			"number": "8",
			"URL": "https://i.imgsafe.org/809490f006.png"
		},
		"9": {
			"number": "9",
			"URL": "https://i.imgsafe.org/8095cb42bd.png"
		}

	},

	"Mystery": "https://raw.githubusercontent.com/leovinogradov/letteravatarpics/master/Letter_Avatars/default_profile.jpg"
};
          
            
            
        this.loadJSON = function(){
            $http.get('services/assets/json/letterJSON.json').then(function(value) {
                this.letters = value.data
            })
        }    
        
        this.logLetter = function(){
            console.log(this.letters);
        }
        this.getLetterURL = function(string,loaderData){
            
                  var char = string.charAt(0);
                    var len = 0;
                    var lenNum = 0;
                    var URLVALUE = '';
                    
                    for(var i in this.letters.letters){
                        len++;
                        if(i == (char.toLowerCase())){
                            URLVALUE = this.letters.letters[i].URL;
                        }
                    }
                    
                    for(var i in this.letters.numbers){
                        lenNum++;
                        if(i == (char)){
                            URLVALUE = this.letters.Mystery
                        }
                    }
                    
                    if(!URLVALUE){
                        URLVALUE = this.letters.Mystery
                    }
                    
                    return URLVALUE;
            

        }   
        
        
    
    }
})(angular);