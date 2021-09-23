function calculator() {

    var facebookCost = 25.00;
    var twitterCost = 25.00;

    var facebookQty;
    var twitterQty;

    var facebookRes;
    var twitterRes;
    var multi = 0.00;

    var initRes;

    //Facebook
    if (document.getElementById("facebook").value == "Yes") {
        facebookQty = 1;
    } else {
        facebookQty = 0;
    }

    //Twitter
    if (document.getElementById("twitter").value == "Yes") {
        twitterQty = 1;
    } else {
        twitterQty = 0;
    }

    //Multi
    if (document.getElementById("facebook").value == "Yes" && document.getElementById("twitter").value == "Yes") {
        multi = 10.00;
    }
    else {
        multi = 0.00;
    }

    facebookRes = facebookCost * facebookQty;
    twitterRes = twitterCost * twitterQty;


    



    initRes = facebookRes + twitterRes - multi;

    document.getElementById("initResult").innerHTML = "Full Payment: £ " + initRes;
    document.getElementById("ref").innerHTML = "Quote Reference: " + Date.now();
    document.getElementById("help").innerHTML = "If you are happy with your quote, Speak to us here!";
}