function calculator() {

    var websiteCost = 0;
    var pageCost = 8.00;
    var contentCost = 60.00;
    var blogCost = 60.00;
    var analyticsCost = 25.00;
    var adsenseCost = 25.00;
    var socialMediaCost = 25.00;
    var hostCost = 6.00;
    var bookingCost = 20.00;
    var domainFee = 10.00;
    var liveChatcost = 5.00;
    var ecommerceCost = 250.00;
    var creditDisc = 5.00;
    var cmsCost = 4.00;

    var pageQty;
    var contentQty;
    var blogQty;
    var analyticsQty;
    var adsenseQty;
    var socialMediaQty;
    var hostQty;
    var bookingQty;
    var domainQty;
    var livechatQty;
    var ecommerceQty;
    var creditQty;
    var cmsQty;

    var pageRes;
    var contentRes;
    var blogRes;
    var analyticsRes;
    var adsenseRes;
    var socialMediaRes;
    var hostRes;
    var bookingRes;
    var domainRes;
    var liveChatRes;
    var ecommerceRes;
    var creditRes;
    var ecommerceMthly;
    var cmsRes;

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
    if (document.getElementById("adsenseSupport").value == "Yes") {
        adsenseQty = 1;
    } else {
        adsenseQty = 0;
    }
    socialMediaQty = (document.pricingcalc.txtSocialMedia.value);
    if (document.getElementById("hostSupport").value == "Yes") {
        hostQty = 1;
    } else {
        hostQty = 0;
    }
    if (document.getElementById("bookingSupport").value == "Yes") {
        bookingQty = 1;
    } else {
        bookingQty = 0;
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
    if (document.getElementById('ecommerceSupport').value == "Yes") {
        ecommerceQty = 1;
        ecommerceMthly = 30;
    }
    else {
        ecommerceQty = 0;
        ecommerceMthly = 0;
    }
    if (document.getElementById("creditSupport").value == "Yes") {
        creditQty = 1;
    } else {
        creditQty = 0;
    }
    if (document.getElementById("cmsSupport").value == "Yes") {
        cmsQty = 1;
    } else {
        cmsQty = 0;
    }


    if (document.getElementById("cmsSupport") == "Yes" && (document.getElementById("hostSupport") == "Yes"))  {
        cmsCost = 2.00;
    }

    pageRes = (pageCost * pageQty) + (1.5 * pageQty);
    contentRes = contentCost * contentQty;
    blogRes = blogCost * blogQty;
    analyticsRes = analyticsCost * analyticsQty;
    adsenseRes = adsenseCost * adsenseQty;
    socialMediaRes = socialMediaCost * socialMediaQty;
    hostRes = hostCost * hostQty;
    bookingRes = bookingCost * bookingQty;
    domainRes = domainFee * domainQty;
    liveChatRes = liveChatcost * livechatQty;
    ecommerceRes = ecommerceCost * ecommerceQty;
    creditRes = creditDisc * creditQty;
    cmsRes = cmsCost * cmsQty;
    



    initRes = websiteCost + pageRes + contentRes + blogRes + analyticsRes + adsenseRes
                + socialMediaRes + hostRes + bookingRes + liveChatRes + ecommerceRes + cmsRes + domainRes - creditRes;
    resMonthly = hostRes + bookingRes + + cmsRes + ecommerceMthly;
    resYearly = resMonthly * 12 - (resMonthly*12*0.15);
    deposit = initRes / 2;

    document.getElementById("initResult").innerHTML = "Full Quote: £ " + initRes + " + ";
    document.getElementById("resMonthly").innerHTML = "Monthly £ " + resMonthly + " or ";
    document.getElementById("resYearly").innerHTML = "Yearly: £ " + resYearly;
    document.getElementById("deposit").innerHTML = "Deposit: £ " + deposit;
}