import React, { useMemo, useState, useEffect } from 'react'
import { GoogleMap, Marker, useLoadScript, } from '@react-google-maps/api'
import{XCircle}from 'phosphor-react'
import * as S from './style'

export const LocalMap = () => {
  const [openedMap, setOpenedMap] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = openedMap ? 'hidden' : 'auto'
 }, [openedMap])

  function handleMap() {
    setOpenedMap(!openedMap)
  }


  const { isLoaded } = useLoadScript({
    googleMapsApiKey:  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const mapCenter = useMemo(
    
    () => ({ lat: -23.58608358512713, lng: -48.04339890688284 }),
    []
  );
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>


      {
        openedMap === true ? (
          <S.Container >
            <S.Container2 >
              <S.OpenMap onClick={handleMap}><XCircle size={32} /></S.OpenMap>
              <GoogleMap

                zoom={19}
                center={mapCenter}
                mapContainerStyle={{ width: '380px', height: '500px' }}
                onLoad={() => console.log('Map Component Loaded...')}


              >

                <Marker
                  position={mapCenter}
                  title='Consultorio de Psicologia'
                  icon="./images/logoiniciais.webp"
                  options={{
                    label: {
                      text: 'Drª Thayna Cunha',
                      className: "marker"
                    }
                  }}
                />

              </GoogleMap>
            </S.Container2>
          </S.Container >
        ) : (
          <S.OpenMap onClick={handleMap}>Ver no mapa</S.OpenMap>
        )
      }
    </>
  );

}