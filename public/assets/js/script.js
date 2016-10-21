// =============== Phone Number Appear on Click =========================
var leaders = [
	{
		'id':'#arturo',
		'name': 'Arturo Soto',
		'phoneNumber': '(512)-555-1111'
	},
	{
		'id':'#alejandro',
		'name': 'Alejandro Martinez',
		'phoneNumber': '(512)-555-2222'
	},
	{
		'id':'#juan',
		'name': 'Juan Marquez',
		'phoneNumber': '(512)-555-3333'
	},
	{
		'id':'#israel',
		'name': 'Israel Jaimes',
		'phoneNumber': '(512)-555-4444'
	}
];

 
	$(".leaders").click(function(){
		var x = this.value;
		// console.log(x);
		// console.log(leaders[x].id);
		$(leaders[x].id).html("Hmn." + leaders[x].name + " " + leaders[x].phoneNumber);
		var clicks = $(this).data('clicks');
		if (clicks) {
			$(this).html("Hmn." + leaders[x].name);
		}
		else{
			$(this).html("Hmn." + leaders[x].name + " " + leaders[x].phoneNumber);

		}
		$(this).data("clicks", !clicks);

	});

// ===========Working Product======================
// $('#arturo').click(function(){
// 	$('#arturo').html("Hmn. Arturo Soto (512)-555-1111");
// 	var clicks = $(this).data('clicks');
// 	if (clicks) {
// 		$('#arturo').html("Hmn. Arturo Soto");
// 	}
// 	else{
// 		$('#arturo').html("Hmn. Arturo Soto (512)-555-5555");

// 	}
// 	$(this).data("clicks", !clicks);
// });
// $('#alejandro').click(function(){
// 	$('#alejandro').html("Hmn. Alejandro Martinez (512)-555-5555");
// 	var clicks = $(this).data('clicks');
// 	if (clicks) {
// 		$('#alejandro').html("Hmn. Alejandro Martinez");
// 	}
// 	else{
// 		$('#alejandro').html("Hmn. Alejandro Martinez (512)-555-5555");
// 	}
// 	$(this).data("clicks", !clicks);
// });
// $('#juan').click(function(){
// 	$('#juan').html("Hmn. Juan Marquez (512)-555-5555");
// 	var clicks = $(this).data('clicks');
// 	if (clicks) {
// 		$('#juan').html("Hmn. Juan Marquez");
// 	}
// 	else{
// 		$('#juan').html("Hmn. Juan Marquez (512)-555-5555");
// 	}
// 	$(this).data("clicks", !clicks);
// });
// $('#israel').click(function(){
// 	$('#israel').html("Hmn. Israel Jaimes (512)-555-5555");
// 	var clicks = $(this).data('clicks');
// 	if (clicks) {
// 		$('#israel').html("Hmn. Israel Jaimes");
// 	}
// 	else{
// 		$('#israel').html("Hmn. Israel Jaimes (512)-555-5555");
// 	}
// 	$(this).data("clicks", !clicks);
// });
// =======================================================================



// ============================ Fizz Buzz ================================
// for (var i = 0; i < 100; i++){
// 	if (i % 3 === 0) {
// 		console.log(i +" =fizz");
// 	}
// 	if (i % 5 === 0) {
// 		console.log(i +" =buzz");
// 	}
// 	else{
// 		console.log(i);
// 	}
// };
// ======================================================================= 