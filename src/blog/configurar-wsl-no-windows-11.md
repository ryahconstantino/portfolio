# Configurar WSL no Windows 11

WSL (Windows Subsystem for Linux) permite rodar Linux diretamente no Windows sem máquina virtual.

## Instalar WSL

Abra o **PowerShell como Administrador** e execute:

```powershell
wsl --install
```

Isso instala o WSL 2 e a distribuição Ubuntu padrão.

## Verificar versão

```powershell
wsl --version
wsl -l -v
```

## Instalar outra distribuição

```powershell
wsl --list --online
wsl --install -d Debian
```

## Comandos úteis

```powershell
# Encerrar WSL
wsl --shutdown

# Definir versão padrão
wsl --set-default-version 2

# Exportar/Importar
wsl --export Ubuntu ubuntu.tar
wsl --import Ubuntu-novo caminho ubuntu.tar
```

## Acessar arquivos do Windows

No terminal Linux do WSL:

```bash
cd /mnt/c/Users/seu-nome/
ls
```

## Configurar acesso via localhost

Por padrão, serviços rodando no WSL (como Laravel, Nginx) já ficam acessíveis em `localhost` no navegador Windows.

## Dicas

- Use o **Windows Terminal** (Microsoft Store) para gerenciar múltiplos terminais
- Instale o Docker Desktop com integração WSL2 para rodar containers nativamente
- Ative o systemd com `wsl.conf` para serviços como Docker

## Mais

Documentação: [learn.microsoft.com/wsl](https://learn.microsoft.com/pt-br/windows/wsl/)
