/*
 Spec to test our addMarkerToVenue function
 */
describe("addMarkerToVenue() in VenueMap", function () {

    beforeEach(function () {
        addMarkerToVenue(venue);
    });

    it("adds a marker with the name as title", function () {
        expect(venue.marker.title).toEqual(venue.name);
    });

    it("adds a position with numeric lat and lng", function () {
        expect(venue.marker.position.lat).toEqual(venue.location.lat.valueOf());
        expect(venue.marker.position.lng).toEqual(venue.location.lon.valueOf());
    });
});

var venue = {
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
};