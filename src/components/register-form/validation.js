const validate = values => {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'Merci d\'indiquer votre prénom';
      } 

    if (!values.lastname) {
    errors.lastname = 'Merci d\'indiquer votre nom de famille';
    } 

    if (!values.email) {
      errors.email = 'Merci d\'indiquer votre email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Adresse email invalide';
    }

    if (!values.password) {
        errors.password = 'Merci d\'indiquer votre mot de passe';
      } else if (values.password.length < 6) {
        errors.password = 'Minimum 6 caractères';
      }

      if (!values.repeatpassword) {
        errors.repeatpassword = 'Merci d\'indiquer la confirmation de votre mot de passe';
      } else if (values.password !== values.repeatpassword) {
        errors.repeatpassword = 'La confirmation de mot de passe ne correspond pas';
      }
  
  
    return errors;
  };

  export default validate