import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import type { Meta, StoryObj } from '@storybook/react';
import type { FormComponentProps, FormFieldItem } from './types';

import { Input } from '../Input';
import { toast } from '../Toast';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    form: {
      description: 'The form object from react-hook-form',
    },
    fields: {
      description: 'The fields to render',
    },
    onSubmit: {
      description: 'The callback when the form is submitted',
    },
    submitText: {
      description: 'The text to display on the submit button',
    },
    SubmitButton: {
      description: 'The submit button component',
    },
    submitButtonVariant: {
      description: 'The submit button variant',
    },
    submitButtonColor: {
      description: 'The submit button color',
    },
    submitClassName: {
      description: 'The class name for the submit button',
    },
    resetText: {
      description: 'The text to display on the reset button',
    },
    ResetButton: {
      description: 'The reset button component',
    },
    resetButtonVariant: {
      description: 'The reset button variant',
    },
    resetButtonColor: {
      description: 'The reset button color',
    },
    resetClassName: {
      description: 'The class name for the reset button',
    },
    className: {
      description: 'The class name for the form element',
    },
    actionClassName: {
      description: 'The parent class name for reset and submit buttons',
    },
    hideResetButton: {
      description: 'Whether to hide the reset button',
    },
    hideSubmitButton: {
      description: 'Whether to hide the submit button',
    },
    inline: {
      description: 'Whether to display the form inline',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: FormComponentProps<any>) => {
    const formItemFields: FormFieldItem<FormType>[] = [
      {
        type: 'input',
        name: 'username',
        label: 'Username',
        description: 'This is your public username name.',
        placeholder: 'Enter a username',
        required: true,
        autoComplete: 'off',
        labelDescription: 'This is your public username name.',
      },
      {
        type: 'input',
        name: 'email',
        label: 'Email',
        placeholder: 'Enter a email',
        required: true,
      },
      {
        type: 'number',
        name: 'age',
        label: 'Age',
        placeholder: 'Enter a age',
        required: true,
      },
      {
        type: 'date-picker',
        name: 'dob',
        label: 'Date of Birth',
        placeholder: 'Select a date of birth',
        required: true,
      },
      {
        type: 'date-range-picker',
        name: 'dateRange',
        label: 'Date Range',
        placeholder: 'Select a date range',
        required: true,
      },
      {
        type: 'select',
        name: 'gender',
        label: 'Gender',
        required: true,
        placeholder: 'Select a gender',
        options: ['Male', 'Female', 'Other'],
      },
      {
        type: 'textarea',
        name: 'description',
        label: 'Description',
        required: true,
        placeholder: 'Enter a description',
      },
      {
        type: 'combobox',
        name: 'language',
        label: 'Language',
        placeholder: 'Select a language',
        required: true,
        options: [
          { label: 'English', value: 'en', key: 'en' },
          { label: 'French', value: 'fr', key: 'fr' },
          { label: 'German', value: 'de', key: 'de' },
          { label: 'Spanish', value: 'es', key: 'es' },
          { label: 'Portuguese', value: 'pt', key: 'pt' },
          { label: 'Russian', value: 'ru', key: 'ru' },
          { label: 'Japanese', value: 'ja', key: 'ja' },
          { label: 'Korean', value: 'ko', key: 'ko' },
          { label: 'Chinese', value: 'zh', key: 'zh' },
        ],
      },
      {
        type: 'multi-select',
        name: 'skills',
        label: 'Skills',
        required: true,
        placeholder: 'Select one or more skills',
        options: [
          { label: 'React', value: 'react', key: 'react' },
          { label: 'Vue', value: 'vue', key: 'vue' },
          { label: 'Angular', value: 'angular', key: 'angular' },
          { label: 'Svelte', value: 'svelte', key: 'svelte' },
          { label: 'Ember', value: 'ember', key: 'ember' },
          { label: 'Next.js', value: 'nextjs', key: 'nextjs' },
          { label: 'Nuxt.js', value: 'nuxtjs', key: 'nuxtjs' },
          { label: 'Gatsby', value: 'gatsby', key: 'gatsby' },
          { label: 'Sapper', value: 'sapper', key: 'sapper' },
          { label: 'Blitz.js', value: 'blitzjs', key: 'blitzjs' },
          { label: 'React Native', value: 'reactnative', key: 'reactnative' },
          { label: 'Flutter', value: 'flutter', key: 'flutter' },
          { label: 'Ionic', value: 'ionic', key: 'ionic' },
          { label: 'Cordova', value: 'cordova', key: 'cordova' },
          { label: 'Capacitor', value: 'capacitor', key: 'capacitor' },
          { label: 'Electron', value: 'electron', key: 'electron' },
          { label: 'NW.js', value: 'nwjs', key: 'nwjs' },
          { label: 'React Native Web', value: 'reactnativeweb', key: 'reactnativeweb' },
          { label: 'React Native Windows', value: 'reactnativewindows', key: 'reactnativewindows' },
          { label: 'React Native macOS', value: 'reactnativemacos', key: 'reactnativemacos' },
          { label: 'React Native Android', value: 'reactnativeandroid', key: 'reactnativeandroid' },
          { label: 'React Native iOS', value: 'reactnativeios', key: 'reactnativeios' },
        ],
      },
      {
        type: 'checkbox-group',
        name: 'courses',
        required: true,
        label: 'Courses',
        checkboxInline: true,
        options: [
          {
            label: 'React',
            value: 'react',
            key: 'react',
          },
          {
            label: 'Vue',
            value: 'vue',
            key: 'vue',
          },
          {
            label: 'Angular',
            value: 'angular',
            key: 'angular',
          },
          {
            label: 'Svelte',
            value: 'svelte',
            key: 'svelte',
          },
          {
            label: 'Ember',
            value: 'ember',
            key: 'ember',
          },
          {
            label: 'Next.js',
            value: 'nextjs',
            key: 'nextjs',
          },
        ],
      },
      {
        type: 'radio-group',
        name: 'newsletter',
        required: true,
        label: 'Newsletter',
        options: ['Yes', 'No'],
        labelClassName: 'font-normal',
        radioInline: true,
      },

      {
        type: 'input',
        name: 'displayName',
        label: 'Display Name',
        placeholder: 'Display name',
        description: 'This is your public display name.',
      },

      {
        type: 'checkbox',
        name: 'terms',
        required: true,
        label: 'Accept terms and conditions',
      },
    ];
    const genderOptions = ['Male', 'Female', 'Other'] as const;

    const formSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
      email: z.string().email({
        message: 'Please enter a valid email.',
      }),
      age: z
        .number({
          required_error: 'Please enter your age.',
        })
        .min(18, {
          message: 'You must be at least 18 years old.',
        }),
      dob: z.date({
        required_error: 'Please select a date of birth.',
      }),
      dateRange: z.object(
        {
          from: z.date({
            required_error: 'Please select a date range.',
          }),
          to: z.date().optional(),
        },
        {
          required_error: 'Please select a date range.',
        },
      ),
      gender: z.enum(genderOptions, {
        required_error: 'Please select a gender option',
      }),
      description: z.string().min(2, {
        message: 'Please enter a description',
      }),
      displayName: z.string().optional(),
      language: z.string({
        required_error: 'Please select a language.',
      }),
      skills: z.array(z.string(), {
        required_error: 'Please select one or more skills.',
      }),
      courses: z.array(z.string(), {
        required_error: 'Please select one or more courses.',
      }),
      terms: z.boolean().refine((value) => value, {
        message: 'Please accept the terms and conditions.',
      }),
      newsletter: z.enum(['Yes', 'No'], {
        required_error: 'Please select a newsletter option',
      }),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        email: '',
        description: '',
        gender: undefined,
        age: undefined,
        displayName: '',
        skills: [],
        terms: false,
        newsletter: undefined,
        dob: undefined,
        dateRange: undefined,
      },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType> {...args} form={form} fields={formItemFields} inline={args.inline} onSubmit={onSubmitHandle} />
    );
  },
};

