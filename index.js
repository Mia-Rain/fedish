const scopes = "read+write+follow+push";
function grab() {
  var CLID;
  var CLSEC;
  console.log("Request IDs");
  swal("Instance URL (Prefix with https://)", {
    content: "input",
    closeOnEsc: false,
    closeOnClickOutside: false,
  }).then((value) => {
    sessionStorage.setItem("URL", `${value}`);
    swal("Client ID", {
      content: "input",
      closeOnEsc: false,
      closeOnClickOutside: false,
    }).then((value) => {
      sessionStorage.setItem("CLID", `${value}`);
      window.CLID = sessionStorage.getItem("CLID");
      console.log("ID IS: " + window.CLID + "\n" + "SEC IS: " + window.CLSEC);
      window.URL = sessionStorage.getItem("URL");
      $.ajax({
        type: "GET",
        url: window.URL + "/oauth/authorize?client_id=" + window.CLID,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        data: {
          scope: scopes,
          redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
          response_type: 'code',
        },
        success: function (response, data) {
          console.log(response);
        },
      });
    });
  });
}
