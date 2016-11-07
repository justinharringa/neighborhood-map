function VenueMapModel(venues) {
    this.venues = ko.observableArray(venues);
    this.zipCode = ko.observable("");
}