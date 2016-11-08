var google = {
    maps: {
        Marker: function (obj) {
            this.position = obj.position;
            this.map = obj.map;
            this.title = obj.title;

            this.addListener = function() {};
            this.setMap = function() {};
        }
    }
};
