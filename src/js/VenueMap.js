/*
 This class provides a model for a Venue Map
 */
function VenueMapModel(venues, map) {
    var that = this;
    venues.forEach(function(venue) {
        addMarkerToVenue(venue)
    });
    this.venues = ko.observableArray(venues);
    this.zipCode = ko.observable("");
    this.nameFilter = ko.observable("");
    this.map = map;

    this.filteredVenues = ko.computed(function () {
        return venues.filter(function (venue) {
            var lowerCaseVenueName = venue.name.toString().toLowerCase();
            var lowerCaseNameFilter = that.nameFilter().toString().toLowerCase();
            // if lowercase venue name contains lowercase nameFilter, include in new computed array
            return lowerCaseVenueName.indexOf(lowerCaseNameFilter) > -1;
        });
    }, that);
}

function addMarkerToVenue(venue) {
    var venueLocation = venue.location;
    return venue.marker = new google.maps.Marker({
        position: {lat: venueLocation.lat, lng: venueLocation.lon},
        map: null,
        title: venue.name
    });
}