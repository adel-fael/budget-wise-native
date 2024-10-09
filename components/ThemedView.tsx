import { cn } from '@/utils/cn';
import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps;

export const ThemedView = ({
  className,
  style,
  ...otherProps
}: ThemedViewProps) => {
  const classes = cn('dark:bg-black', className);

  return (
    <View
      style={style}
      className={classes}
      {...otherProps}
    >
      {otherProps.children}
    </View>
  );
};
