
import { Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';


export function HelloWave() {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(2, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Text>👋</Text>
    </Animated.View>
  );
}

