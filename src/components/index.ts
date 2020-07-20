import { createBox, createText } from '@shopify/restyle';

import { Theme } from '@/theme';

export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export { LoadAssets } from './LoadAssets';
export { Button } from './Button';
