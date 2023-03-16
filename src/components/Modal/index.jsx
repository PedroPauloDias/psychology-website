import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/router';
import { X, CaretRight, Plus } from 'phosphor-react'
import * as S from './style'

export const Modal = ({ title, text, category }) => {

  const { push } = useRouter()
  const url = `images/${(category)}.webp`
  const routes = ( category === 'gratis' ? '' : category)
  return (
    <div>
      <Dialog.Root>
        <S.DialogTrigger type="button">
          <S.OpenButton><Plus size={12} color="#080808" /></S.OpenButton>
        </S.DialogTrigger >
        <Dialog.Portal >
          <S.Overlay />
          <S.DialogContent>
            <div   >
              <S.Title  >{title}</S.Title >
              <S.ContainerCard >
                <S.Imagem src={url} alt="" />
                <S.Text  >{text}</S.Text>
              </S.ContainerCard>
              <S.ContactMe
                onClick={() => push(`/atendimento/${routes}/`)}
  
              >
                Entre em contato Comigo
                <CaretRight size={15} />
              </S.ContactMe>
              <S.DialogClose >
                <S.Button>
                  <X size={20} color="#080808" />
                </S.Button>

              </S.DialogClose>
            </div>
          </S.DialogContent>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  );
}
