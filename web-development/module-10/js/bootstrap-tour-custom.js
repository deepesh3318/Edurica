var tour = new Tour({
	Storage: false
})

tour.addSteps(
	[
		{
			element: '#tour1',
			placement: 'bottom',
			title: 'Live class',
			content: 'simply dummy text of the printing and typesetting industry <br/ > <input type="text" id="name" />.',
			onNext: function () {
				name = $('#name').val();
				console.log('testing work');
			}

		},
		{
			element: '#tour2',
			placement: 'top',
			title: 'flexible Schedule',
			content: function () {
			 return name + ' simply dummy text of the printing and typesetting industry.'
			}
		},
		{
			element: '#tour3',
			placement: 'bottom',
			title: '24X7 Support',
			content: 'simply dummy text of the printing and typesetting industry.',
		},
		{
			orphan: true,
			backdrop: true,
			placement: top,
			title: 'Thank you'
		}
	]
)
tour.init();
tour.start();