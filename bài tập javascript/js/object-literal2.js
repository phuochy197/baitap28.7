var hotel = {
    name : 'Park',
    room : 1200,
    booked : 77,
    checkAvailability : function (){
        return this.rooms - this.booked;
    }
}
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;
var elName = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();