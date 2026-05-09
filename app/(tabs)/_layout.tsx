import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/colors';
import { FontSize } from '@/constants/layout';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const TAB_ICON: Record<string, { active: IoniconName; inactive: IoniconName }> = {
  index:      { active: 'home',         inactive: 'home-outline'      },
  quiz:       { active: 'school',       inactive: 'school-outline'    },
  flashcards: { active: 'albums',       inactive: 'albums-outline'    },
  profile:    { active: 'person-circle',inactive: 'person-circle-outline' },
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor:   Colors.primary,
        tabBarInactiveTintColor: Colors.textTertiary,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor:  Colors.border,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: { fontSize: FontSize.xs },
        tabBarIcon: ({ focused, color, size }) => {
          const icons = TAB_ICON[route.name] ?? { active: 'ellipse', inactive: 'ellipse-outline' };
          return (
            <Ionicons
              name={focused ? icons.active : icons.inactive}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="index"      options={{ title: 'Inicio' }} />
      <Tabs.Screen name="quiz"       options={{ title: 'Quiz' }} />
      <Tabs.Screen name="flashcards" options={{ title: 'Flashcards' }} />
      <Tabs.Screen name="profile"    options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
