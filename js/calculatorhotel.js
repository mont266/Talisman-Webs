function calculator() {

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



        //Discount Codes
        if (document.getElementById("discountCode").value == "LAUNCH50") {
            websiteCost = 250.00;
        } else {
            websiteCost = websiteCostS;
        }
    
        if (document.getElementById("discountCode").value == "LAUNCH25") {
            websiteCost = 375.00;
        } else {
            websiteCost = websiteCostS;
        }
    
        if (document.getElementById("discountCode").value == "CAUSEWAY") {
            websiteCost = 640.00;
            pageCost = 6.40;
            analyticsCost = 20.00;
            hostCost = 4.80;
            domainFee = 8.00;
            liveChatcost = 8.00;
        } else {
            websiteCost = websiteCostS;
            pageCost = 8.00;
            analyticsCost = 25.00;
            hostCost = 6.00;
            domainFee = 10.00;
            liveChatcost = 10.00;
        }

        if (document.getElementById("discountCode").value == "Ref") {
            websiteCost = 680.00;
            pageCost = 6.80;
            analyticsCost = 21.25;
            hostCost = 5.10;
            domainFee = 8.50;
            liveChatcost = 8.50;
        } else {
            websiteCost = websiteCostS;
            pageCost = 8.00;
            analyticsCost = 25.00;
            hostCost = 6.00;
            domainFee = 10.00;
            liveChatcost = 10.00;
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

function Check() {
    if (document.getElementById("name").value == "") {
        document.getElementById("error").innerHTML = "Please Fill Out All Fields";
    } else {
        document.getElementById("error").innerHTML = "";
        calculator();
    }
}