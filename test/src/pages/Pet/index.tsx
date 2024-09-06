import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';

export default function Pet() {

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
        <div className='center'>
          <IonCard>
            <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-3-1280x720.jpg" />
            <IonCardHeader>
              <IonCardTitle>Lessi</IonCardTitle>
              <div className='infoCat'>
                <IonCardSubtitle color='secondary' mode='ios'>GATO</IonCardSubtitle>
                <IonCardSubtitle color='secondary' mode='ios'>MACHO</IonCardSubtitle>
              </div>
            </IonCardHeader>
            <IonCardContent className='content'>
              <div>
                <strong>Informação do Pet:</strong>
                <p>Here's a small text description for the card content. Nothing more, nothing less.</p>
              </div>
              <div>
                <strong>Informação do Dono:</strong>
                <p>Here's a small text description for the card content. Nothing more, nothing less.</p>
              </div>
            </IonCardContent>
          </IonCard>
        </div>  
      </IonContent>
    </IonPage>
  );
};