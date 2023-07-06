import React from 'react'
import { Text, Modal, StyleSheet, View } from 'react-native'
import ButtonV1 from '../../../../BasicComponents/ButtonV1';
import InputV1 from '../../../../BasicComponents/InputV1';


type Props = {
    visible: boolean;
    setVisible: (value: boolean) => void;
    text: string;
    C: any;
};


const Feedback = ({ visible, setVisible, text, C }: Props) => {
    return (
        <Modal transparent={true} visible={visible} >
            <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080', justifyContent: 'space-around' }}>
                <View style={styles.modalView}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>{text}</Text>
                    <ButtonV1 C={C} f={-1} onPress={() => { setVisible(false); }} title="Close" ></ButtonV1>
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
        padding: 20,
        width: '60%',
        alignSelf: 'center',
        elevation: 5,
        rowGap: 10,
    },
});

export default Feedback;