  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  $(".item").eq(0).show()
  
  
  $(".test").click(function(){
    console.log("hi");
    $(".item").slideUp(500)
    if ($(this).next().css("display")=="none") {
      $(this).next().slideDown(500)
    }else {
      $(this).next().slideUP(500)
    }
      
  })



   // Set the target date for the event (October 25, 2023)
   const targetDate = new Date('2023-10-25');
   let timeDifference = 0;

   // Retrieve the time difference from local storage, if available
   const savedTimeDifference = localStorage.getItem('timeDifference');
   if (savedTimeDifference) {
     timeDifference = parseInt(savedTimeDifference);
   } else {
     // Calculate the initial time difference if not available in local storage
     const currentDate = new Date();
     currentDate.setHours(0, 0, 0, 0); // Set current date to midnight
     targetDate.setHours(0, 0, 0, 0); // Set target date to midnight
     timeDifference = targetDate - currentDate;
   }

   // Update the countdown every second
   setInterval(updateCountdown, 1000);

   function updateCountdown() {
     timeDifference -= 1000;

     // Save the updated time difference to local storage
     localStorage.setItem('timeDifference', timeDifference.toString());

     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     document.getElementById('days').textContent = `${days} D`;
     document.getElementById('hours').textContent = `${hours} H`;
     document.getElementById('minutes').textContent = `${minutes} M`;
     document.getElementById('seconds').textContent = `${seconds} S`;
   }



  function updateCount() {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    
    const remainingChars = 100 - textInput.value.length;
    
    if (remainingChars >= 0) {
      charCount.textContent = `${remainingChars} Characters Remaining`;
    } else {
      charCount.textContent = `Your available characters have finished`;
      textInput.value = textInput.value.substr(0, 100); // Truncate text to 100 characters
    }
  }




    
    