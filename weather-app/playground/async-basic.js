console.log('Starting the app');

setTimeiut(() => {
    console.log('Inside of callback');
}, 2000);

console.log('Finishing the app');