import { Worker, Viewer } from "@react-pdf-viewer/core";
// Import the main component
import pdf from "../../assets/file/cv.pdf";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
export const PdfViewer = () => {
  return (
    <div className="h-[750px]">
      <Worker
        className="p-8"
        workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"
      >
        <Viewer fileUrl={pdf} />
      </Worker>
    </div>
  );
};
