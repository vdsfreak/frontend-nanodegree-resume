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
    "name": "Chris Gingerich",
    "role": "Web design and Windows software developer",
    "contacts": {
        "email": "cgingerich@gmail.com",
        "mobile": "(920) 217-2348",
        "blog": "http://vdsfreak.com",
        "linkedin": "https://www.linkedin.com/in/cgingerich"
    },
    "bioPic": "images/me.jpg",
    "welcomeMsg": "Welcome! Thanks for viewing my resume!",
    "location": "Carrboro, North Carolina",
    "skills": [" Visual Dialogscript", " JavaScript", " HTML", " Adobe Photoshop", " AutoCAD"],
};

formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').prepend(formattedRole);

formattedName = HTMLheaderName.replace('%data%', bio.name);
$('#header').prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);
$("#footerContacts").append(formattedBlog);


formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
$('#bio').prepend(formattedWelcomeMsg);

formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
$('#bio').prepend(formattedBioPic);

if (bio.skills.length > 0) {
    $(HTMLskillsStart).insertAfter('.welcome-message');
    for (var key in bio.skills) {
        if (bio.skills.hasOwnProperty(key)) {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[key]);
            $("#skills:last").append(formattedSkills);
        }
    }
}

var education = {
    "schools": [{
        "name": "York Technical Institute",
        "location": "York, Pennsylvania",
        "degree": "Associates degree",
        "dates": "2007-2009",
        "url": "http://yti.edu",
        "major": "Computer aided drafting and design"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://udacity.com"
    }]
};

function displaySchools() {
    for (var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            $(".education-entry:last").append(formattedMajor);
        }
    }
}



function displayOnline() {
    for (var school in education.onlineCourses) {
        if (education.schools.hasOwnProperty(school)) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
}

displaySchools();
displayOnline();

var work = {
    "jobs": [{
        "title": "IT Administrator",
        "employer": "InsureSign",
        //"years" : "5",
        "location": "Chapel Hill, North Carolina",
        "dates": "June 16, 2011 - Present",
        "description": "Develop Windows software for sending documents to be signed electronically."
    }, ]
};

var projects = {
    "projects": [{
        //"start" : "1/13/2016",
        "title": "Portfolio",
        "dates": "Jan 13, 2016 - Jan 18, 2016",
        "description": "First project at Udacity.",
        "images": [""]
    }, {
        //"start" : "1/13/2016",
        "title": "InsureSign",
        "dates": "June 16, 2011 - Present",
        "description": "Windows software to allow people to send documents for digital signing.",
        "images": ["http://insuresign.com/images/logo.jpg"]
    }]
};

projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    if (projects.projects[project].images.hasOwnProperty(image)) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};




//displayContacts();



//$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
//$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

projects.display();



function displayWork() {
    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}


displayWork();

$("#mapDiv").append(googleMap);

//console.log(locaions);

//$(document).click(function(loc) {
//	var x = loc.pageX;
//	var y = loc.pageY;
//  logClicks(x,y);
//});


//$("#main").append(internationalizeButton);
//$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

//$("#header").append(HTMLlocation.replace("%data%", bio.location));
//$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
//$("#header").append(HTMLskills.replace("%data%", bio.skills));

//$("#projects").append(HTMLprojectTitle.replace("%data%", project.title));

//$("#workExperience").append(HTMLworkStart.replace("%data%", work.start));
//$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));

//$("#education").append(HTMLschoolName.replace("%data%", education["name"]));
//$("#education").append(HTMLschoolLocation.replace("%data%", education.location));