# Medidas das referências (arquivo de trabalho)

Base para o futuro `estilo.md`. Ainda faltam os vídeos Ref1 a Ref4, que precisam de análise com ffmpeg (quadro a quadro, ritmo e som). Os carrosséis já foram medidos com Python (Pillow, SciPy) nas imagens enviadas pela criadora.

**Como ler os números**
- Cores: mediana dos pixels do texto. Contraste: razão WCAG entre a cor do texto e a cor do fundo ao redor, estimada. Em foto, é aproximação.
- Posições: porcentagem da largura (x) e da altura (y) da imagem.
- Carrossel é estático: não há tempo de tela, ritmo nem som para medir.

## Observações da criadora (palavras dela)

- **Ref1.mp4:** "gostei bastante do tipo de fonte utilizada no vídeo, assim como gostei do barulho de 'teclar' durante o aparecimento dos tópicos sobre o qual a mulher ia falar no vídeo. gosto de fontes como essa, como a Bootzy Tm, Montserrat, Popins e Nunito. gosto do modo que as legendas aparecem em blocos de texto."
- **Ref2.mp4:** "gosto de começar o vídeo com algo que chame a atenção do espectador, seja uma pergunta ou uma frase que envolva-o para apresentar um conteúdo técnico, seja uma provocação emocional/sentimental quando se tratar de um conteúdo mais conversativo sobre informação, vida academica, ou minha vida pessoal. gosto do modo que as legendas aparecem, palavra por palavra, principalmente no título, de modo a chamar atenção de forma mais eficiente. para além disso, gosto das imagens aparecendo mas ficando num plano de profundidade posterior a quem fala no vídeo. gostaria disso também na apresentação inicial do vídeo com a frase de introdução e de gancho nessa perspectiva."
- **Ref3.mp4:** "eu gosto como em momentos e palavras importantes há a escrita maior e com icones graficos dessas palavras e trechos, como quando ela apresentou o nome do episódio 4 e colocou como se fosse escrevendo nas notas. também gostei quando apareceu grande 'Radar científico pessoal' e os termos chaves dos temas de interesse: 'memoria sono, neurosciencia da aprendizagem...'. as logos dos aplicativos, revistas ou sites mencionados também é excelente como gancho visual."
- **Ref4.mp4:** "a escrita do título nos três primeiros segundos com essa barrinha vertical fina como se fosse escrita de teclado é massa! também é um modelo interessante de se explorar. gostei da explicação em tempo real do funcionamento da ferramenta apresentada também com um video ilustrativo do processo."
- **Carrossel modelo 1:** "me agrada *muito* a disposição das legendas de modo mais orgânico e despojado. gosto que ha uma alternancia entre cobrir ou não cobrir o cenário da imagem. por exemplo, não se cobre rosto em fotos com seres humanos. na foto com o café com oculos e livros, se escolheu um objeto para ser o principal (a xicara de café), para que as legendas ficarem em sua periferia de forma espalhada, sem cobri-lo. ja quando o fundo tem muita informação, se cobriu ele sem usar como criterio 'não cobrir certo objeto'. gosto de como se alternou entre negrito e letra mais fina para dar destaque em trechos importantes, assim como se mudou a fonte para uma mais manuscrita para uma palavra de destaque. assim como para deixar mais alinhado esteticamente se alternou entre branco e amarelo mais clarinho em alguns textos."
- **Carrossel modelo 2:** "adorei essa capa super diferente com os olhos e a boca em destaque no meio do texto. pensei ate em fazer uma sessão de fotos minhas ou pegar fotos ja existentes para fazer isso. a cabeça inteira flutuante também. acho muito massa. gosto mais desse modelo de carrossel para coisas mais diretas e curtas, que exigem midia para que haja compreensão ou interesse no que foi feito. como foi o caso do modelo: se o usuário não vê o que ela descreve ter feito, não se tem dimensão da qualidade. me interessa muito esse Call to Action de chamar pra induzir um comentario (quando há algum material para ser enviado via link pelo direct) ou uma reflexão pra fazer a pessoa seguir a conta."
- **Carrossel modelo 3:** "o que mais gosto nesse modelo é o uso de fotos pessoais que permitem rosto em praticamente todos os slides, gerando mais conecção. deve-se somente prestar atenção para que se use adequadamente para diferentes níveis de funil. também acho que é um modelo mais publicitário."
- **Em geral:** "gosto de fontes em cores claras e que haja contraste o suficiente com o fundo, de modo que esteja legível. vejo importancia em call to action na maioria dos videos e carrosseis."

## Carrossel 1 (formato 1179 × 1474 px, 4:5)

Slides recebidos: 1 a 6 e 8. O slide 7 não foi enviado. Os arquivos `6.jpg` a `10.jpg` do primeiro lote eram cópias dos arquivos 1 a 5, e `12.jpg` repetia o slide do livro com café.

