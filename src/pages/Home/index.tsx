import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { NAV } from "src/routes";

const Home = () => {
  const { navigate } = useNavigation();
  console.debug("bbbbbbb");

  return (
    <View>
      <Text>home</Text>

      <Button
        onPress={() => {
          navigate(NAV.SPLASH);
        }}
        title="goToSplash"
      >
        <Text>スプラッシュ画面へ</Text>
      </Button>
    </View>
  );
};

export default Home;
