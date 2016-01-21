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

var work = {
	"currentPos" : "IT Administrator",
	"employer" : "InsureSign",
	"years" : "5",
	"city" : "Chapel Hill",
	"start" : "June 16, 2011"
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
	"start" : "1/13/2016",
	"title" : "Portfolio",
	"dates" : "1/13/2016 - 1/18/2016",
	"description" : "First project at Udacity.",
	"image" : ""

};

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#header").append(HTMLlocation.replace("%data%", bio.location));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLskills.replace("%data%", bio.skills));

$("#projects").append(HTMLprojectTitle.replace("%data%", project.title));

$("#workExperience").append(HTMLworkStart.replace("%data%", work.start));
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));

$("#education").append(HTMLschoolName.replace("%data%", education["name"]));
$("#education").append(HTMLschoolLocation.replace("%data%", education.location));