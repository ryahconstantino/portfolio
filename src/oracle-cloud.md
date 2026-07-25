# Oracle Cloud Grátis

A Oracle Cloud oferece um plano Always Free com recursos generosos para aprender e hospedar projetos.

## Recursos Always Free

- **2 AMD VMs** (1 GB RAM, 1 OCPU cada)
- **4 ARM VMs** (24 GB RAM, 4 OCPU total)
- **200 GB de armazenamento em blocos**
- **10 GB de Object Storage**
- **10 GB de bandwidth mensal**

## Criar VM AMD

1. Acesse [cloud.oracle.com](https://cloud.oracle.com)
2. Menu > Compute > Instances
3. Create Instance
4. Escolha imagem Ubuntu ou Oracle Linux
5. Sime em SSH key pair
6. Create

## Criar VM ARM (Ampere)

Mesmo processo da AMD, mas selecione "Ampere" como shape. Ideal para aplicações 24/7.

## Conectar via SSH

```bash
chmod 400 sua-chave.key
ssh -i sua-chave.key ubuntu@IP-DA-VM
```

## Liberar porta no firewall

```bash
sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables-save
```

## Mais

Documentação: [docs.oracle.com](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier.htm)
