function makePalette(){

for (let i = 0; i < 64; i++) {
    const div = $('<div class = cell>')
    $('.grid').append(div);
}
const PALETTE = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'olive',
    'black',
    'magenta',
    'lightblue'
]
for (let index = 0; index < PALETTE.length; index = index + 1) {
    // access the color
    let nextColor = PALETTE[index]
    // rest of code below
    let button = $("<button>");
    let colorButton = $("<button>").css("background-color", nextColor);
    
    $('.palette').append(colorButton);
    $(".palette button").first().addClass("active");
  }
};
makePalette();

function makeGrid(){
    for (let i = 0; i < 64; i++) {
    const div = $('<div class = cell>')
    $('.grid').append(div);
}
const PALETTE = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'olive',
    'black',
    'magenta',
    'lightblue'
]
for (let index = 0; index < PALETTE.length; index = index + 1) {
    // access the color
    let nextColor = PALETTE[index]
    // rest of code below
    let button = $("<button>");
    let colorButton = $("<button>").css("background-color", nextColor);
    
    $('.palette').append(colorButton);
    $(".palette button").first().addClass("active");
  }
  makeGrid();
};
 function onPaletteClick() {
   $('.palette button').removeClass('active');
   $(this).addClass('active');
}
$(".palette button").click(onPaletteClick);
 

function onGridClick() {
  //$(this).css($(".palette .active").css("background-color"));
  let color = $(".palette .active").css("background-color");
  
  let target = $(this).css('background-color');
  console.log(target);
  console.log(color);
  if(target === color){
    $(this).css('background-color', '');
  }else{
    $(this).css("background-color", color);
  }
} 


$(".grid .cell").click(onGridClick);

function onClearClick(){
   $(".grid .cell").css('background-color', '');
   
}
$('.clear').click(onClearClick);


function onFillAllClick(){
  let color = $(".palette .active").css("background-color");
  $('.grid .cell').css('background-color', color);
}
$('.fill-all').click(onFillAllClick)


function onFillEmptyClick(){
   const elements = $(".grid .cell");
   let color = $(".active").css("background-color");
   for (let index = 0; index < elements.length; index = index + 1) {
    
     let nextElement = $(elements[index]);
     
      if(nextElement.css('background-color', 'rgb(0, 0, 0 )')){
        
       $(nextElement).css('background-color', color)
     }
    }
  }
  
$('.fill-empty').click(onFillEmptyClick);










