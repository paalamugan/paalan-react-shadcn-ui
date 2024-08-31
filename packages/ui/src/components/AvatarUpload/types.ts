import type { ChangeEventHandler, ReactNode } from 'react';
import type { InputProps } from '../Input';

export interface AvatarUploadProps {
  /**
   * The src of the avatar image.
   */
  src: string;
  /**
   * onChange event handler for the input element.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * If defined, this function will be called when the user selects a new avatar image.
   * @param file file object
   * @param blobUrl blob url of the file
   */
  onAvatarChange?: (file: File, blobUrl: string) => void;
  /**
   * If `true`, the component will be in a loading state.
   */
  isLoading?: boolean;
  /**
   * The class name to apply to the root element.
   */
  className?: string;
  /**
   * The class name to apply to the loading element.
   */
  loadingClassName?: string;
  /**
   * The element to use as the avatar image.
   * @example <Image src="https://bit.ly/uchiha-itachi" width={160} height={160} />
   */
  avatarImage?: ReactNode;
  /**
   * The element to use as the fallback icon.
   * @example <User2Icon className="size-1/2" />
   */
  avatarFallbackIcon?: ReactNode;
  /**
   * The props to apply to the input element.
   */
  inputProps: InputProps;
}
