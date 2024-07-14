document.getElementById('borrow-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const days = document.getElementById('days').value;
    console.log(`Searching for bids for amount: ${amount}, days: ${days}`);
    // Add functionality to search for available bids
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
