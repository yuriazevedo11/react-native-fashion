import { useTheme as useRestyleTheme } from '@shopify/restyle';

import { Theme } from '@/theme';

const useTheme = () => useRestyleTheme<Theme>();

export default useTheme;
