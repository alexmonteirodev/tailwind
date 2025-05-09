// - Grid

// grid define o display como grid

// grid-cols- - cria colunas de 1fr

// grid-rows- - cria linhas de 1fr

// gap-x-, gap-y- e gap- - define o gap

{
  /* <div class="grid grid-cols-2 gap-x-4 gap-y-8">
    <div class="bg-gray-300 p-4">Item 1</div>
    <div class="bg-gray-300 p-4">Item 2</div>
    <div class="bg-gray-300 p-4">Item 3</div>
    <div class="bg-gray-300 p-4">Item 4</div>
    </div> */
}

//obs: ao usar o *: você está falando com todos os filhos, isso se chama 'modificador'

// - Grid Arbitrário
// A divisão padrão do grid utliza 1fr apenas, mas geralmente precisamos de uma composição diferente. Use valores arbitrários grid-cols-[1fr_2fr]
//O padrão do tailwind é definir o grid-cols com 'grid-template-columns: repeat(3, minmax(0, 1fr));', iniciando com 0 e é comum alterarmos isso via valores arbitrários. Olhar no html.

{
  /* <div class="grid grid-cols-[minmax(0,300px)_1fr] gap-2 *:bg-gray-300 *:p-4">
    <div>minmax(0,300px)</div>
    <div>1fr</div>
    </div> */
}

// - Grid Item
// Utilize col-span- e row-span- para controlar o espaçamento e o alcance dos itens.

{
  /* <div class="grid grid-cols-3 gap-2 *:bg-gray-300 *:p-4">
    <div class="col-span-full">Item 1: col-span-full</div>
    <div class="col-span-2 row-span-2">Item 2: col-span-2 row-span-2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    </div> */
}

// - Start e End
// Utilize col-start- e col-end- para posicionar itens em um local específico do grid.

{
  /* <div class="grid grid-cols-3 gap-2 *:bg-gray-300 *:p-4">
    <div class="col-start-2">Item 1: col-start-2</div>
    <div class="row-start-3 col-start-3">Item 2: row-start-3 col-start-3</div>
    <div>Item 3</div>
    <div>Item 4</div>
    </div> */
}

//aprendizados rápidos:

// span = expandir, logo se temos grid grid-col-3 e o item tem col-span-3, ele vai se expandir pelas 3 colunas. é como se disses ao item col-start-1 col-end-4 (para ocupar tudo até antes da quarta coluna)

//auto = definição em automatico, faz com que os itens tenham seu tamanho normal, olhar no nav do html. basicamente, grid-col-[1fr_auto] faz com que o priemiro item tenha 1fr e o segundo ocupe apenas o seu tamanho em uma segunda coluna

//full = é para expandir o maximo de todas as colunas

//*: fala com os itens filhos
