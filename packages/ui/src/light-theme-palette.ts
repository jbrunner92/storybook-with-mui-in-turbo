import type { PaletteOptions} from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { common, grey, blueGrey, lightBlue } from '@mui/material/colors';
import type { ThemeOptions, TypeAction } from '@mui/material';

const primary = {
  ...lightBlue,
  contrastText: common.white,
  light: lightBlue[600],
  main: lightBlue[800],
  dark: lightBlue[900],
};

const secondary = {
  ...blueGrey,
  main: blueGrey[800],
  dark: blueGrey[900],
};

const accent = {
  greenLight: '#E8F5E9',
  greenMain: '#2E784E',
  greenDark: '#357A37',
  orangeLight: '#FFF5DB',
  orangeMain: '#A65F05',
  orangeDark: '#B36A00',
  redDark: '#61021B',
  redLight: '#FEE5EB',
  redMain: '#AB052F',
};

const background = { default: grey[100], paper: common.white };

const text = {
  primary: alpha(common.black, .87),
  secondary: alpha(common.black, .6),
  disabled: alpha(common.black, 38),
  delete: accent.redDark,
  hint: alpha(common.black, .38),
};

const action: TypeAction = {
  active: alpha(common.black, .60),
  hover: alpha(common.black, .8),
  hoverOpacity: 0.08,
  selected: alpha(primary.light, 0.14),
  selectedOpacity: 0.08,
  disabled: alpha(common.black, .38),
  disabledBackground: alpha(common.black, .14),
  disabledOpacity: 0.08,
  focus: alpha(common.black, .38),
  focusOpacity: 0.08,
  activatedOpacity: 0.08,
};

const palette: PaletteOptions = {
  mode: 'light',
  tonalOffset: 0.2,
  contrastThreshold: 3,
  success: { main: accent.greenMain, light: accent.greenLight, dark: accent.greenDark },
  warning: { main: accent.orangeMain, light: accent.orangeLight, dark: accent.orangeDark },
  error: { main: accent.redMain, dark: accent.redDark, light: accent.redLight },
  info: { main: primary.main },
  divider: alpha(common.black, .14),
  primary,
  secondary,
  common,
  grey,
  text,
  background,
  action,
};

export const themeOptions: ThemeOptions = {
  palette,
};

export default themeOptions;
