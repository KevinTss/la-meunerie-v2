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
  </Helmet>
);

export default Head;
