# Configure WSL on Windows 11

WSL (Windows Subsystem for Linux) allows you to run Linux directly on Windows without a virtual machine.

## Install WSL

Open **PowerShell as Administrator** and run:

```powershell
wsl --install
```

This installs WSL 2 and the default Ubuntu distribution.

## Check version

```powershell
wsl --version
wsl -l -v
```

## Install another distribution

```powershell
wsl --list --online
wsl --install -d Debian
```

## Useful commands

```powershell
# Shutdown WSL
wsl --shutdown

# Set default version
wsl --set-default-version 2

# Export/Import
wsl --export Ubuntu ubuntu.tar
wsl --import Ubuntu-new path ubuntu.tar
```

## Access Windows files

In the Linux WSL terminal:

```bash
cd /mnt/c/Users/your-name/
ls
```

## Access via localhost

Services running on WSL (like Laravel, Nginx) are accessible at `localhost` in the Windows browser.

## Tips

- Use **Windows Terminal** (Microsoft Store) to manage multiple terminals
- Install Docker Desktop with WSL2 integration to run containers natively
- Enable systemd with `wsl.conf` for services like Docker

## More

Documentation: [learn.microsoft.com/wsl](https://learn.microsoft.com/en-us/windows/wsl/)
