export const FormErrors = ({ formErrors }: any) =>
<div className='formErrors'>
  {Object.keys(formErrors).map((fieldName, i) => {
    if (formErrors[fieldName].length > 0) {
      console.log(formErrors)  
      return (
        <p key={i}>{fieldName} {formErrors[fieldName]}</p>
      );
    } else {
      return '';
    }
  })}
</div>;