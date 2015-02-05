var slideMapButtonVisibility = 0;
var panelToChange;

var myUser = {UserName: "", UserEmail: "", UserIdToSignUp: 0};


function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
	
var GetSomeInfoAboutUser_callback = function()
{
	apiTest();
	alert(JSON.stringify(myUser));
};	
		
var SignInWhenNotSignedIn_callback = function(GetSomeInfoAboutUser_callback_obj){
	if(myCurrentStatus != "connected") login();
	GetSomeInfoAboutUser_callback_obj();
};
	

// device APIs are available
    function onDeviceReady() {
	
		/* Sprawdzam czy uzytkownik sie zalogowal*/
		function oneFacebookStatusCheckAndSignIn(SignInWhenNotSignedIn_callback_obj) {
			myCurrentStatus=getStatus();
			// Now I run callback function
			SignInWhenNotSignedIn_callback_obj();
			
		}
		oneFacebookStatusCheckAndSignIn(SignInWhenNotSignedIn_callback);
		document.getElementById("newsy").innerHTML=myUser.UserName+" "+myUser.UserEmail+" "+myUser.UserIdToSignUp;
    }

$(document).ready(function(){
  $(".slidebutton").click(function(){
	panelToChange="#panel"+(this.id);
	
    if(slideMapButtonVisibility == 0){
		$(panelToChange).slideDown("slow");
		slideMapButtonVisibility=1;
	}
	else{
	$(panelToChange).slideUp("slow");
	slideMapButtonVisibility = 0;
	}
  });
});


/* Skrypt do mapy */
var myCenter=new google.maps.LatLng(51.508742,-0.120850);
function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

/* Koniec skryptu mapy */