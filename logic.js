function calculate() {


    let totalHours = 0;
    for (let i = 1; i <= 7; i++) {
      const startTime = document.getElementById(`startTime${i}`).value;
      const endTime = document.getElementById(`endTime${i}`).value;
      const breakDuration = document.getElementById(`breakDuration${i}`).value;

      const start = new Date("01/01/2021 " + startTime);
      const end = new Date("01/01/2021 " + endTime);
      const diff = end - start;
      const diffInHours = diff / 1000/60/60 ;
      console.log(diffInHours);
      const total = diffInHours - breakDuration;
      totalHours += total;
      document.getElementById(`totalHours${i}`).value = total
    }

    document.getElementById("result").innerHTML = totalHours + " hours";
  }
