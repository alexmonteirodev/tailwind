// - @apply
// O @apply permite a adição de classes do Tailwind diretamente a seletores de CSS.

// é como criar componentes porém com classes. Dessa forma da pra criar um conjunto de configurações de class e colocar tudo dentro de uma só classe e quando utilizar ela, ela vai trazer todas essas configs.

// ex:
// no input:
// @layer components {
//   .btn {
//     @apply bg-lime-200 border-2 border-lime-400 text-lime-900 py-2 px-4 rounded-full hover:bg-lime-400 hover:text-lime-950;
//   }
// }

// no codigo:
// <button class="btn">Comprar Produto</button>
