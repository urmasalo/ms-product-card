# DO-Product-Card

this is a deploy test using NPM

### Mauricio Salazar

## Example

```
import { ProductImage, ProductTitle, ProductButtons } from 'ms-product-card'

```

```
    <ProductCard
        product={product}
        initialValues={{
            count: 4,
            maxCount: 10
        }}
    >

        {
            ({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
                <>
                    <ProductImage   />
                    <ProductTitle   />
                    <ProductButtons />
                </>
            )
        }

    </ProductCard>
```