| Slide | Conteúdo | Cor do texto | Posição (x, y) | Altura de linha do título | Contraste |
|---|---|---|---|---|---|
| 1 (selfie) | "eu decidi só criar conteúdo" à esquerda, "com o que as minhas clientes sabem." à direita, legenda pequena embaixo | creme #F1EDD1 | título 10–36% x, 25–39% y; bloco direito 59–88% x, 46–75% y | ~3–4% da altura | ~2,4:1 |
| 2 (cards de métricas) | título no topo, painéis de métricas | branco frio #F1F1F5 | título 30–72% x, 15–25% y | ~5–7% da altura | ~2,3:1 |
| 3 (xícara na mão) | "deixa eu te explicar como funciona aqui" e blocos | creme #F1EDD4 | título 31–67% x, 16–23% y | ~3% da altura | ~3,5:1 |
| 4 (notebook e perna) | título à esquerda, "garimpada" em manuscrito | creme #F1E9CD | título 10–28% x, 17–24% y | ~3–4% da altura | ~4,0:1 |
| 5 (livro e café) | título centralizado, bloco menor embaixo | creme #F0EDD4 | título 22–78% x, 20–28% y | ~3% da altura | ~3,6:1 |
| 6 (notebook, "a garimpada...") | título em cima à direita, blocos à direita e à esquerda | creme/branco #EFEEEC | título 35–88% x, 12–20% y; bloco direito 51–89% x, 55–64% y | ~3–4% da altura | ~3,0:1 |
| 8 (Kindle) | título à esquerda, subtítulo, bloco à direita | creme #F0EDD1 (título), branco (corpo) | título 10–64% x, 15–26% y; bloco direito 42–88% x, 57–70% y | ~2–4% da altura | ~4,9:1 |

- Fontes: grotesca sem serifa, título em peso médio/negrito e corpo em peso fino. Há um toque manuscrito na palavra "garimpada" (slide 4).
- Palavras por bloco: de 4 a 17, em 2 a 4 linhas. Títulos de 4 a 11 palavras.

## Carrossel 2 (conta de terceiros, @eilaradam; prints de celular, 923 × 2000 px)

Seis slides recebidos. Só o estilo visual é referência; o conteúdo e a identidade pertencem a outra pessoa.

| Slide | Conteúdo | Cores | Contraste |
|---|---|---|---|
| 1 (capa) | "COISAS INCRÍVEIS QUE EU CRIEI COM O CLAUDE", em caixa alta; palavra "CLAUDE" grande em laranja, com olhos e boca em recortes | texto #100D08 sobre creme #FBF4E9; laranja #D87756 | ~17,7:1 |
| 2 "Automação do Instagram" | título em caixa azul, corpo serifado (máquina de escrever) | caixa azul #3B576E, creme #F8F3E9, texto escuro | ~7,1:1 |
| 3 "Análise do Instagram" | mesma estrutura | azul #3B576E, creme #F8F3E9, laranja #D87756 | caixa azul ~6,8:1; corpo ~19:1 |
| 4 "Portfólio e mídia kit" | mesma estrutura | igual ao slide 3 | ~6,8:1 e ~19:1 |
| 5 "Edição de carrossel (tipo esse)" | mesma estrutura, foto + print lado a lado | igual ao slide 3 | ~6,9:1 e ~19:1 |
| 6 (CTA) | título em caixa alta com palavras em laranja, "Comenta IMERSÃO que eu mando o link" em caixa azul | texto #000000 sobre creme #FCF8F0; laranja #D87352 | título ~19,8:1; CTA ~7,1:1 |

- Fontes: títulos em grotesca bold (caixa alta ou caixa azul com texto creme); corpo em serifa de máquina de escrever, centralizado.
- Texto escuro sobre fundo claro, ao contrário do carrossel 1.

## Carrossel 3 (conta de terceiros, @danielmiranda.med; prints do Instagram com interface em volta)

Oito slides, na ordem: capa, A ideia, A pergunta, A viabilidade, Critérios de elegibilidade, Protocolo e PROSPERO, Estratégia de busca, CTA.

| Slide | Gancho | Cores | Contraste |
|---|---|---|---|
| 1 (capa) | "6 etapas da metanálise que todo estudante de medicina precisa dominar", "Parte 1 de 2 · no último slide, uma dica de ouro" | título #F6F8F5 sobre foto escura #0E1B2B; sublinhado amarelo #F6D24D | ~16:1 |
| 2 a 5 | título branco sobre foto; gancho em itálico serifado; cartão creme no terço inferior | cartão #F6F7F0; texto #131922; destaque amarelo ~#F5D35C | ~16,4:1 |
| 6 "Protocolo e PROSPERO" | título branco grande, subtítulo "plano travado" | cartão #F6F7F0; texto #131923 | ~16,4:1 |
| 7 "Estratégia de busca" | título branco sobre foto de slide, "OR amplia · AND estreita" | cartão #F6F7F0; texto #0F151C | ~17,0:1 |
| 8 (CTA) | "Eu te aconselho a aproveitar a Black November do..." e "Comenta META" em caixa ciano | caixa #5EECE2; texto #F5F6F4; fundo azul escuro | ~9,8:1 |

- Padrão em todos os slides: nome e @ no topo, ícone no canto superior esquerdo, @ e "ESTUDANTE DE MEDICINA" no rodapé, "Próximo: ... →" como indicador.
- Fontes: título em sans bold, ganchos em serifa itálica, corpo em sans regular.
- O slide 8 divulga o Meta-Analysis Academy, que é o mesmo grupo de pesquisa citado no perfil da criadora (dado do próprio carrossel, não confirmado).

## Pendente

- Analisar Ref1.mp4, Ref2.mp4, Ref3.mp4 e Ref4.mp4 com ffmpeg: quadro a quadro, legendas (fonte, tamanho, posição, cores, palavras por vez), elementos que entram e tempo na tela, ritmo (cortes) e som (volume e efeitos).
- Slide 7/8 do carrossel 1, se a criadora quiser incluí-lo.
- Montar o `estilo.md` final com tudo isso.
