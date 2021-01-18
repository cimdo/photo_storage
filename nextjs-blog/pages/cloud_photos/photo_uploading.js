import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'



export default function photo_uploading() {
    return (
      <Layout>
      <Head>
        <title>Uploading photos</title>
        <meta property="og:title" content="Uploading photos" key="title" />
      </Head>
      <h1 className="title">
          Read{' '}
          <Link href="/">
            <a>this page!</a>
          </Link>
      </h1>
      </Layout>

    )
    
    
  }