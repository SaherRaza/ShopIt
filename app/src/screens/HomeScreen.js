import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  Keyboard
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import products from "../data/products";
import {
  addToFavorites,
  removeFromFavorites,
} from "../context/actions/favoriteActions";
import { Ionicons } from '@expo/vector-icons';
import { setProducts, setProductsNull } from "../context/actions/productsAction";

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const favoritesItems = useSelector((state) => state.favoritesItems);
  const products = useSelector((state) => state.products.products);

  const [filteredProducts, setFilteredProducts] = useState(products); 

  useEffect(() => {
      // Convert searchText to lowercase
  const searchTextLowerCase = searchText.toLowerCase();

  // Filter products case-insensitively
  const newFilteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTextLowerCase)
  );
    setFilteredProducts(newFilteredProducts);
    // Hide the keyboard when searchText becomes empty
    if (searchText === '') {
      Keyboard.dismiss();
    }
  }, [searchText, products]);
 
  const toggleFavorite = (item) => {
    if (
      favoritesItems?.favorites?.filter(
        (favItem) => favItem?.data?.id === item?.id
      )?.length > 0
    ) {
      dispatch(removeFromFavorites(item?.id)); // Remove from favorites
    } else {
      dispatch(addToFavorites({ data: item })); // Add to favorites
      console.log("item--", item);
    }
  };



  return (
    <>
      <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
      <TextInput
         style={styles.textInput}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        placeholder="Search Products..."
      />
    </View>
    <FlatList
      data={filteredProducts}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable 
       onPress={()=>{
        navigation.navigate("Product Details", { products: item });
         }} 
        style={styles.itemContainer}>
          <View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 10,
                backgroundColor: "#EAEFEA",
              }}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                {item.price}$
              </Text>

              <TouchableOpacity
                onPress={() => toggleFavorite(item)}
              >
                {favoritesItems?.favorites?.filter(
                  (favItem) => favItem?.data?.id === item?.id
                )?.length > 0 ? (
                  <AntDesign name="heart" size={16} color={"red"} />
                ) : (
                  <AntDesign name="heart" size={16} color={"#fbfbfb"} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      )}
    />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  textInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    margin:10,
    backgroundColor:"#EAEFEA"
  },
  searchIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    height: 25,
    paddingLeft: 8,
  },
});
