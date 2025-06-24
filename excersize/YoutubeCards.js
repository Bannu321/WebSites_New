function CreateCard(img, title, url, CN, views, months_old){
    let play = document.querySelector(".playlists")
    let Cards = document.querySelector(".card");
    let imgs = document.createElement("div");
    imgs.setAttribute("class", "imgs");
    imgs.style.backgroundImage = `url(${img})`;
    
    let Content = document.createElement("div");
    Content.setAttribute("class","content");
    let Title = document.createElement("a");
    Title.innerHTML= title;
    Title.href = url;

    let C1 = document.createElement("span");
    let C2 = document.createElement("span");
    let C3 = document.createElement("span");

    C1.innerHTML = CN + " &nbsp;";
    C2.innerHTML = views + " views &nbsp;";
    C3.innerHTML = months_old;

    Content.append(Title);
    Content.append(C1);
    Content.append(C2);
    Content.append(C3);

    Cards.append(imgs);
    Cards.append(Content);
    
    play.append(Cards);
}


CreateCard("thumb_!.webp", "Installing VS Code for the first time" , "apple", "CodeWithHarry" , 130000, "12 months old");
CreateCard("thumb_!.webp", "Installing VS Code for the first time" , "ape", "CodeWithHarry" , 130000, "12 months old");