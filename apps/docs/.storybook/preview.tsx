import { ThemeProvider, lightTheme, darkTheme } from 'ui';
import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
    // (Story, context) => {
    //   const [themeWithRef, setThemeWithRef] = useState<Theme | undefined>();

    //   const setRef = useCallback(
    //     (headRef: HTMLDivElement | null) => {
    //       if (headRef) {
    //         setThemeWithRef(getTheme(headRef, context.globalTypes.theme));
    //       }
    //     },
    //     [context.globalTypes.theme],
    //   );

    //   return (
    //     <div ref={setRef}>
    //       {themeWithRef && <ThemeProvider theme={themeWithRef}>{Story()}</ThemeProvider>}
    //     </div>
    //   );
    // },
  ],
};

export default preview;
