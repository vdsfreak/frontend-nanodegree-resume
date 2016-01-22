//$("#main").append(["Chris Gingerich"])
//var awesomeThoughts="I am Me and I am awesome!";
//var funThoughts=awesomeThoughts.replace("awesome","fun");
//console.log(awesomeThoughts);
//console.log(funThoughts);

//var formattedName = HTMLheaderName.replace("%data%","Chris Gingerich")
//var formattedRole = HTMLheaderRole.replace("%data%","Web design and Windows software developer");
//$("#header").prepend([formattedName])
//$("#header").append([formattedRole])


var bio = {
	"name" : "Chris Gingerich",
	"role" : "Web design and Windows software developer",
	"contacts" : {
		"email" : "cgingerich@gmail.com",
	},
	"bioPic" : "http://cgs.vdsworld.com/images/me.jpg",
	"welcomeMsg" : "Welcome! Thanks for viewing my resume!",
	"location" : "Carrboro, NC",
	"skills" : [" Visual Dialogscript", " JavaScript", " HTML", " Adobe Photoshop", " AutoCAD"],
};


var education = {
	"schools": [
	  {
	  	"name": "York Technical Institute",
	  	"city": "York, PA",
	  	"degree": "Associates degree",
	  	"dates": "2007-2009",
	  	"url": "http://yti.edu"
	  }
	 ], 
	 "onlineCourses":[
	   {
	   	"title": "Front-end Web Developer Nanodegree",
	   	"school": "Udacity",
	   	"dates": 2016,
	   	"url": "http://udacity.com"
	   }
	 ]
   };

var projects = {
	"projects" : [
	{
		//"start" : "1/13/2016",
		"title" : "Portfolio",
		"dates" : "Jan 13, 2016 - Jan 18, 2016",
		"description" : "First project at Udacity.",
		"images" : [""]
	},
	{
		//"start" : "1/13/2016",
		"title" : "InsureSign",
		"dates" : "June 16, 2011 - Present",
		"description" : "Windows software to allow people to send documents for digital signing.",
		"images" : ["http://insuresign.com/images/logo.jpg"]
	}
	]
};

projects.display = function(){
for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);
  	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  	$(".project-entry:last").append(formattedTitle);
  	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  	$(".project-entry:last").append(formattedDates);
   	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  	$(".project-entry:last").append(formattedDescription);

  	if (projects.projects[project].images.length > 0) {
  		for (image in projects.projects[project].images){
   			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
  			$(".project-entry:last").append(formattedImage);
  		}
    };
  	
	//var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    //$(".work-entry:last").append(formattedLocation);
	//var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    //$(".work-entry:last").append(formattedDates);
    //var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    //$(".work-entry:last").append(formattedDescription);

 }
};

projects.display();

var work = {
	"jobs" : [
	{
	"title" : "IT Administrator",
	"employer" : "InsureSign",
	//"years" : "5",
	"location" : "Chapel Hill",
	"dates" : "June 16, 2011 - Present",
	"description" : "Develop Windows software for sending documents to be signed electronically."
	},
   ]
};

function inName(name){
	name = name.trim();
	var nameArray = name.split(" ");
	//console.log(nameArray);
	var fName = toTitleCase(nameArray[0]);
	var lName = nameArray[1].toUpperCase();
	fullName = fName + " " + lName;
	console.log(fullName);
	return fullName;
};

function toTitleCase(str){
    return str.replace(/\b\w/g, function (txt) { return txt.toUpperCase(); });
};

//$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
//var intName = inName(bio.name);
$("#header").append(HTMLheaderName.replace("%data%", inName(bio.name)));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (var key in bio.skills) {
	    if (bio.skills.hasOwnProperty(key)) {
	    	formattedSkills = HTMLskills.replace("%data%", bio.skills[key]);
	        $("#skills").append(formattedSkills);
	    }
	}
};

function displayWork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
  	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  	var formattedEmployerTitle = formattedEmployer+formattedTitle;

  	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

 }
};


displayWork();

$("#mapDiv").append(googleMap);

//$(document).click(function(loc) {
//	var x = loc.pageX;
//	var y = loc.pageY;
//  logClicks(x,y);
//});


//$("#main").append(internationalizeButton);
//$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
//$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
//$("#header").append(HTMLlocation.replace("%data%", bio.location));
//$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
//$("#header").append(HTMLskills.replace("%data%", bio.skills));

//$("#projects").append(HTMLprojectTitle.replace("%data%", project.title));

//$("#workExperience").append(HTMLworkStart.replace("%data%", work.start));
//$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));

//$("#education").append(HTMLschoolName.replace("%data%", education["name"]));
//$("#education").append(HTMLschoolLocation.replace("%data%", education.location));