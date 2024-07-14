document.getElementById('bid-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const tenure = document.getElementById('tenure').value;
    console.log(`Submitting bid: Amount ${amount}, Interest ${interest}%, Tenure ${tenure} days`);
    // Implement logic to submit bid and display it for borrowers
});
// document.getElementById('dashboard-button').addEventListener('click', function() {
//     const messageBox = document.getElementById('available-soon');
//     messageBox.classList.add('visible');
//     setTimeout(() => {
//         messageBox.classList.remove('visible');
//     }, 3000);
// });

document.getElementById('dashboard-button').addEventListener('click', function() {
    const availableSoonBox = document.getElementById('available-soon');
    availableSoonBox.classList.remove('hidden');
    setTimeout(() => {
        availableSoonBox.classList.add('hidden');
    }, 3000); // Hide after 3 seconds
});
