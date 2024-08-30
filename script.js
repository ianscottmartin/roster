// Define shift data with preferences and availability
const frontHalfShift = [
  {
    name: 'Tylerlof',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday'],
    unavailableDays: ['Wednesday']
  },
  {
    name: 'Fcordecl',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Qgarciph',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Tuesday'],
    unavailableDays: ['Sunday', 'Wednesday']
  },
  {
    name: 'Rogernew',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: ['Sunday', 'Tuesday']
  },
  {
    name: 'Abbymmca',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Tuesday'],
    unavailableDays: ['Sunday', 'Monday', 'Wednesday']
  },
  {
    name: 'uttwilla',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
  },
  {
    name: 'Soucyjea',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: ['Tuesday']
  },
  {
    name: 'Zafenner',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: ['Sunday', 'Tuesday']
  },
  {
    name: 'Esstve',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Wednesday'],
    unavailableDays: []
  },
  {
    name: 'Mcasarel',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday', 'Tuesday'],
    unavailableDays: []
  },
  {
    name: 'Gomantoi',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Jajoshuv',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Colewabr',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: ['Sunday'],
    unavailableDays: []
  },
  {
    name: 'Walkccal',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Edevidav',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Phampjo',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Rosazana',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ticene',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    preferredDays: [],
    unavailableDays: []
  }
];

const backHalfShift = [
  {
    name: 'Hstanwhi',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Claugalv',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Esalexah',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Duraheri',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'hetzejas',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Avalda',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Glaisham',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ryabeck',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Faavarap',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Bkaylalo',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Monbahgu',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Jjenstra',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Baldeall',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Hoffmcol',
    days: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    preferredDays: [],
    unavailableDays: []
  }
];

const donutShift = [
  {
    name: 'Willsouc',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: ['Friday']
  },
  {
    name: 'Nichputt',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Oggross',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Victorqg',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ruelasu',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Suanubia',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Lavoscot',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ryadabru',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Ashineup',
    days: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    preferredDays: [],
    unavailableDays: []
  }
];

const waterfallShift = [
  {
    name: 'Victoiol',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: ['Sunday'],
    unavailableDays: []
  },
  {
    name: 'Jaevertt',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  },
  {
    name: 'Gibsonaj',
    days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    preferredDays: [],
    unavailableDays: []
  }
];

const shifts = {
  FrontHalf: frontHalfShift,
  BackHalf: backHalfShift,
  Donut: donutShift,
  Waterfall: waterfallShift
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
    case 'FrontHalf':
      return 'frontHalfShift';
    case 'BackHalf':
      return 'backHalfShift';
    case 'Donut':
      return 'donutShift';
    case 'Waterfall':
      return 'waterfallShift';
    default:
      return '';
  }
}

function assignDaysToShifts() {
  // Clear previous schedule
  Object.keys(schedule).forEach((day) => (schedule[day] = []));

  // Flatten all shifts
  const allPeople = Object.keys(shifts).flatMap((shiftKey) => shifts[shiftKey]);
  console.log('All People:', allPeople); // Debugging output

  // Iterate over each day and assign people
  Object.keys(schedule).forEach((day) => {
    // Filter people available for the day and not marked as unavailable
    const availablePeople = allPeople.filter(
      (person) =>
        person.days.includes(day) &&
        (!person.unavailableDays || !person.unavailableDays.includes(day))
    );

    // Shuffle availablePeople to ensure random assignment
    const shuffledPeople = shuffleArray(availablePeople);

    // Add people to the schedule ensuring a maximum of 14 per day
    shuffledPeople.forEach((person) => {
      if (schedule[day].length < 14) {
        console.log(`Adding ${person.name} to ${day}`); // Debugging output
        schedule[day].push({
          name: person.name,
          shift: getShiftForPerson(person),
          preferred: person.preferredDays
            ? person.preferredDays.includes(day)
            : false
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

  // Debugging output
  console.log('Final Schedule:', schedule);
}

function getShiftForPerson(person) {
  for (const shiftKey in shifts) {
    if (shifts[shiftKey].some((p) => p.name === person.name)) {
      console.log(`Shift for ${person.name}: ${shiftKey}`); // Debugging output
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
      console.log(`Displaying ${person.name} for ${day} (${person.shift})`); // Debugging output
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

// Utility function to shuffle an array
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

// Initialize the schedule and display it
assignDaysToShifts();
displaySchedule();
