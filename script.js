const DAYS = {
  frontHalf: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
  backHalf: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  donut: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
  waterfall1: ['Sunday', 'Monday', 'Tuesday', 'Saturday'],
  waterfall2: ['Thursday', 'Friday', 'Saturday', 'Sunday']
};

// Define shift data with preferences and availability
const frontHalfShift = [
  {
    name: 'Phil',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday', 'Tuesday'],
    unavailableDays: []
  },
  {
    name: 'Roger',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Monday', 'Wednesday'],
    unavailableDays: []
  },
  {
    name: 'Tyler',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Cordel',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday', 'Monday', 'Tuesday'],
    unavailableDays: []
  },
  {
    name: 'Heri',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Abra',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday', 'Tuesday'],
    unavailableDays: []
  },
  {
    name: 'John',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Eric',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Stan',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday', 'Wednesday'],
    unavailableDays: []
  },
  {
    name: 'Celeste',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday'],
    unavailableDays: []
  },
  {
    name: 'Jean',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Zach',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday', 'Tuesday'],
    unavailableDays: []
  },
  {
    name: 'David',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'ET',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Armando',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  }
];

const backHalfShift = [
  {
    name: 'Avara',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Mon',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: ['Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  {
    name: 'Arey anna',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Jonathon',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Kayla',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ryan',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Yam',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Santosh',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Angelica',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: ['Wednesday']
  },
  {
    name: 'Jason #2',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Lychele',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Lennon',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Caleb',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  }
];

const donutShift = [
  {
    name: 'Lavo',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ubaldo',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Damon',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: ['Monday', 'Thursday'],
    unavailableDays: []
  },
  {
    name: 'Kristen',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: ['Monday', 'Tuesday'],
    unavailableDays: []
  },
  {
    name: 'Nick',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ryan 1',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Olivia',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: ['Thursday', 'Friday'],
    unavailableDays: []
  },
  {
    name: 'Victor',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Will',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: ['Thursday', 'Friday'],
    unavailableDays: []
  }
];

const waterfallShift = [
  {
    name: 'Jeff',
    days: ['Sunday', 'Monday', 'Tuesday', 'Saturday'],
    preferredDays: [],
    unavailableDays: ['Sunday', 'Monday', 'Tuesday', 'Saturday']
  },
  {
    name: 'Lissette',
    days: ['Sunday', 'Monday', 'Tuesday', 'Saturday'],
    preferredDays: [],
    unavailableDays: ['Saturday']
  },
  {
    name: 'Anthony',
    days: ['Sunday', 'Monday', 'Tuesday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Alan',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Luna',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Marisa',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  },

  {
    name: 'Isidro',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'David 1',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: ['Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  {
    name: 'Fabien',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Patrick',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Jason ',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: ['Friday', 'Sunday'],
    unavailableDays: []
  }
];

const shifts = {
  1: frontHalfShift,
  2: backHalfShift,
  3: donutShift,
  4: waterfallShift
};

const schedule = {
  Sunday: [],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
};

// Helper function to get shift type color
function getColorForShift(shift) {
  switch (shift) {
    case '1':
      return 'frontHalfShift';
    case '2':
      return 'backHalfShift';
    case '3':
      return 'donutShift';
    case '4':
      return 'waterfallShift';
    default:
      return '';
  }
}

// Shuffle an array
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

function assignDaysToShifts() {
  // Clear previous schedule
  Object.keys(schedule).forEach((day) => (schedule[day] = []));

  // Flatten all shifts
  const allPeople = Object.keys(shifts).flatMap((shiftKey) => shifts[shiftKey]);

  // Iterate over each day and assign people
  Object.keys(schedule).forEach((day) => {
    const availablePeople = allPeople.filter(
      (person) =>
        person.days.includes(day) &&
        (!person.unavailableDays || !person.unavailableDays.includes(day))
    );

    // Sort people with preferences first
    const preferredFirst = availablePeople.sort((a, b) => {
      if (a.preferredDays.includes(day) && !b.preferredDays.includes(day))
        return -1;
      if (!a.preferredDays.includes(day) && b.preferredDays.includes(day))
        return 1;
      return 0;
    });

    // Shuffle remaining people to ensure random assignment
    const shuffledPeople = shuffleArray(preferredFirst);

    // Add people to the schedule ensuring a maximum of 14 or 16 later per day
    shuffledPeople.forEach((person) => {
      if (schedule[day].length < 16) {
        schedule[day].push({
          name: person.name,
          shift: getShiftForPerson(person),
          preferred: person.preferredDays.includes(day)
        });
      }
    });
  });

  // Highlight people scheduled more than 2 days
  const personDayCount = {};
  Object.values(schedule)
    .flat()
    .forEach((p) => {
      personDayCount[p.name] = (personDayCount[p.name] || 0) + 1;
    });

  Object.keys(schedule).forEach((day) => {
    schedule[day].forEach((person) => {
      if (personDayCount[person.name] > 2) {
        person.highlight = true;
      }
    });
  });

  // Display the schedule
  displaySchedule();
}

function getShiftForPerson(person) {
  for (const shiftKey in shifts) {
    if (shifts[shiftKey].some((p) => p.name === person.name)) {
      return shiftKey;
    }
  }
  return 'Undefined';
}

function displaySchedule() {
  const scheduleContainer = document.getElementById('schedule');
  scheduleContainer.innerHTML = '';

  Object.keys(schedule).forEach((day) => {
    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    dayElement.innerHTML = `<h3>${day}</h3>`;

    schedule[day].forEach((person) => {
      const personElement = document.createElement('div');
      personElement.className = `person ${getColorForShift(person.shift)} ${
        person.highlight ? 'highlight' : ''
      } ${person.preferred ? 'preferred' : ''}`;
      personElement.textContent = `${person.name} (${person.shift})`;
      dayElement.appendChild(personElement);
    });

    scheduleContainer.appendChild(dayElement);
  });
}

// Initialize the schedule and display it
assignDaysToShifts();
document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const ignorePreferredDaysBtn = document.getElementById(
    'ignorePreferredDaysBtn'
  );

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      assignDaysToShifts(false); // Don't ignore preferred days
    });
  } else {
    console.error('Generate button not found in the DOM.');
  }

  if (ignorePreferredDaysBtn) {
    ignorePreferredDaysBtn.addEventListener('click', () => {
      assignDaysToShifts(true); // Ignore preferred days
    });
  } else {
    console.error('Ignore preferred days button not found in the DOM.');
  }
});

