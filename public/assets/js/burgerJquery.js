$(function() {
	// New burger send form

	$('#create-form').on('submit', (e) => {
		e.preventDefault();

		console.log('click');

		let newBurger = {
			burger_name: $('#burg').val().trim(),
			devoured: $('[name=devouredStatus]:checked').val().trim()
		};

		console.log(newBurger);

		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(() => {
			console.log('Created new burger!');

			// location.reload();
		});
	});
	// Update burger to go to devour list
	const $devourButton = $('#notDevourList #change-devour.btn.btn-primary');
	const $devourID = $('button#change-devour.btn.btn-primary');

	$($devourID).on('click', (e) => {
		let id = $($devourID).data('id');
		let newDevour = $($devourID).data('devoured');

		let newDevourState = {
			id: id,
			devoured: 1
		};

		console.log($devourButton);
		console.log($devourID);
		console.log(id);
		console.log(newDevourState);

		$.ajax(`/api/burgers/${id}`, {
			type: 'PUT',
			data: newDevourState
		}).then(() => {
			console.log(`Changed devoured to ${newDevour}`);
			// location.reload();
		});
	});
});
