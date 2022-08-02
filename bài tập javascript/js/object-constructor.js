var hotel = new Object();
    hotel.name = 'Park';
    hotel.room = 120;
    hotel.booked = 77;
    checkAvailability = function (){
        return this.rooms - this.booked;
    }

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;
var elName = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();