import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet>
    {/* General tags */}
    <title>La Meunerie</title>
    <html lang='fr' />

    {/* Meta tags */}
    <meta charset='utf-8' />
    <meta
      content='width=device-width, initial-scale=1, user-scalable=yes'
      name='viewport'
    />
    <meta name='author' content='Screen Side' />

    {/* Links */}
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600&display=swap'
      rel='stylesheet'
    />

    {/* Netlify CMS authentication script */}
    <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />

    <script src='https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.min.js' />
    <script
      src='https://cdn.jotfor.ms/static/prototype.forms.js'
      type='text/javascript'
    />
    <script
      src='https://cdn.jotfor.ms/static/jotform.forms.js?3.3.25491'
      type='text/javascript'
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            JotForm.init(function(){
              if (window.JotForm && JotForm.accessible) $('input_4').setAttribute('tabindex',0); JotForm.setCustomHint( 'input_4', 'Type here...' ); JotForm.newDefaultTheme = true; JotForm.extendsNewTheme = false; JotForm.newPaymentUIForNewCreatedForms = true; JotForm.newPaymentUI = true; JotForm.alterTexts(undefined); JotForm.clearFieldOnHide="disable"; JotForm.submitError="jumpToFirstError"; /*INIT-END*/ }); JotForm.prepareCalculationsOnTheFly([null,{"name":"heading","qid":"1","text":"Form","type":"control_head"},{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"email","qid":"3","subLabel":"example@example.com","text":"Email","type":"control_email"},{"description":"","name":"message","qid":"4","subLabel":"","text":"Message","type":"control_textarea"}]); setTimeout(function() {
              JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":"Form","type":"control_head"},{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"email","qid":"3","subLabel":"example@example.com","text":"Email","type":"control_email"},{"description":"","name":"message","qid":"4","subLabel":"","text":"Message","type":"control_textarea"}]);}, 20);
        `,
      }}
    />
    <link
      type='text/css'
      media='print'
      rel='stylesheet'
      href='https://cdn.jotfor.ms/css/printForm.css?3.3.25491'
    />
    <link
      type='text/css'
      rel='stylesheet'
      href='https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=5f7ed99c2c2c7240ba580251'
    />
    <link
      type='text/css'
      rel='stylesheet'
      href='https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.25491'
    />
    <link
      type='text/css'
      rel='stylesheet'
      href='https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.25491'
    />
  </Helmet>
);

export default Head;
