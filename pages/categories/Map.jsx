export default function Map() {
    return (
        <div>
            <div id="map"></div>
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
                defer
            ></script>
        </div>
    );
}
