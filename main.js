// words go here
var things = [

	'This is not the end for you, keep pushing onward.',
	'Tomorrow is a new day. Learn from your mistakes and get ready to try again.',
	'Sometimes we have to fall down, to learn to pick ourselves up.',
	'Do not get down on yourself, we all have things we are not proud of. Keep your head up.',
	'Keep your head up. Sometimes things do not go your way. Do not panic, focus.',
	'Sometimes life is to hard to handle, do not forget you have people that care for you.',
	'It is a crazy world we live in, but we are all here together.',
	'The only person you should be is the person you want to be. So be that person.',
	'Sometimes we fail. Sometimes we succeed. The point is to keep trying.',
	'Do not stop being you, you are the only one.',
	'Somtimes we have to make hard decisions. Sometimes they do not benefit us. That makes stronger.',
	'The beauty of life is all around us. You just have to look up, and see it.',
	'Life is meant to be shared. Go out and share it with someone.',
	'Your goal may seem far away. But each step is a step closer.',
	


];
// function for randomness
$('#selector').click(function() {
	$('#change').removeClass('invisible');
    var words = things[Math.floor(Math.random() * things.length)];
    $('#change').text(words);
});