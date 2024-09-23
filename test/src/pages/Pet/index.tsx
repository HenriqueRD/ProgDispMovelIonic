import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';
import { useEffect, useState } from 'react';
import { PetsProps } from '../Pets';

export default function Pet() {

  const [selectedPet, setSelectedPet] = useState<PetsProps>()

  useEffect(() => {
    const petsStorage = localStorage.getItem('pets')
    let pets = []

    if (petsStorage) {
      pets = JSON.parse(petsStorage)

      setSelectedPet(pets.find((item: PetsProps) => item.id === extractIdFromUrl()))
    }

  }, [])

  function extractIdFromUrl() {
    const pathname = window.location.pathname
    const parts = pathname.split('/')

    return parts[parts.length - 1]
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons>
            <IonMenuButton />
            <IonTitle>Pet</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='light' id='pet'>
        {
          selectedPet ? (
            <div className='center'>
              <IonCard className='pet-description-container'>
                <picture className='image-container'>
                  <img className='pet-image' src={selectedPet.url} />
                </picture>
                <IonCardHeader>
                  <IonCardTitle>{selectedPet.name}</IonCardTitle>
                  <div className='info'>
                    {
                      selectedPet.cat.map(x => {
                        return (
                          <IonCardSubtitle key={x.name} color='secondary' mode='ios'>{x.name}</IonCardSubtitle>
                        )
                      })
                    }
                  </div>
                </IonCardHeader>
                <IonCardContent className='content'>
                  <div>
                    <strong>Informação do Pet:</strong>
                    <p>{selectedPet.desc}</p>
                  </div>
                  <div>
                    <strong>Informação da Ong:</strong>
                    <p>Avenida Alameda das Travessas, nº 111, Edifício Bosque do Cerrado, apartamento 2222 - Bairro dos Barris</p>
                    <p>CEP: 40000-000. Lajeado - RS.</p>
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
          ) : <div className='not-found'>Não foi possível obter os dados do Pet selecionado. Por favor, volte para a lista de Pets para adoção.</div>
        }

      </IonContent>
    </IonPage>
  );
};