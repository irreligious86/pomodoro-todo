// jQuery(document).ready(function () {
//   console.log(jQuery("p").html());
//   console.log(jQuery("h4", ".description").html());
// });

jQuery.noConflict();

jQuery(function ($) {
  let a = $("<h5>HeLo, world!</h5>").html();
  console.log(a);
  $("h4", ".description").append(a);
  //$("li", ".navbar").append(a);
  $("*", ".navbar").css({ 'border' : '1px solid brown'});
});

