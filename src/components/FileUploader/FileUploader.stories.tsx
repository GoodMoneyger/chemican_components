import React, { useState } from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { FileUploader } from './FileUploader';

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'dragging', 'success', 'error', 'inProgress'],
    },
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    accept: {
      control: { type: 'text' },
    },
    fileName: {
      control: { type: 'text' },
    },
    fileSize: {
      control: { type: 'text' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    successMessage: {
      control: { type: 'text' },
    },
    maxFileSize: {
      control: { type: 'number' },
    },
    maxFiles: {
      control: { type: 'number' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Upload component with drag & drop functionality and multiple states.',
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof FileUploader> = (args) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileSelect = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    console.log('Selected files:', selectedFiles);
  };

  const handleFileRemove = () => {
    setFiles(null);
    console.log('File removed');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <FileUploader
        {...args}
        onFileSelect={handleFileSelect}
        onFileRemove={handleFileRemove}
      />
      {files && (
        <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
          <p>Selected files:</p>
          <ul>
            {Array.from(files).map((file, index) => (
              <li key={index}>
                {file.name} ({Math.round(file.size / 1024)}KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const SmallDefault = Template.bind({});
SmallDefault.args = {
  size: 'small',
  state: 'default',
  accept: '.jpg,.png,.pdf',
};

export const SmallSingle = Template.bind({});
SmallSingle.args = {
  size: 'small',
  state: 'default',
  multiple: false,
  accept: '.jpg,.png,.pdf,.docx',
};

export const SmallDragging = Template.bind({});
SmallDragging.args = {
  size: 'small',
  state: 'dragging',
};

export const SmallInProgress = Template.bind({});
SmallInProgress.args = {
  size: 'small',
  state: 'inProgress',
  progress: 47,
  fileName: 'document_file_name.csv',
  fileSize: '12kb',
};

export const SmallSuccess = Template.bind({});
SmallSuccess.args = {
  size: 'small',
  state: 'success',
  fileName: 'document_file_name.csv',
  successMessage: 'アップロードが完了しました',
};

export const SmallError = Template.bind({});
SmallError.args = {
  size: 'small',
  state: 'error',
  fileName: 'document_file_name.csv',
  errorMessage: 'アップロードに失敗しました',
};

export const LargeDefault = Template.bind({});
LargeDefault.args = {
  size: 'large',
  state: 'default',
  multiple: true,
  accept: '.jpg,.png,.pdf,.docx',
  maxFileSize: 10 * 1024 * 1024, // 10MB
};

export const LargeDragging = Template.bind({});
LargeDragging.args = {
  size: 'large',
  state: 'dragging',
  multiple: true,
};

export const LargeInProgress = Template.bind({});
LargeInProgress.args = {
  size: 'large',
  state: 'inProgress',
  progress: 42,
  fileName: 'document_file_name.pdf',
  fileSize: '12kb',
};

export const LargeSuccess = Template.bind({});
LargeSuccess.args = {
  size: 'large',
  state: 'success',
  fileName: 'document_file_name.pdf',
  successMessage: 'アップロードが完了しました',
};

export const LargeError = Template.bind({});
LargeError.args = {
  size: 'large',
  state: 'error',
  fileName: 'document_file_name.pdf',
  errorMessage: 'アップロードに失敗しました',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'small',
  state: 'default',
  disabled: true,
};
