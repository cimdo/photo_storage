import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import Layout from '../../components/layout'
import {DropzoneDialog} from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';


import {useState} from 'react';



export default function photo_uploading() {
  const [files, setFiles] = useState(0);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleSave(file) {
    //Saving files to state for further use and closing Modal.
    setFiles(file);
    setOpen(false);
  }

  function handleClose() {
    setOpen(false);
  }
    return (
      <>
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
      <Button onClick={handleOpen}>
        Add Image
      </Button>
      <DropzoneDialog
          open={open}
          onSave={handleSave}
          filesLimit={10}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={handleClose}
      />
      </>

    )
    
    
  }

  