import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };


const Hotels = () => {
    const { city_id } = useParams();
    const hotelsData = useLoaderData();
    console.log(hotelsData);
    return (
        <div className='d-flex'>
            <div>
                <h2>Available Hotels of {hotelsData.length}</h2>
                <div className='text-black'>
                    {
                        hotelsData.map(hotel => <div
                            key={hotel.name}
                        >
                            <div className="card mb-3" style={{ width: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={hotel.image} className="img-fluid rounded-start" alt="..." />
                                        <p className="card-text tex center">{hotel.city}</p>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{hotel.name}</h5>
                                            <p className="card-text">{hotel.room_capacity}</p>
                                            <p className="card-text">{hotel.facilities[0]}</p>
                                            <p className="card-text">{hotel.facilities[1]}</p>
                                            <p className="card-text">{hotel.facilities[2]}</p>
                                            <div className='d-flex justify-content-between'>
                                                <p className="card-text"><small className="text-body-secondary">${hotel.rating}</small></p>
                                                <p className="card-text"><small className="text-body-secondary">${hotel.price_per_night}/night</small></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
            <div className='text-right'>
                <h2 className='text-center'>Map</h2>
                {/* <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div> */}

            </div>



        </div>
    );
};

export default Hotels;