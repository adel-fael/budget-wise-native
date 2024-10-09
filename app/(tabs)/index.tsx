import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useColorScheme } from 'nativewind';
import { ThemedText } from '@/components/ThemedText';
import { useCounter } from '@/store/useCounter';

export default function HomeScreen() {
  const { toggleColorScheme, colorScheme } = useColorScheme();
  const inc = useCounter((state) => state.inc);
  const count = useCounter((state) => state.count);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View className="flex-1 items-center justify-center ">
        <TouchableOpacity
          onPress={() => toggleColorScheme()}
          className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
        >
          <Text className="text-white">{colorScheme}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <ThemedText className="text-3xl">
          Welcome! Adel is the best frontend developer
        </ThemedText>
        <HelloWave />
      </View>

      <View>
        <ThemedText className="text-2xl text-red-400 dark:text-red-600">
          Counter:
        </ThemedText>
      </View>

      <View className="flex-1 items-start justify-center ">
        <TouchableOpacity
          onPress={() => inc()}
          className="inline-block py-4 text-xl text-white bg-gray-800 dark:bg-gray-200 px-7 hover:bg-gray-700 rounded-xl
"
        >
          <Text className="text-white dark:text-black">{count}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stepContainer}>
        <ThemedText className="themedThemedText-sm">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app/(tabs)/index.tsx
          </ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </View>
      <View style={styles.stepContainer}>
        <ThemedText className="themedThemedText-sm">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </View>
      <View style={styles.stepContainer}>
        <ThemedText className="themedThemedText-sm">
          Step 3: Get a fresh start
        </ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            npm run reset-project
          </ThemedText>{' '}
          to get a fresh{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app
          </ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app
          </ThemedText>{' '}
          to{' '}
          <ThemedText className="font-semibold themedThemedText-lg">
            app-example
          </ThemedText>
          .
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
