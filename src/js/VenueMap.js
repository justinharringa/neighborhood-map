/*
 This class provides a model for a Venue Map
 */
function VenueMapModel(venues) {
    var that = this;
    this.venues = ko.observableArray(venues);
    this.zipCode = ko.observable("");
    this.nameFilter = ko.observable("");

    this.filteredVenues = ko.computed(function () {
        return venues.filter(function (venue) {
            var lowerCaseVenueName = venue.Name.toString().toLowerCase();
            var lowerCaseNameFilter = that.nameFilter().toString().toLowerCase();
            // if lowercase venue name contains lowercase nameFilter, include in new computed array
            return lowerCaseVenueName.indexOf(lowerCaseNameFilter) > -1;
        });
    }, that);
}