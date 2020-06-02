import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { sendContactMail } from "../components/networking/mail-api";
import { i18n, Link, withTranslation } from '../i18n';
import Swal from 'sweetalert2';

import LayoutContact from '../components/layoutContact';

import logoPosition from '../public/position.svg';
import logoTel from '../public/tel.svg';
import logoMail from '../public/mail.svg';
import logoLinkedin from '../public/linkedin2.svg';
import logoYoutube from '../public/youtube2.svg';
import logoTwitter from '../public/twitter2.svg';

//DEFINE EMPTY INITIAL VALUES FOR THE FORM
let initialValues = {
  name: '',
  email: '',
  mobile: '',
  company: '',
  message: ''
}

//GET ALL THE VALUES FILLED IN THE FORM
const onSubmit = async (values, { resetForm }) => {
  const name = values.name;
  const email = values.email;
  const formContent = values.message;
  const mobile = values.mobile;
  const company = values.company;

  //SHOW SUCCES MESSAGE IF OF THE VALUES ARE FILLED IN THE FORM & RESET THEM AT THE END
  if (name && email && formContent && mobile) {
    Swal.fire({
      title: 'Succès !',
      text: 'Votre message a été envoyé',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    resetForm({ values: '' })
  }
  //SEND ALL THE VALUES FILLED TO THE API ROUTE
  const res = await sendContactMail(name, email, formContent, mobile, company)
}

//DEFINE VALIDATION SCHEMA FOR THE FORM WITH YUP
const validationSchema = Yup.object({
  name: Yup.string().required('Requis'),
  email: Yup.string().email("Format d'email invalide").required('Requis'),
  mobile: Yup.string().required('Requis'),
  message: Yup.string().required('Requis'),
})


function contactPage({ t }) {

  //GET ALL THE VALUES FILLED IN THE FORM
  const validation = async values => {
    const name = values.name;
    const email = values.email;
    const formContent = values.message;
    const mobile = values.mobile;
    const company = values.company;

    //SHOW FAILED MESSAGE IF OF THE VALUES ARE NOT FILLED IN THE FORM 
    if (!name && !email && !formContent && !mobile && !company) {
      Swal.fire({
        title: 'Raté !',
        text: 'Veuillez remplir les champs nécessaires',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }


  return (
    <React.Fragment>
      <main>
        <section id="contact-section">
          <div className="div-contact-form">
            <div className="message">
              <h4 className="title-message">{t('contact.envoiMessage')}</h4>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form id="contact-form">
                  <Field name="name" id="name" type="text" className="form-control" placeholder={t('contact.nom')} />
                  <ErrorMessage name="name">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                  <Field name="email" id="email" type="email" className="form-control" placeholder={t('contact.email')} onSubmit={() => value = ''} />
                  <ErrorMessage name="email">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                  <Field name="mobile" id="mobile" type="tel" className="form-control" placeholder={t('contact.telephone')} />
                  <ErrorMessage name="mobile">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                  <Field name="company" id="company" type="text" className="form-control" placeholder={t('contact.compagnie')} />

                  <Field as='textarea' name="message" id="message" className="form-control" placeholder={t('contact.message')} rows="6"></Field>
                  <ErrorMessage name="message">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>

                  <Field type="submit" className="submit" name="submit" onClick={validation} value={t('contact.validation')} />

                </Form>
              </Formik>
            </div>
            <div className="informations">
              <h4 className="title-informations">{t('contact.informationsTitle')}</h4>
              <p className="text-informations"><img src={logoPosition} className="img-informations" alt="position" />155 Boulevard de
                    l'Hôpital, 75013 Paris</p>
              <p className="text-informations"><img src={logoMail} className="img-informations" alt="mail" />contact@geosophy.io</p>
              <div className="logo-informations">
                <a href="https://www.linkedin.com/company/geosophy-io/" aria-label="linkedin" target="_blank"><img
                  src={logoLinkedin} className="logo-contact" alt="linkedin" /></a>
                <a href="#" target="_blank" aria-label="youtube"><img src={logoYoutube} className="logo-contact" alt="youtube" /></a>
                <a href="https://twitter.com/Geosophy1" aria-label="twitter" target="_blank"><img src={logoTwitter}
                  className="logo-contact" alt="twitter" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

    </React.Fragment>
  )
}

contactPage.Layout = LayoutContact;

contactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

contactPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(contactPage)