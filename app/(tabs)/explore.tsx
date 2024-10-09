import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons
          size={310}
          name="code-slash"
        />
      }
    >
      <View>
        <ThemedText className="themedText-2xl">Explore</ThemedText>
      </View>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText className="font-semibold">
            app/(tabs)/index.tsx
          </ThemedText>{' '}
          and{' '}
          <ThemedText className="font-semibold">
            app/(tabs)/explore.tsx
          </ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in{' '}
          <ThemedText className="font-semibold">
            app/(tabs)/_layout.tsx
          </ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText className="underline cursor-pointer hover:opacity-5 active:text-gray-500">
            Learn more
          </ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the
          web version, press{' '}
          <ThemedText className="font-semibold">w</ThemedText>{' '}
          in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the{' '}
          <ThemedText className="font-semibold">@2x</ThemedText>{' '}
          and{' '}
          <ThemedText className="font-semibold">@3x</ThemedText>{' '}
          suffixes to provide files for different screen densities
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText className="underline cursor-pointer hover:opacity-5 active:text-gray-500">
            Learn more
          </ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open{' '}
          <ThemedText className="font-semibold">
            app/_layout.tsx
          </ThemedText>{' '}
          to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText className="underline cursor-pointer hover:opacity-5 active:text-gray-500">
            Learn more
          </ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText className="font-semibold">
            useColorScheme()
          </ThemedText>{' '}
          hook lets you inspect what the user's current color scheme is, and so
          you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText className="underline cursor-pointer hover:opacity-5 active:text-gray-500">
            Learn more
          </ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText className="font-semibold">
            components/HelloWave.tsx
          </ThemedText>{' '}
          component uses the powerful{' '}
          <ThemedText className="font-semibold">
            react-native-reanimated
          </ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The{' '}
              <ThemedText className="font-semibold">
                components/ParallaxScrollView.tsx
              </ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });
