import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';

export default function Login() {

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
      <IonContent fullscreen color='light' id='login'>
        <div className='center'>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Login</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonInput label="Username" labelPlacement="stacked" placeholder="Digite seu username"></IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Senha" labelPlacement="stacked" placeholder="Digite sua senha"></IonInput>
              </IonItem>
              <div className='content'>
                <IonButton href='/registerPet'>ENTRAR</IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};
