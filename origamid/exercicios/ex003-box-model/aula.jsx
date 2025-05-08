// Tailwind Fundamentos
// - Box Model

// - Width, Height e Size
//w- e h- para definir largura e altura. size- para definir largura e altura proporcionais.

{
  /* <div class="bg-gray-300">Normal</div>
    <div class="bg-gray-300 w-20 h-24">w-20 h-24</div>
    <div class="bg-gray-300 size-32">size-32</div> */
}

// - Básico de Cores
// O Tailwind CSS possui uma paleta bem completa de cores. Todas elas possuem valores de 50 (mais claro) até 950 (mais escuro). Além de valores como white e black. As cores podem ser aplicadas a diferentes elementos como background bg-, color text-, border border- e outros.

{
  /* <div class="bg-gray-900 text-gray-200">bg-gray-900 text-gray-200</div>
    <div class="bg-red-600">bg-red-600</div>
    <div class="bg-yellow-400">bg-yellow-400</div>
    <div class="bg-green-300 text-green-950">bg-green-300 text-green-950</div>
    <div class="bg-cyan-400 text-cyan-950">bg-cyan-400 text-cyan-950</div>
    <div class="bg-indigo-800 text-white">bg-indigo-800 text-white</div> */
}

// - Unidades
// Em geral, as unidades são geradas de 4px em 4px, então w-2 = 8px e w-5 = 20px. O Tailwind traduz o px para rem. Existem exceções. w-1/2 = 50%, w-full = 100% e w-px é 1px.

{
  /* <div class="bg-gray-300 w-24">HTML</div>
    <div class="bg-gray-300 w-1/2">CSS</div> */
}

// - Padding e Margin

// p- para padding e m- para margin.
// py- para top/bottom, px- para left/right.
// pt- = top, pb- = bottom, pr- = right, pl- = left.
// É possível ter valores negativos para margin, como -mt-10 e auto mx-auto

{
  /* <div class="grid justify-items-start">
    <p class="bg-gray-300 p-8">p-8</p>
    <p class="bg-gray-400 mt-8 px-4 py-8">px-4 py-8</p>
    <p class="bg-gray-200 pb-12 -mt-4">pb-12 -mt-4</p>
    <p class="bg-gray-600 m-auto">m-auto</p>
    </div> */
}

// - Border
// Os valores de border são especificados em px, então border-4 é 4px de borda. Os valores de bottom, top e etc são separados por -, por exemplo, border-b, e não borderb.

{
  /*<div class="bg-gray-300 p-4 mb-4 border border-gray-800">
    border border-gray-800
    </div>
    <div class="bg-gray-300 p-4 mb-4 border-b-4 border-gray-800">
    border-b-4 border-gray-800
    </div>
    <div class="bg-gray-300 p-4 border-x-4 border-gray-800">
    border-x-4 border-gray-800
    </div>
    */
}

// - box-sizing
// Diferente do HTML padrão, o Tailwind define os elementos com box-sizing: border-box;. Sendo assim, os valores de border e padding são absorvidos pelo valor do height e não somados ao mesmo. Podemos mudar para o comportamento padrão com box-content

{
  /* <div class="bg-gray-300 border-gray-800 mb-4 p-4 border-y-4 h-16 box-border">
    p-4 border-y-4 h-16 box-border
    </div>
    <div
    class="bg-gray-300 border-gray-800 mb-4 p-4 border-y-4 h-16 pt-8 box-content"
    >
    p-4 border-y-4 h-16 pt-8 box-content
    </div> */
}
