const hasMeeting = false;
const promise = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "technical meetin",
            location: "zoom",
            time: "10am"
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("done"))
    }
});

// declare multiple promise-------

// const addToCalendar = (meeting) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meeting.name}`;
//         resolve(calendar)
//     })
// };
//OR----------thus is another way
const addToCalendar = (meetingDetails) => {
    const calendar = `meeting has been held on ${meetingDetails.location}`
    return Promise.resolve(calendar);
    
};
promise
    .then(addToCalendar)
    .then((result) => {
    // get resolve data here
    // console.log(JSON.stringify(result))
}).catch((error) => {
    // get rejected data here
    // console.log(error.message)
});

const promise1 = Promise.resolve('promise 1 resolved');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 2 resolved')
    }, 2000);
})
Promise.all([promise1, promise2]).then((res) => {
    // console.log(res);
})

let isValid = true;

const tea = new Promise((resolve, reject) => {
    if (isValid) {
        setTimeout(() => {
            
            resolve('tea is perfect')
        },2000)
        
    } else {
        reject(new Error("not good"))
    }
});

tea.then((res) => {
    // console.log(res)
})
    .catch(err => {
        console.log(err)
    });

    // console.log('sumaia')