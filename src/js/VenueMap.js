/**
 * This class provides a model for a Venue Map
 */
function VenueMapModel() {
    var that = this;
    this.venues = ko.observableArray();
    this.nameFilter = ko.observable("");
    this.map = ko.observable();

    this.filteredVenues = ko.pureComputed(function () {
        return that.venues().filter(function (venue) {
            var lowerCaseVenueName = venue.name.toString().toLowerCase();
            var lowerCaseNameFilter = that.nameFilter().toString().toLowerCase();

            // If Google Maps API has loaded and map injected, and we don't have a marker, add one...
            if (that.map() && !venue.marker) {
                addMarkerToVenue(venue);
            }
            // if lowercase venue name contains lowercase nameFilter, include in new computed array
            if (lowerCaseVenueName.indexOf(lowerCaseNameFilter) > -1) {
                that.setMarkerMap(venue, that.map());
                return true;
            }
            that.setMarkerMap(venue, null);
            return false;
        });
    }, that);

    this.setMarkerMap = function (venue, map) {
        // If marker is undefined then we can't set a map (Google Maps API hasn't loaded yet)
        if (venue.marker) {
            venue.marker.setMap(map);
        }
    };

    this.animateMarkerForVenue = function(venue) {
        animateMarkerForVenue(venue);
    };
}

/**
 * Add a new Google Maps marker for a venue (this should only happen once per venue)
 *
 * @param venue
 */
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

/**
 * Make the marker bounce for the selected venue and show an InfoWindow for it
 *
 * @param venue the selected venue
 */
function animateMarkerForVenue(venue) {
    toggleBounce(venue);
    showInfoWindow(venue);
}

// We'll need to hold onto a reference of the currentlyBouncingMarker to turn its animation off
var currentlyBouncingMarker = null;

/**
 * Make this venue's marker bounce and turn off bouncing for any currently bouncing marker
 * @param venue the selected venue - its marker should bounce
 */
function toggleBounce(venue) {
    var marker = venue.marker;
    if (currentlyBouncingMarker !== null) {
        currentlyBouncingMarker.setAnimation(null);
    }
    marker.setAnimation(google.maps.Animation.BOUNCE);
    var fiveSeconds = 5 * 1000;
    window.setTimeout(function () {
        marker.setAnimation(null);
    }, fiveSeconds);
    currentlyBouncingMarker = marker;
}

// Define global infoWindow to display (we only display one at a time)
var currentInfoWindow = null;

/**
 * Build the content string for an InfoWindow
 *
 * @param venue
 * @returns {string}
 */
function getVenueInfoWindowString(venue) {
    var addressToDisplay = venue.address;
    if (addressToDisplay === null) {
        addressToDisplay = 'lat: ' + venue.location.lat + ', lng: ' + venue.location.lon;
    }
    return '<div class="venueName">' + venue.name + '</div>' +
        '<div class="venueAddress">' + addressToDisplay + '</div>';
}

//
/**
 * Derived from Google Maps API doc: https://developers.google.com/maps/documentation/javascript/infowindows#open
 * We only show 1 InfoWindow at a time so close an existing InfoWindow and open a new one for the current venue's
 * marker on the current map associated with the venue.
 *
 * @param venue the selected venue where the InfoWindow should be shown
 */
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