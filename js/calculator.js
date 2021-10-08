//Full Website
function calculate1() {

    var websiteCost = 450.0;
    var pageCost = 8.00;
    var contentCost = 60.00;
    var blogCost = 60.00;
    var analyticsCost = 25.00;
    var hostCost = 6.00;
    var domainFee = 10.00;
    var liveChatcost = 10.00;
    var ecommerceCost = 300.00;
    var ecommerceMonCost = 12.00;
    var creditDisc = 10.00;
    var mainLow = 10.00;
    var mainMed = 15.00;
    var mainHigh = 25.00;

    var pageQty;
    var contentQty;
    var blogQty;
    var analyticsQty;
    var hostQty;
    var domainQty;
    var livechatQty;
    var ecommerceQty;
    var ecommerceMonQty;
    var creditQty;

    var pageRes;
    var contentRes;
    var blogRes;
    var analyticsRes;
    var hostRes;
    var domainRes;
    var liveChatRes;
    var ecommerceRes;
    var ecommerceMonRes;
    var creditRes;
    var mainRes;

    var initRes;
    var resMonthly;
    var resYearly;
    var deposit;

    pageQty = (document.pricingcalc.txtPages.value);

    //Content Creation
    if (document.getElementById("contentCreation").value == "Yes") {
        contentQty = 1;
    } else {
        contentQty = 0;
    }

    //Blog
    if (document.getElementById("blogSupport").value == "Yes") {
        blogQty = 1;
    } else {
        blogQty = 0;
    }

    //Analytics
    if (document.getElementById("analyticsSupport").value == "Yes") {
        analyticsQty = 1;
    } else {
        analyticsQty = 0;
    }

    //Domain
    if (document.getElementById("domainSupport").value == "Yes") {
        domainQty = 1;
    } else {
        domainQty = 0;
    }

    //Live Chat
    if (document.getElementById('liveChatSupport').value == "Yes") {
        livechatQty = 1;
    }
    else {
        livechatQty = 0;
    }

    //Level of Maintanence
    if (document.getElementById("maintain").value == "low") {
        mainRes = mainLow;
    }
    if (document.getElementById("maintain").value == "med") {
        mainRes = mainMed;
    }
    if (document.getElementById("maintain").value == "high") {
        mainRes = mainHigh;
    }
    if (document.getElementById("maintain").value == "Select") {
        mainRes = 0;
    }

    //Hosting
    if (document.getElementById("hostSupport").value == "Yes") {
        hostQty = 1;
    } else {
        hostQty = 0;
    }

    //eCommerce
    if (document.getElementById('ecommerceSupport').value == "Yes") {
        ecommerceQty = 1;
        ecommerceMonQty = 1;
        hostQty = 0;
    }
    else {
        ecommerceQty = 0;
        ecommerceMonQty = 0;
    }

    //Credit Discount
    if (document.getElementById("creditSupport").value == "Yes") {
        creditQty = 1;
    } else {
        creditQty = 0;
    }

    pageRes = (pageCost * pageQty) + (1.5 * pageQty);
    contentRes = contentCost * contentQty;
    blogRes = blogCost * blogQty;
    analyticsRes = analyticsCost * analyticsQty;
    hostRes = hostCost * hostQty;
    domainRes = domainFee * domainQty;
    liveChatRes = liveChatcost * livechatQty;
    ecommerceRes = ecommerceCost * ecommerceQty;
    ecommerceMonRes = ecommerceMonCost * ecommerceMonQty;
    creditRes = creditDisc * creditQty;
    



    initRes = websiteCost + pageRes + contentRes + blogRes + analyticsRes + hostRes + liveChatRes + ecommerceRes + domainRes - creditRes;
    resMonthly = hostRes + mainRes + ecommerceMonRes;
    resYearly = resMonthly * 12 - 12;
    deposit = initRes / 2;

    document.getElementById("initResult").innerHTML = "Full Payment: £ " + initRes + " + ";
    document.getElementById("resMonthly").innerHTML = "£" + resMonthly + " Per Month" + " (£ " + resYearly + " Yearly)";
    document.getElementById("deposit").innerHTML = "Deposit: £ " + deposit;
    document.getElementById("ref").innerHTML = "Quote Reference: " + Date.now();
    document.getElementById("help").innerHTML = "If you are happy with your quote, Speak to us here!";
}

