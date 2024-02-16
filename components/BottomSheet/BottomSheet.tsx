import { View, Text } from 'react-native'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'

import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { bottomSheetStyles as styles } from '@/components/BottomSheet/BottomSheetStyles';

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
                <Link href={'/(modal)/(location)/LocationSearch'} asChild>
                    <TouchableOpacity onPress={() => dismiss()}>
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


export default BottomSheet