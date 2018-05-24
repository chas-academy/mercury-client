// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import './PageTitle.css';

type Props = {
  title?: string,
  customTitle?: string,
  appName?: string
};

const PageTitle = ({ ...props }: Props) => {
  let siteName = process.env.REACT_APP_SITE_NAME;
  let { title, customTitle, appName } = props;

  if (appName) {
    siteName = `${appName} | ${siteName}`;
  }

  let headTitle = customTitle ? title : `${title} | ${siteName}`;

  if (!title) {
    title = siteName;
    headTitle = siteName;
  }

  return (
    <h1 className='page-title'>
      <Helmet title={headTitle} />
      {title}
    </h1>
  );
};

export default PageTitle;
