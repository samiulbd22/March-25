if (typeof jQuery === 'undefined') {
    throw new Error('Oh NO. requires jQuery')
}
+function ($){
    'use strict'

    var DataKey = "Halcyon";
    var Default = {
        resetHeight : true
    };
    var Selector = {
        wrapper : ".wrapper",
        contentWrapper : ".content-wrapper",
        fixed : ".fixed"
    }
    var ClassName = {
        fixed : ".fixed"
    }
    var Layout = function (options){
        this.options = options;
        this.bindedResize = false;
        this.activate();
    }
    Layout.prototype.activate = function (){
        this.fix();
        if(this.options.resetHeight){
            $('body,html, '+Selector.wrapper).css({
                'height' : 'auto',
                'min-height' : '100%'
            })
        }
        if(!this.bindedResize){
            $(window).resize(function(){
                this.fix();
            }.bind(this))
            this.bindedResize = true;
        }
    }
    Layout.prototype.fix = function (){
        var windowHeight = $(window).height();
        if($('body').hasClass(ClassName.fixed)){
            $(Selector.contentWrapper).css('min-height',windowHeight)
        }else{
            var postSetHeight;
            if(windowHeight >= 0 ){
                $(Selector.contentWrapper).css('min-height',windowHeight);
                postSetHeight = windowHeight;
            }else{
                $(Selector.contentWrapper).css('min-height',0);
                postSetHeight = 0;
            }
        }
    }
    function Plugin(option){
        return this.each(function(){
            var $this = $(this);
            var data = $this.data(DataKey);
            if(!data){
                var options = $.extend({}, Default,$this.data(),typeof option === 'object' && option)
                $this.data(DataKey,(data = new Layout(options)))
            }
            if(typeof option == 'string'){
                if(typeof data[option] == 'undefined'){
                    throw new Error("No mathod name "+option)
                }
                data[option]();
            }
        })
    }
    $(window).on('load',function (){
        Plugin.call($('body'))
    });
}(jQuery)

