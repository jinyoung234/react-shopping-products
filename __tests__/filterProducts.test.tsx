import { renderHook, waitFor } from '@testing-library/react';

import { PRODUCT_CATEGORY_MAP } from '../src/components/product/ProductDropdown/ProductDropdown.constant';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useProducts from '../src/hooks/product/useProducts/useProducts';
import React, { act } from 'react';

const queryClient = new QueryClient();

const QueryClientProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('상품 목록 카테고리 테스트', () => {
  it.each(Object.keys(PRODUCT_CATEGORY_MAP))(
    '카테고리를 "%s"로 불러올 수 있다.',
    async (category: string) => {
      // when
      const { result } = renderHook(() => useProducts(), {
        wrapper: QueryClientProviderWrapper,
      });

      act(() => {
        result.current.onSelectOption('category', category);
      });

      await waitFor(() => {
        const isEverySameCategory = result.current.products.every(
          (product) => product.category === category
        );

        // then
        expect(isEverySameCategory).toBe(true);
      });
    }
  );
});
