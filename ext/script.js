document.getElementById("autofill").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          firstname: document.getElementById("firstname").value,
          lastname: document.getElementById("lastname").value,
          email: document.getElementById("email").value,
          address: document.getElementById("address").value,
          apartment: document.getElementById("apartment").value,
          city: document.getElementById("city").value,
          country: document.getElementById("country").value,
          state: document.getElementById("state").value,
          zipcode: document.getElementById("zipcode").value,
          phone: document.getElementById("phone").value,
          card: document.getElementById("card").value,
          namecard: document.getElementById("name").value,
          expire: document.getElementById("expire").value,
          seccode: document.getElementById("seccode").value,
        },
        function (response) {
          console.log(response.status);
        }
      );
    });
  });
  
  document.getElementById("save").addEventListener("click", () => {
    chrome.storage.sync.set(
      {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        apartment: document.getElementById("apartment").value,
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        zipcode: document.getElementById("zipcode").value,
        phone: document.getElementById("phone").value,
        card: document.getElementById("card").value,
        namecard: document.getElementById("name").value,
        expire: document.getElementById("expire").value,
        seccode: document.getElementById("seccode").value,
      },
      function () {
        console.log("Saved!");
      }
    );
  });
  
  document.getElementById("load").addEventListener("click", () => {
    chrome.storage.sync.get(
      [
        "firstname",
        "lastname",
        "email",
        "address",
        "apartment",
        "city",
        "country",
        "state",
        "zipcode",
        "phone",
        "card",
        "namecard",
        "expire",
        "seccode",
      ],
      function (result) {
        document.getElementById("firstname").value = result.firstname;
        document.getElementById("lastname").value = result.lastname;
        document.getElementById("email").value = result.email;
        document.getElementById("address").value = result.address;
        document.getElementById("apartment").value = result.apartment;
        document.getElementById("city").value = result.city;
        document.getElementById("country").value = result.country;
        document.getElementById("state").value = result.state;
        document.getElementById("zipcode").value = result.zipcode;
        document.getElementById("phone").value = result.phone;
        document.getElementById("card").value = result.card;
        document.getElementById("namecard").value = result.namecard;
        document.getElementById("expire").value = result.expire;
        document.getElementById("seccode").value = result.seccode;
      }
    );
  });
  