import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { arrowUpOutline, homeOutline, createOutline, heart, heartOutline, constructOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Início',
    url: '/start',
    iosIcon: arrowUpOutline,
    mdIcon: arrowUpOutline
  },
  {
    title: 'Pets para adoção',
    url: '/pets',
    iosIcon: heartOutline,
    mdIcon: heartOutline
  }
];

const appPagesAdm: AppPage[] = [
  {
    title: 'Gerenciar Pets',
    url: '/login/1',
    iosIcon: constructOutline,
    mdIcon: constructOutline
  },
  {
    title: 'Cadastrar Pet',
    url: '/login/2',
    iosIcon: createOutline,
    mdIcon: createOutline
  },
];

export default function Menu() {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Bem Vindo!</IonListHeader>
          <IonNote>Adote Petz</IonNote>
            {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList id="inbox-list">
          <IonNote>Administrativo</IonNote>
            {appPagesAdm.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
