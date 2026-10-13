import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Music App - Android Design System',
    brandUrl: 'https://www.figma.com/design/igARrYUXQ2K2nGvQPKKhXl/Brownfield-DS',
    colorPrimary: '#535C00',
    colorSecondary: '#535C00',
  }),
  sidebar: { showRoots: true },
});
