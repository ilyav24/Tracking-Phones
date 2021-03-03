export class Location {
    geoplugin_request: string;
    geoplugin_city: string;
    geoplugin_countryName: string;
    geoplugin_latitude: string;
    geoplugin_longitude: string;

    constructor(
      geoplugin_request: string,
    geoplugin_city: string,
    geoplugin_countryName: string,
    geoplugin_latitude: string,
    geoplugin_longitude: string,

    ){
      this.geoplugin_request=geoplugin_request;
      this.geoplugin_city=geoplugin_city;
      this.geoplugin_countryName=geoplugin_countryName;
      this.geoplugin_latitude=geoplugin_latitude;
      this.geoplugin_longitude=geoplugin_longitude;
    }
  }