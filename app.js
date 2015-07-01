var xray 	= require('x-ray'),
	x 		= xray();

var people = x('http://emojipedia.org/people/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('people.json');

x('http://emojipedia.org/nature/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('nature.json');

x('http://emojipedia.org/food-drink/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('food-drink.json');

x('http://emojipedia.org/celebration/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('celebration.json');

x('http://emojipedia.org/activity/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('activity.json');

x('http://emojipedia.org/travel-places/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('travel-places.json');

x('http://emojipedia.org/objects-symbols/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('objects-symbols.json');

x('http://emojipedia.org/flags/', '.entry-content ul li', [{
	title 	: 'a[title]@title',
	icon 	: '.emoji'
}]).write('flags.json');
