const celebrations = ['Wedding', 'Engagement', 'Haldi', 'Mehendi', 'Sangeet', 'Reception', 'Private celebration']
const slugify = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const venue = (name, location, type, source = null) => ({
  name,
  location,
  type,
  capacity: 'Confirmed with the property on enquiry',
  description: `${name} is a ${type.toLowerCase()} in ${location}, considered for destination celebrations by AV Celebrations.`,
  suitableEvents: celebrations,
  amenities: ['Venue coordination on enquiry', 'Event-space guidance', 'Accommodation and catering details confirmed with the property'],
  pricing: 'Price on request',
  officialSource: source,
  // Only official or specifically licensed, property-level photos belong here.
  // Empty galleries deliberately render an honest verification state instead of generic imagery.
  imageGallery: [],
})

const venueListByDestination = {
  Goa: [
    venue('Taj Exotica Resort & Spa, Goa', 'Benaulim, South Goa', 'Beachfront luxury resort', 'https://www.tajhotels.com/en-in/hotels/taj-exotica-goa'),
    venue('The St. Regis Goa Resort', 'Mobor, South Goa', 'Beachfront luxury resort'),
    venue('W Goa', 'Vagator, North Goa', 'Luxury lifestyle resort'),
    venue('Taj Fort Aguada Resort & Spa', 'Sinquerim, North Goa', 'Heritage beach resort'),
    venue('ITC Grand Goa Resort & Spa', 'Arossim, South Goa', 'Beachfront luxury resort'),
    venue('Grand Hyatt Goa', 'Bambolim, Goa', 'Waterfront luxury hotel'),
    venue('Alila Diwa Goa', 'Majorda, South Goa', 'Luxury resort'),
    venue('The Westin Goa', 'Anjuna, North Goa', 'Luxury hotel'),
    venue('The Postcard Cuelim', 'Cuelim, South Goa', 'Boutique heritage hotel'),
    venue('Caravela Beach Resort', 'Varca, South Goa', 'Beachfront resort'),
  ],
  Mangalore: [
    venue('Hotel Deepa Comforts', 'Mangaluru, Karnataka', 'City hotel'),
    venue('Goldfinch Hotel Mangalore', 'Mangaluru, Karnataka', 'City hotel'),
    venue('The Ocean Pearl', 'Mangaluru, Karnataka', 'City hotel'),
    venue('Hotel Sai Palace', 'Mangaluru, Karnataka', 'Hotel and banquet venue'),
    venue('Moti Mahal', 'Mangaluru, Karnataka', 'City hotel'),
    venue('The Verda Saffron', 'Mangaluru, Karnataka', 'Hotel and banquet venue'),
    venue('Metro Plaza', 'Mangaluru, Karnataka', 'Banquet venue'),
    venue('Hotel Maya International', 'Mangaluru, Karnataka', 'City hotel'),
    venue('Mango Hotels', 'Mangaluru, Karnataka', 'City hotel'),
    venue('The Avatar Hotel & Convention', 'Mangaluru, Karnataka', 'Convention hotel'),
  ],
  Udupi: [
    venue('Paradise Isle Beach Resort', 'Malpe, Udupi, Karnataka', 'Beach resort'),
    venue('Country Inn & Suites by Radisson', 'Manipal, Udupi, Karnataka', 'Hotel'),
    venue('The Ocean Pearl Times Square', 'Udupi, Karnataka', 'City hotel'),
    venue('Shree Krishna Sabha Mandira', 'Udupi, Karnataka', 'Traditional function venue'),
    venue('Amrith Garden', 'Udupi, Karnataka', 'Garden venue'),
    venue('Manthan Beach Resort', 'Kaup, Udupi, Karnataka', 'Beach resort'),
    venue('Halima Sabju Auditorium', 'Udupi, Karnataka', 'Auditorium'),
    venue('Sithara Banquet Hall', 'Udupi, Karnataka', 'Banquet hall'),
    venue('Fortune Valley View', 'Manipal, Udupi, Karnataka', 'Hotel'),
    venue('Hotel Swadesh Heritage', 'Udupi, Karnataka', 'Heritage hotel'),
  ],
  Coorg: [
    venue('Coorg Wilderness Resort & Spa', 'Madikeri, Coorg, Karnataka', 'Luxury hill resort'),
    venue('Taj Madikeri Resort & Spa', 'Madikeri, Coorg, Karnataka', 'Luxury hill resort'),
    venue('Coorg County Resorts', 'Coorg, Karnataka', 'Resort'),
    venue('Paddington Resorts & Spa', 'Coorg, Karnataka', 'Resort and spa'),
    venue('Club Mahindra Resort, Virajpet', 'Virajpet, Coorg, Karnataka', 'Resort'),
    venue('Club Mahindra Resort, Madikeri', 'Madikeri, Coorg, Karnataka', 'Resort'),
    venue('The Aurum', 'Coorg, Karnataka', 'Resort'),
    venue('De Royale Montana Hotel & Resort', 'Coorg, Karnataka', 'Hotel and resort'),
    venue('Anvaya The Marquee', 'Coorg, Karnataka', 'Event venue'),
    venue('The Tamara Coorg', 'Yavakapadi, Coorg, Karnataka', 'Luxury plantation resort'),
  ],
  Kerala: [
    venue('The Leela Kovalam', 'Kovalam, Kerala', 'Clifftop beach resort'),
    venue('Kumarakom Lake Resort', 'Kumarakom, Kerala', 'Backwater luxury resort'),
    venue('Taj Bekal Resort & Spa', 'Bekal, Kerala', 'Waterfront luxury resort'),
    venue('Taj Malabar Resort & Spa', 'Kochi, Kerala', 'Harbourfront luxury hotel'),
    venue('The Zuri Kumarakom Kerala Resort & Spa', 'Kumarakom, Kerala', 'Backwater resort'),
    venue('The Leela Ashtamudi', 'Kollam, Kerala', 'Backwater luxury resort'),
    venue('Vasundhara Sarovar Premiere', 'Alappuzha, Kerala', 'Backwater resort'),
    venue('Niraamaya Retreats Surya Samudra', 'Kovalam, Kerala', 'Clifftop retreat'),
    venue('Brunton Boatyard', 'Fort Kochi, Kerala', 'Heritage waterfront hotel'),
    venue('The Raviz Kadavu', 'Kozhikode, Kerala', 'Riverside resort'),
  ],
  Rajasthan: [
    venue('Taj Lake Palace', 'Udaipur, Rajasthan', 'Heritage lake palace'),
    venue('The Oberoi Udaivilas', 'Udaipur, Rajasthan', 'Luxury palace hotel'),
    venue('Rambagh Palace', 'Jaipur, Rajasthan', 'Heritage palace hotel'),
    venue('Samode Palace', 'Samode, Jaipur, Rajasthan', 'Heritage palace'),
    venue('Umaid Bhawan Palace', 'Jodhpur, Rajasthan', 'Heritage palace hotel'),
    venue('Suryagarh Jaisalmer', 'Jaisalmer, Rajasthan', 'Desert fort-style hotel'),
    venue('Alila Fort Bishangarh', 'Bishangarh, Rajasthan', 'Heritage fort hotel'),
    venue('Fairmont Jaipur', 'Jaipur, Rajasthan', 'Luxury palace-style hotel'),
    venue('Raffles Udaipur', 'Udaipur, Rajasthan', 'Luxury lakefront resort'),
    venue('Six Senses Fort Barwara', 'Sawai Madhopur, Rajasthan', 'Restored fort resort'),
  ],
}

// Every venue owns an independent gallery array and an independent asset folder.
// Drop approved files into the folder and add their paths to that venue's imageGallery.
export const venuesByDestination = Object.fromEntries(Object.entries(venueListByDestination).map(([destination, venues]) => [destination, venues.map(item => ({
  ...item,
  destination,
  imageDirectory: `/images/venues/${slugify(destination)}/${slugify(item.name)}/`,
}))]))
