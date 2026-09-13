import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { fetchProductById } from '../services/api';
import { theme } from '../styles/theme';
import { Product, RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export default function ProductDetails({ route }: Props) {
  const { id } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadProduct = useCallback(async (): Promise<void> => {
    try {
      const data = await fetchProductById(id);
      setProduct(data);
    } catch (error) {
      console.error('Erro ao carregar produto:', error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {discountedPrice.toFixed(2)}</Text>
          <Text style={styles.oldPrice}>R$ {product.price.toFixed(2)}</Text>
        </View>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  price: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.danger,
    marginRight: theme.spacing.sm,
  },
  oldPrice: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textLight,
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textLight,
    lineHeight: 22,
  },
});