// // Modify the assignDaysToShifts function to handle ignoring preferred days
// function assignDaysToShifts(ignorePreferredDays = false) {
//   // Clear previous schedule
//   Object.keys(schedule).forEach((day) => (schedule[day] = []));

//   // Flatten all shifts
//   const allPeople = Object.keys(shifts).flatMap((shiftKey) => shifts[shiftKey]);

//   // Iterate over each day and assign people
//   Object.keys(schedule).forEach((day) => {
//     const availablePeople = allPeople.filter(
//       (person) =>
//         person.days.includes(day) &&
//         (!person.unavailableDays || !person.unavailableDays.includes(day))
//     );

//     let sortedPeople;

//     // Sort people with preferences if we are NOT ignoring preferred days
//     if (ignorePreferredDays) {
//       // Shuffle people to ensure random assignment (ignoring preferences)
//       sortedPeople = shuffleArray(availablePeople);
//     } else {
//       // Sort people with preferences first
//       const preferredFirst = availablePeople.sort((a, b) => {
//         if (a.preferredDays.includes(day) && !b.preferredDays.includes(day))
//           return -1;
//         if (!a.preferredDays.includes(day) && b.preferredDays.includes(day))
//           return 1;
//         return 0;
//       });

//       // Shuffle remaining people to ensure random assignment
//       sortedPeople = shuffleArray(preferredFirst);
//     }

//     // Add people to the schedule ensuring a maximum of 14 per day
//     sortedPeople.forEach((person) => {
//       if (schedule[day].length < 14) {
//         schedule[day].push({
//           name: person.name,
//           shift: getShiftForPerson(person),
//           preferred: person.preferredDays.includes(day)
//         });
//       }
//     });
//   });

