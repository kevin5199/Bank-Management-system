let tong=document.getElementById("toggle")

 func= () =>{
    if(tong.style.top=="-250px"){
        tong.style.top="50px";
        tong.style.transition="all 0.5s";
    }
    else{
        tong.style.top="-250px";
    }
}