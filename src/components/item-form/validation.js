const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Merci d\'indiquer un titre';
      } 

    if (!values.image) {
    errors.image = 'Merci d\'indiquer une image';
    } 

    if (!values.price) {
        errors.price = 'Merci d\'indiquer un prix';
        } 

    if (!values.description) {
        errors.description = 'Merci d\'indiquer une description';
        } 
  
    return errors;
  };

  export default validate
