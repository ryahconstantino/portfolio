# Create a bootable Linux USB: Debian, Ubuntu and Rocky Linux

This guide prepares a USB installation drive for Debian, Ubuntu or Rocky Linux. The process **erases all data on the USB drive**; back up its files first and confirm the selected device twice.

## 1. Download the official ISO and verify it

Download an image only from the official [Debian](https://www.debian.org/distrib/), [Ubuntu](https://ubuntu.com/download) or [Rocky Linux](https://rockylinux.org/download/) websites. Choose the `amd64` architecture for most recent Intel/AMD PCs unless you know the machine uses another architecture.

When a checksum file is available, verify the ISO before writing it. On Linux:

```bash
sha256sum image-name.iso
```

Compare the result with the checksum published by the distribution. Rocky Linux provides a `CHECKSUM` file and documents verification with `sha256sum -c CHECKSUM --ignore-missing`.

## 2. Write the image to the USB drive

Use an 8 GB USB drive or larger. Writing an ISO is not the same as copying it: the tool must write a bootable disk image.

### On Windows or macOS

- **Ubuntu:** the [official guide](https://documentation.ubuntu.com/desktop/en/latest/how-to/create-a-bootable-usb-stick/) recommends an image writer; balenaEtcher is a cross-platform option.
- **Debian:** when using Rufus, choose **DD** mode when prompted. ISO mode can alter the installation image.
- **Rocky Linux:** prefer Fedora Media Writer or another raw-image writer. Rocky Linux advises against Rufus and tools that do not preserve isohybrid images.

Choose the ISO, confirm the correct USB drive and start writing. Wait for verification to finish before removing it.

### On Linux, with `dd`

This method is for people who know how to identify disks. Connect the USB drive and confirm its whole-device name, such as `/dev/sdb`. **Do not use a partition** such as `/dev/sdb1`:

```bash
lsblk --scsi
sudo umount /dev/sdX*
sudo dd if=/path/to/image.iso of=/dev/sdX bs=4M conv=fsync status=progress
sync
```

Replace `sdX` with the actual USB drive. Selecting the system disk will erase it. Ubuntu also recommends reviewing the target device before writing.

## 3. Boot from the USB drive

With the computer turned off, plug in the USB drive and power it on. Open the boot menu: common keys are `F12`, `Esc`, `F2` and `F10`, but they vary by manufacturer. Choose the UEFI USB entry when available.

- **Debian:** follow the installer for language, network, users and partitioning. Review the destination disk before confirming.
- **Ubuntu:** choose to try or install. The “Try Ubuntu” session lets you test Wi-Fi, graphics and peripherals before changing a disk.
- **Rocky Linux:** choose “Test this media & install” to test the image before installation. At the destination screen, confirm the disk and partitioning method.

## 4. After installation

Remove the USB drive when prompted, restart, then apply initial updates. On servers, create a regular `sudo` user, configure security updates and only then expose services such as Nginx to the internet.

## Official sources

- [Create a bootable Ubuntu USB](https://documentation.ubuntu.com/desktop/en/latest/how-to/create-a-bootable-usb-stick/)
- [Install Debian and prepare USB media](https://wiki.debian.org/DebianInstall)
- [Install Rocky Linux](https://docs.rockylinux.org/guides/installation/)
- [Rocky Linux images and writing methods](https://docs.rockylinux.org/latest/teams/rel_eng/image/)
