// - dark:
// O modificador dark: serve para aplicarmos estilos diferentes quando o usuário prefere o dark-mode. Caso o dark mode estiver ligado no pc, acionará a estilização dark:
// ex: dark:bg-neutral-800

// - group
// No CSS podemos colocar uma pseudo-class no pai e alterar o filho.

// No Tailwind podemos utilizar um modificador group para termos o mesmo efeito.

// group deve ser adicionado ao elemento pai

// basicamente tem que add o group no elemento pai e acionar a modivicação com 'group-' no filho. Exemplo: group na section e group-hover:text-5xl no h1, fará com que quando o mouse entrar na section, faça o h1 crescer.

// Ex usando css:
{
  /*.item:hover h1 {
        }
        .item:hover p {
        }*/
}

// Ex usando group:
{
  /*<div class="rounded-md max-w-md p-4 bg-neutral-200 hover:bg-neutral-800 group">
    <h1
        class="text-xl font-serif font-bold mb-2 text-neutral-500 group-hover:text-neutral-200"
    >
        Aurora Boreal
    </h1>
    <p class="text-neutral-700 group-hover:text-neutral-300">
        Melhor período para observação da Aurora Boreal, o céu estará iluminado
        pelas estrelas.
    </p>
    </div>
    */
}

// - peer

// Funciona como o group porém serve para elementos "irmãos", que estão dentro do mesmo pai e no mesmo nível.

//obs: se add o peer a dois irmãos a ação será acionada nos dois ao mesmo tempo, uma forma de resolver é envolver cada um em uma div porque ai eles deixam de ser irmãos. Ou usar um indicador peer/nome do indicador.

// - has
// Verifica se existe algum filho com a condição entre colchetes has-[]

//essa condição pode ser um:
//data-atributo (has-[[data-atributo]])
// uma classe definida no has (has-[.recomendado])
// uma class especifica (has-[bg-green-200])
