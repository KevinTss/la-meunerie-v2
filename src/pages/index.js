import React, { useState } from 'react';

import Layout from '../components/layout';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  return (
    <Layout>
      <main style={pageStyles}>
        <title>Home Page</title>
        <form
          className='jotform-form'
          action='https://submit.jotformeu.com/submit/211353710035038/'
          method='post'
          name='form_211353710035038'
          id='211353710035038'
          acceptCharset='utf-8'
          autoComplete='on'
        >
          <input type='hidden' name='formID' value='211353710035038' readOnly />
          <input type='hidden' id='JWTContainer' value='' readOnly />
          <input type='hidden' id='cardinalOrderNumber' value='' readOnly />
          <div role='main' className='form-all'>
            <ul className='form-section page-section'>
              <li
                id='cid_1'
                className='form-input-wide'
                data-type='control_head'
              >
                <div className='form-header-group header-large'>
                  <div className='header-text httal htvam'>
                    <h1
                      id='header_1'
                      className='form-header'
                      data-component='header'
                    >
                      Form
                    </h1>
                  </div>
                </div>
              </li>
              <li className='form-line' data-type='control_email' id='id_3'>
                <label
                  className='form-label form-label-top form-label-auto'
                  id='label_3'
                  htmlFor='input_3'
                >
                  Email
                </label>
                <div id='cid_3' className='form-input-wide' data-layout='half'>
                  <span
                    className='form-sub-label-container'
                    // style='vertical-align:top'
                  >
                    <input
                      type='email'
                      id='input_3'
                      name='q3_email'
                      className='form-textbox validate[Email]'
                      // style='width:310px'
                      size='310'
                      value={emailValue}
                      onInput={(e) => setEmailValue(e.target.value)}
                      data-component='email'
                      aria-labelledby='label_3 sublabel_input_3'
                    />
                    <label
                      className='form-sub-label'
                      htmlFor='input_3'
                      id='sublabel_input_3'
                      // style='min-height:13px'
                      aria-hidden='false'
                    >
                      example@example.com
                    </label>
                  </span>
                </div>
              </li>
              <li className='form-line' data-type='control_textarea' id='id_4'>
                <label
                  className='form-label form-label-top form-label-auto'
                  id='label_4'
                  htmlFor='input_4'
                >
                  Message
                </label>
                <div id='cid_4' className='form-input-wide' data-layout='full'>
                  <textarea
                    id='input_4'
                    className='form-textarea'
                    name='q4_message'
                    // style='width:648px;height:163px'
                    data-component='textarea'
                    aria-labelledby='label_4'
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                  ></textarea>
                </div>
              </li>
              <li className='form-line' data-type='control_button' id='id_2'>
                <div id='cid_2' className='form-input-wide' data-layout='full'>
                  <div
                    data-align='auto'
                    className='form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField'
                  >
                    <button
                      id='input_2'
                      type='submit'
                      className='form-submit-button submit-button jf-form-buttons jsTest-submitField'
                      data-component='button'
                      data-content=''
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </li>
              <li style={{ display: 'none' }}>
                Should be Empty:{' '}
                <input type='text' name='website' value='' readOnly />
              </li>
            </ul>
          </div>
          <input
            type='hidden'
            className='simple_spc'
            id='simple_spc'
            name='simple_spc'
            value='211353710035038'
            readOnly
          />
          <div className='formFooter-heightMask'> </div>
          <div className='formFooter f6'>
            <div className='formFooter-wrapper formFooter-leftSide'>
              <a
                href='https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=211353710035038&utm_content=jotform_logo&utm_campaign=powered_by_jotform_le'
                target='_blank'
                className='formFooter-logoLink'
                rel='noreferrer'
              >
                <img
                  className='formFooter-logo'
                  src='https://cdn.jotfor.ms/assets/img/logo/logo-new@1x.png'
                  alt='Jotform Logo'
                />
              </a>
            </div>
            <div className='formFooter-wrapper formFooter-rightSide'>
              <span className='formFooter-text'>
                Now create your own JotForm - It's free!
              </span>
              <a
                className='formFooter-button'
                href='https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=211353710035038&utm_content=jotform_button&utm_campaign=powered_by_jotform_le'
                target='_blank'
                rel='noreferrer'
              >
                Create your own JotForm
              </a>
            </div>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default IndexPage;
