// - Tailwind Config (v4)
// Na versão 4 do Tailwind as modificações podem ser feitas através de variáveis de CSS dentro de @theme {} diretamente no input.

// funciona como um ShadowRoot, pois ao definir a cor por exemplo ela ja se extende para a extensão e da pra usar nativamente e ter mais consistencia alem de caso queira mudar a cor, basta mudar no theme e ja vai mudar tudo

// ex:
// @import 'tailwindcss'
// @theme{
//     --color-origamid:#a8f;
// }

//obs: olhar o input de src

// @import 'tailwindcss';

// @theme {
//   /* --*: initial;  */

//   /* cria cores novas */
//   --color-verde-200: #acef75;
//   --color-verde-300: #91ee77;
//   --color-verde-900: #16281f;
//   --color-verde-950: #0f1c15;

//   /* escreve por cima de cores que existem */
//   --color-lime-300: var(--color-pink-300);
//   --color-lime-900: var(--color-pink-900);
//   --color-lime-950: var(--color-pink-950);

//   /* remove o padrão */
//   --color-blue-*: initial;

//   --text-2xs: 0.5rem;
//   --text-xl: 1.25rem;
//   --text-xl--line-height: 1.5rem;

//   /* cria um novo media querie */
//   --breakpoint-xs: 380px;

//   /* modifica o espaçamento padrão */
//   --spacing: 6px;
//   --spacing-22: 5.5rem;

//   /* adiciona uma animação */
//   --animate-slideIn: slideIn 0.3s ease-in-out forwards;

//   /* adiciona um keyframe */
//   @keyframes slideIn {
//     0% {
//       opacity: 0;
//       transform: translateX(-20px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
// }
