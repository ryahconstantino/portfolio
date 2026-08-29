# Oracle Cloud Free Tier

Oracle Cloud offers an Always Free plan with generous resources for learning and hosting projects.

## Always Free Resources

- **2 AMD VMs** (1 GB RAM, 1 OCPU each)
- **4 ARM VMs** (24 GB RAM, 4 OCPU total)
- **200 GB block storage**
- **10 GB Object Storage**
- **10 GB monthly bandwidth**

## Create AMD VM

1. Go to [cloud.oracle.com](https://cloud.oracle.com)
2. Menu > Compute > Instances
3. Create Instance
4. Choose Ubuntu or Oracle Linux image
5. Download SSH key pair
6. Create

## Create ARM VM (Ampere)

Same process as AMD, but select "Ampere" as shape. Ideal for 24/7 applications.

## Connect via SSH

```bash
chmod 400 your-key.key
ssh -i your-key.key ubuntu@VM-IP
```

## Open port in firewall

```bash
sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables-save
```

## More

Documentation: [docs.oracle.com](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier.htm)
