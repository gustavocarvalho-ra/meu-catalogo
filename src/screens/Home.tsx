import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { fetchProductsByCategory } from '../services/api';
import ProductCard from '../components/ProductCard';
import { theme } from '../styles/theme';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Product, ProductCategoryTab, MainTabParamList, RootStackParamList } from '../types';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Inicio'>,
  NativeStackScreenProps<RootStackParamList>
>;

const MASCULINO: string[] = ['mens-shirts', 'mens-shoes', 'mens-watches'];
const FEMININO: string[] = [
  'womens-bags',
  'womens-dresses',
  'womens-jewellery',
  'womens-shoes',
  'womens-watches',
];

export default function Home({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<ProductCategoryTab>('masculino');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const categories = activeTab === 'masculino' ? MASCULINO : FEMININO;
      const promises = categories.map((cat) => fetchProductsByCategory(cat));
      const results = await Promise.all(promises);
      const allProducts: Product[] = results.flat();
      setProducts(allProducts);
    } catch (err) {
      setError('Erro ao carregar produtos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'masculino' && styles.activeTabButton]}
          onPress={() => setActiveTab('masculino')}
        >
          <Text style={[styles.tab, activeTab === 'masculino' && styles.activeTab]}>
            Produtos Masculinos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'feminino' && styles.activeTabButton]}
          onPress={() => setActiveTab('feminino')}
        >
          <Text style={[styles.tab, activeTab === 'feminino' && styles.activeTab]}>
            Produtos Femininos
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetails', { id: item.id })
            }
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: theme.colors.danger,
    fontSize: theme.fontSize.md,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  tab: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textLight,
    fontWeight: '500',
  },
  activeTab: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  list: {
    padding: theme.spacing.sm,
  },
});