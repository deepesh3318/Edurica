var tour = new Tour({
	Storage: false
})

tour.addSteps(
	[
		{
			element: '#tour1',
			placement: 'bottom',
			title: 'Welcome to Edurika!',
			content: 'We would like to your name? <br/ > <input type="text" id="name" name="your_name" class="form-control" />.',
			onNext: function () {
				name = $('#name').val();
				console.log('testing work');
			}

		},
		{
			element: '#tour2',
			placement: 'top',
			title: function () {
			 return 'Welcome to Edurika!, ' + name;
			},
			content: 'We offer industry led live online classes',
		},
		{
			element: '#tour3',
			placement: 'bottom',
			title: function () {
			 return 'Welcome to Edurika!, ' + name;
			},
			content: 'We offer the flexibility to changes the Betch/Class at anytime',
		},
		{
			element: '#tour4',
			placement: 'top',
			title: function () {
			 return 'Welcome to Edurika!, ' + name;
			},
			content: 'We provide 24/7 support to our learners.',
		},
		{
			element: '#tour5',
			placement: 'top',
			title: function () {
			 return 'Welcome to Edurika!, ' + name;
			},
			content: 'Check out our fresh baked courses.',
		},
		{
			element: '#tour6',
			placement: 'top',
			title: function () {
			 return 'Welcome to Edurika!, ' + name;
			},
			content: "We're available for all social media.",
		},
		{
			orphan: true,
			backdrop: true,
			placement: top,
			title: function () {
			 return 'Thank You!, ' + name;
			},
			content: function () {
			 return 'We wish you happy learning with Edurika!'
			},
		}
	]
)
tour.init();
tour.start();