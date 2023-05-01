

import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces'
import React, { createContext, CSSProperties } from 'react'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number,
    initialValues: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {


    const { counter, increaseBy, maxCount, isMaxCountReached, reset }
        = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}>

                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,

                        increaseBy,
                        reset
                    })
                }

            </div >

        </Provider >
    )
}