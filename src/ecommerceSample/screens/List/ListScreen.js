import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Button, Badge } from "react-native-elements";
import cartContext from "../../store/CartContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ListScreen = () => {
  const { cart, setCart } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())

      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addCart = (item) => {
    var cartItem = cart.find((q) => q.id == item.id);
    if (cartItem == undefined) {
      item.quantity = 1;
      setCart([...cart, item]);
      setTotalPrice(totalPrice + item.price);
    } else {
      cartItem.quantity = cartItem.quantity + 1;
      setCart([...cart]);
      setTotalPrice(totalPrice + item.price);
    }
  };

  const emptyCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View style={styles.product_containerimage}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.product_contoiner_item_image}
            ></Image>
          </View>
          <View style={{ width: 250, paddingRight: 10 }}>
            <Text style={styles.product_title}>{item.title}</Text>
            <Text style={{ justifyContent: "space-between", fontSize: 18 }}>
              {item.price} TL
            </Text>
          </View>
        </View>

        <View style={styles.cart_icon_badge}>
          <MaterialCommunityIcons
            style={{ left: 100 }}
            name="webcam"
            color="#E82223"
            size={25}
          />

          <Button
            title="Sepete Ekle"
            containerStyle={{
              width: 300,
              marginRight: 20,
            }}
            type="clear"
            titleStyle={{ color: "#E82223" }}
            onPress={() => addCart(item)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.product_container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.product_total_title}>
        <Text style={styles.product_total_title_text}>Ürünlerin Toplamı:</Text>
        <MaterialCommunityIcons
          style={{}}
          name="cart"
          color="#2189D9"
          size={40}
        />
        <Badge
          status="error"
          value={cart.length}
          containerStyle={{ position: "absolute", top: 35, right: 117 }}
        />
      </View>
      <View style={styles.product_total_detail}>
        <Text style={styles.product_total_detail_text} nativeID="1">
          Toplam: {totalPrice.toFixed(2)}TL
        </Text>
        <Text style={styles.product_total_detail_text}>
          Vergiler + Kargo: 21,45 TL
        </Text>

        <View style={styles.product_total_price}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
            Genel Toplam:{totalPrice ? (totalPrice + 21.45).toFixed(2) : 0}TL
          </Text>
        </View>
        <View style={styles.cart_delete}>
          <MaterialCommunityIcons
            style={{ left: 100 }}
            name="delete"
            color="#E82223"
            size={25}
          />
          <Button
            title="Sepeti Boşalt"
            containerStyle={{
              width: 300,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            type="clear"
            titleStyle={{ color: "#E82223" }}
            onPress={() => emptyCart()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
  },
  product_container: {
    flex: 5,
    marginTop: 10,
    marginHorizontal: 24,
  },
  product_containerimage: {
    flexDirection: "column",
    justifyContent: "space-between",
    shadowRadius: 6,
    elevation: 8,
    shadowOpacity: 0.7,
    backgroundColor: "white",

    borderRadius: 12,
    marginVertical: 5,
  },
  product_title: {
    justifyContent: "space-between",
    fontWeight: "600",
    color: "black",
    fontFamily: "Nunito Sans",
    fontSize: 20,
  },
  cart_icon_badge: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  product_contoiner_item_image: {
    width: 72,
    height: 75.4,
    borderRadius: 12,
    marginRight: 5,
  },
  product_total_title: {
    flex: 1,
    marginHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 16,
  },
  product_total_title_text: {
    fontSize: 24,
    color: "black",
    fontFamily: "Nunito Sans",
  },
  product_total_detail: {
    flex: 2,
    marginHorizontal: 24,
  },
  product_total_detail_text: {
    lineHeight: 28,
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 0.4,
    color: "#000",
  },
  product_total_price: {
    flex: 2,
    marginTop: 16,
  },
  product_total_price_text: {
    lineHeight: 37,
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 0.4,
    color: "#000",
  },
  cart_delete: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ListScreen;
