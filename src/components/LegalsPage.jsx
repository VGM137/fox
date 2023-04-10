import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry.js';
import terms from '../assets/static/terms.pdf'
import disclaimer from '../assets/static/disclaimer.pdf'
import '../assets/styles/Components/Policies.css'

const LegalsPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [doc, setDoc] = useState('terms');

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleClick = (e, src) => {
    let target = e.target;
    if(src === 'terms'){
      setDoc('terms')
    }else{
      setDoc('disclaimer')
    }
  }

  return (
    <div className='pdf-document'>
      <div className='pdf-document-header'>
        <h2 onClick={(e) => handleClick(e, 'terms')} >Terminos y condiciones</h2>
        <h2 onClick={(e) => handleClick(e, 'disclaimer')} >Aviso de privacidad</h2>
      </div>
      {doc === 'terms' 
        ?
          <Document file={terms} options={{ workerSrc: pdfWorker }} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                renderTextLayer={false}
                renderAnnotationLayer={false}
                key={`page_${index + 1}`}
                className="pdf-page"
                pageNumber={index + 1}
                width={800}
              />
            ))}
          </Document>
        :
          <Document file={disclaimer} options={{ workerSrc: pdfWorker }} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                renderTextLayer={false}
                renderAnnotationLayer={false}
                key={`page_${index + 1}`}
                className="pdf-page"
                pageNumber={index + 1}
                width={400}
              />
            ))}
          </Document>
      }
    </div>
  );
}

export default LegalsPage