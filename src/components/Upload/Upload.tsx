import React, { useState, useCallback, useRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import {
  IconCloudUp,
  IconCircleCheck,
  IconFolderFilled,
  IconTrashXFilled,
  IconAlertCircle,
} from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import { Progress } from '../Progress';
import { Button } from '../Button';

const uploadVariants = cva(
  `focus-visible:ring-interactive-focused relative cursor-pointer rounded-lg
  border-1 border-dashed transition-colors focus-visible:ring-4
  focus-visible:outline-none`,
  {
    variants: {
      size: {
        small: 'p-md min-h-[80px]',
        large: 'pt-xxl pb-xxxl px-xl',
      },
      state: {
        default: `border-interactive-default bg-surface-primary
        hover:bg-surface-secondary`,
        dragging: 'bg-surface-success border-interactive-focused border-solid',
        success: 'border-shape-status-success bg-surface-success',
        error: 'border-shape-status-alert bg-surface-alert',
        inProgress: 'border-interactive-default bg-surface-primary',
      },
      disabled: {
        true: `border-interactive-disabled bg-surface-disabled
        cursor-not-allowed opacity-50`,
        false: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: 'small',
      state: 'default',
    },
  }
);

export interface UploadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof uploadVariants> {
  onFileSelect?: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  progress?: number;
  fileName?: string;
  fileSize?: string;
  errorMessage?: string;
  successMessage?: string;
  maxFileSize?: number;
  onFileRemove?: () => void;
  // Text customization props
  dragDropText?: string;
  orText?: string;
  selectFileText?: string;
  dropFilesText?: string;
  uploadingText?: string;
  uploadCompletedText?: string;
  uploadFailedText?: string;
}

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  (
    {
      className,
      size,
      state,
      onFileSelect,
      accept,
      multiple = false,
      disabled = false,
      progress,
      fileName,
      fileSize,
      errorMessage,
      successMessage,
      onFileRemove,
      dragDropText = 'ここにドラッグ&ドロップ',
      orText = 'または',
      selectFileText = 'ファイルを選択',
      dropFilesText = 'ここにファイルをドロップ',
      uploadingText = 'アップロード中…',
      uploadCompletedText = 'アップロードが完了しました',
      uploadFailedText = 'アップロードに失敗しました',
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDragEnter = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isDragging) {
          setIsDragging(true);
        }
      },
      [isDragging]
    );

    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (disabled) return;

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
          onFileSelect?.(files);
        }
      },
      [disabled, onFileSelect]
    );

    const handleClick = useCallback(() => {
      if (disabled) return;
      inputRef.current?.click();
    }, [disabled]);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
          onFileSelect?.(files);
        }
      },
      [onFileSelect]
    );

    const currentState = isDragging ? 'dragging' : state;

    const renderIcon = () => {
      return (
        <IconCloudUp
          className="text-shape-interactive-primary-default"
          size={size === 'large' ? 60 : 32}
        />
      );
    };

    const renderSmallContent = () => {
      return (
        <div className="gap-xxs flex flex-col items-center">
          <div className="mb-xxs text-center">
            <p className="text-body-secondary">{dragDropText}</p>
            <p className="text-body-secondary text-sm">{orText}</p>
          </div>
          <Button
            size="xs"
            intent="tertiary"
            icon={IconFolderFilled}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {selectFileText}
          </Button>
        </div>
      );
    };

    const renderLargeContent = () => {
      return (
        <div className="gap-sm flex flex-col items-center">
          {renderIcon()}
          <div className="gap-xs flex flex-col text-center">
            <p className="text-body-secondary font-medium">
              {dropFilesText}
              <span className="text-sm">{orText}</span>
            </p>
            <Button
              size="xs"
              intent="tertiary"
              className="self-center"
              icon={IconFolderFilled}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {selectFileText}
            </Button>
          </div>
        </div>
      );
    };

    // Helper function to render the upload box
    const renderUploadBox = () => (
      <div
        className={cn(uploadVariants({ size, state: 'default', disabled }))}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        <input
          ref={inputRef}
          type="file"
          className="sr-only"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled}
        />
        {size === 'small' ? renderSmallContent() : renderLargeContent()}
      </div>
    );

    // Helper function to render status info below the upload box
    const renderStatusInfo = () => {
      const defaultFileName =
        size === 'small' ? 'document_file_name.csv' : 'document_file_name.pdf';

      if (currentState === 'inProgress' && progress !== undefined) {
        return (
          <div className="mt-xxs gap-xs flex flex-col">
            <div className="gap-xxs flex flex-col">
              <p className="text-body-primary">{fileName || defaultFileName}</p>
              <div className="text-body-secondary flex">
                <span>（{fileSize || '12kb'}）</span>
                <span>{uploadingText}</span>
              </div>
            </div>
            <div className="w-full">
              <Progress
                indeterminate={!progress}
                value={progress}
                className="h-1"
              />
            </div>
          </div>
        );
      }

      if (currentState === 'success') {
        return (
          <div className="mt-xxs flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-body-primary">{fileName || defaultFileName}</p>
              <button
                className="hover:bg-surface-secondary rounded p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  onFileRemove?.();
                }}
              >
                <IconTrashXFilled size={24} className="text-shape-primary" />
              </button>
            </div>
            <div className="gap-xxs flex items-center">
              <IconCircleCheck
                size={24}
                className="text-shape-status-success"
              />
              <p className="text-interactive-primary-default">
                {successMessage || uploadCompletedText}
              </p>
            </div>
          </div>
        );
      }

      if (currentState === 'error') {
        return (
          <div className="mt-xxs gap-xxs flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-body-alert">{fileName || defaultFileName}</p>
            </div>
            <div className="gap-xxs flex items-center">
              <IconAlertCircle size={24} className="text-shape-status-alert" />
              <p className="text-body-alert">
                {errorMessage || uploadFailedText}
              </p>
            </div>
          </div>
        );
      }

      return null;
    };

    const renderContent = () => {
      return size === 'small' ? renderSmallContent() : renderLargeContent();
    };

    // Special layouts for states that show status info below the upload box
    if (
      (currentState === 'inProgress' && progress !== undefined) ||
      currentState === 'success' ||
      currentState === 'error'
    ) {
      return (
        <div ref={ref} className={cn(className)} {...props}>
          {renderUploadBox()}
          {renderStatusInfo()}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          uploadVariants({ size, state: currentState, disabled }),
          className
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          className="sr-only"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled}
        />
        {renderContent()}
      </div>
    );
  }
);

Upload.displayName = 'Upload';

export { Upload, uploadVariants };
