// =============== Phone Number Appear on Click =========================
var leaders = [
	{
		'id':'#arturo',
		'name': ' Arturo Soto',
		'phoneNumber': '(512)-555-1111'
	},
	{
		'id':'#alejandro',
		'name': ' Alejandro Martinez',
		'phoneNumber': '(512)-555-2222'
	},
	{
		'id':'#juan',
		'name': ' Juan Marquez',
		'phoneNumber': '(512)-555-3333'
	},
	{
		'id':'#israel',
		'name': ' Israel Jaimes',
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
		'id': 1,
		'family': 'Fam Martinez'
	},
	{
		'id': 2,
		'family': 'Fam Devers'
	},
	{
		'id': 3,
		'family': 'Fam Soto'
	},
	{
		'id': 4,
		'family': 'Maria Martinez/Virginia'
	},
	{
		'id': 5,
		'family': 'Fam Alcauter(Jaime)'
	},
	{
		'id': 6,
		'family': 'Fam Guerra'
	},
	{
		'id': 7,
		'family': 'Fam Arteaga'
	},
	{
		'id': 8,
		'family': 'Fam Marquez'
	},
	{
		'id': 9,
		'family': 'Leticia Garcia/ Martha Espinoza'
	},
	{
		'id': 10,
		'family': 'Fam Colima'
	},
	{
		'id': 11,
		'family': 'Fam Ortega'
	},
	{
		'id': 12,
		'family': 'Fam Alcauter(Batseba)'
	},
	{
		'id': 13,
		'family': 'Claudia Medina/Connie Rodriguez'
	},
	{
		'id': 14,
		'family': 'Fam Jaimes/Chagollan'
	}
];
var currentDay = moment().format('MM/DD/YYYY');
// ++++++ To add the next cycle add 7 days to the last day that appears on the list ++++++
var test = moment('12/03/2016','MM/DD/YYYY');
// ++++++ This one will give us the day before the next person goes to remove the current person off list ++++++
var lastDayTest = moment('12/09/2016','MM/DD/YYYY');
var weeks = [];
var lastday = [];


for (var i = 0; i < families.length; i++) {
	// this will add 7 and 13 days to the week that is set on the list and the day before the next person
	test =  moment(test).add(7, 'days').format('MM/DD/YYYY');
	lastDayTest = moment(lastDayTest).add(7, 'days').format('MM/DD/YYYY');
	// pushes to the array that were set abouve
	weeks.push(test);
	lastday.push(lastDayTest);
	// this will display all the stuff on the table.
	$('.list').append('<tr id="'+families[i].id+'"><td>'+families[i].id+'</td><td>'+families[i].family+'</td><td>'+weeks[i]+'</td></tr>');
	// this will check the date in the array and the current date and remove whatever family has it next
	if (lastday[i] === currentDay) {
		$('#'+families[i].id).remove();
	}
};
console.log(lastday);
// =======================================================================