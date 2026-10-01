import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { Spacing } from '@/constants/theme';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <Pressable
      onPress={() => onSelect?.(product)}
      style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}>
      <ThemedView type="backgroundElement" style={styles.card}>
        <View style={styles.headerRow}>
          <ThemedText type="smallBold">{product.name}</ThemedText>
          <ThemedText type="smallBold" style={styles.price}>
            ${product.price.toFixed(2)}
          </ThemedText>
        </View>

        <ThemedText type="small" themeColor="textSecondary" style={styles.desc}>
          {product.description}
        </ThemedText>

        <View style={styles.footerRow}>
          <ThemedView style={styles.categoryBadge}>
            <ThemedText type="code" style={styles.categoryText}>
              {product.category}
            </ThemedText>
          </ThemedView>

          <ThemedText
            type="small"
            style={[styles.stockStatus, { color: product.inStock ? '#10b981' : '#ef4444' }]}>
            {product.inStock ? '● In Stock' : '○ Out of Stock'}
          </ThemedText>
        </View>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: Spacing.two,
  },
  pressed: {
    opacity: 0.8,
  },
  card: {
    padding: Spacing.four,
    borderRadius: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#0d74ce',
  },
  desc: {
    lineHeight: 18,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  categoryBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Spacing.one,
  },
  categoryText: {
    fontSize: 11,
    textTransform: 'uppercase',
  },
  stockStatus: {
    fontWeight: '600',
  },
});
