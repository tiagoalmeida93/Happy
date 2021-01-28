import React, { useState } from "react";
import { Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "../../components/Sidebar";

import { FiPlus } from "react-icons/fi";
import Map from "../../components/Map";
import happyMapIcon from "../../components/Map/happMapIcon";
import './styles.css';

export default function OrphanagesMap() {
  const [latLng, setLatLng] = useState({ latitude: 0, longitude: 0 });

  function handleMapClick(e: LeafletMouseEvent) {
    const {lat, lng} = e.latlng;
    
    setLatLng({ latitude: lat, longitude: lng });
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-22.4616235,-48.5677993]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              {latLng.latitude !== 0 && (
                <Marker 
                  interactive={false} 
                  icon={happyMapIcon} 
                  position={[
                    latLng.latitude,
                    latLng.longitude
                  ]} 
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;