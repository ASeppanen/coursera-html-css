/*var count = function () {
	console.log("Click");
	var p = document.getElementById("ptag");
	var number = p.textContent;
	number ++;
	p.innerHTML=number;
};

var title = document.getElementById("title");
console.log(title);


document.addEventListener("DOMContentLoaded", 
	function(event) {

		document.querySelector("button").addEventListener("click", 
			function sayHello(event) {
				console.log(event);
				this.textContent = "Clicked";
				var name = document.getElementById("name").value;
				var titleH1 = document.querySelector("#title");

				if(name === "student") {
					var title = titleH1.textContent;
					title += " Student";
					titleH1.innerHTML = title;
				} else if (titleH1.textContent === "Module 5 Student") {
					titleH1.innerHTML = "Module 5";
				}

				var message = "<h2>Hello " + name + "!</h2>";
				document.getElementById("content").innerHTML = message;
			}
		);

		document.querySelector("body").addEventListener("mousemove",
			function(event) {
				if(event.shiftKey) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}
			}
		);
	}
);



//document.querySelector("button").onclick = sayHello;

*/

document.addEventListener("DOMContentLoaded",

	function(event) {
		document.querySelector("button")
		.addEventListener("click", function() {

			$ajaxUtils.sendGetRequest("/data/name.json",
				function(res) {
					/*
					var message = res.firstName + " " + res.lastName + ", " + res.age + " years old.";
					*/
					var message = "";
					for(var item in res) {
						console.log(item);
						console.log(res[item]);
						message += res[item] + " ";
					}
					document.querySelector("#content")
					.innerHTML = "<h2>Name: " + message + "</h2>";
				});
		});
	}
);