//   // Highlight people scheduled more than 2 days
//   const personDayCount = {};
//   Object.values(schedule)
//     .flat()
//     .forEach((p) => {
//       personDayCount[p.name] = (personDayCount[p.name] || 0) + 1;
//     });

//   Object.keys(schedule).forEach((day) => {
//     schedule[day].forEach((person) => {
//       if (personDayCount[person.name] > 2) {
//         person.highlight = true;
//       }
//     });
//   });

//   // Display the schedule
//   displaySchedule();
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const generateBtn = document.getElementById('generateBtn');
//   const ignorePreferredDaysBtn = document.getElementById(
//     'ignorePreferredDaysBtn'
//   );
//   const removeUnavailableBtn = document.getElementById('removeUnavailableBtn');

//   if (generateBtn) {
//     generateBtn.addEventListener('click', () => {
//       assignDaysToShifts(false); // Don't ignore preferred days
//     });
//   } else {
//     console.error('Generate button not found in the DOM.');
//   }

//   if (ignorePreferredDaysBtn) {
//     ignorePreferredDaysBtn.addEventListener('click', () => {
//       assignDaysToShifts(true); // Ignore preferred days
//     });
//   } else {
//     console.error('Ignore preferred days button not found in the DOM.');
//   }

//   if (removeUnavailableBtn) {
//     removeUnavailableBtn.addEventListener('click', () => {
//       removeUnavailablePeople(); // Remove people with no availability
//       assignDaysToShifts(false); // Regenerate schedule after removing unavailable people
//     });
//   } else {
//     console.error('Remove unavailable button not found in the DOM.');
//   }
// });

// // Function to remove people who are not available for any day
// function removeUnavailablePeople() {
//   // Filter out people who have no availability for any day
//   Object.keys(shifts).forEach((shiftKey) => {
//     shifts[shiftKey] = shifts[shiftKey].filter((person) => {
//       return person.days.length > 0; // Only keep people with available days
//     });
//   });
// }

// // Function to assign people to shifts (as before)
// function assignDaysToShifts(ignorePreferredDays = false) {
//   // Clear previous schedule
//   Object.keys(schedule).forEach((day) => (schedule[day] = []));

//   // Flatten all shifts
//   const allPeople = Object.keys(shifts).flatMap((shiftKey) => shifts[shiftKey]);

//   // Iterate over each day and assign people
//   Object.keys(schedule).forEach((day) => {
//     const availablePeople = allPeople.filter(
//       (person) =>
//         person.days.includes(day) &&
//         (!person.unavailableDays || !person.unavailableDays.includes(day))
//     );

//     let sortedPeople;

//     // Sort people with preferences if we are NOT ignoring preferred days
//     if (ignorePreferredDays) {
//       // Shuffle people to ensure random assignment (ignoring preferences)
//       sortedPeople = shuffleArray(availablePeople);
//     } else {
//       // Sort people with preferences first
//       const preferredFirst = availablePeople.sort((a, b) => {
//         if (a.preferredDays.includes(day) && !b.preferredDays.includes(day))
//           return -1;
//         if (!a.preferredDays.includes(day) && b.preferredDays.includes(day))
//           return 1;
//         return 0;
//       });

//       // Shuffle remaining people to ensure random assignment
//       sortedPeople = shuffleArray(preferredFirst);
//     }

//     // Add people to the schedule ensuring a maximum of 14 per day
//     sortedPeople.forEach((person) => {
//       if (schedule[day].length < 14) {
//         schedule[day].push({
//           name: person.name,
//           shift: getShiftForPerson(person),
//           preferred: person.preferredDays.includes(day)
//         });
//       }
//     });
//   });

//   // Highlight people scheduled more than 2 days
//   const personDayCount = {};
//   Object.values(schedule)
//     .flat()
//     .forEach((p) => {
//       personDayCount[p.name] = (personDayCount[p.name] || 0) + 1;
//     });

//   Object.keys(schedule).forEach((day) => {
//     schedule[day].forEach((person) => {
//       if (personDayCount[person.name] > 2) {
//         person.highlight = true;
//       }
//     });
//   });

