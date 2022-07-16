import React, { useRef, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
// import coordsToZip from 'coords-to-zip';
import geo2zip from 'geo2zip';
import reverseGeocode from  'reversegeocode-to-zip';

// const location = {
//   latitude: 34.4119272,
//   longitude: -118.4846528
// };

// window.onload = init;

// console.log(closestZip[0]);

// const location = {
//     latitude: data.coords.latitude,
//     longitude: data.coords.longitude
// };

// const closestZip = geo2zip(location);

// console.log(closestZip);

    const Demo = () => {
        
        const region = {
            latitude: 34 ,
            longitude: -118,
        };

        const GOOGLE_API_KEY = 'AIzaSyC9FmDlV6OgheVYXUPjfg4K1WF7LHdIVD0';

        reverseGeocode(region, GOOGLE_API_KEY)
            .then(zipcode => console.log(zipcode))
            .catch(err => console.log(err));

        let zipArray = [];

        function init() {
            navigator.geolocation.getCurrentPosition(placeMap);
        }

        // let zipArray = [];

        let placeMap = async function(data) {
            // console.dir(data.coords.latitude);
            // console.dir(data.coords.longitude);
            let location = {
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            };
            let closestZip = await geo2zip(location);
            console.log(closestZip[0]);
            zipArray.unshift(closestZip);
            console.log(zipArray[0][0]);
        }

        console.log(zipArray);

        useEffect(() => {
            init();
        }, []);

        return (
            <>
                <div>Hello</div>
                <div>Hey {zipArray[0]}</div>
            </>
        );
    // const inputElement = useRef();
    // const inputElement1 = useRef();
        
    // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //     useGeolocated({
    //         positionOptions: {
    //             enableHighAccuracy: false,
    //         },
    //         userDecisionTimeout: 5000,
    //     });

        // const location = {
        //     latitude: coords.latitude,
        //     longitude: coords.longitude
        // };
    
        // const closestZip = geo2zip(location);
    
        // console.log(closestZip);

    //     console.log(inputElement);
    //     console.log(inputElement1);

    // return !isGeolocationAvailable ? (
    //         <div>Your browser does not support Geolocation</div>
    //     ) : !isGeolocationEnabled ? (
    //         <div>Geolocation is not enabled</div>
    //     ) : coords ? (
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <td><h1>latitude:</h1></td>
    //                     <td ref={inputElement}>{coords.latitude} {console.log(inputElement.current.__reactProps$u0s0rscth1a.children)}</td>
    //                 </tr>
    //                 <tr>
    //                     <td><h1>longitude:</h1></td>
    //                     <td  ref={inputElement1}>{coords.longitude} {console.log(inputElement1)}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     ) : (
    //         <div>Getting the location data&hellip; </div>
    //     );
    }

export default Demo;
