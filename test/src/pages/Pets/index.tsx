import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRadio, IonRadioGroup, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import './index.css';
import { useEffect, useState } from 'react';

interface PetsProps {
  name: string
  url: string
  desc: string
  genere: string
  type: string
}

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [ pets, setPets ] = useState<PetsProps[]>([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    setPets(JSON.parse(localStorage.getItem('pets')) || [])
  }, [])

  function handleFilter() {
    setIsOpen(false)
    if (filter === 'x') {
      setPets(JSON.parse(localStorage.getItem('pets')) || [])
      return
    }
    var newArray = pets.filter((x) => x.type !== filter)
    setPets(newArray)
    console.log(pets)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons>
            <IonMenuButton />
            <IonTitle>Home</IonTitle>
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
            <IonList lines="full">
              {
                pets.map(x => { 
                  return (
                    <IonItem button={true} href='/pet/1'>
                      <IonThumbnail slot="start">
                        <img alt="Silhouette of mountains" src={`${x.url}`} />
                      </IonThumbnail>
                      <div className='info'>
                        <div className='infoPet'>
                          <IonCardTitle>{x.name}</IonCardTitle>
                          <div className='infoCat'>
                            <IonCardSubtitle color='secondary' mode='ios'>{x.type}</IonCardSubtitle>
                            <IonCardSubtitle color='secondary' mode='ios'>{x.genere}</IonCardSubtitle>
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