//Landing Page
function calculate2() {

    var websiteCost = 250.0;
    var analyticsCost = 25.00;
    var hostCost = 6.00;
    var domainFee = 10.00;
    var liveChatcost = 10.00;
    var creditDisc = 10.00;
    var mainLow = 5.00;
    var mainMed = 10.00;
    var mainHigh = 15.00;

    var analyticsQty;
    var hostQty;
    var domainQty;
    var livechatQty;
    var creditQty;

    var analyticsRes;
    var hostRes;
    var domainRes;
    var liveChatRes;
    var creditRes;
    var mainRes;

    var initRes;
    var resMonthly;
    var resYearly;
    var deposit;

    if (document.getElementById("analyticsSupport").value == "Yes") {
        analyticsQty = 1;
    } else {
        analyticsQty = 0;
    }
    if (document.getElementById("domainSupport").value == "Yes") {
        domainQty = 1;
    } else {
        domainQty = 0;
    }
    if (document.getElementById('liveChatSupport').value == "Yes") {
        livechatQty = 1;
    }
    else {
        livechatQty = 0;
    }
    //Level of Maintanence
    if (document.getElementById("maintain").value == "low") {
        mainRes = mainLow;
    }
    if (document.getElementById("maintain").value == "med") {
        mainRes = mainMed;
    }
    if (document.getElementById("maintain").value == "high") {
        mainRes = mainHigh;
    }
    if (document.getElementById("maintain").value == "Select") {
        mainRes = 0.00;
    }

    if (document.getElementById("hostSupport").value == "Yes") {
        hostQty = 1;
    } else {
        hostQty = 0;
    }

    if (document.getElementById("creditSupport").value == "Yes") {
        creditQty = 1;
    } else {
        creditQty = 0;
    }

    analyticsRes = analyticsCost * analyticsQty;
    hostRes = hostCost * hostQty;
    domainRes = domainFee * domainQty;
    liveChatRes = liveChatcost * livechatQty;
    creditRes = creditDisc * creditQty;
    

    initRes = websiteCost + analyticsRes + hostRes + liveChatRes + domainRes - creditRes;
    resMonthly = hostRes + mainRes;
    resYearly = resMonthly * 12 - 12;
    deposit = initRes / 2;

    document.getElementById("initResult").innerHTML = "Full Payment: £ " + initRes + " + ";
    document.getElementById("resMonthly").innerHTML = "£" + resMonthly + " Per Month" + " (£ " + resYearly + " Yearly)";
    document.getElementById("deposit").innerHTML = "Deposit: £ " + deposit;
    document.getElementById("ref").innerHTML = "Quote Reference: " + Date.now();
    document.getElementById("help").innerHTML = "If you are happy with your quote, Speak to us here!";
}

