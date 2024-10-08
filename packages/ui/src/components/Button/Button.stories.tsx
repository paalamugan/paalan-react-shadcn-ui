import { EnvelopeIcon } from '@paalan/react-icons';
import { ALL_COLOR_VARIANTS } from '@paalan/react-shared/system';
import { expect, userEvent, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../../base';
import { Button } from './Button';
import { BUTTON_ROUNDED, BUTTON_SIZE, BUTTON_VARIANTS } from './constants';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    asChild: {
      description: 'Render the component as a child of the trigger.',
      table: {
        disable: true,
      },
    },
    size: {
      description: 'The size of the button.',
      control: {
        type: 'select',
      },
      options: Object.keys(BUTTON_SIZE),
      defaultValue: 'md',
    },
    rounded: {
      description: 'The border radius of the button.',
      control: {
        type: 'select',
      },
      options: Object.keys(BUTTON_ROUNDED),
      defaultValue: 'md',
    },
    onClick: {
      description: 'Optional click handler',
      action: 'clicked',
    },
    label: {
      description: 'Optional label for the button',
      control: {
        type: 'text',
      },
    },
    variant: {
      description: 'Optional variant for the button (solid, outline, ghost, soft, link).',
      control: {
        type: 'select',
      },
      options: BUTTON_VARIANTS,
      defaultValue: 'solid',
    },
    color: {
      description: 'Optional color for the button',
      control: {
        type: 'select',
      },
      options: ALL_COLOR_VARIANTS,
      defaultValue: 'primary',
    },
    leftIcon: {
      description: 'Optional left icon for the button',
      control: {
        type: 'object',
      },
    },
    rightIcon: {
      description: 'Optional right icon for the button',
      control: {
        type: 'object',
      },
    },
    isLoading: {
      description: 'Optional loading for the button',
      control: {
        type: 'boolean',
      },
    },
    loadingText: {
      description: 'Optional loading text for the button',
      control: {
        type: 'text',
      },
    },
    wrapperClassName: {
      description: 'Optional wrapper class name for the button and icons (if any)',
      control: {
        type: 'text',
      },
    },
    unstyled: {
      description: 'Optional unstyled button',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Optional disabled button',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    size: 'md',
    rounded: 'md',
    label: 'Button',
    variant: 'solid',
    isLoading: false,
    wrapperClassName: '',
    disabled: false,
  },
};

export const WithUnstyled: Story = {
  args: {
    ...Basic.args,
    unstyled: true,
  },
};

export const WithVariant: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {BUTTON_VARIANTS.map((variant) => (
          <Button {...args} variant={variant} key={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
  args: {
    color: 'indigo',
  },
};

export const WithVariantPrimary: Story = {
  args: {
    variant: 'soft',
    color: 'primary',
    label: " I'm a primary button",
  },
};

export const WithSolidVariant: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {ALL_COLOR_VARIANTS.map((color) => (
          <Button {...args} color={color} key={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
};

export const WithSurfaceVariant: Story = {
  ...WithSolidVariant,
  args: {
    variant: 'surface',
  },
};

export const WithOutlineVariant: Story = {
  ...WithSolidVariant,
  args: {
    variant: 'outline',
  },
};

export const WithSoftVariant: Story = {
  ...WithSolidVariant,
  args: {
    variant: 'soft',
  },
};

export const WithGhostVariant: Story = {
  ...WithSolidVariant,
  args: {
    variant: 'ghost',
  },
};

export const WithLinkVariant: Story = {
  ...WithSolidVariant,
  args: {
    variant: 'link',
  },
};

export const WithSize: Story = {
  render: (args) => {
    const sizes = Object.keys(BUTTON_SIZE) as Array<keyof typeof BUTTON_SIZE>;
    return (
      <div className="flex flex-row items-center gap-4">
        {sizes.map((size) => (
          <Button {...args} size={size} key={size}>
            {size.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  },
};

export const WithRounded: Story = {
  render: (args) => {
    const rounds = Object.keys(BUTTON_ROUNDED) as Array<keyof typeof BUTTON_ROUNDED>;
    return (
      <div className="grid grid-cols-5 items-center gap-4">
        {rounds.map((rounded) => (
          <Button {...args} rounded={rounded} key={rounded}>
            {rounded.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  },
};

export const WithDisabled: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Primary Button',
  },
};

export const WithLoading: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    isLoading: true,
  },
};

export const WithLeftIcon: Story = {
  render: (args) => <Button {...args}>Login with Email Button</Button>,
  args: {
    leftIcon: <EnvelopeIcon className="size-4" />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Login with Email Button/i,
    });
    await userEvent.click(loginButton);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const WithRightIcon: Story = {
  render: (args) => <Button {...args}>Login with Email Button</Button>,
  args: {
    rightIcon: <EnvelopeIcon className="size-4" />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Login with Email Button/i,
    });
    await userEvent.click(loginButton);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const WithLoadingSize: Story = {
  render: (args) => {
    const sizes = Object.keys(BUTTON_SIZE) as Array<keyof typeof BUTTON_SIZE>;
    return (
      <div className="flex flex-row items-center gap-4">
        {sizes.map((size) => (
          <Button {...args} size={size} key={size}>
            {size.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  },
  args: {
    isLoading: true,
  },
};

export const WithAllColorLoading: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {ALL_COLOR_VARIANTS.map((color) => (
          <Button {...args} color={color} key={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
  args: {
    isLoading: true,
  },
};

export const WithAllColorLoadingText: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {ALL_COLOR_VARIANTS.map((color) => (
          <Button {...args} color={color} key={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
  args: {
    isLoading: true,
    loadingText: 'Submitting...',
  },
};

export const WithAllColorDisabled: Story = {
  render: (args) => {
    return (
      <div className="grid grid-cols-5 gap-4">
        {ALL_COLOR_VARIANTS.map((color) => (
          <Button {...args} color={color} key={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
  args: {
    disabled: true,
  },
};

export const WithAllVariantColor: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-6">
        {BUTTON_VARIANTS.map((variant) => (
          <div key={variant} className="flex flex-col gap-4">
            <Heading>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Heading>
            <div className="grid grid-cols-5 gap-4">
              {ALL_COLOR_VARIANTS.map((color) => (
                <Button {...args} variant={variant} color={color} key={variant + color}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)} {color}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const WithAllVariantColorLoading: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-6">
        {BUTTON_VARIANTS.map((variant) => (
          <div key={variant} className="flex flex-col gap-4">
            <Heading>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Heading>
            <div className="grid grid-cols-5 gap-4">
              {ALL_COLOR_VARIANTS.map((color) => (
                <Button {...args} variant={variant} color={color} key={variant + color}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)} {color}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  args: {
    isLoading: true,
  },
};

export const WithAllVariantColorDisabled: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-6">
        {BUTTON_VARIANTS.map((variant) => (
          <div key={variant} className="flex flex-col gap-4">
            <Heading>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Heading>
            <div className="grid grid-cols-5 gap-4">
              {ALL_COLOR_VARIANTS.map((color) => (
                <Button {...args} variant={variant} color={color} key={variant + color}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)} {color}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  args: {
    disabled: true,
  },
};
