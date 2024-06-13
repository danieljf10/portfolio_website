// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("drop-navigation-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const exitpopup = document.getElementById("exit-button");
    // Toggle the dropdown menu visibility on window load
    dropdownMenu.classList.toggle("hidden");

    // Add event listener to the dropdown button
    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
    });

    exitpopup.onclick = function(){
        document.querySelector(".popup-cover").style.display = "none";
    }

    // Add event listener to the project card
    const projectCard = document.querySelector(".project-card");
    projectCard.addEventListener("mousedown", () => {
        const fitnessTracker = document.getElementById("fitness-tracker");
        if (fitnessTracker) {
            fitnessTracker.style.border = "1px solid white";
        }
        
        setTimeout(() => {
            showAndUpdatePopupInfo();
        }, 500);
    });

    // Function to show fitness tracker info
    
});

function showAndUpdatePopupInfo(index) {
    setTimeout(() => {
        const popup = document.querySelector(".popup-cover");
        popup.style.display = "block";
        popup.scrollIntoView({behavior: "smooth"});
    
        const popupTitle = document.getElementById("popup-title");
        const popupTags = document.getElementById("popup-tags");
        const popupDescription = document.getElementById("popup-description");
        const link = document.getElementById("project-link");
    
        if (index == 0) {
            popupTitle.textContent = "Fitness Tracker";
            popupTags.textContent = "#Java #Console #FitnessTracker"
            popupDescription.textContent = "For this project, I reinforced my understanding of important concepts of object-oriented programming. This fitness tracker console app features custom commands, performing calculations, and demonstrates objects interacting with one another. This app takes in the users activity, which depending on the activity gives custom prompts for the user to enter. Using the information the user enters, the app calculates and displays custom information tailored to the user. Additionally, custom messages are also presented to the user after completing an activity depending on how well they did.";
            link.href = "https://google.com";
        } if (index == 1){
             popupTitle.textContent = "Notes App";
            popupTags.textContent = "#ReactNative #Tailwind #JSX #NotesApp";
            popupDescription.textContent = "For this project, I learned concepts of React Native development, crafting a fully functional notes app as part of a course I took for fun. This app has key features such as creating, editing, saving, searching, and deleting notes, all integrated with a local database for data storage. The interface is styled using Tailwind and JSX, ensuring it maintains a clean, intuitive, and professional appearance. Users can manage their notes, with interactions & data handling. Throughout the development process spanning 4 weeks, I applied newfound skills in React Native, prioritizing the app’s functionality, user experience, & storage";
            link.href = "https://github.com/danieljf10/MyNotes";
        } if(index == 2) {
            popupTitle.textContent = "Website";
            popupTags.textContent = "#HTML #CSS #Javascript";
            popupDescription.textContent = "For this project, I created a portfolio website showcasing my web development abilities while also displaying my photography. This website was designed to have a clean and professional feel, while also adhering to web accessibility standards. Not only is this website clean and professional, but it is also responsive for devices such as phones, tablets, and personal computers.";
            link.href = "https://github.com/danieljf10/danieljf10.github.io";
        }
    }, 400);
   
}



/* 
// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("drop-navigation-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const exitpopup = document.getElementById("exit-button").onclick = function(){
        document.querySelector(".popup-cover").style.display = "none";
    }
    // Toggle the dropdown menu visibility on window load
    dropdownMenu.classList.toggle("hidden");

    // Add event listener to the dropdown button
    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
    });

    // Add event listener to the project card
    const projectCard = document.querySelector(".project-card");
    projectCard.addEventListener("mousedown", () => {
        const fitnessTracker = document.getElementById("fitness-tracker");
        if (fitnessTracker) {
            fitnessTracker.style.border = "1px solid white";
        }
        
        setTimeout(() => {
            showFitnessTrackerInfo();
        }, 500);
    });

    // Function to show fitness tracker info
    function showFitnessTrackerInfo() {
        const popup = document.querySelector(".popup-cover");
        popup.style.display = "block";
        popup.scrollIntoView({behavior: "smooth"});

        const popupTags = document.getElementById("popup-tags");
        // #Java #Console #FitnessTracker
        const popupTitle = document.getElementById("popup-title");
        const popupDescription = document.getElementById("popup-description");
        if (popupTitle) {
            popupTitle.textContent = "Fitness Tracker";
            popupTags.textContent = "#Java #Console #FitnessTracker"
            popupDescription.textContent = "For this project, I reinforced my understanding of important concepts of object-oriented programming. This fitness tracker console app features custom commands, performing calculations, and demonstrates objects interacting with one another. This app takes in the users activity, which depending on the activity gives custom prompts for the user to enter. Using the information the user enters, the app calculates and displays custom information tailored to the user. Additionally, custom messages are also presented to the user after completing an activity depending on how well they did.";
        
        }
    }
});
*/
