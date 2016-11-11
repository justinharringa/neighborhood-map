/*
 Jasmine spec to test our VenueMapModel. See https://jasmine.github.io/ for documentation
 */
describe("VenueMapModel", function () {
    var venueMapModel;

    beforeEach(function () {
        venueMapModel = new VenueMapModel();
        venuesInSanFrancisco.venues.forEach(function (venue) {
            venueMapModel.venues().push(venue);
        });
    });

    it("adds venues properly", function () {
        expect(venueMapModel.venues).toContain(venuesInSanFrancisco.venues[0]);
    });

    it("filters to only include Golden Gate Park", function () {
        venueMapModel.nameFilter('Golden Gate Park');
        expect(venueMapModel.filteredVenues()).toEqual([venuesInSanFrancisco.venues[2]]);
    });

    it("filters nothing if nameFilter is empty", function () {
        venueMapModel.nameFilter('');
        expect(venueMapModel.filteredVenues()).toEqual(venuesInSanFrancisco.venues);
    });

    it("filters everything if nameFilter is gibberish", function () {
        venueMapModel.nameFilter('abcdefg');
        expect(venueMapModel.filteredVenues()).toEqual([]);
    });
});

// SeatGeek response for San Francisco, CA
// curl 'https://api.seatgeek.com/2/venues?city=san+francisco&state=ca&per_page=10'
var venuesInSanFrancisco = {
    "meta": {
        "per_page": 10,
        "total": 1470,
        "page": 1,
        "took": 3,
        "geolocation": {
            "city": "San Francisco",
            "display_name": "San Francisco, CA",
            "country": "US",
            "lon": -122.411,
            "range": "50mi",
            "state": "CA",
            "postal_code": "94133",
            "lat": 37.8033
        }
    },
    "venues": [{
        "city": "San Francisco",
        "stats": {"event_count": 0},
        "name": "Candlestick Park",
        "extended_address": "San Francisco, CA 94124",
        "url": "https:\/\/seatgeek.com\/venues\/candlestick-park\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "candlestick-park",
        "state": "CA",
        "score": 0.96116,
        "postal_code": "94124",
        "location": {"lat": 37.711, "lon": -122.386},
        "address": "490 Jamestown Ave",
        "timezone": "America\/Los_Angeles",
        "id": 1132
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 81},
        "name": "AT&T Park",
        "extended_address": "San Francisco, CA 94107",
        "url": "https:\/\/seatgeek.com\/venues\/at-t-park\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "at-t-park",
        "state": "CA",
        "score": 0.923568,
        "postal_code": "94107",
        "location": {"lat": 37.7782, "lon": -122.391},
        "address": "24 Willie Mays Plaza",
        "timezone": "America\/Los_Angeles",
        "id": 22
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 4},
        "name": "Golden Gate Park",
        "extended_address": "San Francisco, CA 94102",
        "url": "https:\/\/seatgeek.com\/venues\/golden-gate-park\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "golden-gate-park",
        "state": "CA",
        "score": 0.851307,
        "postal_code": "94102",
        "location": {"lat": 37.77, "lon": -122.42},
        "address": "1000 John F Kennedy Dr",
        "timezone": "America\/Los_Angeles",
        "id": 75
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 0},
        "name": "The Olympic Club",
        "extended_address": "San Francisco, CA 94132",
        "url": "https:\/\/seatgeek.com\/venues\/the-olympic-club\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "the-olympic-club",
        "state": "CA",
        "score": 0.766895,
        "postal_code": "94132",
        "location": {"lat": 37.7087, "lon": -122.495},
        "address": "599 Skyline Boulevard",
        "timezone": "America\/Los_Angeles",
        "id": 5856
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 0},
        "name": "America's Cup Pavilion",
        "extended_address": "San Francisco, CA 94105",
        "url": "https:\/\/seatgeek.com\/venues\/america-s-cup-pavilion\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "america-s-cup-pavilion",
        "state": "CA",
        "score": 0.764803,
        "postal_code": "94105",
        "location": {"lat": 37.7985, "lon": -122.398},
        "address": "Pier 27 and 29",
        "timezone": "America\/Los_Angeles",
        "id": 42153
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 12},
        "name": "Bill Graham Civic Auditorium",
        "extended_address": "San Francisco, CA 94102",
        "url": "https:\/\/seatgeek.com\/venues\/bill-graham-civic-auditorium\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "bill-graham-civic-auditorium",
        "state": "CA",
        "score": 0.745695,
        "postal_code": "94102",
        "location": {"lat": 37.7785, "lon": -122.418},
        "address": "99 Grove Street",
        "timezone": "America\/Los_Angeles",
        "id": 1325
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 0},
        "name": "Pier 70",
        "extended_address": "San Francisco, CA 94107",
        "url": "https:\/\/seatgeek.com\/venues\/pier-70\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "pier-70",
        "state": "CA",
        "score": 0.718123,
        "postal_code": "94107",
        "location": {"lat": 37.7749, "lon": -122.419},
        "address": "70 Pier",
        "timezone": "America\/Los_Angeles",
        "id": 71493
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 13},
        "name": "The Masonic",
        "extended_address": "San Francisco, CA 94108",
        "url": "https:\/\/seatgeek.com\/venues\/the-masonic\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "the-masonic",
        "state": "CA",
        "score": 0.689046,
        "postal_code": "94108",
        "location": {"lat": 37.7749, "lon": -122.419},
        "address": "2850 19th Avenue",
        "timezone": "America\/Los_Angeles",
        "id": 1369
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 0},
        "name": "The Armory - San Francisco",
        "extended_address": "San Francisco, CA 94103",
        "url": "https:\/\/seatgeek.com\/venues\/the-armory-san-francisco\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "the-armory-san-francisco",
        "state": "CA",
        "score": 0.659939,
        "postal_code": "94103",
        "location": {"lat": 37.77, "lon": -122.42},
        "address": "1800 Mission Street",
        "timezone": "America\/Los_Angeles",
        "id": 49812
    }, {
        "city": "San Francisco",
        "stats": {"event_count": 0},
        "name": "Marriott Marquis San Francisco",
        "extended_address": "San Francisco, CA 94103",
        "url": "https:\/\/seatgeek.com\/venues\/marriott-marquis-san-francisco\/tickets",
        "country": "US",
        "display_location": "San Francisco, CA",
        "links": [],
        "slug": "marriott-marquis-san-francisco",
        "state": "CA",
        "score": 0.659069,
        "postal_code": "94103",
        "location": {"lat": 37.7749, "lon": -122.419},
        "address": "780 Mission Street",
        "timezone": "America\/Los_Angeles",
        "id": 6286
    }]
};
