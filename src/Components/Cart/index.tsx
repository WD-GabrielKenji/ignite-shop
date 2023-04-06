import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { CartButton } from '../CartButton'

import { X } from 'phosphor-react'
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from './styles'

export function Cart() {
  function handleRemoveCartItem() {
    console.log('Remover Produto')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Sacola de compras</h2>

          <section>
            {/* <p>Parece que seu carrinho está vazio : (</p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  src="https://s3-alpha-sig.figma.com/img/fd95/f0b2/85d51884517403ad7e3fc5c12726f99a?Expires=1681689600&Signature=GhtfDU74AsBi9Fu1kTpp1kc1cwr0fSEJ3WZQYtWdS1oNnm1F~P0GOgFvv3E7yQ-QZgBnckokIGeMuVHeSKRfU5BRHMXySUBei~Gyu037TQUlKjJyBPaeBw7M5cqdkaDgrpKlM5CtHEG5nmaQay~uXGucQb0HydkRJMm6uQIWBpO8No7lytB4emIFCtHYrqS1uGzJaabCuU36ctXStUmgGG6fDBg21L4Up58f6zFUUKbNCv4OVOEQD6JZicJIhdNISQBydNV2aQLaKQH8cp~9eNzZJbD8Zpr6PLuQADQWd8Tvv6U5K076Vszx2SNn0h0H6mUkwpv6us92DuxuUvWm5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  width={100}
                  height={93}
                  alt=""
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Camiseta Beyond The Limits</p>
                <strong>R$ 79,90</strong>
                <button onClick={handleRemoveCartItem}>Remover</button>
              </CartProductDetails>
            </CartProduct>

            <CartProduct>
              <CartProductImage>
                <Image
                  src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1681689600&Signature=Lq74VioUGEXKEbmymfODGaexfxVfZkfESQQHLaKD5AAIcWcB-itehoGLO0EWHgkBdYYwFFQ2ZPr0r4jBEQJykG7n~903G1T-pzacinoX~VbV-2bshq7Acgxvyhr-6tn2nspLr-d8gdD1fOAFhygHWlDVsB-URGoG3~5wEwB7S4jDfGt-N9ziYbs8yJhs-5Wsy9O9u3zLd9HBDe6IqgQ8URN7CXnvkkwupKXKjE9eqMH6QXqOynFdE3w4ZVkBSVuUIG0MYVyvrUb5uyFLp-cFMimAiu9rVZwwNIS71GSLTYCdCBSGAbfy093ugR2M6q-TBeLP2IaTCdm5lCcgDL~WOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  width={100}
                  height={93}
                  alt=""
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Camiseta Explorer</p>
                <strong>R$ 62,90</strong>
                <button onClick={handleRemoveCartItem}>Remover</button>
              </CartProductDetails>
            </CartProduct>

            <CartProduct>
              <CartProductImage>
                <Image
                  src="https://s3-alpha-sig.figma.com/img/389f/ecc9/dfd930c7acf7b3b2e05b363813fe1f6b?Expires=1681689600&Signature=RWpILFkQV7kdmj340uK1IO7tepdXwnEfLu-xdLTv52ZJEylVErtnXyKubskmntVUB9~bdwkoKLE8UIKQiKJ65aPeY0EbSQJefd93Frm8vH13PhgaHVDtOdgsDMEfLhe9OIWy1tQLQedCuHEDHmdil-LUg7MUoC-yl~BrCGd~TU~oNX6DuaJSzaA3nrqzRyVP4kXUEGljdAr3tfvTjFT~qBz9EwnSTushwHRn2YNDC1zTh~7aZwtwk0ce0OG6HcVY7TKznhKwbx0MPRcUykpw4-aFJozWSgraQyyDNuDrLsM8bozzVAZScKgOiEoiPvAq2~UyDmZKqg~ZhIlreVYF3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  width={100}
                  height={93}
                  alt=""
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Camiseta Ignite Lab | ReactJS</p>
                <strong>R$ 89,90</strong>
                <button onClick={handleRemoveCartItem}>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>3</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 270,90</p>
              </div>
            </FinalizationDetails>

            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
