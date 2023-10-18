---
title: Mysqldump Export Import Sql File
excerpt: Cara Export Import di MySql Dengan Terminal
author: lab127
image: banner-mysql.jpg
date: 2019-03-04
categories:
  - mysql
tags: 
  - mysqldump
  - mysql-cli
---

### Import

Buka SSH terminal linux atau putty untuk windows, kemudian ketik command seperti di bawah ini:

```ssh
$ mysql -u username -p -h localhost DATA-BASE-NAME < data.sql
```

Berikut contoh import `data.sql` file ke database `blog` dengan username `admin`:

```ssh
$ mysql -u admin -p -h localhost blog < data.sql
```

Jika menggunakan dedicated database server, ganti `localhost` hostname dengan ip tujuan seperti di bawah ini:

```ssh
$ mysql -u username -p -h 202.54.1.10 databasename < data.sql
```

### Export

Berikut command line unutk export satu table

```ssh
mysqldump -u username -p databasename tablename > filename.sql
```

Untuk export satu set database komplit

```ssh
mysqldump -u username -p databasename > filename.sql
```

Perlu diperhatikan tanda `<` dan `>` tiap perintah.
