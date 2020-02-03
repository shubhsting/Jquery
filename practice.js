var one=prompt("Enter number one")
var two=prompt("Enter number two ")
var three=prompt("Enter number three")
$('.list td').eq(0).text(one)
$('.list td').eq(1).text(two)
$('.list td').eq(2).text(three)


  var i=0;
  while (i<2) {
    $('.list td').eq(i).css('background-color','green')
    $('.list td').eq(i+1).css('background-color','green')

    i=i+1;

  }
