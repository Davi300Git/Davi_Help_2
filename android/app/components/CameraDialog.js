import React, {Component} from "react";
import { StyleSheet, View, Image, Modal, Text, Button, TouchableOpacity } from "react-native";

class CameraDialog extends Component{

    static defaultProps = {
        isOpen: false,
        onClose: () => {}
    }
    state = {
        currentImage: 'https://avatars.githubusercontent.com/u/93402520?v=4'
    }

    getImageFromClipboard = () => {

    }

    save = () => {
        this.props.onClose();
    }

    shot = () => {

    }
    render() {
        const {props, state} = this;
        return (
            <Modal 
                animationType="slide"
                transparent={false}
                visible={props.isOpen}
                >
                    <View style={style.modalView}>
                        <View style={style.previewContainer}>
                            <Image source={{uri: state.currentImage}} style={style.preview} />
                            <TouchableOpacity onPress={props.onClose}>
                                <Text style="style.closeButton"> X </Text>
                            </TouchableOpacity>
                        </View>
                        <View>

                        </View>
                        <View style={style.buttonContainer}>
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
                    </View>
            </Modal>
        );
    }
}


const style = StyleSheet.create({
    modalView: {
        flex: 1
    },
    previewContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    preview: {
        width:100,
        height: 75,
        borderWidth: 2,
        borderColor: 'black'
    },
    closeButton: {
        padding: 15,
        backgroundColor: 'red',
        fontSize: 20,
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        backgroundColor: 'gray',
    }
})

export default CameraDialog;