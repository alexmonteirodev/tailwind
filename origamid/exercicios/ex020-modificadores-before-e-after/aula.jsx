// - Before e After
// Adiciona os pseudo elements before e after.

// O Tailwind adiciona content: '' automaticamente.

//acaba que por usar o after toda vez, é recomendado colocar tudo em um span para ficar mais fácil de ler. olhar no html.
//ex: (repare que o relative se perde no meio de tudo)
// sem o span:
// class="py-2 px-4 bg-blue-400 rounded-2xl  after:size-6 after:absolute after:bg-white after:rounded-full after:border-4 after:border-blue-900 relative after:border-r-transparent after:-top-2 after:-right-2"

//com o span:
//class="py-2 px-4 bg-blue-400 rounded-2xl relative "
//class="size-6 absolute bg-white rounded-full border-4 border-blue-900 border-r-transparent -top-2 -right-2"
