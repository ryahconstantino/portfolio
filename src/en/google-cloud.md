# Google Cloud Free Tier

Google Cloud offers US$ 300 in credits and an Always Free tier with several free resources.

## Always Free Resources

- **1 f1-micro VM** (30 GB HDD) per month
- **Cloud Functions** (2 million calls/month)
- **Cloud Storage** (5 GB)
- **Cloud Build** (120 minutes/day)
- **Firestore** (1 GB)

## Create VM (Compute Engine)

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Compute Engine > VM Instances
3. Create Instance
4. Choose f1-micro (Always Free)
5. Select Boot Disk (30 GB)
6. Allow HTTP/HTTPS traffic
7. Create

## Connect via SSH

```bash
gcloud compute ssh vm-name --zone=us-central1-a
```

## Install Cloud SDK

```bash
# Linux
sudo apt install google-cloud-sdk

# Start session
gcloud init
```

## Cloud Storage

```bash
gsutil mb gs://your-bucket
gsutil cp file.txt gs://your-bucket
```

## More

Documentation: [cloud.google.com/free](https://cloud.google.com/free)