//   // Display the schedule
//   displaySchedule();
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const generateBtn = document.getElementById('generateBtn');
//   const ignorePreferredDaysBtn = document.getElementById(
//     'ignorePreferredDaysBtn'
//   );
//   const removeUnavailableBtn = document.getElementById('removeUnavailableBtn');

//   if (generateBtn) {
//     generateBtn.addEventListener('click', () => {
//       assignDaysToShifts(false); // Don't ignore preferred days
//     });
//   } else {
//     console.error('Generate button not found in the DOM.');
//   }

//   if (ignorePreferredDaysBtn) {
//     ignorePreferredDaysBtn.addEventListener('click', () => {
//       assignDaysToShifts(true); // Ignore preferred days
//     });
//   } else {
//     console.error('Ignore preferred days button not found in the DOM.');
//   }

//   if (removeUnavailableBtn) {
//     removeUnavailableBtn.addEventListener('click', () => {
//       removeUnavailablePeople(); // Remove people with no availability
//       assignDaysToShifts(false); // Regenerate schedule after removing unavailable people
//     });
//   } else {
//     console.error('Remove unavailable button not found in the DOM.');
//   }
// });

// // Function to remove people who are not available for any day
// function removeUnavailablePeople() {
//   // Filter out people who have no availability for any day
//   Object.keys(shifts).forEach((shiftKey) => {
//     shifts[shiftKey] = shifts[shiftKey].filter((person) => {
//       return person.days.length > 0; // Only keep people with available days
//     });
//   });
// }

// // Function to assign people to shifts (as before)
// function assignDaysToShifts(ignorePreferredDays = false) {
//   // Clear previous schedule
//   Object.keys(schedule).forEach((day) => (schedule[day] = []));

//   // Flatten all shifts
//   const allPeople = Object.keys(shifts).flatMap((shiftKey) => shifts[shiftKey]);

//   // Iterate over each day and assign people
//   Object.keys(schedule).forEach((day) => {
//     const availablePeople = allPeople.filter(
//       (person) =>
//         person.days.includes(day) &&
//         (!person.unavailableDays || !person.unavailableDays.includes(day))
//     );

//     let sortedPeople;

//     // Sort people with preferences if we are NOT ignoring preferred days
//     if (ignorePreferredDays) {
//       // Shuffle people to ensure random assignment (ignoring preferences)
//       sortedPeople = shuffleArray(availablePeople);
//     } else {
//       // Sort people with preferences first
//       const preferredFirst = availablePeople.sort((a, b) => {
//         if (a.preferredDays.includes(day) && !b.preferredDays.includes(day))
//           return -1;
//         if (!a.preferredDays.includes(day) && b.preferredDays.includes(day))
//           return 1;
//         return 0;
//       });

//       // Shuffle remaining people to ensure random assignment
//       sortedPeople = shuffleArray(preferredFirst);
//     }

//     // Add people to the schedule ensuring a maximum of 14 per day
//     sortedPeople.forEach((person) => {
//       if (schedule[day].length < 14) {
//         schedule[day].push({
//           name: person.name,
//           shift: getShiftForPerson(person),
//           preferred: person.preferredDays.includes(day)
//         });
//       }
//     });
//   });

//   // Highlight people scheduled more than 2 days
//   const personDayCount = {};
//   Object.values(schedule)
//     .flat()
//     .forEach((p) => {
//       personDayCount[p.name] = (personDayCount[p.name] || 0) + 1;
//     });

//   Object.keys(schedule).forEach((day) => {
//     schedule[day].forEach((person) => {
//       if (personDayCount[person.name] > 2) {
//         person.highlight = true;
//       }
//     });
//   });

//   // Display the schedule
//   displaySchedule();
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const removeSelectedBtn = document.getElementById('removeSelectedBtn');

//   // Event listener for the remove selected button
//   if (removeSelectedBtn) {
//     removeSelectedBtn.addEventListener('click', () => {
//       removeSelectedPeople();
//     });
//   } else {
//     console.error('Remove selected button not found in the DOM.');
//   }
// });

// // Function to remove selected people
// function removeSelectedPeople() {
//   // Get all checkboxes with the 'removePersonCheckbox' class
//   const checkboxes = document.querySelectorAll('.removePersonCheckbox');

