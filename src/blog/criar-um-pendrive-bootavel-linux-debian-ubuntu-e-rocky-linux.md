# Criar um pendrive bootável Linux: Debian, Ubuntu e Rocky Linux

Este guia prepara um pendrive de instalação para Debian, Ubuntu ou Rocky Linux. O processo **apaga todo o conteúdo do pendrive**; faça backup antes e confira o dispositivo duas vezes.

## 1. Baixe a ISO oficial e confira a integridade

Baixe a imagem somente nos sites oficiais: [Debian](https://www.debian.org/distrib/), [Ubuntu](https://ubuntu.com/download) ou [Rocky Linux](https://rockylinux.org/download/). Prefira a arquitetura `amd64` para PCs Intel/AMD recentes, salvo se você souber que o equipamento usa outra arquitetura.

Quando houver arquivo de checksums, valide a ISO antes de gravar. No Linux:

```bash
sha256sum nome-da-imagem.iso
```

Compare o resultado com o checksum publicado pela distribuição. O Rocky Linux disponibiliza um arquivo `CHECKSUM` e documenta a validação com `sha256sum -c CHECKSUM --ignore-missing`.

## 2. Grave a imagem no pendrive

Use um pendrive de pelo menos 8 GB. Gravar uma ISO não é copiar o arquivo para o pendrive: a ferramenta precisa escrever a imagem de inicialização.

### No Windows ou macOS

- **Ubuntu:** o [guia oficial](https://documentation.ubuntu.com/desktop/en/latest/how-to/create-a-bootable-usb-stick/) recomenda um gravador de imagens; o balenaEtcher é uma opção multiplataforma.
- **Debian:** ao usar Rufus, selecione o modo **DD** quando ele perguntar. O modo ISO pode alterar a imagem de instalação.
- **Rocky Linux:** prefira Fedora Media Writer ou outro gravador que faça escrita bruta. A documentação do Rocky Linux desaconselha Rufus e ferramentas que não preservam imagens isohybrid.

Selecione a ISO, confirme o pendrive correto e inicie a gravação. Espere a verificação terminar antes de removê-lo.

### No Linux, com `dd`

Este método é para quem sabe identificar discos. Primeiro conecte o pendrive e confira o nome do dispositivo inteiro, como `/dev/sdb`. **Não use uma partição**, como `/dev/sdb1`:

```bash
lsblk --scsi
sudo umount /dev/sdX*
sudo dd if=/caminho/da-imagem.iso of=/dev/sdX bs=4M conv=fsync status=progress
sync
```

Troque `sdX` pelo pendrive real. Se escolher o disco do sistema, o comando apagará o sistema. A documentação do Ubuntu também recomenda revisar o dispositivo antes da escrita.

## 3. Inicialize pelo pendrive

Com o computador desligado, conecte o pendrive e ligue-o. Abra o menu de boot: as teclas mais comuns são `F12`, `Esc`, `F2` e `F10`, mas variam por fabricante. Escolha a entrada USB em modo UEFI quando ela estiver disponível.

- **Debian:** siga o instalador, confirme idioma, rede, usuários e o particionamento. Revise o disco de destino antes de confirmar.
- **Ubuntu:** escolha experimentar ou instalar. A sessão “Try Ubuntu” permite testar Wi-Fi, vídeo e periféricos antes de alterar o disco.
- **Rocky Linux:** escolha “Test this media & install” para testar a imagem antes da instalação. Na tela de destino, confirme o disco e o método de particionamento.

## 4. Depois da instalação

Remova o pendrive quando o instalador solicitar, reinicie e aplique as atualizações iniciais. Em servidores, crie um usuário comum com `sudo`, configure atualizações de segurança e só então exponha serviços como Nginx à internet.

## Fontes oficiais

- [Criar pendrive bootável do Ubuntu](https://documentation.ubuntu.com/desktop/en/latest/how-to/create-a-bootable-usb-stick/)
- [Instalar Debian e preparar mídia USB](https://wiki.debian.org/DebianInstall)
- [Instalar Rocky Linux](https://docs.rockylinux.org/guides/installation/)
- [Imagens e métodos de gravação do Rocky Linux](https://docs.rockylinux.org/latest/teams/rel_eng/image/)
