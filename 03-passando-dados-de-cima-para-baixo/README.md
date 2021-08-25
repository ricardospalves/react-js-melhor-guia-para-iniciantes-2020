# Passando dados de cima para baixo

Bibliotecas baseadas em components como o React trabalham com um fluxo único de
passagem de dados, que é sempre dos componentes mais externo para os componentes
mais internos. Ou seja, a forma mais fácil de se propagar dados entre os
componentes é sempre do pai para o filho, do filho pro neto e assim por diante.
Esse fluxo único de passagem de dados é chamado de **one-way data flow** ou
**one-way binding**.

Para a propagação de cima para baixo as 3 técnicas principais são:

* Passagem direta (pai > filho > neto > bisneto…)
* Context API
* Composition
