# Настройка WSL в Windows 11

WSL — подсистема Windows для Linux, позволяющая запускать Linux непосредственно в Windows без отдельной виртуальной машины.

## Установка WSL

Откройте **PowerShell от имени администратора** и выполните:

```powershell
wsl --install
```

Команда устанавливает WSL 2 и стандартный дистрибутив Ubuntu.

## Проверка версии

```powershell
wsl --version
wsl -l -v
```

## Установка другого дистрибутива

```powershell
wsl --list --online
wsl --install -d Debian
```

## Полезные команды

```powershell
# Завершение работы WSL
wsl --shutdown

# Версия по умолчанию
wsl --set-default-version 2

# Экспорт и импорт
wsl --export Ubuntu ubuntu.tar
wsl --import Ubuntu-new path ubuntu.tar
```

## Доступ к файлам Windows

В терминале Linux внутри WSL:

```bash
cd /mnt/c/Users/your-name/
ls
```

## Доступ через localhost

Сервисы, работающие в WSL, например Laravel и Nginx, доступны по адресу `localhost` в браузере Windows.

## Советы

- Используйте **Windows Terminal** из магазина Microsoft для управления несколькими терминалами.
- Установите Docker Desktop с интеграцией WSL2 для запуска контейнеров.
- Включите systemd через `wsl.conf` для сервисов вроде Docker.

## Дополнительные материалы

[Документация WSL](https://learn.microsoft.com/ru-ru/windows/wsl/).
