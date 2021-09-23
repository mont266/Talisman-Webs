function calculator() {

    var websiteCost = 400.0;
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

        //Discount Codes
        if (document.getElementById("discountCode").value == "LAUNCH50") {
            websiteCost = 225.00;
        } else {
            websiteCost = 450.00;
        }
    
        if (document.getElementById("discountCode").value == "LAUNCH25") {
            websiteCost = 337.50;
        } else {
            websiteCost = 450.00;
        }
    
        if (document.getElementById("discountCode").value == "CAUSEWAY") {
            websiteCost = 360.00;
            pageCost = 6.40;
            contentCost = 48.00;
            blogCost = 48.00;
            analyticsCost = 20.00;
            hostCost = 4.80;
            domainFee = 8.00;
            liveChatcost = 8.00;
            ecommerceCost = 240.00;
            ecommerceMonCost = 8.00;
        } else {
            websiteCost = 450.00;
            pageCost = 8.00;
            contentCost = 60.00;
            blogCost = 60.00;
            analyticsCost = 25.00;
            hostCost = 6.00;
            domainFee = 10.00;
            liveChatcost = 10.00;
            ecommerceCost = 300.00;
            ecommerceMonCost = 12.00;
        }

        if (document.getElementById("discountCode").value == "Ref") {
            websiteCost = 382.50;
            pageCost = 6.80;
            contentCost = 51.00;
            blogCost = 51.00;
            analyticsCost = 21.25;
            hostCost = 5.10;
            domainFee = 8.50;
            liveChatcost = 8.50;
            ecommerceCost = 255.00;
            ecommerceMonCost = 10.20;
        } else {
            websiteCost = 450.00;
            pageCost = 8.00;
            contentCost = 60.00;
            blogCost = 60.00;
            analyticsCost = 25.00;
            hostCost = 6.00;
            domainFee = 10.00;
            liveChatcost = 10.00;
            ecommerceCost = 300.00;
            ecommerceMonCost = 12.00;
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

function Check() {
    if (document.getElementById("name").value == "") {
        document.getElementById("error").innerHTML = "Please Fill Out All Fields";
    } else {
        document.getElementById("error").innerHTML = "";
        calculator();
    }
}