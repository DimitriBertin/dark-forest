export const config = {
  apiKey: 'AIzaSyD51G0rXTYqxnRWpoNxTHWyv9XsVTuTjoQ',
  authDomain: 'darkforest-6e99a.firebaseapp.com',
  projectId: 'darkforest-6e99a',
  storageBucket: 'darkforest-6e99a.appspot.com',
  messagingSenderId: '979172212039',
  appId: '1:979172212039:web:f58f987b09f2ec27d92062',
  measurementId: 'G-FKCBVX8XDF',
}

export const authError = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Votre email est déjà utilisé.'
    case 'auth/invalid-email':
      return 'Votre email est invalide'
    case 'auth/operation-not-allowed':
      return "Cette opération n'est pas disponnible. Contactez le master: master@darkforest.fr"
    case 'auth/weak-password':
      return "Le mot de passe n'est pas assez sécurisé"
    default:
      return 'Oups ! Erreur inconnu... Contactez le master: master@darkforest.fr'
  }
}
