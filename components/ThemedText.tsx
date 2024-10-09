import { cn } from '@/utils/cn';

import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps;

export function ThemedText({
  className,

  ...rest
}: ThemedTextProps) {
  const classes = cn('dark:text-white text-base', className);
  return (
    <Text
      className={classes}
      {...rest}
    >
      {rest.children}
    </Text>
  );
}
