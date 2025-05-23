import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          // tabBarIcon: () => <Icon name="home" />,
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Times",

        }}
      />
      <Tabs.Screen
        name="teams"
        options={{
          title: "Jogadores",

        }}
      />
      <Tabs.Screen
        name="tournaments"
        options={{
          title: "Torneio",
          // tabBarIcon: () => <Icon name="person" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          // tabBarIcon: () => <Icon name="settings" />,
        }}
      />
    </Tabs>
  );
}
