import React, { useEffect } from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import 'pdfjs-dist/build/pdf.worker.min.js';

interface ResumeModalProps {
  showModal: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ showModal, onClose }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          aria-label="Close resume modal"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">My Resume</h2>

        <div className="h-[60vh] overflow-auto mb-4">
          <Worker workerUrl="/pdf.worker.min.js">
            <Viewer fileUrl="/assets/jim-macur-resume.pdf" />
          </Worker>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href="/assets/jim-macur-resume.pdf"
            download="jim-macur-resume.pdf"
            className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
            aria-label="Download my resume"
          >
            <FaDownload className="mr-2" size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;