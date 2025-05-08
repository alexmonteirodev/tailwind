// - Tailwind vs outros Frameworks

// o tailwind ficou famoso por ter uma boa documentação (fácil de entender e buscar por soluções).

// A maioria dos Frameworks funcionam com o uso de classes pré construídas. Ex: um link é uma classe nav-link, que aplica color, padding, font-size e mais. O Tailwind é feito quase que exclusivamente, por classes utilitárias, cada classe geralmente adiciona uma única propriedade p-4 adiciona padding, text-black adiciona color e etc.

// - O que é Tailwind?
// Tailwind é um framework que possui várias estilizações pré programadas para estilização em css.

// A grande diferença entre o tailwind e outros frameworks é que ele customiza cada elemento em específico com configuração própria pra aquele elemento e deixa você definir o padrão. Exemplo:

//Bootstrap:
// teria que usar uma classe definida como: 'card', que adicionaria uma linha de 2px solid cinza em volta da div e um padding x. Ou seja, o Bootstrap tem um estilo pré programado que não te dá tanta liberdade e sim agilidade para criar os elementos. (obs: isso fez que antigamente todos os sites ficassem parecidos pois muitos usavam bootstrap)

//Tailwind:
// para replicar o 'card', no tailwind você teria que definir por exemplo: um border-gray-300, ou seja, tbm cria uma linha em volta mas te da a possibilidade de customizar essa linha alterando o valor de cara como a cor (gray), e o tamanho (300), coisa que o bootstrap não deixava pois já era um estilo padrão pré programado.

//obs: algumas vantagens do tailwind são:

// •	Evita escrever muito CSS manual. (escreve css via classes pré construidas)
// •	Fácil de manter estilos consistentes.
// •    Mobile-first e responsivo por padrão. (exemplo usar um container já vem configuradas as mediasqueries)

// - tailwind vs Css inline
// o tailwind é usando inline como o css então quala diferença? Primeiro que os nomes das classes pré criadas do tailwind são intuitivas e menores, então ao invés de escrever background-color: red; no css, no tailwind basta usar bg-red-600; Segundo que para criar animações como hover, é necessário abrir o arquivo css e o tailwind possibilita fazer isso inline.

// Olhar html com diferença entre eles.
