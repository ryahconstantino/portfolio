# How to use Bash

Bash is a command interpreter widely used on Linux and macOS systems.

## Basic commands

```bash
pwd          # current directory
ls           # list files
cd /path     # navigate
mkdir folder # create directory
rm file      # remove file
cp source destination  # copy
mv source destination  # move/rename
```

## Permissions

```bash
chmod +x script.sh   # make executable
chmod 755 file       # numeric permission
chown user:group     # change owner
```

## Basic script

Create a file `hello.sh`:

```bash
#!/bin/bash
echo "Hello, world!"
```

Run with:

```bash
chmod +x hello.sh
./hello.sh
```

## Loops and conditionals

```bash
for i in {1..5}; do
    echo "Number $i"
done

if [ -f "file.txt" ]; then
    echo "File exists"
fi
```

## More

Documentation: [gnu.org/bash](https://www.gnu.org/software/bash/manual/)
