/*
 Jasmine spec to test our VenueMapModel. See https://jasmine.github.io/ for documentation
 */
describe("VenueMapModel", function() {
    var venueMapModel;

    beforeEach(function () {
        venueMapModel = new VenueMapModel(venuesIn94101.Venues);
    });

    it("adds venues properly", function() {
        expect(venueMapModel.venues).toContain(venuesIn94101.Venues[0]);
    });

    it("filters to only include Pier 35", function() {
        venueMapModel.nameFilter('Pier 35');
        expect(venueMapModel.filteredVenues()).toEqual([venuesIn94101.Venues[1]])
    });

    it("filters nothing if nameFilter is empty", function() {
        venueMapModel.nameFilter('');
        expect(venueMapModel.filteredVenues()).toEqual(venuesIn94101.Venues)
    });

    it("filters everything if nameFilter is gibberish", function() {
        venueMapModel.nameFilter('abcdefg');
        expect(venueMapModel.filteredVenues()).toEqual([])
    });
});

// JamBase response for 94101 zip code
var venuesIn94101 = {
    "Info": {
        "TotalResults": 47,
        "PageNumber": 0,
        "Message": "search venue by zip"
    },
    "Venues": [{
        "Id": 7671,
        "Name": "Beale Street Bar and Grill",
        "Address": "133 Beale St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.bealestreetsf.com/",
        "Latitude": 37.790737,
        "Longitude": -122.395259
    }, {
        "Id": 8165,
        "Name": "Pier 35",
        "Address": "",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 9226,
        "Name": "Justin Herman Plaza",
        "Address": "1 Market Street",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.794428,
        "Longitude": -122.394782
    }, {
        "Id": 9329,
        "Name": "Lost City 23 Club",
        "Address": "23 Visitacion",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.713093,
        "Longitude": -122.413734
    }, {
        "Id": 10794,
        "Name": "Planet Hollywood",
        "Address": "Two Stockton St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.planethollywood.com",
        "Latitude": 37.785999,
        "Longitude": -122.40628
    }, {
        "Id": 11159,
        "Name": "Royal Prince",
        "Address": "Pier 43.5 Fisherman's Wharf",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.808579,
        "Longitude": -122.415846
    }, {
        "Id": 11196,
        "Name": "Pound SF",
        "Address": "100 Cargo Way",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.poundsf.com ",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 11790,
        "Name": "Jon Simms Center for the Arts",
        "Address": "1519 Mission St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.774059,
        "Longitude": -122.417427
    }, {
        "Id": 12009,
        "Name": "Big Heart City Nightclub",
        "Address": "836 Mission St",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.bighearcitynightclub.com",
        "Latitude": 37.783882,
        "Longitude": -122.40503
    }, {
        "Id": 12597,
        "Name": "Dolores Park",
        "Address": "Dolores St @ 19th St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.75983,
        "Longitude": -122.425782
    }, {
        "Id": 12606,
        "Name": "Folsom Street Fair",
        "Address": "Folsom Stree",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 12608,
        "Name": "Castro Street Fair",
        "Address": "Castro Street",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 14907,
        "Name": "Bay to Breakers  charity race",
        "Address": "embarcadero",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://bay to breakers.com",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 15465,
        "Name": "Union Street Easter Parade",
        "Address": "Buchanan@Union",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.unionstreetshop.com ",
        "Latitude": 37.78931,
        "Longitude": -122.430542
    }, {
        "Id": 15617,
        "Name": "Laguna Honda Hospital",
        "Address": "Forest Hills Station ",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.accordions.com/hammond",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 17397,
        "Name": "Main Mast",
        "Address": "616 20th Street ",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.784119,
        "Longitude": -122.479668
    }, {
        "Id": 17947,
        "Name": "Papa Toby's Cafe",
        "Address": "3248 22nd St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.75543,
        "Longitude": -122.419982
    }, {
        "Id": 20705,
        "Name": "Linc Gallery",
        "Address": "1632 C Market Street",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.773731,
        "Longitude": -122.421089
    }, {
        "Id": 20706,
        "Name": "Dolores Park Cafe",
        "Address": "18th & Dolores",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.doloresparkcafe.org/",
        "Latitude": 37.761391,
        "Longitude": -122.425943
    }, {
        "Id": 25664,
        "Name": "SF LGBT Community Center",
        "Address": "1800 Market St",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.sfgaycenter.org ",
        "Latitude": 37.771591,
        "Longitude": -122.423828
    }, {
        "Id": 26772,
        "Name": "Speedway Meadows",
        "Address": "John F. Kennedy Drive",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 27458,
        "Name": "Canvas Gallery",
        "Address": "1200 9th Avenue (at Lincoln)",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.thecanvasgallery.com",
        "Latitude": 37.775196,
        "Longitude": -122.419204
    }, {
        "Id": 27790,
        "Name": "PS Studios Underground",
        "Address": "9th and Mission (across from Guitar Center)",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 28425,
        "Name": "Reggae In The Park",
        "Address": "Sharon Meadow, Golden Gate Park",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.eventswestca.com",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 29388,
        "Name": "Thee Parkside",
        "Address": "1600 17th Street",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.theeparkside.com",
        "Latitude": 37.765029,
        "Longitude": -122.399681
    }, {
        "Id": 29831,
        "Name": "Anon Salon",
        "Address": "",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.anonsalon.com/",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 30484,
        "Name": "Lipo Lounge",
        "Address": "916 Grant Street",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.sfstation.com/bars/lipo/",
        "Latitude": 38.047512,
        "Longitude": -122.1395
    }, {
        "Id": 31134,
        "Name": "Balazo Gallery",
        "Address": "2811 Mission St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.752072,
        "Longitude": -122.41856
    }, {
        "Id": 32275,
        "Name": "CBS/UPN TV Studios",
        "Address": "",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 35992,
        "Name": "People In Plazas Concert Series",
        "Address": "425 Market St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.791557,
        "Longitude": -122.398478
    }, {
        "Id": 39554,
        "Name": "Potreo Hills Festival",
        "Address": "",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 42320,
        "Name": "KALW 91.7",
        "Address": "",
        "City": "SanFransisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://KALW.org",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 43567,
        "Name": "KUSF Webcast- www.kusf.org",
        "Address": "90.3 Bay Area",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.kusf.org",
        "Latitude": 37.627489,
        "Longitude": -122.398693
    }, {
        "Id": 44342,
        "Name": "Submission Studio",
        "Address": "2183 Mission Street",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.sf-submission.com/",
        "Latitude": 37.7620886,
        "Longitude": -122.4193819
    }, {
        "Id": 48470,
        "Name": "Godwaffle / Noise Pancake",
        "Address": "110 Capp St",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.764966,
        "Longitude": -122.418662
    }, {
        "Id": 49502,
        "Name": "Laszlo",
        "Address": "2534 Mission St",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.756575,
        "Longitude": -122.418912
    }, {
        "Id": 52083,
        "Name": "Supperclub",
        "Address": "657 Harrison St",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.supperclub.com",
        "Latitude": 37.783275,
        "Longitude": -122.396373
    }, {
        "Id": 52396,
        "Name": "Dirty Martini",
        "Address": "2801 Leavenworth",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.dirtymartinisf.com",
        "Latitude": 37.807028,
        "Longitude": -122.418782
    }, {
        "Id": 53005,
        "Name": "Savanna Jazz",
        "Address": "2937 Mission St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.savannajazz.com/",
        "Latitude": 37.750113,
        "Longitude": -122.418302
    }, {
        "Id": 56107,
        "Name": "Mission Creek Park",
        "Address": "",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 62951,
        "Name": "Acoustic Cafe",
        "Address": "201 Octavia",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.773929,
        "Longitude": -122.423882
    }, {
        "Id": 64752,
        "Name": "Duplex",
        "Address": "1525 Mission Street",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://http://www.duplexsf.com/",
        "Latitude": 37.773941,
        "Longitude": -122.417572
    }, {
        "Id": 78604,
        "Name": "Azul Lounge",
        "Address": "1 Tilman Place",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "94108",
        "Latitude": 37.789329,
        "Longitude": -122.405337
    }, {
        "Id": 79151,
        "Name": "Bollyhood Cafe",
        "Address": "3372 19th St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "94110",
        "Latitude": 37.760435,
        "Longitude": -122.418731
    }, {
        "Id": 109480,
        "Name": "Underground SF",
        "Address": "424 Haight St",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "http://www.undergroundsf.com/",
        "Latitude": 37.7723557,
        "Longitude": -122.4294026
    }, {
        "Id": 111763,
        "Name": "Jewels in the Square",
        "Address": "",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 0.0,
        "Longitude": 0.0
    }, {
        "Id": 116625,
        "Name": "The Sound Factory ",
        "Address": "525 Harrison St.",
        "City": "San Francisco",
        "State": "California",
        "StateCode": "CA",
        "Country": "US",
        "CountryCode": "US",
        "ZipCode": "94101",
        "Url": "",
        "Latitude": 37.785478,
        "Longitude": -122.3933728
    }]
};
