# Teste Front-end Betalent

## Instruções
inicialmente faça um `git clone` do projeto
Após isso rode o comando

### `npm install`
após isso é só rodar o comando  
### `npm run start`
para iniciar o projeto e para acessar o projeto abra [http://localhost:3000](http://localhost:3000)

## Explicações de código
Este tópico é para explicar um pouco algumas partes do código 
a começar da search bar essa search bar que criei poderia ser usada em outras partes do sistema caso fosse necessário pois ela só necessita 
de uma prop que caso é uma função se setstate vindo do parent element 


![image](https://github.com/user-attachments/assets/18c26f06-3185-49a1-a563-807b268a166a)


no caso ela iria vir com esse style poderia colocar algumas estilizações a mais vindas também do parent element mas acredito que não era a proposta do desafio 

Adicionei também o hook useMemo para ajudar na renderização da tabela, no caso como essa tabela tem poucos registros não tem muita diferença de desempenho mas em caso de uma tabela com mais registros 
iria ajudar bastante pois ele evita re-renderizações desnecessarias

A tabela também poderia ser reutilizada com alguns ajustes pois os headers da tabela são mapeados a partir de um array e ela também ja esconde alguns headers no mobile e também possível alterar quais ela vai esconder

Ja o table body não é reutilizavel ja que ele é muito variavel e tem muito hardcode pois depende da lista que vai ser mostrada.

Adicionei um listener que no Tablebody para caso o usuario fique dando resize na tela ele muda o colspan dos possiveis erros na tabela(no caso os erros são quando o backend não consegue enviar o json ou não tem nenhum registro de acord com o search do usuario)

Tem outro listener dentro de cada row que no caso ele troca o state pra false da div que aparece quando o usuario clica para ver mais detalhes, essa div só existe no mobile e é controlada por um state dentro do componente mas tinha um bug que quando o usuario clicava para ver mais detalhes e depois dava resize(me refiro a resize quando o usuario fica alterando o tamanho da pagina com o console) pra web o state continuava ativo e quebrava a tabela.

## Considerações finais

Desde ja agradeço a oportunidade e foi bem legal fazer o desafio espero que gostem demorei um pouco pra fazer pois tive alguns contratempos durante esse periodo.

ff

