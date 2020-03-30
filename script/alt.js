var showStack=[];
var hideStack=[];
function onClickHandler (string) {
    var flag=0;
    for (var i = 0; i < showStack.length; i++) {
        if(showStack[i]==string){
            showStack.splice(i,1);
            hideStack.push(string);
            break;
        }
        else if (hideStack[i]==string) {
            hideStack.splice(i,1);
            showStack.push(string);
            break;
        }
    }
    for (var i = 0; i < showStack.length; i++)
        Hide(showStack[i]);
    for (var i = 0; i < hideStack.length; i++)
        Unhide(showStack[i]);
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
             cardList[i].style.visibility = 'hidden';
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
             cardList[i].style.visibility = 'visible';
    }

}
