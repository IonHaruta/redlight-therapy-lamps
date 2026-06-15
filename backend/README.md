# Backend — API plăți MAIB / Paynet

```sh
cp .env.example .env   # prima dată
npm install
npm run dev            # http://127.0.0.1:3001
```

Variabilele de mediu sunt în `.env.example`.

Test MAIB (sandbox):

```sh
node --env-file=.env scripts/maib-test-payment.mjs
```
