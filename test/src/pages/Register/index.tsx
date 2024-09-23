import { 
   IonButton,
   IonButtons, 
   IonCard, 
   IonCardContent,
   IonCardHeader, 
   IonCardSubtitle, 
   IonCardTitle, 
   IonContent, 
   IonHeader, 
   IonInput, 
   IonItem, 
   IonMenuButton, 
   IonPage, 
   IonRadio, 
   IonRadioGroup, 
   IonTextarea, 
   IonTitle, 
   IonToolbar, 
   useIonToast } from '@ionic/react';
import './index.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { PetsProps } from '../Pets';
import {v4 as uuid} from 'uuid'

export default function Register() {

  const [ name, setName ] = useState('')
  const [ url, setUrl ] = useState('')
  const [ desc, setDesc ] = useState('')
  const [ genere, setGenere ] = useState('')
  const [ type, setType ] = useState('')

  const [ present ] = useIonToast();
  const history = useHistory();

  function presentToast() {
    present({
      message: 'Pet cadastrado com sucesso!',
      duration: 1500,
      position: 'top',
      mode: 'ios'
    });
  };

  function handleRegisterPet() {
    let pets: PetsProps[] = JSON.parse(localStorage.getItem('pets') ?? '[]') 
      
    if (!pets) {
      const pet: PetsProps[] = [{
        name,
        url,
        desc,
        cat: [ {name: genere}, {name: type}],
        id: uuid()
      }]
      localStorage.setItem('pets', JSON.stringify(pet))
      return
    }

    const pet: PetsProps = {
      name,
      url,
      desc,
      cat: [ {name: genere}, {name: type}],
      id: uuid()
    }
    pets.push(pet)
    localStorage.setItem('pets', JSON.stringify(pets))
    presentToast()
    history.push('/pets')
    location.reload() 
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='secondary'>
          <IonButtons>
            <IonMenuButton />
            <IonTitle>Cadastrar Pet</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color='light' id='register'>
        <div className='o'>
          <IonCard>
          <IonCardHeader>
              <IonCardTitle>Cadastro</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonInput label="Nome" labelPlacement="stacked" placeholder="Digite o nome do pet" value={name} onIonChange={x => setName(x.detail.value || '')}></IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Foto" labelPlacement="stacked" placeholder="Digite a URL do pet" value={url} onIonChange={x => setUrl(x.detail.value || '')}></IonInput>
              </IonItem>
              <IonItem>
                <IonTextarea label="Descrição" labelPlacement="stacked" placeholder="Digite a descrição do pet" value={desc} onIonChange={x => setDesc(x.detail.value || '')}></IonTextarea>
              </IonItem>
              <IonItem className='radio'>
                <IonRadioGroup allowEmptySelection={false} value={type} onIonChange={x => setType(x.target.value)}>
                  <IonCardSubtitle className='cat' color='dark'>Espécie</IonCardSubtitle>
                  <IonItem>
                    <IonRadio labelPlacement="start" value="GATO(a)">Gato(a)</IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonRadio labelPlacement="start" value="CACHORRO(a)">Cachorro(a)</IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonItem>
              <IonItem>
              <IonRadioGroup allowEmptySelection={false} value={genere} onIonChange={x => setGenere(x.target.value)}>
                  <IonCardSubtitle className='cat' color='dark'>Sexo</IonCardSubtitle>
                  <IonItem>                  
                    <IonRadio value="MACHO">Macho</IonRadio>
                  </IonItem>
                  <IonItem>                  
                    <IonRadio value="FEMEA">Femea</IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonItem>
              <div className='content'>
                <IonButton onClick={handleRegisterPet}>CADASTRAR</IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};