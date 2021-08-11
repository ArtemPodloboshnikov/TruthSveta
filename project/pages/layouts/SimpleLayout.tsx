import React from 'react';
import Head from 'next/head';
import classes from './SimpleLayout.module.scss';

type Props = {

    children: React.ReactNode,
    description: string
}
const SimpleLayout: React.FC<Props> = ({children, description}) => {
    return (
      <html>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={classes.main}>
          {children}
        </main>
  
       
      </html>
    )
  }

export default SimpleLayout;