import '@/styles/index.css';
import '@/styles/fonts.css';
import { ViteReactSSG } from 'vite-react-ssg/single-page';
import React from 'react';
import { App } from '@/pages/index';
import { DownloadButtonModal } from '@/features/download-button-modal';
import { DocumentsButtonModal } from '@/entities/documents-button-modal';

export const createRoot = ViteReactSSG(
	<React.StrictMode>
		<App />
		<DownloadButtonModal />
		<DocumentsButtonModal />
	</React.StrictMode>
);
