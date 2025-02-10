function openPage(page) {
    document.getElementById('contentFrame').src = page;
}

// Atm
function atmWithdrawal() {
    let pin = document.getElementById('pin').value;
    let enteredPin = document.getElementById('enteredPin').value;
    let balance = parseFloat(document.getElementById('balance').value);
    let amount = parseFloat(document.getElementById('amount').value);
    let result = document.getElementById('result');
    
    if (enteredPin !== pin) {
        result.textContent = "Incorrect PIN";
        return;
    }
    if (amount > balance) {
        result.textContent = "Insufficient Funds";
        return;
    }
    if (amount % 100 !== 0) {
        result.textContent = "Enter amount in multiples of 100";
        return;
    }
    
    result.textContent = `Withdrawal successful! Remaining balance: $${balance - amount}`;
}


// shopping
function calculateFinalAmount() {
    let orderAmount = parseFloat(document.getElementById('orderAmount').value);
    let discount = 0;
    let shipping = 0;
    
    if (orderAmount > 1000) {
        discount = 0.2;
    } else if (orderAmount >= 500) {
        discount = 0.1;
    }
    
    let discountedPrice = orderAmount - (orderAmount * discount);
    
    if (discountedPrice < 50) {
        shipping = 10;
    }
    
    let finalAmount = discountedPrice + shipping;
    document.getElementById('result').textContent = `Final Payable Amount: $${finalAmount.toFixed(2)}`;
}

// student grading
function calculateGrade() {
    let marks = parseFloat(document.getElementById('marks').value);
    let attendance = parseFloat(document.getElementById('attendance').value);
    
    if (isNaN(marks) || isNaN(attendance) || marks < 0 || marks > 100 || attendance < 0 || attendance > 100) {
        document.getElementById('result').textContent = "Please enter valid marks and attendance.";
        return;
    }
    
    if (attendance > 90) {
        marks += 5;
        if (marks > 100) marks = 100; // Ensure max is 100
    }
    
    let grade;
    if (marks >= 90) grade = "A";
    else if (marks >= 80) grade = "B";
    else if (marks >= 70) grade = "C";
    else if (marks >= 60) grade = "D";
    else grade = "F";
    
    document.getElementById('result').textContent = `Final Grade: ${grade}`;
}

// Traffic light
function trafficLightControl() {
    let density = document.getElementById('trafficDensity').value;
    let time;
    
    if (density === "Heavy Traffic") {
        time = 60;
    } else if (density === "Moderate Traffic") {
        time = 40;
    } else {
        time = 20;
    }
    
    document.getElementById('result').textContent = `Green Light Duration: ${time} seconds`;
}

// movie
function calculateTicketPrice() {
    let age = parseInt(document.getElementById('age').value);
    let showTime = document.getElementById('showTime').value;
    
    if (isNaN(age) || !showTime) {
        document.getElementById('result').textContent = "Please enter valid age and show time.";
        return;
    }
    
    let basePrice = 12;
    let hour = parseInt(showTime.split(':')[0]);
    
    if (hour < 17) {
        basePrice *= 0.8; // 20% off for matinee
    }
    if (age > 60) {
        basePrice *= 0.7; // 30% off for seniors
    } else if (age < 12) {
        basePrice *= 0.6; // 40% off for children
    }
    
    document.getElementById('result').textContent = `Final Ticket Price: $${basePrice.toFixed(2)}`;
}

// job eligibility
function isEligibleForJob() {
    let age = parseInt(document.getElementById('age').value);
    let experience = parseInt(document.getElementById('experience').value);
    let qualification = document.getElementById('qualification').value;
    
    if (isNaN(age) || isNaN(experience)) {
        document.getElementById('result').textContent = "Please enter valid details.";
        return;
    }
    
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        document.getElementById('result').textContent = "You are eligible for the job!";
    } else {
        document.getElementById('result').textContent = "Sorry, you do not meet the requirements.";
    }
}

// coupon
function applyCoupon() {
    let orderAmount = parseFloat(document.getElementById('orderAmount').value);
    let couponCode = document.getElementById('couponCode').value;
    
    if (isNaN(orderAmount) || orderAmount < 0) {
        document.getElementById('result').textContent = "Please enter a valid order amount.";
        return;
    }
    
    let discount = 0;
    let shippingCost = 0;
    
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = orderAmount * 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        shippingCost = 0;
    } else if (orderAmount < 50) {
        shippingCost = 10; // Express shipping for low orders
    }
    
    let finalAmount = orderAmount - discount + shippingCost;
    document.getElementById('result').textContent = `Final Price: $${finalAmount.toFixed(2)}`;
}

// gym membership
function choosePlan() {
    let planType = document.getElementById('planType').value;
    let wantsTrainer = document.getElementById('trainer').checked;
    let wantsDietPlan = document.getElementById('diet').checked;
    let bestPlan = "Basic ($20/month)";
    
    if (wantsTrainer && wantsDietPlan) {
        bestPlan = "VIP ($80/month)";
    } else if (wantsTrainer) {
        bestPlan = "Premium ($50/month)";
    } else if (wantsDietPlan) {
        bestPlan = "VIP ($80/month)"; // VIP includes diet plan
    } else {
        bestPlan = planType;
    }
    
    document.getElementById('result').textContent = `Best Plan for You: ${bestPlan}`;
}

// electricity
function calculateBill() {
    let units = parseFloat(document.getElementById('units').value);
    let timeOfDay = document.getElementById('timeOfDay').value;
    
    if (isNaN(units) || units < 0) {
        document.getElementById('result').textContent = "Please enter a valid number of units.";
        return;
    }
    
    let rate = 5;
    if (units > 100) rate = 4;
    if (units > 300) rate = 3;
    
    let totalCost = units * rate;
    
    if (timeOfDay === "Peak") {
        totalCost *= 1.10; // 10% extra charge during peak hours
    }
    
    document.getElementById('result').textContent = `Total Bill: $${totalCost.toFixed(2)}`;
}


// flight
function calculateFlightFare() {
    let baseFare = 300;
    let classType = document.getElementById('classType').value;
    let luggageWeight = parseFloat(document.getElementById('luggageWeight').value) || 0;
    let isStudent = document.getElementById('isStudent').checked;
    let isSenior = document.getElementById('isSenior').checked;
    
    if (classType === "Business") baseFare += 200;
    if (classType === "First") baseFare += 500;
    
    if (luggageWeight > 20) {
        baseFare += Math.ceil((luggageWeight - 20) / 10) * 50;
    }
    
    if (isStudent) baseFare *= 0.85; // 15% discount
    else if (isSenior) baseFare *= 0.90; // 10% discount
    
    document.getElementById('result').textContent = `Final Ticket Price: $${baseFare.toFixed(2)}`;
}
