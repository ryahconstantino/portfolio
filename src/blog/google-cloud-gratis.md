# Google Cloud Grátis

O Google Cloud oferece US$ 300 em créditos e o nível Always Free com vários recursos gratuitos.

## Recursos Always Free

- **1 VM f1-micro** (30 GB HDD) por mês
- **Cloud Functions** (2 milhões de chamadas/mês)
- **Cloud Storage** (5 GB)
- **Cloud Build** (120 minutos/dia)
- **Firestore** (1 GB)

## Criar VM (Compute Engine)

1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. Compute Engine > VM Instances
3. Create Instance
4. Escolha f1-micro (Always Free)
5. Selecione Boot Disk (30 GB)
6. Allow HTTP/HTTPS traffic
7. Create

## Conectar via SSH

```bash
gcloud compute ssh nome-da-vm --zone=us-central1-a
```

## Instalar Cloud SDK

```bash
# Linux
sudo apt install google-cloud-sdk

# Iniciar sessão
gcloud init
```

## Cloud Storage

```bash
gsutil mb gs://seu-bucket
gsutil cp arquivo.txt gs://seu-bucket
```

## Mais

Documentação: [cloud.google.com/free](https://cloud.google.com/free)