//   // Loop through each checkbox and remove the person if checked
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       // Find the parent element (the person div) and remove it
//       const personDiv = checkbox.closest('.person');
//       if (personDiv) {
//         personDiv.remove();
//       }
//     }
//   });
// }
// document.addEventListener('DOMContentLoaded', () => {
//   // Example list of people
//   const people = [
//     { id: 'person1', name: 'Jeff Gibson' },
//     { id: 'person2', name: 'Jane Smith' },
//     { id: 'person3', name: 'Mark Johnson' },
//     { id: 'person4', name: 'Emily Davis' }
//   ];

//   // Get the container where the list will be displayed
//   const personListContainer = document.getElementById('personList');

//   // Generate list of people with checkboxes
//   people.forEach((person) => {
//     const personDiv = document.createElement('div');
//     personDiv.classList.add('person');

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.classList.add('removePersonCheckbox');
//     checkbox.id = person.id;

//     const label = document.createElement('label');
//     label.setAttribute('for', person.id);
//     label.textContent = person.name;

//     // Append checkbox and label to the person div
//     personDiv.appendChild(checkbox);
//     personDiv.appendChild(label);

//     // Append the person div to the container
//     personListContainer.appendChild(personDiv);
//   });

//   // Add event listener for "Remove Selected People" button
//   const removeSelectedBtn = document.getElementById('removeSelectedBtn');
//   removeSelectedBtn.addEventListener('click', removeSelectedPeople);
// });

// // Function to remove selected people
// function removeSelectedPeople() {
//   // Get all checkboxes with the 'removePersonCheckbox' class
//   const checkboxes = document.querySelectorAll('.removePersonCheckbox');

//   // Loop through each checkbox and remove the person if checked
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       // Find the parent element (the person div) and remove it
//       const personDiv = checkbox.closest('.person');
//       if (personDiv) {
//         personDiv.remove();
//       }
//     }
//   });
// }
// document.addEventListener('DOMContentLoaded', () => {
//   // Example list of people with the structure you've provided
//   const people = [
//     {
//       name: 'Gibsonaj',
//       days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
//       preferredDays: [],
//       unavailableDays: []
//     },
//     {
//       name: 'Alice',
//       days: ['Monday', 'Tuesday', 'Wednesday'],
//       preferredDays: ['Monday'],
//       unavailableDays: ['Tuesday']
//     },
//     {
//       name: 'Bob',
//       days: ['Monday', 'Tuesday'],
//       preferredDays: ['Tuesday'],
//       unavailableDays: []
//     }
//   ];

//   // Get the container where the list will be displayed
//   const personListContainer = document.getElementById('personList');

//   // Generate list of people with checkboxes
//   people.forEach((person, index) => {
//     const personDiv = document.createElement('div');
//     personDiv.classList.add('person');

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.classList.add('removePersonCheckbox');
//     checkbox.id = `checkbox-${index}`; // Unique checkbox ID per person

//     const label = document.createElement('label');
//     label.setAttribute('for', checkbox.id);
//     label.textContent = person.name; // Show only the name

//     // Append checkbox and label to the person div
//     personDiv.appendChild(checkbox);
//     personDiv.appendChild(label);

//     // Append the person div to the container
//     personListContainer.appendChild(personDiv);
//   });

//   // Add event listener for "Remove Selected People" button
//   const removeSelectedBtn = document.getElementById('removeSelectedBtn');
//   removeSelectedBtn.addEventListener('click', removeSelectedPeople);
// });

// // Function to remove selected people
// function removeSelectedPeople() {
//   // Get all checkboxes with the 'removePersonCheckbox' class
//   const checkboxes = document.querySelectorAll('.removePersonCheckbox');

//   // Loop through each checkbox and remove the person if checked
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       // Find the parent element (the person div) and remove it
//       const personDiv = checkbox.closest('.person');
//       if (personDiv) {
//         personDiv.remove();
//       }
//     }
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // Example list of people
//   const people = [
//     {
//       name: 'Gibsonaj',
//       days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
//       preferredDays: [],
//       unavailableDays: []
//     },
//     {
//       name: 'Alice',
//       days: ['Monday', 'Tuesday', 'Wednesday'],
//       preferredDays: ['Monday'],
//       unavailableDays: []
//     },
//     {
//       name: 'Willsouc',
//       days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
//       preferredDays: [],
//       unavailableDays: []
//     }
//   ];

