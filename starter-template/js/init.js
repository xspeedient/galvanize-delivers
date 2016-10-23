function numberfy(stringPrice) {
  return parseInt(stringPrice.slice(0, -1));
}

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.card-action').click(function () {
      var itemName = $(this).prev().children('span').text();
      var itemPrice = $(this).prev().children('p').text();
      $('#orderList').append('<li class="collection-item"><span class="itemName">'+itemName+'</span><span class="floatRight">'+itemPrice+'</span></li>');
      var numPrice = numberfy(itemPrice);
      var currentSubtotal = numberfy($('#subtotal').text());
      var newSubtotal = numPrice + currentSubtotal;
      $('#subtotal').text(newSubtotal + 'Ƀ');
      var tax = (newSubtotal * .075);
      $('#tax').text((tax).toFixed(2) + 'Ƀ');
      $('#total').text((newSubtotal+tax).toFixed(2) + 'Ƀ');
    });

    $('#submitOrder').click(function (e) {
      e.preventDefault();
      if ($('#orderList li').length <= 1) {
        Materialize.toast('Please select an item before you submit your order!', 4000);
      } else if ($('#icon_prefix').val() == 0 || $('#icon_telephone').val() == 0 || $('#icon_business').val() == 0 ) {
        Materialize.toast('Please fill out all required forms', 4000);
      } else {
        Materialize.toast('Order submitted!', 4000);
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
