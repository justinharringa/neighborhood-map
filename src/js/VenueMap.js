/*
 This class provides a model for a Venue Map
 */
function VenueMapModel(venues, map) {
    var that = this;
    venues.forEach(function(venue) {
        addMarkerToVenue(venue);
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
            if (lowerCaseVenueName.indexOf(lowerCaseNameFilter) > -1) {
                venue.marker.setMap(map);
                return true;
            }
            venue.marker.setMap(null);
            return false;
        });
    }, that);
}

function addMarkerToVenue(venue) {
    var venueLocation = venue.location;
    venue.marker = new google.maps.Marker({
        position: {lat: venueLocation.lat, lng: venueLocation.lon},
        map: null,
        title: venue.name
    });
    venue.marker.addListener('click', function() { toggleBounce(venue.marker) });
}

// We'll need to hold onto a reference of the currentlyBouncingMarker to turn its animation off
var currentlyBouncingMarker = null;

function toggleBounce(marker) {
    if (currentlyBouncingMarker !== null) {
        currentlyBouncingMarker.setAnimation(null);
    }
    marker.setAnimation(google.maps.Animation.BOUNCE);
    currentlyBouncingMarker = marker;
}