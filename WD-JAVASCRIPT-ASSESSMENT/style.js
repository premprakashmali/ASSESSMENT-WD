function myfunction() {
    var bookingtype = document.getElementById("bookingtype").value;
    var slot = document.getElementById("slot-1");
    var time = document.getElementById("time-1");
    var date = document.getElementById("date-1");

    if (bookingtype === "fullDay") {
        slot.style.display = "none";
        time.style.display = "none";
        date.style.display = "block";
    } else if (bookingtype === "halfDay") {
        slot.style.display = "block";
        date.style.display = "block";
        time.style.display = "none";

    } else if (bookingtype === "hourly") {
        slot.style.display = "none";
        time.style.display = "block";
        date.style.display = "block";
    }
  
}
