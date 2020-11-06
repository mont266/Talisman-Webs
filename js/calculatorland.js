function calculator() {

    var websiteCost = 50.0;
    var analyticsCost = 25.00;
    var adsenseCost = 25.00;
    var hostCost = 6.00;
    var domainFee = 10.00;
    var liveChatcost = 5.00;
    var creditDisc = 5.00;
    var cmsCost = 4.00;

    var analyticsQty;
    var adsenseQty;
    var hostQty;
    var domainQty;
    var livechatQty;
    var creditQty;
    var cmsQty;

    var analyticsRes;
    var adsenseRes;
    var hostRes;
    var domainRes;
    var liveChatRes;
    var creditRes;
    var cmsRes;

    var initRes;
    var resMonthly;
    var resYearly;
    var deposit;

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
    if (document.getElementById("hostSupport").value == "Yes") {
        hostQty = 1;
    } else {
        hostQty = 0;
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

    analyticsRes = analyticsCost * analyticsQty;
    adsenseRes = adsenseCost * adsenseQty;
    hostRes = hostCost * hostQty;
    domainRes = domainFee * domainQty;
    liveChatRes = liveChatcost * livechatQty;
    creditRes = creditDisc * creditQty;
    cmsRes = cmsCost * cmsQty;
    



    initRes = websiteCost + analyticsRes + adsenseRes + hostRes + liveChatRes + cmsRes + domainRes - creditRes;
    resMonthly = hostRes + cmsRes;
    resYearly = resMonthly * 12 - (resMonthly*12*0.15);
    deposit = initRes / 2;

    document.getElementById("initResult").innerHTML = "Full Quote: £ " + initRes + " + ";
    document.getElementById("resMonthly").innerHTML = "Monthly £ " + resMonthly + " or ";
    document.getElementById("resYearly").innerHTML = "Yearly: £ " + resYearly;
    document.getElementById("deposit").innerHTML = "Deposit: £ " + deposit;
}