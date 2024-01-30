 const checkMaintenance = () => {

    const apiEndpoint = 'https://takshalabs-next-app.vercel.app/projects/65b80fdab66646415b9ecf25';

    return fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch maintenance status. Status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            // Assuming the API response has a property 'maintenance' indicating the status
            if (data.maintenanceStatus) {
                console.log('The system is under maintenance.');
                return true;
                // You can add further logic here for handling maintenance mode
            } else {
                console.log('The system is not under maintenance.');
                return false
                // Continue with normal operations
            }
        })
        .catch(error => {
            console.error('Error fetching maintenance status:', error.message);
            return true
            // Handle the error as needed (e.g., show an error message to the user)
        });
};
