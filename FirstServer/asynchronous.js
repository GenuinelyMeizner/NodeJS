//Simple Callback Function
function callbackFunction() {
    console.log("I'm a callback function");
}

function higherOrderFunction(callback) {
    callback();
}
higherOrderFunction(callbackFunction);

//Asynchrnous Callback Function
const asynchrnousMessage = function showMessage() {
    console.log("This message is processed asynchronously");
}
setTimeout(asynchrnousMessage, 3000);

//Asynchronous Traditional Asynchronous Callback Function
const asynchrnousAnonymousMessage = function() {
    console.log("This message is processed asynchronously");
}
setTimeout(asynchrnousAnonymousMessage, 4000);

//Asynchronous Arrow Asynchronous Callback Function
const asynchrnousArrowMessage = () => {
    console.log("This message is processed asynchronously");
}
setTimeout(asynchrnousArrowMessage, 5000);

//Creating a promise - Consuming it with chaining - Error handling - Final
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving the asynchronous request!'), 6000)
})
promise.then((firstResponse) => {
    return firstResponse + ' chained then'
})
.then((secondResponse) => {
    console.log(secondResponse)
})
.catch((error) => {
    console.log(error)
})
.finally((finalMessage) =>{
    console.log('this will always show')
})

//Async function with await and try/catch
async function getGitHubAccount() {
    try {
        const response = await fetch('https://api.github.com/users/genuinelymeizner')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getGitHubAccount();