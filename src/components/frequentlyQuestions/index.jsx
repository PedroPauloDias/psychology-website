import { Container, Title, Accordion, createStyles, } from '@mantine/core';
import * as S from './style'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 550,
    width: " 100%",
    backgroundColor: '#47625d',
    borderRadius: "10px",
  },

  title: {
    marginBottom: "40px",
    marginTop: "50px",
    paddingTop: "30px",
    fontFamily: "Cinzel",
    fontSize: "32px",
    color: "#fff",


  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    color: "#000",
    border: ` ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },
}));



export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="md" className={classes.wrapper}>
      <Title className={classes.title}>

        Dúvidas frequentes

      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="privacidade">
          <Accordion.Control>A  privacidade é assegurada ?</Accordion.Control>
          <Accordion.Panel>

            <S.Texte>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi, eum dolore. A, corporis impedit.
            </S.Texte>

          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="tempo">
          <Accordion.Control>Quanto tempo preciso fazer terapia?</Accordion.Control>
          <Accordion.Panel>
            <S.Texte>
              É complicado definir o tempo de duração da terapia sem ter conhecimento do quadro clínico dos pacientes.
              Duas pessoas com o diagnóstico da depressão podem ter tratamentos diferentes por responderem a ferramentas e técnicas distintas. Além disso, podem ter crenças diferentes sobre a sua capacidade de combater a depressão, o que automaticamente influencia o tempo de duração do tratamento.
            </S.Texte>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="duvidas">
          <Accordion.Control>Como saber se a terapia está dando certo ? </Accordion.Control>
          <Accordion.Panel>
            <S.Texte>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi, eum dolore. A, corporis impedit.
            </S.Texte></Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="medicacao">
          <Accordion.Control>E se eu precisar de medicação ?</Accordion.Control>
          <Accordion.Panel>
            <S.Texte>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi, eum dolore. A, corporis impedit.
            </S.Texte>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="duvidas-melhora">
          <Accordion.Control>O que devo fazer se não notar uma melhora ?</Accordion.Control>
          <Accordion.Panel>
            <S.Texte>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi, eum dolore. A, corporis impedit.
            </S.Texte>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}