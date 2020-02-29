import React from "react";

import Head from "next/head";

import Fonts from "./Fonts";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Fonts();
  }
  render() {
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <title>Fluency Hub</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" type="text/css" href="/ngprogress.css" />
        </Head>
        <div>{this.props.children}</div>
        <style jsx global>{`
          body {
            margin: 0;
          }

          p,
          a,
          span,
          button,
          body {
            /* font-family: 'Noto Serif', serif; */
            font-family: "Montserrat", sans-serif;
            /* font-weight: 400; */
            color: #313131;
          }
          a {
            cursor: pointer;
          }
          #signup-container {
            transition: opacity ease 0.35s;
          }

          .animate-in-modal {
            opacity: 1 !important;
          }
          .Collapsible {
            margin-bottom: 1px;
            display: flex;
            font-size: 20px;
            flex-direction: column;
            padding: 16px 9px;
            text-align: center;
          }

          .Collapsible__contentInner {
            font-size: 16px;
          }

          .Collapsible__trigger {
            cursor: pointer;
            font-weight: 500;
            color: #888787;
            font-size: 15px;
          }

          @media (max-width: 700px) {
            .Collapsible__trigger {
              font-size: 16px;
              /* font-weight: 00; */
            }
          }

          @media (min-width: 701px) {
            .Collapsible {
              padding: 13px 9px;
            }
          }

          #item-collapsibles .Collapsible {
            padding: 14px 9px;
            background-color: #fef4fc;
            margin-bottom: 20px;
            border-left: 3px solid #facff6;
          }

          #item-collapsibles .Collapsible__trigger {
            color: #2b033e;
            font-size: 17px;
          }
        `}</style>
      </>
    );
  }
}

export default Layout;
