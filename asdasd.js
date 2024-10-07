
  document.querySelector("button").addEventListener("click", function() {

    const dayInput = document.querySelectorAll("input")[0];
    const monthInput = document.querySelectorAll("input")[1];
    const yearInput = document.querySelectorAll("input")[2];

    const dayError = document.querySelectorAll(".error-message")[0];
    const monthError = document.querySelectorAll(".error-message")[1];
    const yearError = document.querySelectorAll(".error-message")[2];

    
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";

    
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;

    let valid = true;

    
    if (!day || day < 1 || day > 31) {
      dayError.textContent = "Please enter a valid day (1-31).";
      valid = false;
    }
    if (!month || month < 1 || month > 12) {
      monthError.textContent = "Please enter a valid month (1-12).";
      valid = false;
    }
    if (!year || year > new Date().getFullYear()) {
      yearError.textContent = "Please enter a valid year (must be in the past).";
      valid = false;
    }
    
    if (valid) {
      const inputDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      if (inputDate <= currentDate) {
        
        let yearsPassed = currentDate.getFullYear() - inputDate.getFullYear();
        let monthsPassed = currentDate.getMonth() - inputDate.getMonth();
        let daysPassed = currentDate.getDate() - inputDate.getDate();

        
        if (daysPassed < 0) {
          monthsPassed -= 1;
          daysPassed += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        
        if (monthsPassed < 0) {
          yearsPassed -= 1;
          monthsPassed += 12;
        }

        document.querySelectorAll("#kimenet span")[0].textContent = yearsPassed; // évek
        document.querySelectorAll("#kimenet span")[1].textContent = monthsPassed; // hónapok
        document.querySelectorAll("#kimenet span")[2].textContent = daysPassed; // napok
      } else {
        yearError.textContent = "The date you entered is in the future.";
      }
    }
  });

