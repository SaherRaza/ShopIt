import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { removeFromFavorites } from "../context/actions/favoriteActions";


const FavoriteItem = () => {
  const navigation = useNavigation();
  const favoritesItems = useSelector((state) => state.favoritesItems.favorites);

  return (
    <SafeAreaView style={styles.container}>
      {favoritesItems.length === 0 || !favoritesItems ? (
        <View style={styles.container}></View>
      ) : (
        <View style={styles.flatListContainer}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={favoritesItems}
            keyExtractor={(item) => item.data.id}
            renderItem={({ item }) => <CartItemCard item={item.data} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEFEA",
  },
  flatListContainer: {
    flex: 1,
  },
  cartItemContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly", 
    alignItems:"center",
    margin:10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding:10
  },
  itemTextContainer: {
    flex: 1,
    gap:5
  },
  removeButton: {
    marginRight: 15,
  },
});

export default FavoriteItem;


export const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    console.log("Swiped from right:------------- ", id);
    dispatch(removeFromFavorites(id));
  };

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item?.image }}
          resizeMode="contain"
          style={{ width: 58, height: 58 }} // Adjust dimensions as needed
        />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={{fontSize:14, fontWeight:"500"}}>{item?.name}</Text>
        <Text style={{fontSize:14, fontWeight:"500"}}>{item?.price}$</Text>
      </View>
      <TouchableOpacity
        onPress={() => removeItem(item.id)}
        style={styles.removeButton}
      >
        <Text style={{fontWeight:"500", color:"red"}}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};