//   // Get the container where the list will be displayed
//   const personListContainer = document.getElementById('personList');

//   // Generate list of people with checkboxes
//   people.forEach((person, index) => {
//     const personDiv = document.createElement('div');
//     personDiv.classList.add('person');

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.classList.add('removePersonCheckbox');
//     checkbox.id = `checkbox-${index}`; // Unique checkbox ID per person

//     const label = document.createElement('label');
//     label.setAttribute('for', checkbox.id);
//     label.textContent = person.name; // Show only the name

//     // Append checkbox and label to the person div
//     personDiv.appendChild(checkbox);
//     personDiv.appendChild(label);

//     // Append the person div to the container
//     personListContainer.appendChild(personDiv);
//   });

//   // Event listener for "Remove Selected People" button
//   const removeSelectedBtn = document.getElementById('removeSelectedBtn');
//   if (removeSelectedBtn) {
//     removeSelectedBtn.addEventListener('click', removeSelectedPeople);
//   } else {
//     console.error('Remove selected button not found in the DOM.');
//   }

//   // Event listeners for other buttons
//   const generateBtn = document.getElementById('generateBtn');
//   const ignorePreferredDaysBtn = document.getElementById(
//     'ignorePreferredDaysBtn'
//   );
//   const removeUnavailableBtn = document.getElementById('removeUnavailableBtn');

//   if (generateBtn) {
//     generateBtn.addEventListener('click', () => {
//       assignDaysToShifts(false); // Don't ignore preferred days
//     });
//   }

//   if (ignorePreferredDaysBtn) {
//     ignorePreferredDaysBtn.addEventListener('click', () => {
//       assignDaysToShifts(true); // Ignore preferred days
//     });
//   }

//   if (removeUnavailableBtn) {
//     removeUnavailableBtn.addEventListener('click', () => {
//       removeUnavailablePeople(); // Remove people with no availability
//       assignDaysToShifts(false); // Regenerate schedule after removing unavailable people
//     });
//   }
// });

// // Function to remove selected people
// function removeSelectedPeople() {
//   // Get all checkboxes with the 'removePersonCheckbox' class
//   const checkboxes = document.querySelectorAll('.removePersonCheckbox');

//   // Loop through each checkbox and remove the person if checked
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       // Find the parent element (the person div) and remove it
//       const personDiv = checkbox.closest('.person');
//       if (personDiv) {
//         personDiv.remove();
//       }
//     }
//   });
// }

// // Function to remove people who are not available for any day
// function removeUnavailablePeople() {
//   // Filter out people who have no availability for any day
//   Object.keys(shifts).forEach((shiftKey) => {
//     shifts[shiftKey] = shifts[shiftKey].filter((person) => {
//       return person.days.length > 0; // Only keep people with available days
//     });
//   });
// }

