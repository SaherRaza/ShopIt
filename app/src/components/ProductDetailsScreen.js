import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    useWindowDimensions,
    ScrollView, 
    Pressable,
    TouchableOpacity
  } from "react-native";
  import React from "react";
  import {useDispatch, useSelector} from "react-redux";
  import { addtocart } from "../context/actions/cartAction";
  
  const ProductDetailsScreen = ({route}) => {
  
      // Access the item data from the route.params
  const { products } = route.params;
  const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
  
    const addItemToCart = (item) => {
      dispatch(addtocart(item)); // Dispatch the addToCart action with the selected item
    };
    
    const { width } = useWindowDimensions();

    // Check if the product is already in the cart
  const isProductInCart = cartItems.some((item) => item.data._id === products._id);

  
    return (
      <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={products.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
        />
  
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{products.name}</Text>
  
          <Text style={styles.price}>${products.price}</Text>
  
          <Text style={styles.description}>{products.description}</Text>
        </View>
        </ScrollView>
  
         <TouchableOpacity
        onPress={() => addItemToCart(products)}
        style={styles.button}
        disabled={isProductInCart} // Disable the button if the product is already in the cart
      >
        <Text style={styles.buttonText}>
          {isProductInCart ? "Added" : "Add to Cart"}
        </Text>
      </TouchableOpacity>
      </View>
    );
  };
  
  export default ProductDetailsScreen;
  
  const styles = StyleSheet.create({
      title:{
          fontSize:34,
          fontWeight:"500",
          marginVertical:10
      },
      price:{
          fontWeight:"500",
          fontSize:16,
          letterSpacing:1.5
      },
      description:{
          marginVertical:10,
          fontSize:18,
          lineHeight:30,
          fontWeight:"300"
      },
      button:{
          position:"absolute",
          bottom:30,
          backgroundColor:"black",
          alignSelf:"center",
          width:"90%",
          padding:20,
          borderRadius:100,
          justifyContent:"center",
          alignItems:"center"
      },
      buttonText:{
          color:"white",
          fontWeight:"500",
          fontSize:16
      }
  });
  