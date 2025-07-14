import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { MemoryRouter } from 'react-router-dom';

const meta = {
    title: "Buuton",
    component: Button,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        )
    ],
} satisfies Meta

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    
};

