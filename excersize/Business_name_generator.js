function NameGen(){
    let ad1 = "Crazy";
    let ad2 = "Amazing";
    let ad3 = "Fire";

    let sn1 = "Engine";
    let sn2 = "Food";
    let sn3 = "Garments";

    let An1 = "Bros";
    let An2 = "Limited";
    let An3 = "Hub";


    let ad;
    let sn;
    let an;

    let ran = Math.random();
    console.log(ran);
    
    if (ran < 0.33){
        ad = ad1;
    }
    else if (ran > 0.33 && ran < 0.66){
        ad = ad2;
    }
    else{
        ad = ad3;
    }
    
    let ranS = Math.random();
    console.log(ranS);
    
    if (ranS < 0.33){
        sn = sn1;
    }
    else if (ranS > 0.33 && ranS < 0.66){
        sn = sn2;
    }
    else{
        sn = sn3;
    }
    
    
    let ranA = Math.random();
    console.log(ranA);
    
    if (ranA < 0.33){
        an = An1;
    }
    else if (ranA > 0.33 && ranA < 0.66){
        an = An2;
    }
    else{
        an = An3;
    }


    console.log("The new Business name is : "+ ad +" " + sn +" " + an +" ");
}

NameGen();