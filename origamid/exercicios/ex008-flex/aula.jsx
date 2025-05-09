// - Flex
// flex define o elemento como flexbox

// flex-row e flex-row-reverse coloca em linha

// flex-col e flex-col-reverse coloca em coluna

{
  /* <ul class="flex gap-2 *:p-2 *:rounded *:text-center">
    <li class="bg-orange-200 text-orange-800">HTML</li>
    <li class="bg-lime-200 text-lime-800">CSS</li>
    <li class="bg-yellow-200 text-yellow-800">JavaScript</li>
    <li class="bg-blue-200 text-blue-800">React</li>
    <li class="bg-violet-200 text-violet-800">PHP</li>
    </ul> */
}

// - Flex Item (flex-1 X flex-auto)
// flex: (grow) (shrink) (basis)

//obs: (grow - crescer) (shrink - momento que quebra) (basis - proporção da base)

// flex-1: flex: 1 1 0%; Ocupa o espaço vazio, mas ignora o valor inicial do conteúdo

// flex-auto: flex: 1 1 auto; Ocupa o espaço vazio, mas cresce de acordo com o tamanho inicial do conteúdo.

//diferença entre o flex-1 e o flex-auto é que o basis que no flex-1 é 0% e no auto é auto. o 0% faz com que o content ignore o tamanho do item e cresce proporcional e o auto faz com que cresca de acordo com o tamanho do item.

//ex: javascrip no auto cresce mais que o css porque tem mais letras o que faz dele um item maior e caso estivesse usando o basis de 0%, os dois teriam o mesmo tamanho de content

{
  /* <h1 class="mb-2">flex-1</h1>
    <ul class="flex *:flex-auto gap-2 *:p-2 *:rounded *:text-center mb-4">
    <li class="bg-orange-200 text-orange-800">HTML</li>
    <li class="bg-lime-200 text-lime-800">CSS</li>
    <li class="bg-yellow-200 text-yellow-800">JavaScript</li>
    <li class="bg-blue-200 text-blue-800">React</li>
    <li class="bg-violet-200 text-violet-800">PHP</li>
    </ul>

    <h1 class="mb-2">flex-auto</h1>
    <ul class="flex *:flex-1 gap-2 *:p-2 *:rounded *:text-center">
    <li class="bg-orange-200 text-orange-800 p-2">HTML</li>
    <li class="bg-lime-200 text-lime-800 p-2">CSS</li>
    <li class="bg-yellow-200 text-yellow-800 p-2">JavaScript</li>
    <li class="bg-blue-200 text-blue-800 p-2">React</li>
    <li class="bg-violet-200 text-violet-800 p-2">PHP</li>
    </ul> */
}

// - Grow e Shrink
// grow | grow-0: flex-grow: 1 | 0

// shrink | shrink-0: flex-shrink: 1 | 0

{
  /* <ul class="flex gap-2 *:p-2 *:rounded *:text-center">
    <li class="bg-orange-200 text-orange-800">HTML</li>
    <li class="bg-lime-200 text-lime-800 grow">CSS</li>
    <li class="bg-yellow-200 text-yellow-800 grow">JavaScript</li>
    <li class="bg-blue-200 text-blue-800 w-32 shrink-0">React</li>
    <li class="bg-violet-200 text-violet-800">PHP</li>
    </ul> */
}

// - Wrap
// flex-wrap: flex-wrap: wrap;

// flex-wrap-reverse: flex-wrap: wrap-reverse;

// flex-nowrap: flex-wrap: nowrap;

{
  /* <ul class="flex gap-2 flex-wrap  *:flex-1 w-60 *:p-2 *:rounded *:text-center">
    <li class="bg-orange-200 text-orange-800">HTML</li>
    <li class="bg-lime-200 text-lime-800">CSS</li>
    <li class="bg-yellow-200 text-yellow-800">JavaScript</li>
    <li class="bg-blue-200 text-blue-800">React</li>
    <li class="bg-violet-200 text-violet-800">PHP</li>
    </ul> */
}