export const WithInline: Story = {
  render: Basic.render,
  args: {
    inline: true,
  },
};

export const WithCustomGridFormAlignment: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: FormComponentProps<any>) => {
    const formItemFields: FormFieldItem<FormType>[] = [
      {
        type: 'input',
        name: 'username',
        label: 'Username',
        description: 'This is your public username name.',
        placeholder: 'Enter a username',
        required: true,
        autoComplete: 'off',
        labelDescription: 'This is your public username name.',
      },
      {
        type: 'input',
        name: 'email',
        label: 'Email',
        placeholder: 'Enter a email',
        required: true,
      },
      {
        type: 'number',
        name: 'age',
        label: 'Age',
        placeholder: 'Enter a age',
        required: true,
      },
      {
        type: 'date-picker',
        name: 'dob',
        label: 'Date of Birth',
        placeholder: 'Select a date of birth',
        required: true,
      },
      {
        type: 'date-range-picker',
        name: 'dateRange',
        label: 'Date Range',
        placeholder: 'Select a date range',
        required: true,
      },
      {
        type: 'select',
        name: 'gender',
        label: 'Gender',
        required: true,
        placeholder: 'Select a gender',
        options: ['Male', 'Female', 'Other'],
      },
      {
        type: 'textarea',
        name: 'description',
        label: 'Description',
        required: true,
        placeholder: 'Enter a description',
        formItemClassName: 'col-span-2',
      },
      {
        type: 'combobox',
        name: 'language',
        label: 'Language',
        placeholder: 'Select a language',
        required: true,
        options: [
          { label: 'English', value: 'en', key: 'en' },
          { label: 'French', value: 'fr', key: 'fr' },
          { label: 'German', value: 'de', key: 'de' },
          { label: 'Spanish', value: 'es', key: 'es' },
          { label: 'Portuguese', value: 'pt', key: 'pt' },
          { label: 'Russian', value: 'ru', key: 'ru' },
          { label: 'Japanese', value: 'ja', key: 'ja' },
          { label: 'Korean', value: 'ko', key: 'ko' },
          { label: 'Chinese', value: 'zh', key: 'zh' },
        ],
      },
      {
        type: 'multi-select',
        name: 'skills',
        label: 'Skills',
        required: true,
        placeholder: 'Select one or more skills',
        options: [
          { label: 'React', value: 'react', key: 'react' },
          { label: 'Vue', value: 'vue', key: 'vue' },
          { label: 'Angular', value: 'angular', key: 'angular' },
          { label: 'Svelte', value: 'svelte', key: 'svelte' },
          { label: 'Ember', value: 'ember', key: 'ember' },
          { label: 'Next.js', value: 'nextjs', key: 'nextjs' },
          { label: 'Nuxt.js', value: 'nuxtjs', key: 'nuxtjs' },
          { label: 'Gatsby', value: 'gatsby', key: 'gatsby' },
          { label: 'Sapper', value: 'sapper', key: 'sapper' },
          { label: 'Blitz.js', value: 'blitzjs', key: 'blitzjs' },
          { label: 'React Native', value: 'reactnative', key: 'reactnative' },
          { label: 'Flutter', value: 'flutter', key: 'flutter' },
          { label: 'Ionic', value: 'ionic', key: 'ionic' },
          { label: 'Cordova', value: 'cordova', key: 'cordova' },
          { label: 'Capacitor', value: 'capacitor', key: 'capacitor' },
          { label: 'Electron', value: 'electron', key: 'electron' },
          { label: 'NW.js', value: 'nwjs', key: 'nwjs' },
          { label: 'React Native Web', value: 'reactnativeweb', key: 'reactnativeweb' },
          { label: 'React Native Windows', value: 'reactnativewindows', key: 'reactnativewindows' },
          { label: 'React Native macOS', value: 'reactnativemacos', key: 'reactnativemacos' },
          { label: 'React Native Android', value: 'reactnativeandroid', key: 'reactnativeandroid' },
          { label: 'React Native iOS', value: 'reactnativeios', key: 'reactnativeios' },
        ],
      },
      {
        type: 'checkbox-group',
        name: 'courses',
        required: true,
        label: 'Courses',
        checkboxInline: true,
        options: [
          {
            label: 'React',
            value: 'react',
            key: 'react',
          },
          {
            label: 'Vue',
            value: 'vue',
            key: 'vue',
          },
          {
            label: 'Angular',
            value: 'angular',
            key: 'angular',
          },
          {
            label: 'Svelte',
            value: 'svelte',
            key: 'svelte',
          },
          {
            label: 'Ember',
            value: 'ember',
            key: 'ember',
          },
          {
            label: 'Next.js',
            value: 'nextjs',
            key: 'nextjs',
          },
        ],
      },
      {
        type: 'radio-group',
        name: 'newsletter',
        required: true,
        label: 'Newsletter',
        options: ['Yes', 'No'],
        labelClassName: 'font-normal',
        radioInline: true,
      },

      {
        type: 'input',
        name: 'displayName',
        label: 'Display Name',
        placeholder: 'Display name',
        description: 'This is your public display name.',
        formItemClassName: 'col-span-2',
      },

      {
        type: 'checkbox',
        name: 'terms',
        required: true,
        label: 'Accept terms and conditions',
        formItemClassName: 'col-span-2',
      },
    ];
    const genderOptions = ['Male', 'Female', 'Other'] as const;

    const formSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
      email: z.string().email({
        message: 'Please enter a valid email.',
      }),
      age: z
        .number({
          required_error: 'Please enter your age.',
        })
        .min(18, {
          message: 'You must be at least 18 years old.',
        }),
      dob: z.date({
        required_error: 'Please select a date of birth.',
      }),
      dateRange: z.object(
        {
          from: z.date({
            required_error: 'Please select a date range.',
          }),
          to: z.date().optional(),
        },
        {
          required_error: 'Please select a date range.',
        },
      ),
      gender: z.enum(genderOptions, {
        required_error: 'Please select a gender option',
      }),
      description: z.string().min(2, {
        message: 'Please enter a description',
      }),
      displayName: z.string().optional(),
      language: z.string({
        required_error: 'Please select a language.',
      }),
      skills: z.array(z.string(), {
        required_error: 'Please select one or more skills.',
      }),
      courses: z.array(z.string(), {
        required_error: 'Please select one or more courses.',
      }),
      terms: z.boolean().refine((value) => value, {
        message: 'Please accept the terms and conditions.',
      }),
      newsletter: z.enum(['Yes', 'No'], {
        required_error: 'Please select a newsletter option',
      }),
    });

    type FormType = z.infer<typeof formSchema>;

    const form = useForm<FormType>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        email: '',
        description: '',
        gender: undefined,
        age: undefined,
        displayName: '',
        skills: [],
        terms: false,
        newsletter: undefined,
        dob: undefined,
        dateRange: undefined,
      },
    });

    const onSubmitHandle = async (values: FormType) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };

    return (
      <Form<FormType> {...args} form={form} fields={formItemFields} inline={args.inline} onSubmit={onSubmitHandle} />
    );
  },
  args: {
    className: 'space-y-0 grid grid-cols-2 gap-4',
  },
};

export const WithCustomInputRender: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: FormComponentProps<any>) => {
    const customInputSchema = z.object({
      firstName: z.string().min(2, {
        message: 'First Name must be at least 2 characters.',
      }),
    });
    const form = useForm<z.infer<typeof customInputSchema>>({
      resolver: zodResolver(customInputSchema),
      defaultValues: {
        firstName: '',
      },
    });
    const onSubmitHandle = async (values: z.infer<typeof customInputSchema>) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast('You submitted the following values:', {
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="overflow-auto text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    };
    return <Form<z.infer<typeof customInputSchema>> {...args} form={form} onSubmit={onSubmitHandle} />;
  },
  args: {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        required: true,
        type: 'custom',
        render: ({ field }) => <Input type="text" placeholder="Enter a first name" {...field} />,
      },
    ],
  },
};
