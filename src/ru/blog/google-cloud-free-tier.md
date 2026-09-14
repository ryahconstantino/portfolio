# Бесплатные ресурсы Google Cloud

Google Cloud предлагает 300 долларов США в виде кредитов и постоянно бесплатный уровень с несколькими ресурсами.

## Постоянно бесплатные ресурсы

- **1 виртуальная машина f1-micro** с жёстким диском 30 ГБ в месяц.
- **Cloud Functions** — 2 миллиона вызовов в месяц.
- **Cloud Storage** — 5 ГБ.
- **Cloud Build** — 120 минут в день.
- **Firestore** — 1 ГБ.

## Создание виртуальной машины в Compute Engine

1. Откройте [консоль Google Cloud](https://console.cloud.google.com).
2. Перейдите в Compute Engine и список экземпляров виртуальных машин.
3. Выберите создание экземпляра.
4. Выберите f1-micro на постоянно бесплатном уровне.
5. Выберите загрузочный диск на 30 ГБ.
6. Разрешите трафик HTTP/HTTPS.
7. Создайте экземпляр.

## Подключение по SSH

```bash
gcloud compute ssh vm-name --zone=us-central1-a
```

## Установка комплекта инструментов Cloud SDK

```bash
# Linux
sudo apt install google-cloud-sdk

# Начало сеанса
gcloud init
```

## Хранилище Cloud Storage

```bash
gsutil mb gs://your-bucket
gsutil cp file.txt gs://your-bucket
```

## Дополнительные материалы

[Документация о бесплатных ресурсах Google Cloud](https://cloud.google.com/free).
