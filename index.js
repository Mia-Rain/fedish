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
      swal("Client SEC", {
        content: "input",
        closeOnEsc: false,
        closeOnClickOutside: false,
      }).then((value) => {
        sessionStorage.setItem("CLSEC", `${value}`);
        window.CLID = sessionStorage.getItem("CLID");
        console.log("URL IS: " + window.URL + "\n" + "CLID IS: " + window.CLID);
        window.URL = sessionStorage.getItem("URL");
        window.location.replace(
          window.URL +
            "/oauth/authorize?client_id=" +
            window.CLID +
            "&scope=" +
            scopes +
            "&redirect_uri=https://thatgeekyweeb.is-dummy-thi.cc/fedish/callback" +
            "&response_type=code"
        );
      });
    });
  });
}
