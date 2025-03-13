let base_url ="https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json";
let flag_url ="https://flagsapi.com/US/flat/64.png";

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

let dd1 = document.querySelector("#curr1");
let dd2 = document.querySelector("#curr2");



async function rate(){

    let res = await fetch(base_url);

    let data= await res.json();

    // console.log(data.inr.acs);
    rate =data.inr.acs;
    // console.log(rate);

    return rate;

}

for(let val in countryList){
    
    let newOption = document.createElement("option");
    newOption.innerText=val;
    newOption.value=val;
    if(val==="USD"){
        newOption.selected="selected";
    }
    dd1.append(newOption);
}
for(let val in countryList){
    
    let newOption = document.createElement("option");
    newOption.innerText=val;
    newOption.value=val;
    if(val==="INR"){
        newOption.selected="selected";
    }
    dd2.append(newOption);
}

dd1.addEventListener("change",(event)=>{
    let concode=event.target.value;
    let newStr = concode.slice(0, -1);

    img1.style.backgroundImage = `url(https://flagsapi.com/${newStr}/flat/64.png)`;


})
dd2.addEventListener("change",(event)=>{
    let concode=event.target.value;
    let newStr = concode.slice(0, -1);

    img2.style.backgroundImage = `url(https://flagsapi.com/${newStr}/flat/64.png)`;
})




// ..................................................................................converter part...................................................


let btn=document.querySelector(".butt");
let amount = document.querySelector(".amount1")
let finamou = document.querySelector(".amount2")

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();

    let co = document.querySelector("#curr1");
    let co2 = document.querySelector("#curr2");

    let base2_url=`https://2024-03-06.currency-api.pages.dev/v1/currencies/${co.value.toLowerCase()}.json`;

    


    let res = await fetch(base2_url);

    let data= await res.json();
    
    let rate =data[co.value.toLowerCase()];
    let myrate = rate[co2.value.toLowerCase()];









    
    // let res =rate();
    let input = amount.value;
    let fians = input*myrate;
    finamou.innerText=fians;
    // console.log(res.PromiseResult);

    

    

})