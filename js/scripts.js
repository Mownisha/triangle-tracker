var sideSum1 = function(side1, side2) {
  return side1 + side2;
};

var sideSum2 = function(side2, side3) {
  return side2 + side3;
};

var sideSum3 = function(side1, side3) {
  return side1 + side3;
};


$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
   var side1 = parseInt($("input#side1").val());
   var side2 = parseInt($("input#side2").val());
   var side3 = parseInt($("input#side3").val());

   if(sideSum1(side1,side2) <= side3 || sideSum2(side2,side3) <= side1 || sideSum3(side1,side3) <= side2) {
      $('#not-triangle').show();
      $('#equilateral').hide();
      $('#isosceles').hide();
      $('#scalene').hide();
    } else if (side1 === side2 && side1 === side3) {
     $('#equilateral').show();
     $('#not-triangle').hide();
     $('#isosceles').hide();
     $('#scalene').hide();
   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $('#isosceles').show();
      $('#not-triangle').hide();
      $('#equilateral').hide();
      $('#scalene').hide();
    } else if (side1 != side2 && side1 != side3 && side2 != side3) {
      $('#scalene').show();
      $('#not-triangle').hide();
      $('#equilateral').hide();
      $('#isosceles').hide();
    }

   event.preventDefault();
  });
});