//Hotel Website
function calculate3() {

    var websiteCostS = 800.00;
    var websiteCost = 800.00;
    var analyticsCost = 25.00;
    var hostCost = 6.00;
    var domainFee = 10.00;
    var liveChatcost = 10.00;
    var creditDisc = 10.00;
    var mainLow = 10.00;
    var mainMed = 15.00;
    var mainHigh = 25.00;

    var pro = false;


    var roomQty;
    var analyticsQty;
    var hostQty;
    var domainQty;
    var livechatQty;
    var creditQty;

    var roomRes;
    var analyticsRes;
    var hostRes;
    var domainRes;
    var liveChatRes;
    var creditRes;
    var mainRes;

    var initRes;
    var resMonthly;
    var resYearly;
    var deposit;

    roomQty = (document.calchotel.txtPages.value);

    //Analytics
    if (document.getElementById("analyticsSupport").value == "Yes") {
        analyticsQty = 1;
    } else {
        analyticsQty = 0;
    }

    //Domain
    if (document.getElementById("domainSupport").value == "Yes") {
        domainQty = 1;
    } else {
        domainQty = 0;
    }

    //Live Chat
    if (document.getElementById('liveChatSupport').value == "Yes") {
        livechatQty = 1;
    }
    else {
        livechatQty = 0;
    }
    
    //Booking.com Integration
    if (document.getElementById('bookingCom').value == "Yes") {
        pro = true;
    } else {
        pro = false;
    }

    //Level of Maintanence
    if (document.getElementById("maintain").value == "low") {
        mainRes = mainLow;
    }
    if (document.getElementById("maintain").value == "med") {
        mainRes = mainMed;
    }
    if (document.getElementById("maintain").value == "high") {
        mainRes = mainHigh;
    }
    if (document.getElementById("maintain").value == "Select") {
        mainRes = 0;
    }

    //Hosting
    if (document.getElementById("hostSupport").value == "Yes") {
        hostQty = 1;
    } else {
        hostQty = 0;
    }

    //Credit Discount
    if (document.getElementById("creditSupport").value == "Yes") {
        creditQty = 1;
    } else {
        creditQty = 0;
    }

    //1-2 Rooms
    if (roomQty < 3 ) {
        if (pro == true) {
            roomRes = 25.00;
        } else {
            roomRes = 7.00;
        }
    }

    //3-5 Rooms
    if (roomQty > 2 && roomQty < 6 ) {
        if (pro == true) {
            roomRes = 35.00;
        } else {
            roomRes = 12.00;
        }
    }

    //6-10 Rooms
    if (roomQty > 5 && roomQty < 11 ) {
        if (pro == true) {
            roomRes = 50.00;
        } else {
            roomRes = 15.00;
        }
    }

    //11-20 Rooms
    if (roomQty > 10 && roomQty < 21 ) {
        if (pro == true) {
            roomRes = 65.00;
        } else {
            roomRes = 19.00;
        }
    }

    //21-50 Rooms
    if (roomQty > 20 && roomQty < 51 ) {
        if (pro == true) {
            roomRes = 79.00;
        } else {
            roomRes = 25.00;
        }
    }

    //50-100 Rooms
    if (roomQty > 50 && roomQty < 101 ) {
        if (pro == true) {
            roomRes = 99.00;
        } else {
            roomRes = 35.00;
        }
    }

    //100+ Rooms
    if (roomQty > 100 ) {
        if (pro == true) {
            roomRes = 119.00;
        } else {
            roomRes = 45.00;
        }
    }

    analyticsRes = analyticsCost * analyticsQty;
    hostRes = hostCost * hostQty;
    domainRes = domainFee * domainQty;
    liveChatRes = liveChatcost * livechatQty;
    creditRes = creditDisc * creditQty;

    initRes = websiteCost + roomRes + analyticsRes + hostRes + liveChatRes + domainRes - creditRes;
    resMonthly = hostRes + mainRes + roomRes;
    resYearly = resMonthly * 12 - 12;
    deposit = initRes / 2;

    document.getElementById("initResult").innerHTML = "Full Payment: £ " + initRes + " + ";
    document.getElementById("resMonthly").innerHTML = "£" + resMonthly + " Per Month" + " (£ " + resYearly + " Yearly)";
    document.getElementById("deposit").innerHTML = "Deposit: £ " + deposit;
    document.getElementById("ref").innerHTML = "Quote Reference: " + Date.now();
}

//Social Media
function calculate4() {

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

function Check1() {
    if (document.getElementById("name").value == "") {
        document.getElementById("error").innerHTML = "Please Fill Out All Fields";
    } else {
        document.getElementById("error").innerHTML = "";
        calculate1();
    }
}

function Check2() {
    if (document.getElementById("name").value == "") {
        document.getElementById("error").innerHTML = "Please Fill Out All Fields";
    } else {
        document.getElementById("error").innerHTML = "";
        calculate2();
    }
}

function Check3() {
    if (document.getElementById("name").value == "") {
        document.getElementById("error").innerHTML = "Please Fill Out All Fields";
    } else {
        document.getElementById("error").innerHTML = "";
        calculate3();
    }
}