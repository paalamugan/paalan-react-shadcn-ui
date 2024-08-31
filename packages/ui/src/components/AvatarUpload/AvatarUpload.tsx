import { useRef } from 'react';

import { PencilIcon, User2Icon } from 'lucide-react';

import type { ChangeEvent, ElementRef, FC } from 'react';
import type { AvatarUploadProps } from './types';

import { cn } from '@/shared/dist/lib';

import { AvatarFallback, AvatarImage, AvatarRoot } from '../Avatar/Avatar';
import { Button } from '../Button';
import { Input } from '../Input';
import { Skeleton } from '../Skeleton';

export const AvatarUpload: FC<AvatarUploadProps> = ({
  src,
  onChange,
  onAvatarChange,
  isLoading,
  className,
  loadingClassName,
  avatarImage,
  avatarFallbackIcon,
}) => {
  const isEditable = !!onAvatarChange;

  const inputRef = useRef<ElementRef<'input'>>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file) return;
      const blobUrl = URL.createObjectURL(file);
      onAvatarChange?.(file, blobUrl);
    }
  };

  if (isLoading) {
    return <Skeleton className={cn('size-40 rounded-full', loadingClassName)} />;
  }

  return (
    <div className={cn('relative size-40', className)}>
      <AvatarRoot className="size-full">
        <AvatarImage src={src} className="object-cover" asChild={!!avatarImage}>
          {avatarImage}
        </AvatarImage>
        <AvatarFallback className="bg-secondary">
          {avatarFallbackIcon ? avatarFallbackIcon : <User2Icon className="size-1/2" />}
        </AvatarFallback>
      </AvatarRoot>
      {isEditable && (
        <>
          <Button
            variant="ghost"
            className="absolute bottom-0 right-0 size-9 rounded-full bg-secondary-foreground/90 p-1 hover:bg-secondary-foreground"
            onClick={(e) => {
              e.preventDefault();
              inputRef.current?.click();
            }}
          >
            <PencilIcon className="size-4 text-background" aria-label="pencil" />
          </Button>
          <Input ref={inputRef} type="file" className="hidden" onChange={onChange || handleChange} accept="image/*" />
        </>
      )}
    </div>
  );
};
