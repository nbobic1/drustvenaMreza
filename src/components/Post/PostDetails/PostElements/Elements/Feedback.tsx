import React from 'react'
import { Text, Modal, StyleSheet, View } from 'react-native'
import ButtonV1 from '../../../../BasicComponents/ButtonV1';
import InputV1 from '../../../../BasicComponents/InputV1';


type Props = {
    visible: boolean;
    setVisible: (value: boolean) => void;
    text: string;
};


const Feedback = ({ visible, setVisible, text }: Props) => {
    return (
        <Modal transparent={true} visible={visible} >
            <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080' }}>
                <View style={styles.modalView}>
                    <Text>{text}</Text>
                    <ButtonV1 onPress={() => { setVisible(false); }} title="Close" ></ButtonV1>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    root: {
    },
    modalView: {//popup
        backgroundColor: '#fff',
        borderRadius: 10,
        position: 'absolute',
        padding: 20,
        bottom: 100,
        alignSelf: 'center',
        elevation: 5,
        rowGap: 10,
    },
});

export default Feedback;