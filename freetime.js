function calculateFreeTime(start, end, appts) {
  // make sure no appointments are out of bounds
  // or have "negative duration"
  appts.forEach(appt => {
    if (appt.end < appt.start) {
      appt.end = appt.start;
    }
    if (appt.start < start) {
      appt.start = start;
    }
    if (appt.end > end) {
      appt.end = end;
    }
  });
  
  // sorting will help us later...
  appts.sort((a, b) => {
    return a.start - b.start;
  });
    
  for (let i = 1; i < appts.length; i++) {
    if (appts[i].start < appts[i - 1].end) {
      // not exactly merging these,
      // to avoid changing the length of the array.
      // Just making sure they don't overlap.
      appts[i].start = appts[i - 1].end;

      if (appts[i].end < appts[i - 1].end) {
        appts[i].end = appts[i - 1].end;
      }
    }
  }

  // since none of our appoints overlap or are out-of-bounds,
  // we can just sum their durations.
  let busyTimeMs = 0;
  appts.forEach(appt => {
    busyTimeMs += appt.end - appt.start;
  })
  busyTimeMin = busyTimeMs / 1000 / 60;
  
  const totalMs = end - start;
  const totalMin = totalMs / 1000 / 60;
  const freeTimeMin = totalMin - busyTimeMin;

  return freeTimeMin;
}

// first test case:
let startTime = new Date('2019-04-01T09:00:00');
let endTime = new Date('2019-04-01T17:00:00');
let appts = [
  {
    start : new Date('2019-04-01T10:00:00'),
    end : new Date('2019-04-01T10:30:00')
  },
  {
    start : new Date('2019-04-01T11:00:00'),
    end : new Date('2019-04-01T12:00:00')
  },
  {
    start : new Date('2019-04-01T08:00:00'),
    end : new Date('2019-04-01T09:30:00')
  }
]


let freeTimeMin = calculateFreeTime(startTime, endTime, appts);
console.log('First test case:');
console.log(freeTimeMin);


// Second test case: 
startTime = new Date('2019-04-01T09:00:00');
endTime = new Date('2019-04-01T12:00:00');
appts = [
  {
    start : new Date('2019-04-01T09:00:00'),
    end : new Date('2019-04-01T11:00:00')
  },
  {
    start : new Date('2019-04-01T11:00:00'),
    end : new Date('2019-04-01T11:30:00')
  },
  {
    start : new Date('2019-04-01T08:00:00'),
    end : new Date('2019-04-01T09:30:00')
  }
]

freeTimeMin = calculateFreeTime(startTime, endTime, appts);
console.log('second test case:');
console.log(freeTimeMin);


// Third test case: 
startTime = new Date('2019-04-01T09:00:00');
endTime = new Date('2019-04-01T12:00:00');
appts = [
  {
    start : new Date('2019-04-01T11:00:00'),
    end : new Date('2019-04-01T11:30:00')
  },
  {
    start : new Date('2019-04-01T11:00:00'),
    end : new Date('2019-04-01T15:00:00')
  },
  {
    start : new Date('2019-04-01T09:00:00'),
    end : new Date('2019-04-01T08:30:00')
  }
]

freeTimeMin = calculateFreeTime(startTime, endTime, appts);
console.log('third test case:');
console.log(freeTimeMin);
