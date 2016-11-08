/*
 This class provides a model for a Venue Map
 */
function VenueMapModel(venues, map) {
    var that = this;
    venues.forEach(function(venue) {
        addMarkerToVenue(venue);
    });
    this.venues = ko.observableArray(venues);
    this.nameFilter = ko.observable("");
    this.map = ko.observable(map);

    this.filteredVenues = ko.pureComputed(function () {
        return that.venues().filter(function (venue) {
            var lowerCaseVenueName = venue.name.toString().toLowerCase();
            var lowerCaseNameFilter = that.nameFilter().toString().toLowerCase();
            // if lowercase venue name contains lowercase nameFilter, include in new computed array
            if (lowerCaseVenueName.indexOf(lowerCaseNameFilter) > -1) {
                that.setMarkerMap(venue, map);
                return true;
            }
            that.setMarkerMap(venue, null);
            return false;
        });
    }, that);

    this.setMarkerMap = function (venue, map) {
        if (venue.marker) {
            venue.marker.setMap(map);
        }
    };

    this.animateMarkerForVenue = function(venue) {
        animateMarkerForVenue(venue);
    };
}

function addMarkerToVenue(venue) {
    var venueLocation = venue.location;
    venue.marker = new google.maps.Marker({
        position: {lat: venueLocation.lat, lng: venueLocation.lon},
        map: null,
        title: venue.name
    });
    venue.marker.addListener('click', function() {
        animateMarkerForVenue(venue);
    });
}

function animateMarkerForVenue(venue) {
    toggleBounce(venue);
    showInfoWindow(venue);
}

// We'll need to hold onto a reference of the currentlyBouncingMarker to turn its animation off
var currentlyBouncingMarker = null;

function toggleBounce(venue) {
    var marker = venue.marker;
    if (currentlyBouncingMarker !== null) {
        currentlyBouncingMarker.setAnimation(null);
    }
    marker.setAnimation(google.maps.Animation.BOUNCE);
    currentlyBouncingMarker = marker;
}

var currentInfoWindow = null;

// Build the content string for an InfoWindow
function getVenueInfoWindowString(venue) {
    var addressToDisplay = venue.address;
    if (addressToDisplay === null) {
        addressToDisplay = 'lat: ' + venue.location.lat + ', lng: ' + venue.location.lon;
    }
    return '<div class="venueName">' + venue.name + '</div>' +
        '<div class="venueAddress">' + addressToDisplay + '</div>';
}

// Derived from Google Maps API doc: https://developers.google.com/maps/documentation/javascript/infowindows#open
// We only show 1 InfoWindow at a time so close an existing InfoWindow and open a new one for the current venue's
// marker on the current map associated with the venue.
function showInfoWindow(venue) {
    var marker = venue.marker;
    if (currentInfoWindow !== null) {
        currentInfoWindow.close();
    }
    var contentString = getVenueInfoWindowString(venue);
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    infoWindow.open(marker.getMap(), marker);
    currentInfoWindow = infoWindow;
}