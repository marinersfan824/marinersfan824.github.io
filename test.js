function loadClient() {
    gapi.client.setApiKey("AIzaSyDA-WVcPXSm8TDz7GLCsNdQFxBinNFIDNI");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.youtube.activities.list({
      "part": [
        "snippet,contentDetails"
      ],
      "channelId": "AIzaSyDA-WVcPXSm8TDz7GLCsNdQFxBinNFIDNI",
      "mine": true
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");