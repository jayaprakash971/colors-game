var colors=generatecolors(6);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var NewcolorsButton=document.querySelector("#Newcolors");
var pickedColor;
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");
var numOfColors=6;

reset();

for(var i=0;i<squares.length;i++)
{    

    squares[i].addEventListener("click", function(){
        var currentcolor=this.style.background;
        if(currentcolor===pickedColor)
        {
            message.textContent="Correct!"
            changeColors(pickedColor);
            h1.style.background=pickedColor
            NewcolorsButton.textContent="Play Again?"
        }
        else
        {
            message.textContent="Try Again"
            this.style.background="#232323";
        }
    });
}

//navbar

NewcolorsButton.addEventListener("click", function(){
    reset();
});
//easy

easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numOfColors=3;
    reset();

});

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numOfColors=6;
    reset();
});
function changeColors(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
function randompick()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function randomcolor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
function reset()
{
    colors=generatecolors(numOfColors);
    pickedColor=randompick();
    colorDisplay.textContent=pickedColor;

    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    message.textContent=""
    NewcolorsButton.textContent="New Colors!"
    h1.style.background="steelblue"
}
function generatecolors(num)
{
    var colors=[];
    for(var i=0;i<num;i++)
    {
        var randomColor=randomcolor();
        colors.push(randomColor);
    }
    return colors;
}