import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (typeof window !== 'undefined' && window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `JotForm.showJotFormPowered = "new_footer";`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `JotForm.poweredByText = "Powered by JotForm";`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var all_spc = document.querySelectorAll("form[id='211353710035038'] .si" + "mple" + "_spc");
            for (var i = 0; i < all_spc.length; i++)
            { all_spc[i].value = "211353710035038-211353710035038";
            } `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: `JotForm.forwardToEu=true;` }}
        />
        <script src='https://cdn.jotfor.ms//js/vendor/smoothscroll.min.js?v=3.3.25491' />
        <script src='https://cdn.jotfor.ms//js/errorNavigation.js?v=3.3.25491' />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
