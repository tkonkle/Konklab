// single page website, pages controlled with jquery

// ------------------ nav link selected formating ------------------
$(".tknavlink").click(function() {
	$(".tknavlink.tkactiveNavLink").removeClass("tkactiveNavLink");
	$(this).addClass("tkactiveNavLink");
	console.log("click link!");
});

// ------------------ page navigation: ------------------
$("#homePageLink").click(function() {
	$(".tknavlink.tkactiveNavLink").removeClass("tkactiveNavLink");
	$(".tkpage").hide();
	$("#homePage").show();
	ga('send', 'pageview', '/home');
});

$("#researchPageLink").click(function() {
	$(".tkpage").hide();
	$("#researchPage").show();
	ga('send', 'pageview', '/research');
});

$("#peoplePageLink").click(function() {
	$(".tkpage").hide();
	$("#peoplePage").show();
	ga('send', 'pageview', '/people');
});

$("#pubsPageLink").click(function() {
	$(".tkpage").hide();
	$("#pubsPage").show();
	ga('send', 'pageview', '/publications');
});

$("#imagesetsPageLink").click(function() {
	$(".tkpage").hide();
	$("#imagesetsPage").show();
	ga('send', 'pageview', '/imagesets');
});

$("#morePageLink").click(function() {
	$(".tkpage").hide();
	$("#morePage").show();
	ga('send', 'pageview', '/more');
});

// ------------------ publication ------------------

$(".pubTitle, .trackPubLink, .trackLink").click(function() {
	var ref = $(this).attr('href');
	console.log("track: " + ref);
	ga('send', 'pageview', ref);
});


// ------------------ misc tracking: ------------------

$(".trackClick").click(function() {
	var ref = $(this).attr('data');
	console.log(ref);
	ga('send', 'pageview', ref);
});


// ------------------ on ready: ------------------

$( document ).ready(function() {
// 		$("#homePage").show();
		$("#homePage").show();
});

// ------------------ on ready: ------------------

$("#Ad").click(function() {
	$("#morePageLink").click();
});