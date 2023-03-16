export default function Handler(req, res) {
  const data = req.body;
  res.status(200).json({
    services: [
      {
        title: "Você Sabe O Que É Terapia Comportamental ?",
        text: " A Terapia Comportamental, ou Terapia Analítico Comportamental é uma forma de intervenção aos problemas psicológicos que se destaca pela objetividade e pelos resultados mensuráveis. Possui um amplo conjunto de técnicas bem descritas e constantamente testadas em situações e problemas abordados pela psicologia aplicada É baseada na filosofia de ciência conhecida como Behaviorismo Radical e na ciência do comportamento, Análise Experimental do Comportamento A proposta do Behaviorismo Radical defende que o comportamento dos organismos é ordenado.Dessa forma, passível de ser estudado cientificamente na mesma forma das ciências naturais.Esta proposta orienta o trabalho do terapeuta comportamental, que busca descobrir, com seu paciente, os eventos no ambiente que determinam os seus comportamentos- problema",
      
        secondaryText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rerum ut et eius fuga nisi repellat cum maiores, molestiae laboriosam ipsam dolorum voluptatum illo adipisci, a sit perspiciatis quis ea!",
        imagem: "/images/gratis.webp",
      },
    ],
  });
}
