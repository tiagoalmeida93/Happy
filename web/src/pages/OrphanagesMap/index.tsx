import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css'
import './styles.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estāo esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Barra Bonita</strong>
          <span>Sāo Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-22.48037,-48.5784707]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker
          icon={mapIcon}
          position={[-22.480308, -48.572792]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das crianças
            <Link to="/orphanages/9">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fafafa" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;