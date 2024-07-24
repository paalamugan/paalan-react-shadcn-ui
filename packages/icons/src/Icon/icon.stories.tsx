import {
  alignContent,
  alignItems,
  alignSelf,
  BOX_COLOR_VARIANTS,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  placeSelf,
} from '@paalan/react-shared/system';
import { disableStorybookArgTypes } from '@paalan/react-shared/utils';

import type { IconProps } from '.';

import { HomeIcon } from '../HomeIcon';
import { createIcon } from './create-icon';
import { Icon } from './icon';

export default {
  title: 'Icons/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    ...disableStorybookArgTypes(['htmlTranslate', 'pos', 'flexDir']),
    as: {
      description: 'The HTML element or React component to render',
      control: {
        type: 'text',
      },
    },
    position: {
      description: 'Position property for the box',
      options: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
      control: {
        type: 'select',
      },
    },
    flexWrap: {
      options: Object.keys(flexWrap),
      control: {
        type: 'select',
      },
    },
    flexDirection: {
      options: Object.keys(flexDirection),
      control: {
        type: 'select',
      },
    },
    justifyContent: {
      options: Object.keys(justifyContent),
      control: {
        type: 'select',
      },
    },
    justifyItems: {
      options: Object.keys(justifyItems),
      control: {
        type: 'select',
      },
    },
    justifySelf: {
      options: Object.keys(justifySelf),
      control: {
        type: 'select',
      },
    },
    alignContent: {
      options: Object.keys(alignContent),
      control: {
        type: 'select',
      },
    },
    alignItems: {
      options: Object.keys(alignItems),
      control: {
        type: 'select',
      },
    },
    alignSelf: {
      options: Object.keys(alignSelf),
      control: {
        type: 'select',
      },
    },
    placeContent: {
      options: Object.keys(placeContent),
      control: {
        type: 'select',
      },
    },
    placeItems: {
      options: Object.keys(placeItems),
      control: {
        type: 'select',
      },
    },
    placeSelf: {
      options: Object.keys(placeSelf),
      control: {
        type: 'select',
      },
    },
    flexGrow: {
      options: ['1', '0'],
      control: {
        type: 'select',
      },
    },
    flexShrink: {
      options: ['1', '0'],
      control: {
        type: 'select',
      },
    },

    display: {
      description: 'Display property for the box',
      options: ['block', 'flex', 'inline', 'grid', 'inline-block', 'none'],
      control: {
        type: 'select',
      },
    },
    bg: {
      description: 'Background color for the box',
      options: BOX_COLOR_VARIANTS,
      control: {
        type: 'select',
      },
    },
    color: {
      description: 'Text color for the box',
      options: BOX_COLOR_VARIANTS,
      control: {
        type: 'select',
      },
    },
    borderColor: {
      description: 'Border color for the box',
      options: BOX_COLOR_VARIANTS,
      control: {
        type: 'select',
      },
    },
    fontSize: {
      description: 'Font Size for the box',
      options: [
        'xs',
        '2xs',
        '3xs',
        'tiny',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
};

export function Basic() {
  return <Icon className="text-2xl" />;
}

export function CustomIcon() {
  const ArrowIcon = (props: IconProps) => (
    <Icon viewBox="0 0 32 32" {...props}>
      <g fill="currentColor">
        <path d="M16,11.5a3,3,0,1,0-3-3A3,3,0,0,0,16,11.5Z" />
        <path d="M16.868.044A8.579,8.579,0,0,0,16,0a15.99,15.99,0,0,0-.868,31.956A8.579,8.579,0,0,0,16,32,15.99,15.99,0,0,0,16.868.044ZM16,26.5a3,3,0,1,1,3-3A3,3,0,0,1,16,26.5ZM16,15A8.483,8.483,0,0,0,8.788,27.977,13.986,13.986,0,0,1,16,2a6.5,6.5,0,0,1,0,13Z" />
      </g>
    </Icon>
  );
  return <ArrowIcon boxSize="40" className="text-red-500" />;
}

export function UsingHeroIcon() {
  return <Icon as={HomeIcon} boxSize="40" color="orange" />;
}

export function UsingCreateIcon() {
  const HeartIcon: ReturnType<typeof createIcon> = createIcon({
    displayName: 'HeartIcon',
    path: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />,
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </>
    ),
  });
  return <HeartIcon boxSize="40" />;
}
