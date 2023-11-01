document.addEventListener('DOMContentLoaded', function () {
    feather.replace(); 

    const changeLocationButton = document.getElementById('change-location-button');
    changeLocationButton.addEventListener('click', () => {
        const newLocation = prompt('Enter a new location:');
        if (newLocation !== null) {
            const locationElement = document.querySelector('.location');
            locationElement.textContent = newLocation;
        }
    });
});


