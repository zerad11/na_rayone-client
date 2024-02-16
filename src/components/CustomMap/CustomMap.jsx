import GoogleMapReact from "google-map-react";
import styles from "./CustomMap.module.css";
const AnyReactComponent = ({ text }) => <div className={styles.customMarker}>{text}</div>;


function CustomMap() {
    const defaultProps = {
        center: {
            lat: 55.75,
            lng: 37.57
        },
        zoom: 9
    };

    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyDQLquPVrt5IOnLTarl19BnSAQDWZzLULk"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={55.75}
                    lng={37.57}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default CustomMap;