# utils-cge

Biblioteca **mínima** da ConnectGestor para gerar **Pix estático** (copia e cola / BR Code EMV).

Pensada para o envio de chave Pix por texto no WhatsApp (`createStaticPix` + `hasError` + `toBRCode()`).

## Uso

```ts
import { createStaticPix, hasError } from "@connectgestor/utils-cge";

const pix = createStaticPix({
  merchantName: "Minha Loja",
  merchantCity: "SAO PAULO",
  pixKey: "email@exemplo.com",
  pixKeyType: "EMAIL",
  transactionAmount: 10.5,
  txid: "PIX123",
});

if (hasError(pix)) {
  throw new Error(pix.message);
}

const copiaECola = pix.toBRCode();
```

Exemplo de saída (BR Code / copia e cola):

```
00020126580014br.gov.bcb.pix0136email@exemplo.com520400005303986540510.505802BR5910Minha Loja6009SAO PAULO62070503***6304ABCD
```

## API

| Exportação | Descrição |
|------------|-----------|
| `createStaticPix` | Monta Pix estático com validação e normalização da chave |
| `hasError` | Verifica se o retorno é um `PixError` |
| `preparePixKey` | Normaliza e valida chave por tipo (`EMAIL`, `PHONE`, `CPF`, `CNPJ`, `EVP`) |
| `validatePixKey` | Valida chave (básico ou por tipo) |
| `normalizePixKey` | Normaliza chave por tipo (ex.: telefone `+55...`) |
| `parsePixKeyType` | Converte string em `PixKeyType` |
| `PixError` | Tipo de erro |
| `CreateStaticPixParams` | Parâmetros de criação |

## Tipos de chave (`pixKeyType`)

| Tipo | Validação |
|------|-----------|
| `CPF` | 11 dígitos + checksum |
| `CNPJ` | 14 dígitos + checksum |
| `PHONE` | Número BR (`+55` + DDD + número) |
| `EMAIL` | Formato de e-mail |
| `EVP` | UUID (`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`) |

## Parâmetros do Pix estático

| Campo | Descrição | Limite |
|-------|-----------|--------|
| `merchantName` | Nome do recebedor | até 25 caracteres |
| `merchantCity` | Cidade do recebedor | até 15 caracteres |
| `pixKey` | Chave Pix | obrigatório |
| `pixKeyType` | Tipo da chave | `EMAIL`, `PHONE`, `CPF`, `CNPJ`, `EVP` |
| `transactionAmount` | Valor da transação | número |
| `txid` | Identificador da transação | até 25 caracteres (padrão: `***`) |
| `infoAdicional` | Informação adicional | opcional |
