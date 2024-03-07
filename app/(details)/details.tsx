import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Image, ListRenderItem, SectionList, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useNavigation } from 'expo-router'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import ParallaxScrollView from '@/components/ParallaxScrollView'

import useBasketStore from '@/context/basketStore'

import { detailsStyles as styles } from '@/app/(details)/detailsStyle'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

import fetchProductsFromSupabase, { Product } from '@/hooks/useFetchProduct'
import useShopStore from '@/context/shopsStore'
import { getCategoryNameById } from '@/util/getCategoryNameById'

interface SectionData {
    title: number;
    data: Product[];
}

const Details = () => {
    const navigation = useNavigation()
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const scrollRef = useRef<ScrollView>(null)
    const itemsRef = useRef<View[]>([])
    const { items, total } = useBasketStore()
    const [products, setProducts] = useState<Product[]>([]);
    const { shops, fetchShops } = useShopStore();

    
    const opacity = useSharedValue(0)
    const animatedStyles = useAnimatedStyle(() => ({
        opacity: opacity.value
    }))

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const fetchedProducts = await fetchProductsFromSupabase();
            setProducts(fetchedProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchShops()
        fetchProducts();
      }, []);


      const DATA: SectionData[] = products.reduce((acc: SectionData[], item: Product, index: number) => {
        const existingSectionIndex = acc.findIndex(section => section.title === item.categoryId);
        
        if (existingSectionIndex !== -1) {
            acc[existingSectionIndex].data.push(item);
        } else {
            acc.push({
                title: item.categoryId,
                data: [item],
            });
        }
    
        return acc;
    }, []);

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

    const renderItem: ListRenderItem<any> = ({ item }) => (
        <Link href={{ pathname: '/(modal)/(product)/Product', params: { id: item.id } }} asChild>
            <TouchableOpacity style={styles.productDetail}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemInfo}>{item.info}</Text>
                    <Text style={styles.itemName}>{item.price} €</Text>
                </View>
                <View>
                    <Image source={{ uri: item.img }} style={styles.displayImg} />
                </View>
            </TouchableOpacity>
        </Link>
    ) 

    const selectCategory = (index: number) => {
        const selectedButton = itemsRef.current[index]
        setActiveIndex(index)

        selectedButton.measure((x: number) => {
            scrollRef.current?.scrollTo({
                x: x - 16,
                y: 0,
                animated: true,
            })
        })
    }

    const onScroll = (event: any) => {
        const y = event.nativeEvent.contentOffset.y
        if (y > 350) {
            opacity.value = withTiming(1)
        } else {
            opacity.value = withTiming(0)
        }
    }

    const shop = shops[0]


    return (
        <>
            <ParallaxScrollView 
                scrollEvent={onScroll}
                style={{ flex: 1 }}
                backgroundColor={'#fff'}
                parallaxHeaderHeight={250}
                stickyHeaderHeight={100}
                renderBackground={() => <Image source={{ uri: shop.img }} style={{ height: 300, width: '100%'}} />}
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
                        renderSectionHeader={({ section: {title} }) => 
                            <Text style={styles.sectionHeader}>{getCategoryNameById(title)}</Text>
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

            <Animated.View style={[styles.stickySegments, animatedStyles]}>
                    <View style={styles.segmentsShadow}>
                        <ScrollView 
                            ref={scrollRef}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.segmentScrollView}
                        >
                        {products.map((item, index) => (
                            <TouchableOpacity
                            key={index}
                            style={activeIndex === index ? styles.segmentsButtonActive : styles.segmentsButtonInactive}
                            onPress={() => selectCategory(index)}
                            >
                            <View ref={ref => itemsRef.current[index] = ref!}>
                                <Text style={activeIndex === index ? styles.segmentsTextActive : styles.segmentsTextInactive}>
                                    {getCategoryNameById(item.categoryId)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        ))}
                        </ScrollView>
                    </View>
            </Animated.View>

            {
                items > 0 && (
                    <View style={styles.footer}>
                        <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#fff' }}>
                            <Link href={'/basket'} asChild>
                                <TouchableOpacity style={styles.fullButton}>
                                    <Text style={styles.basket}>{items}</Text>
                                    <Text style={styles.basketText}>View Basket</Text>
                                    <Text style={styles.basketText}>{total}€</Text>
                                </TouchableOpacity>
                            </Link>
                        </SafeAreaView>
                    </View>
                )
            }
        </>
    )
}

export default Details;