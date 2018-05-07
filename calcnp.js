/* Introduction of the app */
console.log("Calculates net pay:");
//console.log("Please input your gross pay");

// declaring the user's gross salary
grossPay =20000000;

// output of gross salary
console.log("Yo gross pay is " + grossPay + "shs");

// function to calculate Nssf
function getNssf(grossPay) {
    gp = grossPay;
    // calculating Nssf contributions
    empnssf = 0.05 * gp;
    conssf = 0.1 * gp;
    tnssf = empnssf + conssf;

    // output of Nssf contribution and total Nssf got
    console.log("Yo Nssf contribution is " + empnssf + "shs");
    console.log("Yo total Nssf is " + tnssf + "shs");
    return empnssf;
}

// function to calculate PAYE to pay
function getPaye(grossPay) {
    gp = grossPay;  // assign gross pay value to function variable
    paye = 0;   // initialise PAYE value
    fl = 235000;    // first limit
    sl = 335000;    // second limit
    tl = 410000;    // third limit
    vl = 10000000;    // fourth limit
    m1 = 10000; // maximum tax payable first bracket
    m2 = 25000; // maximum tax payable second bracket

    // first tax bracket
    if (gp <= 235000)
    {
        paye = 0;
    }
    
    // second tax bracket
    else if ((gp > fl) && (gp < sl)) {
        // calculating first increment
        inc = gp - fl;
        // calculating paye of second bracket
        paye = 0.1 * inc;

        // ensuring maximum pay is 10000shs
        if (paye > m1)
        {
            paye = m1;
        }
    } 

    // third tax bracket
    else if ((gp > sl) && (gp < tl)) {
        // calculating second increment
        inc2 = gp - sl;
        // calculating paye of third bracket
        paye = (0.2 * inc2) + m1;

        // ensuring maximum pay is 25000shs
        if (paye > m2)
        {
            paye = m2;
        }
    }

    //final tax bracket
    else 
    {
        // calculating third increment
        inc3 = gp - tl;
        // calculating paye of third bracket
        paye = (0.3 * inc3) + m2;

        // for those earning above 10 million
        if (gp > vl)
        {
            // calculating final increment
            inc4 = gp - vl;
            paye += (0.1 * inc4) ;
        }
    }
    // output for Paye to be paid
    console.log("Yo Paye is " + paye + "shs");
    return paye;
}

// declaring netpay
function netPay(grossPay) {
    gp = grossPay;

    // incorporating the two functions of getting Nssf & Paye
    np = gp - getNssf(grossPay) - getPaye(grossPay);
    console.log("Yo net pay is " + np + "shs");
}

// using netpay function
     netPay(grossPay);