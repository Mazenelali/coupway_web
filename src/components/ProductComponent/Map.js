import GoogleMapReact from 'google-map-react';

function Map({location}) {

    return ( <div className='w-full h-36'>
          <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
            lat:location.lat,
            lng:location.lng
        }}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>

    </div> );
}

export default Map;