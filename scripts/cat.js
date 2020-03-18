var checkList=[];
function onClickHandler (string) {
    var flag=0;
    for (var i = 0; i < checkList.length; i++) {
        if(checkList[i]==string){
            flag=1;
            checkList.splice(i,1);
            break;
        }
    }
    if (flag==1)
        Unhide(string);
    else {
        checkList.push(string);
        Hide(string);
    }
}
function Hide(string){
    var cards = document.querySelectorAll(".card");
    var flag;
    var cardList = Array.from(cards);
    for (var i = 0; i < cardList.length; i++) {
        flag=0;
        for (var j = 0; j < cardList[i].classList.length; j++) {
            if(cardList[i].classList[j]==string)
                flag=1;
        }
        if (flag==0)
             cardList[i].style.display = 'none';
    }
}
function Unhide(string){
    var cards = document.querySelectorAll(".card");
    var flag;
    var cardList = Array.from(cards);
    for (var i = 0; i < cardList.length; i++) {
        flag=0;
        for (var j = 0; j < cardList[i].classList.length; j++) {
            if(cardList[i].classList[j]==string)
                flag=1;
        }
        if (flag==0)
             cardList[i].style.display = 'block';
    }

}
