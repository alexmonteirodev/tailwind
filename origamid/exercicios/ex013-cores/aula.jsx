// - Cores
// As cores vão de 50 (claro) - 950 (escuro).

// O Tailwind oferece diferentes tons de cinza (gray, neutral, stone, ...) e diferentes matizes (green, lime, emerald, ...).

// Tem também o white e black

// https://tailwindcss.com/docs/customizing-colors

// - Cinza
// Os tons de cinza variam em suas matizes: o cinza padrão apresenta um leve tom azul, o stone tem uma tonalidade avermelhada e o neutral permanece completamente neutro.

// Contraste (usar uma diferença de no min 500 pra cima)
// 400- - Cores mais claras.

// 600+ - Cores mais escuras.

// Cuidado com as cores do meio 400 -> 600, pois elas possuem menores possibilidades de fundos contrastantes.

// O Tailwind não possui uma lógica de contraste, uma matiz que funciona bem com 300/600 pode não funcionar em outra.

// Por regra, tente usar cores com diferença de pelo menos 500 pontos.

// - Propriedades
// Praticamente todas as propriedades que permitem a alteração de cores podem utilizar as paletas de cores do Tailwind.

// text-, bg-, border-, decoration- e outros

// - Opacidade
// Podemos modificar a opacidade de uma cor adicionando / e a porcentagem que desejamos: bg-black/20 vai gerar rgb(0 0 0 / 0.2);

// Os valores vão de 0 até 100, pulando de 5 em 5.

// - Cores Arbitrárias
// Podemos utilizar valores arbitrários para cores, mas geralmente vamos definir nas configurações uma nova cor. Pois assim o Tailwind gera para a gente todas as cores com o novo valor.
