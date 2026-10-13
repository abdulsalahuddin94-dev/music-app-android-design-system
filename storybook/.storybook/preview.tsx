import type { Preview } from '@storybook/react-vite';
import '../src/tokens/tokens.css';
import '../src/styles/text-styles.css';
import '../src/styles/effects.css';
import '../src/styles/components.css';
import { modeGlobalTypes, modeInitialGlobals, withModes, ModesDocsContainer } from '../src/docs/Modes';

// Toolbars are generated from the Figma variable collections with more than one mode, with the exact Figma names:
// Semantic (Light / Dark). Stories and docs pages follow it.
const preview: Preview = {
  decorators: [withModes as any],
  globalTypes: modeGlobalTypes,
  initialGlobals: modeInitialGlobals,
  parameters: {
    layout: 'padded',
    controls: { expanded: true, sort: 'none' },
    backgrounds: { disable: true },
    docs: { container: ModesDocsContainer },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Foundations', ['Colors', 'Typography', 'Sizing', 'Effects', 'Icons', 'Code'],
          'Form Elements', ['Checkbox', 'Radio', 'Switch', 'Text Field', 'Text Area', 'Search Bar'],
          'Navigation', ['Button', 'Icon Button', 'Filter Chip', 'Tab Item', 'Navigation Item', 'Primary Tabs', 'Bottom Navigation', 'Top App Bar', 'Playlist App Bar', 'Mini Player', 'Playback Progress', 'Playback Controls', 'Player Utility Bar'],
          'Data Display',
        ],
      },
    },
    a11y: { test: 'todo' },
  },
};
export default preview;
