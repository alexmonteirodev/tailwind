// - Valores Arbitrários
// Use valores arbitrários com colchetes [] para aplicar qualquer valor CSS que não esteja disponível nas classes padrão do Tailwind CSS.

{
  /*   <h1 class="text-[#a8f] bg-black h-[50px]">Origamid</h1> */
}

// - Diferentes Aplicações
//  Um valor arbitrário que for constantemente utilizado, deve se transformar em uma classe utilitárias (configurações).
// Podemos usar calc, variáveis de css e mais nos valores arbitrários.

{
  /* <style>
    html {
        --positivo: #2e0;
    }
    </style>
    <div class="w-[calc(50%-10px)] bg-[--positivo] ">
    w-[calc(50%-10px)] bg-[--positivo]
    </div> */
}

// - Espaços e Vírgulas
// A classe no Tailwind não pode ter espaços, então para lidar com eles o usamos o _. Você pode usar as vírgulas normalmente.

{
  /* <div class="shadow-[0_2px_4px_2px_rgba(0,0,0,0.25)] p-4">
    shadow-[0_2px_4px_2px_rgba(0,0,0,0.25)] p-4
    </div> */
}
