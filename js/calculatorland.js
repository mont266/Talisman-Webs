function calculator() {

    var websiteCost = 200.0;
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

    //Discount Codes
    if (document.getElementById("discountCode").value == "LANDING100") {
        websiteCost = 50.00;
        document.getElementById("savings").innerHTML = "Savings: £100";
    } else {
        websiteCost = 150;
        document.getElementById("savings").innerHTML = "Savings: £0";
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