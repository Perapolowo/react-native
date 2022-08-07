import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

const Weather = ({ zipcode }) => {
  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });
  return (
    <ImageBackground
      style={styles.backdrop}
      source={require("../assets/bg.jpg")}
    >
      <View style={{backgroundColor:'rgba(52, 52, 52, 0.8)', width:"100%", height:"40%", paddingTop:40}}>
      <Text style={{ fontSize: 20, color: "white", textAlign:"center", paddingTop:15 }}>Zip code is {zipcode}.</Text>
      <Forecast {...forecastInfo} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    // justifyContent: "center",
  },
});

export default Weather;
