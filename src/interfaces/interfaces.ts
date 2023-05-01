import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductCardProps } from "../components/ProductCard";

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: number;
    product: Product;
    maxCount?: number
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}

export interface OnChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product

    increaseBy: (value: number) => void
    reset: () => void
}