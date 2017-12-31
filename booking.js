// init the state from the input
$('.kursi').find(".kursi-checkbox").each(function () {
  if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
    $(this).addClass('kursi-checkbox-checked');
  }
  else {
    $(this).removeClass('kursi-checkbox-checked');
  }
});

// sync the state to the input
$('.kursi').find(".kursi-checkbox").on("click", function (e) {
  $(this).toggleClass('kursi-checkbox-checked'); 
  var $checkbox = $(this).find('input[type="checkbox"]');
  $checkbox.prop("checked",!$checkbox.prop("checked"))
  e.preventDefault();
});


