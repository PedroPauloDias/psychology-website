import { Container, Title, Accordion, createStyles, } from '@mantine/core';
import * as S from './style'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom:"20px",
    minHeight: 500,
    backgroundColor:"#47625d"

  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 5)`,
    color: "#fff",
    paddingTop: "20px",
    paddingBottom:"20px"
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
    
  },
}));
export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="xl" className={classes.wrapper}>
      <Title className={classes.title}>

        Dúvidas frequentes

      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="privacidade">
          <Accordion.Control>A  privacidade é assegurada ?</Accordion.Control>
          <Accordion.Panel>

            <S.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi
            </S.Text>

          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="tempo">
          <Accordion.Control>Quanto tempo preciso fazer terapia?</Accordion.Control>
          <Accordion.Panel>
            <S.Text>
              É complicado definir o tempo de duração da terapia sem ter conhecimento do quadro clínico dos pacientes.
            
            </S.Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="duvidas">
          <Accordion.Control>Como saber se a terapia está dando certo ? </Accordion.Control>
          <Accordion.Panel>
            <S.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi
            </S.Text></Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="medicacao">
          <Accordion.Control>E se eu precisar de medicação ?</Accordion.Control>
          <Accordion.Panel>
            <S.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi
            </S.Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="duvidas-melhora">
          <Accordion.Control>O que devo fazer se não notar uma melhora ?</Accordion.Control>
          <Accordion.Panel>
            <S.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae atque eveniet expedita earum a amet similique ad, officia consectetur provident, neque quis odit eligendi
            </S.Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}