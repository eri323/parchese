/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { color } from '@/core/ui/tokens';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTheme() {
  const scheme = useColorScheme();

  return color[scheme === 'dark' ? 'oscuro' : 'claro'];
}