const members = {
    khalaBill       :500,
    netBill         :140,
    serviceBill     :20,
    othersBill      :150,
    runningMonth    :"March-25",
    previousMonth   :"February-25", // new addDecember
    upComingMonth   :"April 1,2025",
    runningMealRate :74,

    "01814843266":{
        name:"Istiaq Ahmad Udoy",
        
        // pre-previous month list
        post_payable        :2220,
        previous_paid       :4000,
        previous_dining_cost:1736,
        payment             :{"07/03/25-Cash":5500},
        // running month {"01/07/24-Cash":500}
        stay_cost       :2200,
        garage_cost     :0,
        running_payable :2966,
        running_paid    :5500,
        running_meal    :32,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01922362569":{
        name:"Md Moniruzzaman",
        
        // pre-previous month list
        post_payable        :2631,
        previous_paid       :3900,
        previous_dining_cost:1456,
        payment             :{"02/03/25-Cash":500,"10/03/25-Cash":2000,"14/03/25-DBBL":500,
			      "15/03/25-DBBL":500,"18/03/25-DBBL":500,
			      "22/03/25-DBBL":500,"26/03/25-DBBL":500,"29/03/25-DBBL":500},
        // running month
        stay_cost       :2000,
        garage_cost     :0,
        running_payable :2997,
        running_paid    :5500,
        running_meal    :48,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01797816501":{
        name:"Hh Habib",
        join:"new",
        // pre-previous month list
        post_payable        :2800,
        previous_paid       :2000,
        previous_dining_cost:0,
        payment             :{"01/03/25-Cash":800,"06/03/25-Cash":4500,"13/03/25-Cash":1000},
        // running month
        stay_cost       :2800,
        garage_cost     :0,
        running_payable :3600,
        running_paid    :6300,
        running_meal    :40,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01780608997":{
        name:"unknown",
        
        // pre-previous month list
        post_payable        :0,
        previous_paid       :0,
        previous_dining_cost:0,
        payment             :undefined,
        // running month
        stay_cost       :0,
        garage_cost     :0,
        running_payable :0,
        running_paid    :0,
        running_meal    :0,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01644377150":{
        name:"Aminul Islam Dorjoy",
        // join:"new",
        // pre-previous month list
        post_payable        :3238,
        previous_paid       :5000,
        previous_dining_cost:2800,
        payment             :{"01/03/25-Cash":1000,"14/03/25-Cash":3000},
        // running month
        stay_cost       :2400,
        garage_cost     :0,
        running_payable :4248,
        running_paid    :4000,
        running_meal    :0,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01537664564":{
        name:"Asaduzzaman Ovi",
        // join:"new" 01/02/25,
        // pre-previous month list
        post_payable        :5000,
        previous_paid       :7500,
        previous_dining_cost:2800,
        payment             :{"04/03/25-Cash":3000,"10/03/25-Cash":1110,"15/03/25-Cash":2000},
        // running month
        stay_cost       :3000,
        garage_cost     :0,
        running_payable :4110,
        running_paid    :6110,
        running_meal    :30,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01714443406":{
        name:"Khondokar Emon Ahmed",
        
        // pre-previous month list
        post_payable        :4395,
        previous_paid       :5500,
        previous_dining_cost:1680,
        payment             :{"05/03/25-Cash":3000,"22/03/25-bKash":2000},
        // running month
        stay_cost       :3000,
        garage_cost     :0,
        running_payable :4385,
        running_paid    :5000,
        running_meal    :25,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01834648400":{
        name:"Rafiqul Islam Piyas",
         join:"new",
        // pre-previous month list
        post_payable        :4400,
        previous_paid       :2000,
        previous_dining_cost:560,
        payment             :undefined,
        // running month
        stay_cost       :2500,
        garage_cost     :0,
        running_payable :5460,
        running_paid    :0,
        running_meal    :0,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
    "01874857679":{
        name:"Syful Islam",
         join:"new",
        // pre-previous month list
        post_payable        :3000,
        previous_paid       :500,
        previous_dining_cost:0,
        payment             :{"02/03/25-Cash":500,"04/03/25-bKash":3000,"15/03/25-Cash":4000},
        // running month
        stay_cost       :3000,
        garage_cost     :0,
        running_payable :5500,
        running_paid    :7500,
        running_meal    :31,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
	"01821245430":{
        name:"Md Rubel Hossain",
        join:"new",
        
        // pre-previous month list
        post_payable        :-640,
        previous_paid       :3000,
        previous_dining_cost:3136,
        payment             :{"03/03/25-Cash":1000,"11/03/25-Cash":2000,"12/03/25-Cash":500},
        // running month
        stay_cost       :0,
        garage_cost     :200,
        running_payable :-304,
        running_paid    :3500,
        running_meal    :51,
        // method calling
        preMonth,
        runningDiningCost,
        runningMonth,
        totalPayable
    },
}
const KhalaBill     = members.khalaBill;
const netBill       = members.netBill;
const serviceBill   = members.serviceBill;
const otherBill     = members.othersBill;   
const diningRate    = members.runningMealRate;
function joinNew(){
   
    return (KhalaBill + netBill + serviceBill + otherBill)
}
function preMonth(){
    let substractPreMonth = 0;
    let addPreMonth = 0;
    let preGetForDining = 0;
    if(this.previous_paid > this.post_payable){
        preGetForDining = this.previous_paid -this.post_payable;
        if (preGetForDining > this.previous_dining_cost) {
            substractPreMonth = preGetForDining - this.previous_dining_cost;
        }else{
            addPreMonth = this.previous_dining_cost - preGetForDining;
        }
    }
    else{
        addPreMonth = (this.post_payable - this.previous_paid) + this.previous_dining_cost
    }
    return { substractPreMonth,addPreMonth,preGetForDining}
} 
function runningDiningCost(){
    let diningcost = 0;
    if(this.running_meal > 0){
        return this.running_meal * diningRate;
    }else{
        return diningcost;
    }
}
function runningMonth(){
    let diningAdd = 0;
    let diningDue = 0;
    let remainDining = 0;
    if(this.running_paid > this.running_payable){
        diningAdd = this.running_paid - this.running_payable;
        if(diningAdd > this.runningDiningCost()){
            remainDining = diningAdd - this.runningDiningCost();
        }else{
            diningDue = this.runningDiningCost() - diningAdd;
        }
    }else{
        diningDue = (this.running_payable - this.running_paid) + this.runningDiningCost();
    }
    return {diningAdd,diningDue,remainDining}
}
function totalPayable(){ 

    return (this.stay_cost + this.garage_cost + KhalaBill + netBill + serviceBill + otherBill + this.preMonth().addPreMonth - this.preMonth().substractPreMonth);
}

//clock Schedule
function dateClock(){
    const startDate     = new Date();
    const endDate       = new Date(members.upComingMonth);
    const day           = startDate.getDate();
    const month         = startDate.getMonth();
    const year          = startDate.getFullYear();
    const myMonth       =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    document.getElementById("timeMe").innerHTML = `<span class="timer"><div class="timer-content p-f">${day}</div></span>
                                                    <span class="timer"><div class="timer-content p-f">${myMonth[month]}</div></span>
                                                    <span class="timer"><div class="timer-content p-f">${year}</div></span>`;
    if (startDate > endDate){
        document.getElementById("timeMe").innerHTML = `<span class="clock-data">00</span><span class="clock-data">00</span><span class="clock-data">00</span>`;
    } 
}
dateClock();
//clock Schedule
let page1 = document.getElementById("page-1");
let page2 = document.getElementById("page-2");
let page3 = document.getElementById("page-3");
let page4 = document.getElementById("page-4");
let page5 = document.getElementById("page-5");
let page6 = document.getElementById("page-6");
let page7 = document.getElementById("page-7");
let page8 = document.getElementById("page-8");
let paymentChecker = document.getElementById("paymentChecker");
let paymentPageOff = document.getElementById("paymentBtnOff");
document.getElementById("user-btn").style.opacity = 0;
let submitBtn = document.getElementById("submitBtn");
let memberN = document.getElementById("memberNumber");
/*pagination*/
let nextBtn1 = document.getElementById("next-1");

let backBtn1 = document.getElementById("back-1");
let nextBtn2 = document.getElementById("next-2");

let backBtn2 = document.getElementById("back-2");
let nextBtn3 = document.getElementById("next-3");

let backBtn3 = document.getElementById("back-3");
let nextBtn4 = document.getElementById("next-4");

let backBtn4 = document.getElementById("back-4");
let nextBtn5 = document.getElementById("next-5");

let backBtn5 = document.getElementById("back-5");

/*pagination*/ //paymentChecker
/*page active and deactive*/
submitBtn.addEventListener('click',secondPageOn);
function secondPageOn(){
    page1.classList.add("hide-me");
    page1.classList.remove("show-me");
    page2.classList.add("show-me");
    page2.classList.remove("hide-me");
    page4.classList.remove("show-me");
    page4.classList.add("hide-me");
 }
 nextBtn1.addEventListener('click',fourthPageOn)
 function fourthPageOn(){
    page2.classList.add("hide-me");
    page2.classList.remove("show-me");
    page4.classList.add("show-me");
    page4.classList.remove("hide-me");
    page5.classList.remove("show-me");
    page5.classList.add("hide-me");
 }
 backBtn1.addEventListener('click',secondPageOn);
 nextBtn2.addEventListener('click',fifthPageOn);
 function fifthPageOn(){
    page4.classList.remove("show-me");
    page4.classList.add("hide-me");
    page5.classList.add("show-me");
    page5.classList.remove("hide-me");
    page6.classList.remove("show-me");
    page6.classList.add("hide-me");
 }
 backBtn2.addEventListener('click',fourthPageOn);
 nextBtn3.addEventListener('click',sixthPageOn);
 function sixthPageOn(){
    page5.classList.remove("show-me");
    page5.classList.add("hide-me");
    page6.classList.add("show-me");
    page6.classList.remove("hide-me");
    page7.classList.remove("show-me");
    page7.classList.add("hide-me");
    
 }
 backBtn3.addEventListener('click',fifthPageOn);
 nextBtn4.addEventListener('click',seventhPageOn);
 function seventhPageOn(){
    page6.classList.remove("show-me");
    page6.classList.add("hide-me");
    page7.classList.add("show-me");
    page7.classList.remove("hide-me");
    page8.classList.remove("show-me");
    page8.classList.add("hide-me")
 }
 backBtn4.addEventListener('click',sixthPageOn);
 nextBtn5.addEventListener('click',eighthPageOn)
 function eighthPageOn(){
    page7.classList.remove("show-me");
    page7.classList.add("hide-me");
    page8.classList.add("show-me");
    page8.classList.remove("hide-me");
    
 }
 backBtn5.addEventListener('click',seventhPageOn);
 
/*page active and deactive*/
/* payment page on */
paymentChecker.addEventListener('click',paymentPageOn);
function paymentPageOn(){
    page3.classList.add("show-me");
    page2.classList.remove("show-me");
    page2.classList.add("hide-me");
    page3.classList.remove("hide-me");
}
paymentPageOff.addEventListener('click',paymentPageClosed);
function paymentPageClosed(){
    page2.classList.add("show-me");
    page3.classList.remove("show-me");
    page3.classList.add("hide-me");
    page2.classList.remove("hide-me");
}
/* payment page on */
/*Id selector*/
let memberName = document.getElementById("memberName");
let runningMonthPayment = document.getElementById("runningMonthPayment");
let runningMonthOfOayment = document.getElementById("runningMonthOfOayment");
let paymentList = document.getElementById("paymentList");
let paidTotal = document.getElementById("paidTotal");
let detailMonth = document.getElementById("detailMonth");
let detailsItem = document.getElementById("detailsItem");
let detailsItemTotal = document.getElementById("detailsItemTotal");
let previousMonth = document.getElementById("previousMonth");
let previousMonthName = document.getElementById("previousMonthName");
let statusBar = document.getElementById("status");
let  runningMonthName = document.getElementById('runningMonthName');
let diningCostList = document.getElementById('diningCostList');
let runningDiningStatus = document.getElementById('runningDiningStatus');
let memberDiningList = document.getElementById('memberDiningList');
let costTotalCheck = document.getElementById('costTotalCheck');
let totalPayment = document.getElementById("totalPayment");
let payMeBoss = document.getElementById("payMeBoss");
let diningAdd = document.getElementById("diningAdd");
let remainingDueStill = document.getElementById("remainingDueStill");
let titleName = document.getElementById("titleName").innerText =`${members.runningMonth}`;
/*Id selector*/
memberN.addEventListener("keyup",opener);
let memberNumber;
function opener(){
    memberNumber = memberN.value;
//runningMonthPayment
    if(memberNumber.length === 11){
        if( memberNumber === "01834648400" || memberNumber === "01814843266" 
         || memberNumber === "01922362569" || memberNumber === "01797816501"
         || memberNumber === "01780608997" || memberNumber === "01644377150"
         || memberNumber === "01537664564" || memberNumber === "01714443406"||memberNumber==="01874857679" || memberNumber === "01821245430"){
            document.getElementById("user-btn").style.opacity = 1;
            document.getElementById("submitBtn").style.display = 'inline-block';
            /*frontPage*///runningMonthPayment
            memberName.innerHTML = `<span">${members[memberNumber].name}</span>`;
            runningMonthPayment.innerHTML = `<tr><td>${members.runningMonth}</td><td style="text-align: center;"><b>${members[memberNumber].join==="new"?members[memberNumber].totalPayable()-joinNew():members[memberNumber].totalPayable()}</b>&nbsp;<span>TK</span></td></tr>`;
            /*frontPage*/
            /*payment list*/
            runningMonthOfOayment.innerHTML = `<span">${members.runningMonth}</span>`;
            payMeBoss.innerHTML = `<b>${members[memberNumber].join==="new"?members[memberNumber].totalPayable()-joinNew():members[memberNumber].totalPayable()}</b>&nbsp;<span>tk</span>`;
            const payment = members[memberNumber].payment;
            if(payment === undefined){
                paymentList.innerHTML = `<tr><td colspan="3" style="color:'red'">your payment not yet added</td></tr>`;
            }else{
                let paidMe ='';
                let paidMeSum = 0;
                for(let pay in payment){
                    paidMe +=`<tr class="data-center"><td>${pay.slice(0,8)}</td><td>${pay.slice(9)}</td><td>${payment[pay]}</td></tr>`;
                    paidMeSum += payment[pay];
                }
                paymentList.innerHTML = paidMe;
                paidTotal.innerHTML = `<th>Total Paid</th><td>:</td><td><b>${paidMeSum}</b></td>`;
            }
            diningAdd.innerText = `${members[memberNumber].runningMonth().diningAdd}`;
            remainingDueStill.innerText = `${members[memberNumber].runningMonth().diningDue}`;
            /*payment list*///detailMonth
            /* detail payment */
            detailMonth.innerHTML = `<span">${members.runningMonth}</span>`;
            detailsItem.innerHTML = `
            <tr>
                <td>Stay Cost</td>
                <td>=</td>
                <td>${members[memberNumber].stay_cost}</td>
            </tr>
            <tr>
                <td>Khala's bill</td>
                <td>=</td>
                <td>${members[memberNumber].join==="new"? "0" : KhalaBill }</td>
            </tr>
            <tr>
                <td>Net's Bill</td>
                <td>=</td>
                <td>${members[memberNumber].join==="new"? "0" : netBill }</td>
            </tr>
            <tr>
                <td>Service Cost</td>
                <td>=</td>
                <td>${members[memberNumber].join==="new"? "0" : serviceBill }</td>
            </tr>
            <tr>
                <td>Other Cost</td>
                <td>=</td>
                <td>${members[memberNumber].join==="new"? "0" : otherBill }</td>
            </tr>
            <tr id="substruct">
                <td>Get from Dining </td>
                <td>=</td>
                <td>${members[memberNumber].preMonth().substractPreMonth}</td>
            </tr>
            <tr id="add">
                <td>${members[memberNumber].join==="new"?"Due in Advance":"Due in Dining"}</td>
                <td>=</td>
                <td>${members[memberNumber].preMonth().addPreMonth}</td>
            </tr>
            <tr>
                <td>Garage & Extra</td>
                <td>=</td>
                <td>${members[memberNumber].garage_cost}</td>
            </tr>`;
            if(members[memberNumber].preMonth().substractPreMonth > 0){
                document.getElementById('substruct').style.color = 'red';
            }else{
                document.getElementById('add').style.color = 'red';
            }
            detailsItemTotal.innerHTML = `<tr id="bg-pink"><th colspan="2">Total</th><th>${members[memberNumber].join==="new"?members[memberNumber].totalPayable()-joinNew():members[memberNumber].totalPayable()}</th></tr>`
            /* detail payment */
            /*previousMonth*/
            previousMonthName.innerHTML = `<span>${members.previousMonth}</span>`
            previousMonth.innerHTML = `<tr>
                                            <td>Payable</td>
                                            <td>=</td>
                                            <td>${members[memberNumber].post_payable}</td>
                                        </tr>
                                        <tr>
                                            <td>paid</td>
                                            <td>=</td>
                                            <td>${members[memberNumber].previous_paid}</td>
                                        </tr>
                                        <tr>
                                            <td>Add dining</td>
                                            <td>=</td>
                                            <td>${members[memberNumber].preMonth().preGetForDining}</td>
                                        </tr>
                                        <tr>
                                            <td>dining cost</td>
                                            <td>=</td>
                                            <td>${members[memberNumber].previous_dining_cost}</td>
                                        </tr>
                                        <tr id="get">
                                            <td>dining get</td>
                                            <td>=</td>
                                            <td><b>${members[memberNumber].preMonth().substractPreMonth}</b></td>
                                        </tr>
                                        <tr id="due">
                                            <td>${members[memberNumber].join==="new"?"Due in Advance":"Due in Dining"}</td>
                                            <td>=</td>
                                            <td><b>${members[memberNumber].preMonth().addPreMonth}</b></td>
                                        </tr>`;
            if(members[memberNumber].preMonth().substractPreMonth > 0){
                document.getElementById("get").style.color = "green";
                statusBar.innerHTML = `<tr id="bg-pink"><th>Status</th><th>Get</th><th>${members[memberNumber].preMonth().substractPreMonth}</th></tr>`;
            }else{
                document.getElementById('due').style.color = "red";
                statusBar.innerHTML = `<tr id="bg-pink"><th>Status</th><th>Due</th><th>${members[memberNumber].preMonth().addPreMonth}</th></tr>`
            }
            /*previousMonth*/
            /*running month*/
            runningMonthName.innerHTML =`<span>${members.runningMonth}</span>`;
            diningCostList.innerHTML = `<tr id="bg-grey">
                                            <td></td>
                                            <td>Meals</td>
                                            <td>Rate</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Running</td>
                                            <td>${members[memberNumber].running_meal}</td>
                                            <td>${diningRate}</td>
                                            <td>${members[memberNumber].runningDiningCost()}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">paid for dining</td>
                                            <td>=</td>
                                            <td>${members[memberNumber].runningMonth().diningAdd}</td>
                                        </tr>
                                        <tr id="getGreen">
                                            <td colspan="2">get from dining</td>
                                            <td>=</td>
                                            <td>${members[memberNumber].runningMonth().remainDining}</td>
                                        </tr>
                                        <tr id="dueRed">
                                            <td colspan="2">due in dining</td>
                                            <td>=</td>
                                            <td>${members[memberNumber].runningMonth().diningDue}</td>
                                        </tr>`;
            if( members[memberNumber].runningMonth().remainDining > 0){
                runningDiningStatus.innerHTML = `<tr id="bg-pink"><th colspan="2">Status</th><th>Get</th><th>${members[memberNumber].runningMonth().remainDining}</th></tr>`;
                document.getElementById('getGreen').style.color = 'green';
            }else{
                runningDiningStatus.innerHTML = `<tr id="bg-pink"><th colspan="2">Status</th><th>Due</th><th>${members[memberNumber].runningMonth().diningDue}</th></tr>`;
                document.getElementById('dueRed').style.color = 'red';
            }
            /*running month*/ memberDiningList
            /*memberDiningList*/
            memberDiningList.innerHTML = `<tr>
                                                <td>${members["01814843266"].name}</td>
                                                <td>${members["01814843266"].runningDiningCost()}</td>
                                                <td>${members["01814843266"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01814843266"].runningMonth().remainDining}</td>
                                                <td>${members["01814843266"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <td>${members["01922362569"].name}</td>
                                                <td>${members["01922362569"].runningDiningCost()}</td>
                                                <td>${members["01922362569"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01922362569"].runningMonth().remainDining}</td>
                                                <td>${members["01922362569"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <td>${members["01797816501"].name}</td>
                                                <td>${members["01797816501"].runningDiningCost()}</td>
                                                <td>${members["01797816501"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01797816501"].runningMonth().remainDining}</td>
                                                <td>${members["01797816501"].runningMonth().diningDue}</td>
                                            </tr>

                                            <tr>
                                                <td>${members["01780608997"].name}</td>
                                                <td>${members["01780608997"].runningDiningCost()}</td>
                                                <td>${members["01780608997"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01780608997"].runningMonth().remainDining}</td>
                                                <td>${members["01780608997"].runningMonth().diningDue}</td>
                                            </tr>
					 
                                            <tr>
                                                <td>${members["01644377150"].name}</td>
                                                <td>${members["01644377150"].runningDiningCost()}</td>
                                                <td>${members["01644377150"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01644377150"].runningMonth().remainDining}</td>
                                                <td>${members["01644377150"].runningMonth().diningDue}</td>
                                            </tr>
						
                                            <tr>
                                                <td>${members["01537664564"].name}</td>
                                                <td>${members["01537664564"].runningDiningCost()}</td>
                                                <td>${members["01537664564"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01537664564"].runningMonth().remainDining}</td>
                                                <td>${members["01537664564"].runningMonth().diningDue}</td>
                                            </tr>
						
                                            <tr>
                                                <td>${members["01714443406"].name}</td>
                                                <td>${members["01714443406"].runningDiningCost()}</td>
                                                <td>${members["01714443406"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01714443406"].runningMonth().remainDining}</td>
                                                <td>${members["01714443406"].runningMonth().diningDue}</td>
                                            </tr>
                                           
                                            <tr>
                                                <td>${members["01874857679"].name}</td>
                                                <td>${members["01874857679"].runningDiningCost()}</td>
                                                <td>${members["01874857679"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01874857679"].runningMonth().remainDining}</td>
                                                <td>${members["01874857679"].runningMonth().diningDue}</td>
                                            </tr>
                                            `;
						if(memberNumber==="01821245430"){
                                                memberDiningList.appendChild(document.createElement('tr')).innerHTML=`<td>${members["01821245430"].name}</td>
                                                <td>${members["01821245430"].runningDiningCost()}</td>
                                                <td>${members["01821245430"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01821245430"].runningMonth().remainDining}</td>
                                                <td>${members["01821245430"].runningMonth().diningDue}</td>`;
                                            }else if(memberNumber==="01834648400"){
						memberDiningList.appendChild(document.createElement('tr')).innerHTML=`<td>${members["01834648400"].name}</td>
                                                <td>${members["01834648400"].runningDiningCost()}</td>
                                                <td>${members["01834648400"].runningMonth().diningAdd}</td>
                                                <td class="getMeals">${members["01834648400"].runningMonth().remainDining}</td>
                                                <td>${members["01834648400"].runningMonth().diningDue}</td>`;	
					    };
            let colorChanged = document.getElementsByClassName('getMeals');
        
            for (let nd = 0; nd < colorChanged.length; nd++) {
                const element = parseInt(colorChanged[nd].textContent);
                if(element <= 0){
                    colorChanged[nd].parentNode.style.color = "red";
                }else{
                    colorChanged[nd].parentNode.style.color = "green";
                }
            }
            /*memberDiningList*/
            nextBtn5.style.display = 'none'
         }else{
            if(memberNumber === '01710430501'){
                page8.style.display = 'flex';
                page7.classList.remove("show-me");
                page7.classList.add("hide-me");
                page1.classList.remove("show-me");
                page1.classList.add("hide-me");
                backBtn5.parentNode.parentNode.style.display = 'none'
                costTotalCheck.innerHTML = `<tr>
                                                <th>${members["01814843266"].name}</th>
                                                <td class="payable">${members["01814843266"].totalPayable()}</td>
                                                <td class="paid-me">${members["01814843266"].running_paid}</td>
                                                <td class="dining-me">${members["01814843266"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01814843266"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01922362569"].name}</th>
                                                <td class="payable">${members["01922362569"].totalPayable()}</td>
                                                <td class="paid-me">${members["01922362569"].running_paid}</td>
                                                <td class="dining-me">${members["01922362569"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01922362569"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01797816501"].name}</th>
                                                <td class="payable">${members["01797816501"].totalPayable()}</td>
                                                <td class="paid-me">${members["01797816501"].running_paid}</td>
                                                <td class="dining-me">${members["01797816501"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01797816501"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01780608997"].name}</th>
                                                <td class="payable">${members["01780608997"].totalPayable()}</td>
                                                <td class="paid-me">${members["01780608997"].running_paid}</td>
                                                <td class="dining-me">${members["01780608997"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01780608997"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01644377150"].name}</th>
                                                <td class="payable">${members["01644377150"].totalPayable()}</td>
                                                <td class="paid-me">${members["01644377150"].running_paid}</td>
                                                <td class="dining-me">${members["01644377150"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01644377150"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01537664564"].name}</th>
                                                <td class="payable">${members["01537664564"].totalPayable()}</td>
                                                <td class="paid-me">${members["01537664564"].running_paid}</td>
                                                <td class="dining-me">${members["01537664564"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01537664564"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01714443406"].name}</th>
                                                <td class="payable">${members["01714443406"].totalPayable()}</td>
                                                <td class="paid-me">${members["01714443406"].running_paid}</td>
                                                <td class="dining-me">${members["01714443406"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01714443406"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01834648400"].name}</th>
                                                <td class="payable">${members["01834648400"].totalPayable()}</td>
                                                <td class="paid-me">${members["01834648400"].running_paid}</td>
                                                <td class="dining-me">${members["01834648400"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01834648400"].runningMonth().diningDue}</td>
                                            </tr>
                                            <tr>
                                                <th>${members["01874857679"].name}</th>
                                                <td class="payable">${members["01874857679"].totalPayable()}</td>
                                                <td class="paid-me">${members["01874857679"].running_paid}</td>
                                                <td class="dining-me">${members["01874857679"].runningDiningCost()}</td>
                                                <td class="due-me">${members["01874857679"].runningMonth().diningDue}</td>
                                            </tr>
                                            `;
                
                // let sumTotal;
                let payable = document.getElementsByClassName('payable');
                let paidMe = document.getElementsByClassName("paid-me");
                let diningMe = document.getElementsByClassName("dining-me");
                let dueMe = document.getElementsByClassName("due-me");
                totalPayment.innerHTML = `<tr id="bg-grey">
                                            <th>Total</th>
                                            <td>${sumTotal(payable)}</td>
                                            <td>${sumTotal(paidMe)}</td>
                                            <td>${sumTotal(diningMe)}</td>
                                            <td>${sumTotal(dueMe)}</td>
                                        </tr>`;
                
            }
         }
        
    }

}

function sumTotal(a){
    let ele = a;
    let sum = 0;
    for(let i=0;i<ele.length;i++){
        const ab = parseInt(ele[i].textContent)
        sum += ab;
    }
    return sum;
}
