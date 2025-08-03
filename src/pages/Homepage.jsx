import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/app.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const HomePage = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-container">
        <a href="/cv.pdf" download className="download-btn">
            📥 Télécharger
        </a>
        
        <div className="pdf-viewer scroll">
            <Document
            file={`${process.env.PUBLIC_URL}/cv.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            >
            {Array.from(new Array(numPages), (_, index) => (
                <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={600}
                />
            ))}
            </Document>
        </div>
    </div>
  );
};

export default HomePage;
