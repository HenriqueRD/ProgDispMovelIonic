import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';
import { useHistory, useParams } from 'react-router';

export default function Login() {
  
  const { id  } = useParams<{ id: string }>()
  const history = useHistory()

  function handleLogin() {
    if (parseInt(id) === 1) { history.push("/managePets") }
    else if (parseInt(id) === 2) { history.push("/registerPet") }
  }

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
                <IonButton onClick={handleLogin}>ENTRAR</IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};
