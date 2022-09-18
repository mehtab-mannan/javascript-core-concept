const hasMeeting = false;
const promise = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meeting = {
            name: "technical meetin",
            location: "zoom",
            time: "10am"
        };
        resolve(meeting);
    } else {
        reject(new Error("done"))
    }
});
promise.then((result) => {
    // get resolve data here
    console.log(JSON.stringify(result))
}).catch((error) => {
    // get rejected data here
    console.log(error.message)
})