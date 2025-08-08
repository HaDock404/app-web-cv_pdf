import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/app.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const HomePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(600);
  const containerRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Resize listener
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="pdf-container">
      <div className='homepage_links'>
        <a className='homepage_button' href="https://www.gael-delescluse.com/" target='blank'>Site personnel</a>
        <a className='homepage_button' href="https://www.linkedin.com/in/gael-d-044b34304" target='blank'>LinkedIn</a>
        <a className='homepage_button' href="https://github.com/HaDock404" target='blank'>Github</a>
      </div>
      <a href="/Data_Scientist_Gael_Delescluse.pdf" download className="download-btn">
        📥 Télécharger
      </a>
      <div className="pdf-viewer scroll" ref={containerRef}>
        <Document
          file={`${process.env.PUBLIC_URL}/Data_Scientist_Gael_Delescluse.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={containerWidth > 600 ? 600 : containerWidth}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default HomePage;
