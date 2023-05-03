fetch("https://jsonplaceholder.typicode.com/users")
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log(data);
		data.forEach((user, index) => {
		  const markup = `
			<div id=${index} class="users fade" style="display:` + (index == 0 ? `block` : `none`) + `;">
			  <p>
			  <strong>Name:</strong> ${user.name} 
			  </p>
			  <strong>Email:</strong> ${user.email} 
			  <p>
			  <strong>Phone:</strong> ${user.phone}
			  </p>
			  <strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}  
			</div>`;

		  document.querySelector(".showuser").insertAdjacentHTML("beforeend", markup);
		});
	});

	let currentItem = 0;

	const prevBtn = document.querySelector(".prev");
	const nextBtn = document.querySelector(".next");
	const users = document.getElementsByClassName("users");
	
    prevBtn.addEventListener("click", function () {
		showPerson(currentItem-1);
	});
	
    nextBtn.addEventListener("click", function () {
		showPerson(currentItem+1);
	});
	
	prev.style.display = "none";
	
	function showPerson(index) {
		currentItem = index;
		
		//Hide all items of the list
		for (i = 0; i < users.length; i++) {
			users[i].style.display = "none";
		}
		
		//Show only the current item
		users[index].style.display = "block";
		
		//Validate if it's the first result to show or hide the previous button
		if (index == 0)
			prevBtn.style.display = "none";
		else
			prevBtn.style.display = "block";

		//Validate if it's the last result to show or hide the next` button
		if (index == users.length - 1)
			nextBtn.style.display = "none";
		else
			nextBtn.style.display = "block";
	}


