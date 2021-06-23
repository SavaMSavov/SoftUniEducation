const Hotel = require("../models/Hotel");

async function createHotel(hotelData) {

  const hotel = new Hotel(hotelData);
  await hotel.save();

  return hotel;
}

async function getAllHotels() {
  const hotels = await Hotel.find({});

  return hotels;
}
async function getHotelById(id) {
  const hotel = await Hotel.findById();

  return hotels;
}

module.exports = {
  createHotel,
  getAllHotels,
  getHotelById,
};
