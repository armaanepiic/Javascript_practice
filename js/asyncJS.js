
// JS promise
// successful -> resolved
// failed -> rejected
const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "IIUC",
            location: "google meet",
            time: "10:00 PM"
        }
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already scheduled!"));
    }
})
meeting.then((res)=>{
    // resolved data
    console.log(res);
}).catch((err)=> {
    // rejected data
    console.log(err.message);
})







/*
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