# Guia de Configuração do Painel Administrativo

## Acesso ao Painel

### URL
```
http://localhost:3000/admin/login
```

### Credenciais Padrão (Demo)
- **Email:** `admin@cooperval.com`
- **Senha:** `cooperval2024`

⚠️ **IMPORTANTE:** Altere essas credenciais em produção! Veja a seção "Segurança" abaixo.

## Funcionalidades do Painel

### 1. Dashboard
Após fazer login, você terá acesso a um painel completo com:
- **Lista de Notícias:** Todas as notícias publicadas
- **Busca:** Pesquise notícias por título ou conteúdo
- **Filtros:** Ordene por data, categoria, etc.

### 2. Criar Nova Notícia
1. Clique no botão **"+ Nova Notícia"**
2. Preencha os campos:
   - **Título:** Nome da notícia (obrigatório)
   - **Resumo:** Breve descrição (obrigatório)
   - **Conteúdo:** Texto completo (obrigatório)
   - **Imagens:** Upload de múltiplas imagens
   - **Data de Publicação:** Quando publicar (obrigatório)
   - **Autor:** Nome do autor (opcional)
   - **Categoria:** Tipo de notícia (Notícia, Evento, Comunicado, Destaque)
3. Clique em **"Publicar"**

### 3. Editar Notícia
1. Localize a notícia na lista
2. Clique no ícone **"Editar"** (lápis)
3. Faça as alterações desejadas
4. Clique em **"Atualizar"**

### 4. Deletar Notícia
1. Localize a notícia na lista
2. Clique no ícone **"Deletar"** (lixeira)
3. Confirme a exclusão

### 5. Visualizar Notícia
1. Clique no ícone **"Ver"** (olho)
2. A notícia será aberta em uma nova aba

## Integração com Sanity.io

O painel administrativo está integrado com o **Sanity.io** para armazenamento de dados. Isso significa:

- **Dados Centralizados:** Todas as notícias são armazenadas no Sanity
- **Acesso via API:** O site busca as notícias automaticamente do Sanity
- **Backup Automático:** Sanity faz backup de todos os dados
- **Escalabilidade:** Suporta crescimento sem problemas de performance

### Configuração do Sanity

Siga o guia em `SANITY_SETUP.md` para:
1. Criar uma conta no Sanity.io
2. Configurar seu projeto
3. Preencher as variáveis de ambiente

## Segurança

### Em Desenvolvimento
As credenciais padrão são adequadas para testes locais.

### Em Produção
⚠️ **NUNCA** use as credenciais padrão em produção!

**Recomendações:**
1. **Implementar Backend Seguro:**
   - Criar um servidor Node.js/Express
   - Implementar autenticação com JWT
   - Usar bcrypt para hash de senhas
   - Validar tokens em cada requisição

2. **Usar OAuth:**
   - Google OAuth
   - GitHub OAuth
   - Outro provedor de identidade

3. **Variáveis de Ambiente:**
   ```
   VITE_ADMIN_EMAIL=seu-email@cooperval.com
   VITE_ADMIN_PASSWORD_HASH=hash-bcrypt-aqui
   VITE_JWT_SECRET=seu-secret-jwt-aqui
   ```

4. **HTTPS:**
   - Sempre usar HTTPS em produção
   - Certificado SSL/TLS válido

5. **Rate Limiting:**
   - Implementar limite de tentativas de login
   - Proteção contra brute force

## Troubleshooting

### Não consigo fazer login
- Verifique se está usando as credenciais corretas
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique o console do navegador (F12) para erros

### Notícia não aparece no site após publicar
- Aguarde alguns segundos (cache)
- Recarregue a página (F5)
- Verifique se a data de publicação é hoje ou no passado
- Verifique se o Sanity está configurado corretamente

### Erro ao fazer upload de imagem
- Verifique o tamanho da imagem (máximo 10MB)
- Tente um formato diferente (PNG, JPG)
- Verifique a conexão com a internet
- Verifique se o token do Sanity tem permissão de upload

### Perdi minha senha
- Atualmente, não há sistema de recuperação de senha
- Entre em contato com o desenvolvedor para resetar
- Em produção, implemente um sistema de recuperação seguro

## Boas Práticas

1. **Nomes Descritivos:**
   - Use títulos claros e informativos
   - Evite abreviações confusas

2. **Imagens de Qualidade:**
   - Use imagens de alta resolução (mínimo 1200x800px)
   - Comprima as imagens antes de fazer upload
   - Use formatos modernos (WebP, AVIF quando possível)

3. **Conteúdo Bem Formatado:**
   - Use quebras de linha para separar parágrafos
   - Mantenha o texto organizado e legível
   - Revise antes de publicar

4. **Categorias Consistentes:**
   - Use as mesmas categorias sempre
   - Facilita a organização e busca

5. **Datas Corretas:**
   - Sempre defina a data correta de publicação
   - Isso afeta a ordenação no site

## Suporte

Para dúvidas ou problemas:
1. Verifique este guia
2. Verifique o `SANITY_SETUP.md`
3. Consulte a documentação do Sanity: https://www.sanity.io/docs
4. Entre em contato com o desenvolvedor

## Próximos Passos

- Implementar autenticação segura em produção
- Adicionar mais categorias conforme necessário
- Implementar agendamento de publicações
- Adicionar sistema de comentários
- Implementar SEO avançado
