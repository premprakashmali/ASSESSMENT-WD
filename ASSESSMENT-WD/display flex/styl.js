

counts = setInterval(card0);
        upto = 0;


        function card0() {
            let count = (document.getElementById("count-1").innerHTML = ++upto);
            if (upto == 94) {
                clearInterval(counts);
            }
        }


        counts1 = setInterval(card1);
        to = 0;


        function card1() {
            let counts = (document.getElementById("count-2").innerHTML = ++to);
            if (to == 2345) {
                clearInterval(counts1);
            }
        }

        counts2 = setInterval(card2);
        upt = 0;


        function card2() {
            let cou = (document.getElementById("count-3").innerHTML = ++upt);
            if (upt == 125) {
                clearInterval(counts2);
            }
        }

        counts3 = setInterval(card4);
        up = 0;


        function card4() {
            let co = (document.getElementById("count-4").innerHTML = ++up);
            if (up == 32) {
                clearInterval(counts3);
            }
        }