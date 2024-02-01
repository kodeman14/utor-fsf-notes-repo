// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
}

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Gets project data from local storage and displays it
function printProjectData() {
  // clear current projects on the page
  projectDisplayEl.empty();

  // get projects from localStorage
  var projects = readProjectsFromStorage();

  // loop through each project and create a row
  for (var i = 0; i < projects.length; i += 1) {
    var project = projects[i];
    var projectDate = dayjs(project.date);
    // get date/time for start of today
    var today = dayjs().startOf('day');

    // Create row and columns for project
    var rowEl = $('<tr>');
    var nameEL = $('<td>').text(project.name);
    var typeEl = $('<td>').text(project.type);
    var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));

    // Save the index of the project as a data-* attribute on the button. This
    // will be used when removing the project from the array.
    var deleteEl = $(
      '<td><button class="btn btn-sm btn-delete-project" data-index="' +
        i +
        '">X</button></td>'
    );

    // add class to row by comparing project date to today's date
    if (projectDate.isBefore(today)) {
      rowEl.addClass('project-late');
    } else if (projectDate.isSame(today)) {
      rowEl.addClass('project-today');
    }

    // append elements to DOM to display them
    rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    projectDisplayEl.append(rowEl);
  }
}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {
  var projectIndex = parseInt($(this).attr('data-index'));
  var projects = readProjectsFromStorage();
  // remove project from the array
  projects.splice(projectIndex, 1);
  saveProjectsToStorage(projects);

  // print projects
  printProjectData();
}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  event.preventDefault();

  // read user input from the form
  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val(); // don't need to trim select input
  var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format

  var newProject = {
    name: projectName,
    type: projectType,
    date: projectDate,
  };

  // add project to local storage
  var projects = readProjectsFromStorage();
  projects.push(newProject);
  saveProjectsToStorage(projects);

  // print project data
  printProjectData();

  // clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

projectFormEl.on('submit', handleProjectFormSubmit);

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

displayTime();
setInterval(displayTime, 1000);

printProjectData();
