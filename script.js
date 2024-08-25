document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const responseDiv = document.getElementById('response');
    const questionDiv = document.getElementById('question');
    const countdownDiv = document.getElementById('countdown');

    function resetButtonStyles() {
        yesButton.classList.remove('highlight-yes');
        noButton.classList.remove('highlight-no');
        yesButton.disabled = false;
        noButton.disabled = false;
        yesButton.classList.remove('hidden');
        noButton.classList.remove('hidden');
        responseDiv.innerHTML = ''; // Clear the responseDiv content
        countdownDiv.classList.add('hidden'); // Hide the countdown timer
        questionDiv.classList.remove('hidden'); // Show the question again
    }

    function startCountdown() {
        let timeLeft = 5; // Countdown time in seconds
        countdownDiv.classList.remove('hidden');
        
        const interval = setInterval(() => {
            countdownDiv.textContent = `Try again in ${timeLeft} seconds...`;
            timeLeft -= 1;
            
            if (timeLeft < 0) {
                clearInterval(interval);
                countdownDiv.classList.add('hidden');
                resetButtonStyles();
            }
        }, 1000);
    }

    function notifyChoice(choice) {
        console.log('Choice selected:', choice);
        // Optional: Implement email notification or other methods here
    }

    yesButton.addEventListener('click', () => {
        responseDiv.innerHTML = `
            <div class="she-said-yes-message">She said yes ❤️</div>
            <span class="enlarge-emoji">🎉</span>
            <span class="enlarge-message">Woohoo! Let's celebrate!</span>
            <span class="enlarge-emoji">🎉</span>
            <div class="call-message">Gimme a call cutie, I miss you! Let's meet soon ❤️ 💫</div>
        `;
        responseDiv.style.color = 'green';
        
        // Update Yes button content and hide No button
        yesButton.classList.add('hidden'); // Hide the Yes button
        noButton.classList.add('hidden'); // Hide the No button
        questionDiv.classList.add('hidden'); // Hide the question

        // Notify via email or other means
        notifyChoice('Yes');

        // Show the additional message after a 5-second pause
        setTimeout(() => {
            responseDiv.innerHTML = `
                <div class="additional-message">I’m so excited you said yes! 🌟 Come soon because I can’t wait for us to have an amazing time together. We’ll go on an adventure, do all your favorite things, and eat all your favorite foods. 💖</div>
            `;
            responseDiv.style.color = '#FF69B4'; // Optional: Pink color for emphasis

            // Hide the "She said yes ❤️" message
            const sheSaidYesMessage = document.querySelector('.she-said-yes-message');
            if (sheSaidYesMessage) {
                sheSaidYesMessage.classList.add('hidden'); // Hide the "She said yes ❤️" message
            }
        }, 5000);
    });

    noButton.addEventListener('click', () => {
        responseDiv.innerHTML = `
            <div class="why-no-message">Why no? 😢</div>
            <div class="large-message">Hawww, take your decision wisely bro</div>
        `;
        responseDiv.style.color = 'red';
        
        // Update the style for No button and hide Yes button
        noButton.classList.add('highlight-no');
        noButton.classList.add('hidden'); // Hide the No button
        yesButton.classList.add('hidden'); // Hide the Yes button
        questionDiv.classList.add('hidden'); // Hide the question

        // Start countdown
        startCountdown();

        // Notify via email or other means
        notifyChoice('No');
    });
});
