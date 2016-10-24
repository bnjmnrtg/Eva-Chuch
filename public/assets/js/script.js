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

// ===========Cleaning Schedule ======================
var families = [
	{
		'id': 0,
		'family': 'Fam Martinez'
	},
	{
		'id': 1,
		'family': 'Fam Devers'
	},
	{
		'id': 2,
		'family': 'Fam Soto'
	},
	{
		'id': 4,
		'family': 'Maria Martinez/Virginia'
	},
	{
		'id': 4,
		'family': 'Fam Alcauter(Jaime)'
	},
	{
		'id': 5,
		'family': 'Fam Guerra'
	},
	{
		'id': 6,
		'family': 'Fam Arteaga'
	},
	{
		'id': 7,
		'family': 'Fam Marquez'
	},
	{
		'id': 8,
		'family': 'Leticia Garcia/ Martha Espinoza'
	},
	{
		'id': 9,
		'family': 'Fam Colima'
	},
	{
		'id': 10,
		'family': 'Fam Ortega'
	},
	{
		'id': 11,
		'family': 'Fam Alcauter(Batseba)'
	},
	{
		'id': 12,
		'family': 'Claudia Medina/Connie Rodriguez'
	},
	{
		'id': 13,
		'family': 'Fam Jaimes/Chagollan'
	}
];
var currentDay = moment().format('MM/DD/YYYY');
var addweek =moment('12/10/2016','MM/DD/YYYY').format('MM/DD/YYYY');
var test = moment('12/17/2016');

for (var i = 0; i < families.length; i++) {
	$('.list').append('<tr id="'+families[i].id+'"><td>'+families[i].family+'</td><td>'+addweek+'</td></tr>');
	addweek =  moment(addweek).add(7, 'days').format('MM/DD/YYYY');
}

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