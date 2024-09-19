import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRadio, IonRadioGroup, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import './index.css';
import { useEffect, useState } from 'react';

export interface PetsProps {
  name: string
  url: string
  desc: string
  genere: string
  type: string
  id: string
}

export default function Pets() {

  const [isOpen, setIsOpen] = useState(false);
  const [pets, setPets] = useState<PetsProps[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const petsStorage = localStorage.getItem('pets')

    if (petsStorage) {
      setPets(JSON.parse(petsStorage))
    }
  }, [])

  function handleFilter() {
    setIsOpen(false)
    if (filter === 'x') {
      setPets(JSON.parse(localStorage.getItem('pets')) || [])
      return
    }
    var newArray = pets.filter((x) => x.type !== filter)
    setPets(newArray)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons>
            <IonMenuButton />
            <IonTitle>Pets para adoção</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='light' id='home'>
        <IonCard>
          <IonCardHeader className='card-container'>
            <div className="card-info">
              <IonCardSubtitle>Animais para doação: {pets.length}</IonCardSubtitle>
            </div>
            <IonButton onClick={() => setIsOpen(true)}>
              <IonIcon icon={searchOutline} />
              Filtar
            </IonButton>
            <IonModal isOpen={isOpen}>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton color='danger' onClick={x => setIsOpen(false)}>Fechar</IonButton>
                  </IonButtons>
                  <IonButtons slot="end">
                    <IonButton color='primary' strong={true} onClick={handleFilter}>
                      Filtar
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <IonItem className='radio'>
                  <IonRadioGroup allowEmptySelection={false} value={filter} onIonChange={x => setFilter(x.target.value)}>
                    <IonCardSubtitle className='cat' color='dark'>Escolha:</IonCardSubtitle>
                    <IonItem>
                      <IonRadio value="GATO(a)">Gato(a)</IonRadio>
                    </IonItem>
                    <IonItem>
                      <IonRadio value="CACHORRO(a)">Cachorro(a)</IonRadio>
                    </IonItem>
                    <IonItem>
                      <IonRadio value="MACHO">Macho</IonRadio>
                    </IonItem>
                    <IonItem>
                      <IonRadio value="FEMEA">Femea</IonRadio>
                    </IonItem>
                    <IonItem>
                      <IonRadio value="x">Todos</IonRadio>
                    </IonItem>
                  </IonRadioGroup>
                </IonItem>
              </IonContent>
            </IonModal>
          </IonCardHeader>
          <IonCardContent>
            <IonList className='list-container' lines="full">
              {pets.length == 0 ? <div>Ainda não há pets disponíveis para adoção. Volte em breve (:</div> :
                pets.map(pet => {
                  return (
                    <IonItem key={pet.id} className='pet-card' button={true} href={`/pet/${pet.id}`}>
                      <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src={`${pet.url}`} />
                      </IonThumbnail>
                      <div className='info'>
                        <div className='infoPet'>
                          <IonCardTitle>{pet.name}</IonCardTitle>
                          <div className='infoCat'>
                            <IonCardSubtitle color='secondary' mode='ios'>{pet.type}</IonCardSubtitle>
                            <IonCardSubtitle color='secondary' mode='ios'>{pet.genere}</IonCardSubtitle>
                          </div>
                        </div>
                        <IonButton>
                          <IonIcon icon={searchOutline} />
                        </IonButton>
                      </div>
                    </IonItem>
                  )
                })
              }
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};