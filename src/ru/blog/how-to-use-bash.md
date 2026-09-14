# Как использовать Bash

Bash — командный интерпретатор, широко используемый в Linux и macOS.

## Основные команды

```bash
pwd          # текущий каталог
ls           # список файлов
cd /path     # переход в каталог
mkdir folder # создание каталога
rm file      # удаление файла
cp source destination  # копирование
mv source destination  # перемещение или переименование
```

## Права доступа

```bash
chmod +x script.sh   # разрешить выполнение
chmod 755 file       # числовая запись прав доступа
chown user:group     # сменить владельца
```

## Простой сценарий

Создайте файл `hello.sh`:

```bash
#!/bin/bash
echo "Привет, мир!"
```

Запустите его:

```bash
chmod +x hello.sh
./hello.sh
```

## Циклы и условия

```bash
for i in {1..5}; do
    echo "Число $i"
done

if [ -f "file.txt" ]; then
    echo "Файл существует"
fi
```

## Дополнительные материалы

[Документация Bash](https://www.gnu.org/software/bash/manual/).