// Function to assign people to shifts (as before)
function assignDaysToShifts(ignorePreferredDays = false) {
  // Clear previous schedule
  Object.keys(schedule).forEach((day) => (schedule[day] = []));

  // Flatten all shifts
  const allPeople = Object.keys(shifts).flatMap((shiftKey) => shifts[shiftKey]);

  //   // Iterate over each day and assign people
  Object.keys(schedule).forEach((day) => {
    const availablePeople = allPeople.filter(
      (person) =>
        person.days.includes(day) &&
        (!person.unavailableDays || !person.unavailableDays.includes(day))
    );

    let sortedPeople;

    // Sort people with preferences if we are NOT ignoring preferred days
    if (ignorePreferredDays) {
      // Shuffle people to ensure random assignment (ignoring preferences)
      sortedPeople = shuffleArray(availablePeople);
    } else {
      // Sort people with preferences first
      const preferredFirst = availablePeople.sort((a, b) => {
        if (a.preferredDays.includes(day) && !b.preferredDays.includes(day))
          return -1;
        if (!a.preferredDays.includes(day) && b.preferredDays.includes(day))
          return 1;
        return 0;
      });

      // Shuffle remaining people to ensure random assignment
      sortedPeople = shuffleArray(preferredFirst);
    }

    //     // Add people to the schedule ensuring a maximum of 16 per day
    sortedPeople.forEach((person) => {
      if (schedule[day].length < 16) {
        schedule[day].push({
          name: person.name,
          shift: getShiftForPerson(person),
          preferred: person.preferredDays.includes(day)
        });
      }
    });
  });

  // Highlight people scheduled more than 2 days
  const personDayCount = {};
  Object.values(schedule)
    .flat()
    .forEach((p) => {
      personDayCount[p.name] = (personDayCount[p.name] || 0) + 1;
    });

  Object.keys(schedule).forEach((day) => {
    schedule[day].forEach((person) => {
      if (personDayCount[person.name] > 2) {
        person.highlight = true;
      }
    });
  });

  // Display the schedule (this needs to be implemented separately)
  displaySchedule();
}
// Highlight people scheduled more than 2 days
const personDayCount = {};
Object.values(schedule)
  .flat()
  .forEach((p) => {
    personDayCount[p.name] = (personDayCount[p.name] || 0) + 1;
  });

Object.keys(schedule).forEach((day) => {
  schedule[day].forEach((person) => {
    if (personDayCount[person.name] > 2) {
      person.highlight = true; // Mark person as highlighted
    }
  });
});

// Apply highlight class in the DOM
function applyHighlights() {
  // Go through all people and apply a highlight if needed
  Object.keys(schedule).forEach((day) => {
    schedule[day].forEach((person) => {
      const personElement = document.querySelector(`#person-${person.name}`);
      if (person.highlight) {
        personElement.classList.add('highlight'); // Add highlight class
      } else {
        personElement.classList.remove('highlight'); // Remove highlight if no longer needed
      }
    });
  });
}

// Call applyHighlights after schedule update
applyHighlights();

// Display the schedule
displaySchedule();
// Combine all shifts into one array for easy iteration
const allShifts = [frontHalfShift, backHalfShift, donutShift, waterFallShift];

// Get the container where the list of people will be displayed
const personListContainer = document.getElementById('personList');

// // Function to populate the remove section with names and checkboxes
// function populateRemoveSection() {
//   allShifts.forEach((shift, shiftIndex) => {
//     shift.forEach((person, personIndex) => {
//       const personDiv = document.createElement('div');
//       personDiv.classList.add('person');

//       const checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.classList.add('removePersonCheckbox');
//       checkbox.id = `checkbox-${shiftIndex}-${personIndex}`; // Unique checkbox ID for each person

//       const label = document.createElement('label');
//       label.setAttribute('for', checkbox.id);
//       label.textContent = person.name; // Only show the name

//       // Append checkbox and label to the person div
//       personDiv.appendChild(checkbox);
//       personDiv.appendChild(label);

//       // Append the person div to the container
//       personListContainer.appendChild(personDiv);
//     });
//   });
// }

// // Call this function when the page loads or when you need to populate the remove section
// document.addEventListener('DOMContentLoaded', populateRemoveSection);

// // Function to remove selected people
// function removeSelectedPeople() {
//   // Get all checkboxes with the 'removePersonCheckbox' class
//   const checkboxes = document.querySelectorAll('.removePersonCheckbox');

//   // Loop through each checkbox and remove the person if checked
//   checkboxes.forEach((checkbox, index) => {
//     if (checkbox.checked) {
//       // Find the shift and person index from the checkbox ID
//       const [shiftIndex, personIndex] = checkbox.id
//         .split('-')
//         .slice(1)
//         .map(Number);

//       // Remove the person from the corresponding shift array
//       allShifts[shiftIndex].splice(personIndex, 1);

//       // Remove the div from the DOM
//       const personDiv = checkbox.closest('.person');
//       if (personDiv) {
//         personDiv.remove();
//       }
//     }
//   });
// }

// // Add event listener for "Remove Selected People" button
// const removeSelectedBtn = document.getElementById('removeSelectedBtn');
// removeSelectedBtn.addEventListener('click', removeSelectedPeople);
