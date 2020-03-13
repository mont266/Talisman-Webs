function calculator() {

    var websiteCost = 180.00;
    var pageCost = 6.00;
    var contentCost = 60.00;
    var blogCost = 60.00;
    var analyticsCost = 25.00;
    var adsenseCost = 25.00;
    var socialMediaCost = 25.00;
    var hostCost = 7.00;
    var bookingCost = 20.00;
    var domainFee = 10.00;
    var creditDisc = 5.00;

    var websiteQty;
    var pageQty;
    var contentQty;
    var blogQty;
    var analyticsQty;
    var adsenseQty;
    var socialMediaQty;
    var hostQty;
    var bookingQty;
    var domainQty;
    var creditQty;

    var websiteRes;
    var pageRes;
    var contentRes;
    var blogRes;
    var analyticsRes;
    var adsenseRes;
    var socialMediaRes;
    var hostRes;
    var bookingRes;
    var domainRes;
    var creditRes;

    var initRes;
    var resMonthly;
    var resYearly;
    var deposit;

    websiteQty = (document.pricingcalc.txtWebsite.value);
    pageQty = (document.pricingcalc.txtPages.value);
    contentQty = (document.pricingcalc.txtContent.value);
    blogQty = (document.pricingcalc.txtBlog.value);
    analyticsQty = (document.pricingcalc.txtAnalytics.value);
    adsenseQty = (document.pricingcalc.txtAdsense.value);
    socialMediaQty = (document.pricingcalc.txtSocialMedia.value);
    hostQty = (document.pricingcalc.txtHost.value);
    bookingQty = (document.pricingcalc.txtBooking.value);
    domainQty = (document.pricingcalc.txtDomain.value);
    creditQty = (document.pricingcalc.txtCredit.value);


    websiteRes = websiteCost * websiteQty;
    pageRes = (pageCost * pageQty) + (1.5 * pageQty);
    contentRes = contentCost * contentQty;
    blogRes = blogCost * blogQty;
    analyticsRes = analyticsCost * analyticsQty;
    adsenseRes = adsenseCost * adsenseQty;
    socialMediaRes = socialMediaCost * socialMediaQty;
    hostRes = hostCost * hostQty;
    bookingRes = bookingCost * bookingQty;
    domainRes = domainFee * domainQty;
    creditRes = creditDisc * creditQty;



    initRes = websiteRes + pageRes + contentRes + blogRes + analyticsRes + adsenseRes
                + socialMediaRes + hostRes + bookingRes + domainRes - creditRes;
    resMonthly = hostRes + bookingRes;
    resYearly = resMonthly * 12 - (resMonthly*12*0.15);
    deposit = initRes / 2;

    document.getElementById("initResult").innerHTML = "Full Quote: £ " + initRes + " + ";
    document.getElementById("resMonthly").innerHTML = "Monthly £ " + resMonthly + " or ";
    document.getElementById("resYearly").innerHTML = "Yearly: £ " + resYearly;
    document.getElementById("deposit").innerHTML = "Deposit: £ " + deposit;
}