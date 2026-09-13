import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {discountedPrice.toFixed(2)}</Text>
          {hasDiscount && (
            <Text style={styles.oldPrice}>R$ {product.price.toFixed(2)}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    margin: theme.spacing.sm,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    backgroundColor: '#F9FAFB',
  },
  info: {
    padding: theme.spacing.sm,
  },
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textLight,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginRight: 8,
  },
  oldPrice: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textLight,
    textDecorationLine: 'line-through',
  },
});