/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    // GA Tracking Script
    // <script>
    //   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r; i[r]=i[r]||function(){
    //   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    //   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    //   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    //   ga('create', 'UA-97707643-1', 'auto');
    //   ga('send', 'pageview');
    // </script>

    //  [if lt IE 9]>
    // <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    // <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    // <![endif]

    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossOrigin="anonymous"
    />,

    <link rel="stylesheet" href="styles/bootstrap.min.css" />,
    <link rel="stylesheet" href="styles/font-awesome.min.css" />,
    <link
      href="https://fonts.googleapis.com/css?family=Changa+One:400i"
      rel="stylesheet"
    />,
    <link
      href="https://fonts.googleapis.com/css?family=Kreon:700|Ubuntu:500,500i,700i"
      rel="stylesheet"
    />,
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
    />,
  ])
  setPostBodyComponents([
    <script
      src="https://code.jquery.com/jquery-2.2.4.min.js"
      integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
      crossOrigin="anonymous"
    ></script>,
    <script src="scripts/bootstrap.min.js"></script>,
  ])
}
