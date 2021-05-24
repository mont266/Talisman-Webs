function calculator() {

    var websiteCost = 450.0;
    var pageCost = 8.00;
    var contentCost = 60.00;
    var blogCost = 60.00;
    var analyticsCost = 25.00;
    var hostCost = 6.00;
    var domainFee = 10.00;
    var liveChatcost = 10.00;
    var ecommerceCost = 280.00;
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
    var creditQty;

    var pageRes;
    var contentRes;
    var blogRes;
    var analyticsRes;
    var hostRes;
    var domainRes;
    var liveChatRes;
    var ecommerceRes;
    var creditRes;
    var mainRes;

    var initRes;
    var resMonthly;
    var resYearly;
    var deposit;

    pageQty = (document.pricingcalc.txtPages.value);

    if (document.getElementById("contentCreation").value == "Yes") {
        contentQty = 1;
    } else {
        contentQty = 0;
    }
    if (document.getElementById("blogSupport").value == "Yes") {
        blogQty = 1;
    } else {
        blogQty = 0;
    }
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
        mainRes = 0;
    }



    if (document.getElementById("hostSupport").value == "Yes") {
        hostQty = 1;
    } else {
        hostQty = 0;
    }
    if (document.getElementById('ecommerceSupport').value == "Yes") {
        ecommerceQty = 1;
    }
    else {
        ecommerceQty = 0;
    }
    if (document.getElementById("creditSupport").value == "Yes") {
        creditQty = 1;
    } else {
        creditQty = 0;
    }

    //Discount Codes
    if (document.getElementById("discountCode").value == "LAUNCH50") {
        websiteCost = 200.00;
    } else {
        websiteCost = 400.00;
    }

    pageRes = (pageCost * pageQty) + (1.5 * pageQty);
    contentRes = contentCost * contentQty;
    blogRes = blogCost * blogQty;
    analyticsRes = analyticsCost * analyticsQty;
    hostRes = hostCost * hostQty;
    domainRes = domainFee * domainQty;
    liveChatRes = liveChatcost * livechatQty;
    ecommerceRes = ecommerceCost * ecommerceQty;
    creditRes = creditDisc * creditQty;
    



    initRes = websiteCost + pageRes + contentRes + blogRes + analyticsRes + hostRes + liveChatRes + ecommerceRes + domainRes - creditRes;
    resMonthly = hostRes + mainRes;
    resYearly = resMonthly * 12 - 12;
    deposit = initRes / 2;

    document.getElementById("initResult").innerHTML = "Full Payment: £ " + initRes + " + ";
    document.getElementById("resMonthly").innerHTML = "£" + resMonthly + " Per Month" + " (£ " + resYearly + " Yearly)";
    document.getElementById("deposit").innerHTML = "Deposit: £ " + deposit;
    document.getElementById("help").innerHTML = "If you are happy with your quote, Speak to us here!";
}