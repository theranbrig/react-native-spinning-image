import React, { Component } from 'react';
import { View, Text, Image, Animated, StyleSheet, Easing } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class SpinningImage extends Component {
  constructor() {
    super();
    this.state = { stopAnimation: false };
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.sequence([
      Animated.delay(0 || this.props.delay),
      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: this.props.speed || 5000,
        easing: Easing.linear
      })
    ]).start(() => {
      if (this.props.rotations > 0) {
        if (this.props.rotations === 1) {
          this.setState({ stopAnimation: true });
        } else {
          setTimeout(() => {
            this.setState({ stopAnimation: true });
          }, (this.props.rotations - 1) * (this.props.speed || 5000) - 500);
        }
      }
      if (!this.state.stopAnimation) {
        this.spin();
      }
    });
  }

  render() {
    const { width, height, source, direction } = this.props;
    const spinDirection = direction === 'counter' ? '-360deg' : '360deg';
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', spinDirection]
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: width || 200,
            height: height || 200,
            transform: [{ rotate: spin }]
          }}
          source={typeof source === 'string' ? { uri: `${source}` } : { source }}
        />
      </View>
    );
  }
}

export default SpinningImage;
