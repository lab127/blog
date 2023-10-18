---
title: Cara Membuat File tar.gz di Windows dengan 7-Zip
excerpt: Membuat File tar.gz di Windows dengan 7-Zip Seperti Di Linux
author: lab127
image: targz.jpg
date: 2019-03-07
categories:
  - windows
tags: 
  - compress
  - 7zip
  - extract
---

### SETUP ENVIRONMENT VARIABLES

Sebelum kita mulai, download dulu 7-Zip [di sini](https://www.7-zip.org/download.html), kemudian install di komputer.

1. Klik kanan `Computer or This PC (windows 10)`
2. Pilih `Properties`
3. Di sidebar kiri klik `Advanced system settings`
4. Pada bagian bawah klik `Environment Variables`
5. Di bawah `user variables`, pilih `PATH` dan edit
6. Add `C:\Program Files\7-Zip` di variable value, jika menggunakan windows 7 atau sebelumnya tambahkan `C:\Program Files\7-Zip;` di bagian awal baris. Jangan lupa semicolon!
7. Klik Ok dan Ok

### 7-Zip Lewat CMD (Command Line)

Di keyboard pencet tombol `windows + r` kemudian ketik `7z` untuk mengecek apakah berjalan, Jika tidak ada peringatan apapun berarti OK, Jika ada error silahkan ulangi bagian setup environment variable.

###### Buat .tar.gz:

```ssh
7z a -ttar -so filename.tar foldername/ | 7z a -si filename.tar.gz
```

###### Extract .tar.gz:

```ssh
7z x filename.tar.gz -so | 7z x -si -ttar
```

## LINUX

###### Create .tar.gz:

```ssh
tar -zcvf filename.tar.gz foldername/
```

###### Extract .tar.gz:

```ssh
tar -zxvf filename.tar.gz -C foldername/
```

Demikian, semoga bermanfaat.
