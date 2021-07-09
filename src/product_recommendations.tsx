import { Div, Paragraph, ProductRow, useShowroomState } from '@archon/showroom-extensions'
import * as React from 'react'

function recommendProducts(productIdsInCart: string[], allProductIds: string[]): string[] {
  // dummy
  // simply return the products no in cart yet
  return allProductIds.filter(x => productIdsInCart.indexOf(x) < 0)
}

const ProductRecommendations: React.FunctionComponent = props => {
  const allProducts = useShowroomState(state => state.products)
  const { items: cartItems } = useShowroomState(state => state.shoppingCart)

  const recommended = React.useMemo(() => {
    return recommendProducts(cartItems.map(x => x.productId), Object.keys(allProducts))
  }, [cartItems, allProducts])


  const titleStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: '#0e6145',
    padding: 0,
    margin: '16px 0 8px 0',
  }

  const delimiterStyle: React.CSSProperties = {
    width: '100%',
    height: '2px',
    backgroundColor: '#0e6145',
    marginBottom: '16px',
  }

  return (
    <Div>
      <Paragraph style={titleStyle}>Others also tend to purchase these</Paragraph>
      <Div style={delimiterStyle} />
      
      {recommended.map(productId => <ProductRow productId={productId} />)}
    </Div>
  )
}

export default ProductRecommendations
