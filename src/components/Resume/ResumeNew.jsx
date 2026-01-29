import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Mohit_Kumar.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth);
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <section className="px-4 pb-6 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        <Particle />
        <div className="relative z-10 flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-purple-accent/80 px-4 py-2 font-medium text-white transition hover:bg-purple-accent"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>

        <div className="relative z-10 flex justify-center py-2">
          <div className="overflow-hidden">
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.6} />
            </Document>
          </div>
        </div>

        <div className="relative z-10 flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-purple-accent/80 px-4 py-2 font-medium text-white transition hover:bg-purple-accent"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResumeNew;
