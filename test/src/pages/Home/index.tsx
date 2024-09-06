import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import './index.css';

export default function Home() {

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
              <IonCardSubtitle>Animais para doação:</IonCardSubtitle>
            </div>
            <IonButton>
              <IonIcon icon={searchOutline} />
              Filtar
            </IonButton>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="full">
              <IonItem button={true} href='/pet/1'>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-3-1280x720.jpg" />
                </IonThumbnail>
                <div className='info'>
                  <div className='infoPet'>
                    <IonCardTitle>Item</IonCardTitle>
                    <div className='infoCat'>
                      <IonCardSubtitle color='secondary' mode='ios'>GATO</IonCardSubtitle>
                      <IonCardSubtitle color='secondary' mode='ios'>MACHO</IonCardSubtitle>
                    </div>
                  </div>
                  <IonButton>
                    <IonIcon icon={searchOutline} />
                  </IonButton>
                </div>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};