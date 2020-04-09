$(function() {
	// New burger send form

	$('.create-form').on('submit', (e) => {
		e.preventDefault();

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

			location.reload();
		});
	});
	// Update burger to go to devour list

	$('.change-devour').on('click', (e) => {
		e.preventDefault();

		let id = $('.change-devour').data('id');
		let newDevour = $('.change-devour').data('devoured');

		let newDevourState = {
			id: id,
			devoured: 1
		};

		$.ajax(`/api/burgers/${id}`, {
			type: 'PUT',
			data: newDevourState
		}).then(() => {
			console.log(`Changed devoured to ${newDevour}`);
			location.reload();
		});
	});
});
