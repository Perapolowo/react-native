import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

const Weather = (props) => {
  const [forecastInfo, setForecastInfo] = useState({
    main: "-",
    description: "-",
    temp: 0,
  });

  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=9aebc24f65604b3bafc6612917507d59`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  return (
    <ImageBackground
      style={styles.backdrop}
      source={require("../assets/bg.jpg")}
    >
      <View
        style={{
          backgroundColor: "rgba(52, 52, 52, 0.8)",
          width: "100%",
          height: "40%",
          paddingTop: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
            paddingTop: 15,
          }}
        >
          Zip code is {props.zipCode}.
        </Text>
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
