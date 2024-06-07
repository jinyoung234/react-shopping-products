import { CartItem } from '@appTypes/product';
import Item from '@components/common/Item/Item';
import CartQuantityCounter from '@components/shoppingCart/CartQuantityCounter/CartQuantityCounter';
import useDeleteCartItem from '@hooks/cartItem/useDeleteCartItem';
import NotResultImage from '@assets/images/noResultImage.png';

import * as Styled from './CartList.styled';

interface CartListProps {
  cartItems: CartItem[];
}

const CartList = ({ cartItems }: CartListProps) => {
  const { deleteShoppingCartItem } = useDeleteCartItem();

  return (
    <>
      {cartItems.length === 0 ? (
        <Styled.NotShoppingCartWrapper>
          <img src={NotResultImage} alt="장바구니 목록이 없습니다." />
          <p>장바구니 목록을 추가해주세요.</p>
        </Styled.NotShoppingCartWrapper>
      ) : (
        cartItems.map((cartItem) => (
          <Item key={cartItem.id}>
            <Item.ItemImage url={cartItem.product.imageUrl} />
            <Item.ItemDescription name={cartItem.product.name} price={cartItem.product.price}>
              <CartQuantityCounter cartItem={cartItem} />
            </Item.ItemDescription>
            <Styled.DeleteButton onClick={() => deleteShoppingCartItem(cartItem.id)}>
              삭제
            </Styled.DeleteButton>
          </Item>
        ))
      )}
    </>
  );
};

export default CartList;
