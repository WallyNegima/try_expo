import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { NAV } from "src/routes";

const Splash = () => {
  const { navigate } = useNavigation();
  console.debug("aaaaaa");
  return (
    <View>
      <Text>splash</Text>
      <Button
        onPress={() => {
          console.debug("onclick");
          navigate(NAV.HOME);
        }}
        title="goToHome"
      >
        <Text>ホーム画面へ</Text>
      </Button>
    </View>
  );
};

export default Splash;
