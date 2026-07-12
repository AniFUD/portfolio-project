import React from 'react';
import { createPortal } from 'react-dom';
import './ExternalLinkModal.css';

export default function ExternalLinkModal({ isOpen, onClose, projectTitle, externalUrl, isInternal }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="modal-header">
          <h3 className="modal-title">
            {isInternal ? 'Internal Enterprise Project' : 'External Project Link'}
          </h3>
        </div>
        <div className="modal-body">
          {isInternal ? (
            <p className="modal-text">
              <strong>{projectTitle}</strong> is an internal platform built for ABC x Trustpointly. Because it manages proprietary operations and data, a public external link is not available.
            </p>
          ) : (
            <p className="modal-text">
              You are about to visit the external website for <strong>{projectTitle}</strong>:
              <br />
              <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="modal-link-display">
                {externalUrl}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </p>
          )}
        </div>
        <div className="modal-footer">
          {isInternal ? (
            <button className="modal-btn primary" onClick={onClose}>
              Got it
            </button>
          ) : (
            <>
              <button className="modal-btn secondary" onClick={onClose}>
                Cancel
              </button>
              <a 
                href={externalUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-btn primary link-btn"
                onClick={onClose}
              >
                Visit Site
              </a>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
