import React, {Component} from "react";
import { StyleSheet, View, Image, Modal, TouchableHighlight, Text, Button, TouchableOpacity } from "react-native";

class CameraDialogo extends Component{

    static defaultProps = {
        isOpen: false
    }
    state = {
        currentImage: 'https://avatars.githubusercontent.com/u/93402520?v=4'
    }
    render() {
        return (
            <Modal 
                animationType="slide"
                transparent={false}
                visible={props.isOpen}
                >
                    <View>
                        <Image source={{uri: state.currentImage}} />
                        <TouchableOpacity>
                            <Text> X </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Button
                            title="Salvar"
                            onPress={this.save}
                            color="#0062ac"
                        />
                        <Button
                            title="Bater"
                            onPress={this.shot}
                            color="#0062ac"
                        />
                        
                        <Button
                            title="Colar"
                            onPress={this.getImageFromClipboard}
                            color="#0062ac"
                        />
                    </View>
                    <View>

                    </View>
            </Modal>
        );
    }
}

export default CameraDialogo;