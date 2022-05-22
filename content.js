chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.getElementById("checkout_email").value = request.email,
            document.getElementById("checkout_shipping_address_first_name").value = request.firstname,
            document.getElementById("checkout_shipping_address_last_name").value = request.lastname,
            document.getElementById("checkout_shipping_address_address1").value = request.adress,
            document.getElementById("checkout_shipping_address_address2").value = request.apartment,
            document.getElementById("checkout_shipping_address_city").value = request.city,
            document.getElementById("checkout_shipping_address_country").value = request.country,
            document.getElementById("checkout_shipping_address_province").value = request.state,
            document.getElementById("checkout_shipping_address_zip").value = request.zipcode,
            document.getElementById("checkout_shipping_address_phone").value = request.phone,
            //document.getElementById("continue_button").click();
            //document.getElementById("continue_button").click();
            document.getElementById("number").value = request.card,
            document.getElementById("name").value = request.namecard,
            document.getElementById("expiry").value = request.expire,
            document.getElementById("verification_value").value = request.seccode
        } 
        
        catch (error) {
          console.log(error)  
          sendResponse({status: "Exception occured!"});
        }
    }
);