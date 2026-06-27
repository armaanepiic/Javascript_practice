// JS promise
// successful -> resolved
// failed -> rejected

// async function friendlyFunction() {
//     return "hello";
// }
// console.log(friendlyFunction());


const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "IIUC",
      location: "google meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled!"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

async function myMeeting() {
    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalender(meetingDetails);
        console.log(calendar);
    }
    catch{
        console.log(`something wrong happened`);
    }
}

myMeeting();







/*
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 resolved`);
    }, 5000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res);
// });
// the promise finishes first it will be printed => Promise.race()
Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});



const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "IIUC",
      location: "google meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled!"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    // resolved data
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    // rejected data
    console.log(err.message);
  });

console.log(`hello`);


const processOrder = (customer) => {
    console.log(`processing order for customer 1`);

    setTimeout(()=>{
        console.log(`cooking completed`);
    },3000);

    console.log(`order processed for customer 1`);
}
console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);
*/
