import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';

export default function Start() {
  
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons>
            <IonMenuButton />
            <IonTitle>Adote Petz</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='light' id='start'>
        <div className='center'>
          <IonCard>
            <img src="https://www.petdoctor.com.br/wp-content/uploads/2021/04/10RacasDeCaesMaisPopularesNoBrasil-Topo-Abr21.jpg" />
            <IonCardHeader>
              <IonCardTitle>Adote Petz</IonCardTitle>
              <IonCardSubtitle>Doação de animais</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>App sem fins lucrativo apenas fazemos o network</p>
              <div className="buttons">
                <IonButton href='/pets'>Adotar</IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};
