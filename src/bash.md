# Como usar o Bash

O Bash é um interpretador de comandos amplamente usado em sistemas Linux e macOS.

## Comandos básicos

```bash
pwd          # diretório atual
ls           # listar arquivos
cd /caminho  # navegar
mkdir pasta  # criar diretório
rm arquivo   # remover arquivo
cp origem destino  # copiar
mv origem destino  # mover/renomear
```

## Permissões

```bash
chmod +x script.sh   # tornar executável
chmod 755 arquivo    # permissão numérica
chown usuario:grupo  # alterar dono
```

## Script básico

Crie um arquivo `ola.sh`:

```bash
#!/bin/bash
echo "Olá, mundo!"
```

Execute com:

```bash
chmod +x ola.sh
./ola.sh
```

## Loops e condicionais

```bash
for i in {1..5}; do
    echo "Número $i"
done

if [ -f "arquivo.txt" ]; then
    echo "Arquivo existe"
fi
```

## Mais

Documentação: [gnu.org/bash](https://www.gnu.org/software/bash/manual/)
