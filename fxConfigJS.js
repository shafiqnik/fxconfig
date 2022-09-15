function sendJSON(){

			let result = document.querySelector('.result');
			let name = document.querySelector('#ssid');
			let email = document.querySelector('#password');

			// Creating a XHR object
			let xhr = new XMLHttpRequest();




			let profile = "http://192.168.99.1:80/cgi-bin/profilecheck"  //retreives wifi settings from FC



		  let wifi1 = "http://192.168.99.1/cgi-bin/setrepeater?ssid="+ssid.value
			let wifi2 = wifi1+"&bssid=&encryption=psk-mixed&cipher=auto&key="+password.value
			let wifi3 = wifi2+"&keyi=1&key1=&key2=&key3=&key4=&eap_type=tls&priv_key_pwd=&auth=PAP&priv_key2_pwd=&identity=&anonymous_identity=&password=&repeaterMode=dhcp&ipaddr=192.168.0.10&netmask=255.255.255.0&gateway=192.168.0.1&dns1=114.114.114.114&dns2=8.8.8.8&reverted=NO&net_profile=untitled&net_hidden=y&net_check="




			// open a connection
			xhr.open("GET", wifi3, true);


			// Set the request header i.e. which type of content you are sending
			//xhr.setRequestHeader("Content-Type", "application/json"); //may be this is the issue

			// Create a state change callback
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {

					// Print received data from server
					result.innerHTML = this.responseText;

				}
			};


			// Converting JSON data to string
      console.log('Configured')


			//Restart the FC
			//xhr.open("GET","http://192.168.99.1/cgi-bin/profilecheck", true)
		 console.log(xhr.responseText)


			//xhr.open("GET", url, true);

			// Sending data with the request
			xhr.send();
		}
