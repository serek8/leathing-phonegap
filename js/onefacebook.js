			
			
			
			var login = function () {
                facebookConnectPlugin.login( ["public_profile","email"],
                    function (response) { alert(JSON.stringify(response)); },
                    function (response) { alert(JSON.stringify(response)); });
            }
            
            var showDialog = function () { 
                facebookConnectPlugin.showDialog( { method: "feed" }, 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
            
            var apiTest = function () { 
                facebookConnectPlugin.api( "me?fields=id,email,name", ["public_profile"],
                    function (response) {
						myUser.UserName=response.name;  
						myUser.UserIdToSignUp=response.id;
						myUser.UserEmail=response.email;
						},
                    function (response) { alert("muERROE="+JSON.stringify(response)) }); 
            }
            var logPurchase = function () {
                facebookConnectPlugin.logPurchase(1.99, "USD",
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
            var logEvent = function () {
                // For more information on AppEvent param structure see
                // https://developers.facebook.com/docs/ios/app-events
                // https://developers.facebook.com/docs/android/app-events
                facebookConnectPlugin.logEvent("Purchased",
                    {
                        NumItems: 1,
                        Currency: "USD",
                        ContentType: "shoes",
                        ContentID: "HDFU-8452"
                    }, null,
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
            var getAccessToken = function () { 
                facebookConnectPlugin.getAccessToken( 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
            
            var getStatus = function () { 
				var myCurrentStatus; 
                facebookConnectPlugin.getLoginStatus( 
                    function (response) { myCurrentStatus=response.status; },
                    function (response) { alert(JSON.stringify(response)) });
					alert("W funkcji getStatus(), return="JSON.stringify(myCurrentStatus);
				return myCurrentStatus;
            }
            var logout = function () { 
                facebookConnectPlugin.logout( 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }