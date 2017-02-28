import React, { Component } from 'react';
import {
    View,
    Image,
    TextInput,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    Animated,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class Home extends Component {

    state = {
        insightViewAnimatedValue: new Animated.Value(screenHeight),
        isInsightActive: false
    }

    onInsightsPressed = () => {
        this.setState({
            isInsightActive: true
        });
        Animated.sequence([
            Animated.timing(
                this.state.insightViewAnimatedValue,
                {
                    toValue: screenHeight - 100,
                    duration: 200
                }
            ).start(),
            Animated.timing(
                this.state.insightViewAnimatedValue,
                {
                    toValue: 0,
                    duration: 200
                }
            ).start(),
        ]);
    }

    returnToEditor = () => {
        this.setState({
            isInsightActive: false
        });
        Animated.timing(
            this.state.insightViewAnimatedValue,
            {
                toValue: screenHeight,
                duration: 200
            }
        ).start();
    }

    renderInsightButton() {
        if (this.state.isInsightActive) {
            return (
                <TouchableWithoutFeedback
                    onPress={this.returnToEditor}
                >
                    <View
                        style={styles.btnFooterContainer}
                    >
                        <Icon
                            name="ios-arrow-down"
                            size={24}
                            style={styles.btnFooterIcon}
                        />
                        <Text style={styles.btnFooterText}>BACK TO EDITOR</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        }
        return (
            <TouchableWithoutFeedback
                onPress={this.onInsightsPressed}
            >
                <View
                    style={styles.btnFooterContainer}
                >
                    <Icon
                        name="ios-book"
                        size={24}
                        style={styles.btnFooterIcon}
                    />
                    <Text style={styles.btnFooterText}>INSIGHTS</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <TouchableOpacity
                        onPress={() => console.log('onOpenPressed')}
                        style={styles.btnOpenContainer}
                    >
                        <Text style={styles.btnOpen}>OPEN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log('onOptionalPressed')}
                        style={styles.btnOptionalContainer}
                    >
                        <Icon name="md-more" style={styles.btnOptionalIcon} />
                    </TouchableOpacity>
                </View>

                <TouchableWithoutFeedback
                    onPress={() => console.log('onContentPressed')}
                >
                    <View
                        style={styles.contentContainer}
                    >
                        <Image
                            source={require('../img/leaf.png')}
                        />
                        <Text style={styles.txtTapAnywhere}>Tap anywhere to open photo</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Animated.View
                    style={[
                        styles.insightView,
                        { top: this.state.insightViewAnimatedValue }
                    ]}
                >
                    <TouchableWithoutFeedback
                        onPress={this.returnToEditor}
                    >
                        <View
                            style={{
                                height: 100,
                                backgroundColor: 'transparent'
                            }}
                        />
                    </TouchableWithoutFeedback>
                    <ScrollView
                        style={{
                            backgroundColor: '#E5E5E5'
                        }}
                    >
                        <View style={styles.insightViewCardTop}>
                            <Text style={styles.insightViewCardTopText}>Insights</Text>
                        </View>

                        <View style={styles.insightViewCard}>
                            <Image source={require('../img/hot_girl_01.jpg')} style={styles.insightImage}>
                                <View style={styles.insightViewImage}>
                                    <View style={styles.insightViewCardText}>
                                        <Text style={styles.insightViewCardTextTitle}>
                                            Những bước đầu tiên
                                        </Text>
                                        <Text style={styles.insightViewCardTextSubtitle}>
                                            Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed
                                    </Text>
                                    </View>
                                    <View style={styles.insightViewCardIconContainer}>
                                        <Text style={styles.insightViewCardIconText}>1 min</Text>
                                        <Icon name="ios-school" size={24} style={styles.insightViewCardIcon} />
                                    </View>
                                </View>
                            </Image>
                        </View>
                        <View style={styles.insightViewCard}>
                            <Image source={require('../img/hot_girl_02.jpg')} style={styles.insightImage}>
                                <View style={styles.insightViewImage}>
                                    <View style={styles.insightViewCardText}>
                                        <Text style={styles.insightViewCardTextTitle}>
                                            Những bước đầu tiên
                                        </Text>
                                        <Text style={styles.insightViewCardTextSubtitle}>
                                            Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed
                                    </Text>
                                    </View>
                                    <View style={styles.insightViewCardIconContainer}>
                                        <Text style={styles.insightViewCardIconText}>1 min</Text>
                                        <Icon name="ios-school" size={24} style={styles.insightViewCardIcon} />
                                    </View>
                                </View>
                            </Image>
                        </View>
                        <View style={styles.insightViewCard}>
                            <Image source={require('../img/hot_girl_03.jpg')} style={styles.insightImage}>
                                <View style={styles.insightViewImage}>
                                    <View style={styles.insightViewCardText}>
                                        <Text style={styles.insightViewCardTextTitle}>
                                            Những bước đầu tiên
                                        </Text>
                                        <Text style={styles.insightViewCardTextSubtitle}>
                                            Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed
                                    </Text>
                                    </View>
                                    <View style={styles.insightViewCardIconContainer}>
                                        <Text style={styles.insightViewCardIconText}>1 min</Text>
                                        <Icon name="ios-school" size={24} style={styles.insightViewCardIcon} />
                                    </View>
                                </View>
                            </Image>
                        </View>
                        <View style={styles.insightViewCard}>
                            <Image source={require('../img/hot_girl_04.jpg')} style={styles.insightImage}>
                                <View style={styles.insightViewImage}>
                                    <View style={styles.insightViewCardText}>
                                        <Text style={styles.insightViewCardTextTitle}>
                                            Những bước đầu tiên
                                        </Text>
                                        <Text style={styles.insightViewCardTextSubtitle}>
                                            Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed
                                    </Text>
                                    </View>
                                    <View style={styles.insightViewCardIconContainer}>
                                        <Text style={styles.insightViewCardIconText}>1 min</Text>
                                        <Icon name="ios-school" size={24} style={styles.insightViewCardIcon} />
                                    </View>
                                </View>
                            </Image>
                        </View>

                    </ScrollView>

                </Animated.View>

                {this.renderInsightButton()}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A'
    },
    /**
     * Navigation bar
     */
    navbar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    /**
     * Button Open
     */
    btnOpenContainer: {
        width: 100,
        height: 60,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnOpen: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    /**
     * Button Optional
     */
    btnOptionalContainer: {
        width: 100,
        height: 60,
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
    },
    btnOptionalIcon: {
        color: '#fff',
        fontSize: 30,
    },
    /**
     * Main content
     */
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight - 60 - 60 - 1
    },
    txtTapAnywhere: {
        color: '#FAFAFA',
        fontSize: 24
    },
    /**
     * Button Footer
     */
    btnFooterContainer: {
        width: screenWidth,
        height: 60,
        backgroundColor: '#4C4C4C',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
    },
    btnFooterIcon: {
        marginRight: 5,
        color: '#FEFEFE'
    },
    btnFooterText: {
        color: '#FEFEFE'
    },
    /**
     * inSight
     */
    insightView: {
        position: 'absolute',
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        bottom: 60,
    },
    insightViewCardTop: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    insightViewCardTopText: {
        fontSize: 24,
        color: '#4C4C4C',
        fontWeight: '500'
    },
    insightViewCard: {
        height: 240,
        marginBottom: 5,
    },
    /**
     * Image card
     */
    insightImage: {
        width: screenWidth,
        height: 240,
    },
    insightViewImage: {
        width: screenWidth,
        height: 240,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    insightViewCardText: {
        backgroundColor: 'transparent',
        width: (80 * (screenWidth - 15 - 15)) / 100
    },
    insightViewCardTextTitle: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
    },
    insightViewCardTextSubtitle: {
        fontSize: 16,
        color: '#fff'
    },
    insightViewCardIconContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: (20 * (screenWidth - 15 - 15)) / 100,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    insightViewCardIconText: {
        color: '#fefefe'
    },
    insightViewCardIcon: {
        marginLeft: 5,
        color: '#fefefe'
    }
};
export default Home;
