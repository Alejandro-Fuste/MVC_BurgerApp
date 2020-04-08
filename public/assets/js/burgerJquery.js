$(function() {
	// New burger send form

	$('.create-form').on('submit', (e) => {
		e.preventDefault();

		console.log('click');

		let newBurger = {
			name: $('#burg').val().trim(),
			devoured: $('[name=devoured]:checked').val().trim()
		};

		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(() => {
			console.log('Created new burger!');

			location.reload();
		});
	});
	// Update burger to go to devour list

	$('.change-devour').on('click', (e) => {
		e.preventDefault();
		console.log('click');

		let id = $(this).data('id');
		let newDevour = $(this).data('devoured');

		let newDevourState = {
			devoured: newDevour
		};

		$.ajax('/api/burgers/:id', {
			type: 'PUT',
			data: newDevourState
		}).then(() => {
			console.log(`Changed devoured to ${newDevour}`);
			location.reload();
		});
	});
});