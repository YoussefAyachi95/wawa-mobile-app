import { View, Text, StyleSheet } from 'react-native'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const [activeToggle, setActiveToggle] = useState('delivery')
    const snapPoints = useMemo(() => ['50%'], [])
    const { dismiss } = useBottomSheetModal()
    const renderBackDrop = useCallback((props: any) => 
        <BottomSheetBackdrop {...props} appearsOnIndex={0} 
        disappearsOnIndex={-1} />, 
    [])

    const handleToggle = (toggle: string) => {
        setActiveToggle(toggle)
    }

    return (
        <BottomSheetModal 
         ref={ref}
         overDragResistanceFactor={0} 
         snapPoints={snapPoints}
         backdropComponent={renderBackDrop}
         backgroundStyle={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}
         handleIndicatorStyle={{ display: 'none' }}
         >
            <View style={styles.contentContainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity style={[ styles.toggleButton,
                        activeToggle === 'delivery' ? styles.toggleActive : styles.toggleInactive ]}
                        onPress={() => handleToggle('delivery')}>
                        <Text style={[ styles.toggleButtonText,
                            activeToggle === 'delivery' ? styles.activeText : styles.inactiveText ]}>
                            Delivery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.toggleButton,
                            activeToggle === 'pickup' ? styles.toggleActive : styles.toggleInactive ]}
                            onPress={() => handleToggle('pickup')}>
                        <Text style={[styles.toggleButtonText,
                            activeToggle === 'pickup' ? styles.activeText : styles.inactiveText ]}>
                            Pickup
                    </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.subheader}>Your Location</Text>
                <Link href={'/'} asChild>
                    <TouchableOpacity>
                       <View style={styles.item}>
                            <Ionicons name='location-outline' size={20} colors={Colors.medium} />
                            <Text style={{ flex: 1 }}>Current Location</Text>
                            <Ionicons name='chevron-forward' size={20} colors={Colors.purple} />
                        </View> 
                    </TouchableOpacity>
                </Link>

                <Text style={styles.subheader}>Arrival Time</Text>
                <TouchableOpacity>
                       <View style={styles.item}>
                            <Ionicons name='stopwatch-outline' size={20} colors={Colors.medium} />
                            <Text style={{ flex: 1 }}>Now</Text>
                            <Ionicons name='chevron-forward' size={20} colors={Colors.purple} />
                        </View> 
                </TouchableOpacity>

                <TouchableOpacity onPress={() => dismiss()} style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </BottomSheetModal>
    )
})

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 32,
    },
    toggleButton: {
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30,
    },
    toggleActive: {
        backgroundColor: Colors.purple,
    },
    toggleInactive: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.purple,
    },
    toggleButtonText: {
        fontWeight: 'bold',
    },
    activeText: {
        color: '#fff',
    },
    inactiveText: {
        color: Colors.purple,
    },
    button: {
        backgroundColor: Colors.purple,
        padding: 16,
        margin: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    subheader: {
        fontSize:16,
        fontWeight: '600',
        margin: 16,
    },
    item: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderColor: Colors.grey,
        borderWidth: 1,
    },
})

export default BottomSheet