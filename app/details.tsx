import ParallaxScrollView from '@/components/ParallaxScrollView'
import Colors from '@/constants/Colors'
import React, { useLayoutEffect } from 'react'
import { shop } from '@/assets/data/shop'
import { Image, ListRenderItem, SectionList, StyleSheet, Text, View } from 'react-native'
import { Link, useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

const Details = () => {
    const navigation = useNavigation()

    const DATA = shop.products.map((item, index) => ({
        title: item.category,
        data: item.items,
        index,
    }))

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTingColor: Colors.purple,
            headerLeft: () => 
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundedButton}>
                    <Ionicons name="arrow-back" size={24} color={Colors.purple} />
                </TouchableOpacity>,
            headerRight: () => 
                <View style={styles.bar}>
                    <TouchableOpacity style={styles.roundedButton}>
                        <Ionicons name="share-outline" size={24} color={Colors.purple} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.roundedButton}>
                        <Ionicons name="search-outline" size={24} color={Colors.purple} />
                    </TouchableOpacity>
                </View>,
        })
    }, [])

    const renderItem: ListRenderItem<any> = ({ item, index }) => (
        <Link href={'/'} asChild>
            <TouchableOpacity style={styles.productDetail}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemInfo}>{item.info}</Text>
                    <Text style={styles.itemName}>{item.price} €</Text>
                </View>
                <View>
                    <Image source={item.img} style={styles.displayImg} />
                </View>
            </TouchableOpacity>
        </Link>
    ) 

    return (
        <ParallaxScrollView 
            style={{ flex: 1 }}
            backgroundColor={'#fff'}
            parallaxHeaderHeight={250}
            stickyHeaderHeight={100}
            renderBackground={() => <Image source={shop.img} style={{ height: 300, width: '100%'}} />}
            contentBackgroundColor={Colors.lightGrey}
            renderStickyHeader={() => (
                <View key='sticky-header' style={styles.stickySection}>
                    <Text style={styles.stickySectionText}>
                        {shop.name}
                    </Text>
                </View>
            )}
        >
            <View style={styles.detailsContainer}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <Text style={styles.shopDescription}>
                    {shop.delivery} · {shop.tags.map((tag, index) => (
                        `${tag}${index < shop.tags.length - 1 ? ' · ' : ''}`
                    ))}
                </Text>
                <Text style={styles.shopAbout}>{shop.about}</Text>
                <SectionList 
                    contentContainerStyle={{ paddingBottom: 40 }}
                    keyExtractor={(item, index) => `${item.id + index}`}
                    scrollEnabled={false}
                    sections={DATA} 
                    renderItem={renderItem} 
                    renderSectionHeader={({ section: {title, index}}) => 
                        <Text style={styles.sectionHeader}>{title}</Text>
                    }
                    SectionSeparatorComponent={() => 
                        <View style={{ height: 1, backgroundColor: Colors.grey}} />
                    }
                    ItemSeparatorComponent={() => 
                        <View style={{ marginHorizontal: 16, height: 1, backgroundColor: Colors.grey}} />
                    }
                />
            </View>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: Colors.lightGrey,
    },
    stickySection: {
        backgroundColor: '#fff',
        marginLeft: 65,
        height: 85,
        justifyContent: 'flex-end',
    },
    stickySectionText: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    },
    roundedButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    shopName: {
        fontSize: 30,
        margin: 16,
    },
    shopDescription: {
        fontSize: 16,
        margin: 16,
        lineHeight: 22,
        color: Colors.medium,
    },
    shopAbout: {
        fontSize: 16,
        margin: 16,
        lineHeight: 22,
        
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        margin: 16,
    },
    productDetail: {
        backgroundColor: '#fff',
        padding: 16,
        flexDirection: 'row', 
    },
    displayImg: {
        height: 80,
        width: 80,
        borderRadius: 4,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemInfo: {
        fontSize: 14,
        colors: Colors.mediumDark,
        paddingVertical: 4,
    },
})

export default Details;