
import { useFormik } from 'formik';
import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function App() {
  const validate = values => {
    const errors = {};
    if (!values.user_name) {
      errors.user_name = '*Required';
    } else if (values.user_name.length > 15) {
      errors.user_name = '*Must be 15 characters or less';
    } else if (values.user_name = Number){
      errors.user_name = '*Must not be a number'
    }
  
    if (!values.user_email) {
      errors.user_email = '*Required';
    }
    
    if(!values.message){
      errors.message = '*Required'
    }

    if (!values.highestEducation){
      errors.highestEducation = 'Required'
    }else if(values.highestEducation = Number){
      errors.highestEducation= "*Numbers not allowed";}

    if (!values.study){
      errors.study = 'Required'
    }else if(values.study = Number){
      errors.study= "*Numbers not allowed";}

    if (!values.workExperience){
      errors.workExperience = 'Required'
    }else if(values.workExperience = Number){
      errors.workExperience= "*Numbers not allowed";}

    if (!values.instituteCanada){
      errors.instituteCanada = 'Required'
    }else if(values.instituteCanada = Number){
      errors.instituteCanada= "*Numbers not allowed";}

    if(!values.programCanada){
      errors.programCanada = 'Required'
    }else if(values.programCanada = Number){
      errors.programCanada= "*Numbers not allowed";}

    if(!values.country){
      errors.country = 'Required'
    }else if(values.country = Number){
      errors.country= "*Numbers not allowed";}

    if(!values.futureGoals){
      errors.futureGoals = 'Required'
    }else if(values.futureGoals = Number){
      errors.futureGoals= "*Numbers not allowed";}

    if(!values.scoreListening){
      errors.scoreListening = 'Required'
    }else if(values.scoreListening < 0){
      errors.scoreListening= "*Negative score not allowed";}

    if(!values.scoreReading){
      errors.scoreReading = 'Required'
    }else if(values.scoreReading < 0){
      errors.scoreReading= "*Negative score not allowed";}

    if(!values.scoreSpeech){
      errors.scoreSpeech= "Required"
    }else if(values.scoreSpeech < 0){
      errors.scoreSpeech= "*Negative score not allowed";}

    if(!values.scoreWriting){
      errors.scoreWriting = 'Required'
    }else if(values.scoreWriting < 0){
      errors.scoreWriting = "*Negative score not allowed";}

    if(!values.tutionFee){
      errors.tutionFee = 'Required'
    }else if(values.tutionFee < 0){
      errors.tutionFee= "*Negative Fees not allowed";}

    if (!values.GicFee){
      errors.GicFee = "Required"
    }else if(values.GicFee < 0){
      errors.GicFee = "*Negative Fees not allowed";}

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      user_name:'',
      user_email: '',
      message:'',
      highestEducation:'',
      study:'',
      workExperience:'',
      instituteCanada:'',
      programCanada:'',
      country:'',
      futureGoals:'',
      scoreListening:'',
      scoreReading:'',
      scoreSpeech:'',
      scoreWriting:'',
      tutionFee:'',
      GicFee:''

    },
    validate ,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


    
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('contact_service', 'contact_form', form.current, '4oB8mgbKmAudCcPn0')
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div >
      <div className='container'>
          <div className='container-top'>
            <h1 className='header'>SOP Generator by Nihal</h1>
            <p>Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs. </p>
          </div>
          <br/>
          <form className='form' ref={form} onSubmit={sendEmail}>
       <label htmlFor="user_name">First Name:</label>
       <br/>
       <input
         id="firstName"
         name="user_name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.user_name}
       />
       <br/>
       {formik.errors.user_name ? <div className='error'>{formik.errors.user_name}</div> : null}

       <label htmlFor="user_email">Email Address:</label>
       <br/>
       <input
         id="user_email"
         name="user_email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.user_email}
       />
       {formik.errors.user_email ? <div className='error'>{formik.errors.user_email}</div> : null}

       <br/>

      
      <br />
    
       <label htmlFor="highestEducation">Institute where you completed your highest level of education
        :</label>
       <br/>
       <input
         id="highestEducation"
         name="highestEducation"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.highestEducation}
       />
       {formik.errors.highestEducation ? <div className='error'>{formik.errors.highestEducation}</div> : null}

       <br/>
    
       <label htmlFor="study">What did you study
        :</label>
       <br/>
       <input
         id="study"
         name="study"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.study}
       />
       {formik.errors.study ? <div className='error'>{formik.errors.study}</div> : null}

       <br/>
    
       <label htmlFor="workExperience">Do you have any relevant work experience?
        :</label>
       <br/>
       <input
         id="workExperience"
         name="workExperience"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.workExperience}
       />
       {formik.errors.workExperience ? <div className='error'>{formik.errors.workExperience}</div> : null}

       <br/>
    
       <label htmlFor="instituteCanada">What institute did you get admitted to in Canada?
        :</label>
       <br/>
       <input
         id="instituteCanada"
         name="instituteCanada"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.instituteCanada}
       />
       {formik.errors.instituteCanada ? <div className='error'>{formik.errors.instituteCanada}</div> : null}

       <br/>
    
       <label htmlFor="programCanada">What is your program of study in Canada?
        :</label>
       <br/>
       <input
         id="programCanada"
         name="programCanada"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.programCanada}
       />
       {formik.errors.programCanada ? <div className='error'>{formik.errors.programCanada}</div> : null}

       <br/>
    
       <label htmlFor="country">Which country are you applying from?
        :</label>
       <br/>
       <input
         id="country"
         name="country"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.country}
       />
       {formik.errors.country ? <div className='error'>{formik.errors.country}</div> : null}

       <br/>
    
       <label htmlFor="futureGoals">What are your future goals?
        :</label>
       <br/>
       <input
         id="futureGoals"
         name="futureGoals"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.futureGoals}
       />
       {formik.errors.futureGoals ? <div className='error'>{formik.errors.futureGoals}</div> : null}

       <br/>
    
       <label htmlFor="scoreListening">English Scores - Listening
        :</label>
       <br/>
       <input
         id="scoreListening"
         name="scoreListening"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.scoreListening}
       />
       {formik.errors.scoreListening ? <div className='error'>{formik.errors.scoreListening}</div> : null}

       <br/>
    
       <label htmlFor="scoreReading">English Scores - Reading
        :</label>
       <br/>
       <input
         id="scoreReading"
         name="scoreReading"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.scoreReading}
       />
       {formik.errors.scoreReading ? <div className='error'>{formik.errors.scoreReading}</div> : null}

       <br/>
    
       <label htmlFor="scoreSpeech">English Scores - Speaking
        :</label>
       <br/>
       <input
         id="scoreSpeech"
         name="scoreSpeech"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.scoreSpeech}
       />
       {formik.errors.scoreSpeech ? <div className='error'>{formik.errors.scoreSpeech}</div> : null}

       <br/>
    
       <label htmlFor="scoreWriting">English Scores - Writing
        :</label>
       <br/>
       <input
         id="scoreWriting"
         name="scoreWriting"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.scoreWriting}
       />
       {formik.errors.scoreWriting ? <div className='error'>{formik.errors.scoreWriting}</div> : null}

       <br/>
    
       <label htmlFor="tutionFee" >How much tuition fee did you pay?
        :</label>
       <br/>
       <input
         id="tutionFee"
         name='tutionFee'
         type="number"
         onChange={formik.handleChange}
         value={formik.values.tutionFee}
       />
       {formik.errors.tutionFee ? <div className='error'>{formik.errors.tutionFee}</div> : null}

       <br/>
    
       <label htmlFor="GicFee">How much did you pay towards GIC?
        :</label>
       <br/>
       <input
         id="GicFee"
         name="GicFee"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.GicFee}
       />
       {formik.errors.GicFee ? <div className='error'>{formik.errors.GicFee}</div> : null}

      <br />

       <label htmlFor='message'>Message for me:</label>

      <br />
      <textarea className='message' name="message" />
      <br />
  
       <br/>
       <button type="submit" value="Send">Submit </button>
     </form>
  
      </div>
    </div>
  );
  }

export default App;
