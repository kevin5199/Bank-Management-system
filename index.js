function login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username=="kevin123" && password=="1234"){
        window.open("/dw.html","_self");
    }
    else{
        document.getElementById("error1").innerHTML="incorrect username or passord"

    }
}
document.getElementById("Accno").value="512346173912";
let balance=0;

function deposite1(){
    let amount=parseInt(document.getElementById("Amount").value);
    if(amount<0 ||isNaN(amount)){
        document.getElementById("error").innerHTML="invalid amount"
        return;
    }else{let d1=document.getElementById("balance");
    
    balance+=Number.parseFloat(amount);
    d1.innerHTML=balance;
    document.getElementById("error").innerHTML=""; 

}
    
}
function withdraw(){
    let amount=parseInt(document.getElementById("Amount").value);
    if(balance<amount){
        document.getElementById("error").innerHTML="insufficient balance"
        return;
    }
    else if(amount<0||isNaN(amount)){
        document.getElementById("error").innerHTML="invalid amount"
        return;
    }
    else{let d1=document.getElementById("balance");
    
    balance-=Number.parseFloat(amount);
    d1.innerHTML=balance;
    document.getElementById("error").innerHTML=""; 

}

   
    
}

function logout(){ 
    location.href="index.html#login1";
    window.open();
}
