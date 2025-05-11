// - Pseudo Classes
// Podemos utilizar pseudo classes como hover: e active: para adicionarmos classes condicionais.

// hover:bg-green-200 - o background só será verde ao hover

// - Focus, Visited e Disabled:

// focus: - foco do teclado (tab)

// visited: - link visitado

// disabled: - campo/botão desabilitado

// hover:disabled: - campo/botão desabilitado e com hover

// - Seletores
// first: - first-child

// last: - last-child

// odd: - nth-child(odd)

// even: - nth-child(even)

// Importante, esse tipo de seletor deve ser adicionado diretamente aos filhos. No CSS usamos ul li:first-child - note que estamos adicionando no LI e não na UL o :first-child. Logo terá que ser assim também no Tailwind, não coloque odd: na ol/ul, mas sim na li. Pois você quer adicionar um estilo nas LI impares por exemplo e nao na UL impares.

//nesse caso da lista da pra usar o *: no elemento pai ou usar direto na li poruqe quando vc for usar vai ser provavelmente em um map ou um loop, então só vai usar uma vez
