# Checklist de Requisitos - Atualizações Cooperval

## Requisitos do Documento

### 1. ✅ Destacar "cooperar" na frase inicial em cor diferente
- Status: CONCLUÍDO
- Implementação: Palavra "cooperar" destacada em azul (#8fd3f4) na frase de missão

### 2. ✅ Em desktop, aumentar tamanho da logo no header
- Status: CONCLUÍDO
- Implementação: Logo aumentada para lg:h-20 no Header.tsx

### 3. ❌ Mover logo para ao lado da frase de missão (desktop)
- Status: PENDENTE
- Descrição: Logo deve aparecer ao lado da frase "Nossa missão é Inspirar pessoas a cooperar para evoluir" em desktop
- Implementação necessária: Adicionar logo na seção hero ao lado do h1

### 4. ❌ Em mobile, avaliar posicionamento da logo abaixo da frase
- Status: PENDENTE
- Descrição: Logo deve aparecer abaixo da frase em mobile/outros dispositivos
- Implementação necessária: Responsividade para mobile

### 5. ✅ Mover logo da NUTRIÇÃO para mais próximo do início e DESTACAR
- Status: CONCLUÍDO
- Implementação: Serviço de Nutrição movido para primeiro lugar com card destacado (gradiente verde, tamanho maior)

### 6. ❌ Alterar fonte dos títulos para uma mais simples
- Status: PENDENTE
- Descrição: Fonte dos títulos deve ser mais simples para manter padrão da empresa
- Atual: Playfair Display
- Necessário: Avaliar e trocar para fonte mais simples (ex: sans-serif)

### 7. ❌ Revisar as fotos
- Status: PENDENTE
- Descrição: Fotos do site precisam ser revisadas
- Implementação necessária: Atualizar URLs das imagens em constants.ts quando novas fotos estiverem disponíveis

### 8. ❌ Adicionar certificado de registro 'soucoop'
- Status: PENDENTE
- Descrição: Adicionar selo/certificado soucoop visível no site
- Implementação necessária: Criar seção com certificado ou adicionar badge em local estratégico (header/footer)

### 9. ❌ Alterar cards de lojas para botão "Saiba Mais" com endereço e imagem
- Status: PENDENTE
- Descrição: Transformar cards de agropecuárias, mercado, etc em botões "Saiba Mais" que contenham endereço e imagem da loja/filial
- Implementação necessária: Refatorar componente de lojas para modal/drawer com detalhes

### 10. ✅ Adicionar horários de funcionamento
- Status: PARCIALMENTE CONCLUÍDO
- Implementação: Constantes de horários adicionadas em constants.ts, mas não exibidas visualmente no site
- Necessário: Criar seção visível com horários de funcionamento de todos os setores

## Horários a Exibir

### MERCADO
- Segunda à sexta: 08h às 12h / 13h30 às 19h
- Sábados: 08h às 12h / 14h às 18h
- Domingos: 08h30 às 11h30

### AGROPECUÁRIA MATRIZ e LOGÍSTICA
- Segunda à sexta: 08h às 12h / 13h30 às 18h
- Sábados: 08h às 12h

### AGROPECUÁRIAS FILIAIS
- Segunda à sexta: 08h às 11h30 / 13h às 17h30
- Sábados: 08h às 11h

### SETOR ADMINISTRATIVO
- Segunda à sexta: 08h às 12h / 13h30 às 18h
- Sábados: 08h às 12h

### FÁBRICA DE RAÇÕES
- Segunda à sexta: 07h às 12h / 13h às 17h
- Sábados: 07h às 11h

### POSTO DE RECEBIMENTO DE LEITE
- Segunda à sexta: 06h às 12h / 12h às 18h
- Sábados e domingos: 06h às 16h

### CENTRO DE DISTRIBUIÇÃO
- Segunda à sexta: 08h às 12h / 13h30 às 18h
- Sábados: 08h às 12h
