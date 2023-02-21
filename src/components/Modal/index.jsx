import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, CaretRight,Plus } from 'phosphor-react'
import * as S from './style'

export const Modal = ({ title, text,  category }) => {

  const url = `images/${(category)}.webp`

  return (
    <div>
      <Dialog.Root>
        <S.DialogTrigger type="button">
          <S.OpenButton><Plus size={20} color="#080808" /></S.OpenButton>
        </S.DialogTrigger>
        <Dialog.Portal>
          <S.Overlay />
          <S.DialogContent>
            <S.Title>{title}</S.Title>
            <S.Imagem src={url} alt="" />
            <S.Text>{text}</S.Text>
            <S.ContactMe>
              Entre em contato Comigo
              <CaretRight size={15} />
            </S.ContactMe>
            <S.DialogClose >
              <S.Button>
                <X size={20} color="#080808" />
              </S.Button>

            </S.DialogClose>
          </S.DialogContent>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  );
}
