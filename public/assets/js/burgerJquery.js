$(function() {
	// New burger send form

	$('.create-form').on('submit', (e) => {
		e.preventDefault();

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

		let id = $('.change-devour').data('id');
		let newDevour = $('.change-devour').data('devoured');

		let newDevourState = {
			id: id,
			devoured: 1
		};

		console.log(this);
		console.log(id);
		console.log(newDevour);
		console.log(newDevourState);

		$.ajax(`/api/burgers/${id}`, {
			type: 'PUT',
			data: newDevourState
		}).then(() => {
			console.log(`Changed devoured to ${newDevour}`);
			location.reload();
		});
	});
});
