import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponet: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponet />
  </div>
);
