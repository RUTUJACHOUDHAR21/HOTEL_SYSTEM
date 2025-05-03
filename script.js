function bookRoom(roomNumber) {
  document.getElementById("booking-output").innerHTML =
    `✅ Room ${roomNumber} selected. You may fill the form below to book.`;
  document.getElementById("room").value = roomNumber;
}

function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const room = document.getElementById("room").value;
  const days = document.getElementById("days").value;

  document.getElementById("booking-output").innerHTML =
    `🎉 Booking Confirmed! ${name}, Room ${room} for ${days} day(s).`;
}

function checkAvailability() {
  const room = document.getElementById("check-room").value;
  const unavailable = ["101"]; // simulate Room 101 as booked

  if (unavailable.includes(room)) {
    document.getElementById("availability-output").innerHTML =
      `❌ Room ${room} is not available.`;
  } else {
    document.getElementById("availability-output").innerHTML =
      `✅ Room ${room} is available.`;
  }
}
